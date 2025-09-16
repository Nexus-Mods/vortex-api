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
exports.GameNotFound = void 0;
const bluebird_1 = __importDefault(require("bluebird"));
const fs = __importStar(require("./fs"));
const log_1 = require("./log");
const storeHelper_1 = require("./storeHelper");
const fsOG = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
const simple_vdf_1 = require("simple-vdf");
const winapi = __importStar(require("winapi-bindings"));
const opn_1 = __importDefault(require("./opn"));
const IGameStore_1 = require("../types/IGameStore");
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const STORE_ID = 'steam';
const STORE_NAME = 'Steam';
const STEAM_EXEC = process.platform === 'win32' ? 'Steam.exe' : 'steam.sh';
const STORE_PRIORITY = 40;
/// obsolete, no longer used. But it's exported through the api
class GameNotFound extends Error {
    constructor(search) {
        super('Not in Steam library');
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.mSearch = search;
    }
    get search() {
        return this.mSearch;
    }
}
exports.GameNotFound = GameNotFound;
/**
 * base class to interact with local steam installation
 * @class Steam
 */
class Steam {
    constructor() {
        this.id = STORE_ID;
        this.name = STORE_NAME;
        this.priority = STORE_PRIORITY;
        if (process.platform === 'win32') {
            // windows
            try {
                const steamPath = winapi.RegGetValue('HKEY_CURRENT_USER', 'Software\\Valve\\Steam', 'SteamPath');
                this.mBaseFolder = bluebird_1.default.resolve(steamPath.value);
            }
            catch (err) {
                (0, log_1.log)('info', 'steam not found', { error: err.message });
                this.mBaseFolder = bluebird_1.default.resolve(undefined);
            }
        }
        else {
            this.mBaseFolder = bluebird_1.default.resolve(path.resolve((0, getVortexPath_1.default)('home'), '.steam', 'steam'));
        }
    }
    /**
     * find the first game that matches the specified name pattern
     */
    findByName(namePattern) {
        const re = new RegExp('^' + namePattern + '$');
        return this.allGames()
            .then(entries => entries.find(entry => re.test(entry.name)))
            .then(entry => {
            if (entry === undefined) {
                return bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound(namePattern, STORE_ID));
            }
            else {
                return bluebird_1.default.resolve(entry);
            }
        });
    }
    launchGame(appInfo, api) {
        // We expect appInfo to be one of three things at this point:
        //  - The game extension's details object if provided, in which case
        //      we want to extract the steamAppId entry. (preferred case as this
        //      is used by the gameinfo-steam extension as well).
        //  - The steam Id in string form.
        //  - The directory path which contains the game's executable.
        if (this.isCustomExecObject(appInfo) && (appInfo.launchType === 'gamestore')) {
            return this.getPosixPath(appInfo)
                .then(posix => (0, opn_1.default)(posix).catch(err => bluebird_1.default.resolve()));
        }
        const info = (!!appInfo.steamAppId)
            ? appInfo.steamAppId.toString() : appInfo;
        return this.getExecInfo(info)
            .then(execInfo => api.runExecutable(execInfo.execPath, execInfo.arguments, {
            cwd: path.dirname(execInfo.execPath),
            suggestDeploy: true,
            shell: true,
        }));
    }
    getPosixPath(appInfo) {
        const posixCommand = `steam://launch/${appInfo.appId}/${appInfo.parameters.join()}`;
        return bluebird_1.default.resolve(posixCommand);
    }
    getExecInfo(appInfo) {
        var _a;
        // Steam uses numeric values to id games internally; if the provided appId
        //  contains path separators, it's a clear indication that the game
        //  extension did not provide a steam id and the starter info object
        //  provided the game executables dirname instead.
        let appId;
        let parameters = [];
        if (this.isCustomExecObject(appInfo)) {
            appId = appInfo.appId;
            parameters = (_a = appInfo.parameters) !== null && _a !== void 0 ? _a : [];
        }
        else {
            appId = appInfo.toString();
        }
        const isDirPath = (appId.indexOf(path.sep) !== -1);
        return this.allGames()
            .then(entries => {
            const found = entries.find(entry => (!isDirPath)
                ? (entry.appid === appId)
                // Checking by gamepath is inefficient but I can't think of a different
                //  way to ascertain whether the launcher has this game entry with the
                //  provided information...
                : (appId.toLowerCase().indexOf(entry.gamePath.toLowerCase()) !== -1));
            if (found === undefined) {
                return bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound(appId, STORE_ID));
            }
            return this.mBaseFolder.then((basePath) => {
                const steamExec = {
                    execPath: path.join(basePath, STEAM_EXEC),
                    arguments: ['-applaunch', appId, ...parameters],
                };
                return bluebird_1.default.resolve(steamExec);
            });
        });
    }
    /**
     * find the first game with the specified appid or one of the specified appids
     */
    findByAppId(appId) {
        // support searching for one app id or one out of a list (when there are multiple
        // variants of a game)
        const matcher = Array.isArray(appId)
            ? entry => appId.indexOf(entry.appid) !== -1
            : entry => entry.appid === appId;
        return this.allGames()
            .then(entries => {
            const entry = entries.find(matcher);
            if (entry === undefined) {
                return bluebird_1.default.reject(new IGameStore_1.GameEntryNotFound(Array.isArray(appId) ? appId.join(', ') : appId, STORE_ID));
            }
            else {
                return bluebird_1.default.resolve(entry);
            }
        });
    }
    allGames() {
        if (!this.mCache) {
            this.mCache = this.parseManifests();
        }
        return this.mCache;
    }
    getGameStorePath() {
        return this.mBaseFolder.then(baseFolder => {
            if (baseFolder === undefined) {
                return bluebird_1.default.resolve(undefined);
            }
            return bluebird_1.default.resolve(path.join(baseFolder, STEAM_EXEC));
        });
    }
    reloadGames() {
        return new bluebird_1.default((resolve) => {
            this.mCache = this.parseManifests();
            return resolve();
        });
    }
    identifyGame(gamePath, fallback) {
        const custom = gamePath.toLowerCase().split(path.sep).includes('steamapps');
        return bluebird_1.default.resolve(fallback(gamePath))
            .then((fbResult) => {
            if (fbResult !== custom) {
                (0, log_1.log)('warn', '(steam) game identification inconclusive', {
                    gamePath,
                    custom,
                    fallback,
                });
            }
            return custom || fbResult;
        });
    }
    isCustomExecObject(object) {
        if (typeof (object) !== 'object') {
            return false;
        }
        return ('appId' in object);
    }
    resolveSteamPaths() {
        (0, log_1.log)('debug', 'resolving Steam game paths');
        return this.mBaseFolder.then((basePath) => {
            if (basePath === undefined) {
                // Steam not found/installed
                return bluebird_1.default.resolve([]);
            }
            const steamPaths = [basePath];
            return fs.readFileAsync(path.resolve(basePath, 'config', 'libraryfolders.vdf'))
                .then((data) => {
                if (data === undefined) {
                    return bluebird_1.default.resolve(steamPaths);
                }
                let parsedObj;
                try {
                    parsedObj = (0, simple_vdf_1.parse)(data.toString());
                }
                catch (err) {
                    (0, log_1.log)('warn', 'unable to parse steamfolders.vdf', err);
                    return bluebird_1.default.resolve(steamPaths);
                }
                const libObj = (0, storeHelper_1.getSafeCI)(parsedObj, ['libraryfolders'], {});
                let counter = libObj.hasOwnProperty('0') ? 0 : 1;
                while (libObj.hasOwnProperty(`${counter}`)) {
                    const libPath = libObj[`${counter}`]['path'];
                    if (libPath && !steamPaths.includes(libPath)) {
                        steamPaths.push(libObj[`${counter}`]['path']);
                    }
                    ++counter;
                }
                (0, log_1.log)('debug', 'found steam install folders', { steamPaths });
                return bluebird_1.default.resolve(steamPaths);
            })
                .catch(err => {
                // A Steam update has changed the way we resolve the steam library paths
                //  (we used to get these from config.vdf) the libraryfolders.vdf file
                //  appears to at times hold a reference to _all_ library folders; other times
                //  it only holds the path to the alternate steam libraries (the ones that aren't
                //  part of the base Steam installation folder)
                (0, log_1.log)('warn', 'failed to read steam library folders file', err);
                return ['EPERM', 'ENOENT'].includes(err.code)
                    ? bluebird_1.default.resolve(steamPaths)
                    : bluebird_1.default.reject(err);
            });
        });
    }
    parseManifests() {
        return this.resolveSteamPaths()
            .then((steamPaths) => bluebird_1.default.mapSeries(steamPaths, steamPath => {
            (0, log_1.log)('debug', 'reading steam install folder', { steamPath });
            const steamAppsPath = path.join(steamPath, 'steamapps');
            return bluebird_1.default.resolve(fsOG.readdir(steamAppsPath))
                .then(names => {
                const filtered = names.filter(name => name.startsWith('appmanifest_') && (path.extname(name) === '.acf'));
                (0, log_1.log)('debug', 'got steam manifests', { manifests: filtered });
                return bluebird_1.default.map(filtered, (name) => fs.readFileAsync(path.join(steamAppsPath, name)).then(manifestData => ({
                    manifestData, name,
                })));
            })
                .then(appsData => {
                return appsData
                    .map(appData => {
                    const { name, manifestData } = appData;
                    try {
                        return { obj: (0, simple_vdf_1.parse)(manifestData.toString()), name };
                    }
                    catch (err) {
                        (0, log_1.log)('warn', 'failed to parse steam manifest', { name, error: err.message });
                        return undefined;
                    }
                })
                    .map(res => {
                    if (res === undefined) {
                        return undefined;
                    }
                    const { obj, name } = res;
                    if ((obj === undefined)
                        || (obj['AppState'] === undefined)
                        || (obj['AppState']['installdir'] === undefined)) {
                        (0, log_1.log)('debug', 'invalid appmanifest', name);
                        return undefined;
                    }
                    try {
                        return {
                            appid: obj['AppState']['appid'],
                            gameStoreId: STORE_ID,
                            name: obj['AppState']['name'],
                            gamePath: path.join(steamAppsPath, 'common', obj['AppState']['installdir']),
                            lastUser: obj['AppState']['LastOwner'],
                            lastUpdated: new Date(obj['AppState']['LastUpdated'] * 1000),
                            manifestData: obj,
                        };
                    }
                    catch (err) {
                        (0, log_1.log)('warn', 'failed to parse steam manifest', { name, error: err.message });
                        return undefined;
                    }
                })
                    .filter(obj => obj !== undefined);
            })
                .catch({ code: 'ENOENT' }, (err) => {
                // no biggy, this can happen for example if the steam library is on a removable medium
                // which is currently removed
                (0, log_1.log)('info', 'Steam library not found', { error: err.message });
                return undefined;
            })
                .catch(err => {
                (0, log_1.log)('warn', 'Failed to read steam library', { path: steamPath, error: err.message });
            });
        })
            .then((games) => games.reduce((prev, current) => current !== undefined ? prev.concat(current) : prev, []))
            .tap(() => {
            (0, log_1.log)('info', 'done reading steam libraries');
        }));
    }
}
const instance = new Steam();
exports.default = instance;
