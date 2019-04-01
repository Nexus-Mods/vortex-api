import { IErrorOptions, IExtensionApi } from '../types/api';
import { IError } from '../types/IError';
import * as Promise from 'bluebird';
import { IFeedbackResponse } from 'nexus-api';
export declare function createErrorReport(type: string, error: IError, labels: string[], state: any, sourceProcess?: string): void;
export declare function setApiKey(key: string): void;
export declare function setOutdated(api: IExtensionApi): void;
export declare function isOutdated(): boolean;
export declare function sendReportFile(fileName: string): Promise<IFeedbackResponse>;
export declare function sendReport(type: string, error: IError, labels: string[], reporterId?: string, reporterProcess?: string, sourceProcess?: string): Promise<IFeedbackResponse>;
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
export declare function toError(input: any, title?: string, options?: IErrorOptions): IError;
