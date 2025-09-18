import { IState } from '../../types/IState';
export declare const apiKey: (state: IState) => any;
export declare const isLoggedIn: (state: IState) => boolean;
export declare const nexusIdsFromDownloadId: ((state: IState, downloadId: string) => {
    gameDomainName: any;
    fileId: any;
    modId: any;
    numericGameId: any;
    collectionSlug: any;
    collectionId: any;
    revisionId: any;
}) & import("reselect").OutputSelectorFields<(args_0: {
    [id: string]: import("../download_management/types/IDownload").IDownload;
}, args_1: string) => {
    gameDomainName: any;
    fileId: any;
    modId: any;
    numericGameId: any;
    collectionSlug: any;
    collectionId: any;
    revisionId: any;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
