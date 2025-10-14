"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorReport = createErrorReport;
exports.setApiKey = setApiKey;
exports.setOauthToken = setOauthToken;
exports.setOutdated = setOutdated;
exports.isOutdated = isOutdated;
exports.didIgnoreError = didIgnoreError;
exports.disableErrorReport = disableErrorReport;
exports.sendReportFile = sendReportFile;
exports.sendReport = sendReport;
exports.setWindow = setWindow;
exports.getWindow = getWindow;
exports.getVisibleWindow = getVisibleWindow;
exports.terminate = terminate;
exports.toError = toError;
exports.setErrorContext = setErrorContext;
exports.clearErrorContext = clearErrorContext;
exports.withContext = withContext;
exports.contextify = contextify;
exports.getErrorContext = getErrorContext;
const constants_1 = require("../extensions/nexus_integration/constants");
const constants_2 = require("./constants");
const CustomErrors_1 = require("./CustomErrors");
const genHash_1 = require("./genHash");
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const i18n_1 = require("./i18n");
const log_1 = require("./log");
const message_1 = require("./message");
const opn_1 = __importDefault(require("./opn"));
const storeHelper_1 = require("./storeHelper");
const util_1 = require("./util");
const bluebird_1 = __importDefault(require("bluebird"));
const electron_1 = require("electron");
const fs = __importStar(require("fs-extra"));
const i18next_1 = __importDefault(require("i18next"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const semver = __importStar(require("semver"));
const util_2 = require("util");
const application_1 = require("./application");
const lazyRequire_1 = __importDefault(require("./lazyRequire"));
const nativeArch_1 = require("./nativeArch");
const remote = (0, lazyRequire_1.default)(() => require('@electron/remote'));
function createTitle(type, error, hash) {
    return `${type}: ${error.message}`;
}
const globalContext = {};
function isWine() {
    if (process.platform !== 'win32') {
        return false;
    }
    try {
        const winapi = require('winapi-bindings');
        return winapi.IsThisWine();
    }
    catch (err) {
        return false;
    }
}
function createReport(type, error, context, version, reporterProcess, sourceProcess) {
    let proc = reporterProcess || 'unknown';
    if (sourceProcess !== undefined) {
        proc = `${sourceProcess} -> ${proc}`;
    }
    const sections = [
        `#### System
| | |
|------------ | -------------|
|Platform | ${process.platform} ${os.release()} ${isWine() ? '(Wine)' : ''} |
|CPU Architecture | ${(0, nativeArch_1.getCPUArch)()} |
|Architecture | ${process.arch} |
|Application Version | ${version} |
|Process | ${proc} |`,
        `#### Message
${error.message}`,
    ];
    if (error.title) {
        sections.push(`#### Title
\`\`\`
${error.title}
\`\`\`
`);
    }
    if (error.details) {
        sections.push(`#### Details
\`\`\`
${error.details}
\`\`\``);
    }
    if (Object.keys(context).length > 0) {
        sections.push(`#### Context
\`\`\`
${Object.keys(context).map(key => `${key} = ${context[key]}`)}
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
function createErrorReport(type, error, context, labels, state, sourceProcess) {
    const userData = (0, getVortexPath_1.default)('userData');
    const reportPath = path.join(userData, 'crashinfo.json');
    fs.writeFileSync(reportPath, JSON.stringify({
        type, error, labels: labels || [], context,
        token: (0, storeHelper_1.getSafe)(state, ['confidential', 'account', 'nexus', 'OAuthCredentials'], undefined),
        reportProcess: process.type, sourceProcess,
        userData,
    }));
    (0, util_1.spawnSelf)(['--report', reportPath]);
}
function nexusReport(hash, type, error, labels, context, oauthToken, reporterProcess, sourceProcess, attachment) {
    const Nexus = require('@nexusmods/nexus-api').default;
    const referenceId = require('uuid').v4();
    const oauthCredentials = (oauthToken !== undefined) ? {
        fingerprint: oauthToken.fingerprint,
        refreshToken: oauthToken.refreshToken,
        token: oauthToken.token,
    } : undefined;
    const config = {
        id: constants_1.OAUTH_CLIENT_ID,
    };
    const anonymous = (oauthCredentials === undefined);
    return bluebird_1.default.resolve(Nexus.createWithOAuth(oauthCredentials, config, 'Vortex', (0, application_1.getApplication)().version, undefined))
        .then(nexus => nexus.sendFeedback(createTitle(type, error, hash), createReport(type, error, context, (0, application_1.getApplication)().version, reporterProcess, sourceProcess), attachment, anonymous, hash, referenceId))
        .tap(() => (0, opn_1.default)(`${constants_1.NEXUS_BASE_URL}/crash-report/?key=${referenceId}`).catch(() => null))
        .catch(err => {
        (0, log_1.log)('error', 'failed to report error to nexus', err.message);
        return undefined;
    });
}
let fallbackAPIKey;
let fallbackOauthToken;
let outdated = false;
let errorIgnored = false;
function setApiKey(key) {
    fallbackAPIKey = key;
}
function setOauthToken(token) {
    fallbackOauthToken = token;
}
function setOutdated(api) {
    var _a;
    if (process.env.NODE_ENV === 'development') {
        return;
    }
    const state = api.store.getState();
    const version = (0, application_1.getApplication)().version;
    if (((_a = state.persistent.nexus) === null || _a === void 0 ? void 0 : _a.newestVersion) !== undefined) {
        try {
            outdated = semver.lt(version, state.persistent.nexus.newestVersion);
        }
        catch (err) {
            // not really a big issue
            (0, log_1.log)('warn', 'failed to update outdated status', { message: err.message });
        }
    }
    api.onStateChange(['persistent', 'nexus', 'newestVersion'], (prev, next) => {
        outdated = semver.lt(version, next);
    });
}
function isOutdated() {
    return outdated;
}
function didIgnoreError() {
    return errorIgnored;
}
function disableErrorReport() {
    (0, log_1.log)('info', 'user ignored error, disabling reporting');
    errorIgnored = true;
}
if (electron_1.ipcRenderer !== undefined) {
    electron_1.ipcRenderer.on('did-ignore-error', () => {
        (0, log_1.log)('info', 'user ignored error, disabling reporting');
        errorIgnored = true;
    });
}
function sendReportFile(fileName) {
    let reportInfo;
    return bluebird_1.default.resolve(fs.readFile(fileName, { encoding: 'utf8' }))
        .then(reportData => {
        var _a;
        reportInfo = JSON.parse(reportData.toString());
        const userData = (_a = reportInfo['userData']) !== null && _a !== void 0 ? _a : (0, getVortexPath_1.default)('userData');
        // currently attaching a log for any crash-type report
        // if (reportInfo.error.attachLog) {
        return (0, message_1.bundleAttachment)({
            attachments: [{
                    id: 'logfile',
                    type: 'file',
                    data: path.join(userData, 'vortex.log'),
                    description: 'Vortex Log',
                }, {
                    id: 'logfile2',
                    type: 'file',
                    data: path.join(userData, 'vortex1.log'),
                    description: 'Vortex Log (old)',
                }],
        });
    })
        .then(attachment => {
        const { type, error, labels, token, reportProcess, sourceProcess, context } = reportInfo;
        return sendReport(type, error, context, labels, token, reportProcess, sourceProcess, attachment);
    });
}
function sendReport(type, error, context, labels, reporterToken, reporterProcess, sourceProcess, attachment) {
    const dialog = process.type === 'renderer' ? remote.dialog : electron_1.dialog;
    const hash = (0, genHash_1.genHash)(error);
    if (process.env.NODE_ENV === 'development') {
        const fullMessage = error.title !== undefined
            ? error.message + `\n(${error.title})`
            : error.message;
        dialog.showErrorBox(fullMessage, JSON.stringify({
            type, error, labels, context, reporterProcess, sourceProcess,
            attachment,
        }, undefined, 2));
        return bluebird_1.default.resolve(undefined);
    }
    else {
        return nexusReport(hash, type, error, labels, context, reporterToken || fallbackOauthToken, reporterProcess, sourceProcess, attachment);
    }
}
let defaultWindow = null;
function setWindow(window) {
    defaultWindow = window;
}
function getWindow() {
    return defaultWindow;
}
let currentWindow;
function getCurrentWindow() {
    if (currentWindow === undefined) {
        currentWindow = process.type === 'renderer'
            ? remote.getCurrentWindow() : null;
    }
    return currentWindow;
}
function getVisibleWindow(win) {
    var _a;
    if (!(0, util_1.truthy)(win)) {
        win = (_a = getCurrentWindow()) !== null && _a !== void 0 ? _a : getWindow();
    }
    return ((win !== null) && !win.isDestroyed() && win.isVisible())
        ? win
        : null;
}
function showTerminateError(error, state, source, allowReport, withDetails) {
    const dialog = process.type === 'renderer' ? remote.dialog : electron_1.dialog;
    const buttons = ['Ignore', 'Quit'];
    if (!withDetails) {
        buttons.unshift('Show Details');
    }
    if ((allowReport !== false) && !outdated && !errorIgnored) {
        buttons.push('Report and Quit');
    }
    const contextNow = Object.assign({}, globalContext);
    let detail = error.details;
    if (withDetails) {
        detail = (error.stack || '');
        if (error.path) {
            detail = 'File: ' + error.path + '\n' + detail;
        }
        if (error.code) {
            detail = error.code + '\n' + detail;
        }
        if (error.details) {
            detail = error.details + '\n' + detail;
        }
    }
    let action = dialog.showMessageBoxSync(getVisibleWindow(), {
        type: 'error',
        buttons,
        defaultId: buttons.length - 1,
        title: 'An unrecoverable error occurred',
        message: error.message,
        detail,
        noLink: true,
    });
    if (buttons[action] === 'Report and Quit') {
        // Report
        createErrorReport('Crash', error, contextNow, ['bug', 'crash'], state, source);
    }
    else if (buttons[action] === 'Ignore') {
        // Ignore
        action = dialog.showMessageBoxSync(getVisibleWindow(), {
            type: 'error',
            buttons: ['Quit', 'I understand'],
            title: 'Are you sure?',
            message: 'The error was unhandled which may lead to unforseen consequences including data loss. ' +
                'Continue at your own risk. Please do not report any issues that arise from here on out, as they are very likely to be caused by the unhandled error. ',
            noLink: true,
        });
        if (action === 1) {
            (0, log_1.log)('info', 'user ignored error, disabling reporting');
            errorIgnored = true;
            return true;
        }
    }
    else if (buttons[action] === 'Show Details') {
        return showTerminateError(error, state, source, allowReport, true);
    }
    return false;
}
/**
 * display an error message and quit the application
 * on confirmation.
 * Use this whenever the application state is unknown and thus
 * continuing could lead to data loss
 *
 * @export
 * @param {ITermination} error
 */
function terminate(error, state, allowReport, source) {
    const dialog = process.type === 'renderer' ? remote.dialog : electron_1.dialog;
    let win = process.type === 'renderer' ? remote.getCurrentWindow() : defaultWindow;
    if ((0, util_1.truthy)(win) && (win.isDestroyed() || !win.isVisible())) {
        win = null;
    }
    if ((allowReport === undefined) && (error.allowReport === false)) {
        allowReport = false;
    }
    if ((allowReport === undefined) && (error.extension !== undefined)) {
        allowReport = error.extension === constants_2.COMPANY_ID;
    }
    (0, log_1.log)('error', 'unrecoverable error', { error, process: process.type });
    try {
        if (showTerminateError(error, state, source, allowReport, false)) {
            // ignored
            return;
        }
        if (error.extension !== undefined) {
            const action = dialog.showMessageBoxSync(getVisibleWindow(), {
                type: 'error',
                buttons: ['Disable', 'Keep'],
                title: 'Extension crashed',
                message: `This crash was caused by an extension (${error.extension}). ` +
                    'Do you want to disable this extension? All functionality provided '
                    + 'by the extension will be removed from Vortex!',
                noLink: true,
            });
            if (action === 0) {
                (0, log_1.log)('warn', 'extension will be disabled after causing a crash', {
                    extId: error.extension,
                    error: error.message,
                    stack: error.stack,
                });
                // can't access the store at this point because we won't be waiting for the store
                // to be persisted
                fs.writeFileSync(path.join((0, getVortexPath_1.default)('temp'), '__disable_' + error.extension), '');
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
    (0, application_1.getApplication)().quit(1);
    throw new CustomErrors_1.UserCanceled();
}
/**
 * render error message for internal processing (issue tracker and such).
 * It's important this doesn't translate the error message or lose information
 */
function toError(input, title, options, sourceStack) {
    let ten = i18next_1.default.getFixedT('en');
    try {
        ten('dummy');
    }
    catch (err) {
        // can't actually be sure if i18next is initialized - especially if this is the
        // main process. We could use require('i18next').isInitialized but no clue if
        // that's reliable.
        ten = i18n_1.fallbackTFunc;
    }
    const subtitle = (options || {}).message;
    /* i18next-extract-disable-next-line */
    const t = (text) => ten(text, { replace: (options || {}).replace });
    if (input instanceof Error) {
        let stack = input.stack;
        if (sourceStack !== undefined) {
            stack += '\n\nReported from:\n' + sourceStack;
        }
        const flatErr = (0, util_1.flatten)(input);
        return {
            /* i18next-extract-disable-next-line */
            message: t(input.message),
            title,
            subtitle,
            stack,
            allowReport: input['allowReport'],
            details: Object.keys(flatErr)
                .filter(key => key !== 'allowReport')
                .map(key => `${key}: ${flatErr[key]}`)
                .join('\n'),
        };
    }
    switch (typeof input) {
        case 'object': {
            // object, but not an Error
            let message;
            let stack;
            if (!(0, util_1.truthy)(input) || ((0, util_1.getAllPropertyNames)(input).length === 0)) {
                // this is bad...
                message = `An empty error message was thrown: "${(0, util_2.inspect)(input)}"`;
            }
            else if ((input.error !== undefined) && (input.error instanceof Error)) {
                message = input.error.message;
                stack = input.error.stack;
            }
            else {
                message = input.message;
                if (input.message === undefined) {
                    if (input.error !== undefined) {
                        // not sure what this is but need to ensure not to drop any information
                        message = (0, util_2.inspect)(input.error);
                    }
                    else if (Object.keys(input).length > 0) {
                        // wtf is this???
                        message = (0, util_2.inspect)(input);
                    }
                    else {
                        message = 'An error occurred';
                    }
                }
                stack = input.stack;
            }
            if (sourceStack !== undefined) {
                if (stack === undefined) {
                    stack = sourceStack;
                }
                else {
                    stack += '\n\nReported from:\n' + sourceStack;
                }
            }
            const flatErr = (0, util_1.flatten)(input);
            let attributes = Object.keys(flatErr || {})
                .filter(key => key[0].toUpperCase() === key[0]);
            // if there are upper case characters, this is a custom, not properly typed, error object
            // with upper case attributes, intended to be displayed to the user.
            // Otherwise, who knows what this is, just send everything.
            if (attributes.length === 0) {
                attributes = (0, util_1.getAllPropertyNames)(flatErr || {})
                    .filter(key => ['message', 'error', 'stack', 'context'].indexOf(key) === -1);
            }
            const details = attributes.length === 0 ? undefined : attributes
                .map(key => key + ':\t' + input[key])
                .join('\n');
            return { message, title, subtitle, stack, details };
        }
        case 'string': {
            /* i18next-extract-disable-next-line */
            return { message: 'String exception: ' + t(input), title, subtitle };
        }
        default: {
            return { message: 'Unknown exception: ' + (0, util_2.inspect)(input), title, subtitle };
        }
    }
}
/**
 * set an error context, that will be reported with every error reported.
 * Please keep in mind that the error context will remain set
 * until it's cleared with clearErrorContext and use "withContext" where possible
 * to ensure the context gets reset
 * @param id context id
 * @param value context value
 */
function setErrorContext(id, value) {
    globalContext[id] = value;
}
/**
 * clear an error context
 * @param id id of the context
 */
function clearErrorContext(id) {
    delete globalContext[id];
}
/**
 * execute a function with the specified error context
 * @param id identifier of the context to set
 * @param value context value
 * @param fun the function to set
 */
function withContext(id, value, fun) {
    setErrorContext(id, value);
    return fun().finally(() => {
        clearErrorContext(id);
    });
}
/**
 * attach context to an error that may be caught after the global context has been reset
 * @param err the error to add context to
 */
function contextify(err) {
    err.context = getErrorContext();
    return err;
}
function getErrorContext() {
    return Object.assign({}, globalContext);
}
