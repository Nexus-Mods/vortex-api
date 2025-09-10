import { IState } from '../../types/IState';
export declare const apiKey: (state: IState) => any;
export declare const isLoggedIn: (state: IState) => boolean;
export declare const nexusIdsFromDownloadId: ((state: IState, downloadId: string) => {
    domainName: any;
    fileId: any;
    modId: any;
    numericId: string;
}) & import("reselect").OutputSelectorFields<(args_0: {
    [id: string]: import("../download_management/types/IDownload").IDownload;
}, args_1: string) => {
    domainName: any;
    fileId: any;
    modId: any;
    numericId: string;
} & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
