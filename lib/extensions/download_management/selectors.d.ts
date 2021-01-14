import { IDownload, IState } from '../../types/IState';
import { OutputParametricSelector } from 're-reselect';
import { OutputSelector } from 'reselect';
declare type DLPathCB = (inPath: string, inGameId: string) => string;
export declare const downloadPath: OutputSelector<any, string, DLPathCB>;
export declare const downloadPathForGame: OutputParametricSelector<IState, string, string, DLPathCB, any>;
export declare const activeDownloads: OutputSelector<IState, {}, (res: {
    [dlId: string]: IDownload;
}) => {}>;
export {};
