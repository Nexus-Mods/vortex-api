"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VARIANT_ACTION = exports.REPLACE_ACTION = exports.INSTALL_ACTION = exports.INI_TWEAKS_PATH = exports.ArchiveBrokenError = void 0;
/* eslint-disable */
const actions_1 = require("../../actions");
const notifications_1 = require("../../actions/notifications");
const BatchContext_1 = require("../../util/BatchContext");
const ConcurrencyLimiter_1 = __importDefault(require("../../util/ConcurrencyLimiter"));
const NotificationAggregator_1 = require("./NotificationAggregator");
const CustomErrors_1 = require("../../util/CustomErrors");
const errorHandling_1 = require("../../util/errorHandling");
const fs = __importStar(require("../../util/fs"));
const log_1 = require("../../util/log");
const message_1 = require("../../util/message");
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const util_1 = require("../../util/util");
const walk_1 = __importDefault(require("../../util/walk"));
const calculateFolderSize_1 = __importDefault(require("../../util/calculateFolderSize"));
const selectors_2 = require("../collections_integration/selectors");
const retrieveCategoryPath_1 = require("../category_management/util/retrieveCategoryPath");
const DownloadManager_1 = require("../download_management/DownloadManager");
const downloadDirectory_1 = require("../download_management/util/downloadDirectory");
const getDownloadGames_1 = __importDefault(require("../download_management/util/getDownloadGames"));
const getGame_1 = require("../gamemode_management/util/getGame");
const modName_1 = __importStar(require("../mod_management/util/modName"));
const convertGameId_1 = require("../nexus_integration/util/convertGameId");
const profiles_1 = require("../profile_management/actions/profiles");
const mods_1 = require("./actions/mods");
const dependencies_1 = __importStar(require("./util/dependencies"));
const filterModInfo_1 = __importDefault(require("./util/filterModInfo"));
const metaLookupMatch_1 = __importDefault(require("./util/metaLookupMatch"));
const queryGameId_1 = __importDefault(require("./util/queryGameId"));
const testModReference_1 = __importStar(require("./util/testModReference"));
const constants_1 = require("./constants");
const InstallContext_1 = __importDefault(require("./InstallContext"));
const listInstaller_1 = __importDefault(require("./listInstaller"));
const modIdManager_1 = __importDefault(require("./modIdManager"));
const stagingDirectory_1 = require("./stagingDirectory");
const nexus_api_1 = require("@nexusmods/nexus-api");
const bluebird_1 = __importDefault(require("bluebird"));
const _ = __importStar(require("lodash"));
const Zip = require("node-7z");
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const shortid_1 = require("shortid");
// Function to get current download manager free slots
function getDownloadFreeSlots(api) {
    return new Promise((resolve) => {
        api.events.emit('get-download-free-slots', (freeSlots) => {
            resolve(freeSlots);
        });
    });
}
// Dynamic concurrency limiter that respects download manager's free slots
class DynamicDownloadConcurrencyLimiter {
    constructor(api) {
        this.mQueue = [];
        this.mRunning = 0;
        this.mApi = api;
    }
    do(cb) {
        return new bluebird_1.default((resolve, reject) => {
            this.mQueue.push({ cb, resolve, reject });
            this.process();
        });
    }
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.mQueue.length === 0) {
                return;
            }
            const freeSlots = yield getDownloadFreeSlots(this.mApi);
            const availableSlots = Math.max(0, freeSlots);
            const toProcess = Math.min(availableSlots, this.mQueue.length);
            for (let i = 0; i < toProcess; i++) {
                const item = this.mQueue.shift();
                if (!item) {
                    break; // Queue was emptied by another process
                }
                const { cb, resolve, reject } = item;
                this.mRunning++;
                // Process each item concurrently
                cb()
                    .then(resolve)
                    .catch(reject)
                    .finally(() => {
                    this.mRunning--;
                    // Process next items after a short delay to allow state to update
                    setTimeout(() => this.process(), 100);
                });
            }
            // If we still have items queued but no slots, check again later
            // Also periodically check for paused downloads that might need to be resumed
            if (this.mQueue.length > 0 && toProcess === 0) {
                setTimeout(() => this.process(), 500);
            }
        });
    }
}
class ArchiveBrokenError extends Error {
    constructor(message) {
        super(`Archive is broken: ${message}`);
        this.name = this.constructor.name;
    }
}
exports.ArchiveBrokenError = ArchiveBrokenError;
class InstructionGroups {
    constructor() {
        this.copy = [];
        this.mkdir = [];
        this.submodule = [];
        this.generatefile = [];
        this.iniedit = [];
        this.unsupported = [];
        this.attribute = [];
        this.setmodtype = [];
        this.error = [];
        this.rule = [];
        this.enableallplugins = [];
    }
}
exports.INI_TWEAKS_PATH = 'Ini Tweaks';
exports.INSTALL_ACTION = 'Update current profile';
exports.REPLACE_ACTION = 'Update all profiles';
exports.VARIANT_ACTION = 'Add Variant';
const archiveExtLookup = new Set([
    '.zip', '.z01', '.7z', '.rar', '.r00', '.001', '.bz2', '.bzip2', '.gz', '.gzip',
    '.xz', '.z', '.lzh',
]);
// file types supported by 7z but we don't want to extract
// I was tempted to put .exe in here but there may actually be cases where the
// exe is a self-extracting archive and we would be able to handle it
const FILETYPES_AVOID = ['.dll'];
function nop() {
    // nop
}
function findDownloadByReferenceTag(downloads, reference) {
    const dlId = (0, dependencies_1.findDownloadByRef)(reference, downloads);
    if (dlId) {
        return dlId;
    }
    if (!(reference === null || reference === void 0 ? void 0 : reference.tag)) {
        return null;
    }
    return Object.keys(downloads).find(id => {
        var _a;
        return ((_a = downloads[id].modInfo) === null || _a === void 0 ? void 0 : _a.referenceTag) === reference.tag ||
            (reference.md5Hint && downloads[id].fileMD5 === reference.md5Hint);
    }) || null;
}
function getReadyDownloadId(downloads, reference, hasActiveOrPendingCheck) {
    const downloadId = findDownloadByReferenceTag(downloads, reference);
    if (!downloadId) {
        return null;
    }
    const download = downloads[downloadId];
    if (download.state === 'finished' && !hasActiveOrPendingCheck(downloadId)) {
        return downloadId;
    }
    return null;
}
function getModsByPhase(allMods, phase) {
    return allMods.filter((mod) => { var _a; return ((_a = mod.phase) !== null && _a !== void 0 ? _a : 0) === phase; });
}
function getRequiredMods(mods) {
    return mods.filter((mod) => mod.type === 'requires');
}
function isModCompleted(mod) {
    return ['installed', 'failed', 'skipped'].includes(mod.status);
}
function checkPhaseCompletion(phaseMods) {
    const requiredMods = getRequiredMods(phaseMods);
    const completedCount = requiredMods.filter(isModCompleted).length;
    const totalCount = requiredMods.length;
    return {
        isComplete: completedCount >= totalCount,
        completed: completedCount,
        total: totalCount
    };
}
function withActivityTracking(api, activityType, activityId, promise) {
    api.store.dispatch((0, actions_1.startActivity)(activityType, activityId));
    return promise.finally(() => {
        api.store.dispatch((0, actions_1.stopActivity)(activityType, activityId));
    });
}
function findCollectionByDownload(state, download, downloadId) {
    var _a, _b;
    const referenceTag = (_a = download.modInfo) === null || _a === void 0 ? void 0 : _a.referenceTag;
    if (!referenceTag) {
        (0, log_1.log)('debug', 'Skipping download - no reference tag', { downloadId });
        return null;
    }
    const gameId = (_b = (0, selectors_1.activeProfile)(state)) === null || _b === void 0 ? void 0 : _b.gameId;
    if (!gameId) {
        (0, log_1.log)('debug', 'No active game profile', { downloadId });
        return null;
    }
    // Get the current active collection installation
    const activeCollection = (0, selectors_2.getCollectionActiveSession)(state);
    if (!(activeCollection === null || activeCollection === void 0 ? void 0 : activeCollection.collectionId)) {
        (0, log_1.log)('debug', 'No active collection installation found', { downloadId });
        return null;
    }
    const mod = state.persistent.mods[gameId][activeCollection.collectionId] || null;
    if (mod && mod.type === 'collection' && mod.rules) {
        const matchingRule = mod.rules.find((rule) => rule.reference.tag === referenceTag || rule.reference.md5Hint === download.fileMD5);
        if (matchingRule) {
            return { collectionMod: mod, matchingRule, gameId };
        }
    }
    (0, log_1.log)('debug', 'No collection found with matching rule for download', { downloadId, referenceTag });
    return null;
}
/**
 * Helper: Filter rules to only include non-ignored requires/recommends rules
 */
function filterDependencyRules(rules) {
    return (rules !== null && rules !== void 0 ? rules : []).filter((rule) => ['recommends', 'requires'].includes(rule.type) && !rule.ignored);
}
/**
 * Helper: Check if dependency installation was canceled via event and handle early return
 * Returns true if should continue, false if canceled
 */
function checkAndEmitDependencyInstallStart(api, gameId, modId, isRecommended) {
    let canceled = false;
    api.events.emit('will-install-dependencies', gameId, modId, isRecommended, () => {
        canceled = true;
    });
    return !canceled;
}
function validateVariantName(t, content) {
    var _a, _b;
    const variantName = (_b = (_a = content.input.find(inp => inp.id === 'variant')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    if ((variantName.length < constants_1.MIN_VARIANT_NAME) || (variantName.length > constants_1.MAX_VARIANT_NAME)) {
        return [{
                id: 'variant',
                actions: ['Continue'],
                errorText: t('Name must be between {{min}}-{{max}} characters long', {
                    replace: {
                        min: constants_1.MIN_VARIANT_NAME,
                        max: constants_1.MAX_VARIANT_NAME,
                    },
                }),
            }];
    }
    else {
        return [];
    }
}
/**
 * central class for the installation process
 *
 * @class InstallManager
 */
class InstallManager {
    constructor(api, installPath) {
        this.mInstallers = [];
        this.mDependencyInstalls = {};
        this.mNotificationAggregationTimeoutMS = 0;
        // This limiter drives the DownloadManager to queue up new downloads.
        this.mDependencyInstallsLimit = new ConcurrencyLimiter_1.default(10);
        // Queues installations for processing - primarily used to keep track of pending installations
        //  for the current dependency phase if/when concurrent download and installation is disabled.
        this.mPendingInstalls = new Map();
        // Tracks the currently active installations - can be used with debug functions
        //  to inspect the state of ongoing installations
        this.mActiveInstalls = new Map();
        // Tracks retry counts for failed dependency installations
        this.mDependencyRetryCount = new Map();
        // Main installation concurrency limiter - replaces sequential mQueue
        this.mMainInstallsLimit = new ConcurrencyLimiter_1.default(5);
        // Map tracking phase gating per sourceMod/collection
        this.mInstallPhaseState = new Map();
        this.modTypeExists = (gameId, modType) => {
            if (!modType || !gameId) {
                return false;
            }
            const game = (0, getGame_1.getGame)(gameId);
            if (game === undefined) {
                return false;
            }
            return game.modTypes.some(type => type.typeId === modType);
        };
        this.mGetInstallPath = installPath;
        this.mDependencyDownloadsLimit = new DynamicDownloadConcurrencyLimiter(api);
        this.mNotificationAggregator = new NotificationAggregator_1.NotificationAggregator(api);
        api.onAsync('install-from-dependencies', (dependentId, rules, recommended) => {
            var _a;
            const profile = (0, selectors_1.activeProfile)(api.getState());
            if (profile === undefined) {
                return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('No game active'));
            }
            const { mods } = api.getState().persistent;
            const collection = (_a = mods[profile.gameId]) === null || _a === void 0 ? void 0 : _a[dependentId];
            if (collection === undefined) {
                return bluebird_1.default.resolve();
            }
            const instPath = this.mGetInstallPath(profile.gameId);
            const filtered = rules.filter(iter => collection.rules.find(rule => _.isEqual(iter, rule)) !== undefined);
            if (recommended) {
                return withActivityTracking(api, 'installing_dependencies', dependentId, this.withDependenciesContext('install-recommendations', () => this.installRecommendationsImpl(api, profile, profile.gameId, dependentId, (0, modName_1.default)(collection), filtered, instPath, true)));
            }
            else {
                return withActivityTracking(api, 'installing_dependencies', dependentId, this.withDependenciesContext('install-collections', () => this.installDependenciesImpl(api, profile, profile.gameId, dependentId, (0, modName_1.default)(collection), filtered, instPath, true)));
            }
        });
        api.onAsync('cancel-dependency-install', (modId) => {
            var _a, _b;
            (_b = (_a = this.mDependencyInstalls)[modId]) === null || _b === void 0 ? void 0 : _b.call(_a);
            return bluebird_1.default.resolve();
        });
        api.onAsync('reset-dependency-installs', () => {
            // Cancel all dependency installs
            Object.values(this.mDependencyInstalls).forEach(cancel => cancel());
            // Clear the dependency installs map
            this.mDependencyInstalls = {};
            // Reset concurrency limiters
            this.mDependencyDownloadsLimit = new DynamicDownloadConcurrencyLimiter(api);
            this.mDependencyInstallsLimit = new ConcurrencyLimiter_1.default(10);
            // Clear all retry counters
            this.mDependencyRetryCount.clear();
            return bluebird_1.default.resolve();
        });
        api.events.on('did-finish-download', (downloadId, state) => {
            if (state === 'finished') {
                this.handleDownloadFinished(api, downloadId);
            }
            else if (state === 'failed') {
                this.handleDownloadFailed(api, downloadId);
            }
        });
    }
    handleDownloadFinished(api, downloadId) {
        var _a, _b, _c, _d;
        const state = api.getState();
        const download = state.persistent.downloads.files[downloadId];
        if (!download || download.state !== 'finished') {
            (0, log_1.log)('debug', 'Skipping download - not found or not finished', { downloadId, state: download === null || download === void 0 ? void 0 : download.state });
            return false;
        }
        // Check if this download is part of a collection installation
        const collectionInfo = findCollectionByDownload(state, download, downloadId);
        if (!collectionInfo) {
            return false;
        }
        const { collectionMod, matchingRule, gameId } = collectionInfo;
        const collectionId = collectionMod.id;
        (0, log_1.log)('debug', 'Found collection for download', { downloadId, collectionId });
        const isInstallingDependencies = !!this.mDependencyInstalls[collectionId];
        const hasPhaseState = this.mInstallPhaseState.has(collectionId);
        if (!isInstallingDependencies && !hasPhaseState) {
            (0, log_1.log)('debug', 'Collection is not currently installing (no active dependency install or phase state)', { collectionId, downloadId });
            return false;
        }
        // Create a dependency object and queue the installation
        const dependency = {
            reference: matchingRule.reference,
            lookupResults: [], // Will be populated if needed
            download: downloadId,
            phase: ((_a = matchingRule.extra) === null || _a === void 0 ? void 0 : _a.phase) || 0,
            patches: (_c = (_b = matchingRule.extra) === null || _b === void 0 ? void 0 : _b.patches) !== null && _c !== void 0 ? _c : matchingRule.reference.patches,
            installerChoices: matchingRule.installerChoices,
            fileList: (_d = matchingRule.fileList) !== null && _d !== void 0 ? _d : matchingRule.reference.fileList,
        };
        // Ensure the phase is marked as having downloads finished
        // This is needed when downloads complete after initial dependency processing
        if (hasPhaseState) {
            this.markPhaseDownloadsFinished(collectionId, dependency.phase, api);
        }
        // Queue the installation
        this.queueInstallation(api, dependency, downloadId, gameId, collectionId, matchingRule.type === 'recommends', dependency.phase);
        return true;
    }
    handleDownloadFailed(api, downloadId) {
        var _a;
        const state = api.getState();
        const download = state.persistent.downloads.files[downloadId];
        if (!download) {
            (0, log_1.log)('debug', 'Skipping download failure - download not found', { downloadId });
            return;
        }
        // Check if this download is part of a collection installation
        const collectionInfo = findCollectionByDownload(state, download, downloadId);
        if (!collectionInfo) {
            return;
        }
        const { collectionMod, matchingRule, gameId } = collectionInfo;
        const collectionId = collectionMod.id;
        (0, log_1.log)('debug', 'Found collection for failed download', { downloadId, collectionId });
        // Check if we're currently in collection installation for this collection
        const isInstallingCollection = !!this.mDependencyInstalls[collectionId] || this.mInstallPhaseState.has(collectionId);
        if (!isInstallingCollection) {
            (0, log_1.log)('debug', 'Collection is not currently installing - ignoring download failure', { collectionId, downloadId });
            return;
        }
        // Get the download error message
        const errorMessage = ((_a = download.failCause) === null || _a === void 0 ? void 0 : _a.message) || 'Download failed due to network or server error';
        const modName = (0, modName_1.renderModReference)(matchingRule.reference);
        // Report the download failure via aggregated notifications for collections
        if (this.mNotificationAggregator) {
            this.mNotificationAggregator.addNotification(collectionId, 'error', 'Collection Download Failed', `Failed to download "${modName}": ${errorMessage}`, modName, { allowReport: false });
        }
        else {
            // Fallback to direct notification if aggregator not available
            api.showErrorNotification('Collection Download Failed', `Failed to download "${modName}": ${errorMessage}`, {
                allowReport: false
            });
        }
    }
    handleDownloadSkipped(api, sourceModId, dep) {
        var _a;
        if (!sourceModId || !dep) {
            return;
        }
        // Check if we're currently in collection installation for this collection
        const isInstallingCollection = !!this.mDependencyInstalls[sourceModId] || this.mInstallPhaseState.has(sourceModId);
        if (!isInstallingCollection) {
            (0, log_1.log)('debug', 'Collection is not currently installing - ignoring skipped download', { sourceModId });
            return;
        }
        const downloads = api.getState().persistent.downloads.files;
        const dlId = (_a = dep.download) !== null && _a !== void 0 ? _a : findDownloadByReferenceTag(downloads, dep.reference);
        if (dlId != null) {
            // Remove any active or pending installation for this dependency
            const installKey = this.generateDependencyInstallKey(sourceModId, dlId);
            this.mPendingInstalls.delete(installKey);
            this.mActiveInstalls.delete(installKey);
        }
        // See if we can advance the phase
        this.maybeAdvancePhase(sourceModId, api);
    }
    /**
     * Get information about all currently active installations
     */
    getActiveInstallations() {
        return Array.from(this.mActiveInstalls.values());
    }
    /**
     * Get information about a specific active installation
     */
    getActiveInstallation(installId) {
        return this.mActiveInstalls.get(installId);
    }
    /**
     * Check if an installation is currently active
     */
    isInstallationActive(installId) {
        return this.mActiveInstalls.has(installId);
    }
    /**
     * Get count of active installations
     */
    getActiveInstallationCount() {
        return this.mActiveInstalls.size;
    }
    /**
     * Debug method: Get details about active installations
     */
    debugActiveInstalls() {
        const now = Date.now();
        return Array.from(this.mActiveInstalls.entries()).map(([key, install]) => ({
            installId: key,
            modId: install.modId,
            gameId: install.gameId,
            baseName: install.baseName,
            durationMs: now - install.startTime,
            durationMinutes: Math.round((now - install.startTime) / 60000 * 100) / 100
        }));
    }
    /**
     * Force cleanup of stuck installations (for debugging)
     * @param maxAgeMinutes - installations older than this will be force-cleaned
     */
    forceCleanupStuckInstalls(api, maxAgeMinutes = 10) {
        const now = Date.now();
        const maxAgeMs = maxAgeMinutes * 60 * 1000;
        const stuckInstalls = [];
        this.mActiveInstalls.forEach((install, installId) => {
            const age = now - install.startTime;
            if (age > maxAgeMs) {
                stuckInstalls.push(install);
            }
        });
        // Force cleanup of stuck installations
        stuckInstalls.forEach(install => {
            const { installId, modId, callback } = install;
            this.mActiveInstalls.delete(installId);
            try {
                const timeoutError = new Error(`Installation timed out after ${maxAgeMinutes} minutes`);
                timeoutError.name = 'InstallationTimeoutError';
                callback(timeoutError, modId);
                (0, log_1.log)('info', 'InstallManager: Called callback for stuck installation', { installId, modId });
            }
            catch (callbackError) {
                (0, log_1.log)('error', 'InstallManager: Error calling callback for stuck installation', {
                    installId,
                    modId,
                    error: callbackError.message
                });
            }
            // Try to dismiss any lingering notifications
            try {
                api.store.dispatch((0, notifications_1.dismissNotification)(`install_${installId}`));
                api.store.dispatch((0, notifications_1.dismissNotification)(`ready-to-install-${installId}`));
            }
            catch (err) {
                (0, log_1.log)('warn', 'Error dismissing notification during force cleanup', { installId, error: err.message });
            }
        });
        return stuckInstalls.length;
    }
    /**
     * add an installer extension
     *
     * @param {number} priority priority of the installer. the lower the number the higher
     *                          the priority, so at priority 0 the extension would always be
     *                          the first to be queried
     * @param {TestSupported} testSupported
     * @param {IInstall} install
     *
     * @memberOf InstallManager
     */
    addInstaller(id, priority, testSupported, install) {
        this.mInstallers.push({ id, priority, testSupported, install });
        this.mInstallers.sort((lhs, rhs) => {
            return lhs.priority - rhs.priority;
        });
    }
    simulate(api, gameId, archivePath, tempPath, extractList, unattended, installChoices, progress) {
        // Create a dedicated Zip instance for this simulation to prevent conflicts
        const simulationZip = new Zip();
        let extractProm;
        if (FILETYPES_AVOID.includes(path.extname(archivePath).toLowerCase())) {
            extractProm = bluebird_1.default.reject(new ArchiveBrokenError('file type on avoidlist'));
        }
        else {
            extractProm = simulationZip.extractFull(archivePath, tempPath, { ssc: false }, progress, () => this.queryPassword(api.store))
                .catch((err) => this.isCritical(err.message)
                ? bluebird_1.default.reject(new ArchiveBrokenError(err.message))
                : bluebird_1.default.reject(err));
        }
        const fileList = [];
        return extractProm
            .then(({ code, errors }) => {
            (0, log_1.log)('debug', 'extraction completed');
            if (code !== 0) {
                (0, log_1.log)('warn', 'extraction reported error', { code, errors: errors.join('; ') });
                const critical = errors.find(this.isCritical);
                if (critical !== undefined) {
                    return bluebird_1.default.reject(new ArchiveBrokenError(critical));
                }
                return this.queryContinue(api, errors, archivePath);
            }
            else {
                return bluebird_1.default.resolve();
            }
        })
            .then(() => (0, walk_1.default)(tempPath, (iterPath, stats) => {
            if (stats.isFile()) {
                fileList.push(path.relative(tempPath, iterPath));
            }
            else {
                // unfortunately we also have to pass directories because
                // some mods contain empty directories to control stop-folder
                // management...
                fileList.push(path.relative(tempPath, iterPath) + path.sep);
            }
            return bluebird_1.default.resolve();
        }))
            .then(() => {
            if ((0, util_1.truthy)(extractList) && extractList.length > 0) {
                return (0, listInstaller_1.default)(extractList, tempPath);
            }
            else {
                return this.getInstaller(fileList, gameId, archivePath);
            }
        })
            .then(supportedInstaller => {
            if (supportedInstaller === undefined) {
                throw new Error('no installer supporting this file');
            }
            const { installer, requiredFiles } = supportedInstaller;
            const collectionInstallState = (0, selectors_2.getCollectionActiveSession)(api.getState());
            const overrideInstructionsFilePresentInArchive = fileList.some(file => path.basename(file) === constants_1.VORTEX_OVERRIDE_INSTRUCTIONS_FILENAME);
            const details = collectionInstallState ? null : {
                hasInstructionsOverrideFile: overrideInstructionsFilePresentInArchive,
            };
            return installer.install(fileList, tempPath, gameId, (perc) => {
                (0, log_1.log)('info', 'progress', perc);
                progress([], perc);
            }, installChoices, unattended, archivePath);
        });
    }
    /**
     * start installing a mod.
     *
     * @param {string} archiveId id of the download. may be null if the download isn't
     *                           in our download archive
     * @param {string} archivePath path to the archive file
     * @param {string} downloadGameId gameId of the download as reported by the downloader
     * @param {IExtensionApi} extension api
     * @param {*} info existing information about the mod (i.e. stuff retrieved
     *                 from the download page)
     * @param {boolean} processDependencies if true, test if the installed mod is dependent
     *                                      of others and tries to install those too
     * @param {boolean} enable if true, enable the mod after installation
     * @param {Function} callback callback once this is finished
     * @param {boolean} forceGameId set if the user has already been queried which game
     *                              to install the mod for
     * @param {IFileListItem[]} fileList if set, the listed files (and only those) get extracted
     *                                   directly, ignoring any installer scripts
     * @param {boolean} unattended if set and there is an option preset, the installation
     *                             will happen automatically without user interaction
     * @param {boolean} forceInstaller if set, this should be the id of an installer
     *                                 (registerInstaller) to be used, instead of going through
     *                                 the auto-detection.
     */
    install(archiveId, archivePath, downloadGameIds, api, info, processDependencies, enable, callback, forceGameId, fileList, unattended, forceInstaller, allowAutoDeploy, sourceModId, modReference) {
        const baseName = path.basename(archivePath, path.extname(archivePath)).trim() || 'EMPTY_NAME';
        const installId = this.generateDependencyInstallKey(sourceModId, archiveId);
        const dummyArchiveId = archiveId || 'direct-install-' + (0, shortid_1.generate)();
        const installInfo = {
            installId,
            archiveId: archiveId || dummyArchiveId,
            archivePath,
            modId: baseName, // Will be updated when final modId is determined
            gameId: '', // Will be updated when gameId is determined
            callback,
            startTime: Date.now(),
            baseName
        };
        this.mActiveInstalls.set(installId, installInfo);
        // Wrap callback to ensure proper cleanup and tracking
        const trackedCallback = (err, id) => {
            const activeInstall = this.mActiveInstalls.get(installId);
            if (activeInstall) {
                activeInstall.modId = id || activeInstall.modId;
                if (!err) {
                    (0, log_1.log)('info', 'Installation completed successfully', {
                        installId,
                        modId: id,
                        duration: Date.now() - activeInstall.startTime
                    });
                }
            }
            // Call the original callback
            callback === null || callback === void 0 ? void 0 : callback(err, id);
            // Clean up tracking
            this.mActiveInstalls.delete(installId);
        };
        if (archiveId && archiveId !== null) {
            const download = api.getState().persistent.downloads.files[archiveId];
            if (download && download.state !== 'finished') {
                const error = new Error(`Cannot install: download not finished (state: ${download.state})`);
                trackedCallback(error, undefined);
                return;
            }
        }
        // Use parallel installation concurrency limiter instead of sequential mQueue
        this.mMainInstallsLimit.do(() => {
            return new Promise((resolve, reject) => {
                const installationZip = new Zip();
                const currentProfile = (0, selectors_1.activeProfile)(api.store.getState());
                const fullInfo = Object.assign({}, info);
                let rules = [];
                let overrides = [];
                let destinationPath;
                let tempPath;
                // Use the already-created installation tracking
                const activeInstall = this.mActiveInstalls.get(installId);
                if (!activeInstall) {
                    const error = new Error('Installation tracking lost');
                    trackedCallback(error, undefined);
                    reject(error);
                    return;
                }
                api.dismissNotification(`ready-to-install-${archiveId !== null && archiveId !== void 0 ? archiveId : dummyArchiveId}`);
                let installProfile = currentProfile;
                let modId = baseName;
                let installGameId;
                let installContext;
                let archiveMD5;
                let archiveSize;
                // Update the callback to also handle promise resolution
                const promiseCallback = (err, id) => {
                    // Update the installation info with final details before calling tracked callback
                    const activeInstall = this.mActiveInstalls.get(installId);
                    if (activeInstall) {
                        activeInstall.modId = id || modId;
                        activeInstall.gameId = installGameId || '';
                    }
                    trackedCallback(err, id);
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(id);
                    }
                };
                let existingMod;
                // Start the installation process - the promise will resolve when callback is called
                const installationPromise = (0, errorHandling_1.withContext)('Installing', baseName, () => ((forceGameId !== undefined)
                    ? bluebird_1.default.resolve(forceGameId)
                    : (0, queryGameId_1.default)(api.store, downloadGameIds, modId))
                    .then((gameId) => __awaiter(this, void 0, void 0, function* () {
                    // Convert game ID from Nexus page ID to internal ID if necessary
                    const state = api.getState();
                    const games = (0, selectors_1.knownGames)(state);
                    const convertedGameId = (0, convertGameId_1.convertGameIdReverse)(games, gameId);
                    installGameId = convertedGameId || gameId; // Use converted ID or fallback to original
                    if (installGameId === undefined) {
                        return Promise.reject(new CustomErrors_1.ProcessCanceled('You need to select a game before installing this mod'));
                    }
                    if (installGameId === 'site' && baseName.toLowerCase().includes('extension')) {
                        // Assumption here is that anything we try to install from the "Modding Tools"/"site" domain
                        //  that contains "extension" in its archive name is an extension... If a non-extension tool
                        //  contains "extension" in its archive name... well, that's not good but there's nothing we can
                        //  do without API providing a unique tag for us to identify Vortex extensions. (AFAIK we can't even query the existing tags from the website)
                        // Installation of non-Vortex tools with the extension basename will just install as a mod for
                        //  the current game which I guess should be fine.
                        return Promise.resolve(installGameId);
                    }
                    if (games.find(iter => iter.id === installGameId) === undefined) {
                        return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled(`Game not supported "${installGameId}"`));
                    }
                    if (installGameId !== (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.gameId)) {
                        const installProfileId = (0, selectors_1.lastActiveProfileForGame)(state, installGameId);
                        installProfile = (0, selectors_1.profileById)(state, installProfileId);
                    }
                    // TODO make the download first functionality optional
                    yield api.emitAndAwait('will-install-mod', installGameId, archiveId, modId, fullInfo);
                    return bluebird_1.default.resolve(installGameId);
                }))
                    // calculate the md5 hash here so we can store it with the mod meta information later,
                    // otherwise we'd not remember the hash when installing from external file
                    .tap(() => {
                    // Check if we already have the hash from the download to avoid recalculation
                    const existingHash = (0, storeHelper_1.getSafe)(fullInfo, ['download', 'fileMD5'], undefined);
                    const existingSize = (0, storeHelper_1.getSafe)(fullInfo, ['download', 'size'], undefined);
                    if (existingHash && existingSize) {
                        archiveMD5 = existingHash;
                        archiveSize = existingSize;
                        return Promise.resolve();
                    }
                    // Only calculate hash if we don't have it
                    return api.genMd5Hash(archivePath).then(hash => {
                        archiveMD5 = hash.md5sum;
                        archiveSize = hash.numBytes;
                        try {
                            _.merge(fullInfo, {
                                download: {
                                    fileMD5: archiveMD5,
                                    size: archiveSize,
                                },
                            });
                        }
                        catch (err) {
                            // no operation
                        }
                    });
                })
                    .then(gameId => {
                    if (installGameId === 'site') {
                        // install an already-downloaded extension
                        return api.emitAndAwait('install-extension-from-download', archiveId)
                            .then(() => bluebird_1.default.reject(new CustomErrors_1.UserCanceled()));
                    }
                    installContext = new InstallContext_1.default(gameId, api, unattended, sourceModId ? this.mNotificationAggregator : undefined, sourceModId);
                    installContext.startIndicator(baseName);
                    let dlGame = (0, storeHelper_1.getSafe)(fullInfo, ['download', 'game'], gameId);
                    if (Array.isArray(dlGame)) {
                        dlGame = dlGame[0];
                    }
                    return api.lookupModMeta({ fileMD5: archiveMD5, fileSize: archiveSize, gameId: installGameId });
                })
                    .then((modInfo) => {
                    (0, log_1.log)('debug', 'got mod meta information', { archivePath, resultCount: modInfo.length });
                    const match = (0, metaLookupMatch_1.default)(modInfo, path.basename(archivePath), installGameId);
                    if (match !== undefined) {
                        fullInfo.meta = match.value;
                    }
                    modId = this.deriveInstallName(baseName, fullInfo);
                    let testModId = modId;
                    // if the name is already taken, consult the user,
                    // repeat until user canceled, decided to replace the existing
                    // mod or provided a new, unused name
                    let variantCounter = 0;
                    let replacementChoice = undefined;
                    const checkNameLoop = () => {
                        if (replacementChoice === 'replace') {
                            (0, log_1.log)('debug', '(nameloop) replacement choice "replace"', { testModId: testModId !== null && testModId !== void 0 ? testModId : '<undefined>' });
                            return Promise.resolve(testModId);
                        }
                        const modNameMatches = this.checkModNameExists(testModId, api, installGameId);
                        const variantMatches = this.checkModVariantsExist(api, installGameId, archiveId);
                        const existingIds = ((replacementChoice === 'variant')
                            ? modNameMatches
                            : Array.from(new Set([].concat(modNameMatches, variantMatches))))
                            .filter(id => id !== undefined);
                        if (existingIds.length === 0) {
                            (0, log_1.log)('debug', '(nameloop) no existing ids', { testModId: testModId !== null && testModId !== void 0 ? testModId : '<undefined>' });
                            return Promise.resolve(testModId);
                        }
                        else {
                            const installOptions = Object.assign(Object.assign({}, info), { unattended, variantNumber: ++variantCounter, fileList });
                            return this.queryUserReplace(api, existingIds, installGameId, installOptions)
                                .then((choice) => {
                                if (choice.id === undefined) {
                                    (0, log_1.log)('error', '(nameloop) no valid id selection', { testModId, modNameMatches, variantMatches });
                                }
                                testModId = choice.id;
                                replacementChoice = choice.replaceChoice;
                                if (choice.enable) {
                                    enable = true;
                                }
                                (0, util_1.setdefault)(fullInfo, 'custom', {}).variant = choice.variant;
                                rules = choice.rules || [];
                                fullInfo.previous = choice.attributes;
                                return checkNameLoop();
                            });
                        }
                    };
                    return checkNameLoop();
                })
                    // TODO: this is only necessary to get at the fileId and the fileId isn't
                    //   even a particularly good way to discover conflicts
                    .then(newModId => {
                    if (newModId === undefined) {
                        // this shouldn't be possible, how would checkNameLoop return undefined?
                        const err = new Error('failed to generate mod id');
                        err['originalModId'] = modId;
                        err['archivePath'] = archivePath;
                        return bluebird_1.default.reject(err);
                    }
                    modId = newModId;
                    (0, log_1.log)('debug', 'mod id for newly installed mod', { archivePath, modId });
                    return (0, filterModInfo_1.default)(fullInfo, undefined);
                })
                    .then(modInfo => {
                    var _a, _b;
                    const fileId = (_a = modInfo.fileId) !== null && _a !== void 0 ? _a : modInfo.revisionId;
                    const isCollection = modInfo.revisionId !== undefined;
                    existingMod = (fileId !== undefined)
                        ? this.findPreviousVersionMod(fileId, api.store, installGameId, isCollection)
                        : undefined;
                    const mods = (_b = api.getState().persistent.mods[installGameId]) !== null && _b !== void 0 ? _b : {};
                    const dependentRule = Object.keys(mods)
                        .reduce((prev, iter) => {
                        var _a;
                        const depRule = ((_a = mods[iter].rules) !== null && _a !== void 0 ? _a : [])
                            .find(rule => (rule.type === 'requires')
                            && (0, testModReference_1.default)(existingMod, rule.reference));
                        if (depRule !== undefined) {
                            prev[iter] = { owner: iter, rule: depRule };
                        }
                        return prev;
                    }, {});
                    let broken = [];
                    if ((0, util_1.truthy)(archiveId)) {
                        const download = api.getState().persistent.downloads.files[archiveId];
                        if (download !== undefined) {
                            const lookup = (0, dependencies_1.lookupFromDownload)(download);
                            broken = Object.keys(dependentRule)
                                .filter(iter => (!(0, testModReference_1.idOnlyRef)(dependentRule[iter].rule.reference)
                                && !(0, testModReference_1.default)(lookup, dependentRule[iter].rule.reference)));
                        }
                    }
                    if (broken.length > 0) {
                        return this.queryIgnoreDependent(api.store, installGameId, broken.map(id => dependentRule[id]));
                    }
                    else {
                        return bluebird_1.default.resolve();
                    }
                })
                    .then(() => {
                    if ((existingMod !== undefined) && (fullInfo.choices === undefined)) {
                        fullInfo.choices = (0, storeHelper_1.getSafe)(existingMod, ['attributes', 'installerChoices'], undefined);
                    }
                    if ((existingMod !== undefined) && (installProfile !== undefined)) {
                        const wasEnabled = (0, storeHelper_1.getSafe)(installProfile.modState, [existingMod.id, 'enabled'], false);
                        return this.userVersionChoice(existingMod, api.store)
                            .then((action) => {
                            if (action === exports.INSTALL_ACTION) {
                                enable = enable || wasEnabled;
                                if (wasEnabled) {
                                    (0, profiles_1.setModsEnabled)(api, installProfile.id, [existingMod.id], false, {
                                        allowAutoDeploy,
                                        installed: true,
                                    });
                                }
                                rules = existingMod.rules || [];
                                overrides = existingMod.fileOverrides;
                                fullInfo.previous = existingMod.attributes;
                                return bluebird_1.default.resolve();
                            }
                            else if (action === exports.REPLACE_ACTION) {
                                rules = existingMod.rules || [];
                                overrides = existingMod.fileOverrides;
                                fullInfo.previous = existingMod.attributes;
                                // we need to remove the old mod before continuing. This ensures
                                // the mod is deactivated and undeployed (so we're not leave dangling
                                // links) and it ensures we do a clean install of the mod
                                return new bluebird_1.default((resolve, reject) => {
                                    api.events.emit('remove-mod', installGameId, existingMod.id, (error) => {
                                        if (error !== null) {
                                            reject(error);
                                        }
                                        else {
                                            // use the same mod id as the old version so that all profiles
                                            // keep using it.
                                            modId = existingMod.id;
                                            enable = enable || wasEnabled;
                                            resolve();
                                        }
                                    }, { willBeReplaced: true });
                                });
                            }
                        });
                    }
                    else {
                        return bluebird_1.default.resolve();
                    }
                })
                    .then(() => {
                    installContext.startInstallCB(modId, installGameId, archiveId);
                    destinationPath = path.join(this.mGetInstallPath(installGameId), modId);
                    (0, log_1.log)('info', 'installing to', { modId, destinationPath });
                    installContext.setInstallPathCB(modId, destinationPath);
                    tempPath = destinationPath + '.installing';
                    const details = {
                        modReference,
                    };
                    return this.installInner(api, archivePath, tempPath, destinationPath, installGameId, installContext, installationZip, forceInstaller, fullInfo.choices, fileList, unattended, details);
                })
                    .then(result => {
                    const state = api.store.getState();
                    if ((0, storeHelper_1.getSafe)(state, ['persistent', 'mods', installGameId, modId, 'type'], '') === '') {
                        return this.determineModType(installGameId, result.instructions)
                            .then(type => {
                            installContext.setModType(modId, type);
                            return result;
                        });
                    }
                    else {
                        return bluebird_1.default.resolve(result);
                    }
                })
                    .then((result) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const overrideFile = result.instructions.find(iter => iter.type === 'copy' && path.basename(iter.source) === constants_1.VORTEX_OVERRIDE_INSTRUCTIONS_FILENAME);
                        if (!overrideFile) {
                            return result;
                        }
                        // Remove the override instruction - we don't want to deploy this.
                        result.instructions = result.instructions.filter(iter => iter !== overrideFile);
                        const content = yield fs.readFileAsync(path.join(tempPath, overrideFile.source), 'utf8');
                        const rawInstructions = JSON.parse(content);
                        // filter out any instructions that could potentially be malicious.
                        const overrideInstructions = rawInstructions.filter(iter => !['generatefile', 'unsupported', 'error'].includes(iter.type));
                        return { instructions: result.instructions, overrideInstructions };
                    }
                    catch (err) {
                        (0, log_1.log)('warn', 'failed to read override instructions', err);
                        return result;
                    }
                }))
                    .then((result) => {
                    const startTime = Date.now();
                    return this.processInstructions(api, installContext, archivePath, tempPath, destinationPath, installGameId, modId, result, fullInfo.choices, unattended)
                        .tap(() => {
                        const endTime = Date.now();
                        (0, log_1.log)('debug', 'processed instructions', { installId: activeInstall.installId, duration: endTime - startTime });
                    });
                })
                    .finally(() => {
                    if (tempPath !== undefined) {
                        (0, log_1.log)('debug', 'removing temporary path', tempPath);
                        return fs.removeAsync(tempPath);
                    }
                    else {
                        return bluebird_1.default.resolve();
                    }
                })
                    .then(() => (0, filterModInfo_1.default)(fullInfo, destinationPath))
                    .then(modInfo => {
                    var _a, _b;
                    const state = api.getState();
                    const existingKeys = Object.keys(((_b = (_a = state.persistent.mods[installGameId]) === null || _a === void 0 ? void 0 : _a[modId]) === null || _b === void 0 ? void 0 : _b.attributes) || {});
                    installContext.finishInstallCB('success', _.omit(modInfo, existingKeys));
                    (rules !== null && rules !== void 0 ? rules : []).forEach(rule => {
                        api.store.dispatch((0, mods_1.addModRule)(installGameId, modId, rule));
                    });
                    api.store.dispatch((0, mods_1.setFileOverride)(installGameId, modId, overrides));
                    if (installProfile !== undefined) {
                        if (enable) {
                            (0, profiles_1.setModsEnabled)(api, installProfile.id, [modId], true, {
                                allowAutoDeploy,
                                installed: true,
                            });
                        }
                    }
                    this.setModSize(api, modId, installGameId);
                    promiseCallback === null || promiseCallback === void 0 ? void 0 : promiseCallback(null, modId);
                    api.events.emit('did-install-mod', installGameId, archiveId, modId, modInfo);
                    return null;
                })
                    .catch(err => {
                    // TODO: make this nicer. especially: The first check doesn't recognize UserCanceled
                    //   exceptions from extensions, hence we have to do the string check (last one)
                    const canceled = (err instanceof CustomErrors_1.UserCanceled)
                        || (err instanceof CustomErrors_1.TemporaryError)
                        || (err instanceof CustomErrors_1.ProcessCanceled)
                        || !(0, util_1.truthy)(err)
                        || (err.message === 'Canceled')
                        || ((0, util_1.truthy)(err.stack)
                            && err.stack.startsWith('UserCanceled: canceled by user'));
                    let prom = destinationPath !== undefined
                        ? fs.removeAsync(destinationPath)
                            .catch(CustomErrors_1.UserCanceled, () => null)
                            .catch(innerErr => {
                            installContext.reportError('Failed to clean up installation directory "{{destinationPath}}", '
                                + 'please close Vortex and remove it manually.', innerErr, innerErr.code !== 'ENOTEMPTY', { destinationPath });
                        })
                        : bluebird_1.default.resolve();
                    if (installContext !== undefined) {
                        const pretty = (0, message_1.prettifyNodeErrorMessage)(err);
                        // context doesn't have to be set if we canceled early
                        prom = prom.then(() => installContext.finishInstallCB(canceled ? 'canceled' : 'failed', undefined, api.translate(pretty.message, { replace: pretty.replace })));
                    }
                    if (err === undefined) {
                        return prom.then(() => {
                            promiseCallback === null || promiseCallback === void 0 ? void 0 : promiseCallback(new Error('unknown error'), null);
                        });
                    }
                    else if (canceled) {
                        return prom.then(() => {
                            promiseCallback === null || promiseCallback === void 0 ? void 0 : promiseCallback(err, null);
                        });
                    }
                    else if (err instanceof ArchiveBrokenError) {
                        return prom
                            .then(() => {
                            callback === null || callback === void 0 ? void 0 : callback(err, null);
                            if (unattended) {
                                return Promise.resolve();
                            }
                            if (installContext !== undefined) {
                                api.sendNotification({
                                    type: 'info',
                                    title: 'Installation failed, archive is damaged',
                                    message: path.basename(archivePath),
                                    actions: [
                                        {
                                            title: 'Delete', action: dismiss => {
                                                api.events.emit('remove-download', archiveId, dismiss);
                                            }
                                        },
                                        {
                                            title: 'Delete & Redownload', action: dismiss => {
                                                const state = api.store.getState();
                                                const download = state.persistent.downloads.files[archiveId];
                                                api.events.emit('remove-download', archiveId, () => {
                                                    dismiss();
                                                    api.events.emit('start-download', download.urls, info.download, path.basename(archivePath));
                                                });
                                                dismiss();
                                            }
                                        },
                                    ],
                                });
                            }
                        });
                    }
                    else if (err instanceof CustomErrors_1.SetupError) {
                        return prom
                            .then(() => {
                            if (installContext !== undefined) {
                                installContext.reportError('Installation failed', err, false, {
                                    installerPath: path.basename(archivePath),
                                    message: err.message,
                                });
                            }
                            callback === null || callback === void 0 ? void 0 : callback(err, null);
                        });
                    }
                    else if (err instanceof CustomErrors_1.DataInvalid) {
                        return prom
                            .then(() => {
                            if (installContext !== undefined) {
                                installContext.reportError('Installation failed', 'The installer {{ installerPath }} is invalid and couldn\'t be '
                                    + 'installed:\n{{ message }}\nPlease inform the mod author.\n', false, {
                                    installerPath: path.basename(archivePath),
                                    message: err.message,
                                });
                            }
                            callback === null || callback === void 0 ? void 0 : callback(err, null);
                        });
                    }
                    else if (err['code'] === 'MODULE_NOT_FOUND') {
                        const location = err['requireStack'] !== undefined
                            ? ` (at ${err['requireStack'][0]})`
                            : '';
                        installContext.reportError('Installation failed', 'Module failed to load:\n{{message}}{{location}}\n\n'
                            + 'This usually indicates that the Vortex installation has been '
                            + 'corrupted or an external application (like an Anti-Virus) has interfered with '
                            + 'the loading of the module. '
                            + 'Please check whether your AV reported something and try reinstalling Vortex.', false, {
                            location,
                            message: err.message.split('\n')[0],
                        });
                        callback === null || callback === void 0 ? void 0 : callback(err, null);
                    }
                    else {
                        return prom
                            .then(() => api.genMd5Hash(archivePath).catch(() => ({})))
                            .then((hashResult) => {
                            const id = `${path.basename(archivePath)} (md5: ${hashResult.md5sum})`;
                            let replace = {};
                            if (typeof err === 'string') {
                                err = 'The installer "{{ id }}" failed: {{ message }}';
                                replace = {
                                    id,
                                    message: err,
                                };
                            }
                            if (installContext !== undefined) {
                                const browserAssistantMsg = 'The installer has failed due to an external 3rd '
                                    + 'party application you have installed on your system named '
                                    + '"Browser Assistant". This application inserts itself globally '
                                    + 'and breaks any other application that uses the same libraries as it does.\n\n'
                                    + 'To use Vortex, please uninstall "Browser Assistant".';
                                const errorMessage = (typeof err === 'string') ? err : err.message;
                                let allowReport;
                                if (err.message.includes('No compatible .NET installation')) {
                                    allowReport = false;
                                }
                                (!this.isBrowserAssistantError(errorMessage))
                                    ? installContext.reportError('Installation failed', err, allowReport, replace)
                                    : installContext.reportError('Installation failed', browserAssistantMsg, false);
                            }
                            callback === null || callback === void 0 ? void 0 : callback(err, modId);
                        });
                    }
                })
                    .finally(() => {
                    if (installContext !== undefined) {
                        const state = api.store.getState();
                        const mod = (0, storeHelper_1.getSafe)(state, ['persistent', 'mods', installGameId, modId], undefined);
                        try {
                            installContext.stopIndicator(mod);
                        }
                        catch (stopError) {
                            (0, log_1.log)('error', 'InstallManager: Error in stopIndicator during cleanup', {
                                installId,
                                modId: modId || 'unknown',
                                error: stopError.message,
                                stack: stopError.stack
                            });
                        }
                    }
                }));
                // Handle the installationPromise completion/failure
                installationPromise
                    .then(() => {
                    // Installation completed successfully - the callback should have been called
                    // If we reach here without the callback being called, something went wrong
                    if (this.mActiveInstalls.has(installId)) {
                        (0, log_1.log)('warn', 'Installation completed but callback was not called', { installId, modId });
                        if (installContext !== undefined) {
                            try {
                                // Force call finishInstallCB if it wasn't called (this can happen with FOMOD installers)
                                if ((installContext === null || installContext === void 0 ? void 0 : installContext['mInstallOutcome']) === undefined) {
                                    (0, log_1.log)('info', 'InstallManager: Forcing finishInstallCB call for FOMOD installer', { installId, modId });
                                    installContext.finishInstallCB('success', {});
                                }
                                // Manually dismiss the notification
                                const notificationId = 'install_' + ((installContext === null || installContext === void 0 ? void 0 : installContext['mIndicatorId']) || modId);
                                api.store.dispatch((0, notifications_1.dismissNotification)(notificationId));
                                (0, log_1.log)('info', 'InstallManager: Manually dismissed notification', { installId, notificationId });
                            }
                            catch (cleanupError) {
                                (0, log_1.log)('error', 'InstallManager: Error during manual cleanup', {
                                    installId,
                                    error: cleanupError.message
                                });
                            }
                        }
                        this.mActiveInstalls.delete(installId);
                        resolve(modId);
                    }
                })
                    .catch((installError) => {
                    if (this.mActiveInstalls.has(installId)) {
                        (0, log_1.log)('warn', 'Installation failed', { installId, error: installError.message });
                        this.mActiveInstalls.delete(installId);
                        reject(installError);
                    }
                });
            });
        }).catch(err => {
            callback === null || callback === void 0 ? void 0 : callback(err, null);
        });
    }
    installDependencies(api, profile, gameId, modId, silent, allowAutoDeploy) {
        var _a;
        const state = api.store.getState();
        const mod = (_a = state.persistent.mods[gameId]) === null || _a === void 0 ? void 0 : _a[modId];
        if (mod === undefined) {
            return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled(`Invalid mod specified "${modId}"`));
        }
        this.repairRules(api, mod, gameId);
        const installPath = this.mGetInstallPath(gameId);
        (0, log_1.log)('info', 'start installing dependencies', { modId });
        const aggregationId = `install-dependencies-${modId}`;
        this.mNotificationAggregator.startAggregation(aggregationId, this.mNotificationAggregationTimeoutMS);
        return withActivityTracking(api, 'installing_dependencies', mod.id, this.withDependenciesContext('install-dependencies', () => this.augmentRules(api, gameId, mod)
            .then(rules => this.installDependenciesImpl(api, profile, gameId, mod.id, (0, modName_1.default)(mod), rules, installPath, silent)))
            .finally(() => {
            (0, log_1.log)('info', 'done installing dependencies', { modId });
            this.mNotificationAggregator.stopAggregation(aggregationId);
        }));
    }
    installRecommendations(api, profile, gameId, modId) {
        const state = api.store.getState();
        const mod = (0, storeHelper_1.getSafe)(state, ['persistent', 'mods', gameId, modId], undefined);
        if (mod === undefined) {
            return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled(`Invalid mod specified "${modId}"`));
        }
        this.repairRules(api, mod, gameId);
        const installPath = this.mGetInstallPath(gameId);
        (0, log_1.log)('info', 'start installing recommendations', { modId });
        return withActivityTracking(api, 'installing_dependencies', mod.id, this.withDependenciesContext('install-recommendations', () => this.augmentRules(api, gameId, mod)
            .then(rules => this.installRecommendationsImpl(api, profile, gameId, mod.id, (0, modName_1.default)(mod), rules, installPath, false))
            .finally(() => {
            (0, log_1.log)('info', 'done installing recommendations', { modId });
        })));
    }
    augmentRules(api, gameId, mod) {
        var _a;
        // const rules = (mod.rules ?? []).slice();
        //if (mod.attributes === undefined) {
        return bluebird_1.default.resolve((_a = mod.rules) !== null && _a !== void 0 ? _a : []);
        //}
        // return api.lookupModMeta({
        //   fileMD5: mod.attributes['fileMD5'],
        //   fileSize: mod.attributes['fileSize'],
        //   gameId,
        // })
        // .then(results => {
        //   rules.push(...(results[0]?.value?.rules ?? []));
        //   return Bluebird.resolve(rules);
        // });
    }
    withDependenciesContext(contextName, func) {
        const context = (0, BatchContext_1.getBatchContext)(contextName, '', true);
        context.set('depth', context.get('depth', 0) + 1);
        context.set('remember-instructions', null);
        return func()
            .finally(() => {
            const oldDepth = context.get('depth', 0);
            context.set('depth', oldDepth - 1);
            if (oldDepth === 1) {
                context.set('remember', null);
            }
        });
    }
    hasFuzzyReference(ref) {
        return (ref.fileExpression !== undefined)
            || (ref.fileMD5 !== undefined)
            || (ref.logicalFileName !== undefined);
    }
    setModSize(api, modId, gameId) {
        var _a;
        const state = api.getState();
        const stagingFolder = (0, selectors_1.installPathForGame)(state, gameId);
        const mod = (_a = state.persistent.mods[gameId]) === null || _a === void 0 ? void 0 : _a[modId];
        if ((mod === null || mod === void 0 ? void 0 : mod.installationPath) === undefined) {
            (0, log_1.log)('debug', 'failed to calculate modSize', 'mod is not in state');
            return bluebird_1.default.resolve();
        }
        const modPath = path.join(stagingFolder, mod.installationPath);
        return (0, calculateFolderSize_1.default)(modPath)
            .then((totalSize) => {
            api.store.dispatch((0, mods_1.setModAttribute)(gameId, mod.id, 'modSize', totalSize));
            return bluebird_1.default.resolve();
        })
            .catch(err => {
            (0, log_1.log)('debug', 'failed to calculate modSize', err);
            return bluebird_1.default.resolve();
        });
    }
    /**
     * Clean up pending and active installations for a specific source mod
     */
    cleanupPendingInstalls(sourceModId, hard = false) {
        // Clean up pending installs
        const pendingKeysToRemove = Array.from(this.mPendingInstalls.keys()).filter(key => key.includes(sourceModId));
        pendingKeysToRemove.forEach(key => this.mPendingInstalls.delete(key));
        // Clean up active installs (for dependencies that might be installing for this source mod)
        const activeKeysToRemove = Array.from(this.mActiveInstalls.keys()).filter(key => key.includes(sourceModId));
        activeKeysToRemove.forEach(key => this.mActiveInstalls.delete(key));
        // Clean up retry counters for this source mod
        const retryKeysToRemove = Array.from(this.mDependencyRetryCount.keys()).filter(key => key.startsWith(`${sourceModId}:`));
        retryKeysToRemove.forEach(key => this.mDependencyRetryCount.delete(key));
        if (hard) {
            this.mMainInstallsLimit.clearQueue();
            this.mDependencyInstallsLimit.clearQueue();
            this.mInstallPhaseState.delete(sourceModId);
        }
    }
    /**
     * Queue an installation to run asynchronously without blocking downloads.
     * Installers are gated by phase so higher phases won't start until lower phases finish.
     */
    queueInstallation(api, dep, downloadId, gameId, sourceModId, recommended, phase = 0) {
        var _a;
        this.ensurePhaseState(sourceModId);
        const phaseState = this.mInstallPhaseState.get(sourceModId);
        const phaseNum = phase !== null && phase !== void 0 ? phase : 0;
        // Check if this installation is already active or pending
        const installKey = this.generateDependencyInstallKey(sourceModId, downloadId);
        const alreadyActive = this.mActiveInstalls.has(installKey);
        const alreadyPending = this.mPendingInstalls.has(installKey);
        if (alreadyActive || alreadyPending) {
            return;
        }
        const startTask = () => this.startQueuedInstallation(api, dep, downloadId, gameId, sourceModId, recommended, phaseNum);
        const collectionsInstallWhileDownloading = (0, storeHelper_1.getSafe)(api.getState(), ['settings', 'downloads', 'collectionsInstallWhileDownloading'], false);
        // Only initialize allowedPhase early if we are allowed to run installers alongside downloads
        if (collectionsInstallWhileDownloading && (phaseState.allowedPhase === undefined)) {
            phaseState.allowedPhase = phaseNum;
            // When setting initial allowed phase, mark all previous phases as downloads finished
            for (let p = 0; p < phaseNum; p++) {
                phaseState.downloadsFinished.add(p);
            }
        }
        const downloads = api.getState().persistent.downloads.files;
        const download = downloads[downloadId];
        const canStartNow = collectionsInstallWhileDownloading
            ? (phaseNum <= phaseState.allowedPhase)
            : ((phaseState.allowedPhase !== undefined)
                && (phaseNum <= phaseState.allowedPhase)
                && phaseState.downloadsFinished.has(phaseNum));
        // Don't start installations if deployment is in progress
        const canStartWithoutDeploymentBlock = canStartNow && !phaseState.isDeploying;
        if (canStartWithoutDeploymentBlock && (download === null || download === void 0 ? void 0 : download.state) === 'finished' && (download === null || download === void 0 ? void 0 : download.size) > 0) {
            startTask();
        }
        else {
            const pending = (_a = phaseState.pendingByPhase.get(phaseNum)) !== null && _a !== void 0 ? _a : [];
            pending.push(startTask);
            phaseState.pendingByPhase.set(phaseNum, pending);
        }
    }
    generateDependencyInstallKey(sourceModId, downloadId) {
        return `${sourceModId}:${downloadId}`;
    }
    // Starts a queued installation task and wires up phase accounting
    startQueuedInstallation(api, dep, downloadId, gameId, sourceModId, recommended, phase) {
        var _a;
        const phaseState = this.mInstallPhaseState.get(sourceModId);
        const installKey = this.generateDependencyInstallKey(sourceModId, downloadId);
        this.mPendingInstalls.set(installKey, dep);
        // Track active count for the phase
        phaseState.activeByPhase.set(phase, ((_a = phaseState.activeByPhase.get(phase)) !== null && _a !== void 0 ? _a : 0) + 1);
        // Process installation immediately in parallel using concurrency limiter
        this.mDependencyInstallsLimit.do(() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const startTime = Date.now();
            // Track this dependency installation
            const depInstallInfo = {
                installId: installKey,
                archiveId: downloadId,
                archivePath: '', // Will be updated when known
                modId: (0, modName_1.renderModReference)(dep.reference),
                gameId,
                callback: () => { }, // Dependencies use different completion mechanism
                startTime,
                baseName: (0, modName_1.renderModReference)(dep.reference)
            };
            this.mActiveInstalls.set(installKey, depInstallInfo);
            try {
                // Check if installation is still needed
                if (!this.mPendingInstalls.has(installKey)) {
                    this.mActiveInstalls.delete(installKey);
                    return;
                }
                const currentDep = this.mPendingInstalls.get(installKey);
                this.mPendingInstalls.delete(installKey);
                // Verify download is still finished before installing
                const downloads = api.getState().persistent.downloads.files;
                if (((_a = downloads[downloadId]) === null || _a === void 0 ? void 0 : _a.state) !== 'finished' || ((_b = downloads[downloadId]) === null || _b === void 0 ? void 0 : _b.size) === 0) {
                    (0, log_1.log)('info', 'Download no longer finished, skipping installation', { downloadId });
                    this.mActiveInstalls.delete(installKey);
                    return;
                }
                const sourceMod = api.getState().persistent.mods[gameId][sourceModId];
                // Check if mod is already installed
                const mods = api.getState().persistent.mods[gameId];
                const existingMod = (0, dependencies_1.findModByRef)(currentDep.reference, mods);
                const modId = existingMod != null ? existingMod.id : yield this.withInstructions(api, (0, modName_1.default)(sourceMod), (0, modName_1.renderModReference)(currentDep.reference), (_d = (_c = currentDep.reference) === null || _c === void 0 ? void 0 : _c.tag) !== null && _d !== void 0 ? _d : downloadId, (_e = currentDep.extra) === null || _e === void 0 ? void 0 : _e['instructions'], recommended, () => this.installModAsync(currentDep.reference, api, downloadId, { choices: currentDep.installerChoices, patches: currentDep.patches }, currentDep.fileList, gameId, true, sourceModId));
                if (modId) {
                    this.mActiveInstalls.delete(installKey);
                    // Apply any extra attributes
                    this.applyExtraFromRule(api, gameId, modId, Object.assign(Object.assign({}, currentDep.extra), { fileList: (_f = currentDep.fileList) !== null && _f !== void 0 ? _f : (_g = currentDep.extra) === null || _g === void 0 ? void 0 : _g.fileList, installerChoices: currentDep.installerChoices, patches: (_h = currentDep.patches) !== null && _h !== void 0 ? _h : (_j = currentDep.extra) === null || _j === void 0 ? void 0 : _j.patches }));
                    // Enable the mod in any profile that has the source mod enabled
                    const profiles = Object.values(api.getState().persistent.profiles)
                        .filter(prof => {
                        var _a, _b;
                        return (prof.gameId === gameId)
                            && ((_b = (_a = prof.modState) === null || _a === void 0 ? void 0 : _a[sourceModId]) === null || _b === void 0 ? void 0 : _b.enabled);
                    });
                    profiles.forEach(prof => {
                        api.store.dispatch((0, profiles_1.setModEnabled)(prof.id, modId, true));
                    });
                    // Mark as installed as dependency
                    api.store.dispatch((0, mods_1.setModAttribute)(gameId, modId, 'installedAsDependency', true));
                    // Clear retry counter on successful installation
                    this.mDependencyRetryCount.delete(installKey);
                }
                this.mActiveInstalls.delete(installKey);
            }
            catch (err) {
                this.mActiveInstalls.delete(installKey);
                const currentRetryCount = this.mDependencyRetryCount.get(installKey) || 0;
                const isCanceled = (err instanceof CustomErrors_1.UserCanceled) || (err instanceof CustomErrors_1.ProcessCanceled);
                const hasRetriesLeft = currentRetryCount < InstallManager.MAX_DEPENDENCY_RETRIES;
                if (!isCanceled && hasRetriesLeft) {
                    this.mPendingInstalls.set(installKey, dep); // Re-queue for potential retry
                    this.mDependencyRetryCount.set(installKey, currentRetryCount + 1);
                }
                else {
                    // Max retries exceeded, clean up and show error
                    this.mDependencyRetryCount.delete(installKey);
                    this.showDependencyError(api, sourceModId, 'Failed to install dependency', `Installation failed after ${InstallManager.MAX_DEPENDENCY_RETRIES} attempts: ${err.message}`, (0, modName_1.renderModReference)(dep.reference));
                }
                // Don't rethrow to avoid crashing the concurrency limiter
            }
            finally {
                // Always decrement phase active counter
                phaseState.activeByPhase.set(phase, Math.max(0, ((_k = phaseState.activeByPhase.get(phase)) !== null && _k !== void 0 ? _k : 1) - 1));
                // Note: Don't call maybeAdvancePhase here - it should only be called when phases are actually complete
            }
        })).catch(err => {
            this.showDependencyError(api, sourceModId, 'Critical error in dependency installation', err.message, (0, modName_1.renderModReference)(dep.reference));
            (0, log_1.log)('error', 'Critical error in dependency installation', {
                downloadId,
                error: err.message,
                dependency: (0, modName_1.renderModReference)(dep.reference)
            });
        });
    }
    ensurePhaseState(sourceModId) {
        if (!this.mInstallPhaseState.has(sourceModId)) {
            this.mInstallPhaseState.set(sourceModId, {
                allowedPhase: undefined,
                downloadsFinished: new Set(),
                pendingByPhase: new Map(),
                activeByPhase: new Map(),
                deployedPhases: new Set(),
                deploymentPromises: new Map(),
            });
        }
    }
    pollAllPhasesComplete(api, sourceModId) {
        const POLL_MS = 500;
        return new bluebird_1.default((resolve) => {
            const poll = () => {
                var _a, _b;
                const phaseState = this.mInstallPhaseState.get(sourceModId);
                if (!phaseState) {
                    (0, log_1.log)('debug', 'Phase state cleared, all phases considered complete', { sourceModId });
                    return resolve();
                }
                // Check if the dependency installation has been cancelled
                if (!this.mDependencyInstalls[sourceModId]) {
                    (0, log_1.log)('debug', 'Dependency installation cancelled', { sourceModId });
                    return resolve();
                }
                // Count total pending and active across all phases
                let totalPending = 0;
                let totalActive = 0;
                phaseState.pendingByPhase.forEach(queue => totalPending += queue.length);
                phaseState.activeByPhase.forEach(count => totalActive += count);
                // Check for queued deployments
                const deploymentPromises = phaseState.deploymentPromises || new Map();
                const hasQueuedDeployments = deploymentPromises.size > 0;
                if (totalPending === 0 && totalActive === 0 && !hasQueuedDeployments) {
                    // All phases are settled and no deployments queued
                    (0, log_1.log)('debug', 'All phases complete', { sourceModId });
                    return resolve();
                }
                else {
                    // Continue polling until all phases are complete
                    const pendingByPhaseDetail = {};
                    phaseState.pendingByPhase.forEach((queue, phase) => {
                        if (queue.length > 0) {
                            pendingByPhaseDetail[phase] = queue.length;
                        }
                    });
                    const currentPhaseComplete = (0, selectors_2.isCollectionPhaseComplete)(api.getState(), (_a = phaseState.allowedPhase) !== null && _a !== void 0 ? _a : 0);
                    if (currentPhaseComplete && deploymentPromises.size === 0) {
                        this.scheduleDeployOnPhaseSettled(api, sourceModId, (_b = phaseState.allowedPhase) !== null && _b !== void 0 ? _b : 0);
                    }
                    setTimeout(poll, POLL_MS);
                }
            };
            poll();
        });
    }
    pollPhaseSettlement(api, sourceModId, options) {
        const POLL_MS = 500;
        let hasDeployed = false;
        return new bluebird_1.default((resolve) => {
            const poll = () => {
                var _a, _b;
                const phaseState = this.mInstallPhaseState.get(sourceModId);
                if (!phaseState) {
                    return resolve();
                }
                // Check if the dependency installation has been cancelled
                // If mDependencyInstalls entry is missing, installation was cancelled and cleaned up
                if (!this.mDependencyInstalls[sourceModId]) {
                    (0, log_1.log)('debug', 'Stopping phase polling - dependency installation cancelled', { sourceModId });
                    return resolve();
                }
                // Determine which phase we're checking
                const checkPhase = (_b = (_a = options.phase) !== null && _a !== void 0 ? _a : phaseState.allowedPhase) !== null && _b !== void 0 ? _b : 0;
                // log('debug', 'Polling phase settlement', {
                //   sourceModId,
                //   phase: checkPhase,
                //   optionsPhase: options.phase,
                //   allowedPhase: phaseState.allowedPhase,
                //   activeInstallations: active,
                //   pendingInstallations: pending,
                //   deployOnSettle: options.deployOnSettle
                // });
                // Check collection completion status
                const collectionStatus = this.checkCollectionPhaseStatus(api, sourceModId, checkPhase);
                // Check if phase is settled FIRST (before requeue to avoid deadlock)
                // Deploy when phase is complete AND no active installations
                const phaseLogicallyComplete = collectionStatus.phaseComplete;
                const installationsComplete = (0, selectors_2.isCollectionPhaseComplete)(api.getState(), checkPhase);
                const existing = phaseState === null || phaseState === void 0 ? void 0 : phaseState.deploymentPromises.get(checkPhase);
                if (phaseLogicallyComplete) {
                    if ((existing === null || existing === void 0 ? void 0 : existing.deployOnSettle) && !hasDeployed) {
                        // Set deployment flag to block new installations during deployment
                        if (phaseState) {
                            phaseState.isDeploying = true;
                        }
                        // Deploy mods for this phase
                        (0, util_1.toPromise)(cb => api.events.emit('deploy-mods', cb))
                            .then(() => {
                            if (phaseState) {
                                phaseState.isDeploying = false;
                                // Start any installations that were queued during deployment
                                hasDeployed = true;
                                setTimeout(poll, POLL_MS);
                            }
                            resolve();
                        })
                            .catch(err => {
                            (0, log_1.log)('warn', 'deploy-mods failed after phase settle', {
                                sourceModId,
                                phase: checkPhase,
                                error: err === null || err === void 0 ? void 0 : err.message
                            });
                            if (phaseState) {
                                phaseState.isDeploying = false;
                                // Start any installations that were queued during deployment, even if deployment failed
                                this.startPendingForPhase(sourceModId, checkPhase);
                            }
                            resolve(); // Resolve anyway to avoid hanging
                        });
                    }
                    else {
                        if (installationsComplete && phaseLogicallyComplete) {
                            if (phaseState) {
                                phaseState.isDeploying = false;
                                // Start any installations that were queued during deployment
                                phaseState.deployedPhases.add(checkPhase);
                                this.startPendingForPhase(sourceModId, checkPhase);
                                this.maybeAdvancePhase(sourceModId, api);
                            }
                            resolve();
                        }
                        else {
                            setTimeout(poll, POLL_MS);
                        }
                    }
                }
                else if (installationsComplete && (!phaseLogicallyComplete || collectionStatus.needsRequeue || collectionStatus.downloadedCount > 0)) {
                    // Requeue downloaded mods if phase is not complete and there are no active installations
                    // This handles cases where downloads finish after installations start, or MD5 lookups complete late
                    this.reQueueDownloadedMods(api, sourceModId, collectionStatus.allMods, checkPhase);
                    // Continue polling after re-queue
                    setTimeout(poll, POLL_MS);
                }
                else {
                    // Continue polling
                    setTimeout(poll, POLL_MS);
                }
            };
            // Start polling
            poll();
        });
    }
    // Helper to check collection phase status
    checkCollectionPhaseStatus(api, sourceModId, phase) {
        const state = api.getState();
        const activeCollectionSession = (0, selectors_2.getCollectionSessionById)(state, sourceModId);
        if (!activeCollectionSession) {
            return { phaseComplete: true, needsRequeue: false, allMods: [], downloadedCount: 0, modsNeedingRequeue: 0 };
        }
        const mods = activeCollectionSession.mods || {};
        const allMods = Object.values(mods);
        const currentPhaseMods = getModsByPhase(allMods, phase);
        const phaseCompletionResult = checkPhaseCompletion(currentPhaseMods);
        const { isComplete: phaseComplete } = phaseCompletionResult;
        // Only count downloaded mods from the current phase being checked
        const allDownloadedMods = currentPhaseMods.filter((mod) => mod.status === 'downloaded');
        const downloadedCount = allDownloadedMods.length;
        // Debug: Show status distribution
        const statusCounts = {};
        allMods.forEach((mod) => {
            const status = mod.status || 'unknown';
            statusCounts[status] = (statusCounts[status] || 0) + 1;
        });
        // Check if any downloaded mods actually need requeuing (don't have active/pending installations)
        const downloads = api.getState().persistent.downloads.files;
        let modsNeedingRequeue = 0;
        allDownloadedMods.forEach((mod) => {
            var _a;
            // Try to find a ready download for this mod
            const downloadId = getReadyDownloadId(downloads, (_a = mod.rule) === null || _a === void 0 ? void 0 : _a.reference, (id) => this.hasActiveOrPendingInstallation(sourceModId, id));
            if (downloadId) {
                modsNeedingRequeue++;
            }
        });
        const needsRequeue = modsNeedingRequeue > 0;
        return { phaseComplete, needsRequeue, allMods, downloadedCount, modsNeedingRequeue };
    }
    // Helper to check if an archiveId has pending or active installations
    hasActiveOrPendingInstallation(sourceModId, archiveId) {
        let hasPending = false;
        const installKey = this.generateDependencyInstallKey(sourceModId, archiveId);
        if (this.mPendingInstalls.get(installKey)) {
            hasPending = true;
        }
        let hasActive = false;
        for (const [, activeInstall] of this.mActiveInstalls.entries()) {
            if (activeInstall.archiveId === archiveId) {
                hasActive = true;
                break;
            }
        }
        return hasPending || hasActive;
    }
    // Helper to re-queue downloaded mods
    reQueueDownloadedMods(api, sourceModId, allMods, currentPhase) {
        const phaseState = this.mInstallPhaseState.get(sourceModId);
        if (!phaseState) {
            return;
        }
        const downloads = api.getState().persistent.downloads.files;
        // Expand the filter to include mods that are downloaded OR have downloads available
        // Also log detailed status information to debug the filtering
        const allModsWithDetails = allMods.map((mod) => {
            var _a;
            return (Object.assign(Object.assign({}, mod), { downloadId: ((_a = mod.rule) === null || _a === void 0 ? void 0 : _a.reference) ? this.findDownloadForMod(mod.rule.reference, downloads) : null }));
        });
        // Look for mods that are marked as 'downloaded' and ready to install
        // Do NOT include 'pending' mods as they are already queued for installation
        const allDownloadedMods = allModsWithDetails.filter((mod) => {
            var _a;
            const hasDownload = mod.downloadId !== null;
            const modPhase = (_a = mod.phase) !== null && _a !== void 0 ? _a : 0;
            const isDownloaded = mod.status === 'downloaded';
            // Allow mods from current phase or earlier phases that haven't been completed
            // This prevents the deadlock where phase 1 mods can't be processed during phase 2+ cycles
            const isEligiblePhase = modPhase <= currentPhase;
            // Only requeue mods that are 'downloaded' status - pending mods are already queued
            return isEligiblePhase && isDownloaded && hasDownload;
        });
        const downloadedPhases = new Set();
        let anyQueued = false;
        let anyMarkedSkipped = false;
        allDownloadedMods.forEach((mod) => {
            var _a, _b, _c, _d;
            const modPhase = (_a = mod.phase) !== null && _a !== void 0 ? _a : 0;
            downloadedPhases.add(modPhase);
            if (modPhase > currentPhase) {
                return; // Skip this mod, it will be processed when its phase is active
            }
            const downloadId = mod.downloadId;
            if (!downloadId) {
                if (mod.type === 'recommends') {
                    anyMarkedSkipped = true;
                }
                return; // Skip this mod
            }
            const downloadState = (_b = downloads[downloadId]) === null || _b === void 0 ? void 0 : _b.state;
            (0, log_1.log)('debug', 'Download state check', { downloadId, downloadState });
            if (downloads[downloadId].state === 'finished') {
                const hasPendingOrActive = this.hasActiveOrPendingInstallation(sourceModId, downloadId);
                // Check if mod is already installed
                const gameId = (0, selectors_1.activeGameId)(api.getState());
                const mods = (_c = api.getState().persistent.mods[gameId]) !== null && _c !== void 0 ? _c : {};
                const existingMod = ((_d = mod.rule) === null || _d === void 0 ? void 0 : _d.reference) && (0, dependencies_1.findModByRef)(mod.rule.reference, mods);
                (0, log_1.log)('debug', 'Requeue check', { downloadId, hasPendingOrActive, existingMod });
                if (!hasPendingOrActive && !existingMod) {
                    (0, log_1.log)('info', 'Requeuing download for installation', { downloadId });
                    const success = this.handleDownloadFinished(api, downloadId);
                    if (success) {
                        anyQueued = true;
                    }
                    else {
                        (0, log_1.log)('debug', 'Requeue failed - collection not currently installing', { downloadId });
                    }
                }
                else if (!hasPendingOrActive && existingMod) {
                    const installKey = this.generateDependencyInstallKey(sourceModId, downloadId);
                    this.mPendingInstalls.delete(installKey);
                    this.mActiveInstalls.delete(installKey);
                    api.events.emit('did-install-mod', gameId, downloadId, existingMod.id, existingMod.attributes);
                }
                else {
                    (0, log_1.log)('debug', 'Download already has pending/active installation', { downloadId });
                }
            }
            else {
                (0, log_1.log)('debug', 'Download not in finished state', { downloadId, state: downloadState });
            }
        });
        // If we marked optional mods as skipped, check if their phases are now complete
        if (anyMarkedSkipped) {
            const phasesToCheck = Array.from(downloadedPhases).filter(p => { var _a; return p <= ((_a = phaseState.allowedPhase) !== null && _a !== void 0 ? _a : 0); });
            phasesToCheck.forEach(checkPhase => {
                const phaseMods = getModsByPhase(allMods, checkPhase);
                const completion = checkPhaseCompletion(phaseMods);
                // If all required mods are complete and phase not already deployed, schedule deployment
                if (completion.isComplete && !phaseState.deployedPhases.has(checkPhase)) {
                    // Schedule deployment which will mark the phase as deployed when it completes
                    this.scheduleDeployOnPhaseSettled(api, sourceModId, checkPhase);
                }
            });
        }
        // Initialize or advance phase system if needed
        if (anyQueued) {
            if (phaseState.allowedPhase === undefined) {
                const lowestPhase = Math.min(...Array.from(downloadedPhases));
                phaseState.allowedPhase = lowestPhase;
                downloadedPhases.forEach(p => phaseState.downloadsFinished.add(p));
                this.startPendingForPhase(sourceModId, lowestPhase);
                this.maybeAdvancePhase(sourceModId, api);
            }
            else {
                // Phase already initialized, just ensure downloads are marked and try to advance
                downloadedPhases.forEach(p => {
                    if (!phaseState.downloadsFinished.has(p)) {
                        phaseState.downloadsFinished.add(p);
                    }
                });
                // Try to start any pending installations and advance phases
                this.startPendingForPhase(sourceModId, phaseState.allowedPhase);
                this.maybeAdvancePhase(sourceModId, api);
            }
        }
    }
    isPhaseDeployed(sourceModId, phase) {
        var _a;
        const phaseState = this.mInstallPhaseState.get(sourceModId);
        return (_a = phaseState === null || phaseState === void 0 ? void 0 : phaseState.deployedPhases.has(phase)) !== null && _a !== void 0 ? _a : false;
    }
    markPhaseDeployed(sourceModId, phase) {
        this.ensurePhaseState(sourceModId);
        const phaseState = this.mInstallPhaseState.get(sourceModId);
        phaseState.deployedPhases.add(phase);
    }
    awaitScheduledDeployment(sourceModId, phase) {
        var _a;
        this.ensurePhaseState(sourceModId);
        const phaseState = this.mInstallPhaseState.get(sourceModId);
        const deploymentPromise = (_a = phaseState.deploymentPromises) === null || _a === void 0 ? void 0 : _a.get(phase);
        if (deploymentPromise) {
            return deploymentPromise.deploymentPromise;
        }
        return Promise.resolve();
    }
    // Schedule a deploy once all installers for a specific phase have finished
    scheduleDeployOnPhaseSettled(api, sourceModId, phase, deployOnSettle) {
        var _a;
        this.ensurePhaseState(sourceModId);
        const state = this.mInstallPhaseState.get(sourceModId);
        // Only schedule deployment for phases that are allowed to be processed
        if (state.allowedPhase !== undefined && phase > state.allowedPhase) {
            return;
        }
        if ((_a = state.deploymentPromises) === null || _a === void 0 ? void 0 : _a.has(phase)) {
            if (deployOnSettle) {
                // Update to ensure deployment occurs on settle
                const existing = state.deploymentPromises.get(phase);
                if (existing && !existing.deployOnSettle) {
                    state.deploymentPromises.set(phase, {
                        deploymentPromise: existing.deploymentPromise,
                        deployOnSettle: true
                    });
                }
            }
            return;
        }
        // Track deployment promise so we can wait for it before cleanup
        // Convert Bluebird to native Promise for compatibility
        const deploymentPromise = new Promise((resolve) => {
            this.pollPhaseSettlement(api, sourceModId, { phase })
                .catch(err => {
                (0, log_1.log)('warn', 'Error during scheduled phase deployment', { sourceModId, phase, error: err === null || err === void 0 ? void 0 : err.message });
            })
                .finally(() => {
                // Remove this promise from the array when it completes
                const phaseState = this.mInstallPhaseState.get(sourceModId);
                if (phaseState === null || phaseState === void 0 ? void 0 : phaseState.deploymentPromises) {
                    phaseState.deploymentPromises.delete(phase);
                }
                resolve();
            });
        });
        // Add to tracked deployment promises
        if (!state.deploymentPromises) {
            state.deploymentPromises = new Map();
        }
        state.deploymentPromises.set(phase, { deploymentPromise, deployOnSettle: deployOnSettle !== null && deployOnSettle !== void 0 ? deployOnSettle : false });
    }
    // Called when downloads for a phase have been queued/processed
    markPhaseDownloadsFinished(sourceModId, phase, api) {
        this.ensurePhaseState(sourceModId);
        const state = this.mInstallPhaseState.get(sourceModId);
        state.downloadsFinished.add(phase);
        // Initialize allowed phase to the first finished phase if not set
        if (state.allowedPhase === undefined) {
            state.allowedPhase = phase;
            // When setting initial allowed phase, mark all previous phases as downloads finished
            // since we can't be in phase N without having completed phases 0 through N-1
            for (let p = 0; p < phase; p++) {
                state.downloadsFinished.add(p);
            }
            this.startPendingForPhase(sourceModId, phase);
        }
        this.maybeAdvancePhase(sourceModId, api);
    }
    startPendingForPhase(sourceModId, phase) {
        var _a;
        const state = this.mInstallPhaseState.get(sourceModId);
        if (!state) {
            // Phase state was cleaned up, nothing to start
            return;
        }
        const tasks = (_a = state.pendingByPhase.get(phase)) !== null && _a !== void 0 ? _a : [];
        if (tasks.length === 0) {
            return;
        }
        // Drain queue for this phase
        state.pendingByPhase.set(phase, []);
        tasks.forEach(run => run());
    }
    maybeAdvancePhase(sourceModId, api) {
        var _a, _b, _c;
        const state = this.mInstallPhaseState.get(sourceModId);
        if (!state) {
            // Phase state was cleaned up, nothing to advance
            return;
        }
        if (state.allowedPhase === undefined) {
            (0, log_1.log)('debug', 'phase gating: awaiting first finished phase', { sourceModId });
            return;
        }
        // Clean up inappropriate phase state - clear re-queue attempts for phases beyond allowed
        if (state.reQueueAttempted) {
            Array.from(state.reQueueAttempted.keys()).forEach(phase => {
                if (phase > state.allowedPhase) {
                    state.reQueueAttempted.delete(phase);
                    (0, log_1.log)('debug', 'Cleared re-queue attempt for future phase', { sourceModId, phase, allowedPhase: state.allowedPhase });
                }
            });
        }
        // Try to advance through finished phases where there are no active installs
        let curr = state.allowedPhase;
        while (state.downloadsFinished.has(curr)
            && ((_a = state.activeByPhase.get(curr)) !== null && _a !== void 0 ? _a : 0) === 0
            && ((_b = state.pendingByPhase.get(curr)) !== null && _b !== void 0 ? _b : []).length === 0) {
            // Check if the phase is actually complete according to collection session
            const collectionStatus = this.checkCollectionPhaseStatus(api, sourceModId, curr);
            if (!collectionStatus.phaseComplete) {
                this.startPendingForPhase(sourceModId, curr);
                break;
            }
            // Determine previous finished phase (by order in downloadsFinished)
            const finished = Array.from(state.downloadsFinished).sort((a, b) => a - b);
            const currIdx = finished.findIndex(p => p === curr);
            // Only advance past curr if the current phase has been deployed
            if (!state.deployedPhases.has(curr)) {
                (0, log_1.log)('debug', 'phase gating: phase complete but not deployed, scheduling deployment', { sourceModId, currPhase: curr });
                // Schedule deployment to mark the phase as deployed when it settles
                this.scheduleDeployOnPhaseSettled(api, sourceModId, curr);
                // Start any pending installations for this phase to avoid deadlocks
                this.startPendingForPhase(sourceModId, curr);
                break;
            }
            // Start any pending installs for this phase (if not already started)
            this.startPendingForPhase(sourceModId, curr);
            // Move to next finished phase if any
            const nextIdx = currIdx + 1;
            if (nextIdx < finished.length) {
                curr = finished[nextIdx];
                state.allowedPhase = curr;
                this.startPendingForPhase(sourceModId, curr);
                // When advancing to a new phase, scan for any finished downloads that should be queued
                const apiState = api.getState();
                const gameId = (_c = (0, selectors_1.activeProfile)(apiState)) === null || _c === void 0 ? void 0 : _c.gameId;
                if (!gameId) {
                    continue;
                }
                const downloads = apiState.persistent.downloads.files;
                const mods = apiState.persistent.mods[gameId] || {};
                const collectionMod = mods[sourceModId];
                // We can't rely on the collection installation tracking for this since
                // the state might not be accurate if the app was restarted or if the
                // state has yet to be updated.
                if (collectionMod === null || collectionMod === void 0 ? void 0 : collectionMod.rules) {
                    collectionMod.rules.forEach((rule) => {
                        var _a, _b, _c;
                        const rulePhase = (_b = (_a = rule.extra) === null || _a === void 0 ? void 0 : _a.phase) !== null && _b !== void 0 ? _b : 0;
                        if (rulePhase === curr && ((_c = rule.reference) === null || _c === void 0 ? void 0 : _c.tag)) {
                            const downloadId = getReadyDownloadId(downloads, rule.reference, (id) => this.hasActiveOrPendingInstallation(sourceModId, id));
                            if (downloadId) {
                                this.handleDownloadFinished(api, downloadId);
                            }
                        }
                    });
                }
                // Schedule deployment polling for the newly allowed phase if it has downloads finished
                // if (state.downloadsFinished.has(curr)) {
                //   log('debug', 'Advanced to new phase, scheduling deployment polling', { sourceModId, newPhase: curr });
                //   // Schedule deployment polling for the newly allowed phase
                //   if (api) {
                //     this.scheduleDeployOnPhaseSettled(api, sourceModId, curr);
                //   } else {
                //     log('warn', 'Cannot schedule deployment polling - API not provided to maybeAdvancePhase', { sourceModId, phase: curr });
                //   }
                // }
                continue;
            }
            break;
        }
    }
    /**
     * when installing a mod from a dependency rule we store the id of the installed mod
     * in the rule for quicker and consistent matching but if - at a later time - we
     * install those same dependencies again we have to unset those ids, otherwise the
     * dependence installs would fail.
     */
    repairRules(api, mod, gameId) {
        const state = api.store.getState();
        const mods = state.persistent.mods[gameId];
        (mod.rules || []).forEach(rule => {
            if ((rule.reference.id !== undefined)
                && (mods[rule.reference.id] === undefined)
                && this.hasFuzzyReference(rule.reference)) {
                const newRule = JSON.parse(JSON.stringify(rule));
                api.store.dispatch((0, mods_1.removeModRule)(gameId, mod.id, rule));
                delete newRule.reference.id;
                api.store.dispatch((0, mods_1.addModRule)(gameId, mod.id, newRule));
            }
        });
    }
    isBrowserAssistantError(error) {
        return (process.platform === 'win32')
            && (error.indexOf('Roaming\\Browser Assistant') !== -1);
    }
    isCritical(error) {
        return (error.indexOf('Unexpected end of archive') !== -1)
            || (error.indexOf('ERROR: Data Error') !== -1)
            // used to be "Can not", current 7z prints "Cannot"
            || (error.indexOf('Cannot open the file as archive') !== -1)
            || (error.indexOf('Can not open the file as archive') !== -1);
    }
    /**
     * find the right installer for the specified archive, then install
     */
    installInner(api, archivePath, tempPath, destinationPath, gameId, installContext, installationZip, forceInstaller, installChoices, extractList, unattended, details) {
        const fileList = [];
        let phase = 'Extracting';
        const progress = (files, percent) => {
            if ((percent !== undefined) && (installContext !== undefined)) {
                installContext.setProgress(phase, percent);
            }
        };
        (0, log_1.log)('debug', 'extracting mod archive', { archivePath, tempPath });
        let extractProm;
        const extractionStart = Date.now();
        if (FILETYPES_AVOID.includes(path.extname(archivePath).toLowerCase())) {
            extractProm = bluebird_1.default.reject(new ArchiveBrokenError('file type on avoidlist'));
        }
        else {
            extractProm = installationZip.extractFull(archivePath, tempPath, { ssc: false }, progress, () => this.queryPassword(api.store))
                .catch((err) => this.isCritical(err.message)
                ? bluebird_1.default.reject(new ArchiveBrokenError(err.message))
                : bluebird_1.default.reject(err));
            extractProm.startTime = extractionStart;
        }
        return extractProm
            .then(({ code, errors }) => {
            (0, log_1.log)('debug', 'extraction completed', {
                archivePath: path.basename(archivePath),
                extractionTimeMs: Date.now() - extractProm.startTime
            });
            phase = 'Installing';
            if (installContext !== undefined) {
                installContext.setProgress('Installing');
            }
            if (code !== 0) {
                (0, log_1.log)('warn', 'extraction reported error', { code, errors: errors.join('; ') });
                const critical = errors.find(this.isCritical);
                if (critical !== undefined) {
                    return bluebird_1.default.reject(new ArchiveBrokenError(critical));
                }
                return this.queryContinue(api, errors, archivePath);
            }
            else {
                return bluebird_1.default.resolve();
            }
        })
            .catch(ArchiveBrokenError, err => {
            if (archiveExtLookup.has(path.extname(archivePath).toLowerCase())) {
                // hmm, it was supposed to support the file type though...
                return bluebird_1.default.reject(err);
            }
            if ([stagingDirectory_1.STAGING_DIR_TAG, downloadDirectory_1.DOWNLOADS_DIR_TAG].indexOf(path.basename(archivePath)) !== -1) {
                // User just tried to install the staging/downloads folder tag file as a mod...
                //  this actually happens too often. https://github.com/Nexus-Mods/Vortex/issues/6727
                return api.showDialog('question', 'Not a mod', {
                    text: 'You are attempting to install one of Vortex\'s directory tags as a mod. '
                        + 'This file is generated and used by Vortex internally and should not be installed '
                        + 'in this way.',
                    message: archivePath,
                }, [
                    { label: 'Ok' },
                ]).then(() => bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Not a mod')));
            }
            // this is really a completely separate process from the "regular" mod installation
            return api.showDialog('question', 'Not an archive', {
                text: 'Vortex is designed to install mods from archives but this doesn\'t look '
                    + 'like one. Do you want to create a mod containing just this file?',
                message: archivePath,
            }, [
                { label: 'Cancel' },
                { label: 'Create Mod' },
            ]).then(result => {
                if (result.action === 'Cancel') {
                    return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
                }
                return fs.ensureDirAsync(tempPath)
                    .then(() => fs.copyAsync(archivePath, path.join(tempPath, path.basename(archivePath))));
            });
        })
            .then(() => (0, walk_1.default)(tempPath, (iterPath, stats) => {
            if (stats.isFile()) {
                fileList.push(path.relative(tempPath, iterPath));
            }
            else {
                // unfortunately we also have to pass directories because
                // some mods contain empty directories to control stop-folder
                // management...
                fileList.push(path.relative(tempPath, iterPath) + path.sep);
            }
            return bluebird_1.default.resolve();
        }))
            .finally(() => {
            // process.noAsar = false;
        })
            .then(() => {
            if ((0, util_1.truthy)(extractList) && extractList.length > 0) {
                return (0, listInstaller_1.default)(extractList, tempPath);
            }
            else if (forceInstaller === undefined) {
                return this.getInstaller(fileList, gameId, archivePath);
            }
            else {
                const forced = this.mInstallers.find(inst => inst.id === forceInstaller);
                return forced.testSupported(fileList, gameId, archivePath)
                    .then((testResult) => {
                    if (!testResult.supported) {
                        return undefined;
                    }
                    else {
                        return {
                            installer: forced,
                            requiredFiles: testResult.requiredFiles,
                        };
                    }
                });
            }
        })
            .then((supportedInstaller) => __awaiter(this, void 0, void 0, function* () {
            if (supportedInstaller === undefined) {
                throw new Error('no installer supporting this file');
            }
            const { installer, requiredFiles } = supportedInstaller;
            const overrideInstructionsFilePresentInArchive = fileList.some(file => path.basename(file) === constants_1.VORTEX_OVERRIDE_INSTRUCTIONS_FILENAME);
            const innerDetails = {
                hasInstructionsOverrideFile: overrideInstructionsFilePresentInArchive,
                modReference: details === null || details === void 0 ? void 0 : details.modReference,
            };
            (0, log_1.log)('debug', 'invoking installer', { installer: installer.id, enforced: forceInstaller !== undefined });
            const installerResult = yield installer.install(fileList, tempPath, gameId, (perc) => {
                (0, log_1.log)('info', 'progress', perc);
                progress([], perc);
            }, installChoices, unattended, archivePath, innerDetails);
            if (!installerResult.instructions) {
                return installerResult;
            }
            const overrideInstructionsFilePresentInArchive = fileList.some(file => path.basename(file) === constants_1.VORTEX_OVERRIDE_INSTRUCTIONS_FILENAME);
            const overrideCopyInstructionExists = installerResult.instructions.some(instr => instr.type === 'copy' && instr.source === constants_1.VORTEX_OVERRIDE_INSTRUCTIONS_FILENAME);
            if (overrideInstructionsFilePresentInArchive && !overrideCopyInstructionExists) {
                installerResult.instructions.push({
                    type: 'copy',
                    source: constants_1.VORTEX_OVERRIDE_INSTRUCTIONS_FILENAME,
                    destination: constants_1.VORTEX_OVERRIDE_INSTRUCTIONS_FILENAME,
                });
            }
            return installerResult;
        }));
    }
    determineModType(gameId, installInstructions) {
        (0, log_1.log)('info', 'determine mod type', { gameId });
        const game = (0, getGame_1.getGame)(gameId);
        if (game === undefined) {
            return bluebird_1.default.reject(new Error(`Invalid game "${gameId}"`));
        }
        const modTypes = game.modTypes;
        const sorted = modTypes.sort((lhs, rhs) => lhs.priority - rhs.priority);
        let found = false;
        return bluebird_1.default.mapSeries(sorted, (type) => {
            if (found) {
                return bluebird_1.default.resolve(null);
            }
            try {
                return type.test(installInstructions)
                    .then(matches => {
                    if (matches) {
                        found = true;
                        return bluebird_1.default.resolve(type.typeId);
                    }
                    else {
                        return bluebird_1.default.resolve(null);
                    }
                });
            }
            catch (err) {
                (0, log_1.log)('error', 'invalid mod type', { typeId: type.typeId, error: err.message });
                return bluebird_1.default.resolve(null);
            }
        }).then(matches => matches.find(match => match !== null) || '');
    }
    queryContinue(api, errors, archivePath) {
        const terminal = errors.find(err => err.indexOf('Can not open the file as archive') !== -1);
        return new bluebird_1.default((resolve, reject) => {
            const actions = [
                { label: 'Cancel', action: () => reject(new CustomErrors_1.UserCanceled()) },
                {
                    label: 'Delete', action: () => {
                        fs.removeAsync(archivePath)
                            .catch(err => api.showErrorNotification('Failed to remove archive', err, { allowReport: false }))
                            .finally(() => {
                            const { files } = api.getState().persistent.downloads;
                            const dlId = Object.keys(files)
                                .find(iter => files[iter].localPath === path.basename(archivePath));
                            if (dlId !== undefined) {
                                api.store.dispatch((0, actions_1.removeDownload)(dlId));
                            }
                            reject(new CustomErrors_1.UserCanceled());
                        });
                    }
                },
            ];
            if (!terminal) {
                actions.push({ label: 'Continue', action: () => resolve() });
            }
            const title = api.translate('Archive damaged "{{archiveName}}"', { replace: { archiveName: path.basename(archivePath) } });
            api.store.dispatch((0, notifications_1.showDialog)('error', title, {
                bbcode: api.translate('Encountered errors extracting this archive. Please verify this '
                    + 'file was downloaded correctly.\n[list]{{ errors }}[/list]', {
                    replace: { errors: errors.map(err => '[*] ' + err) },
                }),
                options: { translated: true },
            }, actions));
        });
    }
    queryPassword(store) {
        return new bluebird_1.default((resolve, reject) => {
            store
                .dispatch((0, notifications_1.showDialog)('info', 'Password Protected', {
                input: [{
                        id: 'password',
                        type: 'password',
                        value: '',
                        label: 'A password is required to extract this archive',
                    }],
            }, [{ label: 'Cancel' }, { label: 'Continue' }]))
                .then((result) => {
                if (result.action === 'Continue') {
                    resolve(result.input['password']);
                }
                else {
                    reject(new CustomErrors_1.UserCanceled());
                }
            });
        });
    }
    validateInstructions(instructions) {
        const sanitizeSep = new RegExp('/', 'g');
        // Validate the ungrouped instructions and return errors (if any)
        const invalidDestinationErrors = instructions.filter(instr => {
            if (!!instr.destination) {
                // This is a temporary hack to avoid invalidating fomod instructions
                //  which will include a path separator at the beginning of a relative path
                //  when matching nested stop patterns.
                const destination = (instr.destination.charAt(0) === path.sep)
                    ? instr.destination.substr(1)
                    : instr.destination;
                // Ensure we use windows path separators as scripted installers
                //  will sometime return *nix separators.
                const sanitized = (process.platform === 'win32')
                    ? destination.replace(sanitizeSep, path.sep)
                    : destination;
                return (!(0, util_1.isPathValid)(sanitized, true));
            }
            return false;
        }).map(instr => {
            return {
                type: instr.type,
                error: `invalid destination path: "${instr.destination}"`,
            };
        });
        return [].concat(invalidDestinationErrors);
    }
    transformInstructions(input) {
        return input.reduce((prev, value) => {
            if ((0, util_1.truthy)(value) && (prev[value.type] !== undefined)) {
                prev[value.type].push(value);
            }
            return prev;
        }, new InstructionGroups());
    }
    reportUnsupported(api, unsupported, archivePath) {
        if (unsupported.length === 0) {
            return;
        }
        const missing = unsupported.map(instruction => instruction.source);
        const makeReport = () => api.genMd5Hash(archivePath)
            .catch(err => ({}))
            .then((hashResult) => (0, errorHandling_1.createErrorReport)('Installer failed', {
            message: 'The installer uses unimplemented functions',
            details: `Missing instructions: ${missing.join(', ')}\n` +
                `Installer name: ${path.basename(archivePath)}\n` +
                `MD5 checksum: ${hashResult.md5sum}\n`,
        }, {}, ['installer'], api.store.getState()));
        const showUnsupportedDialog = () => api.store.dispatch((0, notifications_1.showDialog)('info', 'Installer unsupported', {
            message: 'This installer is (partially) unsupported as it\'s ' +
                'using functionality that hasn\'t been implemented yet. ' +
                'Please help us fix this by submitting an error report with a link to this mod.',
        }, ((0, errorHandling_1.isOutdated)() || (0, errorHandling_1.didIgnoreError)()) ? [
            { label: 'Close' },
        ] : [
            { label: 'Report', action: makeReport },
            { label: 'Close' },
        ]));
        api.sendNotification({
            type: 'info',
            message: 'Installer unsupported',
            actions: [{ title: 'More', action: showUnsupportedDialog }],
        });
    }
    processMKDir(instructions, destinationPath) {
        return bluebird_1.default.each(instructions, instruction => fs.ensureDirAsync(path.join(destinationPath, instruction.destination)))
            .then(() => undefined);
    }
    processGenerateFiles(generatefile, destinationPath) {
        return bluebird_1.default.each(generatefile, gen => {
            const outputPath = path.join(destinationPath, gen.destination);
            return fs.ensureDirAsync(path.dirname(outputPath))
                // data buffers are sent to us base64 encoded
                .then(() => fs.writeFileAsync(outputPath, gen.data));
        }).then(() => undefined);
    }
    processSubmodule(api, installContext, submodule, destinationPath, gameId, modId, choices, unattended) {
        return bluebird_1.default.each(submodule, mod => {
            const tempPath = destinationPath + '.' + (0, shortid_1.generate)() + '.installing';
            (0, log_1.log)('debug', 'install submodule', { modPath: mod.path, tempPath, destinationPath });
            const subContext = new InstallContext_1.default(gameId, api, unattended);
            subContext.startIndicator(api.translate('nested: {{modName}}', { replace: { modName: path.basename(mod.path) } }));
            const submoduleZip = new Zip();
            return this.installInner(api, mod.path, tempPath, destinationPath, gameId, subContext, submoduleZip, undefined, choices, undefined, unattended)
                .then((resultInner) => this.processInstructions(api, installContext, mod.path, tempPath, destinationPath, gameId, modId, resultInner, choices, unattended))
                .then(() => {
                if (mod.submoduleType !== undefined) {
                    api.store.dispatch((0, mods_1.setModType)(gameId, modId, mod.submoduleType));
                }
            })
                .finally(() => {
                subContext.finishInstallCB('ignore');
                subContext.stopIndicator();
                (0, log_1.log)('debug', 'removing submodule', tempPath);
                fs.removeAsync(tempPath);
            });
        })
            .then(() => undefined);
    }
    processAttribute(api, attribute, gameId, modId) {
        attribute.forEach(attr => {
            api.store.dispatch((0, mods_1.setModAttribute)(gameId, modId, attr.key, attr.value));
        });
        return bluebird_1.default.resolve();
    }
    processEnableAllPlugins(api, enableAll, gameId, modId) {
        if (enableAll.length > 0) {
            api.store.dispatch((0, mods_1.setModAttribute)(gameId, modId, 'enableallplugins', true));
        }
        return bluebird_1.default.resolve();
    }
    processSetModType(api, installContext, types, gameId, modId) {
        if (types.length > 0) {
            const type = types[types.length - 1].value;
            installContext.setModType(modId, type);
            api.store.dispatch((0, mods_1.setModType)(gameId, modId, type));
            if (types.length > 1) {
                (0, log_1.log)('error', 'got more than one mod type, only the last was used', { types });
            }
        }
        return bluebird_1.default.resolve();
    }
    processRule(api, rules, gameId, modId) {
        const batched = rules.reduce((acc, rule) => {
            acc.push((0, mods_1.addModRule)(gameId, modId, rule.rule));
            return acc;
        }, []);
        (0, util_1.batchDispatch)(api.store, batched);
    }
    processIniEdits(api, iniEdits, destinationPath, gameId, modId) {
        if (iniEdits.length === 0) {
            return bluebird_1.default.resolve();
        }
        const byDest = iniEdits.reduce((prev, value) => {
            (0, util_1.setdefault)(prev, value.destination, []).push(value);
            return prev;
        }, {});
        return fs.ensureDirAsync(path.join(destinationPath, exports.INI_TWEAKS_PATH))
            .then(() => bluebird_1.default.map(Object.keys(byDest), destination => {
            const bySection = byDest[destination].reduce((prev, value) => {
                (0, util_1.setdefault)(prev, value.section, []).push(value);
                return prev;
            }, {});
            const renderKV = (instruction) => `${instruction.key} = ${instruction.value}`;
            const renderSection = (section) => [
                `[${section}]`,
            ].concat(bySection[section].map(renderKV)).join(os.EOL);
            const content = Object.keys(bySection).map(renderSection).join(os.EOL);
            const basename = path.basename(destination, path.extname(destination));
            const tweakId = `From Installer [${basename}].ini`;
            api.store.dispatch((0, mods_1.setINITweakEnabled)(gameId, modId, tweakId, true));
            return fs.writeFileAsync(path.join(destinationPath, exports.INI_TWEAKS_PATH, tweakId), content);
        }))
            .then(() => undefined);
    }
    processInstructions(api, installContext, archivePath, tempPath, destinationPath, gameId, modId, result, choices, unattended) {
        var _a, _b;
        if (result.instructions === null) {
            // this is the signal that the installer has already reported what went
            // wrong. Not necessarily a "user canceled" but the error handling happened
            // in the installer so we don't know what happened.
            return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
        }
        if ((result.instructions === undefined) ||
            (result.instructions.length === 0)) {
            return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Empty archive or no options selected'));
        }
        const isActivityRunning = (activity) => (0, storeHelper_1.getSafe)(api.getState(), ['session', 'base', 'activity', 'mods'], []).includes(activity); // purge/deploy
        if (isActivityRunning('installing_dependencies')) {
            // we don't want to override any instructions when installing as part of a collection!
            //  this will just add extra complexity to an already complex process.
            result.overrideInstructions = [];
        }
        const overrideMap = new Map();
        (_a = result.overrideInstructions) === null || _a === void 0 ? void 0 : _a.forEach(instr => {
            var _a;
            const key = ((_a = instr.source) !== null && _a !== void 0 ? _a : instr.type).toUpperCase();
            if (instr.type !== 'setmodtype' || this.modTypeExists(gameId, instr === null || instr === void 0 ? void 0 : instr.value)) {
                overrideMap.set(key, instr);
            }
            else {
                (0, log_1.log)('warn', 'mod type does not exist', instr);
            }
        });
        const finalInstructions = result.instructions.map(instr => {
            var _a;
            const key = ((_a = instr.source) !== null && _a !== void 0 ? _a : instr.type).toUpperCase();
            const overrideEntry = overrideMap.get(key);
            if (overrideEntry) {
                (0, log_1.log)('debug', 'overriding instruction', { key, type: instr.type, override: JSON.stringify(overrideEntry) });
            }
            return overrideEntry !== null && overrideEntry !== void 0 ? overrideEntry : instr;
        });
        // Add instructions from result.overrideInstructions that are not already present in finalInstructions
        if (Array.isArray(result.overrideInstructions)) {
            const existingKeys = new Set(finalInstructions.map(instr => { var _a; return ((_a = instr.source) !== null && _a !== void 0 ? _a : instr.type).toUpperCase(); }));
            for (const instr of result.overrideInstructions) {
                const key = ((_b = instr.source) !== null && _b !== void 0 ? _b : instr.type).toUpperCase();
                // For copy instructions, ensure no duplicate destinations
                if (instr.type === 'copy') {
                    const isDuplicate = finalInstructions.some(existingInstr => existingInstr.type === 'copy' &&
                        existingInstr.destination === instr.destination);
                    if (isDuplicate) {
                        // The assumption here is that the override instruction does not contain
                        //  the correct source information so we use the original instruction
                        continue;
                    }
                }
                if (!existingKeys.has(key) && (instr.type !== 'setmodtype' || this.modTypeExists(gameId, instr === null || instr === void 0 ? void 0 : instr.value))) {
                    finalInstructions.push(instr);
                }
            }
        }
        const invalidInstructions = this.validateInstructions(finalInstructions);
        if (invalidInstructions.length > 0) {
            const game = (0, getGame_1.getGame)(gameId);
            // we can also get here with invalid instructions from scripted installers
            // so even if the game is not contributed, this is still probably not a bug
            // const allowReport = (game.contributed === undefined);
            const allowReport = false;
            const error = (allowReport)
                ? 'Invalid installer instructions found for "{{ modId }}".'
                : 'Invalid installer instructions found for "{{ modId }}". Please inform '
                    + 'the game extension\'s developer - "{{ contributor }}", or the mod author.';
            api.showErrorNotification('Invalid mod installer instructions', {
                invalid: '\n' + invalidInstructions.map(inval => `(${inval.type}) - ${inval.error}`).join('\n'),
                message: error,
            }, {
                replace: {
                    modId,
                    contributor: game.contributed,
                },
                allowReport,
            });
            return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Invalid installer instructions'));
        }
        const instructionGroups = this.transformInstructions(finalInstructions);
        if (instructionGroups.error.length > 0) {
            const fatal = instructionGroups.error.find(err => err.value === 'fatal');
            let error = 'Errors were reported processing the installer for "{{ modId }}". ';
            if (fatal === undefined) {
                error += 'It\'s possible the mod works (partially) anyway. '
                    + 'Please note that NMM tends to ignore errors so just because NMM doesn\'t '
                    + 'report a problem with this installer doesn\'t mean it doesn\'t have any.';
            }
            api.showErrorNotification('Installer reported errors', error + '\n{{ errors }}', {
                replace: {
                    errors: instructionGroups.error.map(err => err.source).join('\n'),
                    modId,
                },
                allowReport: false,
                message: modId,
            });
            if (fatal !== undefined) {
                return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Installer script failed'));
            }
        }
        // log('debug', 'installer instructions',
        //     JSON.stringify(result.instructions.map(instr => _.omit(instr, ['data']))));
        this.reportUnsupported(api, instructionGroups.unsupported, archivePath);
        return this.processMKDir(instructionGroups.mkdir, destinationPath)
            .then(() => this.extractArchive(api, archivePath, tempPath, destinationPath, instructionGroups.copy, gameId))
            .then(() => this.processGenerateFiles(instructionGroups.generatefile, destinationPath))
            .then(() => this.processIniEdits(api, instructionGroups.iniedit, destinationPath, gameId, modId))
            .then(() => this.processSubmodule(api, installContext, instructionGroups.submodule, destinationPath, gameId, modId, choices, unattended))
            .then(() => this.processAttribute(api, instructionGroups.attribute, gameId, modId))
            .then(() => this.processEnableAllPlugins(api, instructionGroups.enableallplugins, gameId, modId))
            .then(() => this.processSetModType(api, installContext, instructionGroups.setmodtype, gameId, modId))
            .then(() => {
            this.processRule(api, instructionGroups.rule, gameId, modId);
            return bluebird_1.default.resolve();
        });
    }
    checkModVariantsExist(api, gameMode, archiveId) {
        if (archiveId === null) {
            return [];
        }
        const state = api.getState();
        const mods = Object.values(state.persistent.mods[gameMode] || []);
        return mods.filter(mod => mod.archiveId === archiveId).map(mod => mod.id);
    }
    checkModNameExists(installName, api, gameMode) {
        const state = api.getState();
        const mods = Object.values(state.persistent.mods[gameMode] || []);
        // Yes I know that only 1 mod id can ever match the install name, but it's more consistent
        //  with the variant check as we don't have to check for undefined too.
        return mods.filter(mod => mod.id === installName).map(mod => mod.id);
    }
    findPreviousVersionMod(fileId, store, gameMode, isCollection) {
        const mods = store.getState().persistent.mods[gameMode] || {};
        // This is not great, but we need to differentiate between revisionIds and fileIds
        //  as it's perfectly possible for a collection's revision id to match a regular
        //  mod's fileId resulting in false positives and therefore mashed up metadata.
        const filterFunc = (modId) => (isCollection)
            ? mods[modId].type === 'collection'
            : mods[modId].type !== 'collection';
        let mod;
        Object.keys(mods).filter(filterFunc).forEach(key => {
            var _a, _b, _c, _d;
            // TODO: fileId/revisionId can potentially be more up to date than the last
            //  known "newestFileId" property if the curator/mod author has released a new
            //  version of his collection/mod since the last time the user checked for updates
            const newestFileId = (_a = mods[key].attributes) === null || _a === void 0 ? void 0 : _a.newestFileId;
            const currentFileId = (_c = (_b = mods[key].attributes) === null || _b === void 0 ? void 0 : _b.fileId) !== null && _c !== void 0 ? _c : (_d = mods[key].attributes) === null || _d === void 0 ? void 0 : _d.revisionId;
            if ((newestFileId !== currentFileId)
                && (newestFileId === fileId)) {
                mod = mods[key];
            }
        });
        return mod;
    }
    queryIgnoreDependent(store, gameId, dependents) {
        const batchKey = 'remember-ignore-dependent-action';
        let context = (0, BatchContext_1.getBatchContext)('install-mod', '', false);
        const handleAction = (action, remember) => {
            var _a;
            if (remember) {
                context = (0, BatchContext_1.getBatchContext)('install-mod', '', true);
                (_a = context === null || context === void 0 ? void 0 : context.set) === null || _a === void 0 ? void 0 : _a.call(context, batchKey, action);
            }
            if (action === 'Cancel') {
                return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
            }
            else {
                const ruleActions = dependents.reduce((prev, dep) => {
                    prev.push((0, mods_1.removeModRule)(gameId, dep.owner, dep.rule));
                    prev.push((0, mods_1.addModRule)(gameId, dep.owner, Object.assign(Object.assign({}, dep.rule), { ignored: true })));
                    return prev;
                }, []);
                (0, util_1.batchDispatch)(store, ruleActions);
                return bluebird_1.default.resolve();
            }
        };
        return new bluebird_1.default((resolve, reject) => {
            var _a;
            const rememberAction = (_a = context === null || context === void 0 ? void 0 : context.get) === null || _a === void 0 ? void 0 : _a.call(context, batchKey, false);
            if (rememberAction) {
                // if we already have a remembered action, just resolve
                return handleAction(rememberAction, true)
                    .then(() => resolve())
                    .catch(err => reject(err));
            }
            store.dispatch((0, notifications_1.showDialog)('question', 'Updating may break dependencies', {
                text: 'You\'re updating a mod that others depend upon and the update doesn\'t seem to '
                    + 'be compatible (according to the dependency information). '
                    + 'If you continue we have to disable these dependencies, otherwise you\'ll '
                    + 'continually get warnings about it.',
                options: { wrap: true },
                checkboxes: [{
                        id: 'remember',
                        value: false,
                        text: 'Remember my choice',
                    }],
            }, [
                { label: 'Cancel' },
                { label: 'Ignore' },
            ]))
                .then((result) => handleAction(result.action, result.input.remember)
                .then(() => resolve())
                .catch(err => reject(err)));
        });
    }
    queryProfileCount(store) {
        const state = store.getState();
        const profiles = (0, selectors_1.gameProfiles)(state);
        return profiles.length;
    }
    userVersionChoice(oldMod, store) {
        var _a;
        const totalProfiles = this.queryProfileCount(store);
        const batchAction = 'remember-user-version-choice-action';
        const handleAction = (action, remember) => {
            var _a;
            if (remember) {
                const context = (0, BatchContext_1.getBatchContext)('install-mod', '', true);
                (_a = context === null || context === void 0 ? void 0 : context.set) === null || _a === void 0 ? void 0 : _a.call(context, batchAction, action);
            }
            if (action === 'Cancel') {
                return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
            }
            else if (action === exports.REPLACE_ACTION) {
                return bluebird_1.default.resolve(exports.REPLACE_ACTION);
            }
            else if (action === exports.INSTALL_ACTION) {
                return bluebird_1.default.resolve(exports.INSTALL_ACTION);
            }
        };
        const context = (0, BatchContext_1.getBatchContext)('install-mod', '', false);
        const rememberAction = (_a = context === null || context === void 0 ? void 0 : context.get) === null || _a === void 0 ? void 0 : _a.call(context, batchAction);
        return rememberAction ? bluebird_1.default.resolve(rememberAction) : (totalProfiles === 1)
            ? bluebird_1.default.resolve(exports.REPLACE_ACTION)
            : new bluebird_1.default((resolve, reject) => {
                store.dispatch((0, notifications_1.showDialog)('question', (0, modName_1.default)(oldMod), {
                    text: 'An older version of this mod is already installed. '
                        + 'You can replace the existing one - which will update all profiles - '
                        + 'or install this one alongside it. In the latter case both versions '
                        + 'will be available and only the active profile will be updated. ',
                    options: { wrap: true },
                    checkboxes: [{
                            id: 'remember',
                            value: false,
                            text: 'Remember my choice',
                        }]
                }, [
                    { label: 'Cancel' },
                    { label: exports.REPLACE_ACTION },
                    { label: exports.INSTALL_ACTION },
                ]))
                    .then((result) => handleAction(result.action, result.input.remember))
                    .then(resolve)
                    .catch(reject);
            });
    }
    queryUserReplace(api, modIds, gameId, installOptions) {
        return new bluebird_1.default((resolve, reject) => {
            const state = api.store.getState();
            const mods = Object.values(state.persistent.mods[gameId])
                .filter(mod => modIds.includes(mod.id));
            if (mods.length === 0) {
                // Technically for this to happen the timing must be *perfect*,
                //  the replace query dialog will only show if we manage to confirm that
                //  the modId is indeed stored persistently - but if somehow the user
                //  was able to finish removing the mod right as the replace dialog
                //  appears the mod could be potentially missing from the state.
                // In this case we resolve using the existing modId.
                // https://github.com/Nexus-Mods/Vortex/issues/7972
                const currentProfile = (0, selectors_1.activeProfile)(api.store.getState());
                return resolve({
                    id: modIds[0],
                    variant: '',
                    enable: (0, storeHelper_1.getSafe)(currentProfile, ['modState', modIds[0], 'enabled'], false),
                    attributes: {},
                    rules: [],
                    replaceChoice: 'replace',
                });
            }
            const context = (0, BatchContext_1.getBatchContext)('install-mod', mods[0].archiveId);
            const queryVariantNameDialog = (remember) => {
                const checkVariantRemember = [];
                if ((0, util_1.truthy)(context)) {
                    const itemsCompleted = context.get('items-completed', 0);
                    const itemsLeft = context.itemCount - itemsCompleted;
                    if ((itemsLeft > 1) && remember) {
                        checkVariantRemember.push({
                            id: 'remember',
                            value: false,
                            text: api.translate('Use this name for all remaining variants ({{count}} more)', {
                                count: itemsLeft - 1,
                            }),
                        });
                    }
                }
                return api.showDialog('question', 'Install options - Name mod variant', {
                    text: 'Enter a variant name for "{{modName}}" to differentiate it from the original',
                    input: [{
                            id: 'variant',
                            value: installOptions.variantNumber > 2 ? installOptions.variantNumber.toString() : '2',
                            label: 'Variant',
                        }],
                    checkboxes: checkVariantRemember,
                    md: '**Remember:** You can switch between variants by clicking in the version '
                        + 'column in your mod list and selecting from the dropdown.',
                    parameters: {
                        modName: (0, modName_1.default)(mods[0], { version: false }),
                    },
                    condition: (content) => validateVariantName(api.translate, content),
                    options: {
                        order: ['text', 'input', 'md', 'checkboxes'],
                    },
                }, [
                    { label: 'Cancel' },
                    { label: 'Continue' },
                ])
                    .then(result => {
                    var _a;
                    if (result.action === 'Cancel') {
                        (_a = context === null || context === void 0 ? void 0 : context.set) === null || _a === void 0 ? void 0 : _a.call(context, 'canceled', true);
                        return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
                    }
                    else {
                        if (result.input.remember) {
                            context.set('variant-name', result.input.variant);
                        }
                        return bluebird_1.default.resolve(result.input.variant);
                    }
                });
            };
            const mod = mods[0];
            const modReference = {
                id: mod.id,
                fileList: installOptions === null || installOptions === void 0 ? void 0 : installOptions.fileList,
                archiveId: mod.archiveId,
                gameId,
                installerChoices: installOptions === null || installOptions === void 0 ? void 0 : installOptions.choices,
                patches: installOptions === null || installOptions === void 0 ? void 0 : installOptions.patches,
            };
            const isDependency = ((installOptions === null || installOptions === void 0 ? void 0 : installOptions.unattended) === true) && ((0, testModReference_1.default)(mods[0], modReference) === false);
            const addendum = isDependency
                ? ' and is trying to be reinstalled as a dependency by another mod or collection.'
                : '.';
            const queryDialog = () => api.showDialog('question', 'Install options', {
                bbcode: api.translate(`"{{modName}}" is already installed on your system${addendum}` + '[br][/br][br][/br]Would you like to:', { replace: { modName: (0, modName_1.default)(mods[0], { version: false }), } }),
                choices: [
                    {
                        id: 'replace',
                        value: true,
                        text: 'Replace the existing mod' + (isDependency ? ' (recommended)' : ''),
                        subText: 'This will replace the existing mod on all your profiles.',
                    },
                    {
                        id: 'variant',
                        value: false,
                        text: 'Install as variant of the existing mod',
                        subText: 'This will allow you to install variants of the same mod and easily '
                            + 'switch between them from the version drop-down in the mods table. '
                            + 'This can be useful if you want to install the same mod but with '
                            + 'different options in different profiles.',
                    },
                ],
                checkboxes: checkRoVRemember,
                options: {
                    wrap: true,
                    order: ['choices', 'checkboxes'],
                },
                parameters: {
                    modName: (0, modName_1.default)(mods[0], { version: false }),
                },
            }, [
                { label: 'Cancel' },
                { label: 'Continue' },
            ])
                .then(result => {
                var _a;
                if (result.action === 'Cancel') {
                    (_a = context === null || context === void 0 ? void 0 : context.set) === null || _a === void 0 ? void 0 : _a.call(context, 'canceled', true);
                    return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
                }
                else if (result.input.variant) {
                    return queryVariantNameDialog(result.input.remember)
                        .then(variant => ({
                        action: 'variant',
                        variant,
                        remember: result.input.remember,
                    }));
                }
                else if (result.input.replace) {
                    return {
                        action: 'replace',
                        remember: result.input.remember,
                    };
                }
            });
            const queryVariantReplacement = () => api.showDialog('question', 'Select Variant to Replace', {
                text: '"{{modName}}" has several variants installed - please choose which one to replace:',
                choices: modIds.map((id, idx) => {
                    const modAttributes = mods[idx].attributes;
                    const variant = (0, storeHelper_1.getSafe)(modAttributes, ['variant'], '');
                    return {
                        id,
                        value: idx === 0,
                        text: `modId: ${id}`,
                        subText: api.translate('Version: {{version}}; InstallTime: {{installTime}}; Variant: {{variant}}', {
                            replace: {
                                version: (0, storeHelper_1.getSafe)(modAttributes, ['version'], 'Unknown'),
                                installTime: new Date((0, storeHelper_1.getSafe)(modAttributes, ['installTime'], 0)),
                                variant: (0, util_1.truthy)(variant) ? variant : 'Not set',
                            }
                        }),
                    };
                }),
                parameters: {
                    modName: (0, modName_1.default)(mods[0], { version: false }),
                },
            }, [
                { label: 'Cancel' },
                { label: 'Continue' },
            ]);
            let choices;
            const checkRoVRemember = [];
            if (context !== undefined) {
                if (context.get('canceled', false)) {
                    return reject(new CustomErrors_1.UserCanceled());
                }
                const action = context.get('replace-or-variant');
                const itemsCompleted = context.get('items-completed', 0);
                const itemsLeft = context.itemCount - itemsCompleted;
                if (itemsLeft > 1) {
                    if (action === undefined) {
                        checkRoVRemember.push({
                            id: 'remember',
                            value: false,
                            text: api.translate('Do this for all remaining reinstalls ({{count}} more)', {
                                count: itemsLeft - 1,
                            }),
                        });
                    }
                }
                if (action !== undefined) {
                    let variant = context.get('variant-name');
                    if ((action === 'variant') && (variant === undefined)) {
                        choices = queryVariantNameDialog(context.get('replace-or-variant') !== undefined)
                            .then(variantName => ({
                            action,
                            variant: variantName,
                            remember: true,
                        }));
                    }
                    else {
                        if ((variant !== undefined) && (installOptions.variantNumber > 1)) {
                            variant += `.${installOptions.variantNumber}`;
                        }
                        choices = bluebird_1.default.resolve({
                            action,
                            variant,
                            remember: true,
                        });
                    }
                }
            }
            if (choices === undefined) {
                choices = isDependency ? bluebird_1.default.resolve({ action: 'replace', remember: true }) : queryDialog();
            }
            choices
                .then((result) => {
                var _a, _b, _c;
                const currentProfile = (0, selectors_1.activeProfile)(api.store.getState());
                const wasEnabled = (modId) => {
                    return ((currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.gameId) === gameId)
                        ? (0, storeHelper_1.getSafe)(currentProfile.modState, [modId, 'enabled'], false)
                        : false;
                };
                const replaceMod = (modId) => {
                    const mod = mods.find(m => m.id === modId);
                    const variant = mod !== undefined ? (0, storeHelper_1.getSafe)(mod.attributes, ['variant'], '') : '';
                    api.events.emit('remove-mod', gameId, modId, (err) => {
                        if (err !== null) {
                            reject(err);
                        }
                        else {
                            resolve({
                                id: modId,
                                variant,
                                enable: wasEnabled(modId),
                                attributes: _.omit(mod.attributes, ['version', 'fileName', 'fileVersion']),
                                rules: mod.rules,
                                replaceChoice: 'replace',
                            });
                        }
                    }, { willBeReplaced: true });
                };
                if (result.action === 'variant') {
                    if (result.remember === true) {
                        (_a = context === null || context === void 0 ? void 0 : context.set) === null || _a === void 0 ? void 0 : _a.call(context, 'replace-or-variant', 'variant');
                    }
                    if (currentProfile !== undefined) {
                        const actions = modIds.map(id => (0, profiles_1.setModEnabled)(currentProfile.id, id, false));
                        (0, util_1.batchDispatch)(api.store.dispatch, actions);
                    }
                    // We want the shortest possible modId paired against this archive
                    //  before adding the variant name to it.
                    const archiveId = mods[0].archiveId;
                    const relevantIds = Object.keys(state.persistent.mods[gameId])
                        .filter(id => { var _a; return ((_a = state.persistent.mods[gameId][id]) === null || _a === void 0 ? void 0 : _a.archiveId) === archiveId; });
                    const modId = relevantIds.reduce((prev, iter) => iter.length < prev.length ? iter : prev, relevantIds[0]);
                    // We just disabled all variants - if any of the variants was enabled previously
                    //  it's safe to assume that the user wants this new variant enabled.
                    const enable = modIds.reduce((prev, iter) => wasEnabled(iter) ? true : prev, false);
                    resolve({
                        id: modId + '+' + result.variant,
                        variant: result.variant,
                        enable,
                        attributes: {},
                        rules: [],
                        replaceChoice: 'variant',
                    });
                }
                else if (result.action === 'replace') {
                    if (result.remember === true) {
                        (_b = context === null || context === void 0 ? void 0 : context.set) === null || _b === void 0 ? void 0 : _b.call(context, 'replace-or-variant', 'replace');
                    }
                    if (modIds.length > 1) {
                        queryVariantReplacement()
                            .then((res) => {
                            var _a;
                            if (res.action === 'Cancel') {
                                (_a = context === null || context === void 0 ? void 0 : context.set) === null || _a === void 0 ? void 0 : _a.call(context, 'canceled', true);
                                reject(new CustomErrors_1.UserCanceled());
                            }
                            else {
                                const selected = Object.keys(res.input).find(iter => res.input[iter]);
                                replaceMod(selected);
                            }
                        });
                    }
                    else {
                        replaceMod(modIds[0]);
                    }
                }
                else {
                    if (result.action === 'Cancel') {
                        (0, log_1.log)('error', 'invalid action in "queryUserReplace"', { action: result.action });
                    }
                    (_c = context === null || context === void 0 ? void 0 : context.set) === null || _c === void 0 ? void 0 : _c.call(context, 'canceled', true);
                    reject(new CustomErrors_1.UserCanceled());
                }
            })
                .tap(() => {
                if (context !== undefined) {
                    context.set('items-completed', context.get('items-completed', 0) + 1);
                }
            })
                .catch(err => {
                return reject(err);
            });
        });
    }
    getInstaller(fileList, gameId, archivePath, offsetIn) {
        const offset = offsetIn || 0;
        if (offset >= this.mInstallers.length) {
            return bluebird_1.default.resolve(undefined);
        }
        return bluebird_1.default.resolve(this.mInstallers[offset].testSupported(fileList, gameId, archivePath))
            .then((testResult) => {
            if (testResult === undefined) {
                (0, log_1.log)('error', 'Buggy installer', this.mInstallers[offset].id);
            }
            return ((testResult === null || testResult === void 0 ? void 0 : testResult.supported) === true)
                ? bluebird_1.default.resolve({
                    installer: this.mInstallers[offset],
                    requiredFiles: testResult.requiredFiles,
                })
                : this.getInstaller(fileList, gameId, archivePath, offset + 1);
        });
    }
    /**
     * determine the mod name (on disk) from the archive path
     * TODO: this currently simply uses the archive name which should be fine
     *   for downloads from nexus but in general we need the path to encode the
     *   mod, the specific "component" and the version. And then we need to avoid
     *   collisions.
     *   Finally, the way I know users they will want to customize this.
     *
     * @param {string} archiveName
     * @param {*} info
     * @returns
     */
    deriveInstallName(archiveName, info) {
        return (0, modIdManager_1.default)(archiveName, info);
    }
    downloadURL(api, lookupResult, wasCanceled, referenceTag, campaign, fileName) {
        const call = (input) => (input !== undefined) && (typeof (input) === 'function')
            ? input() : bluebird_1.default.resolve(input);
        let resolvedSource;
        let resolvedReferer;
        return call(lookupResult.sourceURI).then(res => resolvedSource = res)
            .then(() => call(lookupResult.referer).then(res => resolvedReferer = res))
            .then(() => new bluebird_1.default((resolve, reject) => {
            if (wasCanceled()) {
                return reject(new CustomErrors_1.UserCanceled(false));
            }
            else if (!(0, util_1.truthy)(resolvedSource)) {
                return reject(new CustomErrors_1.UserCanceled(true));
            }
            const parsedUrl = new URL(resolvedSource);
            if ((campaign !== undefined) && (parsedUrl.protocol === 'nxm:')) {
                parsedUrl.searchParams.set('campaign', campaign);
            }
            if (!api.events.emit('start-download', [parsedUrl], {
                game: (0, convertGameId_1.convertGameIdReverse)((0, selectors_1.knownGames)(api.store.getState()), lookupResult.domainName),
                source: lookupResult.source,
                name: lookupResult.logicalFileName,
                referer: resolvedReferer,
                referenceTag,
                meta: lookupResult,
            }, fileName, (error, id) => __awaiter(this, void 0, void 0, function* () {
                if (error === null) {
                    return resolve(id);
                }
                else if (error instanceof DownloadManager_1.AlreadyDownloaded) {
                    return resolve(error.downloadId);
                }
                else if (error instanceof DownloadManager_1.DownloadIsHTML) {
                    // If this is a google drive link and the file exceeds the
                    //  virus testing limit, Google will return an HTML page asking
                    //  the user for consent to download the file. Lets try this using
                    //  the browser extension.
                    const instructions = `You are trying to download "${lookupResult.fileName}" from "${resolvedSource}".\n`
                        + 'Depending on the portal, you may be re-directed several times.';
                    const result = yield api.emitAndAwait('browse-for-download', resolvedSource, instructions);
                    if (result.length > 0) {
                        const newLookupRes = Object.assign(Object.assign({}, lookupResult), { sourceURI: result[0] });
                        const id = yield this.downloadURL(api, newLookupRes, wasCanceled, referenceTag, campaign, fileName);
                        return resolve(id);
                    }
                    else {
                        return reject(new CustomErrors_1.UserCanceled());
                    }
                }
                else {
                    return reject(error);
                }
            }), 'never', { allowInstall: false, allowOpenHTML: false })) {
                return reject(new Error('download manager not installed?'));
            }
        }));
    }
    downloadMatching(api, lookupResult, pattern, referenceTag, wasCanceled, campaign, fileName) {
        const modId = (0, storeHelper_1.getSafe)(lookupResult, ['details', 'modId'], undefined);
        const fileId = (0, storeHelper_1.getSafe)(lookupResult, ['details', 'fileId'], undefined);
        if ((modId === undefined) && (fileId === undefined)) {
            return this.downloadURL(api, lookupResult, wasCanceled, referenceTag, fileName);
        }
        const gameId = (0, convertGameId_1.convertGameIdReverse)((0, selectors_1.knownGames)(api.getState()), lookupResult.domainName || lookupResult.gameId);
        return api.emitAndAwait('start-download-update', lookupResult.source, gameId, modId, fileId, pattern, campaign, referenceTag)
            .then((results) => {
            if ((results === undefined) || (results.length === 0)) {
                return bluebird_1.default.reject(new CustomErrors_1.NotFound(`source not supported "${lookupResult.source}"`));
            }
            else {
                if (!(0, util_1.truthy)(results[0])) {
                    return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Download failed', { alreadyReported: true }));
                }
                else {
                    const successResult = results.find(iter => iter.error === null);
                    if (successResult === undefined) {
                        return bluebird_1.default.reject(results[0].error);
                    }
                    else {
                        api.store.dispatch((0, actions_1.setDownloadModInfo)(results[0].dlId, 'referenceTag', referenceTag));
                        return bluebird_1.default.resolve(results[0].dlId);
                    }
                }
            }
        });
    }
    downloadDependencyAsync(requirement, api, lookupResult, wasCanceled, fileName) {
        var _a;
        const referenceTag = requirement['tag'];
        const { campaign } = (_a = requirement['repo']) !== null && _a !== void 0 ? _a : {};
        if ((requirement.versionMatch !== undefined)
            && (!requirement.versionMatch.endsWith('+prefer') || lookupResult.archived)
            && (0, testModReference_1.isFuzzyVersion)(requirement.versionMatch)) {
            // seems to be a fuzzy matcher so we may have to look for an update
            return this.downloadMatching(api, lookupResult, requirement.versionMatch, referenceTag, wasCanceled, campaign, fileName)
                .catch(err => {
                if (err instanceof nexus_api_1.HTTPError) {
                    // assuming the api failed because the mod had been archive, can still download
                    // the exact file specified by the curator
                    return undefined;
                }
                else {
                    return bluebird_1.default.reject(err);
                }
            })
                .then(res => (res === undefined)
                ? this.downloadURL(api, lookupResult, wasCanceled, referenceTag, campaign, fileName)
                : res);
        }
        else {
            return this.downloadURL(api, lookupResult, wasCanceled, referenceTag, campaign, fileName)
                .catch(err => {
                var _a, _b;
                if ((err instanceof CustomErrors_1.UserCanceled) || (err instanceof CustomErrors_1.ProcessCanceled)) {
                    return bluebird_1.default.reject(err);
                }
                // with +prefer versions, if the exact version isn't available, an update is acceptable
                if ((_b = (_a = requirement.versionMatch) === null || _a === void 0 ? void 0 : _a.endsWith) === null || _b === void 0 ? void 0 : _b.call(_a, '+prefer')) {
                    return this.downloadMatching(api, lookupResult, requirement.versionMatch, referenceTag, wasCanceled, campaign, fileName);
                }
                else {
                    return bluebird_1.default.reject(err);
                }
            });
        }
    }
    applyExtraFromRule(api, gameId, modId, extra) {
        if (extra === undefined) {
            return;
        }
        if (extra.type !== undefined) {
            api.store.dispatch((0, mods_1.setModType)(gameId, modId, extra.type));
        }
        const attributes = {};
        if (extra.name !== undefined) {
            attributes['customFileName'] = extra.name;
        }
        if (extra.url !== undefined) {
            attributes['source'] = 'website';
            attributes['url'] = extra.url;
        }
        if (extra.category !== undefined) {
            const categoryId = (0, retrieveCategoryPath_1.resolveCategoryId)(extra.category, api.getState());
            if (categoryId !== undefined) {
                attributes['category'] = categoryId;
            }
        }
        if (extra.author !== undefined) {
            attributes['author'] = extra.author;
        }
        if (extra.version !== undefined) {
            attributes['version'] = extra.version;
        }
        if (extra.patches !== undefined) {
            attributes['patches'] = extra.patches;
        }
        if (extra.fileList !== undefined) {
            attributes['fileList'] = extra.fileList;
        }
        if (extra.installerChoices !== undefined) {
            attributes['installerChoices'] = extra.installerChoices;
        }
        api.store.dispatch((0, mods_1.setModAttributes)(gameId, modId, attributes));
    }
    dropUnfulfilled(api, dep, gameId, sourceModId, recommended) {
        (0, log_1.log)('info', 'ignoring unfulfillable rule', { gameId, sourceModId, dep });
        if (recommended) {
            // not ignoring recommended dependencies because what would be the point?
            return;
        }
        const refName = (0, modName_1.renderModReference)(dep.reference, undefined);
        api.store.dispatch((0, mods_1.addModRule)(gameId, sourceModId, Object.assign(Object.assign({ type: recommended ? 'recommends' : 'requires' }, _.pick(dep, ['reference', 'extra', 'fileList', 'installerChoices'])), { ignored: true })));
        api.sendNotification({
            type: 'warning',
            title: 'Unfulfillable rule dropped',
            group: 'unfulfillable-rule-dropped',
            message: refName,
            actions: [
                {
                    title: 'More', action: () => {
                        var _a;
                        const sourceMod = (_a = api.getState().persistent.mods[gameId]) === null || _a === void 0 ? void 0 : _a[sourceModId];
                        api.showDialog('info', 'Unfulfillable rule disabled', {
                            text: 'The mod "{{modName}}" has a dependency on "{{refName}}" which '
                                + 'Vortex is not able to fulfill automatically.\n\n'
                                + 'Very likely Vortex would also not recognize the rule as '
                                + 'fulfilled even if you did install it manually. Therefore the rule '
                                + 'has been disabled.\n\n'
                                + 'Please consult the mod instructions on if and how to solve this dependency.',
                            parameters: {
                                modName: (0, modName_1.default)(sourceMod),
                                refName,
                            },
                        }, [
                            { label: 'Close' },
                        ]);
                    }
                },
            ],
        });
    }
    doInstallDependenciesPhase(api, dependencies, gameId, sourceModId, recommended, doDownload, abort, silent) {
        const res = bluebird_1.default.map(dependencies, (dep) => __awaiter(this, void 0, void 0, function* () {
            if (abort.signal.aborted) {
                return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
            }
            (0, log_1.log)('debug', 'installing as dependency', {
                ref: dep.reference.logicalFileName,
                downloadRequired: dep.download === undefined,
            });
            const alreadyInstalled = dep.mod !== undefined;
            return doDownload(dep)
                .then(({ updatedDep, downloadId }) => {
                var _a, _b, _c, _d, _e;
                const modId = (_a = updatedDep.mod) === null || _a === void 0 ? void 0 : _a.id;
                if (modId == null) {
                    // installation has been queued within doDownload, return
                    //  the updated dependency so that the downloads can keep going.
                    return bluebird_1.default.resolve(updatedDep);
                }
                (0, log_1.log)('info', 'installed as dependency', { modId });
                if (!alreadyInstalled) {
                    api.store.dispatch((0, mods_1.setModAttribute)(gameId, modId, 'installedAsDependency', true));
                }
                // enable the mod in any profile that has the source mod enabled
                const profiles = Object.values(api.getState().persistent.profiles)
                    .filter(prof => {
                    var _a, _b;
                    return (prof.gameId === gameId)
                        && ((_b = (_a = prof.modState) === null || _a === void 0 ? void 0 : _a[sourceModId]) === null || _b === void 0 ? void 0 : _b.enabled);
                });
                profiles.forEach(prof => {
                    api.store.dispatch((0, profiles_1.setModEnabled)(prof.id, modId, true));
                });
                this.applyExtraFromRule(api, gameId, modId, Object.assign(Object.assign({}, dep.extra), { fileList: (_b = dep.fileList) !== null && _b !== void 0 ? _b : (_c = dep.extra) === null || _c === void 0 ? void 0 : _c.fileList, installerChoices: dep.installerChoices, patches: (_d = dep.patches) !== null && _d !== void 0 ? _d : (_e = dep.extra) === null || _e === void 0 ? void 0 : _e.patches }));
                const mods = api.store.getState().persistent.mods[gameId];
                return Object.assign(Object.assign({}, dep), { mod: mods[modId] });
            })
                .catch(err => {
                var _a;
                if ((_a = dep.extra) === null || _a === void 0 ? void 0 : _a.onlyIfFulfillable) {
                    this.dropUnfulfilled(api, dep, gameId, sourceModId, recommended);
                    return bluebird_1.default.resolve(undefined);
                }
                else {
                    return bluebird_1.default.reject(err);
                }
            })
                // don't cancel the whole process if one dependency fails to install
                .catch(CustomErrors_1.ProcessCanceled, err => {
                if ((err.extraInfo !== undefined) && err.extraInfo.alreadyReported) {
                    return bluebird_1.default.resolve(undefined);
                }
                const refName = (0, modName_1.renderModReference)(dep.reference, undefined);
                const message = err.message + '\nA common cause for issues here is that the file may no longer '
                    + 'be available. You may want to install a current version of the specified mod '
                    + 'and update or remove the dependency for the old one.';
                this.showDependencyError(api, sourceModId, 'Failed to install dependency', message, refName, {
                    allowReport: false,
                    silent,
                });
                return bluebird_1.default.resolve(undefined);
            })
                .catch(DownloadManager_1.DownloadIsHTML, () => {
                const refName = (0, modName_1.renderModReference)(dep.reference, undefined);
                const message = 'The direct download URL for this file is not valid or didn\'t lead to a file. '
                    + 'This may be a setup error in the dependency or the file has been moved.';
                this.showDependencyError(api, sourceModId, 'Failed to install dependency', message, refName, {
                    allowReport: false,
                    silent,
                });
                return bluebird_1.default.resolve(undefined);
            })
                .catch(CustomErrors_1.NotFound, err => {
                const refName = (0, modName_1.renderModReference)(dep.reference, undefined);
                this.showDependencyError(api, sourceModId, 'Failed to install dependency', err.message, refName, {
                    allowReport: false,
                    silent,
                });
                return bluebird_1.default.resolve(undefined);
            })
                .catch(err => {
                const refName = (dep.reference !== undefined)
                    ? (0, modName_1.renderModReference)(dep.reference, undefined)
                    : 'undefined';
                if (err instanceof CustomErrors_1.UserCanceled) {
                    if (err.skipped) {
                        return bluebird_1.default.resolve(undefined);
                    }
                    else {
                        abort.abort();
                        return bluebird_1.default.reject(err);
                    }
                }
                else if (err.code === 'Z_BUF_ERROR') {
                    this.showDependencyError(api, sourceModId, 'Download failed', 'The download ended prematurely or was corrupted. You\'ll have to restart it.', refName, {
                        allowReport: false,
                        silent,
                    });
                }
                else if ([403, 404, 410].includes(err['statusCode'])) {
                    const message = `${err['message']}\n\nThis error is usually caused by an invalid request, maybe you followed a link that has expired or you lack permission to access it.`;
                    this.showDependencyError(api, sourceModId, 'Failed to install dependency', message, refName, {
                        allowReport: false,
                        silent,
                    });
                    return bluebird_1.default.resolve();
                }
                else if (err.code === 'ERR_INVALID_PROTOCOL') {
                    const msg = err.message.replace(/ Expected .*/, '');
                    const message = 'The URL protocol used in the dependency is not supported, '
                        + 'you may be missing an extension required to handle it:\n' + msg;
                    this.showDependencyError(api, sourceModId, 'Failed to install dependency', message, refName, {
                        allowReport: false,
                        silent,
                    });
                }
                else if (err.name === 'HTTPError') {
                    err['attachLogOnReport'] = true;
                    this.showDependencyError(api, sourceModId, 'Failed to install dependency', err.message, refName, {
                        allowReport: true,
                        silent,
                    });
                }
                else {
                    const pretty = (0, message_1.prettifyNodeErrorMessage)(err);
                    this.showDependencyError(api, sourceModId, 'Failed to install dependency', pretty.message, refName, {
                        allowReport: pretty.allowReport,
                        silent,
                    });
                }
                return bluebird_1.default.resolve(undefined);
            })
                .then((updatedDependency) => {
                if (updatedDependency === undefined) {
                    return bluebird_1.default.resolve(undefined);
                }
                (0, log_1.log)('debug', 'done installing dependency', {
                    ref: dep.reference.logicalFileName,
                });
                return bluebird_1.default.resolve(updatedDependency);
            });
        }), { concurrency: 10 })
            .finally(() => {
            // Process any pending installations that were queued during dependency installation
            const phaseState = this.mInstallPhaseState.get(sourceModId);
            if (phaseState && phaseState.allowedPhase !== undefined) {
                this.startPendingForPhase(sourceModId, phaseState.allowedPhase);
                // Scan for any finished downloads that haven't been queued yet
                // This handles downloads that were imported/finished before the collection started installing
                (0, log_1.log)('debug', 'Scanning for unqueued finished downloads', { sourceModId });
                const state = api.getState();
                const downloads = state.persistent.downloads.files;
                const mods = state.persistent.mods[gameId] || {};
                const collectionMod = mods[sourceModId];
                if (collectionMod === null || collectionMod === void 0 ? void 0 : collectionMod.rules) {
                    let foundCount = 0;
                    collectionMod.rules.forEach((rule) => {
                        var _a, _b;
                        const downloadId = getReadyDownloadId(downloads, rule.reference, (id) => this.hasActiveOrPendingInstallation(sourceModId, id));
                        if (downloadId) {
                            const rulePhase = (_b = (_a = rule.extra) === null || _a === void 0 ? void 0 : _a.phase) !== null && _b !== void 0 ? _b : 0;
                            // Only process downloads for the current allowed phase or earlier
                            if (rulePhase <= phaseState.allowedPhase) {
                                this.handleDownloadFinished(api, downloadId);
                                foundCount++;
                            }
                        }
                    });
                    (0, log_1.log)('debug', 'Finished scanning for unqueued downloads', { sourceModId, foundCount });
                }
                this.maybeAdvancePhase(sourceModId, api);
            }
            (0, log_1.log)('info', 'done installing dependencies');
        })
            .catch(CustomErrors_1.ProcessCanceled, err => {
            // This indicates an error in the dependency rules so it's
            // adequate to show an error but not as a bug in Vortex
            // Clean up phase state and dependency tracking when process is canceled
            delete this.mDependencyInstalls[sourceModId];
            this.cleanupPendingInstalls(sourceModId, true);
            api.showErrorNotification('Failed to install dependencies', err.message, { allowReport: false });
            return bluebird_1.default.resolve([]);
        })
            .catch(CustomErrors_1.UserCanceled, () => {
            (0, log_1.log)('info', 'canceled out of dependency install');
            // Cancel all remaining operations when user cancels
            abort.abort();
            // Clean up phase state and dependency tracking when canceled
            delete this.mDependencyInstalls[sourceModId];
            this.cleanupPendingInstalls(sourceModId, true);
            api.sendNotification({
                id: 'dependency-installation-canceled',
                type: 'info',
                message: 'Installation of dependencies canceled',
            });
            return bluebird_1.default.resolve([]);
        })
            .catch(err => {
            api.showErrorNotification('Failed to install dependencies', err);
            return bluebird_1.default.resolve([]);
        })
            .filter(dep => dep !== undefined);
        return bluebird_1.default.resolve(res);
    }
    doInstallDependencies(api, gameId, sourceModId, dependencies, recommended, silent) {
        const state = api.getState();
        let downloads = state.persistent.downloads.files;
        const sourceMod = state.persistent.mods[gameId][sourceModId];
        const stagingPath = (0, selectors_1.installPathForGame)(state, gameId);
        if ((sourceMod === null || sourceMod === void 0 ? void 0 : sourceMod.installationPath) === undefined) {
            return bluebird_1.default.resolve([]);
        }
        let queuedDownloads = [];
        const clearQueued = () => {
            const downloadsNow = api.getState().persistent.downloads.files;
            // cancel in reverse order so that canceling a running download doesn't
            // trigger a previously pending download to start just to then be canceled too.
            // Obviously this is probably not a robust way of achieving that but what is?
            queuedDownloads.reverse().forEach(ref => {
                const dlId = (0, dependencies_1.findDownloadByRef)(ref, downloadsNow);
                (0, log_1.log)('info', 'cancel dependency dl', { name: (0, modName_1.renderModReference)(ref), dlId });
                if (dlId !== undefined) {
                    api.events.emit('pause-download', dlId);
                }
                else {
                    api.events.emit('intercept-download', ref.tag);
                }
            });
            queuedDownloads = [];
            this.cleanupPendingInstalls(sourceModId, true);
        };
        const queueDownload = (dep) => {
            return this.mDependencyDownloadsLimit.do(() => {
                var _a;
                if (dep.reference.tag !== undefined) {
                    queuedDownloads.push(dep.reference);
                }
                return abort.signal.aborted
                    ? bluebird_1.default.reject(new CustomErrors_1.UserCanceled(false))
                    : this.downloadDependencyAsync(dep.reference, api, dep.lookupResults[0].value, () => abort.signal.aborted, (_a = dep.extra) === null || _a === void 0 ? void 0 : _a.fileName)
                        .then(dlId => {
                        const idx = queuedDownloads.indexOf(dep.reference);
                        queuedDownloads.splice(idx, 1);
                        return dlId;
                    })
                        .catch(err => {
                        var _a, _b, _c, _d, _e;
                        const idx = queuedDownloads.indexOf(dep.reference);
                        queuedDownloads.splice(idx, 1);
                        // Check if this is a network error that might have caused the download to be paused
                        const isNetworkError = ((_a = err.message) === null || _a === void 0 ? void 0 : _a.includes('socket hang up'))
                            || ((_b = err.message) === null || _b === void 0 ? void 0 : _b.includes('ECONNRESET'))
                            || ((_c = err.message) === null || _c === void 0 ? void 0 : _c.includes('ETIMEDOUT'))
                            || err.code === 'ECONNRESET'
                            || err.code === 'ETIMEDOUT';
                        // Check if this is a "File already downloaded" error (for cases where we get a generic error message)
                        const isAlreadyDownloaded = err instanceof DownloadManager_1.AlreadyDownloaded
                            || ((_d = err.message) === null || _d === void 0 ? void 0 : _d.includes('File already downloaded'))
                            || ((_e = err.message) === null || _e === void 0 ? void 0 : _e.includes('already downloaded'));
                        if (isAlreadyDownloaded) {
                            if (err.downloadId !== undefined) {
                                (0, log_1.log)('info', 'File already downloaded, using existing download ID', { downloadId: err.downloadId });
                                return bluebird_1.default.resolve(err.downloadId);
                            }
                            // If file is already downloaded, check if we can find the download
                            // Try to find the download by filename
                            const currentDownloads = api.getState().persistent.downloads.files;
                            const downloadId = Object.keys(currentDownloads).find(dlId => {
                                var _a, _b;
                                return currentDownloads[dlId].localPath === err.fileName ||
                                    ((_a = currentDownloads[dlId].modInfo) === null || _a === void 0 ? void 0 : _a.referenceTag) === ((_b = dep.reference) === null || _b === void 0 ? void 0 : _b.tag);
                            });
                            if (downloadId) {
                                (0, log_1.log)('info', 'Download already completed, using existing download', { downloadId });
                                return bluebird_1.default.resolve(downloadId);
                            }
                            else {
                                // The download file exists but we can't find its record - refresh downloads and try again
                                return new bluebird_1.default((resolve) => {
                                    api.events.emit('refresh-downloads', gameId, () => {
                                        const currentDownloads = api.getState().persistent.downloads.files;
                                        const downloadId = Object.keys(currentDownloads).find(dlId => currentDownloads[dlId].localPath === err.fileName);
                                        return downloadId ? resolve(downloadId) : resolve(null);
                                    });
                                });
                            }
                        }
                        if (isNetworkError) {
                            // For network errors, check if the download ended up in paused state
                            // and if so, try to resume it through the concurrent queue
                            setTimeout(() => {
                                const currentDownloads = api.getState().persistent.downloads.files;
                                const downloadId = Object.keys(currentDownloads).find(dlId => { var _a, _b; return ((_a = currentDownloads[dlId].modInfo) === null || _a === void 0 ? void 0 : _a.referenceTag) === ((_b = dep.reference) === null || _b === void 0 ? void 0 : _b.tag); });
                                if (downloadId && currentDownloads[downloadId].state === 'paused') {
                                    (0, log_1.log)('info', 'Network error resulted in paused download, will attempt resume', {
                                        downloadId,
                                        error: err.message
                                    });
                                    // The download will be caught by the paused download check in doDownload
                                    return;
                                }
                            }, 1000);
                        }
                        return bluebird_1.default.reject(err);
                    });
            });
        };
        const resumeDownload = (dep) => {
            // This function handles resuming downloads that were paused due to network issues or user action
            return this.mDependencyDownloadsLimit.do(() => abort.signal.aborted
                ? bluebird_1.default.reject(new CustomErrors_1.UserCanceled(false))
                : new bluebird_1.default((resolve, reject) => {
                    var _a, _b;
                    // First check current download state to avoid unnecessary resume attempts
                    const currentDownloads = api.getState().persistent.downloads.files;
                    let resolvedId = dep.download;
                    let currentDownload = currentDownloads[resolvedId];
                    if (!currentDownload) {
                        // Try to resolve the download by referenceTag if possible
                        const tag = (_a = dep.reference) === null || _a === void 0 ? void 0 : _a.tag;
                        if ((0, util_1.truthy)(tag)) {
                            const foundId = Object.keys(currentDownloads)
                                .find(dlId => { var _a, _b; return ((_b = (_a = currentDownloads[dlId]) === null || _a === void 0 ? void 0 : _a.modInfo) === null || _b === void 0 ? void 0 : _b.referenceTag) === tag; });
                            if (foundId) {
                                (0, log_1.log)('info', 'Resolved missing download id from referenceTag', { from: dep.download, to: foundId, tag });
                                resolvedId = foundId;
                                currentDownload = currentDownloads[resolvedId];
                            }
                        }
                    }
                    if (!currentDownload) {
                        const readableRef = (0, modName_1.renderModReference)(dep.reference);
                        (0, log_1.log)('warn', 'Download not found when trying to resume', { intendedId: dep.download, ref: readableRef });
                        return reject(new CustomErrors_1.NotFound(`download for ${readableRef}`));
                    }
                    if (currentDownload.state === 'finished') {
                        (0, log_1.log)('info', 'Download already finished, no need to resume', { downloadId: resolvedId });
                        return resolve(resolvedId);
                    }
                    if (currentDownload.state !== 'paused') {
                        (0, log_1.log)('info', 'Download not in paused state', { downloadId: resolvedId, state: currentDownload.state });
                        return resolve(resolvedId);
                    }
                    (0, log_1.log)('info', 'Resuming paused download', { downloadId: resolvedId, tag: (_b = dep.reference) === null || _b === void 0 ? void 0 : _b.tag });
                    api.events.emit('resume-download', resolvedId, (err) => {
                        var _a, _b;
                        if (err !== null) {
                            // Handle "File already downloaded" error gracefully
                            if (((_a = err.message) === null || _a === void 0 ? void 0 : _a.includes('File already downloaded')) || ((_b = err.message) === null || _b === void 0 ? void 0 : _b.includes('already downloaded'))) {
                                (0, log_1.log)('info', 'Download already completed during resume attempt', { downloadId: resolvedId });
                                return resolve(resolvedId);
                            }
                            reject(err);
                        }
                        else {
                            resolve(resolvedId);
                        }
                    }, { allowInstall: false });
                }));
        };
        const installDownload = (dep, downloadId) => {
            return new bluebird_1.default((resolve, reject) => {
                return this.mDependencyInstallsLimit.do(() => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b, _c;
                    return abort.signal.aborted
                        ? reject(new CustomErrors_1.UserCanceled(false))
                        : this.withInstructions(api, (0, modName_1.default)(sourceMod), (0, modName_1.renderModReference)(dep.reference), (_b = (_a = dep.reference) === null || _a === void 0 ? void 0 : _a.tag) !== null && _b !== void 0 ? _b : downloadId, (_c = dep.extra) === null || _c === void 0 ? void 0 : _c['instructions'], recommended, () => this.installModAsync(dep.reference, api, downloadId, { choices: dep.installerChoices, patches: dep.patches }, dep.fileList, gameId, silent, sourceModId)).then(res => resolve(res))
                            .catch(err => {
                            if (err instanceof CustomErrors_1.UserCanceled) {
                                err.skipped = true;
                            }
                            return reject(err);
                        });
                }));
            });
        };
        const doDownload = (dep) => {
            var _a, _b, _c, _d, _e, _f;
            let dlPromise = bluebird_1.default.resolve(dep.download);
            // Alternate between ProcessCanceled and NotFound for failed download URL
            // if (Math.random() < 0.5) {
            //   return Bluebird.reject(new ProcessCanceled('Failed to determine download url'));
            // } else {
            //   return Bluebird.reject(new NotFound('Failed to determine download url'));
            // }
            if ((dep.download === undefined) || (downloads[dep.download] === undefined)) {
                if (((_a = dep.extra) === null || _a === void 0 ? void 0 : _a.localPath) !== undefined) {
                    // the archive is shipped with the mod that has the dependency
                    const downloadPath = (0, selectors_1.downloadPathForGame)(state, gameId);
                    const fileName = path.basename(dep.extra.localPath);
                    let targetPath = path.join(downloadPath, fileName);
                    // backwards compatibility: during alpha testing the bundles were 7zipped inside
                    // the collection
                    if (path.extname(fileName) !== '.7z') {
                        targetPath += '.7z';
                    }
                    dlPromise = fs.statAsync(targetPath)
                        .then(() => Object.keys(downloads)
                        .find(dlId => downloads[dlId].localPath === fileName))
                        .catch(err => new bluebird_1.default((resolve, reject) => {
                        api.events.emit('import-downloads', [path.join(stagingPath, sourceMod.installationPath, dep.extra.localPath)], (dlIds) => {
                            if (dlIds.length > 0) {
                                api.store.dispatch((0, actions_1.setDownloadModInfo)(dlIds[0], 'referenceTag', dep.reference.tag));
                                resolve(dlIds[0]);
                            }
                            else {
                                resolve();
                            }
                        }, true);
                    }));
                }
                else {
                    // Always allow downloads to be queued - installations will be deferred if needed
                    dlPromise = ((_d = (_c = (_b = dep.lookupResults[0]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.sourceURI) !== null && _d !== void 0 ? _d : '') === ''
                        ? bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Failed to determine download url'))
                        : queueDownload(dep);
                }
            }
            else if (dep.download === null) {
                dlPromise = bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled('Failed to determine download url'));
            }
            else if (((_e = downloads[dep.download]) === null || _e === void 0 ? void 0 : _e.state) === 'paused') {
                // Get fresh state to ensure accurate paused detection
                const freshDownloads = api.getState().persistent.downloads.files;
                if (((_f = freshDownloads[dep.download]) === null || _f === void 0 ? void 0 : _f.state) === 'paused') {
                    dlPromise = resumeDownload(dep);
                }
                else {
                    dlPromise = bluebird_1.default.resolve(dep.download);
                }
            }
            return dlPromise
                .catch(CustomErrors_1.UserCanceled, err => {
                if (err.skipped) {
                    this.handleDownloadSkipped(api, sourceModId, dep);
                }
                return bluebird_1.default.reject(err);
            })
                .catch(DownloadManager_1.AlreadyDownloaded, err => {
                if (err.downloadId !== undefined) {
                    return bluebird_1.default.resolve(err.downloadId);
                }
                else {
                    const downloadId = Object.keys(downloads)
                        .find(dlId => downloads[dlId].localPath === err.fileName);
                    if (downloadId !== undefined) {
                        return bluebird_1.default.resolve(downloadId);
                    }
                }
                return bluebird_1.default.reject(new CustomErrors_1.NotFound(`download for ${(0, modName_1.renderModReference)(dep.reference)}`));
            })
                .then((downloadId) => {
                var _a;
                // Get fresh state before checking if download is paused
                const freshDownloads = api.getState().persistent.downloads.files;
                if ((downloadId !== undefined) && (((_a = freshDownloads[downloadId]) === null || _a === void 0 ? void 0 : _a.state) === 'paused')) {
                    return resumeDownload(dep);
                }
                else {
                    return bluebird_1.default.resolve(downloadId);
                }
            })
                .then((downloadId) => {
                var _a, _b, _c;
                downloads = api.getState().persistent.downloads.files;
                if ((downloadId === undefined) || (downloads[downloadId] === undefined)) {
                    return bluebird_1.default.reject(new CustomErrors_1.NotFound(`download for ${(0, modName_1.renderModReference)(dep.reference)}`));
                }
                if (downloads[downloadId].state !== 'finished') {
                    // download not actually finished, may be paused
                    return bluebird_1.default.reject(new CustomErrors_1.UserCanceled(true));
                }
                if ((dep.reference.tag !== undefined)
                    && (((_a = downloads[downloadId].modInfo) === null || _a === void 0 ? void 0 : _a.referenceTag) !== undefined)
                    && (((_b = downloads[downloadId].modInfo) === null || _b === void 0 ? void 0 : _b.referenceTag) !== dep.reference.tag)) {
                    // we can't change the tag on the download because that might break
                    // dependencies on the other mod
                    // instead we update the rule in the collection. This has to happen immediately,
                    // otherwise the installation might have weird issues around the mod
                    // being installed having a different tag than the rule
                    dep.reference = (_c = this.updateModRule(api, gameId, sourceModId, dep, Object.assign(Object.assign({}, dep.reference), { fileList: dep.fileList, patches: dep.patches, installerChoices: dep.installerChoices, tag: downloads[downloadId].modInfo.referenceTag }), recommended)) === null || _c === void 0 ? void 0 : _c.reference;
                    dep.mod = (0, dependencies_1.findModByRef)(dep.reference, api.getState().persistent.mods[gameId]);
                }
                else {
                    (0, log_1.log)('info', 'downloaded as dependency', { dependency: dep.reference.logicalFileName, downloadId });
                }
                return (dep.mod == null)
                    ? bluebird_1.default.resolve()
                        .then(() => {
                        return bluebird_1.default.resolve({ updatedDep: dep, downloadId });
                    })
                        .catch(err => {
                        if (dep['reresolveDownloadHint'] === undefined) {
                            return bluebird_1.default.reject(err);
                        }
                        const newState = api.getState();
                        const download = newState.persistent.downloads.files[downloadId];
                        let removeProm = bluebird_1.default.resolve();
                        if (download !== undefined) {
                            // Convert download game ID from Nexus domain ID to internal ID for path resolution
                            const games = (0, selectors_1.knownGames)(newState);
                            const convertedGameId = (0, convertGameId_1.convertGameIdReverse)(games, download.game[0]);
                            const pathGameId = convertedGameId || download.game[0];
                            const fullPath = path.join((0, selectors_1.downloadPathForGame)(newState, pathGameId), download.localPath);
                            removeProm = fs.removeAsync(fullPath);
                        }
                        return removeProm
                            .then(() => dep['reresolveDownloadHint']())
                            .then(() => doDownload(dep));
                    })
                    : bluebird_1.default.resolve({ updatedDep: dep, downloadId });
            });
        };
        const phases = {};
        dependencies.forEach(dep => { var _a; return (0, util_1.setdefault)(phases, (_a = dep.phase) !== null && _a !== void 0 ? _a : 0, []).push(dep); });
        // Initialize phase state immediately after determining what phases we have
        if (dependencies.length > 0) {
            this.ensurePhaseState(sourceModId);
            const phaseState = this.mInstallPhaseState.get(sourceModId);
            const phaseNumbers = Object.keys(phases).map(p => parseInt(p, 10)).sort((a, b) => a - b);
            const lowestPhase = phaseNumbers[0];
            // Check collection session to determine actual current phase
            const activeCollectionSession = (0, selectors_2.getCollectionSessionById)(api.getState(), sourceModId);
            if (activeCollectionSession) {
                // Determine the highest completed phase from the collection session
                const mods = activeCollectionSession.mods || {};
                const allMods = Object.values(mods);
                // Find all phases that exist in the collection
                const allPhases = new Set();
                allMods.forEach((mod) => {
                    var _a;
                    allPhases.add((_a = mod.phase) !== null && _a !== void 0 ? _a : 0);
                });
                // Find the highest phase where all required mods are complete
                let highestCompletedPhase = -1;
                Array.from(allPhases).sort((a, b) => a - b).forEach(phase => {
                    const phaseMods = getModsByPhase(allMods, phase);
                    const completion = checkPhaseCompletion(phaseMods);
                    if (completion.isComplete && completion.total > 0) {
                        highestCompletedPhase = phase;
                    }
                });
                // Set allowed phase to the next phase after the highest completed one
                // or to the lowest phase in our current dependencies if higher
                const nextPhaseAfterCompleted = highestCompletedPhase + 1;
                const effectiveStartPhase = Math.max(lowestPhase, nextPhaseAfterCompleted);
                if (phaseState.allowedPhase === undefined || phaseState.allowedPhase < effectiveStartPhase) {
                    phaseState.allowedPhase = effectiveStartPhase;
                    // When setting allowed phase, mark all previous phases as downloads finished
                    for (let p = 0; p < effectiveStartPhase; p++) {
                        phaseState.downloadsFinished.add(p);
                    }
                }
            }
            else if (phaseState.allowedPhase === undefined) {
                // No active session, use the lowest phase from dependencies
                phaseState.allowedPhase = lowestPhase;
                // When setting initial allowed phase, mark all previous phases as downloads finished
                for (let p = 0; p < lowestPhase; p++) {
                    phaseState.downloadsFinished.add(p);
                }
                (0, log_1.log)('info', 'Set initial allowed phase', { sourceModId, allowedPhase: lowestPhase });
            }
            // Mark all phases as having downloads (they will be processed)
            phaseNumbers.forEach(phase => {
                phaseState.downloadsFinished.add(phase);
            });
        }
        const abort = new AbortController();
        abort.signal.onabort = () => clearQueued();
        const phaseList = Object.values(phases);
        const res = bluebird_1.default.reduce(phaseList, (prev, depList, idx) => {
            if (depList.length === 0) {
                return prev;
            }
            return this.doInstallDependenciesPhase(api, depList, gameId, sourceModId, recommended, doDownload, abort, silent)
                .then((updated) => {
                var _a, _b;
                // Mark this phase's downloads as finished to allow its installers to run,
                // but do not wait for installations to complete before proceeding to next phase.
                const phaseNum = (_b = (_a = depList[0]) === null || _a === void 0 ? void 0 : _a.phase) !== null && _b !== void 0 ? _b : 0;
                this.markPhaseDownloadsFinished(sourceModId, phaseNum, api);
                return updated;
            })
                .then((updated) => {
                var _a, _b;
                // Schedule a deploy for this phase once its installers settle; don't block download progression
                const phaseNum = (_b = (_a = depList[0]) === null || _a === void 0 ? void 0 : _a.phase) !== null && _b !== void 0 ? _b : 0;
                const phaseState = this.mInstallPhaseState.get(sourceModId);
                // // Only schedule deploy polling for the current allowed phase to maintain sequential processing
                // if (phaseState && (phaseState.allowedPhase !== undefined) && (phaseNum === phaseState.allowedPhase)) {
                //   this.scheduleDeployOnPhaseSettled(api, sourceModId, phaseNum);
                // }
                return updated;
            })
                .then((updated) => [].concat(prev, updated));
        }, []);
        this.mDependencyInstalls[sourceModId] = () => {
            abort.abort();
        };
        return bluebird_1.default.resolve(res)
            .then((deps) => {
            return this.pollAllPhasesComplete(api, sourceModId).then(() => deps);
        })
            .finally(() => {
            this.mInstallPhaseState.delete(sourceModId);
        });
    }
    updateModRule(api, gameId, sourceModId, dep, reference, recommended) {
        const state = api.store.getState();
        const rules = (0, storeHelper_1.getSafe)(state.persistent.mods, [gameId, sourceModId, 'rules'], []);
        const oldRule = rules.find(iter => (0, testModReference_1.referenceEqual)(iter.reference, dep.reference));
        if (oldRule === undefined) {
            return undefined;
        }
        const updatedRule = Object.assign(Object.assign({}, (oldRule || {})), { type: recommended ? 'recommends' : 'requires', reference });
        api.store.dispatch((0, mods_1.removeModRule)(gameId, sourceModId, oldRule));
        api.store.dispatch((0, mods_1.addModRule)(gameId, sourceModId, updatedRule));
        return updatedRule;
    }
    updateRules(api, gameId, sourceModId, dependencies, recommended) {
        dependencies.forEach(dep => {
            var _a;
            const updatedRef = Object.assign({}, dep.reference);
            updatedRef.idHint = (_a = dep.mod) === null || _a === void 0 ? void 0 : _a.id;
            updatedRef.installerChoices = dep.installerChoices;
            updatedRef.patches = dep.patches;
            updatedRef.fileList = dep.fileList;
            this.updateModRule(api, gameId, sourceModId, dep, updatedRef, recommended);
        });
        return bluebird_1.default.resolve();
    }
    doInstallDependencyList(api, profile, gameId, modId, name, dependencies, silent) {
        var _a, _b, _c, _d;
        if (dependencies.length === 0) {
            return bluebird_1.default.resolve();
        }
        // get updated mod state
        const modState = (profile !== undefined)
            ? ((_b = (_a = api.getState().persistent.profiles[profile.id]) === null || _a === void 0 ? void 0 : _a.modState) !== null && _b !== void 0 ? _b : {})
            : {};
        const mods = (_d = (_c = api.getState().persistent.mods) === null || _c === void 0 ? void 0 : _c[gameId]) !== null && _d !== void 0 ? _d : {};
        const { success, existing, error } = dependencies.reduce((prev, dep) => {
            var _a, _b;
            if (dep['error'] !== undefined) {
                prev.error.push(dep);
            }
            else {
                const { mod, reference } = dep;
                const modReference = Object.assign(Object.assign({}, dep), reference);
                if ((mod === undefined) || !((_b = (_a = modState[mod.id]) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : false) || (!!mods[mod.id] && (0, testModReference_1.default)(mods[mod.id], modReference) !== true)) {
                    prev.success.push(dep);
                }
                else {
                    prev.existing.push(dep);
                }
            }
            return prev;
        }, { success: [], existing: [], error: [] });
        (0, log_1.log)('debug', 'determined unfulfilled dependencies', { count: success.length, errors: error.length });
        if (silent && (error.length === 0)) {
            return this.doInstallDependencies(api, gameId, modId, success, false, silent)
                .then(updated => this.updateRules(api, gameId, modId, [].concat(existing, updated), false));
        }
        if (success.length === 0) {
            return bluebird_1.default.resolve();
        }
        const context = (0, BatchContext_1.getBatchContext)('install-dependencies', '', true);
        return this.showMemoDialog(api, context, name, success, error)
            .then(result => {
            if (result.action === 'Install') {
                return this.doInstallDependencies(api, gameId, modId, success, false, silent)
                    .then(updated => this.updateRules(api, gameId, modId, [].concat(existing, updated), false));
            }
            else {
                return bluebird_1.default.resolve();
            }
        });
    }
    showMemoDialog(api, context, name, success, error) {
        const remember = context.get('remember', null);
        if ((0, util_1.truthy)(remember)) {
            return bluebird_1.default.resolve({
                action: remember ? 'Install' : 'Don\'t Install',
                input: {},
            });
        }
        else {
            const downloads = api.getState().persistent.downloads.files;
            const t = api.translate;
            const requiredInstalls = success.filter(dep => dep.mod === undefined);
            const requiredDownloads = requiredInstalls.filter(dep => { var _a; return (dep.download === undefined) || [undefined, 'paused'].includes((_a = downloads[dep.download]) === null || _a === void 0 ? void 0 : _a.state); });
            const requireEnableOnly = success.filter(dep => dep.mod !== undefined);
            let bbcode = '';
            let list = '';
            if (requiredDownloads.length > 0) {
                list += `[h4]${t('Require Download & Install')}[/h4]<br/>[list]`
                    + requiredDownloads.map(mod => '[*]' + (0, modName_1.renderModReference)(mod.reference)).join('\n')
                    + '[/list]<br/>';
            }
            const requireInstallOnly = requiredInstalls
                .filter(mod => !requiredDownloads.includes(mod));
            if (requireInstallOnly.length > 0) {
                list += `[h4]${t('Require Install')}[/h4]<br/>[list]`
                    + requireInstallOnly
                        .map(mod => '[*]' + (0, modName_1.renderModReference)(mod.reference)).join('\n')
                    + '[/list]<br/>';
            }
            if (requireEnableOnly.length > 0) {
                list += `[h4]${t('Will be enabled')}[/h4]<br/>[list]`
                    + requireEnableOnly.map(mod => '[*]' + (0, modName_1.default)(mod.mod)).join('\n')
                    + '[/list]';
            }
            if (success.length > 0) {
                bbcode += t('{{modName}} requires the following dependencies:', {
                    replace: { modName: name },
                });
            }
            if (error.length > 0) {
                bbcode += '[color=red]'
                    + t('{{modName}} has unsolved dependencies that could not be found automatically. ', { replace: { modName: name } })
                    + t('Please install them manually') + ':<br/>'
                    + '{{errors}}'
                    + '[/color]';
            }
            if (list.length > 0) {
                bbcode += '<br/>' + list;
            }
            const actions = success.length > 0
                ? [
                    { label: 'Don\'t install' },
                    { label: 'Install' },
                ]
                : [{ label: 'Close' }];
            return api.store.dispatch((0, notifications_1.showDialog)('question', t('Install Dependencies'), {
                bbcode,
                parameters: {
                    modName: name,
                    count: success.length,
                    instCount: requiredInstalls.length,
                    dlCount: requiredDownloads.length,
                    errors: error.map(err => err.error).join('<br/>'),
                },
                checkboxes: [
                    { id: 'remember', text: 'Do this for all dependencies', value: false },
                ],
                options: {
                    translated: true,
                },
            }, actions))
                .then(result => {
                if (result.input['remember']) {
                    context.set('remember', result.action === 'Install');
                }
                return result;
            });
        }
    }
    installDependenciesImpl(api, profile, gameId, modId, name, rules, installPath, silent) {
        const filteredRules = filterDependencyRules(rules);
        if (filteredRules.length === 0) {
            api.events.emit('did-install-dependencies', gameId, modId, false);
            return bluebird_1.default.resolve();
        }
        const notificationId = `${installPath}_activity`;
        if (!checkAndEmitDependencyInstallStart(api, gameId, modId, false)) {
            return bluebird_1.default.resolve();
        }
        let lastProgress = -1;
        const progress = silent ? nop : (perc) => {
            // rounded to steps of 5%
            const newProgress = Math.round(perc * 20) * 5;
            if (newProgress !== lastProgress) {
                lastProgress = newProgress;
                api.sendNotification({
                    id: notificationId,
                    type: 'activity',
                    title: 'Checking dependencies',
                    message: 'Resolving dependencies',
                    progress: newProgress,
                });
            }
        };
        progress(0);
        api.store.dispatch((0, actions_1.startActivity)('dependencies', 'gathering'));
        (0, log_1.log)('debug', 'installing dependencies', { modId, name });
        return (0, dependencies_1.default)(filteredRules, api, false, progress)
            .then((dependencies) => {
            api.store.dispatch((0, actions_1.stopActivity)('dependencies', 'gathering'));
            api.dismissNotification(notificationId);
            return this.doInstallDependencyList(api, profile, gameId, modId, name, dependencies, silent);
        })
            .catch((err) => {
            api.dismissNotification(notificationId);
            api.store.dispatch((0, actions_1.stopActivity)('dependencies', 'gathering'));
            if (!(err instanceof CustomErrors_1.UserCanceled) && !(err instanceof CustomErrors_1.NotFound)) {
                api.showErrorNotification('Failed to check dependencies', err);
            }
            else if (err instanceof CustomErrors_1.NotFound) {
                api.showErrorNotification('Failed to check dependencies', 'A mod dependency could not be found. This is usually caused by '
                    + 'a temporary networking issue. Please try again later.', { allowReport: false });
            }
        })
            .finally(() => {
            (0, log_1.log)('debug', 'done installing dependencies', { gameId, modId });
            api.events.emit('did-install-dependencies', gameId, modId, false);
        });
    }
    installRecommendationsQueryMain(api, modName, success, error, remember) {
        if (remember === true) {
            return bluebird_1.default.resolve({ action: 'Install All', input: {} });
        }
        else if (remember === false) {
            return bluebird_1.default.resolve({ action: 'Skip', input: {} });
        }
        let bbcode = '';
        if (success.length > 0) {
            bbcode += '{{modName}} recommends the installation of additional mods. '
                + 'Please use the checkboxes below to select which to install.<br/><br/>[list]';
            for (const item of success) {
                bbcode += `[*] ${(0, modName_1.renderModReference)(item.reference, undefined)}`;
            }
            bbcode += '[/list]';
        }
        if (error.length > 0) {
            bbcode += '[color=red]'
                + '{{modName}} has unsolved dependencies that could not be found automatically. '
                + 'Please install them manually.'
                + '[/color][list]';
            for (const item of error) {
                bbcode += `[*] ${item.error}`;
            }
            bbcode += '[/list]';
        }
        return api.store.dispatch((0, notifications_1.showDialog)('question', 'Install Recommendations', {
            bbcode,
            checkboxes: [
                { id: 'remember', text: 'Do this for all recommendations', value: false },
            ],
            parameters: {
                modName,
            },
        }, [
            { label: 'Skip' },
            { label: 'Manually Select' },
            { label: 'Install All' },
        ]));
    }
    installRecommendationsQuerySelect(api, modName, success) {
        let bbcode = '';
        if (success.length > 0) {
            bbcode += '{{modName}} recommends the installation of additional mods. '
                + 'Please use the checkboxes below to select which to install.<br/><br/>';
        }
        const checkboxes = success.map((dep, idx) => {
            let depName;
            if (dep.lookupResults.length > 0) {
                depName = dep.lookupResults[0].value.fileName;
            }
            if (depName === undefined) {
                depName = (0, modName_1.renderModReference)(dep.reference, undefined);
            }
            let desc = depName;
            if (dep.download === undefined) {
                desc += ' (' + api.translate('Not downloaded yet') + ')';
            }
            return {
                id: idx.toString(),
                text: desc,
                value: true,
            };
        });
        return api.store.dispatch((0, notifications_1.showDialog)('question', 'Install Recommendations', {
            bbcode,
            checkboxes,
            parameters: {
                modName,
            },
        }, [
            { label: 'Don\'t install' },
            { label: 'Continue' },
        ]));
    }
    installRecommendationsImpl(api, profile, gameId, modId, name, rules, installPath, silent) {
        const filteredRules = filterDependencyRules(rules);
        if (filteredRules.length === 0) {
            return bluebird_1.default.resolve();
        }
        const notificationId = `${installPath}_activity`;
        if (!checkAndEmitDependencyInstallStart(api, gameId, modId, true)) {
            return bluebird_1.default.resolve();
        }
        api.sendNotification({
            id: notificationId,
            type: 'activity',
            message: 'Checking dependencies',
        });
        api.store.dispatch((0, actions_1.startActivity)('dependencies', 'gathering'));
        return (0, dependencies_1.default)(filteredRules, api, true, undefined)
            .then((dependencies) => {
            api.store.dispatch((0, actions_1.stopActivity)('dependencies', 'gathering'));
            if (dependencies.length === 0) {
                return bluebird_1.default.resolve();
            }
            const { success, existing, error } = dependencies.reduce((prev, dep) => {
                if (dep['error'] !== undefined) {
                    prev.error.push(dep);
                }
                else {
                    const { mod } = dep;
                    if ((mod === undefined)
                        || !(0, storeHelper_1.getSafe)(profile === null || profile === void 0 ? void 0 : profile.modState, [mod.id, 'enabled'], false)) {
                        prev.success.push(dep);
                    }
                    else {
                        prev.existing.push(dep);
                    }
                }
                return prev;
            }, { success: [], existing: [], error: [] });
            // all recommendations already installed
            if ((success.length === 0) && (error.length === 0)) {
                return bluebird_1.default.resolve();
            }
            const context = (0, BatchContext_1.getBatchContext)('install-recommendations', '', true);
            context.set('num-instructions', success.filter(succ => { var _a; return ((_a = succ.extra) === null || _a === void 0 ? void 0 : _a['instructions']) !== undefined; }).length);
            const remember = context.get('remember', null);
            let queryProm = bluebird_1.default.resolve(success);
            if (!silent || (error.length > 0)) {
                queryProm = this.installRecommendationsQueryMain(api, name, success, error, remember)
                    .then(result => {
                    var _a, _b;
                    if (result.action === 'Skip') {
                        if ((_a = result.input) === null || _a === void 0 ? void 0 : _a.remember) {
                            context.set('remember', false);
                        }
                        return [];
                    }
                    else if (result.action === 'Install All') {
                        if ((_b = result.input) === null || _b === void 0 ? void 0 : _b.remember) {
                            context.set('remember', true);
                        }
                        return success;
                    }
                    else {
                        return this.installRecommendationsQuerySelect(api, name, success)
                            .then(selectResult => {
                            if (selectResult.action === 'Continue') {
                                return Object.keys(selectResult.input)
                                    .filter(key => selectResult.input[key])
                                    .map(key => success[parseInt(key, 10)]);
                            }
                            else {
                                return [];
                            }
                        });
                    }
                });
            }
            return queryProm.then(result => {
                return this.doInstallDependencies(api, gameId, modId, result, true, silent)
                    .then(updated => this.updateRules(api, gameId, modId, [].concat(existing, updated), true));
            });
        })
            .catch((err) => {
            api.store.dispatch((0, actions_1.stopActivity)('dependencies', 'gathering'));
            if (!(err instanceof CustomErrors_1.UserCanceled)) {
                api.showErrorNotification('Failed to check dependencies', err);
            }
        })
            .finally(() => {
            api.dismissNotification(notificationId);
            api.events.emit('did-install-dependencies', gameId, modId, true);
        });
    }
    withInstructions(api, sourceName, title, id, instructions, recommendations, cb) {
        var _a, _b;
        if (!(0, util_1.truthy)(instructions)) {
            return cb();
        }
        if (recommendations) {
            return bluebird_1.default.resolve((() => __awaiter(this, void 0, void 0, function* () {
                const context = (0, BatchContext_1.getBatchContext)('install-recommendations', '');
                let action = context.get('remember-instructions');
                const remaining = context.get('num-instructions') - 1;
                if ((action === null) || (action === undefined)) {
                    let checkboxes;
                    if (remaining > 0) {
                        checkboxes = [
                            {
                                id: 'remember',
                                value: false,
                                text: 'Do this for all remaining instructions ({{remaining}} more)'
                            },
                        ];
                    }
                    const result = yield api.showDialog('info', title, {
                        md: instructions,
                        checkboxes,
                        parameters: {
                            remaining,
                        },
                    }, [
                        { label: 'Skip' },
                        { label: 'Install' },
                    ]);
                    if (result.input['remember']) {
                        context.set('remember-instructions', result.action);
                    }
                    action = result.action;
                }
                context.set('num-instructions', remaining);
                if (action === 'Install') {
                    return cb();
                }
                else {
                    return bluebird_1.default.reject(new CustomErrors_1.UserCanceled(true));
                }
            }))());
        }
        else {
            (_b = (_a = api.ext).showOverlay) === null || _b === void 0 ? void 0 : _b.call(_a, `install-instructions-${id}`, title, instructions, undefined, {
                id,
            });
            return cb();
        }
    }
    installModAsync(requirement, api, downloadId, modInfo, fileList, forceGameId, silent, sourceModId) {
        return new bluebird_1.default((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const state = api.store.getState();
            const download = state.persistent.downloads.files[downloadId];
            if (download === undefined) {
                return reject(new CustomErrors_1.NotFound((0, modName_1.renderModReference)(requirement)));
            }
            const downloadGame = (0, getDownloadGames_1.default)(download);
            // Handle race condition: downloads may still be in Nexus domain ID folder while
            // installation expects internal ID folder. Try converted path first, fall back to original.
            const games = (0, selectors_1.knownGames)(state);
            const convertedGameId = (0, convertGameId_1.convertGameIdReverse)(games, downloadGame[0]);
            const pathGameId = convertedGameId || downloadGame[0];
            let fullPath = path.join((0, selectors_1.downloadPathForGame)(state, pathGameId), download.localPath);
            // If converted path doesn't exist and we have a different original ID, try original path
            if (convertedGameId && convertedGameId !== downloadGame[0]) {
                try {
                    // Check if file exists at converted path
                    yield fs.statAsync(fullPath).catch(() => __awaiter(this, void 0, void 0, function* () {
                        // File doesn't exist at converted path, try original Nexus domain ID path
                        const originalPath = path.join((0, selectors_1.downloadPathForGame)(state, downloadGame[0]), download.localPath);
                        try {
                            yield fs.statAsync(originalPath);
                            fullPath = originalPath; // Use original path if it exists
                        }
                        catch (originalErr) {
                            // Keep converted path if neither exists
                        }
                    }));
                }
                catch (err) {
                    // Continue with converted path if check fails
                }
            }
            this.install(downloadId, fullPath, downloadGame, api, Object.assign(Object.assign({}, modInfo), { download }), false, silent, (error, id) => {
                if (error === null) {
                    return resolve(id);
                }
                else {
                    return reject(error);
                }
            }, forceGameId, fileList, silent, undefined, false, sourceModId, requirement);
        }));
    }
    /**
     * extract an archive
     *
     * @export
     * @param {string} archivePath path to the archive file
     * @param {string} destinationPath path to install to
     */
    extractArchive(api, archivePath, tempPath, destinationPath, copies, gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = Date.now();
            // Strategy:
            //  - dedupe and pre-create parent directories once
            //  - link files in parallel with a bounded concurrency
            //  - if link fails (different fs, permission) fallback to copying
            //  - unlink sources in parallel after successful transfers
            const sorted = copies.slice().sort((a, b) => a.destination.length - b.destination.length);
            const dirs = new Set();
            const jobs = [];
            const missingFiles = new Set();
            for (const copy of sorted) {
                const src = path.join(tempPath, copy.source);
                const dst = path.join(destinationPath, copy.destination);
                dirs.add(path.dirname(dst));
                jobs.push({ src, dst, rel: copy.destination });
            }
            const cpuCount = (os && os.cpus) ? Math.max(1, os.cpus().length) : 1;
            const dirConcurrency = Math.min(64, Math.max(4, cpuCount * 2));
            const ioConcurrency = Math.min(256, Math.max(8, cpuCount * 8));
            try {
                // create parent directories
                yield bluebird_1.default.map(Array.from(dirs), d => fs.ensureDirAsync(d), { concurrency: dirConcurrency });
                // perform hard links in parallel; fallback to copy on failure
                yield bluebird_1.default.map(jobs, (job) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield fs.linkAsync(job.src, job.dst);
                    }
                    catch (err) {
                        if (err.code === 'ENOENT') {
                            // source file does not exist; skip
                            missingFiles.add(job.src);
                            return;
                        }
                        // common reasons: EXDEV (cross-device), EPERM/EACCES -> fallback to copy
                        if (err && (err.code === 'EXDEV' || err.code === 'EPERM' || err.code === 'EACCES' || err.code === 'ENOTSUP')) {
                            // copyAsync wraps efficient platform copy where available
                            yield fs.copyAsync(job.src, job.dst, { noSelfCopy: true });
                        }
                        else if (err && err.code === 'EEXIST') {
                            // destination exists; try overwrite by copying
                            yield fs.copyAsync(job.src, job.dst, { noSelfCopy: true });
                        }
                        else {
                            throw err;
                        }
                    }
                }), { concurrency: ioConcurrency });
                // remove the temporary source files in parallel
                yield bluebird_1.default.map(jobs, job => fs.unlinkAsync(job.src).catch(err => bluebird_1.default.resolve()), { concurrency: ioConcurrency });
                if (missingFiles.size > 0) {
                    api.showErrorNotification(api.translate('Invalid installer'), api.translate('The installer in "{{name}}" tried to install files that were '
                        + 'not part of the archive.\n This can be due to an invalid mod or an invalid game extension installer.\n'
                        + 'Please report this to the mod author and/or the game extension developer.', { replace: { name: path.basename(archivePath) } })
                        + '\n\n' + Array.from(missingFiles).map(name => '- ' + name).join('\n'), { allowReport: false });
                }
                return Promise.resolve();
            }
            catch (err) {
                return Promise.reject(err);
            }
            finally {
                (0, log_1.log)('debug', 'extraction completed', { duration: Date.now() - now, archivePath, instructions: copies.length });
            }
        });
    }
    /**
     * Find any download that matches the given mod reference using all available methods
     */
    findDownloadForMod(reference, downloads) {
        const relevantDownloads = Object.fromEntries(Object.entries(downloads)
            .filter(([dlId, dl]) => dl.state === 'finished' && dl.game.includes(reference.gameId)));
        // Try the primary lookup first
        const downloadId = (0, dependencies_1.findDownloadByRef)(reference, relevantDownloads);
        if (downloadId) {
            return downloadId;
        }
        // Try filename match
        const targetFilename = reference === null || reference === void 0 ? void 0 : reference.logicalFileName;
        if (targetFilename) {
            const altDownloadId = Object.keys(relevantDownloads).find(dlId => {
                const download = relevantDownloads[dlId];
                return download.localPath && download.localPath.endsWith(targetFilename) &&
                    download.state === 'finished';
            });
            if (altDownloadId) {
                return altDownloadId;
            }
        }
        // Try modId/fileId match
        if (reference === null || reference === void 0 ? void 0 : reference.repo) {
            const { modId, fileId } = reference.repo;
            if (modId && fileId) {
                const altDownloadId = Object.keys(relevantDownloads).find(dlId => {
                    var _a, _b, _c, _d, _e, _f;
                    const download = relevantDownloads[dlId];
                    return ((_c = (_b = (_a = download.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.modId) === null || _c === void 0 ? void 0 : _c.toString()) === modId.toString() &&
                        ((_f = (_e = (_d = download.modInfo) === null || _d === void 0 ? void 0 : _d.nexus) === null || _e === void 0 ? void 0 : _e.fileId) === null || _f === void 0 ? void 0 : _f.toString()) === fileId.toString() &&
                        download.state === 'finished';
                });
                if (altDownloadId) {
                    return altDownloadId;
                }
            }
            // Try modId only
            if (modId) {
                const altDownloadId = Object.keys(relevantDownloads).find(dlId => {
                    var _a, _b, _c;
                    const download = relevantDownloads[dlId];
                    return ((_c = (_b = (_a = download.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.modId) === null || _c === void 0 ? void 0 : _c.toString()) === modId.toString() &&
                        download.state === 'finished';
                });
                if (altDownloadId) {
                    return altDownloadId;
                }
            }
        }
        // Try testRefByIdentifiers
        if (reference) {
            const altDownloadId = Object.keys(relevantDownloads).find(dlId => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                const download = relevantDownloads[dlId];
                if (download.state !== 'finished') {
                    return false;
                }
                const nameSet = new Set();
                const fileIdsSet = new Set();
                fileIdsSet.add((_e = (_d = (_c = (_b = (_a = download.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.ids) === null || _c === void 0 ? void 0 : _c.fileId) === null || _d === void 0 ? void 0 : _d.toString) === null || _e === void 0 ? void 0 : _e.call(_d));
                nameSet.add(download.localPath ? path.basename(download.localPath, path.extname(download.localPath)) : undefined);
                const identifiers = {
                    fileNames: Array.from(nameSet).filter(util_1.truthy),
                    fileIds: Array.from(fileIdsSet).filter(util_1.truthy),
                    gameId: ((_h = (_g = (_f = download.modInfo) === null || _f === void 0 ? void 0 : _f.nexus) === null || _g === void 0 ? void 0 : _g.ids) === null || _h === void 0 ? void 0 : _h.gameId) || ((_j = download.modInfo) === null || _j === void 0 ? void 0 : _j.gameId),
                    modId: (_m = (_l = (_k = download.modInfo) === null || _k === void 0 ? void 0 : _k.nexus) === null || _l === void 0 ? void 0 : _l.ids) === null || _m === void 0 ? void 0 : _m.modId,
                    fileId: (_q = (_p = (_o = download.modInfo) === null || _o === void 0 ? void 0 : _o.nexus) === null || _p === void 0 ? void 0 : _p.ids) === null || _q === void 0 ? void 0 : _q.fileId
                };
                if (identifiers.modId && identifiers.fileId && identifiers.gameId) {
                    return (0, testModReference_1.testRefByIdentifiers)(identifiers, reference);
                }
                return false;
            });
            if (altDownloadId) {
                return altDownloadId;
            }
        }
        return null;
    }
    /**
     * Helper method to show aggregated error notification for dependency installation failures
     */
    showDependencyError(api, sourceModId, title, message, dependencyRef, options = {}) {
        const aggregationId = `install-dependencies-${sourceModId}`;
        if (this.mNotificationAggregator.isAggregating(aggregationId)) {
            this.mNotificationAggregator.addNotification(aggregationId, 'error', title, message, dependencyRef, { allowReport: options.allowReport });
        }
        else {
            api.showErrorNotification(title, message, {
                id: `failed-install-dependency-${dependencyRef}`,
                message: dependencyRef,
                allowReport: options.allowReport,
                replace: options.replace,
            });
        }
    }
}
InstallManager.MAX_DEPENDENCY_RETRIES = 3;
exports.default = InstallManager;
