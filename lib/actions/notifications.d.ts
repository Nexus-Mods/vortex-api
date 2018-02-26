/// <reference types="bluebird" />
import { DialogActions, DialogType, IDialogContent, IDialogResult } from '../types/IDialog';
import { INotification } from '../types/INotification';
import * as Promise from 'bluebird';
import * as reduxAct from 'redux-act';
export * from '../types/IDialog';
/**
 * adds a notification to be displayed. Takes one parameter of type INotification. The id may be
 * left unset, in that case one will be generated
 * TODO: this stores a function into the store which seems to work but isn't supported
 */
export declare const startNotification: reduxAct.ComplexActionCreator1<any, any, {}>;
/**
 * dismiss a notification. Takes the id of the notification
 */
export declare const dismissNotification: reduxAct.ComplexActionCreator1<any, any, {}>;
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
/**
 * show a notification
 *
 * @export
 * @param {INotification} notification
 * @returns
 */
export declare function addNotification(notification: INotification): (dispatch: any) => Promise<void>;
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
export declare function showDialog(type: DialogType, title: string, content: IDialogContent, actions: DialogActions): (dispatch: any) => Promise<IDialogResult>;
export declare function closeDialog(id: string, actionKey: string, input: any): (dispatch: any) => void;
