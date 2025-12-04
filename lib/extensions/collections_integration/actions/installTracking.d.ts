import { ICollectionInstallSession, CollectionModStatus } from '../types';
export declare const startInstallSession: import("redux-act").ComplexActionCreator1<Omit<ICollectionInstallSession, "downloadedCount" | "installedCount" | "failedCount" | "skippedCount">, Omit<ICollectionInstallSession, "downloadedCount" | "installedCount" | "failedCount" | "skippedCount">, {}>;
export declare const updateModStatus: import("redux-act").ComplexActionCreator3<string, string, CollectionModStatus, {
    sessionId: string;
    ruleId: string;
    status: CollectionModStatus;
}, {}>;
export declare const markModInstalled: import("redux-act").ComplexActionCreator3<string, string, string, {
    sessionId: string;
    ruleId: string;
    modId: string;
}, {}>;
export declare const finishInstallSession: import("redux-act").ComplexActionCreator2<string, boolean, {
    sessionId: string;
    success: boolean;
}, {}>;
export declare const clearOldSessions: import("redux-act").ComplexActionCreator1<number, {
    daysOld: number;
}, {}>;
