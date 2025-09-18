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
exports.calcDuration = calcDuration;
exports.showSuccess = showSuccess;
exports.showActivity = showActivity;
exports.showInfo = showInfo;
exports.bundleAttachment = bundleAttachment;
exports.showError = showError;
exports.prettifyNodeErrorMessage = prettifyNodeErrorMessage;
exports.renderError = renderError;
/* disable-eslint */
const notifications_1 = require("../actions/notifications");
const InstallManager_1 = require("../extensions/mod_management/InstallManager");
const exceptions_1 = require("../extensions/mod_management/util/exceptions");
const network_1 = require("../util/network");
const CustomErrors_1 = require("./CustomErrors");
const errorHandling_1 = require("./errorHandling");
const fs = __importStar(require("./fs"));
const log_1 = require("./log");
const util_1 = require("./util");
const bluebird_1 = __importDefault(require("bluebird"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const tmp_1 = require("tmp");
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const nativeErrors_1 = require("./nativeErrors");
const opn_1 = __importDefault(require("./opn"));
const GITHUB_PROJ = 'Nexus-Mods/Vortex';
function clamp(min, value, max) {
    return Math.max(max, Math.min(min, value));
}
/**
 * calculate a reasonable time to display a message based on the
 * amount of text.
 * This is quite crude because the reading speed differs between languages.
 * Japanese and Chinese for example where a single symbol has much more meaning
 * than a latin character the reading speed per symbol will be lower.
 *
 * @export
 * @param {number} messageLength
 * @returns
 */
function calcDuration(messageLength) {
    return clamp(2000, messageLength * 50, 7000);
}
/**
 * show a notification that some operation succeeded. This message has a timer based on
 * the message length
 *
 * @export
 * @template S
 * @param {Redux.Dispatch<S>} dispatch
 * @param {string} message
 * @param {string} [id]
 */
function showSuccess(dispatch, message, id) {
    // show message for 2 to 7 seconds, depending on message length
    dispatch((0, notifications_1.addNotification)({
        id,
        type: 'success',
        message,
        displayMS: calcDuration(message.length),
    }));
}
/**
 * show activity notification
 */
function showActivity(dispatch, message, id) {
    dispatch((0, notifications_1.addNotification)({
        id,
        type: 'activity',
        message,
    }));
}
/**
 * show an info notification. Please don't use this for important stuff as the message
 * has a timer based on message length
 *
 * @export
 * @template S
 * @param {Redux.Dispatch<S>} dispatch
 * @param {string} message
 * @param {string} [id]
 */
function showInfo(dispatch, message, id) {
    // show message for 2 to 7 seconds, depending on message length
    dispatch((0, notifications_1.addNotification)({
        id,
        type: 'info',
        message,
        displayMS: calcDuration(message.length),
    }));
}
function genGithubUrl(issueId) {
    return `https://github.com/Nexus-Mods/Vortex/issues/${issueId}`;
}
function genFeedbackText(response, githubInfo) {
    const lines = [
        'Thank you for your feedback!',
        '',
        'If you\'re reporting a bug, please don\'t forget to leave additional '
            + 'information in the form that should have opened in your webbrowser.',
        '',
    ];
    if (response.github_issue === undefined) {
        lines.push('Your feedback will be reviewed before it is published.');
    }
    else {
        if (((githubInfo !== undefined) && (githubInfo.state === 'closed'))
            || response.github_issue.issue_state === 'closed') {
            lines.push('This issue was reported before and seems to be fixed already. '
                + 'If you\'re not running the newest version of Vortex, please update.');
        }
        else if (((githubInfo !== undefined) && (githubInfo.comments >= 1))
            || (response.count > 1)) {
            lines.push('This is not the first report about this problem, so your report '
                + 'was added as a comment to the existing one.');
        }
        else {
            lines.push('You were the first to report this issue.');
        }
        const url = genGithubUrl(response.github_issue.issue_number);
        lines.push(`You can review the created issue on [url]${url}[/url]`);
    }
    return lines.join('[br][/br]');
}
const noReportErrors = ['ETIMEDOUT', 'ECONNREFUSED', 'ECONNABORTED', 'ENETUNREACH'];
function shouldAllowReport(err, options) {
    if (((options === null || options === void 0 ? void 0 : options.allowReport) === false)
        || ((options === null || options === void 0 ? void 0 : options.warning) === true)
        || (err instanceof CustomErrors_1.ThirdPartyError)) {
        return false;
    }
    return !noReportErrors.includes(err.code);
}
function dataToFile(id, input) {
    return new bluebird_1.default((resolve, reject) => {
        const data = Buffer.from(JSON.stringify(input));
        (0, tmp_1.file)({
            prefix: id,
            postfix: '.json',
        }, (err, tmpPath, fd, cleanup) => {
            if (err !== null) {
                return reject(err);
            }
            fs.writeAsync(fd, data, 0, data.byteLength, 0)
                .then(() => fs.closeAsync(fd))
                .then(() => {
                resolve(tmpPath);
            })
                .catch(innerErr => {
                (0, log_1.log)('error', 'failed to write attachment data to file', { error: innerErr.message });
                return reject(innerErr);
            });
        });
    });
}
function zipFiles(files) {
    if (files.length === 0) {
        return bluebird_1.default.resolve(undefined);
    }
    const Zip = require('node-7z');
    const task = new Zip();
    return new bluebird_1.default((resolve, reject) => {
        (0, tmp_1.tmpName)({
            postfix: '.7z',
        }, (err, tmpPath) => (err !== null)
            ? reject(err)
            : resolve(tmpPath));
    })
        .then(tmpPath => task.add(tmpPath, files, { ssw: true })
        .then(() => tmpPath));
}
function serializeAttachments(input) {
    if (input.type === 'file') {
        return input.data;
    }
    else {
        return dataToFile(input.id, input.data);
    }
}
function bundleAttachment(options) {
    if ((options === undefined)
        || (options.attachments === undefined)
        || (options.attachments.length === 0)) {
        return bluebird_1.default.resolve(undefined);
    }
    return bluebird_1.default.reduce(options.attachments, (accum, iter) => {
        if (iter.type === 'file') {
            return fs.statAsync(iter.data)
                .then(() => serializeAttachments(iter))
                .then((fileName) => {
                accum.push(fileName);
                return accum;
            })
                .catch(err => accum);
        }
        else {
            return serializeAttachments(iter)
                .then(fileName => {
                accum.push(fileName);
                return accum;
            });
        }
    }, [])
        .then(fileNames => zipFiles(fileNames));
}
/**
 * show an error notification with an optional "more" button that displays further details
 * in a modal dialog.
 *
 * @export
 * @param {Redux.Dispatch<S>} dispatch
 * @param {string} title
 * @param {any} [details] further details about the error (stack and such). The api says we only
 *                        want string or Errors but since some node apis return non-Error objects
 *                        where Errors are expected we have to be a bit more flexible here.
 */
function showError(dispatch, title, details, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (options === undefined) {
        options = {};
    }
    const sourceErr = new Error();
    if ((options.extensionName === undefined)
        && ((details === null || details === void 0 ? void 0 : details['extensionName']) !== undefined)) {
        options.extensionName = details['extensionName'];
    }
    const err = renderError(details, options);
    const allowReport = err.allowReport !== undefined
        ? err.allowReport
        : shouldAllowReport(details, options);
    (0, log_1.log)(allowReport ? 'error' : 'warn', title, err);
    const content = ((0, util_1.truthy)(options) && options.isHTML) ? {
        htmlText: err.message || err.text,
        options: {
            wrap: false,
        },
    } : (options.isBBCode === true) ? {
        bbcode: err.message || err.text,
        options: {
            wrap: false,
        },
    } : {
        text: err.text,
        message: err.message,
        options: {
            wrap: err.wrap,
            hideMessage: options.hideDetails !== false,
            // don't try to translate error messages
            translated: err.translated,
        },
        parameters: Object.assign(Object.assign({}, (options.replace || {})), (err.parameters || {})),
    };
    if (((details === null || details === void 0 ? void 0 : details['attachLogOnReport']) === true)
        && ((((_a = options.attachments) !== null && _a !== void 0 ? _a : []).find(iter => iter.id === 'log') === undefined))) {
        options.attachments = (0, util_1.setdefault)(options, 'attachments', []).concat([
            {
                id: 'log',
                type: 'file',
                data: path.join((0, getVortexPath_1.default)('userData'), 'vortex.log'),
                description: 'Vortex Log',
            },
            {
                id: 'log2',
                type: 'file',
                data: path.join((0, getVortexPath_1.default)('userData'), 'vortex1.log'),
                description: 'Vortex Log (old)',
            },
        ]);
    }
    if ((details === null || details === void 0 ? void 0 : details['attachFilesOnReport']) !== undefined) {
        options.attachments = (0, util_1.setdefault)(options, 'attachments', []).concat(details['attachFilesOnReport'].map((filePath, idx) => ({
            id: `file${idx}`,
            type: 'file',
            data: filePath,
            description: path.basename(filePath),
        })));
    }
    if ((options.attachments !== undefined)
        && (options.attachments.length > 0)
        && allowReport) {
        content.text = (content.text !== undefined ? (content.text + '\n\n') : '')
            + 'Note: If you report this error, the following data will be added to the report:\n'
            + options.attachments.map(attach => ` - ${attach.description}`).join('\n');
    }
    let extIssueTrackerURL = undefined;
    if (((_c = (_b = options.extension) === null || _b === void 0 ? void 0 : _b.info) === null || _c === void 0 ? void 0 : _c.issueTrackerURL) !== undefined) {
        extIssueTrackerURL = options.extension.info.issueTrackerURL;
    }
    else if (((_e = (_d = options.extension) === null || _d === void 0 ? void 0 : _d.info) === null || _e === void 0 ? void 0 : _e.modId) !== undefined) {
        extIssueTrackerURL = (0, util_1.nexusModsURL)(['site', 'mods', options.extension.info.modId.toString()], { parameters: ['tab=bugs'] });
    }
    else if (((_f = options.extensionRemote) === null || _f === void 0 ? void 0 : _f.github) !== undefined) {
        extIssueTrackerURL = 'https://github.com/' + ((_g = options.extensionRemote) === null || _g === void 0 ? void 0 : _g.github) + '/issues';
    }
    if ((options.extension !== undefined)
        && (options.extensionName !== undefined)
        && (extIssueTrackerURL === undefined)) {
        content.text = (content.text !== undefined ? (content.text + '\n\n') : '')
            + `Note: This error was generated by "${options.extensionName}", please report `
            + 'it to the extension author.';
    }
    const actions = [];
    const context = (_h = details === null || details === void 0 ? void 0 : details.context) !== null && _h !== void 0 ? _h : (0, errorHandling_1.getErrorContext)();
    if (!(0, errorHandling_1.isOutdated)() && !(0, errorHandling_1.didIgnoreError)() && allowReport) {
        if (extIssueTrackerURL !== undefined) {
            actions.push({
                label: 'Report',
                action: () => {
                    dispatch((0, notifications_1.showDialog)('info', 'Reporting to extension author', {
                        bbcode: 'Since this error was very likely caused by a third-party extension, '
                            + 'we will now take you to their issue tracker at [b]{{url}}[/b].<br/><br/>'
                            + 'It usually helps a lot investigating issues if you provide your log files '
                            + '(found at [url]{{logPath}}[/url]) '
                            + 'but please do keep in mind that those can contain personally identifiable '
                            + 'information (like folder names that include your windows account name) '
                            + 'or stuff like information about mods you are using.',
                        parameters: {
                            url: extIssueTrackerURL,
                            logPath: (0, getVortexPath_1.default)('userData'),
                        },
                    }, [
                        { label: 'Cancel' },
                        { label: 'Continue', action: () => (0, opn_1.default)(extIssueTrackerURL).catch(() => null) },
                    ]));
                },
            });
        }
        else if (options.extension === undefined) {
            actions.push({
                label: 'Report',
                action: () => bundleAttachment(options)
                    .then(attachmentBundle => (0, errorHandling_1.sendReport)('error', (0, errorHandling_1.toError)(details, title, options, sourceErr.stack), context, ['error'], '', process.type, undefined, attachmentBundle))
                    .then(response => {
                    if ((response === null || response === void 0 ? void 0 : response.github_issue) !== undefined) {
                        const { issue_number } = response.github_issue;
                        const githubURL = `https://api.github.com/repos/${GITHUB_PROJ}/issues/${issue_number}`;
                        (0, network_1.jsonRequest)(githubURL)
                            .catch(() => undefined)
                            .then(githubInfo => {
                            dispatch((0, notifications_1.showDialog)('success', 'Issue reported', {
                                bbcode: genFeedbackText(response, githubInfo),
                            }, [{ label: 'Close' }]));
                        });
                    }
                }),
            });
        }
    }
    actions.push({ label: 'Close', default: true });
    const haveMessage = (options.message !== undefined);
    dispatch((0, notifications_1.addNotification)({
        id: options.id,
        type: (options === null || options === void 0 ? void 0 : options.warning) ? 'warning' : 'error',
        title: haveMessage ? title : undefined,
        message: haveMessage ? options.message : title,
        allowSuppress: options.allowSuppress,
        replace: options.replace,
        actions: details !== undefined ? [
            ...((_j = options.actions) !== null && _j !== void 0 ? _j : []), {
                title: 'More',
                action: (dismiss) => {
                    dispatch((0, notifications_1.showDialog)('error', 'Error', content, actions));
                },
            }
        ] : [],
    }));
}
function prettifyNodeErrorMessage(err, options, fileName) {
    var _a, _b, _c;
    const decoded = (0, nativeErrors_1.decodeSystemError)(err, (_b = (_a = err.path) !== null && _a !== void 0 ? _a : err.filename) !== null && _b !== void 0 ? _b : fileName);
    if (decoded !== undefined) {
        return {
            message: decoded.message,
            replace: { path: (_c = err.path) !== null && _c !== void 0 ? _c : err.filename },
            allowReport: false,
        };
    }
    if ((err instanceof CustomErrors_1.ThirdPartyError)
        || (err instanceof InstallManager_1.ArchiveBrokenError)) {
        return {
            message: err.message,
            allowReport: false,
        };
    }
    else if (err instanceof CustomErrors_1.TemporaryError) {
        return {
            message: err.message,
            allowReport: false,
        };
    }
    else if (err instanceof exceptions_1.NoDeployment) {
        return {
            message: 'No supported deployment method selected, '
                + 'please review the deployment settings in Settings->Mods',
            allowReport: false,
        };
    }
    else if (err.code === undefined) {
        return { message: err.message, replace: {}, allowReport: err['allowReport'] };
    }
    else if (err.syscall === 'getaddrinfo') {
        return {
            message: 'Network address "{{host}}" could not be resolved. This is often a temporary error, '
                + 'please try again later.',
            replace: { host: err.host || err.hostname },
            allowReport: false,
        };
    }
    else if (err.code === 'EPERM') {
        const filePath = err.path || err.filename;
        const firstLine = filePath !== undefined
            ? 'Vortex needs to access "{{filePath}}" but it\'s write protected.\n'
            : 'Vortex needs to access a file that is write protected.\n';
        return {
            message: firstLine
                + 'When you configure directories and access rights you need to ensure Vortex can '
                + 'still access data directories.\n'
                + 'This is usually not a bug in Vortex.',
            replace: { filePath },
            allowReport: false,
        };
    }
    else if (err.code === 'ENOENT') {
        if ((err.path !== undefined) || (err.filename !== undefined)) {
            const filePath = err.path || err.filename;
            return {
                message: 'Vortex tried to access "{{filePath}}" but it doesn\'t exist.',
                replace: { filePath },
                allowReport: false,
            };
        }
        else if (err.host !== undefined) {
            return {
                message: 'Network address "{{host}}" not found.',
                replace: { host: err.host },
                allowReport: false,
            };
        }
    }
    else if (err.code === 'ENOSPC') {
        return {
            message: 'The disk is full',
            allowReport: false,
        };
    }
    else if ((err.code === 'EACCES') || (err.port !== undefined)) {
        return {
            message: 'Network connect was not permitted, please check your firewall settings',
            allowReport: false,
        };
    }
    else if (err.code === 'EPROTO') {
        return {
            message: 'Network protocol error. This is usually a temporary error, '
                + 'please try again later.',
            allowReport: false,
        };
    }
    else if (err.code === 'ENETUNREACH') {
        return {
            message: 'Network server not reachable.',
            allowReport: false,
        };
    }
    else if (err.code === 'ECONNABORTED') {
        return {
            message: 'Network connection aborted by the server.',
            allowReport: false,
        };
    }
    else if (err.code === 'ECONNREFUSED') {
        return {
            message: 'Network connection refused.',
            allowReport: false,
        };
    }
    else if (err.code === 'ECONNRESET') {
        return {
            message: 'Network connection closed unexpectedly.',
            allowReport: false,
        };
    }
    else if (['ETIMEDOUT', 'ESOCKETTIMEDOUT'].includes(err.code)) {
        return {
            message: 'Network connection to "{{address}}" timed out, please try again.',
            replace: { address: err.address },
            allowReport: false,
        };
    }
    else if (err.message.startsWith('connect ETIMEDOUT')) {
        return {
            message: 'Network connection timed out, please try again.',
            replace: { address: err.address },
            allowReport: false,
        };
    }
    else if (err.code === 'EAI_AGAIN') {
        return {
            message: 'Temporary name resolution error, please try again later.',
            allowReport: false,
        };
    }
    else if (err.code === 'EISDIR') {
        return {
            message: 'Vortex expected a file but found a directory: "{{path}}".',
            replace: { path: err.path },
            allowReport: false,
        };
    }
    else if (err.code === 'ENOTDIR') {
        return {
            message: 'Vortex expected a directory but found a file.',
            allowReport: false,
        };
    }
    else if (err.code === 'EROFS') {
        return {
            message: 'The filesystem is read-only.',
            allowReport: false,
        };
    }
    else if (err.code === 'EIO') {
        return {
            message: 'A general I/O error was reported. This may indicate a hardware defect or a '
                + 'removable medium got disconnected, sometimes it may also be caused by the '
                + 'disk being almost full.',
            allowReport: false,
        };
    }
    else if (['ERR_SSL_WRONG_VERSION_NUMBER', 'ERR_SSL_BAD_DECRYPT'].includes(err.code)
        || (err.message.startsWith('Hostname/IP does not match certificate\'s altnames'))) {
        return {
            message: 'A network SSL error occurred. If this problem persists, please update and review '
                + 'any network-related security software in your system (Anti Virus, Firewall, '
                + 'Proxies, ...)',
            allowReport: false,
        };
    }
    else if (['CERT_HAS_EXPIRED', 'CERT_NOT_YET_VALID'].includes(err.code)) {
        return {
            message: 'A secure connection could not be established because the server certificate is not valid. In most cases this happens when the date or time on your computer is incorrect. It can also be caused by problems with your internet provider, antivirus software interfering with certificates, or in rare cases by malicious software on your system.',
            allowReport: false,
        };
    }
    else if (['UNABLE_TO_VERIFY_LEAF_SIGNATURE',
        'SELF_SIGNED_CERT_IN_CHAIN',
        'ERR_SSL_WRONG_VERSION_NUMBER',
        'UNABLE_TO_GET_ISSUER_CERT_LOCALLY'].includes(err.code)
        || (err.function === 'OPENSSL_internal')) {
        return {
            message: 'Encountered an invalid SSL certificate. If this happens on a network connection '
                + 'to a server that has a proper certificate (like the Nexus Mods API) it may '
                + 'indicate a significant security issue in your system.',
            allowReport: false,
        };
    }
    else if (['ERR_DLOPEN_FAILED'].includes(err.code)) {
        const lines = err.message.split(os.EOL);
        if (lines.length === 2) {
            const filePath = lines[1];
            return {
                message: 'The DLL "{{fileName}}" failed to load. This usually happens because an '
                    + 'Antivirus tool has incorrectly quarantined or locked it.',
                replace: {
                    fileName: path.basename(filePath),
                },
            };
        }
        else {
            return {
                message: 'A DLL failed to load. This usually happens because an '
                    + 'Antivirus tool has incorrectly quarantined or locked it.',
            };
        }
    }
    else if (err.code === 'UNKNOWN') {
        if ((0, util_1.truthy)(err['nativeCode'])) {
            // the if block is the original code from when native error codes were introduced
            // but nativeCode is supposed to be only the numerical code, not an object with both
            // message and code.
            // To be safe I'm keeping both variants but I'm fairly sure the first block is never hit
            if (err['nativeCode'].code !== undefined) {
                return {
                    message: 'An unrecognized error occurred. The error may contain information '
                        + 'useful for handling it better in the future so please do report it (once): \n'
                        + `${err['nativeCode'].message} (${err['nativeCode'].code})`,
                    allowReport: true,
                };
            }
            else {
                return {
                    message: 'An unrecognized error occurred. The error may contain information '
                        + 'useful for handling it better in the future so please do report it (once): \n'
                        + `${err.message} (${err['nativeCode']})`,
                    allowReport: true,
                };
            }
        }
        else {
            return {
                message: 'An unknown error occurred. What this means is that Windows or the framework '
                    + 'don\'t provide any useful information to diagnose this problem. '
                    + 'Please do not report this issue without saying what exactly you were doing.',
            };
        }
    }
    return {
        message: err.message,
        code: err.code,
        allowReport: err['allowReport'],
    };
}
const HIDE_ATTRIBUTES = new Set(['message', 'error', 'context', 'errno', 'syscall', 'isOperational', 'attachLogOnReport',
    'extensionName', 'name']);
function isPrivateField(key) {
    // our own private fields all start with a lower case m followed by UpperCamelCase, like
    // mExtraInfo
    return key[0] === 'm' && key[1].toUpperCase() === key[1];
}
function renderCustomError(err) {
    const res = { wrap: false };
    if ((err.error !== undefined) && (err.error instanceof Error)) {
        // there's probably different fields in a custom error that might contain file path
        const fileName = err.executable;
        const pretty = prettifyNodeErrorMessage(err.error, undefined, fileName);
        if (err.message !== undefined) {
            res.text = err.message;
            res.message = pretty.message;
        }
        else {
            res.text = pretty.message;
        }
        res.parameters = pretty.replace;
        res.allowReport = pretty.allowReport;
    }
    else {
        res.text = err.message || 'An error occurred';
    }
    let attributes = Object.keys(err || {})
        .filter(key => key[0].toUpperCase() === key[0]);
    if (attributes.length === 0) {
        attributes = Object.keys(err || {})
            .filter(key => !isPrivateField(key)
            && !HIDE_ATTRIBUTES.has(key));
    }
    if (attributes.length > 0) {
        const old = res.message;
        res.message = attributes
            .map(key => key + ':\t' + err[key])
            .join('\n');
        if (old !== undefined) {
            res.message = old + '\n' + res.message;
        }
    }
    if ((res.message !== undefined) && (res.message.length === 0)) {
        res.message = undefined;
    }
    return res;
}
function prettifyHTTPError(err) {
    const fallback = () => {
        const rangeDescription = (err.statusCode >= 500)
            ? 'This code is usually the responsibility of the server and will likely be temporary'
            : (err.statusCode >= 400)
                ? 'This code is usually caused by an invalid request, maybe you followed a link '
                    + 'that has expired or you lack permission to access it.'
                : (err.statusCode >= 300)
                    ? 'This code indicates the url is no longer valid.'
                    : 'This code isn\'t an error and shouldn\'t have been reported';
        return {
            text: 'Requesting url "{{url}}" failed with status "{{statusCode}} {{message}}".\n'
                + rangeDescription,
            parameters: {
                message: err.statusMessage,
                url: err.url,
                statusCode: err.statusCode,
            },
            // 3xx errors are redirections and should have been followed but sometimes pages
            //  just redirect to themselves
            // 2xx aren't errors and shouldn't have been reported.
            allowReport: err.statusCode < 300,
            wrap: false,
            translated: true,
        };
    };
    const func = {
        '429': () => {
            const errorRendered = {
                wrap: true,
                message: 'You have exceeded the daily or hourly rate limit. Visit "help.nexusmods.com" and search for "Rate limit" for more information. Please try again later.',
            };
            return errorRendered;
        },
    }[err.statusCode] || fallback;
    return func();
}
/**
 * render error message for display to the user
 * @param err
 */
function renderError(err, options) {
    var _a;
    if (Array.isArray(err)) {
        err = err[0];
    }
    else if ((err === undefined) || (err === null)) {
        err = new Error('Unknown error');
    }
    if (typeof (err) === 'string') {
        return {
            text: err,
            parameters: options.replace,
            wrap: true,
        };
    }
    else if (err instanceof CustomErrors_1.StalledError) {
        return {
            message: 'Download stalled',
            text: `Please check your internet connection or, if you are a premium member, try a different preferred download location within your account´s Site Preferences`,
            wrap: false,
            allowReport: false,
        };
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'HTTPError') {
        return prettifyHTTPError(err);
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 'invalid_grant') {
        return {
            message: (_a = err === null || err === void 0 ? void 0 : err.description) !== null && _a !== void 0 ? _a : 'Invalid token',
            text: `Your OAuth token has either expired or has been revoked, please log in again to generate a new token.`,
            wrap: false,
            allowReport: false,
        };
    }
    else if (err instanceof Error) {
        const errMessage = prettifyNodeErrorMessage(err, options);
        const flatErr = (0, util_1.flatten)(err || {}, { maxLength: 5 });
        delete flatErr['allowReport'];
        let attributes = Object.keys(flatErr || {})
            .filter(key => key[0].toUpperCase() === key[0]);
        if (attributes.length === 0) {
            attributes = Object.keys(flatErr || {})
                .filter(key => !isPrivateField(key) && !HIDE_ATTRIBUTES.has(key));
        }
        if (attributes.length > 0) {
            const old = errMessage.message;
            errMessage.message = attributes
                .map(key => key + ':\t' + flatErr[key])
                .join('\n');
            if (old !== undefined) {
                errMessage.message = old + '\n' + errMessage.message;
            }
        }
        return {
            text: errMessage.message,
            message: err.stack,
            parameters: errMessage.replace,
            wrap: false,
            allowReport: errMessage.allowReport,
            translated: true,
        };
    }
    else {
        return renderCustomError(err);
    }
}
