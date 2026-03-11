import type { IReducerSpec } from "../../../types/IExtensionContext";
import type { IHealthCheckResult } from "../../../types/IHealthCheck";
import type { IModFileInfo } from "../types";
export interface IHealthCheckSessionState {
    /** Results keyed by check ID */
    results: {
        [checkId: string]: IHealthCheckResult;
    };
    /** Check IDs that are currently running */
    runningChecks: string[];
    /** Timestamp of the last full health check run */
    lastFullRun?: number;
    /** Cached mod files keyed by mod ID */
    modFiles: Record<number, IModFileInfo[]>;
    /** Mod IDs currently being fetched */
    loadingModFiles: number[];
}
/**
 * Reducer for health check session state
 */
export declare const sessionReducer: IReducerSpec<IHealthCheckSessionState>;
