/// <reference types="bluebird" />
/// <reference types="node" />
import { IArchiveHandler } from '../types/IExtensionContext';
import * as Promise from 'bluebird';
/**
 * wrapper around an format-specific archive handler
 *
 * @export
 * @class Archive
 */
export declare class Archive {
    private mHandler;
    constructor(handler: IArchiveHandler);
    readonly readDir: (archivePath: string) => Promise<string[]>;
    readonly readFile: (filePath: string) => NodeJS.ReadableStream;
    readonly extractFile: (filePath: string, outputPath: string) => Promise<void>;
    readonly extractAll: (outputPath: string) => Promise<void>;
    readonly create: (sourcePath: string) => Promise<void>;
}
