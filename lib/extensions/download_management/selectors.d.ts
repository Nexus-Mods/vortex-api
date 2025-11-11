import { IDownload, IState } from '../../types/IState';
export declare const downloadPath: (state: IState) => string;
export declare function downloadPathForGame(state: IState, gameId?: string): string;
export declare const downloadsForGame: (state: IState, gameId: string) => {
    [dlId: string]: IDownload;
};
export declare const downloadsForActiveGame: (state: IState) => ((state: IState) => {
    [dlId: string]: IDownload;
}) & import("reselect").OutputSelectorFields<(args_0: string) => {
    [dlId: string]: IDownload;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
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
export declare const getDownloadByIds: ((state: IState, identifiers: {
    fileId: number;
    modId: number;
    gameId: string;
}) => IDownload) & import("reselect").OutputSelectorFields<(args_0: {
    [id: string]: IDownload;
}, args_1: {
    fileId: number;
    modId: number;
    gameId: string;
}) => IDownload, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
