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
const log_1 = require("./log");
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
const fs = __importStar(require("./fs"));
const storeHelper_1 = require("./storeHelper");
const opn_1 = __importDefault(require("./opn"));
const api_1 = require("../types/api");
const lazyRequire_1 = __importDefault(require("./lazyRequire"));
const winapi = (0, lazyRequire_1.default)(() => require("winapi-bindings"));
const ITEM_EXT = ".item";
const STORE_ID = "epic";
const STORE_NAME = "Epic Games Launcher";
const STORE_PRIORITY = 60;
/**
 * Epic Store launcher seems to be holding game information inside
 *  .item manifest files which are stored inside the launchers Data folder
 *  "(C:\ProgramData\Epic\EpicGamesLauncher\Data\Manifests" by default
 */
class EpicGamesLauncher {
    constructor() {
        this.id = STORE_ID;
        this.name = STORE_NAME;
        this.priority = STORE_PRIORITY;
        if (process.platform === "win32") {
            try {
                // We find the launcher's dataPath
                const epicDataPath = winapi.RegGetValue("HKEY_LOCAL_MACHINE", "SOFTWARE\\WOW6432Node\\Epic Games\\EpicGamesLauncher", "AppDataPath");
                this.mDataPath = bluebird_1.default.resolve(epicDataPath.value);
            }
            catch (err) {
                (0, log_1.log)("info", "Epic games launcher not found", { error: err.message });
                this.mDataPath = bluebird_1.default.resolve(undefined);
            }
        }
        else {
            // TODO: Is epic launcher even available on non-windows platforms?
            this.mDataPath = bluebird_1.default.resolve(undefined);
        }
    }
    launchGame(appInfo, api) {
        const appId = typeof appInfo === "object" && "appId" in appInfo
            ? appInfo.appId
            : appInfo.toString();
        return this.getPosixPath(appId).then((posPath) => (0, opn_1.default)(posPath).catch((err) => bluebird_1.default.resolve()));
    }
    launchGameStore(api, parameters) {
        const launchCommand = "com.epicgames.launcher://start";
        return (0, opn_1.default)(launchCommand).catch((err) => bluebird_1.default.resolve());
    }
    getPosixPath(name) {
        const posixPath = `com.epicgames.launcher://apps/${name}?action=launch&silent=true`;
        return bluebird_1.default.resolve(posixPath);
    }
    queryPath() {
        return this.mDataPath.then((dataPath) => path.join(dataPath, this.executable()));
    }
    /**
     * test if a game is installed through the launcher.
     * Please keep in mind that epic seems to internally give third-party games animal names. Kinky.
     * @param name
     */
    isGameInstalled(name) {
        return this.findByAppId(name)
            .catch(() => this.findByName(name))
            .then(() => bluebird_1.default.resolve(true))
            .catch(() => bluebird_1.default.resolve(false));
    }
    findByAppId(appId) {
        const matcher = Array.isArray(appId)
            ? (entry) => appId.includes(entry.appid)
            : (entry) => appId === entry.appid;
        return this.allGames()
            .then((entries) => entries.find(matcher))
            .then((entry) => entry === undefined
            ? bluebird_1.default.reject(new api_1.GameEntryNotFound(Array.isArray(appId) ? appId.join(", ") : appId, STORE_ID))
            : bluebird_1.default.resolve(entry));
    }
    /**
     * Try to find the epic entry object using Epic's internal naming convention.
     *  e.g. "Flour" === "Untitled Goose Game" lol
     * @param name
     */
    findByName(name) {
        const re = new RegExp("^" + name + "$");
        return this.allGames()
            .then((entries) => entries.find((entry) => re.test(entry.name)))
            .then((entry) => entry === undefined
            ? bluebird_1.default.reject(new api_1.GameEntryNotFound(name, STORE_ID))
            : bluebird_1.default.resolve(entry));
    }
    allGames() {
        if (!this.mCache) {
            this.mCache = this.parseManifests();
        }
        return this.mCache;
    }
    reloadGames() {
        return new bluebird_1.default((resolve) => {
            this.mCache = this.parseManifests();
            return resolve();
        });
    }
    getGameStorePath() {
        const getExecPath = () => {
            try {
                const epicLauncher = winapi.RegGetValue("HKEY_LOCAL_MACHINE", "SOFTWARE\\Classes\\com.epicgames.launcher\\DefaultIcon", "(Default)");
                const val = epicLauncher.value;
                this.mLauncherExecPath = val.toString().split(",")[0];
                return bluebird_1.default.resolve(this.mLauncherExecPath);
            }
            catch (err) {
                (0, log_1.log)("info", "Epic games launcher not found", { error: err.message });
                return bluebird_1.default.resolve(undefined);
            }
        };
        return !!this.mLauncherExecPath
            ? bluebird_1.default.resolve(this.mLauncherExecPath)
            : getExecPath();
    }
    executable() {
        // TODO: This probably won't work on *nix
        //  test and fix.
        return process.platform === "win32"
            ? "EpicGamesLauncher.exe"
            : "EpicGamesLauncher";
    }
    parseManifests() {
        let manifestsLocation;
        return this.mDataPath
            .then((dataPath) => {
            if (dataPath === undefined) {
                return bluebird_1.default.resolve([]);
            }
            manifestsLocation = path.join(dataPath, "Manifests");
            return fs.readdirAsync(manifestsLocation);
        })
            .catch({ code: "ENOENT" }, (err) => {
            (0, log_1.log)("info", "Epic launcher manifests could not be found", err.code);
            return bluebird_1.default.resolve([]);
        })
            .then((entries) => {
            const manifests = entries.filter((entry) => entry.endsWith(ITEM_EXT));
            return bluebird_1.default.map(manifests, (manifest) => fs
                .readFileAsync(path.join(manifestsLocation, manifest), {
                encoding: "utf8",
            })
                .then((data) => {
                try {
                    const parsed = JSON.parse(data);
                    const gameStoreId = STORE_ID;
                    const gameExec = (0, storeHelper_1.getSafe)(parsed, ["LaunchExecutable"], undefined);
                    const gamePath = (0, storeHelper_1.getSafe)(parsed, ["InstallLocation"], undefined);
                    const name = (0, storeHelper_1.getSafe)(parsed, ["DisplayName"], undefined);
                    const appid = (0, storeHelper_1.getSafe)(parsed, ["AppName"], undefined);
                    // Epic does not seem to clean old manifests. We need
                    //  to stat the executable for each item to ensure that the
                    //  game entry is actually valid.
                    return !!gamePath && !!name && !!appid && !!gameExec
                        ? fs
                            .statSilentAsync(path.join(gamePath, gameExec))
                            .then(() => bluebird_1.default.resolve({ appid, name, gamePath, gameStoreId }))
                            .catch(() => bluebird_1.default.resolve(undefined))
                        : bluebird_1.default.resolve(undefined);
                }
                catch (err) {
                    (0, log_1.log)("error", "Cannot parse Epic Games manifest", err);
                    return bluebird_1.default.resolve(undefined);
                }
            })
                .catch((err) => {
                (0, log_1.log)("error", "Cannot read Epic Games manifest", err);
                return bluebird_1.default.resolve(undefined);
            }));
        })
            .then((games) => games.filter((game) => game !== undefined))
            .catch((err) => {
            (0, log_1.log)("error", "Failed to parse Epic Games manifests", err);
            return bluebird_1.default.resolve([]);
        });
    }
}
const instance = process.platform === "win32" ? new EpicGamesLauncher() : undefined;
exports.default = instance;
