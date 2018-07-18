/// <reference types="bluebird" />
import * as Promise from 'bluebird';
export declare class Win32Error extends Error {
    private mCode;
    constructor(message: string, code: number);
    readonly code: number;
}
declare function open(target: string, wait?: boolean): Promise<void>;
export default open;
