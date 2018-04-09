"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("./log");
const util_1 = require("./util");
const Promise = require("bluebird");
const electron_1 = require("electron");
const fs = require("fs-extra-promise");
const opn = require("opn");
const os = require("os");
const path = require("path");
// could be a bit more dynamic but how often is this going to change?
const repo = 'Nexus-Mods/Vortex';
const repoURL = 'https://github.com/' + repo;
function createTitle(type, error, hash) {
    return `${type}: ${error.message} (hash: ${hash})`;
}
function createReport(type, error, version) {
    const sections = [
        `#### System
| | |
|------------ | -------------|
|Platform | ${process.platform} ${os.release()} |
|Architecture | ${process.arch} |
|Application Version | ${version} |`,
        `#### Message
${error.message}`,
    ];
    if (error.details) {
        sections.push(`#### Details
\`\`\`
${error.details}
\`\`\``);
    }
    if (error.stack) {
        sections.push(`#### Stack
\`\`\`
${error.stack}
\`\`\``);
    }
    return `### Application ${type}\n` + sections.join('\n');
}
function genHash(error) {
    const { createHash } = require('crypto');
    const hash = createHash('md5');
    if (error.stack !== undefined) {
        // this attempts to remove everything "dynamic" about the error message so that
        // the hash is only calculated on the static part so we can group them
        const hashStack = error.stack
            .split('\n')
            .map(line => line
            .replace(/\([^)]*\)$/, '')
            .replace(/'[^']*'/, '').replace(/"[^"]*"/, ''))
            .join('\n');
        return hash.update(hashStack).digest('hex');
    }
    else {
        return hash.update(error.message).digest('hex');
    }
}
exports.genHash = genHash;
function createErrorReport(type, error, labels = []) {
    const app = electron_1.app || electron_1.remote.app;
    const reportPath = path.join(app.getPath('userData'), 'crashinfo.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        type, error, labels
    }));
    util_1.spawnSelf(['--report', reportPath]);
}
exports.createErrorReport = createErrorReport;
// unused code for reporting to github directly
// TODO: remove eventually. If this gets reactivated for some reason, please replace
//   node-rest-client with request
/*
function githubReport(hash: string, type: string, error: IError, labels: string[]): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const { Client } = require('node-rest-client') as typeof restT;
    const client = new Client();
    client.get(
      `https://api.github.com/repos/${repo}/search/issues`,
      {
        q: hash,
      },
      (data, response) => {
        const app = appIn || remote.app;
        const dialog = dialogIn || remote.dialog;

        let url: string;
        if ((response.statusCode === 200) && (data.items.length > 0)) {
          const action = dialog.showMessageBox(null, {
            type: 'error',
            buttons: ['Take me there'],
            title: 'Already reported',
            message: 'It appears this exact issue was already reported.',
            noLink: true,
          });
          url = data.items[0].html_url;
        } else {
          clipboard.writeText(createReport(type, error, app.getVersion()));

          const title = encodeURIComponent(createTitle(type, error, hash));
          const body =
            'Please paste the content of your clipboard here and describe what you did ' +
            'when the error happened.';

          const labelFragments =
            labels.map((str: string) => `labels[]=${str}`).join('&');

          url =
            `${repoURL}/issues/new?title=${title}&${labelFragments}&body=${body}`;
        }
        shell.openExternal(url);
        resolve();
      });
  });
}
*/
function nexusReport(hash, type, error, labels) {
    const app = electron_1.app || electron_1.remote.app;
    const Nexus = require('nexus-api').default;
    const referenceId = require('uuid').v4();
    const nexus = new Nexus(undefined, '');
    return Promise.resolve(nexus.sendFeedback(createReport(type, error, app.getVersion()), undefined, true, hash, referenceId))
        .then(() => opn(`https://www.nexusmods.com/crash-report/?key=${referenceId}`).catch(err => undefined))
        .then(() => undefined);
}
function sendReport(fileName) {
    return fs.readFileAsync(fileName)
        .then(reportData => {
        const { type, error, labels } = JSON.parse(reportData.toString());
        const hash = genHash(error);
        return nexusReport(hash, type, error, labels);
    });
}
exports.sendReport = sendReport;
/**
 * display an error message and quit the application
 * on confirmation.
 * Use this whenever the application state is unknown and thus
 * continuing could lead to data loss
 *
 * @export
 * @param {ITermination} error
 */
function terminate(error) {
    const app = electron_1.app || electron_1.remote.app;
    const dialog = electron_1.dialog || electron_1.remote.dialog;
    log_1.log('error', 'unrecoverable error', error);
    try {
        let detail = (error.stack || 'No stack');
        if (error.details) {
            detail = error.details + '\n' + detail;
        }
        let action = dialog.showMessageBox(null, {
            type: 'error',
            buttons: ['Ignore', 'Quit', 'Report and Quit'],
            defaultId: 2,
            title: 'An unrecoverable error occured',
            message: error.message,
            detail,
            noLink: true,
        });
        if (action === 2) {
            // Report
            createErrorReport('Crash', error, ['bug', 'crash']);
        }
        else if (action === 0) {
            // Ignore
            action = dialog.showMessageBox(null, {
                type: 'error',
                buttons: ['Quit', 'I won\'t whine'],
                title: 'Are you sure?',
                message: 'This error was unhandled and so there is ' +
                    'no way to know what subsequent errors this ' +
                    'may cause. You may lose data!\n' +
                    'We ask that you refrain from reporting issues ' +
                    'that happen from here on out in this session.',
                noLink: true,
            });
            if (action === 1) {
                return;
            }
        }
        if (error.extension !== undefined) {
            action = dialog.showMessageBox(null, {
                type: 'error',
                buttons: ['Disable', 'Keep'],
                title: 'Extension crashed',
                message: `This crash was caused by an extension (${error.extension}). ` +
                    'Do you want to disable this extension?',
                noLink: true,
            });
            if (action === 0) {
                // can't access the store at this point because we won't be waiting for the store
                // to be persisted
                fs.writeFileSync(path.join(app.getPath('temp'), '__disable_' + error.extension), '');
            }
        }
    }
    catch (err) {
        // if the crash occurs before the application is ready, the dialog module can't be
        // used (except for this function)
        dialog.showErrorBox('An unrecoverable error occured', error.message + '\n' + error.details +
            '\nIf you think this is a bug, please report it to the ' +
            'issue tracker (github)');
    }
    app.exit(1);
}
exports.terminate = terminate;
