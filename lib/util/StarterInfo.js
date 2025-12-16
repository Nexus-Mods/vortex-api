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
const actions_1 = require("../actions");
const log_1 = require("../util/log");
const GameStoreHelper_1 = __importDefault(require("./GameStoreHelper"));
const storeHelper_1 = require("../util/storeHelper");
const getGame_1 = require("../extensions/gamemode_management/util/getGame");
const application_1 = require("./application");
const CustomErrors_1 = require("./CustomErrors");
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const bluebird_1 = __importDefault(require("bluebird"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const IGameStore_1 = require("../types/IGameStore");
function getCurrentWindow() {
    if (process.type === "renderer") {
        return require("@electron/remote").getCurrentWindow();
    }
    else {
        return undefined;
    }
}
/**
 * wrapper for information about a game or tool, combining static and runtime/discovery information
 * for the purpose of actually starting them in a uniform way.
 * This implements things like running the game through a launcher (steam/epic/...) if necessary
 *
 * @class StarterInfo
 */
class StarterInfo {
    static getGameIcon(game, gameDiscovery) {
        const extensionPath = gameDiscovery.extensionPath || game.extensionPath;
        const logoName = gameDiscovery.logo || game.logo;
        return StarterInfo.gameIcon(game.id, extensionPath, logoName);
    }
    static toolIconRW(gameId, toolId) {
        return path.join((0, getVortexPath_1.default)("userData"), gameId, "icons", toolId + ".png");
    }
    static run(info, api, onShowError) {
        const game = (0, getGame_1.getGame)(info.gameId);
        const launcherPromise = game.requiresLauncher !== undefined && info.isGame
            ? bluebird_1.default.resolve(game.requiresLauncher(path.dirname(info.exePath), info.store)).catch((err) => {
                if (err instanceof CustomErrors_1.UserCanceled) {
                    // warning because it'd be kind of unusual for the user to have to confirm anything
                    // in requiresLauncher
                    (0, log_1.log)("warn", "failed to determine if launcher is required because user canceled something");
                }
                else {
                    const allowReport = !game.contributed;
                    const errorObj = allowReport
                        ? err
                        : {
                            message: "Report this to the community extension author, not Vortex support!",
                        };
                    onShowError("Failed to determine if launcher is required", errorObj, allowReport);
                    if (!allowReport) {
                        (0, log_1.log)("error", "failed to determine if launcher is required", errorObj.message);
                    }
                }
                return bluebird_1.default.resolve(undefined);
            })
            : bluebird_1.default.resolve(undefined);
        const onSpawned = () => {
            api.store.dispatch((0, actions_1.setToolRunning)(info.exePath, Date.now(), info.exclusive));
        };
        return launcherPromise.then((res) => {
            if (res !== undefined) {
                const infoObj = res.addInfo === undefined
                    ? !!game.details
                        ? game.details
                        : path.dirname(info.exePath)
                    : res.addInfo;
                return StarterInfo.runThroughLauncher(res.launcher, info, api, infoObj)
                    .then(() => {
                    // assuming that runThroughLauncher returns immediately on handing things off
                    // to the launcher
                    api.store.dispatch((0, actions_1.setToolRunning)(info.exePath, Date.now(), info.exclusive));
                    if (["hide", "hide_recover"].includes(info.onStart)) {
                        getCurrentWindow().hide();
                    }
                    else if (info.onStart === "close") {
                        (0, application_1.getApplication)().quit();
                    }
                })
                    .catch(CustomErrors_1.UserCanceled, () => null)
                    .catch(IGameStore_1.GameEntryNotFound, (err) => {
                    const errorMsg = [
                        err.message,
                        err.storeName,
                        err.existingGames,
                    ].join(" - ");
                    (0, log_1.log)("error", errorMsg);
                    onShowError("Failed to start game through launcher", err, !game.contributed);
                    return StarterInfo.runDirectly(info, api, onShowError, onSpawned);
                })
                    .catch(IGameStore_1.GameStoreNotFound, (err) => {
                    onShowError("Failed to start game through launcher", `Game store "${err.storeName}" not supported, is the extension disabled?`, false);
                    return StarterInfo.runDirectly(info, api, onShowError, onSpawned);
                })
                    .catch((err) => {
                    onShowError("Failed to start game through launcher", err, true);
                    return StarterInfo.runDirectly(info, api, onShowError, onSpawned);
                });
            }
            else {
                return StarterInfo.runDirectly(info, api, onShowError, onSpawned);
            }
        });
    }
    static getIconPath(info) {
        if (info["__iconCache"] === undefined) {
            if (info.isGame) {
                info["__iconCache"] = StarterInfo.gameIcon(info.gameId, info.extensionPath, info.logoName);
            }
            else {
                info["__iconCache"] = StarterInfo.toolIcon(info.gameId, info.extensionPath, info.id, info.logoName);
            }
        }
        return info["__iconCache"];
    }
    static runDirectly(info, api, onShowError, onSpawned) {
        const spawned = () => {
            onSpawned();
            if (["hide", "hide_recover"].includes(info.onStart)) {
                getCurrentWindow().hide();
            }
            else if (info.onStart === "close") {
                (0, application_1.getApplication)().quit();
            }
        };
        return api
            .runExecutable(info.exePath, info.commandLine, {
            cwd: info.workingDirectory || path.dirname(info.exePath),
            env: info.environment,
            suggestDeploy: true,
            shell: info.shell,
            detach: info.detach || info.onStart === "close",
            onSpawned: spawned,
        })
            .catch(CustomErrors_1.ProcessCanceled, () => undefined)
            .catch(CustomErrors_1.UserCanceled, () => undefined)
            .catch(CustomErrors_1.MissingDependency, () => {
            onShowError("Failed to run tool", {
                executable: info.exePath,
                message: "An Application/Tool dependency is missing, please consult the " +
                    "Application/Tool documentation for required dependencies.",
            }, false);
        })
            .catch((err) => {
            if (err.code === "ENOENT") {
                onShowError("Failed to run tool", {
                    Executable: info.exePath,
                    message: "Executable doesn't exist, please check the configuration for the " +
                        "tool you tried to start.",
                    stack: err.stack,
                }, false);
            }
            else if (err.code === "EBUSY") {
                // Application is still running in the background. Let the user know and suppress
                //  the report button.
                onShowError("Failed to run tool", {
                    Executable: info.exePath,
                    message: "The executable is running in the background or is being locked by an " +
                        "external application. Please close any running instances of the tool/game " +
                        "and/or external applications which may be locking the executable and retry.",
                    stack: err.stack,
                }, false);
            }
            else if (err.code === "UNKNOWN") {
                // info sucks but node.js doesn't give us too much information about what went wrong
                // and we can't have users misconfigure their tools and then report the error they
                // get as feedback
                onShowError("Failed to run tool", {
                    Executable: info.exePath,
                    message: "File is not executable, please check the configuration for the " +
                        "tool you tried to start.",
                    stack: err.stack,
                }, false);
            }
            else if (err instanceof CustomErrors_1.MissingInterpreter) {
                const par = {
                    Error: err.message,
                };
                if (err.url !== undefined) {
                    par["Download url"] = err.url;
                }
                onShowError("Failed to run tool", par, false);
            }
            else {
                onShowError("Failed to run tool", {
                    executable: info.exePath,
                    error: err,
                });
            }
        })
            .then(() => {
            if (info.onStart === "hide_recover" &&
                !getCurrentWindow().isVisible()) {
                getCurrentWindow().show();
            }
        });
    }
    static runThroughLauncher(launcher, info, api, addInfo) {
        let gameLauncher;
        try {
            gameLauncher = GameStoreHelper_1.default.getGameStore(launcher);
        }
        catch (err) {
            return bluebird_1.default.reject(err);
        }
        const infoObj = addInfo !== undefined ? addInfo : path.dirname(info.exePath);
        return gameLauncher !== undefined
            ? gameLauncher.launchGame(infoObj, api)
            : bluebird_1.default.reject(new Error(`unsupported launcher ${launcher}`));
    }
    static gameIcon(gameId, extensionPath, logo) {
        try {
            const iconPath = this.gameIconRW(gameId);
            fs.statSync(iconPath);
            return iconPath;
        }
        catch (err) {
            if (logo !== undefined) {
                return path.join(extensionPath, logo);
            }
            else {
                return undefined;
            }
        }
    }
    static gameIconRW(gameId) {
        return path.join((0, getVortexPath_1.default)("userData"), gameId, "icon.png");
    }
    static toolIcon(gameId, extensionPath, toolId, toolLogo) {
        try {
            const iconPath = this.toolIconRW(gameId, toolId);
            fs.statSync(iconPath);
            return iconPath;
        }
        catch (err) {
            if (toolLogo === undefined) {
                return undefined;
            }
            try {
                const iconPath = path.join(extensionPath, toolLogo);
                fs.statSync(iconPath);
                return iconPath;
            }
            catch (err) {
                return undefined;
            }
        }
    }
    constructor(game, gameDiscovery, tool, toolDiscovery) {
        this.details = {};
        this.gameId = gameDiscovery.id || game.id;
        this.extensionPath = gameDiscovery.extensionPath || game.extensionPath;
        this.detach = (0, storeHelper_1.getSafe)(toolDiscovery, ["detach"], (0, storeHelper_1.getSafe)(tool, ["detach"], true));
        this.onStart = (0, storeHelper_1.getSafe)(toolDiscovery, ["onStart"], (0, storeHelper_1.getSafe)(tool, ["onStart"], undefined));
        if (tool === undefined && toolDiscovery === undefined) {
            this.id = this.gameId;
            this.isGame = true;
            this.initFromGame(game, gameDiscovery);
        }
        else {
            this.id = (0, storeHelper_1.getSafe)(toolDiscovery, ["id"], (0, storeHelper_1.getSafe)(tool, ["id"], undefined));
            this.isGame = false;
            this.initFromTool(this.gameId, tool, toolDiscovery);
        }
        if (this.id === undefined || this.name === undefined) {
            throw new Error("invalid starter information");
        }
    }
    initFromGame(game, gameDiscovery) {
        this.name = gameDiscovery.name || game.name;
        this.exePath = path.join(gameDiscovery.path, gameDiscovery.executable || game.executable);
        this.commandLine = (0, storeHelper_1.getSafe)(gameDiscovery, ["parameters"], (0, storeHelper_1.getSafe)(game, ["parameters"], []));
        this.workingDirectory = path.dirname(this.exePath);
        this.originalEnvironment = (0, storeHelper_1.getSafe)(game, ["environment"], {});
        this.environment = (0, storeHelper_1.getSafe)(gameDiscovery, ["envCustomized"], false)
            ? (0, storeHelper_1.getSafe)(gameDiscovery, ["environment"], {})
            : this.originalEnvironment;
        this.iconOutPath = StarterInfo.gameIconRW(this.gameId);
        this.shell = gameDiscovery.shell || game.shell;
        this.logoName = gameDiscovery.logo || game.logo;
        this.details = game.details;
        this.exclusive = true;
        this.store = gameDiscovery.store;
    }
    initFromTool(gameId, tool, toolDiscovery) {
        if (toolDiscovery !== undefined) {
            this.name = (0, storeHelper_1.getSafe)(toolDiscovery, ["name"], (0, storeHelper_1.getSafe)(tool, ["name"], undefined));
            // TODO: umm, the discovery path here stores the path to the exe, whereas for a game it
            //   stores the base path of the game? That's not confusing at all...
            this.exePath = toolDiscovery.path;
            this.commandLine = (0, storeHelper_1.getSafe)(toolDiscovery, ["parameters"], (0, storeHelper_1.getSafe)(tool, ["parameters"], []));
            this.environment =
                (0, storeHelper_1.getSafe)(toolDiscovery, ["environment"], (0, storeHelper_1.getSafe)(tool, ["environment"], {})) || {};
            this.logoName = (0, storeHelper_1.getSafe)(toolDiscovery, ["logo"], (0, storeHelper_1.getSafe)(tool, ["logo"], undefined));
            this.workingDirectory = (0, storeHelper_1.getSafe)(toolDiscovery, ["workingDirectory"], (0, storeHelper_1.getSafe)(tool, ["workingDirectory"], ""));
            this.shell = (0, storeHelper_1.getSafe)(toolDiscovery, ["shell"], (0, storeHelper_1.getSafe)(tool, ["shell"], undefined));
            this.exclusive = (0, storeHelper_1.getSafe)(tool, ["exclusive"], false) || false;
            this.defaultPrimary = (0, storeHelper_1.getSafe)(tool, ["defaultPrimary"], false);
            this.timestamp = toolDiscovery.timestamp;
        }
        else {
            // defaults for undiscovered & unconfigured tools
            this.name = tool.name;
            this.exePath = "";
            this.commandLine = tool.parameters;
            this.workingDirectory = "";
            this.environment = tool.environment || {};
            this.logoName = tool.logo;
            this.shell = tool.shell;
        }
        this.iconOutPath = StarterInfo.toolIconRW(gameId, this.id);
    }
}
exports.default = StarterInfo;
