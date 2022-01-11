import { DialogActions, DialogType, IDialogContent, IDialogResult } from '../types/IDialog';
import { INotification, NotificationDismiss } from '../types/INotification';
import Promise from 'bluebird';
import * as reduxAct from 'redux-act';
export * from '../types/IDialog';
/**
 * adds a notification to be displayed. Takes one parameter of type INotification. The id may be
 * left unset, in that case one will be generated
 */
export declare const startNotification: reduxAct.ComplexActionCreator1<any, any, {}>;
export declare const updateNotification: reduxAct.ComplexActionCreator3<string, number, string, {
    id: string;
    progress: number;
    message: string;
}, {
    forward: boolean;
    scope: string;
}>;
/**
 * dismiss a notification. Takes the id of the notification
 */
export declare const stopNotification: reduxAct.ComplexActionCreator1<any, any, {}>;
/**
 * show a modal dialog to the user
 *
 * don't call this directly, use showDialog
 */
export declare const addDialog: reduxAct.ComplexActionCreator6<string, string, string, IDialogContent, string, string[], {
    id: string;
    type: string;
    title: string;
    content: IDialogContent;
    defaultAction: string;
    actions: string[];
}, {}>;
/**
 * dismiss the dialog being displayed
 *
 * don't call this directly especially when you used "showDialog" to create the dialog or
 * you leak (a tiny amount of) memory and the action callbacks aren't called.
 * Use closeDialog instead
 */
export declare const dismissDialog: reduxAct.ComplexActionCreator1<any, any, {}>;
export declare function fireNotificationAction(notiId: string, notiProcess: string, action: number, dismiss: NotificationDismiss): void;
export declare function setupNotificationSuppression(cb: (id: string) => boolean): void;
/**
 * show a notification
 *
 * @export
 * @param {INotification} notification
 * @returns
 */
export declare function addNotification(notification: INotification): (dispatch: any) => Promise<void>;
export declare function dismissNotification(id: string): (dispatch: any) => Promise<void>;
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
export declare function showDialog(type: DialogType, title: string, content: IDialogContent, actions: DialogActions, inId?: string): (dispatch: any) => Promise<IDialogResult>;
export declare function closeDialog(id: string, actionKey?: string, input?: any): (dispatch: any) => void;
export declare function triggerDialogLink(id: string, idx: number): void;
