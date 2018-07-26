"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExtensionManager_1 = require("./ExtensionManager");
const log_1 = require("./log");
const storeHelper_1 = require("./storeHelper");
const util_1 = require("./util");
const Promise = require("bluebird");
const electron_1 = require("electron");
const fs = require("fs-extra-promise");
const i18next_1 = require("i18next");
const os = require("os");
const path = require("path");
// tslint:disable-next-line:no-var-requires
const opn = require('opn');
// could be a bit more dynamic but how often is this going to change?
const repo = 'Nexus-Mods/Vortex';
function createTitle(type, error, hash) {
    return `${type}: ${error.message}`;
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
    if (error.path) {
        sections.push(`#### Path
\`\`\`
${error.path}
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
            // remove the file names from stack lines because they contain local paths
            .replace(/\([^)]*\)$/, '')
            // remove everything in quotes to get file names and such out of the error message
            .replace(/'[^']*'/g, '').replace(/"[^"]*"/g, ''));
        const idx = hashStack.findIndex(line => (line.indexOf('Promise._settlePromiseFromHandler') !== -1)
            || (line.indexOf('MappingPromiseArray._promiseFulfilled') !== -1));
        if (idx !== -1) {
            hashStack.splice(idx);
        }
        return hash.update(hashStack.join('\n')).digest('hex');
    }
    else {
        return hash.update(error.message).digest('hex');
    }
}
exports.genHash = genHash;
function createErrorReport(type, error, labels, state) {
    const app = electron_1.app || electron_1.remote.app;
    const reportPath = path.join(app.getPath('userData'), 'crashinfo.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        type, error, labels: labels || [],
        reporterId: storeHelper_1.getSafe(state, ['confidential', 'account', 'nexus', 'APIKey'], undefined),
    }));
    util_1.spawnSelf(['--report', reportPath]);
}
exports.createErrorReport = createErrorReport;
function nexusReport(hash, type, error, labels, apiKey) {
    const app = electron_1.app || electron_1.remote.app;
    const Nexus = require('nexus-api').default;
    const referenceId = require('uuid').v4();
    const nexus = new Nexus(undefined, apiKey, app.getVersion());
    return Promise.resolve(nexus.sendFeedback(createTitle(type, error, hash), createReport(type, error, app.getVersion()), undefined, apiKey === undefined, hash, referenceId))
        .tap(() => {
        opn(`https://www.nexusmods.com/crash-report/?key=${referenceId}`);
    })
        .catch(err => {
        log_1.log('error', 'failed to report error to nexus', err.message);
        return undefined;
    });
}
let fallbackAPIKey;
function setApiKey(key) {
    fallbackAPIKey = key;
}
exports.setApiKey = setApiKey;
function sendReportFile(fileName) {
    return fs.readFileAsync(fileName)
        .then(reportData => {
        const { type, error, labels, reporterId } = JSON.parse(reportData.toString());
        return sendReport(type, error, labels, reporterId);
    });
}
exports.sendReportFile = sendReportFile;
function sendReport(type, error, labels, reporterId) {
    const hash = genHash(error);
    return nexusReport(hash, type, error, labels, reporterId || fallbackAPIKey);
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
function terminate(error, state, allowReport) {
    const app = electron_1.app || electron_1.remote.app;
    const dialog = electron_1.dialog || electron_1.remote.dialog;
    const win = electron_1.remote !== undefined ? electron_1.remote.getCurrentWindow() : null;
    log_1.log('error', 'unrecoverable error', error);
    try {
        let detail = (error.stack || '');
        if (error.path) {
            detail = 'File: ' + error.path + '\n' + detail;
        }
        if (error.details) {
            detail = error.details + '\n' + detail;
        }
        const buttons = ['Ignore', 'Quit'];
        if (allowReport !== false) {
            buttons.push('Report and Quit');
        }
        let action = dialog.showMessageBox(win, {
            type: 'error',
            buttons,
            defaultId: buttons.length - 1,
            title: 'An unrecoverable error occurred',
            message: error.message,
            detail,
            noLink: true,
        });
        if (action === 2) {
            // Report
            createErrorReport('Crash', error, ['bug', 'crash'], state);
        }
        else if (action === 0) {
            // Ignore
            action = dialog.showMessageBox(win, {
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
            action = dialog.showMessageBox(win, {
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
        dialog.showErrorBox('An unrecoverable error occurred', error.message + '\n' + error.details +
            '\nIf you think this is a bug, please report it to the ' +
            'issue tracker (github)');
    }
    app.exit(1);
}
exports.terminate = terminate;
function findExtensionName(stack) {
    if (stack === undefined) {
        return undefined;
    }
    const stackSplit = stack.split('\n').filter(line => line.match(/^[ ]*at /));
    const extPaths = ExtensionManager_1.default.getExtensionPaths();
    const expression = `(${extPaths.join('|').replace(/\\/g, '\\\\')})[\\\\/]([^\\\\/]*)`;
    const re = new RegExp(expression);
    let extension;
    stackSplit.find((line) => {
        // regular expression to parse the extension name from the path in the last
        // line of the stack trace. if there is one.
        const match = line.match(re);
        if (match !== null) {
            extension = match[2];
            return true;
        }
        return false;
    });
    return extension;
}
function makeDetails(error) {
    const result = {
        message: 'Unknown',
        extension: findExtensionName(error.stack),
    };
    if ((error.message === undefined) && (error.stack === undefined)) {
        // no Error object
        result.message = require('util').inspect(error);
    }
    else {
        result.message = error.message;
        if (util_1.truthy(error.URL)) {
            result.message += `(request: ${error.URL})`;
        }
        result.stack = error.stack;
    }
    return result;
}
function toError(input, options) {
    switch (typeof input) {
        case 'object': {
            if ((input.message === undefined) && (input.stack === undefined)) {
                // not an error object, what is this??
                return { message: require('util').inspect(input) };
            }
            const message = input.message !== undefined
                ? i18next_1.t(input.message, { replace: (options || {}).replace, lng: 'en' })
                : undefined;
            return { message, stack: input.stack };
        }
        case 'string': {
            const message = i18next_1.t(input, { replace: (options || {}).replace, lng: 'en' });
            return { message };
        }
        default: {
            return { message: input };
        }
    }
}
exports.toError = toError;
