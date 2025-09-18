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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../../actions/notifications");
const session_1 = require("../../actions/session");
const getVortexPath_1 = __importDefault(require("../../util/getVortexPath"));
const log_1 = require("../../util/log");
const message_1 = require("../../util/message");
const storeHelper_1 = require("../../util/storeHelper");
const MixpanelEvents_1 = require("../analytics/mixpanel/MixpanelEvents");
const state_1 = require("../download_management/actions/state");
const modTypeExtensions_1 = require("../gamemode_management/util/modTypeExtensions");
const selectors_1 = require("../nexus_integration/selectors");
const UIDs_1 = require("../nexus_integration/util/UIDs");
const profiles_1 = require("../profile_management/actions/profiles");
const mods_1 = require("./actions/mods");
const modName_1 = __importDefault(require("./util/modName"));
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
class InstallContext {
    constructor(gameMode, api, silent) {
        this.mSilent = false;
        this.mDidReportError = false;
        this.mStartTime = Date.now();
        this.mApi = api;
        const store = api.store;
        const dispatch = store.dispatch;
        this.mAddMod = (mod) => dispatch((0, mods_1.addMod)(gameMode, mod));
        this.mRemoveMod = (modId) => dispatch((0, mods_1.removeMod)(gameMode, modId));
        this.mAddNotification = (notification) => dispatch((0, notifications_1.addNotification)(notification));
        this.mUpdateNotification = (id, progress, message) => dispatch((0, notifications_1.updateNotification)(id, progress, message));
        this.mDismissNotification = (id) => dispatch((0, notifications_1.dismissNotification)(id));
        this.mStartActivity = (activity) => dispatch((0, session_1.startActivity)('mods', 'installing'));
        this.mStopActivity = (activity) => dispatch((0, session_1.stopActivity)('mods', 'installing'));
        this.mShowError = (message, details, allowReport, replace) => {
            this.mDidReportError = true;
            return (0, message_1.showError)(dispatch, message, details, {
                allowReport, replace, attachments: [
                    {
                        id: 'log',
                        type: 'file',
                        data: path.join((0, getVortexPath_1.default)('userData'), 'vortex.log'),
                        description: 'Vortex Log',
                    },
                ]
            });
        };
        this.mLastProgress = 0;
        this.mSetModState = (id, state) => dispatch((0, mods_1.setModState)(gameMode, id, state));
        this.mSetModAttributes = (modId, attributes) => {
            Object.keys(attributes).forEach(attributeId => {
                if (attributes[attributeId] === undefined) {
                    delete attributes[attributeId];
                }
            });
            if (Object.keys(attributes).length > 0) {
                dispatch((0, mods_1.setModAttributes)(gameMode, modId, attributes));
            }
        };
        this.mSetModInstallationPath = (id, installPath) => dispatch((0, mods_1.setModInstallationPath)(gameMode, id, installPath));
        this.mSetModType = (id, modType) => dispatch((0, mods_1.setModType)(gameMode, id, modType));
        this.mEnableMod = (modId) => {
            const state = store.getState();
            const profileId = state.settings.profiles.lastActiveProfile[this.mGameId];
            return (0, profiles_1.setModsEnabled)(api, profileId, [modId], true);
        };
        this.mIsEnabled = (modId) => {
            const state = store.getState();
            const profileId = state.settings.profiles.lastActiveProfile[this.mGameId];
            const profile = state.persistent.profiles[profileId];
            return (0, storeHelper_1.getSafe)(profile, ['modState', modId, 'enabled'], false);
        };
        this.mSetDownloadInstalled = (archiveId, gameId, modId) => {
            dispatch((0, state_1.setDownloadInstalled)(archiveId, gameId, modId));
        };
        this.mIsDownload = (archiveId) => {
            const state = store.getState();
            return (archiveId !== null)
                && ((0, storeHelper_1.getSafe)(state, ['persistent', 'downloads', 'files', archiveId], undefined) !== undefined);
        };
        this.mSilent = silent !== null && silent !== void 0 ? silent : false;
    }
    startIndicator(id) {
        (0, log_1.log)('info', 'start mod install', { id });
        this.mLastProgress = 0;
        // TODO: we're adding even when silent but those "silent"
        // notifications aren't displayed.
        // This is hacky but notifications get used to track progress on some ops
        // to display in other locations
        // if (!this.mSilent) {
        this.mAddNotification({
            id: 'install_' + id,
            title: 'Installing {{ id }}',
            message: 'Preparing',
            replace: { id },
            type: this.mSilent ? 'silent' : 'activity',
        });
        // }
        this.mIndicatorId = id;
        this.mInstallOutcome = undefined;
        this.mStartActivity(`installing_${id}`);
    }
    stopIndicator(mod) {
        if (this.mIndicatorId === undefined) {
            return;
        }
        this.mDismissNotification('install_' + this.mIndicatorId);
        this.mStopActivity(`installing_${this.mIndicatorId}`);
        bluebird_1.default.delay(50)
            .then(() => {
            if (!this.mDidReportError) {
                this.mDidReportError = true;
                const noti = this.outcomeNotification(this.mInstallOutcome, this.mIndicatorId, this.mIsEnabled(this.mAddedId), mod !== undefined ? (0, modName_1.default)(mod) : this.mIndicatorId, mod);
                if (noti !== null) {
                    this.mAddNotification(noti);
                }
            }
        });
    }
    setProgress(phase, percent) {
        var _a;
        if ((percent === undefined)
            || (this.mLastPhase !== phase)
            || (Math.abs(percent - ((_a = this.mLastProgress) !== null && _a !== void 0 ? _a : 0)) >= 2)) {
            this.mLastProgress = percent;
            this.mLastPhase = phase;
            this.mUpdateNotification('install_' + this.mIndicatorId, percent, phase);
        }
    }
    startInstallCB(id, gameId, archiveId) {
        this.mAddMod({
            id,
            type: '',
            archiveId,
            installationPath: id,
            state: 'installing',
            attributes: {
                name: id,
                installTime: new Date(),
            },
        });
        this.mAddedId = id;
        this.mGameId = gameId;
        this.mArchiveId = archiveId;
        // something happens with bundled mods?
        const nexusIds = (0, selectors_1.nexusIdsFromDownloadId)(this.mApi.getState(), archiveId);
        if (nexusIds !== undefined) {
            const { modUID, fileUID } = (0, UIDs_1.makeModAndFileUIDs)(nexusIds.numericGameId, nexusIds.modId, nexusIds.fileId);
            this.mApi.events.emit('analytics-track-mixpanel-event', new MixpanelEvents_1.ModsInstallationStartedEvent(nexusIds.modId, nexusIds.fileId, nexusIds.numericGameId, modUID, fileUID));
        }
    }
    finishInstallCB(outcome, info, reason) {
        (0, log_1.log)('info', 'finish mod install', {
            id: this.mIndicatorId,
            outcome: this.mInstallOutcome,
        });
        if (outcome === 'ignore') {
            // nop
        }
        else if (outcome === 'success') {
            this.mSetModState(this.mAddedId, 'installed');
            this.mSetModAttributes(this.mAddedId, Object.assign({ installTime: new Date(), category: info.category, version: info.version, fileId: info.fileId, newestFileId: info.fileId, changelog: info.changelog, endorsed: undefined, bugMessage: '' }, info));
            if (this.mIsDownload(this.mArchiveId)) {
                this.mSetDownloadInstalled(this.mArchiveId, this.mGameId, this.mAddedId);
            }
        }
        else {
            this.mFailReason = reason;
            if (this.mAddedId !== undefined) {
                this.mRemoveMod(this.mAddedId);
            }
        }
        this.mInstallOutcome = outcome;
    }
    setInstallPathCB(id, installPath) {
        const fileName = path.basename(installPath);
        (0, log_1.log)('info', 'using install path', { id, installPath, fileName });
        this.mSetModInstallationPath(id, fileName);
    }
    setModType(id, modType) {
        (0, log_1.log)('info', 'determined mod type', { id, modType });
        this.mSetModType(id, modType);
    }
    reportError(message, details, allowReport, replace) {
        (0, log_1.log)('error', 'install error', { message, details, replace });
        this.mShowError(message, details, allowReport, replace);
    }
    progressCB(percent, file) {
        (0, log_1.log)('debug', 'install progress', { percent, file });
    }
    outcomeNotification(outcome, id, isEnabled, modName, mod) {
        var _a;
        const type = mod !== undefined ? (0, modTypeExtensions_1.getModType)(mod.type) : undefined;
        const typeName = (type !== undefined)
            && (type.options !== undefined)
            && (type.options.name !== undefined)
            ? type.options.name
            : 'Mod';
        const nexusIds = (0, selectors_1.nexusIdsFromDownloadId)(this.mApi.getState(), mod.archiveId);
        switch (outcome) {
            case 'success':
                // TODO: bit of a hack, I'd prefer if we controlled this from the collections
                //   extension
                if (((mod === null || mod === void 0 ? void 0 : mod.type) === 'collection') || this.mSilent) {
                    return null;
                }
                if (nexusIds !== undefined) {
                    const { modUID, fileUID } = (0, UIDs_1.makeModAndFileUIDs)(nexusIds.numericGameId, nexusIds.modId, nexusIds.fileId);
                    this.mApi.events.emit('analytics-track-mixpanel-event', new MixpanelEvents_1.ModsInstallationCompletedEvent(nexusIds.modId, nexusIds.fileId, nexusIds.numericGameId, modUID, fileUID, Date.now() - this.mStartTime));
                }
                return {
                    id: `may-enable-${id}`,
                    type: 'success',
                    message: modName,
                    title: `${typeName} installed`,
                    group: 'mod-installed',
                    displayMS: isEnabled ? 4000 : undefined,
                    actions: isEnabled ? [] : [
                        {
                            title: 'Enable All',
                            action: dismiss => {
                                this.mEnableMod(this.mAddedId);
                                dismiss();
                            },
                        },
                    ],
                };
            case 'canceled':
                if (nexusIds !== undefined) {
                    const { modUID, fileUID } = (0, UIDs_1.makeModAndFileUIDs)(nexusIds.numericGameId, nexusIds.modId, nexusIds.fileId);
                    this.mApi.events.emit('analytics-track-mixpanel-event', new MixpanelEvents_1.ModsInstallationCancelledEvent(nexusIds.modId, nexusIds.fileId, nexusIds.numericGameId, modUID, fileUID));
                }
                return {
                    type: 'info',
                    title: 'Installation canceled',
                    message: modName,
                    replace: { id },
                    displayMS: 4000,
                    localize: { message: false },
                };
            case 'ignore': return null;
            default:
                if (nexusIds !== undefined) {
                    const { modUID, fileUID } = (0, UIDs_1.makeModAndFileUIDs)(nexusIds.numericGameId, nexusIds.modId, nexusIds.fileId);
                    this.mApi.events.emit('analytics-track-mixpanel-event', new MixpanelEvents_1.ModsInstallationFailedEvent(nexusIds.modId, nexusIds.fileId, nexusIds.numericGameId, modUID, fileUID, "", (_a = this.mFailReason) !== null && _a !== void 0 ? _a : 'unknown_error'));
                }
                return {
                    type: 'error',
                    title: '{{id}} failed to install',
                    message: this.mFailReason,
                    replace: { id },
                    localize: { message: false },
                };
        }
    }
}
exports.default = InstallContext;
