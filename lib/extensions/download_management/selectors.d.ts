import { IDownload, IState } from '../../types/IState';
export declare const downloadPath: (state: IState) => string;
export declare function downloadPathForGame(state: IState, gameId?: string): string;
export declare const queueClearingDownloads: ((state: IState) => {}) & import("reselect").OutputSelectorFields<(args_0: {
    [id: string]: IDownload;
}) => {}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const activeDownloads: ((state: IState) => {}) & import("reselect").OutputSelectorFields<(args_0: {
    [id: string]: IDownload;
}) => {}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
