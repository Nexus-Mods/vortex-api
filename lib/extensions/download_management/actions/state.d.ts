import type { IChunk } from "../types/IChunk";
export interface IDictionary {
    [key: string]: any;
}
/**
 * initialize a download (it may not be started immediately)
 */
export declare const initDownload: import("redux-act").ComplexActionCreator4<string, string[], IDictionary, string[], {
    id: string;
    urls: string[];
    modInfo: IDictionary;
    games: string[];
}, {}>;
/**
 * set download progress (in percent)
 */
export declare const downloadProgress: import("redux-act").ComplexActionCreator5<string, number, number, IChunk[], string[], {
    id: string;
    received: number;
    total: number;
    chunks: IChunk[];
    urls: string[];
}, {}>;
export declare const finalizingProgress: import("redux-act").ComplexActionCreator2<string, number, {
    id: string;
    progress: number;
}, {}>;
/**
 * set/change the file path
 */
export declare const setDownloadFilePath: import("redux-act").ComplexActionCreator2<string, string, {
    id: string;
    filePath: string;
}, {}>;
/**
 * mark the download as pausable or not
 */
export declare const setDownloadPausable: import("redux-act").ComplexActionCreator2<string, boolean, {
    id: string;
    pausable: boolean;
}, {}>;
/**
 * mark download as started
 */
export declare const startDownload: import("redux-act").ComplexActionCreator1<string, {
    id: string;
}, {}>;
/**
 * mark download as finalizing, meaning the file has been downloaded fully,
 * during this phase checksums are calculated for example
 */
export declare const finalizingDownload: import("redux-act").ComplexActionCreator1<string, {
    id: string;
}, {}>;
/**
 * mark download as finished
 */
export declare const finishDownload: import("redux-act").ComplexActionCreator3<string, "finished" | "failed" | "redirect", any, {
    id: string;
    state: "finished" | "failed" | "redirect";
    failCause: any;
}, {}>;
export declare const setDownloadHash: import("redux-act").ComplexActionCreator2<string, string, {
    id: string;
    fileMD5: string;
}, {}>;
export declare const setDownloadHashByFile: import("redux-act").ComplexActionCreator3<string, string, number, {
    fileName: string;
    fileMD5: string;
    fileSize: number;
}, {}>;
/**
 * mark download paused
 */
export declare const pauseDownload: import("redux-act").ComplexActionCreator3<string, boolean, IChunk[], {
    id: string;
    paused: boolean;
    chunks: IChunk[];
}, {}>;
export declare const setDownloadInterrupted: import("redux-act").ComplexActionCreator2<string, number, {
    id: string;
    realReceived: number;
}, {}>;
/**
 * remove a download (and associated file if any)
 */
export declare const removeDownload: import("redux-act").ComplexActionCreator1<string, {
    id: string;
}, {}>;
export declare const removeDownloadSilent: import("redux-act").ComplexActionCreator1<string, {
    id: string;
}, {}>;
/**
 * sets the current download speed in bytes/second
 */
export declare const setDownloadSpeed: import("redux-act").ComplexActionCreator1<unknown, unknown, {
    forward: boolean;
    scope: string;
}>;
export declare const setDownloadSpeeds: import("redux-act").ComplexActionCreator1<unknown, unknown, {}>;
/**
 * add a file that has been found on disk but where we weren't involved
 * in the download.
 */
export declare const addLocalDownload: import("redux-act").ComplexActionCreator4<string, string, string, number, {
    id: string;
    game: string;
    localPath: string;
    fileSize: number;
}, {}>;
export declare const mergeDownloadModInfo: import("redux-act").ComplexActionCreator2<string, any, {
    id: string;
    value: any;
}, {}>;
export declare const setDownloadModInfo: import("redux-act").ComplexActionCreator3<string, string, any, {
    id: string;
    key: string;
    value: any;
}, {}>;
export declare const setDownloadInstalled: import("redux-act").ComplexActionCreator3<string, string, string, {
    id: string;
    gameId: string;
    modId: string;
}, {}>;
export declare const setDownloadTime: import("redux-act").ComplexActionCreator2<string, number, {
    id: string;
    time: number;
}, {}>;
export declare const setCompatibleGames: import("redux-act").ComplexActionCreator2<string, string[], {
    id: string;
    games: string[];
}, {}>;
