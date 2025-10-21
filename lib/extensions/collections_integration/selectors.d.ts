import { ICollectionInstallSession, ICollectionModInstallInfo, CollectionModStatus } from './types';
import { IState } from '../../types/IState';
/**
 * Get the active installation session
 * @returns The current active session or undefined if no session is active
 */
export declare const getActiveSession: (state: IState) => ICollectionInstallSession | undefined;
/**
 * Get the session ID of the last completed installation
 * @returns The last active session ID or undefined
 */
export declare const getLastActiveSessionId: (state: any) => string | undefined;
/**
 * Get the history of all completed/failed installation sessions
 * @returns Map of session IDs to session data
 */
export declare const getSessionHistory: (state: any) => {
    [sessionId: string]: ICollectionInstallSession;
};
/**
 * Get a specific session from history by ID
 * @param sessionId The session ID to retrieve
 * @returns The session or undefined if not found
 */
export declare const getSessionById: (state: any, sessionId: string) => ICollectionInstallSession | undefined;
/**
 * Get the last completed session from history
 * @returns The last completed session or undefined
 */
export declare const getLastCompletedSession: (state: any) => ICollectionInstallSession | undefined;
/**
 * Check if there is an active installation session
 * @returns True if a session is currently active
 */
export declare const hasActiveSession: (state: any) => boolean;
/**
 * Check if a specific collection is currently being installed
 * @param collectionId The collection ID to check
 * @returns True if the collection is being installed
 */
export declare const isCollectionInstalling: (state: any, collectionId: string) => boolean;
/**
 * Get all mods in the active session
 * @returns Map of rule IDs to mod installation info, or empty object if no active session
 */
export declare const getActiveSessionMods: (state: any) => {
    [ruleId: string]: ICollectionModInstallInfo;
};
/**
 * Get a specific mod from the active session by rule ID
 * @param ruleId The rule ID to retrieve
 * @returns The mod installation info or undefined if not found
 */
export declare const getActiveSessionMod: (state: any, ruleId: string) => ICollectionModInstallInfo | undefined;
/**
 * Get all mods with a specific status from the active session
 * @param status The status to filter by
 * @returns Array of mods with the specified status
 */
export declare const getModsByStatus: (state: any, status: CollectionModStatus) => ICollectionModInstallInfo[];
/**
 * Get all required mods from the active session
 * @returns Array of required mods
 */
export declare const getRequiredMods: (state: any) => ICollectionModInstallInfo[];
/**
 * Get all optional/recommended mods from the active session
 * @returns Array of optional mods
 */
export declare const getOptionalMods: (state: any) => ICollectionModInstallInfo[];
/**
 * Get all mods grouped by phase
 * @returns Map of phase number to array of mods in that phase
 */
export declare const getModsByPhase: (state: any) => Map<number, ICollectionModInstallInfo[]>;
/**
 * Get all mods for a specific phase
 * @param phase The phase number
 * @returns Array of mods in the specified phase
 */
export declare const getModsForPhase: (state: any, phase: number) => ICollectionModInstallInfo[];
/**
 * Get the total number of phases in the active session
 * @returns The highest phase number, or 0 if no active session
 */
export declare const getTotalPhases: (state: any) => number;
/**
 * Get installation progress statistics for the active session
 * @returns Object with various progress metrics
 */
export declare const getInstallProgress: ((state: IState) => {
    totalRequired: number;
    totalOptional: number;
    downloadedCount: number;
    installedCount: number;
    failedCount: number;
    skippedCount: number;
    downloadProgress: number;
    installProgress: number;
    isComplete: boolean;
}) & import("reselect").OutputSelectorFields<(args_0: ICollectionInstallSession) => {
    totalRequired: number;
    totalOptional: number;
    downloadedCount: number;
    installedCount: number;
    failedCount: number;
    skippedCount: number;
    downloadProgress: number;
    installProgress: number;
    isComplete: boolean;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Get the status breakdown for all mods in the active session
 * @returns Object with counts for each status
 */
export declare const getStatusBreakdown: ((state: any) => {
    [status: string]: number;
}) & import("reselect").OutputSelectorFields<(args_0: {
    [ruleId: string]: ICollectionModInstallInfo;
}) => {
    [status: string]: number;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Get mods that are currently in progress (downloading or installing)
 * @returns Array of mods that are actively being processed
 */
export declare const getModsInProgress: (state: any) => ICollectionModInstallInfo[];
/**
 * Get mods that are waiting to be processed
 * @returns Array of mods with 'pending' or 'downloaded' status
 */
export declare const getPendingMods: (state: any) => ICollectionModInstallInfo[];
/**
 * Get mods that have completed (successfully or not)
 * @returns Array of mods with 'installed', 'failed', or 'skipped' status
 */
export declare const getCompletedMods: (state: any) => ICollectionModInstallInfo[];
/**
 * Check if a specific phase is complete
 * @param phase The phase number to check
 * @returns True if all required mods in the phase are completed
 */
export declare const isPhaseComplete: (state: any, phase: number) => boolean;
/**
 * Get the current phase being processed
 * @returns The lowest phase number with incomplete mods, or -1 if all complete
 */
export declare const getCurrentPhase: (state: any) => number;
/**
 * Get detailed phase progress information
 * @returns Array of phase progress objects with stats for each phase
 */
export declare const getPhaseProgress: ((state: any) => {
    phase: number;
    total: number;
    required: number;
    optional: number;
    installed: number;
    failed: number;
    skipped: number;
    pending: number;
    progress: number;
    isComplete: boolean;
}[]) & import("reselect").OutputSelectorFields<(args_0: {
    [ruleId: string]: ICollectionModInstallInfo;
}) => {
    phase: number;
    total: number;
    required: number;
    optional: number;
    installed: number;
    failed: number;
    skipped: number;
    pending: number;
    progress: number;
    isComplete: boolean;
}[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
