import { IChunk } from '../types/IChunk';
import * as reduxAct from 'redux-act';
export interface IDictionary {
    [key: string]: any;
}
/**
 * initialize a download (it may not be started immediately)
 */
export declare const initDownload: reduxAct.ComplexActionCreator4<string, string[], IDictionary, string, {
    id: string;
    urls: string[];
    modInfo: IDictionary;
    game: string;
}, {}>;
/**
 * set download progress (in percent)
 */
export declare const downloadProgress: reduxAct.ComplexActionCreator5<string, number, number, IChunk[], string[], {
    id: string;
    received: number;
    total: number;
    chunks: IChunk[];
    urls: string[];
}, {}>;
export declare const finalizingProgress: reduxAct.ComplexActionCreator2<string, number, {
    id: string;
    progress: number;
}, {}>;
/**
 * set/change the file path
 */
export declare const setDownloadFilePath: reduxAct.ComplexActionCreator2<string, string, {
    id: string;
    filePath: string;
}, {}>;
/**
 * mark the download as pausable or not
 */
export declare const setDownloadPausable: reduxAct.ComplexActionCreator2<string, boolean, {
    id: string;
    pausable: boolean;
}, {}>;
/**
 * mark download as started
 */
export declare const startDownload: reduxAct.ComplexActionCreator1<string, {
    id: string;
}, {}>;
/**
 * mark download as finalizing, meaning the file has been downloaded fully,
 * during this phase checksums are calculated for example
 */
export declare const finalizingDownload: reduxAct.ComplexActionCreator1<string, {
    id: string;
}, {}>;
/**
 * mark download as finished
 */
export declare const finishDownload: reduxAct.ComplexActionCreator3<string, "finished" | "failed" | "redirect", any, {
    id: string;
    state: "finished" | "failed" | "redirect";
    failCause: any;
}, {}>;
export declare const setDownloadHash: reduxAct.ComplexActionCreator2<string, string, {
    id: string;
    fileMD5: string;
}, {}>;
export declare const setDownloadHashByFile: reduxAct.ComplexActionCreator3<string, string, number, {
    fileName: string;
    fileMD5: string;
    fileSize: number;
}, {}>;
/**
 * mark download paused
 */
export declare const pauseDownload: reduxAct.ComplexActionCreator3<string, boolean, IChunk[], {
    id: string;
    paused: boolean;
    chunks: IChunk[];
}, {}>;
export declare const setDownloadInterrupted: reduxAct.ComplexActionCreator2<string, number, {
    id: string;
    realReceived: number;
}, {}>;
/**
 * remove a download (and associated file if any)
 */
export declare const removeDownload: reduxAct.ComplexActionCreator1<string, {
    id: string;
}, {}>;
/**
 * sets the current download speed in bytes/second
 */
export declare const setDownloadSpeed: reduxAct.ComplexActionCreator1<unknown, unknown, {
    forward: boolean;
}>;
export declare const setDownloadSpeeds: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
/**
 * add a file that has been found on disk but where we weren't involved
 * in the download.
 */
export declare const addLocalDownload: reduxAct.ComplexActionCreator4<string, string, string, number, {
    id: string;
    game: string;
    localPath: string;
    fileSize: number;
}, {}>;
export declare const mergeDownloadModInfo: reduxAct.ComplexActionCreator2<string, any, {
    id: string;
    value: any;
}, {}>;
export declare const setDownloadModInfo: reduxAct.ComplexActionCreator3<string, string, any, {
    id: string;
    key: string;
    value: any;
}, {}>;
export declare const setDownloadInstalled: reduxAct.ComplexActionCreator3<string, string, string, {
    id: string;
    gameId: string;
    modId: string;
}, {}>;
export declare const setDownloadTime: reduxAct.ComplexActionCreator2<string, number, {
    id: string;
    time: number;
}, {}>;
export declare const setCompatibleGames: reduxAct.ComplexActionCreator2<string, string[], {
    id: string;
    games: string[];
}, {}>;
