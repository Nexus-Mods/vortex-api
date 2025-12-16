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
exports.purgeDeployedFiles = purgeDeployedFiles;
exports.fallbackPurgeType = fallbackPurgeType;
exports.fallbackPurge = fallbackPurge;
exports.withActivationLock = withActivationLock;
exports.getManifest = getManifest;
exports.loadActivation = loadActivation;
exports.saveActivation = saveActivation;
const notifications_1 = require("../../../actions/notifications");
const CustomErrors_1 = require("../../../util/CustomErrors");
const fs = __importStar(require("../../../util/fs"));
const fsAtomic_1 = require("../../../util/fsAtomic");
const getVortexPath_1 = __importDefault(require("../../../util/getVortexPath"));
const log_1 = require("../../../util/log");
const selectors_1 = require("../../../util/selectors");
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const getGame_1 = require("../../gamemode_management/util/getGame");
const deploymentMethods_1 = require("./deploymentMethods");
const format_1_1 = __importDefault(require("./manifest_formats/format_1"));
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
const write_file_atomic_1 = require("write-file-atomic");
const CURRENT_VERSION = 1;
const formats = {
    1: format_1_1.default,
};
function emptyManifest(instance) {
    return {
        version: CURRENT_VERSION,
        instance,
        files: [],
    };
}
/**
 * since the manifest is read from disc, it could have been modified by the user.
 * Check it for correctness
 */
function repairManifest(input) {
    if (!(0, util_1.truthy)(input.version)) {
        input.version = CURRENT_VERSION;
    }
    if (!(0, util_1.truthy)(input.instance)) {
        input.instance = "";
    }
    input.files = input.files.reduce((prev, file) => {
        if (file !== null &&
            file.relPath !== undefined &&
            file.relPath !== null &&
            file.source !== undefined &&
            file.source !== null &&
            file.time !== undefined &&
            file.time !== null) {
            prev.push(file);
        }
        return prev;
    }, []);
    return input;
}
function readManifest(data) {
    if (data === "") {
        return undefined;
    }
    const msgpack = require("@msgpack/msgpack");
    let parsed;
    try {
        parsed =
            typeof data === "string" ? JSON.parse((0, util_1.deBOM)(data)) : msgpack.decode(data);
    }
    catch (err) {
        const newErr = new Error(`Failed to parse manifest: "${err.message}"`);
        // invalid input data, not a bug
        newErr["allowReport"] = false;
        throw newErr;
    }
    let lastVersion = 0;
    while (lastVersion < CURRENT_VERSION) {
        parsed = formats[parsed.version || 1](parsed);
        if (parsed.version === lastVersion && parsed.version < CURRENT_VERSION) {
            // this should not happen!
            throw new Error(`unsupported format upgrade ${parsed.version} -> ${CURRENT_VERSION}`);
        }
        lastVersion = parsed.version;
    }
    if (parsed.files === undefined) {
        parsed.files = [];
    }
    return repairManifest(parsed);
}
function purgeDeployedFiles(basePath, files) {
    return bluebird_1.default.map(files, (file) => {
        const fullPath = path.join(basePath, file.relPath);
        return fs
            .statAsync(fullPath)
            .then((stats) => {
            // the timestamp from stat has ms precision but the one from the manifest doesn't
            return stats.mtime.getTime() - file.time < 1000
                ? fs.unlinkAsync(fullPath)
                : bluebird_1.default.resolve();
        })
            .catch((err) => {
            if (err.code !== "ENOENT") {
                return bluebird_1.default.reject(err);
            } // otherwise ignore
        });
    }).then(() => undefined);
}
function queryPurgeTextSafe(t) {
    return t("IMPORTANT: This game was modded by another instance of Vortex.\n\n" +
        "If you switch between different instances (or between shared and " +
        "single-user mode) it's better if you purge mods before switching.\n\n" +
        "Vortex can try to clean up now but this is less reliable (*) than doing it " +
        "from the instance that deployed the files in the first place.\n\n" +
        "If you modified any files in the game directory you should back them up " +
        "before continuing.\n\n" +
        "(*) This purge relies on a manifest of deployed files, created by that other " +
        "instance. Files that have been changed since that manifest was created " +
        "won't be removed to prevent data loss. If the manifest is damaged or " +
        'outdated the purge may be incomplete. When purging from the "right" instance ' +
        "the manifest isn't required, it can reliably deduce which files need to " +
        "be removed.");
}
function queryPurgeTextUnsafe(t) {
    return t("IMPORTANT: This game was modded by another instance of Vortex.\n\n" +
        "Vortex can only proceed by purging the mods from that other instance.\n\n" +
        "This will irreversably **destroy** the mod installations from that other " +
        "instance!\n\n" +
        "You should instead cancel now, open that other vortex instance and purge " +
        "from there. This can also be caused by switching between shared and " +
        "single-user mode.");
}
function queryPurge(api, basePath, files, safe) {
    const t = api.translate;
    const text = safe ? queryPurgeTextSafe(t) : queryPurgeTextUnsafe(t);
    return api.store
        .dispatch((0, notifications_1.showDialog)("info", t("Purge files from different instance?"), {
        text,
    }, [{ label: "Cancel" }, { label: "Purge" }]))
        .then((result) => {
        if (result.action === "Purge") {
            return purgeDeployedFiles(basePath, files).catch((err) => {
                api.showErrorNotification("Purging failed", err, {
                    allowReport: false,
                });
                return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
            });
        }
        else {
            return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
        }
    });
}
function readManifestFile(filePath) {
    return fs.readFileAsync(filePath, "utf8").then((data) => readManifest(data));
}
function readManifestFileBinary(filePath) {
    return fs.readFileAsync(filePath).then((data) => readManifest(data));
}
function getManifestImpl(api, instanceId, filePath, backupPath, backup2Path) {
    return readManifestFile(filePath)
        .catch((err) => {
        if (err instanceof CustomErrors_1.UserCanceled) {
            return bluebird_1.default.reject(err);
        }
        if (err.code === "ENOENT") {
            return emptyManifest(instanceId);
        }
        if (err.code === "EPERM") {
            err.message =
                `The manifest file "${filePath}" is inaccessible due to ` +
                    "insufficient permissions.\nPlease ensure your Windows user account " +
                    "has full read/write permissions to the manifest file and try again.";
            err.allowReport = false;
            return bluebird_1.default.reject(err);
        }
        if (err.message.startsWith("Unexpected token") ||
            err.message.startsWith("Unexpected end of JSON input")) {
            err.message =
                `The manifest file "${filePath}" is corrupted.\n` +
                    'You should delete it, then immediately click the "Purge" button ' +
                    'on the "Mods" page, then deploy again.';
        }
        return readManifestFileBinary(backup2Path)
            .catch({ code: "ENOENT" }, () => readManifestFile(backupPath))
            .then((data) => api
            .showDialog("question", "Manifest damaged", {
            text: "The deployment manifest has been corrupted.\n" +
                "Fortunately we have a backup that seems to be intact.",
            parameters: {
                filePath,
            },
        }, [{ label: "Cancel" }, { label: "Restore from backup" }])
            .then((result) => {
            if (result.action === "Cancel") {
                err.allowReport = false;
                return bluebird_1.default.reject(err);
            }
            else {
                return bluebird_1.default.resolve(data);
            }
        }))
            .catch((backupErr) => {
            err.message += "\nBackup couldn't be read: " + backupErr.message;
            return bluebird_1.default.reject(err);
        });
    })
        .then((manifest) => manifest !== undefined ? manifest : emptyManifest(instanceId));
}
function fallbackPurgeType(api, activator, gameId, modType, deployPath, stagingPath) {
    const state = api.store.getState();
    const typeTag = modType !== undefined && modType.length > 0 ? modType + "." : "";
    const tagFileName = `vortex.deployment.${typeTag}json`;
    const tagFilePath = path.join(deployPath, tagFileName);
    const tagBackupPath = path.join(stagingPath, tagFileName);
    const tagBackup2Path = path.join(stagingPath, `vortex.deployment.backup.${typeTag}msgpack`);
    const instanceId = state.app.instanceId;
    return getManifestImpl(api, instanceId, tagFilePath, tagBackupPath, tagBackup2Path)
        .then((tagObject) => {
        let result;
        if (tagObject.files.length > 0) {
            let safe = true;
            if (tagObject.deploymentMethod !== undefined) {
                const previousActivator = (0, deploymentMethods_1.getActivator)(tagObject.deploymentMethod);
                if (previousActivator !== undefined &&
                    !previousActivator.isFallbackPurgeSafe) {
                    safe = false;
                }
            }
            result = purgeDeployedFiles(deployPath, tagObject.files)
                .then(() => saveActivation(gameId, modType, state.app.instanceId, deployPath, stagingPath, [], activator !== undefined ? activator.id : undefined))
                .then(() => bluebird_1.default.resolve());
        }
        else {
            result = bluebird_1.default.resolve();
        }
        return result;
    })
        .catch((err) => bluebird_1.default.reject(err));
}
/**
 * purge files using information from the manifest
 */
function fallbackPurge(api, gameId) {
    const state = api.store.getState();
    if (gameId === undefined) {
        gameId = (0, selectors_1.activeGameId)(state);
    }
    const gameDiscovery = (0, selectors_1.discoveryByGame)(state, gameId);
    const game = (0, getGame_1.getGame)(gameId);
    if (game === undefined || (gameDiscovery === null || gameDiscovery === void 0 ? void 0 : gameDiscovery.path) === undefined) {
        return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled("game got disabled"));
    }
    const modPaths = game.getModPaths(gameDiscovery.path);
    const stagingPath = (0, selectors_1.installPathForGame)(state, gameId);
    const activator = (0, deploymentMethods_1.getCurrentActivator)(state, gameId, false);
    return bluebird_1.default.each(Object.keys(modPaths), (typeId) => fallbackPurgeType(api, activator, gameId, typeId, modPaths[typeId], stagingPath)).then(() => undefined);
}
const activationQueue = (0, util_1.makeQueue)();
function withActivationLock(func, tryOnly = false) {
    return activationQueue(func, tryOnly);
}
/**
 * return a manifest (detailing which files are currently deployed by Vortex)
 * Please note that the manifest is intended only as kind of a fallback, core functionality
 * of Vortex is designed to work cleanly even if the manifest is deleted by the user and
 * the same should be true for any extension using this function: Work on the assumption
 * that the manifest may be missing or outdated.
 * @remarks
 * This call is expensive as it attempts to read the manifest every time. Store the
 * result or call infrequently to minimise allocations and/or lag.
 * @param api api
 * @param modType the mod type for which to retrieve the manifest, default mod type if undefined
 * @param gameId the game for which to retrieve the manifest, defaults to the current game.
 */
function getManifest(api, modType, gameId) {
    const state = api.store.getState();
    const instanceId = state.app.instanceId;
    try {
        if (gameId === undefined) {
            gameId = (0, selectors_1.activeGameId)(state);
        }
        if (modType === undefined) {
            modType = "";
        }
        const game = (0, getGame_1.getGame)(gameId);
        const discovery = (0, storeHelper_1.getSafe)(state, ["settings", "gameMode", "discovered", gameId], undefined);
        if ((discovery === null || discovery === void 0 ? void 0 : discovery.path) === undefined || game === undefined) {
            return bluebird_1.default.resolve(emptyManifest(instanceId));
        }
        const stagingPath = (0, selectors_1.installPathForGame)(state, gameId);
        const deployPath = game.getModPaths(discovery.path)[modType];
        if (stagingPath === undefined || deployPath === undefined) {
            return bluebird_1.default.resolve(emptyManifest(instanceId));
        }
        const typeTag = modType !== undefined && modType.length > 0 ? modType + "." : "";
        const tagFileName = `vortex.deployment.${typeTag}json`;
        const tagFilePath = path.join(deployPath, tagFileName);
        const tagBackupPath = path.join(stagingPath, tagFileName);
        const tagBackup2Path = path.join(stagingPath, `vortex.deployment.${typeTag}msgpack`);
        return getManifestImpl(api, instanceId, tagFilePath, tagBackupPath, tagBackup2Path);
    }
    catch (err) {
        return bluebird_1.default.reject(err);
    }
}
function loadActivation(api, gameId, modType, deployPath, stagingPath, activator) {
    if (deployPath === undefined) {
        return bluebird_1.default.resolve([]);
    }
    const typeTag = modType !== undefined && modType.length > 0 ? modType + "." : "";
    const tagFileName = `vortex.deployment.${typeTag}json`;
    const tagFilePath = path.join(deployPath, tagFileName);
    const tagBackupPath = path.join(stagingPath, tagFileName);
    const tagBackup2Path = path.join(stagingPath, `vortex.deployment.${typeTag}msgpack`);
    const state = api.store.getState();
    const instanceId = state.app.instanceId;
    return getManifestImpl(api, instanceId, tagFilePath, tagBackupPath, tagBackup2Path).then((tagObject) => {
        let result;
        if (tagObject.instance !== instanceId && tagObject.files.length > 0) {
            let safe = true;
            if (tagObject.deploymentMethod !== undefined) {
                const previousActivator = (0, deploymentMethods_1.getActivator)(tagObject.deploymentMethod);
                if (previousActivator !== undefined &&
                    !previousActivator.isFallbackPurgeSafe) {
                    safe = false;
                }
            }
            result = queryPurge(api, deployPath, tagObject.files, safe)
                .then(() => saveActivation(gameId, modType, state.app.instanceId, deployPath, stagingPath, [], activator.id))
                .then(() => bluebird_1.default.resolve([]));
        }
        else {
            result = bluebird_1.default.resolve(tagObject.files);
        }
        return result;
    });
}
function saveActivation(gameId, modType, instance, gamePath, stagingPath, activation, activatorId) {
    const typeTag = modType !== undefined && modType.length > 0 ? modType + "." : "";
    const dataRaw = {
        instance,
        version: CURRENT_VERSION,
        deploymentMethod: activatorId,
        gameId,
        deploymentTime: Date.now(),
        stagingPath,
        targetPath: gamePath,
        files: activation,
    };
    const dataJSON = JSON.stringify(dataRaw, undefined, 2);
    try {
        JSON.parse(dataJSON);
    }
    catch (err) {
        const failedPath = path.join((0, getVortexPath_1.default)("temp"), "failed_manifest.json");
        fs.writeFileSync(failedPath, dataJSON, { encoding: "utf8" });
        const repErr = new Error(`failed to serialize deployment information: "${err.message}"`);
        repErr["attachFilesOnReport"] = [failedPath];
        return bluebird_1.default.reject(repErr);
    }
    const tagFileName = `vortex.deployment.${typeTag}json`;
    const tagFilePath = path.join(gamePath, tagFileName);
    const tagBackupPath = path.join(stagingPath, `vortex.deployment.${typeTag}msgpack`);
    if (activation.length > 0) {
        // write backup synchronously
        try {
            const msgpack = require("@msgpack/msgpack");
            (0, write_file_atomic_1.sync)(tagBackupPath, Buffer.from(msgpack.encode(dataRaw)));
        }
        catch (err) {
            (0, log_1.log)("error", "Failed to write manifest backup", err.message);
        }
    }
    else {
        try {
            fs.removeSync(tagBackupPath);
        }
        catch (err) {
            if (err.code !== "ENOENT") {
                (0, log_1.log)("error", "failed to remove manifest backup", err.message);
            }
        }
    }
    return activation.length === 0
        ? fs.removeAsync(tagFilePath).catch(() => undefined)
        : (0, fsAtomic_1.writeFileAtomic)(tagFilePath, dataJSON)
            // remove backup from previous Vortex versions
            .then(() => fs
            .removeAsync(path.join(stagingPath, tagFileName))
            .catch({ code: "ENOENT" }, () => null));
}
