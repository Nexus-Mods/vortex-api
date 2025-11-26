/**
 * Worker pool manager for archive extraction
 *
 * Manages a pool of worker threads for parallel archive extraction.
 * Limits concurrent workers to prevent resource exhaustion.
 */
interface IExtractionTask {
    archivePath: string;
    tempPath: string;
    options?: any;
}
interface IExtractionResult {
    code: number;
    errors: string[];
    fileList: string[];
}
interface IProgressCallback {
    (phase: string, percent?: number, files?: string[]): void;
}
/**
 * Manages worker threads for archive extraction
 */
export declare class ExtractionWorkerPool {
    private static instance;
    private maxWorkers;
    private activeWorkers;
    private queue;
    private constructor();
    /**
     * Get singleton instance
     */
    static getInstance(): ExtractionWorkerPool;
    /**
     * Extract archive using worker thread
     */
    extractArchive(task: IExtractionTask, progressCallback?: IProgressCallback): Promise<IExtractionResult>;
    /**
     * Run worker thread for extraction
     */
    private runWorker;
    /**
     * Get current number of active workers
     */
    getActiveWorkerCount(): number;
    /**
     * Get current queue length
     */
    getQueueLength(): number;
}
export default ExtractionWorkerPool;
