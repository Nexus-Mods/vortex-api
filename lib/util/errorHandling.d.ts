/// <reference types="bluebird" />
import { IError } from '../types/IError';
import * as Promise from 'bluebird';
import { IErrorOptions } from '../types/api';
export declare function genHash(error: IError): any;
export declare function createErrorReport(type: string, error: IError, labels: string[], state: any): void;
export declare function setApiKey(key: string): void;
export declare function sendReportFile(fileName: string): Promise<void>;
export declare function sendReport(type: string, error: IError, labels: string[], reporterId?: string): Promise<void>;
/**
 * display an error message and quit the application
 * on confirmation.
 * Use this whenever the application state is unknown and thus
 * continuing could lead to data loss
 *
 * @export
 * @param {ITermination} error
 */
export declare function terminate(error: IError, state: any): void;
export declare function toError(input: any, options?: IErrorOptions): IError;
