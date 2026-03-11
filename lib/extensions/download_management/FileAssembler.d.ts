import PromiseBB from "bluebird";
/**
 * assembles a file received in chunks.
 *
 * @class FileAssembler
 */
declare class FileAssembler {
    static create(fileName: string): PromiseBB<FileAssembler>;
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
    rename(newName: string | PromiseBB<string>): PromiseBB<any>;
    addChunk(offset: number, data: Buffer): PromiseBB<boolean>;
    close(): PromiseBB<void>;
    private writeAsync;
}
export default FileAssembler;
