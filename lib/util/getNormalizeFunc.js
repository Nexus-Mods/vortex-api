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
exports.makeNormalizingDict = makeNormalizingDict;
const bluebird_1 = __importDefault(require("bluebird"));
// we don't want errors from this function to be reported to the user, there is
// sensible fallbacks for if fs calls fail
const fsOrig = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const util_1 = require("./util");
function genNormalizeSeparator(func) {
    const sepRE = /\//g;
    return (input) => func(input).replace(sepRE, path.sep);
}
function genNormalizeUnicode(func) {
    return (input) => func(input).normalize();
}
function genNormalizeRelative(func) {
    return (input) => path.normalize(func(input)).replace(/[\\/]$/, "");
}
function genNormalizeCase() {
    return (input) => input.toUpperCase();
}
function isCaseSensitiveFailed(testPath, reason) {
    if (testPath === undefined) {
        return bluebird_1.default.resolve(process.platform !== "win32");
    }
    const parentPath = path.dirname(testPath);
    if (parentPath === testPath) {
        // on windows, assume case insensitive, everywhere else: case sensitive
        return bluebird_1.default.resolve(process.platform !== "win32");
    }
    else {
        return isCaseSensitive(parentPath);
    }
}
function isCaseSensitive(testPath) {
    return bluebird_1.default.resolve(fsOrig.readdir(testPath))
        .then((files) => {
        // we need a filename that contains letters with case variants, otherwise we can't
        // determine case sensitivity
        const fileName = files.find((file) => file !== file.toLowerCase() || file !== file.toUpperCase());
        if (fileName === undefined) {
            return null;
        }
        // to find out if case sensitive, stat the file itself and the upper and lower case variants.
        // if they are all the same file, it's case insensitive
        return bluebird_1.default.map([fileName, fileName.toLowerCase(), fileName.toUpperCase()], (file) => bluebird_1.default.resolve(fsOrig.stat(path.join(testPath, file))).reflect());
    })
        .then((stats) => {
        if (stats === null) {
            return isCaseSensitiveFailed(testPath, "Not found");
        }
        if (stats[1].isFulfilled() &&
            stats[2].isFulfilled() &&
            stats[0].value().ino === stats[1].value().ino &&
            stats[0].value().ino === stats[2].value().ino) {
            return false;
        }
        else {
            return true;
        }
    })
        .catch((err) => {
        return isCaseSensitiveFailed(testPath, err.message);
    });
}
/**
 * determine a function to normalize file names for the
 * file system in the specified path.
 * The second parameter can be used to specify how strict the normalization is.
 * Ideally you want everything but that makes the function slower and this function may
 * be called a lot. Oftentimes the source of the input path already guarantees some
 * normalization anyway.
 *
 * @param {string} path
 * @returns {Promise<Normalize>}
 */
function getNormalizeFunc(testPath, parameters) {
    if (parameters === undefined) {
        parameters = {};
    }
    const stackErr = new Error();
    return isCaseSensitive(testPath)
        .then((caseSensitive) => {
        let funcOut = caseSensitive
            ? (input) => input
            : genNormalizeCase();
        if (parameters["separators"] !== false && process.platform === "win32") {
            funcOut = genNormalizeSeparator(funcOut);
        }
        if (parameters["unicode"] !== false) {
            funcOut = genNormalizeUnicode(funcOut);
        }
        if (parameters["relative"] !== false) {
            funcOut = genNormalizeRelative(funcOut);
        }
        return funcOut;
    })
        .catch((err) => {
        if (err.code === "ENOENT") {
            const parent = path.dirname(testPath);
            return parent === testPath
                ? bluebird_1.default.reject((0, util_1.restackErr)(err, stackErr))
                : getNormalizeFunc(parent);
        }
        else {
            return bluebird_1.default.reject((0, util_1.restackErr)(err, stackErr));
        }
    });
}
class NormalizationHandler {
    constructor(init, normalize) {
        this.normalize = normalize;
        this.keymap = Object.keys(init).reduce((prev, origKey) => {
            prev[normalize(origKey)] = origKey;
            return prev;
        }, {});
    }
    get(target, key) {
        let res;
        if (typeof key === "string") {
            const remapKey = this.keymap[this.normalize(key)];
            res = target[remapKey];
        }
        else {
            res = target[key];
        }
        if (res instanceof Object && !Array.isArray(res) && !(res instanceof Set)) {
            return new Proxy(res, new NormalizationHandler(res, this.normalize));
        }
        else {
            return res;
        }
    }
    deleteProperty(target, key) {
        if (typeof key === "string") {
            const remapKey = this.keymap[this.normalize(key)];
            delete target[remapKey];
        }
        else {
            delete target[key];
        }
        return true;
    }
    has(target, key) {
        if (typeof key === "string") {
            const remapKey = this.keymap[this.normalize(key)];
            return remapKey in target;
        }
        else {
            return key in target;
        }
    }
    set(target, key, value) {
        if (typeof key === "string") {
            this.keymap[this.normalize(key)] = key;
        }
        target[key] = value;
        return true;
    }
}
/**
 * creates a proxy for a dictionary that makes all key access normalized with the specified
 * normalization function
 */
function makeNormalizingDict(input, normalize) {
    return new Proxy(input, new NormalizationHandler(input, normalize));
}
exports.default = getNormalizeFunc;
