import { IDownload, IState } from '../../types/IState';
import { OutputSelector } from 'reselect';
declare type DLPathCB = (inPath: string, inGameId: string) => string;
export declare const downloadPath: OutputSelector<any, string, DLPathCB>;
export declare function downloadPathForGame(state: IState, gameId?: string): string;
export declare const activeDownloads: OutputSelector<IState, {}, (res: {
    [dlId: string]: IDownload;
}) => {}>;
export {};
