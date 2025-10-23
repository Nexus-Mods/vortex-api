"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionPhaseProgress = exports.getCollectionCurrentPhase = exports.isCollectionPhaseComplete = exports.getCollectionCompletedMods = exports.getCollectionPendingMods = exports.getCollectionModsInProgress = exports.getCollectionStatusBreakdown = exports.getCollectionInstallProgress = exports.getCollectionTotalPhases = exports.getCollectionModsForPhase = exports.getCollectionModsByPhase = exports.getCollectionOptionalMods = exports.getCollectionRequiredMods = exports.getCollectionModsByStatus = exports.getCollectionActiveSessionMod = exports.getCollectionActiveSessionMods = exports.isCollectionInstalling = exports.hasCollectionActiveSession = exports.getCollectionLastCompletedSession = exports.getCollectionSessionById = exports.getCollectionSessionHistory = exports.getCollectionLastActiveSessionId = exports.getCollectionActiveSession = void 0;
const reselect_1 = require("reselect");
/**
 * Selectors for the installTracking reducer
 * Provides convenient access to collection installation state data
 */
// Base selector - gets the collections state slice
const getCollectionsState = (state) => {
    var _a;
    return ((_a = state.session) === null || _a === void 0 ? void 0 : _a.collections) || {
        activeSession: undefined,
        lastActiveSessionId: undefined,
        sessionHistory: {},
    };
};
/**
 * Get the active installation session
 * @returns The current active session or undefined if no session is active
 */
const getCollectionActiveSession = (state) => {
    const collectionsState = getCollectionsState(state);
    return collectionsState === null || collectionsState === void 0 ? void 0 : collectionsState.activeSession;
};
exports.getCollectionActiveSession = getCollectionActiveSession;
/**
 * Get the session ID of the last completed installation
 * @returns The last active session ID or undefined
 */
const getCollectionLastActiveSessionId = (state) => {
    const collectionsState = getCollectionsState(state);
    return collectionsState === null || collectionsState === void 0 ? void 0 : collectionsState.lastActiveSessionId;
};
exports.getCollectionLastActiveSessionId = getCollectionLastActiveSessionId;
/**
 * Get the history of all completed/failed installation sessions
 * @returns Map of session IDs to session data
 */
const getCollectionSessionHistory = (state) => {
    const collectionsState = getCollectionsState(state);
    return (collectionsState === null || collectionsState === void 0 ? void 0 : collectionsState.sessionHistory) || {};
};
exports.getCollectionSessionHistory = getCollectionSessionHistory;
/**
 * Get a specific session from history by ID
 * @param sessionId The session ID to retrieve
 * @returns The session or undefined if not found
 */
const getCollectionSessionById = (state, sessionId) => {
    const history = (0, exports.getCollectionSessionHistory)(state);
    return history[sessionId];
};
exports.getCollectionSessionById = getCollectionSessionById;
/**
 * Get the last completed session from history
 * @returns The last completed session or undefined
 */
const getCollectionLastCompletedSession = (state) => {
    const lastId = (0, exports.getCollectionLastActiveSessionId)(state);
    return lastId ? (0, exports.getCollectionSessionById)(state, lastId) : undefined;
};
exports.getCollectionLastCompletedSession = getCollectionLastCompletedSession;
/**
 * Check if there is an active installation session
 * @returns True if a session is currently active
 */
const hasCollectionActiveSession = (state) => {
    return (0, exports.getCollectionActiveSession)(state) !== undefined;
};
exports.hasCollectionActiveSession = hasCollectionActiveSession;
/**
 * Check if a specific collection is currently being installed
 * @param collectionId The collection ID to check
 * @returns True if the collection is being installed
 */
const isCollectionInstalling = (state, collectionId) => {
    const session = (0, exports.getCollectionActiveSession)(state);
    return (session === null || session === void 0 ? void 0 : session.collectionId) === collectionId;
};
exports.isCollectionInstalling = isCollectionInstalling;
/**
 * Get all mods in the active session
 * @returns Map of rule IDs to mod installation info, or empty object if no active session
 */
const getCollectionActiveSessionMods = (state) => {
    const session = (0, exports.getCollectionActiveSession)(state);
    return (session === null || session === void 0 ? void 0 : session.mods) || {};
};
exports.getCollectionActiveSessionMods = getCollectionActiveSessionMods;
/**
 * Get a specific mod from the active session by rule ID
 * @param ruleId The rule ID to retrieve
 * @returns The mod installation info or undefined if not found
 */
const getCollectionActiveSessionMod = (state, ruleId) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    return mods[ruleId];
};
exports.getCollectionActiveSessionMod = getCollectionActiveSessionMod;
/**
 * Get all mods with a specific status from the active session
 * @param status The status to filter by
 * @returns Array of mods with the specified status
 */
const getCollectionModsByStatus = (state, status) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    return Object.values(mods).filter(mod => mod.status === status);
};
exports.getCollectionModsByStatus = getCollectionModsByStatus;
/**
 * Get all required mods from the active session
 * @returns Array of required mods
 */
const getCollectionRequiredMods = (state) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    return Object.values(mods).filter(mod => mod.type === 'requires');
};
exports.getCollectionRequiredMods = getCollectionRequiredMods;
/**
 * Get all optional/recommended mods from the active session
 * @returns Array of optional mods
 */
const getCollectionOptionalMods = (state) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    return Object.values(mods).filter(mod => mod.type === 'recommends');
};
exports.getCollectionOptionalMods = getCollectionOptionalMods;
/**
 * Get all mods grouped by phase
 * @returns Map of phase number to array of mods in that phase
 */
const getCollectionModsByPhase = (state) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    const byPhase = new Map();
    Object.values(mods).forEach(mod => {
        var _a, _b, _c;
        const phase = (_c = (_b = (_a = mod.rule) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.phase) !== null && _c !== void 0 ? _c : 0;
        if (!byPhase.has(phase)) {
            byPhase.set(phase, []);
        }
        byPhase.get(phase).push(mod);
    });
    return byPhase;
};
exports.getCollectionModsByPhase = getCollectionModsByPhase;
/**
 * Get all mods for a specific phase
 * @param phase The phase number
 * @returns Array of mods in the specified phase
 */
const getCollectionModsForPhase = (state, phase) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    return Object.values(mods).filter(mod => { var _a, _b, _c; return ((_c = (_b = (_a = mod.rule) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.phase) !== null && _c !== void 0 ? _c : 0) === phase; });
};
exports.getCollectionModsForPhase = getCollectionModsForPhase;
/**
 * Get the total number of phases in the active session
 * @returns The highest phase number, or 0 if no active session
 */
const getCollectionTotalPhases = (state) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    const phases = Object.values(mods).map(mod => { var _a, _b, _c; return (_c = (_b = (_a = mod.rule) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.phase) !== null && _c !== void 0 ? _c : 0; });
    return phases.length > 0 ? Math.max(...phases) + 1 : 0;
};
exports.getCollectionTotalPhases = getCollectionTotalPhases;
/**
 * Get installation progress statistics for the active session
 * @returns Object with various progress metrics
 */
exports.getCollectionInstallProgress = (0, reselect_1.createSelector)([exports.getCollectionActiveSession], (session) => {
    if (!session) {
        return null;
    }
    const downloadProgress = session.totalRequired > 0
        ? Math.round((session.downloadedCount / session.totalRequired) * 100)
        : 0;
    const installProgress = session.totalRequired > 0
        ? Math.round((session.installedCount / session.totalRequired) * 100)
        : 0;
    const isComplete = session.installedCount + session.failedCount + session.skippedCount >= session.totalRequired;
    return {
        totalRequired: session.totalRequired,
        totalOptional: session.totalOptional,
        downloadedCount: session.downloadedCount,
        installedCount: session.installedCount,
        failedCount: session.failedCount,
        skippedCount: session.skippedCount,
        downloadProgress,
        installProgress,
        isComplete,
    };
});
/**
 * Get the status breakdown for all mods in the active session
 * @returns Object with counts for each status
 */
exports.getCollectionStatusBreakdown = (0, reselect_1.createSelector)([exports.getCollectionActiveSessionMods], (mods) => {
    const breakdown = {
        pending: 0,
        downloading: 0,
        downloaded: 0,
        installing: 0,
        installed: 0,
        failed: 0,
        skipped: 0,
        optional: 0,
    };
    Object.values(mods).forEach(mod => {
        breakdown[mod.status] = (breakdown[mod.status] || 0) + 1;
    });
    return breakdown;
});
/**
 * Get mods that are currently in progress (downloading or installing)
 * @returns Array of mods that are actively being processed
 */
const getCollectionModsInProgress = (state) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    return Object.values(mods).filter(mod => mod.status === 'downloading' || mod.status === 'installing');
};
exports.getCollectionModsInProgress = getCollectionModsInProgress;
/**
 * Get mods that are waiting to be processed
 * @returns Array of mods with 'pending' or 'downloaded' status
 */
const getCollectionPendingMods = (state) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    return Object.values(mods).filter(mod => mod.status === 'pending' || mod.status === 'downloaded');
};
exports.getCollectionPendingMods = getCollectionPendingMods;
/**
 * Get mods that have completed (successfully or not)
 * @returns Array of mods with 'installed', 'failed', or 'skipped' status
 */
const getCollectionCompletedMods = (state) => {
    const mods = (0, exports.getCollectionActiveSessionMods)(state);
    return Object.values(mods).filter(mod => mod.status === 'installed' || mod.status === 'failed' || mod.status === 'skipped');
};
exports.getCollectionCompletedMods = getCollectionCompletedMods;
/**
 * Check if a specific phase is complete
 * @param phase The phase number to check
 * @returns True if all required mods in the phase are completed
 */
const isCollectionPhaseComplete = (state, phase) => {
    const phaseMods = (0, exports.getCollectionModsForPhase)(state, phase);
    const requiredPhaseMods = phaseMods.filter(mod => mod.type === 'requires');
    if (requiredPhaseMods.length === 0) {
        return true;
    }
    return requiredPhaseMods.every(mod => mod.status === 'installed' || mod.status === 'failed' || mod.status === 'skipped');
};
exports.isCollectionPhaseComplete = isCollectionPhaseComplete;
/**
 * Get the current phase being processed
 * @returns The lowest phase number with incomplete mods, or -1 if all complete
 */
const getCollectionCurrentPhase = (state) => {
    const totalPhases = (0, exports.getCollectionTotalPhases)(state);
    for (let phase = 0; phase < totalPhases; phase++) {
        if (!(0, exports.isCollectionPhaseComplete)(state, phase)) {
            return phase;
        }
    }
    return -1; // All phases complete
};
exports.getCollectionCurrentPhase = getCollectionCurrentPhase;
/**
 * Get detailed phase progress information
 * @returns Array of phase progress objects with stats for each phase
 */
exports.getCollectionPhaseProgress = (0, reselect_1.createSelector)([exports.getCollectionActiveSessionMods], (mods) => {
    const byPhase = new Map();
    Object.values(mods).forEach(mod => {
        var _a, _b, _c;
        const phase = (_c = (_b = (_a = mod.rule) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.phase) !== null && _c !== void 0 ? _c : 0;
        if (!byPhase.has(phase)) {
            byPhase.set(phase, []);
        }
        byPhase.get(phase).push(mod);
    });
    const phases = Array.from(byPhase.keys()).sort((a, b) => a - b);
    return phases.map(phase => {
        const phaseMods = byPhase.get(phase);
        const required = phaseMods.filter(m => m.type === 'requires');
        const optional = phaseMods.filter(m => m.type === 'recommends');
        const installed = required.filter(m => m.status === 'installed').length;
        const failed = required.filter(m => m.status === 'failed').length;
        const skipped = required.filter(m => m.status === 'skipped').length;
        const pending = required.filter(m => m.status === 'pending' || m.status === 'downloading' || m.status === 'downloaded' || m.status === 'installing').length;
        const completed = installed + failed + skipped;
        const progress = required.length > 0 ? Math.round((completed / required.length) * 100) : 100;
        const isComplete = completed >= required.length;
        return {
            phase,
            total: phaseMods.length,
            required: required.length,
            optional: optional.length,
            installed,
            failed,
            skipped,
            pending,
            progress,
            isComplete,
        };
    });
});
