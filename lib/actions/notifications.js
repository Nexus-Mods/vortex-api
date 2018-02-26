"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const local_1 = require("../util/local");
const log_1 = require("../util/log");
const util_1 = require("../util/util");
const safeCreateAction_1 = require("./safeCreateAction");
const Promise = require("bluebird");
const shortid_1 = require("shortid");
const identity = input => input;
/**
 * adds a notification to be displayed. Takes one parameter of type INotification. The id may be
 * left unset, in that case one will be generated
 * TODO: this stores a function into the store which seems to work but isn't supported
 */
exports.startNotification = safeCreateAction_1.default('ADD_NOTIFICATION', identity);
/**
 * dismiss a notification. Takes the id of the notification
 */
exports.dismissNotification = safeCreateAction_1.default('DISMISS_NOTIFICATION', identity);
/**
 * show a modal dialog to the user
 *
 * don't call this directly, use showDialog
 */
exports.addDialog = safeCreateAction_1.default('SHOW_MODAL_DIALOG', (id, type, title, content, defaultAction, actions) => ({ id, type, title, content, defaultAction, actions }));
/**
 * dismiss the dialog being displayed
 *
 * don't call this directly especially when you used "showDialog" to create the dialog or
 * you leak (a tiny amount of) memory and the action callbacks aren't called.
 * Use closeDialog instead
 */
exports.dismissDialog = safeCreateAction_1.default('DISMISS_MODAL_DIALOG', identity);
const timers = local_1.default('notification-timers', {});
/**
 * show a notification
 *
 * @export
 * @param {INotification} notification
 * @returns
 */
function addNotification(notification) {
    return (dispatch) => {
        const noti = Object.assign({}, notification);
        if (noti.id === undefined) {
            noti.id = shortid_1.generate();
        }
        else if (timers[noti.id] !== undefined) {
            // if this notification is replacing an active one with a timeout,
            // stop that timeout
            clearTimeout(timers[noti.id]);
            delete timers[noti.id];
        }
        dispatch(exports.startNotification(noti));
        if (noti.displayMS !== undefined) {
            return new Promise((resolve) => {
                timers[noti.id] = setTimeout(() => resolve(), noti.displayMS);
            }).then(() => {
                delete timers[noti.id];
                dispatch(exports.dismissNotification(noti.id));
            });
        }
    };
}
exports.addNotification = addNotification;
// singleton holding callbacks for active dialogs. The
// actual storage is the "global" object so it gets shared between
// all instances of this module (across extensions).
class DialogCallbacks {
    static instance() {
        if (global.__dialogCallbacks === undefined) {
            global.__dialogCallbacks = {};
        }
        return global.__dialogCallbacks;
    }
}
/**
 * show a dialog
 *
 * @export
 * @param {DialogType} type
 * @param {string} title
 * @param {IDialogContent} content
 * @param {IDialogActions} actions
 * @returns
 */
function showDialog(type, title, content, actions) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const id = shortid_1.generate();
            const defaultAction = actions.find(iter => iter.default === true);
            const defaultLabel = defaultAction !== undefined ? defaultAction.label : undefined;
            dispatch(exports.addDialog(id, type, title, content, defaultLabel, actions.map(action => action.label)));
            DialogCallbacks.instance()[id] = (actionKey, input) => {
                const action = actions.find(iter => iter.label === actionKey);
                if (util_1.truthy(action.action)) {
                    action.action(input);
                }
                resolve({ action: actionKey, input });
            };
        });
    };
}
exports.showDialog = showDialog;
function closeDialog(id, actionKey, input) {
    return (dispatch) => {
        dispatch(exports.dismissDialog(id));
        try {
            if (DialogCallbacks.instance()[id] !== null) {
                DialogCallbacks.instance()[id](actionKey, input);
            }
        }
        catch (err) {
            log_1.log('error', 'failed to invoke dialog callback', { id, actionKey });
        }
        finally {
            delete DialogCallbacks.instance()[id];
        }
    };
}
exports.closeDialog = closeDialog;
