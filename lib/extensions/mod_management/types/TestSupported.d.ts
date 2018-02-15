/// <reference types="bluebird" />
import * as Promise from 'bluebird';
export interface ISupportedResult {
    supported: boolean;
    requiredFiles: string[];
}
export declare type TestSupported = (files: string[], gameId: string) => Promise<ISupportedResult>;
