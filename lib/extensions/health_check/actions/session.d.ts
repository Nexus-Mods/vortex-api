import type { IHealthCheckResult } from "../../../types/IHealthCheck";
import type { IModFileInfo } from "../types";
/**
 * Set the result of a health check
 */
export declare const setHealthCheckResult: import("redux-act").ComplexActionCreator2<string, IHealthCheckResult, {
    checkId: string;
    result: IHealthCheckResult;
}, {}>;
/**
 * Clear a specific health check result
 */
export declare const clearHealthCheckResult: import("redux-act").ComplexActionCreator1<string, string, {}>;
/**
 * Clear all health check results
 */
export declare const clearAllHealthCheckResults: import("redux-act").ComplexActionCreator1<unknown, any, {}>;
/**
 * Set whether a health check is currently running
 */
export declare const setHealthCheckRunning: import("redux-act").ComplexActionCreator2<string, boolean, {
    checkId: string;
    running: boolean;
}, {}>;
/**
 * Set mod files in cache
 */
export declare const setModFiles: import("redux-act").ComplexActionCreator2<number, IModFileInfo[], {
    modId: number;
    files: IModFileInfo[];
}, {}>;
/**
 * Set whether mod files are being loaded
 */
export declare const setModFilesLoading: import("redux-act").ComplexActionCreator2<number, boolean, {
    modId: number;
    loading: boolean;
}, {}>;
