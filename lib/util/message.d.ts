import * as Redux from 'redux';
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
export declare function showSuccess<S>(dispatch: Redux.Dispatch<S>, message: string, id?: string): void;
/**
 * show activity notification
 */
export declare function showActivity<S>(dispatch: Redux.Dispatch<S>, message: string, id?: string): void;
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
export declare function showInfo<S>(dispatch: Redux.Dispatch<S>, message: string, id?: string): void;
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
export declare function showError<S>(dispatch: Redux.Dispatch<S>, message: string, details?: string | Error | any, options?: {
    replace?: {
        [key: string]: string;
    };
    isHTML?: boolean;
    id?: string;
    allowReport?: boolean;
}): void;
