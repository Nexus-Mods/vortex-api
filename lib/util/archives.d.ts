import type { IArchiveHandler } from "../types/IExtensionContext";
import type PromiseBB from "bluebird";
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
    get readDir(): ((archivePath: string) => PromiseBB<string[]>) | undefined;
    /**
     * read a file at the specified path via a stream
     */
    get readFile(): ((filePath: string) => NodeJS.ReadableStream) | undefined;
    /**
     * extract a single file
     */
    get extractFile(): ((filePath: string, outputPath: string) => PromiseBB<void>) | undefined;
    /**
     * extract the entire archive
     */
    get extractAll(): ((outputPath: string) => PromiseBB<void>) | undefined;
    /**
     * create this archive from the files in sourcePath
     */
    get create(): ((sourcePath: string) => PromiseBB<void>) | undefined;
    /**
     * add a single file to the archive
     */
    get addFile(): ((filePath: string, sourcePath: string) => PromiseBB<void>) | undefined;
    get write(): (() => PromiseBB<void>) | undefined;
}
