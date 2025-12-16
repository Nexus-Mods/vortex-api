import { IChunk } from "./types/IChunk";
import { IDownloadOptions } from "./types/IDownload";
import { IDownloadResult } from "./types/IDownloadResult";
import { ProgressCallback } from "./types/ProgressCallback";
import { IProtocolHandlers } from "./types/ProtocolHandlers";
import Bluebird from "bluebird";
import { IExtensionApi } from "../../types/api";
export type RedownloadMode = "always" | "never" | "ask" | "replace";
export declare class AlreadyDownloaded extends Error {
    private mFileName;
    private mId;
    constructor(fileName: string, id?: string);
    get fileName(): string;
    get downloadId(): string;
    set downloadId(id: string);
}
export declare class DownloadIsHTML extends Error {
    private mUrl;
    constructor(inputUrl: string);
    get url(): string;
}
/**
 * manages downloads
 *
 * @class DownloadManager
 */
declare class DownloadManager {
    private mApi;
    private mMinChunkSize;
    private mMaxWorkers;
    private mMaxChunks;
    private mDownloadPath;
    private mBusyWorkers;
    private mSlowWorkers;
    private mWorkerRestartCounts;
    private mWorkerLastRestart;
    private mQueue;
    private mNextId;
    private mSpeedCalculator;
    private mUserAgent;
    private mProtocolHandlers;
    private mResolveCache;
    private mFileExistsCB;
    private mThrottle;
    private mHttpAgent;
    private mHttpsAgent;
    /**
     * Creates an instance of DownloadManager.
     *
     * @param {string} downloadPath default path to download to if the enqueue command doesn't
     *                 specify otherwise
     * @param {number} maxWorkers maximum number of workers downloading data at once. should be bigger
     *                            than maxChunks
     * @param {number} maxChunks maximum number of chunks per file being downloaded at once
     *
     * @memberOf DownloadManager
     */
    constructor(api: IExtensionApi, downloadPath: string, maxWorkers: number, maxChunks: number, speedCB: (speed: number) => void, userAgent: string, protocolHandlers: IProtocolHandlers, maxBandwidth: () => number);
    setFileExistsCB: (cb: (fileName: string) => Bluebird<boolean>) => void;
    setDownloadPath: (downloadPath: string) => void;
    /**
     * Get the appropriate HTTP agent based on protocol for persistent connections
     */
    private getAgent;
    /**
     * Clean up persistent connection agents
     */
    cleanup(): void;
    setMaxConcurrentDownloads: (maxConcurrent: number) => void;
    getFreeSlots: () => number;
    /**
     * enqueues a download
     *
     * @param {string[]} urls
     * @param {(received: number, total: number) => void} progressCB
     * @param {string} [destinationPath]
     * @returns {Bluebird<string>}
     *
     * @memberOf DownloadManager
     */
    enqueue: (id: string, urls: string[], fileName: string, progressCB: ProgressCallback, destinationPath?: string, options?: IDownloadOptions) => Bluebird<IDownloadResult>;
    resume: (id: string, filePath: string, urls: string[], received: number, size: number, started: number, chunks: IChunk[], progressCB: ProgressCallback, options?: IDownloadOptions) => Bluebird<IDownloadResult>;
    /**
     * cancels a download. This stops the download but doesn't remove the file
     * This call does not wait for the download to actually be stopped, it merely
     * sends the signal to stop it
     *
     * @param {string} id
     * @returns true if the download was stopped, false if something went wrong. In this case
     *               the caller should not expect a callback about the download being terminated
     *
     * @memberOf DownloadManager
     */
    stop: (id: string) => boolean;
    pause: (id: string) => IChunk[];
    private resolveUrl;
    private resolveUrls;
    private initChunk;
    private cancelDownload;
    private cleanupOrphanedPlaceholder;
    private tickQueue;
    private cleanupCompletedDownloads;
    private startWorker;
    private makeProgressCB;
    private shouldRestartSlowWorker;
    private startJob;
    private makeDataCB;
    private updateDownloadSize;
    private updateDownload;
    private toStoredChunk;
    private toJob;
    private useExistingFile;
    /**
     * gets called whenever a chunk runs to the end or is interrupted
     */
    private finishChunk;
    private stopWorker;
    private sanitizeFilename;
    private detectFileExtensionFromMagic;
    /**
     * finds and reserves a not-yet-used file name.
     * If the input filename is sample.txt then this function will try
     * sample.txt, sample.1.txt, sample.2.txt ... until an unused name is found.
     * That file is created empty in an atomic operation no other call to unusedName
     * will return the same file name.
     *
     * @param {string} destination
     * @param {string} fileName
     * @returns {Bluebird<string>}
     */
    private unusedName;
}
export default DownloadManager;
