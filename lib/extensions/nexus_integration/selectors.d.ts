import type { IState } from "../../types/IState";
export declare const apiKey: (state: IState) => string;
export declare const userInfo: (state: IState) => import("./types/IValidateKeyData").IValidateKeyDataV2;
export declare const isPremium: (state: IState) => boolean;
/**
 * Returns true only when we know for certain the user is not premium.
 * While userInfo is still loading, assumes premium to avoid flashing
 * "Go Premium" ads at paying customers on startup.
 * Use this for ad/banner visibility only — not for feature gating.
 */
export declare const shouldShowPremiumAd: (state: IState) => boolean;
export declare const isLoggedIn: (state: IState) => boolean;
export declare const nexusIdsFromDownloadId: ((state: IState, downloadId: string) => {
    gameDomainName: string;
    fileId: string;
    modId: string;
    numericGameId: number;
    collectionSlug: string;
    collectionId: any;
    revisionId: string;
}) & import("reselect").OutputSelectorFields<(args_0: {
    [id: string]: import("../download_management/types/IDownload").IDownload;
}, args_1: string) => {
    gameDomainName: string;
    fileId: string;
    modId: string;
    numericGameId: number;
    collectionSlug: string;
    collectionId: any;
    revisionId: string;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
