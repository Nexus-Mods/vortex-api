import { IError } from '../types/IError';
import * as Promise from 'bluebird';
import { IFeedbackResponse } from 'nexus-api';
import { IErrorOptions, IExtensionApi } from '../types/api';
export declare function genHash(error: IError): any;
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
export declare function toError(input: any, options?: IErrorOptions): IError;
