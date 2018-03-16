"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../../actions/notifications");
const api_1 = require("../../util/api");
const CustomErrors_1 = require("../../util/CustomErrors");
const fs = require("../../util/fs");
const log_1 = require("../../util/log");
const discovery_1 = require("./actions/discovery");
const session_1 = require("./actions/session");
const settings_1 = require("./actions/settings");
const discovery_2 = require("./util/discovery");
const Promise = require("bluebird");
const path = require("path");
/**
 * discovers game modes
 *
 * @class GameModeManager
 */
class GameModeManager {
    constructor(basePath, extensionGames, onGameModeActivated) {
        this.storeGame = (game) => {
            return {
                name: game.name,
                shortName: game.shortName,
                id: game.id,
                logo: game.logo,
                extensionPath: game.extensionPath,
                requiredFiles: game.requiredFiles,
                supportedTools: game.supportedTools !== undefined
                    ? game.supportedTools.map(this.storeTool)
                    : [],
                executable: game.executable(),
                environment: game.environment,
                details: game.details,
            };
        };
        this.onDiscoveredTool = (gameId, result) => {
            this.mStore.dispatch(settings_1.addDiscoveredTool(gameId, result.id, result));
        };
        this.onDiscoveredGame = (gameId, result) => {
            this.mStore.dispatch(settings_1.addDiscoveredGame(gameId, result));
        };
        this.mBasePath = basePath;
        this.mError = false;
        this.mStore = null;
        this.mKnownGames = extensionGames;
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
        const gamesStored = this.mKnownGames.map(this.storeGame);
        store.dispatch(session_1.setKnownGames(gamesStored));
    }
    /**
     * update the game mode being managed
     *
     * @param {string} newMode
     *
     * @memberOf GameModeManager
     */
    setGameMode(oldMode, newMode) {
        const game = this.mKnownGames.find(knownGame => knownGame.id === newMode);
        const gameDiscovery = this.mStore.getState().settings.gameMode.discovered[newMode];
        if ((game === undefined)
            || (gameDiscovery === undefined)
            || (gameDiscovery.path === undefined)) {
            // new game mode is not valid
            return Promise.reject(new CustomErrors_1.ProcessCanceled('game mode not found'));
        }
        let modPath = game.queryModPath(gameDiscovery.path);
        if (!path.isAbsolute(modPath)) {
            modPath = path.resolve(gameDiscovery.path, modPath);
        }
        return fs.statAsync(modPath)
            .then(() => this.ensureWritable(modPath))
            .then(() => api_1.getNormalizeFunc(gameDiscovery.path))
            .then(normalize => discovery_2.discoverRelativeTools(game, gameDiscovery.path, this.onDiscoveredTool, normalize))
            .then(() => {
            log_1.log('info', 'changed game mode', { oldMode, newMode });
            this.mOnGameModeActivated(newMode);
        })
            .catch(err => {
            return (err.code === 'ENOENT')
                ? Promise.reject(new CustomErrors_1.ProcessCanceled('Mod directory missing: ' + modPath))
                : Promise.reject(err);
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
        const game = this.mKnownGames.find(knownGame => knownGame.id === gameMode);
        const gameDiscovery = this.mStore.getState().settings.gameMode.discovered[gameMode];
        if ((game === undefined) && (gameDiscovery === undefined)) {
            return Promise.reject(new Error('invalid game mode'));
        }
        else if ((game === undefined) || (game.setup === undefined)) {
            return Promise.resolve();
        }
        else {
            try {
                return game.setup(gameDiscovery);
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
    }
    get games() {
        return this.mKnownGames;
    }
    /**
     * starts game discovery, only using the search function from the game
     * extension
     *
     * @memberOf GameModeManager
     */
    startQuickDiscovery() {
        return discovery_2.quickDiscovery(this.mKnownGames, this.onDiscoveredGame, this.onDiscoveredTool);
    }
    /**
     * start game discovery using known files
     *
     * @memberOf GameModeManager
     */
    startSearchDiscovery() {
        const progressCallback = (idx, percent, label) => this.mStore.dispatch(discovery_1.discoveryProgress(idx, percent, label));
        const searchPaths = this.mStore.getState().settings.gameMode.searchPaths;
        if (!Array.isArray(searchPaths)) {
            throw new Error('invalid search paths: ' + require('util').inspect(searchPaths));
        }
        this.mStore.dispatch(discovery_1.setPhaseCount(searchPaths.length));
        this.mActiveSearch = discovery_2.searchDiscovery(this.mKnownGames, this.mStore.getState().settings.gameMode.discovered, searchPaths, this.onDiscoveredGame, this.onDiscoveredTool, progressCallback)
            .finally(() => {
            this.mStore.dispatch(discovery_1.discoveryFinished());
        });
    }
    /**
     * stop search discovery
     *
     * @memberOf GameModeManager
     */
    stopSearchDiscovery() {
        log_1.log('info', 'stop search', { prom: this.mActiveSearch });
        this.mActiveSearch.cancel();
    }
    ensureWritable(modPath) {
        return fs.ensureDirWritableAsync(modPath, () => new Promise((resolve, reject) => {
            this.mStore.dispatch(notifications_1.showDialog('question', 'Access Denied', {
                text: 'The mod directory for this game is not writable to your user account.\n'
                    + 'If you have admin rights on this system, Vortex can change the permissions '
                    + 'to allow it write access.',
            }, [
                { label: 'Cancel', action: () => reject(new CustomErrors_1.UserCanceled()) },
                { label: 'Allow access', action: () => resolve() },
            ]));
        }));
    }
    storeTool(tool) {
        return {
            id: tool.id,
            name: tool.name,
            shortName: tool.shortName,
            logo: tool.logo,
            executable: tool.executable(),
            parameters: tool.parameters || [],
            environment: tool.environment,
        };
    }
}
exports.default = GameModeManager;
