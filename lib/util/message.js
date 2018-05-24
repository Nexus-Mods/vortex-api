"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../actions/notifications");
const errorHandling_1 = require("./errorHandling");
const log_1 = require("./log");
const util_1 = require("./util");
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
exports.calcDuration = calcDuration;
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
    dispatch(notifications_1.addNotification({
        id,
        type: 'success',
        message,
        displayMS: calcDuration(message.length),
    }));
}
exports.showSuccess = showSuccess;
/**
 * show activity notification
 */
function showActivity(dispatch, message, id) {
    dispatch(notifications_1.addNotification({
        id,
        type: 'activity',
        message,
    }));
}
exports.showActivity = showActivity;
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
    dispatch(notifications_1.addNotification({
        id,
        type: 'info',
        message,
        displayMS: calcDuration(message.length),
    }));
}
exports.showInfo = showInfo;
/**
 * show an error notification with an optional "more" button that displays further details
 * in a modal dialog.
 *
 * @export
 * @template S
 * @param {Redux.Dispatch<S>} dispatch
 * @param {string} message
 * @param {any} [details] further details about the error (stack and such). The api says we only
 *                        want string or Errors but since some node apis return non-Error objects
 *                        where Errors are expected we have to be a bit more flexible here.
 */
function showError(dispatch, message, details, options) {
    const err = renderError(details);
    log_1.log('error', message, err);
    const content = (util_1.truthy(options) && options.isHTML) ? {
        htmlText: err.message || err.text,
        options: {
            wrap: false,
        },
    } : {
        text: err.text,
        message: err.message,
        options: {
            wrap: err.wrap,
        },
        parameters: (options !== undefined) ? options.replace : undefined,
    };
    const actions = [];
    if ((options === undefined) || (options.allowReport !== false)) {
        actions.push({
            label: 'Report',
            action: () => errorHandling_1.sendReport('error', errorHandling_1.toError(details), ['error'], ''),
        });
    }
    actions.push({ label: 'Close', default: true });
    dispatch(notifications_1.addNotification({
        id: (options !== undefined) ? options.id : undefined,
        type: 'error',
        message,
        replace: (options !== undefined) ? options.replace : undefined,
        actions: details !== undefined ? [{
                title: 'More',
                action: (dismiss) => {
                    dispatch(notifications_1.showDialog('error', 'Error', content, actions));
                },
            }] : [],
    }));
}
exports.showError = showError;
function renderNodeError(err) {
    const res = [];
    if (Array.isArray(err)) {
        err = err[0];
    }
    if (err.stack) {
        res.push(err.stack);
    }
    return res.join('\n');
}
function renderCustomError(err) {
    if (err === undefined) {
        return 'Unknown error';
    }
    return Object.keys(err)
        .filter(key => ['fatal'].indexOf(key) === -1)
        .map(key => key + ':\t' + err[key])
        .join('\n');
}
function renderError(err) {
    if (typeof (err) === 'string') {
        return { text: err, wrap: true };
    }
    else if (err instanceof Error) {
        if (err.code === 'EPERM') {
            return {
                text: 'A file that Vortex needs to access is write protected.\n'
                    + 'When you configure directories and access rights you need to ensure Vortex can '
                    + 'still access data directories.\n'
                    + 'This is usually not a bug in Vortex.',
                message: err.path + '\n' + err.stack,
                wrap: false,
            };
        }
        else {
            return { text: err.message, message: renderNodeError(err), wrap: false };
        }
    }
    else {
        return { message: renderCustomError(err), wrap: false };
    }
}
