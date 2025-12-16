import { IErrorOptions } from "../types/IExtensionContext";
import { IState } from "../types/IState";
import Promise from "bluebird";
import * as Redux from "redux";
import { ThunkDispatch } from "redux-thunk";
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
export declare function calcDuration(messageLength: number): number;
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
export declare function showSuccess<S>(dispatch: ThunkDispatch<IState, null, Redux.Action>, message: string, id?: string): void;
/**
 * show activity notification
 */
export declare function showActivity<S>(dispatch: ThunkDispatch<IState, null, Redux.Action>, message: string, id?: string): void;
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
export declare function showInfo<S>(dispatch: ThunkDispatch<IState, null, Redux.Action>, message: string, id?: string): void;
export declare function bundleAttachment(options?: IErrorOptions): Promise<string>;
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
export declare function showError(dispatch: ThunkDispatch<IState, null, Redux.Action>, title: string, details?: string | Error | any, options?: IErrorOptions): void;
export interface IPrettifiedError {
    message: string;
    code?: string;
    replace?: any;
    allowReport?: boolean;
    stack?: string;
}
export declare function prettifyNodeErrorMessage(err: any, options?: IErrorOptions, fileName?: string): IPrettifiedError;
export interface IErrorRendered {
    message?: string;
    text?: string;
    parameters?: any;
    allowReport?: boolean;
    wrap: boolean;
    translated?: boolean;
}
/**
 * render error message for display to the user
 * @param err
 */
export declare function renderError(err: string | Error | any, options?: IErrorOptions): IErrorRendered;
