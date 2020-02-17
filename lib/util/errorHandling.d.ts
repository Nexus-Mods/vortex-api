import { IErrorOptions, IExtensionApi } from '../types/api';
import { IError } from '../types/IError';
import { IFeedbackResponse } from '@nexusmods/nexus-api';
import * as Promise from 'bluebird';
interface IErrorContext {
    [id: string]: string;
}
export declare function createErrorReport(type: string, error: IError, context: IErrorContext, labels: string[], state: any, sourceProcess?: string): void;
export declare function setApiKey(key: string): void;
export declare function setOutdated(api: IExtensionApi): void;
export declare function isOutdated(): boolean;
export declare function didIgnoreError(): boolean;
export declare function disableErrorReport(): void;
export declare function sendReportFile(fileName: string): Promise<IFeedbackResponse>;
export declare function sendReport(type: string, error: IError, context: IErrorContext, labels: string[], reporterId: string, reporterProcess: string, sourceProcess: string, attachment: string): Promise<IFeedbackResponse>;
export declare function setWindow(window: Electron.BrowserWindow): void;
export declare function getWindow(): Electron.BrowserWindow;
export declare function getVisibleWindow(win?: Electron.BrowserWindow): Electron.BrowserWindow | null;
/**
 * display an error message and quit the application
 * on confirmation.
 * Use this whenever the application state is unknown and thus
 * continuing could lead to data loss
 *
 * @export
 * @param {ITermination} error
 */
export declare function terminate(error: IError, state: any, allowReport?: boolean, source?: string): void;
/**
 * render error message for internal processing (issue tracker and such).
 * It's important this doesn't translate the error message or lose information
 */
export declare function toError(input: any, title?: string, options?: IErrorOptions, sourceStack?: string): IError;
/**
 * set an error context, that will be reported with every error reported.
 * Please keep in mind that the error context will remain set
 * until it's cleared with clearErrorContext and use "withContext" where possible
 * to ensure the context gets reset
 * @param id context id
 * @param value context value
 */
export declare function setErrorContext(id: string, value: string): void;
/**
 * clear an error context
 * @param id id of the context
 */
export declare function clearErrorContext(id: string): void;
/**
 * execute a function with the specified error context
 * @param id identifier of the context to set
 * @param value context value
 * @param fun the function to set
 */
export declare function withContext(id: string, value: string, fun: () => Promise<any>): Promise<any>;
/**
 * attach context to an error that may be caught after the global context has been reset
 * @param err the error to add context to
 */
export declare function contextify(err: Error): Error;
export declare function getErrorContext(): IErrorContext;
export {};
