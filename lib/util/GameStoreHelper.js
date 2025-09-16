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
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
const fs = __importStar(require("../util/fs"));
const log_1 = require("../util/log");
const winapi = __importStar(require("winapi-bindings"));
const session_1 = require("../reducers/session");
const getGame_1 = require("../extensions/gamemode_management/util/getGame");
const CustomErrors_1 = require("../util/CustomErrors");
const IGameStore_1 = require("../types/IGameStore");
const getNormalizeFunc_1 = __importDefault(require("./getNormalizeFunc"));
const util_1 = require("./util");
class GameStoreHelper {
    constructor() {
        this.find = (0, util_1.toBlue)((query) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const results = [];
            for (const storeId of Object.keys(query)) {
                let prioOffset = 0;
                for (const storeQuery of query[storeId]) {
                    let result;
                    try {
                        if (storeId === 'registry') {
                            result = yield this.registryLookup(storeQuery.id);
                        }
                        else if (storeQuery.id !== undefined) {
                            result = yield this.findGameEntry('id', storeQuery.id, storeId);
                        }
                        else if (storeQuery.name !== undefined) {
                            result = yield this.findGameEntry('name', storeQuery.name, storeId);
                        }
                        else {
                            throw new Error('invalid store query, set either id or name');
                        }
                    }
                    catch (err) {
                        if (!(err instanceof IGameStore_1.GameEntryNotFound)) {
                            (0, log_1.log)('error', 'Failed to look up game', { storeId, appid: storeQuery.id, name: storeQuery.name });
                        }
                    }
                    if (result !== undefined) {
                        result.priority = (_c = (_a = storeQuery.prefer) !== null && _a !== void 0 ? _a : (_b = this.mStoresDict[result.gameStoreId]) === null || _b === void 0 ? void 0 : _b.priority) !== null && _c !== void 0 ? _c : 100;
                        result.priority += (prioOffset++) / 1000;
                        results.push(result);
                    }
                }
            }
            return results;
        }));
        this.identifyStore = (0, util_1.toBlue)((gamePath) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const normalize = yield (0, getNormalizeFunc_1.default)(gamePath);
            const fallback = (store, gamePath) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const gameInfo = (yield store.allGames()).find(game => normalize(game.gamePath) === normalize(gamePath));
                    return gameInfo !== undefined;
                }
                catch (err) {
                    return false;
                }
            });
            for (const store of this.getStores()) {
                if (store.identifyGame !== undefined) {
                    if (yield ((_a = store.identifyGame) === null || _a === void 0 ? void 0 : _a.call(store, gamePath, gamePath => fallback(store, gamePath)))) {
                        return store.id;
                    }
                }
                else {
                    if (yield fallback(store, gamePath)) {
                        return store.id;
                    }
                }
            }
            return undefined;
        }));
    }
    // Search for a specific game store.
    getGameStore(storeId) {
        const gameStores = this.getStores();
        const gameStore = gameStores.find(store => store.id === storeId);
        if ((gameStores.length) > 0 && (gameStore === undefined)) {
            // The game stores are guaranteed to have loaded at this point,
            //  yet the store Id we're looking for is not in the store array.
            throw new IGameStore_1.GameStoreNotFound(storeId);
        }
        return gameStore;
    }
    // Returns the id of the first game store that has
    //  an existing game entry for the game we're looking for.
    //  Will return undefined if no store has a matching game entry.
    // OR
    // If a store id is specified, it will return the provided
    //  store id if the game is installed using the specified store id;
    //  otherwise will return undefined.
    isGameInstalled(id, storeId) {
        return ((storeId !== undefined)
            ? this.findGameEntry('id', id, storeId)
            : this.findGameEntry('id', id))
            .then(entry => bluebird_1.default.resolve(entry === null || entry === void 0 ? void 0 : entry.gameStoreId))
            .catch(() => bluebird_1.default.resolve(undefined));
    }
    isGameStoreInstalled(storeId) {
        try {
            const gameStore = this.getGameStore(storeId);
            return (!!gameStore.isGameStoreInstalled)
                ? gameStore.isGameStoreInstalled()
                : gameStore.getGameStorePath()
                    .then(execPath => (execPath === undefined)
                    ? bluebird_1.default.reject(new Error(`failed to determine path for ${storeId}`))
                    : fs.statAsync(execPath))
                    .then(() => bluebird_1.default.resolve(true))
                    .catch(err => {
                    (0, log_1.log)('debug', 'gamestore is not installed', err);
                    return bluebird_1.default.resolve(false);
                });
        }
        catch (err) {
            return bluebird_1.default.resolve(false);
        }
    }
    registryLookup(lookup) {
        if (lookup === undefined) {
            return bluebird_1.default.reject(new Error('invalid store query, provide an id!'));
        }
        const chunked = lookup.split(':', 3);
        if (chunked.length !== 3) {
            return bluebird_1.default.reject(new Error('invalid query, should be hive:path:key'));
        }
        if (!['HKEY_CLASSES_ROOT', 'HKEY_CURRENT_CONFIG',
            'HKEY_CURRENT_USER', 'HKEY_LOCAL_MACHINE', 'HKEY_USERS'].includes(chunked[0])) {
            return bluebird_1.default.reject(new Error('invalid query, hive should be something like HKEY_LOCAL_MACHINE'));
        }
        try {
            const instPath = winapi.RegGetValue(chunked[0], chunked[1], chunked[2]);
            if (!instPath || (instPath.type !== 'REG_SZ')) {
                throw new Error('empty or invalid registry key');
            }
            const result = {
                appid: lookup,
                gamePath: instPath.value,
                gameStoreId: undefined,
                name: path.basename(instPath.value),
                priority: 100,
            };
            return bluebird_1.default.resolve(result);
        }
        catch (err) {
            return bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound(lookup, 'registry'));
        }
    }
    findByName(name, storeId) {
        return this.validInput(name)
            ? this.findGameEntry('name', name, storeId)
            : bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound('Invalid name input', this.mStores.map(store => store.id).join(', ')));
    }
    findByAppId(appId, storeId) {
        return this.validInput(appId)
            ? this.findGameEntry('id', appId, storeId)
            : bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound('Invalid appId input', this.mStores.map(store => store.id).join(', ')));
    }
    launchGameStore(api, gameStoreId, parameters, askConsent = false) {
        let gameStore;
        try {
            gameStore = this.getGameStore(gameStoreId);
            if (!gameStore.getGameStorePath) {
                throw new CustomErrors_1.ProcessCanceled('gamestore implementation does not define getGameStorePath');
            }
        }
        catch (err) {
            api.showErrorNotification('Failed to launch game store', err);
            return bluebird_1.default.resolve();
        }
        const t = api.translate;
        const launchStore = () => this.isGameStoreInstalled(gameStoreId)
            .then((gamestoreInstalled) => {
            if (!gamestoreInstalled) {
                api.showErrorNotification('Game store is not installed', t('Please install/reinstall {{storeId}} to be able to launch this game store.', { replace: { storeId: gameStoreId } }), { allowReport: false });
                return bluebird_1.default.resolve();
            }
            // Game Store specific launch has priority.
            if (!!gameStore.launchGameStore) {
                return gameStore.launchGameStore(api, parameters)
                    .catch(err => {
                    api.showErrorNotification('Failed to launch game store', err);
                    return bluebird_1.default.resolve();
                });
            }
            return gameStore.getGameStorePath()
                .then(launcherPath => {
                if (!!launcherPath && !this.isStoreRunning(launcherPath)) {
                    api.runExecutable(launcherPath, parameters || [], {
                        detach: true,
                        suggestDeploy: false,
                    });
                }
                return bluebird_1.default.resolve();
            });
        });
        const isGameStoreRunning = () => (!!gameStore.getGameStorePath)
            ? gameStore.getGameStorePath()
                .then(launcherPath => !!launcherPath && this.isStoreRunning(launcherPath))
            : bluebird_1.default.resolve(false);
        const askConsentDialog = () => {
            return isGameStoreRunning().then(res => (res)
                ? bluebird_1.default.resolve()
                : new bluebird_1.default((resolve, reject) => {
                    api.showDialog('info', api.translate('Game Store not Started'), {
                        text: api.translate('The game requires {{storeid}} to be running in parallel. '
                            + 'Vortex will now attempt to start up the store for you.', { replace: { storeid: gameStoreId } }),
                    }, [
                        { label: 'Cancel', action: () => reject(new CustomErrors_1.UserCanceled()) },
                        { label: 'Start Store', action: () => resolve() },
                    ]);
                }));
        };
        // Ask consent or start up the store directly.
        const startStore = () => (askConsent)
            ? askConsentDialog()
                .then(() => launchStore())
                .catch(err => bluebird_1.default.resolve())
            : launchStore();
        // Start up the store.
        return startStore();
    }
    reloadGames(api) {
        var _a;
        if (!!api && !this.mApi) {
            this.mApi = api;
        }
        const stores = this.getStores().filter(store => !!store);
        (_a = this.mApi) === null || _a === void 0 ? void 0 : _a.sendNotification({
            id: 'gamestore-reload',
            type: 'activity',
            message: 'Loading game stores...',
        });
        (0, log_1.log)('info', 'reloading game store games', stores.map(store => store.id)
            .join(', '));
        return bluebird_1.default.each(stores, (store) => ((store === null || store === void 0 ? void 0 : store.reloadGames) !== undefined)
            ? store.reloadGames()
                .catch(err => {
                // Game store was unable to reload its games
                //  we log this and jump to the next store.
                err['gameStore'] = store.id;
                (0, log_1.log)('error', 'gamestore failed to reload its games', err);
                return bluebird_1.default.resolve();
            })
            : bluebird_1.default.resolve())
            .then(() => {
            var _a;
            (_a = this.mApi) === null || _a === void 0 ? void 0 : _a.dismissNotification('gamestore-reload');
            return bluebird_1.default.resolve();
        });
    }
    /**
     * @returns list of stores, sorted by priority
     */
    storeIds() {
        return this.mStores
            .sort((lhs, rhs) => lhs.priority - rhs.priority);
    }
    isStoreRunning(storeExecPath) {
        const runningProcesses = winapi.GetProcessList();
        const exeId = (0, session_1.makeExeId)(storeExecPath);
        return runningProcesses.find(runningProc => (exeId === runningProc.exeFile.toLowerCase())) !== undefined;
    }
    validInput(input) {
        return (!input || (Array.isArray(input) && input.length === 0)) ? false : true;
    }
    getStores() {
        if (!!this.mStores) {
            return this.mStores;
        }
        // It's possible that the game mode manager has yet
        //  to load the stores.
        try {
            this.mStores = (0, getGame_1.getGameStores)();
            this.mStoresDict = this.mStores.reduce((prev, store) => {
                prev[store.id] = store;
                return prev;
            }, {});
            return this.mStores;
        }
        catch (err) {
            (0, log_1.log)('debug', 'stores have yet to load', err);
            return [];
        }
    }
    /**
     * Returns a store entry for a specified pattern.
     * @param searchType dictates which functor we execute.
     * @param pattern the pattern we're looking for.
     * @param storeId optional parameter used when trying to query a specific store.
     */
    findGameEntry(searchType, pattern, storeId) {
        const entryInfo = (entry) => (searchType === 'id') ? entry.appid : entry.name;
        const wrapNamePattern = (gameName) => {
            if (searchType !== 'name') {
                // Not a name searchType.
                return gameName;
            }
            // We need to match the game name _exactly_ otherwise
            //  false positives could occur, for example:
            //  The Elder Scrolls V: Skyrim could potentially match
            //  The Elder Scrolls V: Skyrim Special Edition, in which
            //  case the game extension will look for TESV.exe and be unable
            //  to find it, failing discovery completely even though the user
            //  has Oldrim installed in a different location.
            return '^' + gameName + '$';
        };
        // For obvious reasons, this should only be used for
        //  name searchTypes; using this for id's would potentially
        // cause false positives.
        const rgxMatcher = (Array.isArray(pattern))
            ? new RegExp(pattern.map(wrapNamePattern).join('|'))
            : new RegExp(wrapNamePattern(pattern));
        const matcher = (Array.isArray(pattern))
            ? entry => pattern.indexOf(entryInfo(entry)) !== -1
            : entry => entryInfo(entry) === pattern;
        const name = (Array.isArray(pattern))
            ? pattern.join(' - ')
            : pattern;
        const stores = this.mStores.map(store => store.id).join(', ');
        // queriedStore object is only populated if the game store helper caller
        //  is looking for a specific game store.
        let queriedStore;
        if (!!storeId) {
            try {
                queriedStore = this.getGameStore(storeId);
            }
            catch (err) {
                // It's possible for a game store to be missing
                //  especially if it is added by a 3rd party extension.
                (0, log_1.log)('warn', 'Game entry not found in specified store', { pattern: name, storeId, availableStores: stores });
                return bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound(name, stores));
            }
        }
        const gameStores = ((!!queriedStore)
            ? [queriedStore]
            : this.getStores()).filter(store => !!store);
        if ((gameStores === undefined) || (gameStores.length === 0)) {
            const stores = (gameStores !== undefined)
                ? gameStores.map(store => store.id).join(', ')
                : '';
            (0, log_1.log)('debug', 'Game entry not found', { pattern: name, availableStores: stores });
            return bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound(name, stores));
        }
        return bluebird_1.default.reduce(gameStores, (accum, store) => store.allGames()
            .then(entries => {
            const entry = (searchType === 'id')
                ? entries.find(matcher)
                : entries.find(ent => rgxMatcher.test(ent.name));
            if (!!entry) {
                accum.push(entry);
            }
            return bluebird_1.default.resolve(accum);
        })
            .catch(IGameStore_1.GameEntryNotFound, () => bluebird_1.default.resolve(accum)), [])
            .then(foundEntries => {
            // TODO: A cool future feature here would be to allow the user to select
            //  the gamestore he wants to use. But for now, we just return the
            //  first instance we found.
            if (foundEntries.length > 0) {
                return bluebird_1.default.resolve(foundEntries[0]);
            }
            else {
                (0, log_1.log)('debug', 'Game entry not found', { pattern: name, availableStores: stores });
                return bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound(name, stores));
            }
        });
    }
}
// const instance: GameStoreHelper = new GameStoreHelper();
const instance = new Proxy({}, {
    get(target, name) {
        if (target['inst'] === undefined) {
            target['inst'] = new GameStoreHelper();
        }
        return target['inst'][name];
    },
    set(target, name, value) {
        if (target['inst'] === undefined) {
            target['inst'] = new GameStoreHelper();
        }
        target['inst'][name] = value;
        return true;
    },
});
exports.default = instance;
