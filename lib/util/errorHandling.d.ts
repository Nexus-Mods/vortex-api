/// <reference types="bluebird" />
import { IError } from '../types/IError';
import * as Promise from 'bluebird';
export declare function createErrorReport(type: string, error: IError, labels?: string[]): void;
export declare function sendReport(fileName: string): Promise<void>;
/**
 * display an error message and quit the application
 * on confirmation.
 * Use this whenever the application state is unknown and thus
 * continuing could lead to data loss
 *
 * @export
 * @param {ITermination} error
 */
export declare function terminate(error: IError): void;
