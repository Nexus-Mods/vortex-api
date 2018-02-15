export interface IDictionary {
    [key: string]: any;
}
/**
 * initialize a download (it may not be started immediately)
 */
export declare const initDownload: any;
/**
 * set download progress (in percent)
 */
export declare const downloadProgress: any;
/**
 * set/change the file path
 */
export declare const setDownloadFilePath: any;
/**
 * mark download as started
 */
export declare const startDownload: any;
/**
 * mark download as finished
 */
export declare const finishDownload: any;
export declare const setDownloadHash: any;
export declare const setDownloadHashByFile: any;
/**
 * mark download paused
 */
export declare const pauseDownload: any;
export declare const setDownloadInterrupted: any;
/**
 * remove a download (and associated file if any)
 */
export declare const removeDownload: any;
/**
 * sets the current download speed in bytes/second
 */
export declare const setDownloadSpeed: any;
/**
 * add a file that has been found on disk but where we weren't involved
 * in the download.
 */
export declare const addLocalDownload: any;
export declare const setDownloadModInfo: any;
export declare const setDownloadInstalled: any;
