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
/* eslint-disable */
const actions_1 = require("../../actions");
const notifications_1 = require("../../actions/notifications");
const api_1 = require("../../util/api");
const CustomErrors_1 = require("../../util/CustomErrors");
const EpicGamesLauncher_1 = __importDefault(require("../../util/EpicGamesLauncher"));
const fs = __importStar(require("../../util/fs"));
const GameStoreHelper_1 = __importDefault(require("../../util/GameStoreHelper"));
const log_1 = require("../../util/log");
const selectors_1 = require("../../util/selectors");
const Steam_1 = __importDefault(require("../../util/Steam"));
const storeHelper_1 = require("../../util/storeHelper");
const util_1 = require("../../util/util");
const actions_2 = require("../starter_dashlet/actions");
const discovery_1 = require("./actions/discovery");
const session_1 = require("./actions/session");
const settings_1 = require("./actions/settings");
const discovery_2 = require("./util/discovery");
const getGame_1 = require("./util/getGame");
const bluebird_1 = __importDefault(require("bluebird"));
const _ = __importStar(require("lodash"));
const path = __importStar(require("path"));
/**
 * discovers game modes
 *
 * @class GameModeManager
 */
class GameModeManager {
    constructor(api, extensionGames, gameStubs, gameStoreExtensions, onGameModeActivated) {
        this.storeGame = (game) => {
            return {
                name: game.name,
                shortName: game.shortName,
                id: game.id,
                logo: game.logo,
                extensionPath: game.extensionPath,
                parameters: game.parameters || [],
                requiredFiles: game.requiredFiles,
                supportedTools: game.supportedTools !== undefined
                    ? game.supportedTools.map(this.storeTool)
                    : [],
                executable: game.executable(),
                environment: game.environment,
                details: game.details,
                shell: game.shell,
                contributed: game.contributed,
                final: game.final,
            };
        };
        this.onDiscoveredTool = (gameId, result) => {
            const existing = (0, storeHelper_1.getSafe)(this.mStore.getState(), ["settings", "gameMode", "discovered", gameId, "tools", result.id], undefined);
            // don't overwrite customised tools
            if (existing === undefined || !existing.custom) {
                delete result.executable;
                this.mStore.dispatch((0, settings_1.addDiscoveredTool)(gameId, result.id, result, false));
            }
        };
        this.onDiscoveredGame = (gameId, result) => {
            if (result === undefined) {
                const currentProfile = (0, selectors_1.activeProfile)(this.mStore.getState());
                const batchedActions = (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.gameId) === gameId
                    ? [(0, actions_1.setNextProfile)(undefined), (0, settings_1.clearDiscoveredGame)(gameId)]
                    : [(0, settings_1.clearDiscoveredGame)(gameId)];
                (0, util_1.batchDispatch)(this.mStore, batchedActions);
            }
            else {
                this.mStore.dispatch((0, settings_1.addDiscoveredGame)(gameId, result));
            }
        };
        this.onError = (title, message) => {
            this.mStore.dispatch((0, notifications_1.addNotification)({
                type: "error",
                message,
                title,
            }));
        };
        this.mApi = api;
        this.mStore = null;
        this.mKnownGames = extensionGames;
        this.mGameStubs = gameStubs;
        this.mKnownGameStores = [Steam_1.default, EpicGamesLauncher_1.default, ...gameStoreExtensions];
        this.mActiveSearch = null;
        this.mOnGameModeActivated = onGameModeActivated;
    }
    /**
     * attach this manager to the specified store
     *
     * @param {Redux.Store<IStateEx>} store
     *
     * @memberOf GameModeManager
     */
    attachToStore(store) {
        this.mStore = store;
        const gamesStored = this.mKnownGames
            .map(this.storeGame)
            .filter(this.isValidGame);
        store.dispatch((0, session_1.setKnownGames)(gamesStored));
        // we used to activate the game mode right here but there is another
        // call to do this in the "once" CB of gamemode_management so it's
        // redundant and the other call handles errors properly while this one
        // didn't
    }
    /**
     * update the game mode being managed
     *
     * @param {string} newMode
     *
     * @memberOf GameModeManager
     */
    setGameMode(oldMode, newMode, profileId) {
        (0, log_1.log)("debug", "set game mode", { oldMode, newMode });
        const game = this.mKnownGames.find((knownGame) => knownGame.id === newMode);
        const discoveredGames = this.mStore.getState().settings.gameMode.discovered;
        const gameDiscovery = discoveredGames[newMode];
        if (game === undefined || (gameDiscovery === null || gameDiscovery === void 0 ? void 0 : gameDiscovery.path) === undefined) {
            // new game mode is not valid
            return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled("game mode not found"));
        }
        let modPath;
        try {
            modPath = game.queryModPath(gameDiscovery.path);
            if (!path.isAbsolute(modPath)) {
                modPath = path.resolve(gameDiscovery.path, modPath);
            }
        }
        catch (err) {
            return bluebird_1.default.reject(err);
        }
        // the game is listed and available to be activated if it was found in any store
        // but in that case we haven't verified yet whether the directory actually contains the game
        // (with the expected files)
        return (0, discovery_2.assertToolDir)(game, gameDiscovery.path)
            .then(() => fs.statAsync(modPath))
            .then(() => this.ensureWritable(modPath))
            .then(() => (0, api_1.getNormalizeFunc)(gameDiscovery.path))
            .then((normalize) => (0, discovery_2.discoverRelativeTools)(game, gameDiscovery.path, discoveredGames, this.onDiscoveredTool, normalize))
            .then(() => {
            const state = this.mStore.getState();
            const currentProfile = (0, selectors_1.activeProfile)(state);
            if (currentProfile !== undefined && profileId === currentProfile.id) {
                (0, log_1.log)("info", "changed game mode", { oldMode, newMode });
                this.mOnGameModeActivated(newMode);
                const { gameId } = currentProfile;
                if ((0, storeHelper_1.getSafe)(state, ["settings", "interface", "primaryTool", gameId], undefined) === undefined) {
                    const discovery = (0, selectors_1.discoveryByGame)(state, gameId);
                    if ((0, util_1.truthy)(discovery.tools)) {
                        const defaultPrimary = Object.keys(discovery.tools).find((toolId) => discovery.tools[toolId].defaultPrimary === true);
                        if (defaultPrimary !== undefined) {
                            this.mStore.dispatch((0, actions_2.setPrimaryTool)(gameId, defaultPrimary));
                        }
                    }
                }
            }
            else {
                (0, log_1.log)("info", "game prepared but it's no longer active");
            }
        })
            .catch((err) => {
            return ["ENOENT", "ENOTFOUND"].includes(err.code)
                ? bluebird_1.default.reject(new CustomErrors_1.SetupError("Missing: " + (err.filename || modPath)))
                : bluebird_1.default.reject(err);
        });
    }
    /**
     * prepare change to a different game mode
     *
     * @param {string} gameMode
     * @returns {Promise<void>}
     *
     * @memberOf GameModeManager
     */
    setupGameMode(gameMode) {
        const game = (0, getGame_1.getGame)(gameMode);
        const gameDiscovery = this.mStore.getState().settings.gameMode.discovered[gameMode];
        (0, log_1.log)("debug", "setup game mode", gameMode);
        if ((gameDiscovery === null || gameDiscovery === void 0 ? void 0 : gameDiscovery.path) === undefined) {
            // if the user starts Vortex with --game xyz and that game was previously detected
            // but has been uninstalled since then, Vortex initiates the profile/game switch
            // assuming it knows where the game is. By the time we get here, discovery may
            // have completed and reset the game discovery.
            // It would be nicer if all game switching could be deferred until after discovery
            // has run but that would be a major change that would require a proper round of
            // testing which is not going to happen now so we have to accept this as a valid
            // situation.
            return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled("game not discovered"));
        }
        else if ((game === null || game === void 0 ? void 0 : game.setup) === undefined) {
            return game
                .getInstalledVersion(gameDiscovery)
                .then(() => bluebird_1.default.resolve());
        }
        else {
            try {
                return ((0, discovery_2.assertToolDir)(game, gameDiscovery.path)
                    .then(() => fs.statAsync(gameDiscovery.path))
                    // We check the game's version before calling the setup function to avoid
                    //  locking game files if the gameversion hash extension is used.
                    .then(() => game.getInstalledVersion(gameDiscovery))
                    .then(() => bluebird_1.default.resolve(game.setup(gameDiscovery)).catch((err) => {
                    // don't allow reporting if the game extension setup function fails
                    if (game.contributed) {
                        err["allowReport"] = false;
                    }
                    return bluebird_1.default.reject(err);
                }))
                    .catch((err) => err.code === "ENOENT" && err.path === gameDiscovery.path
                    ? bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled(`Game folder "${gameDiscovery.path}" doesn't exist (any more).`))
                    : bluebird_1.default.reject(err)));
            }
            catch (err) {
                return bluebird_1.default.reject(err);
            }
        }
    }
    get games() {
        return this.mKnownGames;
    }
    get stubs() {
        return this.mGameStubs;
    }
    get gameStores() {
        return this.mKnownGameStores;
    }
    /**
     * starts game discovery, only using the search function from the game
     * extension
     *
     * @memberOf GameModeManager
     */
    startQuickDiscovery(games) {
        return this.reloadStoreGames()
            .then(() => (0, discovery_2.quickDiscovery)(games !== null && games !== void 0 ? games : this.mKnownGames, this.mStore.getState().settings.gameMode.discovered, this.onDiscoveredGame, this.onDiscoveredTool))
            .tap(() => this.postDiscovery());
    }
    startToolDiscovery(gameId) {
        const game = this.mKnownGames.find((iter) => iter.id === gameId);
        if (game !== undefined) {
            const discoveredGames = this.mStore.getState().settings.gameMode.discovered;
            const discovery = this.mStore.getState().settings.gameMode.discovered[game.id];
            return (0, discovery_2.quickDiscoveryTools)(gameId, game.supportedTools, this.onDiscoveredTool)
                .then(() => (0, api_1.getNormalizeFunc)(discovery.path))
                .then((normalize) => (0, discovery_2.discoverRelativeTools)(game, discovery.path, discoveredGames, this.onDiscoveredTool, normalize));
        }
        else {
            return bluebird_1.default.reject(new Error("unknown game id: " + gameId));
        }
    }
    isSearching() {
        return this.mActiveSearch !== null;
    }
    /**
     * start game discovery using known files
     *
     * @memberOf GameModeManager
     */
    startSearchDiscovery(searchPaths) {
        const progressCallback = (idx, percent, label) => this.mStore.dispatch((0, discovery_1.discoveryProgress)(idx, percent || 0, label));
        const state = this.mStore.getState();
        if (!Array.isArray(searchPaths)) {
            throw new Error("invalid search paths: " + require("util").inspect(searchPaths));
        }
        if (state.session.discovery.running) {
            // already scanning
            return;
        }
        this.mStore.dispatch((0, discovery_1.setPhaseCount)(searchPaths.length));
        let numDiscovered = 0;
        const onDiscoveredGame = (gameId, result) => {
            ++numDiscovered;
            this.onDiscoveredGame(gameId, result);
        };
        const { discovered } = state.settings.gameMode;
        this.mActiveSearch = (0, discovery_2.searchDiscovery)(this.mKnownGames, discovered, searchPaths.slice().sort(), onDiscoveredGame, this.onDiscoveredTool, this.onError, progressCallback)
            .then((directoriesRead) => {
            this.mStore.dispatch((0, notifications_1.addNotification)({
                type: "success",
                title: "Search finished",
                message: "{{searched}} directories were searched, {{numTotal}} games found ({{numDiscovered}} new)",
                replace: {
                    searched: directoriesRead,
                    numDiscovered,
                    numTotal: Object.values(discovered).filter((iter) => iter.path !== undefined).length,
                },
                displayMS: 10000,
            }));
        })
            .finally(() => {
            this.mStore.dispatch((0, discovery_1.discoveryFinished)());
            this.mActiveSearch = null;
            return this.postDiscovery();
        });
    }
    /**
     * stop search discovery
     *
     * @memberOf GameModeManager
     */
    stopSearchDiscovery() {
        (0, log_1.log)("info", "stop search");
        if (this.mActiveSearch !== null) {
            this.mActiveSearch.cancel();
            this.mActiveSearch = null;
        }
    }
    postDiscovery() {
        const { discovered } = this.mStore.getState().settings.gameMode;
        this.mStore.dispatch((0, session_1.clearGameDisabled)());
        bluebird_1.default.map(Object.keys(discovered), (gameId) => {
            if (discovered[gameId].path === undefined) {
                return bluebird_1.default.resolve();
            }
            return (0, api_1.getNormalizeFunc)(discovered[gameId].path)
                .then((normalize) => {
                const discovery = discovered[gameId];
                const game = (0, getGame_1.getGame)(gameId);
                // game may be uninstalled here so game being undefined is fine
                if ((game === null || game === void 0 ? void 0 : game.overrides) !== undefined) {
                    game.overrides.forEach((override) => {
                        var _a;
                        if (((_a = discovered[override]) === null || _a === void 0 ? void 0 : _a.path) !== undefined &&
                            normalize(discovered[override].path) ===
                                normalize(discovery.path)) {
                            this.mStore.dispatch((0, session_1.setGameDisabled)(override, gameId));
                        }
                    });
                }
            })
                .catch((err) => {
                // error is probably that normalization failed. Considering how rarely this
                // mechanism will be used, showing a notification feels like overkill
                (0, log_1.log)("error", "failed to check if game should be overridden", {
                    gameId,
                    error: err.message,
                });
                return bluebird_1.default.resolve();
            });
        });
    }
    ensureWritable(modPath) {
        return fs.ensureDirWritableAsync(modPath, () => new bluebird_1.default((resolve, reject) => {
            this.mStore.dispatch((0, notifications_1.showDialog)("question", "Access Denied", {
                text: "The mod directory for this game is not writable to your user account.\n" +
                    "If you have admin rights on this system, Vortex can change the permissions " +
                    "to allow it write access.",
            }, [
                { label: "Cancel", action: () => reject(new CustomErrors_1.UserCanceled()) },
                { label: "Allow access", action: () => resolve() },
            ]));
        }));
    }
    reloadStoreGames() {
        return GameStoreHelper_1.default.reloadGames(this.mApi);
    }
    isValidGame(game) {
        return (game.executable !== undefined &&
            game.requiredFiles !== undefined &&
            game.name !== undefined);
    }
    storeTool(tool) {
        const SKIPPED_TOOL_ATTRIBUTES = [
            "id",
            "name",
            "logo",
            "executable",
            "queryPath",
            "parameters",
            "requiredFiles",
            "relative",
        ];
        return Object.assign(Object.assign({}, _.omit(tool, SKIPPED_TOOL_ATTRIBUTES)), { id: tool.id || "MISSING_ID", name: tool.name || "MISSING_NAME", logo: tool.logo || "MISSING_LOGO", parameters: tool.parameters || [], environment: tool.environment || {}, executable: tool.executable() });
    }
}
exports.default = GameModeManager;
