import { IArchiveHandler } from '../types/IExtensionContext';
import Promise from 'bluebird';
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
    get readDir(): (archivePath: string) => Promise<string[]>;
    /**
     * read a file at the specified path via a stream
     */
    get readFile(): (filePath: string) => NodeJS.ReadableStream;
    /**
     * extract a single file
     */
    get extractFile(): (filePath: string, outputPath: string) => Promise<void>;
    /**
     * extract the entire archive
     */
    get extractAll(): (outputPath: string) => Promise<void>;
    /**
     * create this archive from the files in sourcePath
     */
    get create(): (sourcePath: string) => Promise<void>;
    /**
     * add a single file to the archive
     */
    get addFile(): (filePath: string, sourcePath: string) => Promise<void>;
    get write(): () => Promise<void>;
}
