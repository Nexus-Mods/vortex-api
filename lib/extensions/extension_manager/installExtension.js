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
const actions_1 = require("../../actions");
const CustomErrors_1 = require("../../util/CustomErrors");
const fs = __importStar(require("../../util/fs"));
const getVortexPath_1 = __importDefault(require("../../util/getVortexPath"));
const lazyRequire_1 = __importDefault(require("../../util/lazyRequire"));
const log_1 = require("../../util/log");
const util_1 = require("../../util/util");
const languagemap_1 = require("../settings_interface/languagemap");
const util_2 = require("./util");
const bluebird_1 = __importDefault(require("bluebird"));
const path = __importStar(require("path"));
const rimraf_1 = __importDefault(require("rimraf"));
const vortexRun = (0, lazyRequire_1.default)(() => require("vortex-run"));
const rimrafAsync = bluebird_1.default.promisify(rimraf_1.default);
class ContextProxyHandler {
    constructor() {
        this.mDependencies = [];
    }
    get(target, key) {
        if (key === "requireExtension") {
            return (dependencyId) => {
                this.mDependencies.push(dependencyId);
            };
        }
        else if (key === "optional") {
            return new Proxy({}, {
                get() {
                    return () => undefined;
                },
            });
        }
        else if (key === "api") {
            return {
                translate: (input) => input,
            };
        }
        else {
            return () => undefined;
        }
    }
    get dependencies() {
        return this.mDependencies;
    }
}
function installExtensionDependencies(api, extPath) {
    const handler = new ContextProxyHandler();
    const context = new Proxy({}, handler);
    try {
        const extension = vortexRun.dynreq(path.join(extPath, "index.js"));
        extension.default(context);
        const state = api.store.getState();
        return bluebird_1.default.map(handler.dependencies, (depId) => {
            if (state.session.extensions.installed[depId] !== undefined) {
                return;
            }
            const ext = state.session.extensions.available.find((iter) => !iter.type && (iter.name === depId || iter.id === depId));
            if (ext !== undefined) {
                return api.emitAndAwait("install-extension", ext);
            }
            else {
                return bluebird_1.default.resolve();
            }
        }).then(() => null);
    }
    catch (err) {
        // TODO: can't check for dependencies if the extension is already loaded
        //   and registers actions
        if (err.name === "TypeError" &&
            err.message.startsWith("Duplicate action type")) {
            return bluebird_1.default.resolve();
        }
        return bluebird_1.default.reject(err);
    }
}
function sanitize(input) {
    const temp = input.replace(util_1.INVALID_FILENAME_RE, "_");
    const ext = path.extname(temp);
    if ([".7z", ".zip", ".rar"].includes(ext.toLowerCase())) {
        return path.basename(temp, path.extname(temp));
    }
    else {
        return path.basename(temp);
    }
}
function removeOldVersion(api, info) {
    const state = api.store.getState();
    const { installed } = state.session.extensions;
    // should never be more than one but let's handle multiple to be safe
    const previousVersions = Object.keys(installed).filter((key) => !installed[key].bundled &&
        ((info.id !== undefined && installed[key].id === info.id) ||
            (info.modId !== undefined && installed[key].modId === info.modId) ||
            installed[key].name === info.name));
    if (previousVersions.length > 0) {
        (0, log_1.log)("info", "removing previous versions of the extension", {
            previousVersions,
            newPath: info.path,
            paths: previousVersions.map((iter) => installed[iter].path),
        });
    }
    previousVersions.forEach((key) => api.store.dispatch((0, actions_1.removeExtension)(key)));
    return bluebird_1.default.resolve();
}
/**
 * validate a theme extension. A theme extension can contain multiple themes, one directory
 * per theme, each is expected to contain at least one of
 * "variables.scss", "style.scss" or "fonts.scss"
 */
function validateTheme(extPath) {
    return fs
        .readdirAsync(extPath)
        .filter((fileName) => fs
        .statAsync(path.join(extPath, fileName))
        .then((stats) => stats.isDirectory()))
        .then((dirNames) => {
        if (dirNames.length === 0) {
            return bluebird_1.default.reject(new CustomErrors_1.DataInvalid("Expected a subdirectory containing the stylesheets"));
        }
        return bluebird_1.default.map(dirNames, (dirName) => fs.readdirAsync(path.join(extPath, dirName)).then((files) => {
            if (!files.includes("variables.scss") &&
                !files.includes("style.scss") &&
                !files.includes("fonts.scss")) {
                return bluebird_1.default.reject(new CustomErrors_1.DataInvalid("Theme not found"));
            }
            else {
                return bluebird_1.default.resolve();
            }
        })).then(() => null);
    });
}
function isLocaleCode(input) {
    try {
        new Date().toLocaleString(input);
        return true;
    }
    catch (err) {
        return false;
    }
}
/**
 * validate a translation extension. Can only contain one iso-code named directory (other
 * directories are ignored) which needs to contain at least one json file
 */
function validateTranslation(extPath) {
    return fs
        .readdirAsync(extPath)
        .filter((fileName) => isLocaleCode(fileName))
        .filter((fileName) => fs
        .statAsync(path.join(extPath, fileName))
        .then((stats) => stats.isDirectory()))
        .then((dirNames) => {
        if (dirNames.length !== 1) {
            return bluebird_1.default.reject(new CustomErrors_1.DataInvalid("Expected exactly one language subdirectory"));
        }
        // the check in isLocaleCode is extremely unreliable because it will fall back to
        // iso on everything. Was it always like that or was that changed in a recent
        // node release?
        const [language, country] = dirNames[0].split("-");
        if (!(0, languagemap_1.languageExists)(language) ||
            (country !== undefined && !(0, languagemap_1.countryExists)(country))) {
            return bluebird_1.default.reject(new CustomErrors_1.DataInvalid("Directory isn't a language code"));
        }
        return fs.readdirAsync(path.join(extPath, dirNames[0])).then((files) => {
            if (files.find((fileName) => path.extname(fileName) === ".json") ===
                undefined) {
                return bluebird_1.default.reject(new CustomErrors_1.DataInvalid("No translation files"));
            }
            return bluebird_1.default.resolve();
        });
    });
}
/**
 * validate an extension. It has to contain an index.js and info.json on the top-level
 */
function validateExtension(extPath) {
    return bluebird_1.default.all([
        fs.statAsync(path.join(extPath, "index.js")),
        fs.statAsync(path.join(extPath, "info.json")),
    ])
        .then(() => null)
        .catch({ code: "ENOENT" }, () => {
        return bluebird_1.default.reject(new CustomErrors_1.DataInvalid("Extension needs to include index.js and info.json on top-level"));
    });
}
function validateInstall(extPath, info) {
    if (info === undefined) {
        let validAsTheme = true;
        let validAsTranslation = true;
        let validAsExtension = true;
        const guessedType = undefined;
        // if we don't know the type we can only check if _any_ extension type applies
        return validateTheme(extPath)
            .catch(CustomErrors_1.DataInvalid, () => (validAsTheme = false))
            .then(() => validateTranslation(extPath))
            .catch(CustomErrors_1.DataInvalid, () => (validAsTranslation = false))
            .then(() => validateExtension(extPath))
            .catch(CustomErrors_1.DataInvalid, () => (validAsExtension = false))
            .then(() => {
            if (!validAsExtension && !validAsTheme && !validAsTranslation) {
                return bluebird_1.default.reject(new CustomErrors_1.DataInvalid("Doesn't seem to contain a correctly packaged extension, " +
                    "theme or translation"));
            }
            // at least one type was valid, let's guess what it really is
            if (validAsExtension) {
                return bluebird_1.default.resolve(undefined);
            }
            else if (validAsTranslation) {
                // it's unlikely we would mistake a theme for a translation since it would require
                // it to contain a directory named like a iso language code including json files.
                return bluebird_1.default.resolve("translation");
            }
            else {
                return bluebird_1.default.resolve("theme");
            }
        });
    }
    else if (info.type === "theme") {
        return validateTheme(extPath).then(() => bluebird_1.default.resolve("theme"));
    }
    else if (info.type === "translation") {
        return validateTranslation(extPath).then(() => bluebird_1.default.resolve("translation"));
    }
    else {
        return validateExtension(extPath).then(() => bluebird_1.default.resolve(undefined));
    }
}
function installExtension(api, archivePath, info) {
    const extensionsPath = path.join((0, getVortexPath_1.default)("userData"), "plugins");
    let destPath;
    const tempPath = path.join(extensionsPath, path.basename(archivePath)) + ".installing";
    const Zip = require("node-7z");
    const extractor = new Zip();
    let fullInfo = info || {};
    let type;
    let extName;
    return (extractor
        .extractFull(archivePath, tempPath, { ssc: false }, () => undefined, () => undefined)
        .then(() => validateInstall(tempPath, info).then((guessedType) => (type = guessedType)))
        .then(() => (0, util_2.readExtensionInfo)(tempPath, false, info))
        // merge the caller-provided info with the stuff parsed from the info.json file because there
        // is data we may only know at runtime (e.g. the modId)
        .then((manifestInfo) => {
        fullInfo = Object.assign(Object.assign({}, (manifestInfo.info || {})), fullInfo);
        const res = {
            id: manifestInfo.id,
            info: fullInfo,
        };
        if (res.info.type === undefined) {
            res.info.type = type;
        }
        return res;
    })
        .catch({ code: "ENOENT" }, () => info !== undefined
        ? bluebird_1.default.resolve({
            id: path.basename(archivePath, path.extname(archivePath)),
            info,
        })
        : bluebird_1.default.reject(new Error("not an extension, info.json missing")))
        .then((manifestInfo) => 
    // update the manifest on disc, in case we had new info from the caller
    fs
        .writeFileAsync(path.join(tempPath, "info.json"), JSON.stringify(manifestInfo.info, undefined, 2))
        .then(() => manifestInfo))
        .then((manifestInfo) => {
        extName = manifestInfo.id;
        const dirName = sanitize(manifestInfo.id);
        destPath = path.join(extensionsPath, dirName);
        if (manifestInfo.info.type !== undefined) {
            type = manifestInfo.info.type;
        }
        return removeOldVersion(api, manifestInfo.info);
    })
        // we don't actually expect the output directory to exist
        .then(() => fs.removeAsync(destPath))
        .then(() => fs.renameAsync(tempPath, destPath))
        .then(() => {
        if (type === "translation") {
            return fs
                .readdirAsync(destPath)
                .map((entry) => fs
                .statAsync(path.join(destPath, entry))
                .then((stat) => ({ name: entry, stat })))
                .then(() => null);
        }
        else if (type === "theme") {
            return bluebird_1.default.resolve();
        }
        else {
            // don't install dependencies for extensions that are already loaded because
            // doing so could cause an exception
            if (api.getLoadedExtensions().find((ext) => ext.name === extName) ===
                undefined) {
                return installExtensionDependencies(api, destPath);
            }
            else {
                return bluebird_1.default.resolve();
            }
        }
    })
        .catch(CustomErrors_1.DataInvalid, (err) => rimrafAsync(tempPath, { glob: false }).then(() => api.showErrorNotification("Invalid Extension", err, {
        allowReport: false,
        message: archivePath,
    })))
        .catch((err) => rimrafAsync(tempPath, { glob: false }).then(() => bluebird_1.default.reject(err))));
}
exports.default = installExtension;
