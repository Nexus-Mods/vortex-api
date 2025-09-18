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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dismissDialog = exports.addDialog = exports.stopNotification = exports.updateNotification = exports.startNotification = void 0;
exports.fireNotificationAction = fireNotificationAction;
exports.setupNotificationSuppression = setupNotificationSuppression;
exports.addNotification = addNotification;
exports.dismissNotification = dismissNotification;
exports.showDialog = showDialog;
exports.closeDialog = closeDialog;
exports.triggerDialogLink = triggerDialogLink;
const local_1 = __importDefault(require("../util/local"));
const log_1 = require("../util/log");
const util_1 = require("../util/util");
const safeCreateAction_1 = __importDefault(require("./safeCreateAction"));
const bluebird_1 = __importDefault(require("bluebird"));
const electron_1 = require("electron");
const shortid_1 = require("shortid");
__exportStar(require("../types/IDialog"), exports);
const identity = input => input;
/**
 * adds a notification to be displayed. Takes one parameter of type INotification. The id may be
 * left unset, in that case one will be generated
 */
exports.startNotification = (0, safeCreateAction_1.default)('ADD_NOTIFICATION', identity);
exports.updateNotification = (0, safeCreateAction_1.default)('UPDATE_NOTIFICATION', (id, progress, message) => ({ id, progress, message }), () => ({ forward: false, scope: 'local' }));
/**
 * dismiss a notification. Takes the id of the notification
 */
exports.stopNotification = (0, safeCreateAction_1.default)('STOP_NOTIFICATION', identity);
/**
 * show a modal dialog to the user
 *
 * don't call this directly, use showDialog
 */
exports.addDialog = (0, safeCreateAction_1.default)('SHOW_MODAL_DIALOG', (id, type, title, content, defaultAction, actions) => ({ id, type, title, content, defaultAction, actions }));
/**
 * dismiss the dialog being displayed
 *
 * don't call this directly especially when you used "showDialog" to create the dialog or
 * you leak (a tiny amount of) memory and the action callbacks aren't called.
 * Use closeDialog instead
 */
exports.dismissDialog = (0, safeCreateAction_1.default)('DISMISS_MODAL_DIALOG', identity);
const timers = (0, local_1.default)('notification-timers', {});
const notificationActions = (0, local_1.default)('notification-actions', {});
function fireNotificationAction(notiId, notiProcess, action, dismiss) {
    var _a;
    if (notiProcess === process.type) {
        if (notificationActions[notiId] === undefined) {
            // this can happen if vortex was restarted and so the notification is still in the store but
            // the callbacks are no longer available.
            return;
        }
        const func = (_a = notificationActions[notiId]) === null || _a === void 0 ? void 0 : _a[action];
        if (func !== undefined) {
            func(dismiss);
        }
    }
    else {
        // assumption is that notification actions are only triggered by the ui
        // TODO: have to send synchronously because we need to know if we should dismiss
        const res = electron_1.ipcRenderer.sendSync('fire-notification-action', notiId, action);
        if (res) {
            dismiss();
        }
    }
}
if (electron_1.ipcMain !== undefined) {
    electron_1.ipcMain.on('fire-notification-action', (event, notiId, action) => {
        var _a;
        const func = (_a = notificationActions[notiId]) === null || _a === void 0 ? void 0 : _a[action];
        let res = false;
        if (func !== undefined) {
            func(() => {
                res = true;
            });
        }
        event.returnValue = res;
    });
    electron_1.ipcMain.on('fire-dialog-action', (event, dialogId, action, input) => {
        const func = DialogCallbacks.instance()[dialogId];
        if (func !== undefined) {
            func(action, input);
            delete DialogCallbacks.instance()[dialogId];
        }
        event.returnValue = true;
    });
}
let suppressNotification = () => false;
function setupNotificationSuppression(cb) {
    suppressNotification = cb;
}
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
        if ((noti.id !== undefined) && (suppressNotification(noti.id))) {
            return bluebird_1.default.resolve();
        }
        if (noti.id === undefined) {
            noti.id = (0, shortid_1.generate)();
        }
        else if (timers[noti.id] !== undefined) {
            // if this notification is replacing an active one with a timeout,
            // stop that timeout
            clearTimeout(timers[noti.id]);
            delete timers[noti.id];
            delete notificationActions[noti.id];
        }
        if (noti.createdTime === undefined) {
            noti.createdTime = Math.floor(Date.now() / 1000) * 1000;
        }
        noti.updatedTime = Math.floor(Date.now() / 1000) * 1000;
        notificationActions[noti.id] = noti.actions == null
            ? []
            : noti.actions.map(action => action.action);
        const storeNoti = JSON.parse(JSON.stringify(noti));
        storeNoti.process = process.type;
        storeNoti.actions = (storeNoti.actions || [])
            .map(action => ({ title: action.title, icon: action.icon }));
        dispatch((0, exports.startNotification)(storeNoti));
        if (noti.displayMS !== undefined) {
            return new bluebird_1.default((resolve) => {
                timers[noti.id] = setTimeout(() => resolve(), noti.displayMS);
            }).then(() => {
                dispatch(dismissNotification(noti.id));
            });
        }
    };
}
function dismissNotification(id) {
    return dispatch => new bluebird_1.default((resolve, reject) => {
        delete timers[id];
        delete notificationActions[id];
        dispatch((0, exports.stopNotification)(id));
        resolve();
    });
}
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
function showDialog(type, title, content, actions, inId) {
    return (dispatch) => {
        return new bluebird_1.default((resolve, reject) => {
            const id = inId || (0, shortid_1.generate)();
            const defaultAction = actions.find(iter => iter.default === true);
            const defaultLabel = defaultAction !== undefined ? defaultAction.label : undefined;
            dispatch((0, exports.addDialog)(id, type, title, content, defaultLabel, actions.map(action => action.label)));
            DialogCallbacks.instance()[id] = (actionKey, input) => {
                const action = actions.find(iter => iter.label === actionKey);
                if ((0, util_1.truthy)(action.action)) {
                    try {
                        const res = action.action(input);
                        if ((res !== undefined) && (res.catch !== undefined)) {
                            res.catch(err => {
                                (0, log_1.log)('error', 'rejection from dialog callback', {
                                    title,
                                    action: action.label,
                                    message: err.message,
                                });
                            });
                        }
                    }
                    catch (err) {
                        (0, log_1.log)('error', 'exception from dialog callback', {
                            title,
                            action: action.label,
                            message: err.message,
                        });
                    }
                }
                resolve({ action: actionKey, input });
            };
            DialogCallbacks.instance()[`__link-${id}`] = (idx) => {
                content.links[idx].action(() => { dispatch((0, exports.dismissDialog)(id)); }, content.links[idx].id);
            };
        });
    };
}
function closeDialog(id, actionKey, input) {
    return (dispatch) => {
        dispatch((0, exports.dismissDialog)(id));
        try {
            if (actionKey !== undefined) {
                if (DialogCallbacks.instance()[id] !== undefined) {
                    DialogCallbacks.instance()[id](actionKey, input);
                }
                else if (electron_1.ipcRenderer !== undefined) {
                    electron_1.ipcRenderer.sendSync('fire-dialog-action', id, actionKey, input);
                }
            }
        }
        catch (err) {
            (0, log_1.log)('error', 'failed to invoke dialog callback', { id, actionKey });
        }
        finally {
            delete DialogCallbacks.instance()[id];
        }
    };
}
function triggerDialogLink(id, idx) {
    const cbId = `__link-${id}`;
    if (DialogCallbacks.instance()[cbId] !== undefined) {
        DialogCallbacks.instance()[cbId](idx);
    }
}
