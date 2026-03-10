import Promise from "bluebird";
/**
 * assembles a file received in chunks.
 *
 * @class FileAssembler
 */
declare class FileAssembler {
    static create(fileName: string): Promise<FileAssembler>;
    private static MIN_FLUSH_SIZE;
    private static MIN_FLUSH_TIME;
    private mFD;
    private mFileName;
    private mTotalSize;
    private mQueue;
    private mWritten;
    private mLastFlushedTime;
    private mLastFlushedSize;
    constructor(fileName: string, size: number, fd: number);
    setTotalSize(size: number): void;
    isClosed(): boolean;
    rename(newName: string | Promise<string>): Promise<any>;
    addChunk(offset: number, data: Buffer): Promise<boolean>;
    close(): Promise<void>;
    private writeAsync;
}
export default FileAssembler;
