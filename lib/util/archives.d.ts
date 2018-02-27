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
    /**
     * list files at the specified path
     */
    readonly readDir: (archivePath: string) => Promise<string[]>;
    /**
     * read a file at the specified path via a stream
     */
    readonly readFile: (filePath: string) => NodeJS.ReadableStream;
    /**
     * extract a single file
     */
    readonly extractFile: (filePath: string, outputPath: string) => Promise<void>;
    /**
     * extract the entire archive
     */
    readonly extractAll: (outputPath: string) => Promise<void>;
    /**
     * create this archive from the files in sourcePath
     */
    readonly create: (sourcePath: string) => Promise<void>;
    /**
     * add a single file to the archive
     */
    readonly addFile: (filePath: string, sourcePath: string) => Promise<void>;
    readonly write: () => Promise<void>;
}
