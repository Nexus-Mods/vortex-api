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
exports.Overlayable = exports.Content = exports.Campaign = exports.Section = exports.INVALID_FILENAME_CHARACTERS = exports.INVALID_FILENAME_RE = exports.INVALID_FILEPATH_CHARACTERS = void 0;
exports.countIf = countIf;
exports.sum = sum;
exports.setdefault = setdefault;
exports.midClip = midClip;
exports.isNullOrWhitespace = isNullOrWhitespace;
exports.truthy = truthy;
exports.objDiff = objDiff;
exports.restackErr = restackErr;
exports.makeQueue = makeQueue;
exports.spawnSelf = spawnSelf;
exports.bytesToString = bytesToString;
exports.largeNumToString = largeNumToString;
exports.pad = pad;
exports.timeToString = timeToString;
exports.encodeHTML = encodeHTML;
exports.decodeHTML = decodeHTML;
exports.getAllPropertyNames = getAllPropertyNames;
exports.isChildPath = isChildPath;
exports.isReservedDirectory = isReservedDirectory;
exports.ciEqual = ciEqual;
exports.sanitizeCSSId = sanitizeCSSId;
exports.deBOM = deBOM;
exports.escapeRE = escapeRE;
exports.timeout = timeout;
exports.delay = delay;
exports.isFilenameValid = isFilenameValid;
exports.sanitizeFilename = sanitizeFilename;
exports.isPathValid = isPathValid;
exports.isMajorDowngrade = isMajorDowngrade;
exports.flatten = flatten;
exports.toPromise = toPromise;
exports.makeUnique = makeUnique;
exports.makeUniqueByKey = makeUniqueByKey;
exports.withTmpDir = withTmpDir;
exports.unique = unique;
exports.delayed = delayed;
exports.toBlue = toBlue;
exports.replaceRecursive = replaceRecursive;
exports.semverCoerce = semverCoerce;
exports.batchDispatch = batchDispatch;
exports.isFunction = isFunction;
exports.wrapExtCBAsync = wrapExtCBAsync;
exports.wrapExtCBSync = wrapExtCBSync;
exports.nexusModsURL = nexusModsURL;
exports.filteredEnvironment = filteredEnvironment;
exports.parseBool = parseBool;
exports.makeOverlayableDictionary = makeOverlayableDictionary;
/* eslint-disable */
const constants_1 = require("../extensions/nexus_integration/constants");
const CustomErrors_1 = require("./CustomErrors");
const getVortexPath_1 = __importDefault(require("./getVortexPath"));
const log_1 = require("./log");
const bluebird_1 = __importDefault(require("bluebird"));
const child_process_1 = require("child_process");
const _ = __importStar(require("lodash"));
const path = __importStar(require("path"));
const process = __importStar(require("process"));
const redux_act_1 = require("redux-act");
const semver = __importStar(require("semver"));
const tmp = __importStar(require("tmp"));
const dequal_1 = require("dequal");
/**
 * count the elements in an array for which the predicate matches
 *
 * @export
 * @template T
 * @param {T[]} container
 * @param {(value: T) => boolean} predicate
 * @returns {number}
 */
function countIf(container, predicate) {
    return container.reduce((count, value) => {
        return count + (predicate(value) ? 1 : 0);
    }, 0);
}
/**
 * calculate the sum of the elements of an array
 *
 * @export
 * @param {number[]} container
 * @returns {number}
 */
function sum(container) {
    return container.reduce((total, value) => total + value, 0);
}
/**
 * like the python setdefault function:
 * returns the attribute "key" from "obj". If that attribute doesn't exist
 * on obj, it will be set to the default value and that is returned.
 */
function setdefault(obj, key, def) {
    if (!obj.hasOwnProperty(key)) {
        obj[key] = def;
    }
    return obj[key];
}
/**
 * An ellipsis ("this text is too lo...") function. Usually these
 * functions clip the text at the end but often (i.e. when
 * clipping file paths) the end of the text is the most interesting part,
 * so this function clips the middle part of the input.
 * @param input the input text
 * @param maxLength the maximum number of characters (including ...)
 * @return the shortened text
 */
function midClip(input, maxLength) {
    if (input.length <= maxLength) {
        return input;
    }
    const half = maxLength / 2;
    return (input.substr(0, half - 2) + "..." + input.substr(input.length - (half - 1)));
}
/**
 * test if a string is null, undefined or consists only of whitespaces
 * @param {string} check the string to check
 */
function isNullOrWhitespace(check) {
    return !check || check.trim().length === 0;
}
/**
 * return whether the specified value is "truthy" (not one of
 * these: undefined, null, 0, -0, NaN "")
 *
 * Obviously one could just do "if (val)" but js noobs
 * may not be aware what values that accepts exactly and whether that was
 * intentional. This is more explicit.
 */
function truthy(val) {
    return !!val;
}
// Helper to check for plain objects (not null, not array)
function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}
/**
 * return the delta between two objects
 * @param lhs the left, "before", object
 * @param rhs the right, "after", object
 * @param skip properties to skip in the diff, string array
 */
function objDiff(lhs, rhs, skip = []) {
    // The current objDiff implementation only performs deep diffs between plain objects.
    //  Arrays and other non-plain-object inputs are treated as non-comparable types.
    //  - If both inputs are the same reference or deeply equal arrays, objDiff returns an empty object `{}`.
    //  - If arrays differ, objDiff still returns `{}` instead of describing element-level changes.
    //  - If one input is an array and the other is an object (mismatched types), objDiff returns `{}`
    //    to indicate no diff is computed between incompatible structures.
    //  - Nested arrays ARE deeply compared if they are properties of plain objects.
    // This test ensures objDiff handles array inputs gracefully without throwing or misbehaving.
    const res = {};
    const skipArray = Array.isArray(skip) ? skip : [];
    if (isPlainObject(lhs) && isPlainObject(rhs)) {
        for (const key of Object.keys(lhs)) {
            if (skipArray.includes(key))
                continue;
            if (!(key in rhs)) {
                res["-" + key] = lhs[key];
                continue;
            }
            const lhsVal = lhs[key];
            const rhsVal = rhs[key];
            if (Array.isArray(lhsVal) && Array.isArray(rhsVal)) {
                if (!(0, dequal_1.dequal)(lhsVal, rhsVal)) {
                    res["-" + key] = lhsVal;
                    res["+" + key] = rhsVal;
                }
            }
            else if (isPlainObject(lhsVal) && isPlainObject(rhsVal)) {
                const sub = objDiff(lhsVal, rhsVal, skip);
                if (Object.keys(sub).length > 0) {
                    res[key] = sub;
                }
            }
            else if (!(0, dequal_1.dequal)(lhsVal, rhsVal)) {
                res["-" + key] = lhsVal;
                res["+" + key] = rhsVal;
            }
        }
        for (const key of Object.keys(rhs)) {
            if (skipArray.includes(key))
                continue;
            if (!(key in lhs)) {
                res["+" + key] = rhs[key];
            }
        }
    }
    return res;
}
function restackErr(error, stackErr) {
    if (error === null || typeof error !== "object") {
        return error;
    }
    const oldGetStack = error.stack;
    // resolve the stack at the last possible moment because stack is actually a getter
    // that will apply expensive source mapping when called
    Object.defineProperty(error, "stack", {
        get: () => {
            var _a;
            return error.message +
                "\n" +
                oldGetStack +
                "\nPrior Context:\n" +
                ((_a = stackErr.stack) !== null && _a !== void 0 ? _a : "").split("\n").slice(1).join("\n");
        },
        set: () => null,
    });
    return error;
}
/**
 * create a "queue".
 * Returns an enqueue function such that that the callback passed to it
 * will be called only after everything before it in the queue is finished
 * and with the promise that nothing else in the queue is run in parallel.
 */
function makeQueue() {
    const pending = [];
    let processing;
    const tick = () => {
        processing = pending.shift();
        if (processing !== undefined) {
            processing
                .func()
                .then(processing.resolve)
                .catch((err) => processing.reject(restackErr(err, processing.stackErr)))
                .finally(() => {
                tick();
            });
        }
    };
    return (func, tryOnly) => {
        const stackErr = new Error();
        return new bluebird_1.default((resolve, reject) => {
            if (tryOnly && processing !== undefined) {
                return resolve();
            }
            pending.push({ func, stackErr, resolve, reject });
            if (processing === undefined) {
                tick();
            }
        });
    };
}
/**
 * spawn this application itself
 * @param args
 */
function spawnSelf(args) {
    if (process.execPath.endsWith("electron.exe")) {
        // development version
        args = [(0, getVortexPath_1.default)("package")].concat(args);
    }
    (0, child_process_1.spawn)(process.execPath, args, {
        detached: true,
        stdio: "ignore",
    })
        .on("error", (err) => {
        (0, log_1.log)("error", "Failed to spawn self", {
            execPath: process.execPath,
            args,
            error: err.message,
        });
    })
        .unref();
}
const BYTE_LABELS = ["B", "KB", "MB", "GB", "TB"];
function bytesToString(bytes) {
    let labelIdx = 0;
    while (bytes >= 1024) {
        ++labelIdx;
        bytes /= 1024;
    }
    try {
        return (bytes.toFixed(Math.max(0, labelIdx - 1)) + " " + BYTE_LABELS[labelIdx]);
    }
    catch (err) {
        return "???";
    }
}
const NUM_LABELS = ["", "K", "M"];
function largeNumToString(num) {
    let labelIdx = 0;
    while (num >= 1000 && labelIdx < NUM_LABELS.length - 1) {
        ++labelIdx;
        num /= 1000;
    }
    try {
        return num.toFixed(Math.max(0, labelIdx - 1)) + " " + NUM_LABELS[labelIdx];
    }
    catch (err) {
        return "???";
    }
}
function pad(value, padding, width) {
    const temp = `${value}`;
    return temp.length >= width
        ? temp
        : new Array(width - temp.length + 1).join(padding) + temp;
}
function timeToString(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60) - hours * 60;
    seconds = Math.floor(seconds - minutes * 60 - hours * 3600);
    if (hours > 0) {
        return `${pad(hours, "0", 2)}:${pad(minutes, "0", 2)}:${pad(seconds, "0", 2)}`;
    }
    else {
        return `${pad(minutes, "0", 2)}:${pad(seconds, "0", 2)}`;
    }
}
let convertDiv;
function encodeHTML(input) {
    if (input === undefined) {
        return undefined;
    }
    if (convertDiv === undefined) {
        convertDiv = document.createElement("div");
    }
    convertDiv.innerText = input;
    return convertDiv.innerHTML;
}
function decodeHTML(input) {
    if (input === undefined) {
        return undefined;
    }
    if (convertDiv === undefined) {
        convertDiv = document.createElement("div");
    }
    convertDiv.innerHTML = input;
    return convertDiv.innerText;
}
const PROP_BLACKLIST = [
    "constructor",
    "__defineGetter__",
    "__defineSetter__",
    "hasOwnProperty",
    "__lookupGetter__",
    "__lookupSetter__",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toString",
    "valueOf",
    "__proto__",
    "toLocaleString",
];
function getAllPropertyNames(obj) {
    let props = [];
    while (obj !== null) {
        const objProps = Object.getOwnPropertyNames(obj);
        // don't want the properties of the "base" object
        if (objProps.indexOf("__defineGetter__") !== -1) {
            break;
        }
        props = props.concat(objProps);
        obj = Object.getPrototypeOf(obj);
    }
    return Array.from(new Set(_.difference(props, PROP_BLACKLIST)));
}
/**
 * test if a directory is a sub-directory of another one
 * @param child path of the presumed sub-directory
 * @param parent path of the presumed parent directory
 */
function isChildPath(child, parent, normalize) {
    if (normalize === undefined) {
        normalize = (input) => process.platform === "win32"
            ? path.normalize(input.toUpperCase())
            : path.normalize(input);
    }
    const childNorm = normalize(child);
    const parentNorm = normalize(parent);
    if (childNorm === parentNorm) {
        return false;
    }
    const tokens = parentNorm.split(path.sep).filter((token) => token.length > 0);
    const childTokens = childNorm
        .split(path.sep)
        .filter((token) => token.length > 0);
    return tokens.every((token, idx) => childTokens[idx] === token);
}
function isReservedDirectory(dirPath, normalize) {
    if (normalize === undefined) {
        normalize = (input) => process.platform === "win32"
            ? path.normalize(input.toUpperCase())
            : path.normalize(input);
    }
    const normalized = normalize(dirPath);
    const trimmed = normalized.endsWith(path.sep)
        ? normalized.slice(0, -1)
        : normalized;
    const vortexAppData = (0, getVortexPath_1.default)("userData");
    const invalidDirs = [
        "blob_storage",
        "Cache",
        "Code Cache",
        "Dictionaries",
        "extensions",
        "GPUCache",
        "metadb",
        "Partitions",
        "plugins",
        "Session Storage",
        "shared_proto_db",
        "state.v2",
        "temp",
        "VideoDecodeStats",
    ].map((inv) => normalize(path.join(vortexAppData, inv)));
    invalidDirs.push(normalize(vortexAppData));
    return invalidDirs.includes(trimmed);
}
function ciEqual(lhs, rhs, locale) {
    return ((lhs !== null && lhs !== void 0 ? lhs : "").localeCompare(rhs !== null && rhs !== void 0 ? rhs : "", locale, { sensitivity: "accent" }) ===
        0);
}
const sanitizeRE = /[ .#()]/g;
/**
 * take any input string and sanitize it into a valid css id
 */
function sanitizeCSSId(input) {
    let res = input.toLowerCase().replace(sanitizeRE, "-");
    if (res.endsWith("-")) {
        res += "_";
    }
    return res;
}
/**
 * remove the BOM from the input string. doesn't do anything if there is none.
 */
function deBOM(input) {
    return input.replace(/^\uFEFF/, "");
}
/**
 * escape a string for use in a regular expression
 * @param string
 */
function escapeRE(input) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
/**
 * set a timeout for a promise. When the timeout expires the promise returned by this
 * resolves with a value of undefined (or throws a TimeoutError).
 * @param prom the promise that should be wrapped
 * @param delayMS the time in milliseconds after which this should return
 * @param options options detailing how this timeout acts
 */
function timeout(prom, delayMS, options) {
    let timedOut = false;
    let resolved = false;
    const doTimeout = () => {
        timedOut = true;
        if ((options === null || options === void 0 ? void 0 : options.throw) === true) {
            return bluebird_1.default.reject(new CustomErrors_1.TimeoutError());
        }
        else {
            return undefined;
        }
    };
    const onTimeExpired = () => {
        if (resolved) {
            return bluebird_1.default.resolve();
        }
        if ((options === null || options === void 0 ? void 0 : options.queryContinue) !== undefined) {
            return options === null || options === void 0 ? void 0 : options.queryContinue().then((requestContinue) => {
                if (requestContinue) {
                    delayMS *= 2;
                    return bluebird_1.default.delay(delayMS).then(onTimeExpired);
                }
                else {
                    return doTimeout();
                }
            });
        }
        else {
            return doTimeout();
        }
    };
    return bluebird_1.default.race([
        prom,
        bluebird_1.default.delay(delayMS).then(onTimeExpired),
    ]).finally(() => {
        resolved = true;
        if (timedOut && (options === null || options === void 0 ? void 0 : options.cancel) === true) {
            prom.cancel();
        }
    });
}
/**
 * wait for the specified number of milliseconds before resolving the promise.
 * Bluebird has this feature as Promise.delay but when using es6 default promises this can be used
 */
function delay(timeoutMS) {
    return new bluebird_1.default((resolve) => {
        setTimeout(resolve, timeoutMS);
    });
}
/**
 * characters invalid in a file path
 */
const INVALID_FILEPATH_CHARACTERS = process.platform === "win32" ? ["/", "?", "*", ":", "|", '"', "<", ">"] : [];
exports.INVALID_FILEPATH_CHARACTERS = INVALID_FILEPATH_CHARACTERS;
/**
 * characters invalid in a file name
 */
const INVALID_FILENAME_CHARACTERS = [].concat(INVALID_FILEPATH_CHARACTERS, path.sep);
exports.INVALID_FILENAME_CHARACTERS = INVALID_FILENAME_CHARACTERS;
const INVALID_FILENAME_RE = new RegExp(`[${escapeRE(INVALID_FILENAME_CHARACTERS.join(""))}]`, "g");
exports.INVALID_FILENAME_RE = INVALID_FILENAME_RE;
const RESERVED_NAMES = new Set(process.platform === "win32"
    ? [
        "CON",
        "PRN",
        "AUX",
        "NUL",
        "COM1",
        "COM2",
        "COM3",
        "COM4",
        "COM5",
        "COM6",
        "COM7",
        "COM8",
        "COM9",
        "LPT1",
        "LPT2",
        "LPT3",
        "LPT4",
        "LPT5",
        "LPT6",
        "LPT7",
        "LPT8",
        "LPT9",
        "..",
        ".",
    ]
    : ["..", "."]);
function isFilenameValid(input) {
    if (input.length === 0) {
        return false;
    }
    if (RESERVED_NAMES.has(path.basename(input, path.extname(input)).toUpperCase())) {
        return false;
    }
    if (process.platform === "win32" &&
        (input.endsWith(" ") || input.endsWith("."))) {
        // Although Windows' underlying file system may support
        //  filenames/dirnames ending with '.' and ' ', the win shell and UI does not.
        return false;
    }
    return input.search(INVALID_FILENAME_RE) < 0;
}
function isDriveLetter(input) {
    return process.platform === "win32" && input.length === 2 && input[1] === ":";
}
/**
 * encodes a string so it can safely be used as a filename
 */
function sanitizeFilename(input) {
    if (input.length === 0) {
        return "_empty_";
    }
    if (RESERVED_NAMES.has(path.basename(input, path.extname(input)).toUpperCase())) {
        return path.join(path.dirname(input), "_reserved_" + path.basename(input));
    }
    if (process.platform === "win32" &&
        (input.endsWith(" ") || input.endsWith("."))) {
        // Although Windows' underlying file system may support
        //  filenames/dirnames ending with '.' and ' ', the win shell and UI does not.
        return input + "_";
    }
    return input.replace(INVALID_FILENAME_RE, (invChar) => `_${invChar.charCodeAt(0)}_`);
}
const trimTrailingSep = new RegExp(`\\${path.sep}*$`, "g");
function isPathValid(input, allowRelative = false) {
    if (process.platform === "win32" && input.startsWith("\\\\")) {
        // UNC path, skip the leading \\ for validation
        input = input.slice(2);
    }
    else if (process.platform !== "win32" && input.startsWith("/")) {
        input = input.slice(1);
    }
    let split = input.replace(trimTrailingSep, "").split(path.sep);
    if (allowRelative) {
        split = split.filter((segment) => segment !== "." && segment !== "..");
    }
    const found = split.find((segment, idx) => {
        if (idx === 0 && isDriveLetter(segment)) {
            return false;
        }
        return !isFilenameValid(segment);
    });
    return found === undefined;
}
// test if the running version is a major downgrade (downgrading by a major or minor version,
// everything except a patch) compared to what was running last
function isMajorDowngrade(previous, current) {
    const majorL = semver.major(previous);
    const majorR = semver.major(current);
    if (majorL !== majorR) {
        return majorL > majorR;
    }
    else {
        return semver.minor(previous) > semver.minor(current);
    }
}
/**
 * turn an object into a flat one meaning all values are PODs, no nested objects/arrays
 * @param obj the input object
 * @param options parameters controlling the flattening process
 */
function flatten(obj, options) {
    if (options === undefined) {
        options = {};
    }
    options.separator = options.separator || ".";
    options.baseKey = options.baseKey || [];
    return flattenInner(obj, options.baseKey, [], options);
}
function flattenInner(obj, key, objStack, options) {
    if (obj.length !== undefined && obj.length > 10) {
        return { [key.join(options.separator)]: "<long array cut>" };
    }
    const getKeys = options.nonEnumerable
        ? Object.getOwnPropertyNames
        : Object.keys;
    return getKeys(obj).reduce((prev, attr) => {
        if (objStack.indexOf(obj[attr]) !== -1) {
            return prev;
        }
        if (typeof obj[attr] === "object" && obj[attr] !== null) {
            prev = Object.assign(Object.assign({}, prev), flattenInner(obj[attr], [...key, attr], [].concat(objStack, [obj[attr]]), options));
        }
        else {
            // POD
            prev[[...key, attr].join(options.separator)] = obj[attr];
        }
        return prev;
    }, {});
}
function toPromise(func) {
    return new bluebird_1.default((resolve, reject) => {
        const cb = (err, res) => {
            if (err !== null && err !== undefined) {
                return reject(err);
            }
            else {
                return resolve(res);
            }
        };
        func(cb);
    });
}
function makeUnique(input) {
    return Array.from(new Set(input));
}
/**
 * create a list with only "unique" items, using a key function to determine uniqueness.
 * in case of collisions the last item with a key is kept
 * @param input the input list of items
 * @param key key function
 * @returns a list with duplicates removed
 */
function makeUniqueByKey(input, key) {
    return Object.values(input.reduce((prev, item) => {
        prev[key(item)] = item;
        return prev;
    }, {}));
}
function withTmpDir(cb) {
    return new Promise((resolve, reject) => {
        tmp.dir({ unsafeCleanup: true }, (err, tmpPath, cleanup) => {
            if (err !== null) {
                return reject(err);
            }
            else {
                cb(tmpPath)
                    .then((out) => {
                    resolve(out);
                })
                    .catch((tmpErr) => {
                    reject(tmpErr);
                })
                    .finally(() => {
                    try {
                        cleanup();
                    }
                    catch (err) {
                        // cleanup failed
                        (0, log_1.log)("warn", "Failed to clean up temp file", { tmpPath });
                    }
                });
            }
        });
    });
}
function unique(input, keyFunc) {
    const keys = new Set();
    return input.reduce((prev, iter) => {
        const key = keyFunc === null || keyFunc === void 0 ? void 0 : keyFunc(iter);
        if (keys.has(key)) {
            return prev;
        }
        keys.add(key);
        return [].concat(prev, iter);
    }, []);
}
function delayed(delayMS) {
    return new Promise((resolve) => {
        setTimeout(resolve, delayMS);
    });
}
function toBlue(func) {
    return (...args) => bluebird_1.default.resolve(func(...args));
}
function replaceRecursive(input, from, to) {
    if (input === undefined || input === null || Array.isArray(input)) {
        return input;
    }
    return Object.keys(input).reduce((prev, key) => {
        if (input[key] === from) {
            prev[key] = to;
        }
        else if (typeof input[key] === "object") {
            prev[key] = replaceRecursive(input[key], from, to);
        }
        else {
            prev[key] = input[key];
        }
        return prev;
    }, {});
}
function removeLeadingZeros(input) {
    if (!input) {
        return input;
    }
    return input
        .split(".")
        .map((seg) => seg.replace(/^0+(\d+$)/, "$1"))
        .join(".");
}
function semverCoerce(input, options) {
    let res = semver.coerce(removeLeadingZeros(input), options);
    if (res === null) {
        res =
            input === ""
                ? new semver.SemVer("0.0.0")
                : new semver.SemVer(`0.0.0-${input}`);
    }
    return res;
}
// Queue for managing large batch dispatches to prevent interleaving
let batchQueue = Promise.resolve();
// Cache chunk sizes by action type to avoid repeated calculation overhead
const chunkSizeCache = new Map();
/**
 * Calculate appropriate chunk size based on estimated payload size
 * Uses caching to minimize overhead for repeated action types
 *
 * Electron IPC has practical limits around 10-20MB of JSON payload
 * We target ~6MB chunks to be conservative and allow for JSON overhead
 */
function calculateChunkSize(actions) {
    var _a;
    if (actions.length === 0) {
        return 100;
    }
    // Try to get cached chunk size for this action type
    const firstActionType = (_a = actions[0]) === null || _a === void 0 ? void 0 : _a.type;
    if (firstActionType && chunkSizeCache.has(firstActionType)) {
        return chunkSizeCache.get(firstActionType);
    }
    // Sample first few actions to estimate average size
    const sampleSize = Math.min(10, actions.length);
    let totalSize = 0;
    for (let i = 0; i < sampleSize; i++) {
        try {
            // Estimate size via JSON serialization
            totalSize += JSON.stringify(actions[i]).length;
        }
        catch (err) {
            // If serialization fails, use conservative estimate
            (0, log_1.log)("warn", "failed to estimate action size for chunking", err);
            return 50;
        }
    }
    const avgActionSize = totalSize / sampleSize;
    // Target chunk size of ~6MB (in characters, roughly equivalent to bytes for ASCII)
    const TARGET_CHUNK_SIZE_MB = 6;
    const TARGET_CHUNK_SIZE_CHARS = TARGET_CHUNK_SIZE_MB * 1024 * 1024;
    // Calculate how many actions fit in target size
    const calculatedChunkSize = Math.floor(TARGET_CHUNK_SIZE_CHARS / avgActionSize);
    // Clamp between reasonable bounds
    // Min 10: Avoid too many chunks for very large actions
    // Max 1000: Avoid huge chunks if actions are tiny
    const chunkSize = Math.max(10, Math.min(1000, calculatedChunkSize));
    // Cache the result for this action type
    if (firstActionType) {
        chunkSizeCache.set(firstActionType, chunkSize);
    }
    if (process.env.NODE_ENV === "development") {
        (0, log_1.log)("debug", "calculated dynamic chunk size", {
            actionType: firstActionType,
            totalActions: actions.length,
            avgActionSizeKB: (avgActionSize / 1024).toFixed(2),
            chunkSize,
            estimatedChunkSizeMB: ((chunkSize * avgActionSize) /
                (1024 * 1024)).toFixed(2),
            cached: false,
        });
    }
    return chunkSize;
}
// TODO: support thunk actions?
function batchDispatch(store, actions) {
    var _a;
    const dispatch = (_a = store["dispatch"]) !== null && _a !== void 0 ? _a : store;
    if (actions.length === 0) {
        return;
    }
    // Use dynamic chunk sizing based on action payload size (with caching)
    const chunkSize = calculateChunkSize(actions);
    if (actions.length <= chunkSize) {
        // Small batch, dispatch normally without queuing overhead
        dispatch((0, redux_act_1.batch)(actions));
    }
    else {
        // Large batch, chunk it with queuing to prevent interleaving
        // Queue ensures all chunks from this batch complete before next batch starts
        batchQueue = batchQueue
            .then(() => {
            if (process.env.NODE_ENV === "development") {
                (0, log_1.log)("debug", "dispatching chunked batch", {
                    total: actions.length,
                    chunkSize,
                    chunks: Math.ceil(actions.length / chunkSize),
                });
            }
            for (let i = 0; i < actions.length; i += chunkSize) {
                const chunk = actions.slice(i, i + chunkSize);
                dispatch((0, redux_act_1.batch)(chunk));
            }
        })
            .catch((err) => {
            (0, log_1.log)("error", "failed to dispatch chunked batch", err);
        });
    }
}
function isFunction(functionToCheck) {
    return (functionToCheck && {}.toString.call(functionToCheck) === "[object Function]");
}
/**
 * wrap a callback provided by an extension such that we don't allow reports
 * for that extension and display the extension name if possible
 * @param cb the callback to wrap
 * @param ext name of the extension that provided the callback
 * @returns a new callback with an identical call signature
 *
 * @note As a side-effect this also ensures promises returned from the extension
 *       are bluebird extensions.
 *       This should allow extension authors to use native extension without
 *       causing surprising bugs
 */
function wrapExtCBAsync(cb, extInfo) {
    return (...args) => {
        var _a, _b;
        try {
            return (_b = (_a = bluebird_1.default.resolve(cb(...args))).catch) === null || _b === void 0 ? void 0 : _b.call(_a, (err) => {
                if (typeof err === "string") {
                    err = new Error(err);
                }
                if (extInfo !== undefined && !extInfo.official) {
                    err.allowReport = false;
                    err.extensionName = extInfo.name;
                }
                return Promise.reject(err);
            });
        }
        catch (err) {
            err.allowReport = false;
            if (extInfo !== undefined && !extInfo.official) {
                err.extensionName = extInfo.name;
            }
            return bluebird_1.default.reject(err);
        }
    };
}
function wrapExtCBSync(cb, extInfo) {
    return (...args) => {
        try {
            return cb(...args);
        }
        catch (err) {
            if (extInfo !== undefined && !extInfo.official) {
                err.allowReport = false;
                err.extensionName = extInfo.name;
            }
            throw err;
        }
    };
}
/**
 * Represents the different sections available in the application and is used to construct URLs for specific subdomains.
 */
var Section;
(function (Section) {
    Section[Section["Mods"] = 0] = "Mods";
    Section[Section["Collections"] = 1] = "Collections";
    Section[Section["Users"] = 2] = "Users";
})(Section || (exports.Section = Section = {}));
/**
 * Represents the available campaign types for tracking user interactions.
 * @property BuyPremium - Campaign for premium subscription advertisements.
 * @property GeneralNavigation - Campaign for general navigation events.
 */
var Campaign;
(function (Campaign) {
    Campaign["BuyPremium"] = "buy_premium";
    Campaign["GeneralNavigation"] = "general_navigation";
})(Campaign || (exports.Campaign = Campaign = {}));
/**
 * Represents the different types of content placements for advertisements within the application.
 * @property HeaderAd - Ad displayed in the titlebar.
 * @property DownloadsBannerAd - Banner shown at top of downloads page.
 * @property CollectionsDownloadModModal - Modal shown when downloading a mod from a collection.
 * @property DashboardDashletAd - Advertisement displayed in a dashboard dashlet.
 * @property CollectionsDownloadAd - Advertisement shown during collection downloads.
 * @property SettingsDownloadAd - Advertisement displayed in the settings download section.
 */
var Content;
(function (Content) {
    Content["HeaderAd"] = "header_ad";
    Content["DownloadsBannerAd"] = "downloads_banner_ad";
    Content["DownloadModModal"] = "downloadmod_modal";
    Content["DashboardDashletAd"] = "dashboard_dashlet_ad";
    Content["CollectionsDownloadAd"] = "collections_download_ad";
    Content["SettingsDownloadAd"] = "settings_download_ad";
})(Content || (exports.Content = Content = {}));
function sectionHost(section) {
    switch (section) {
        case Section.Collections:
            return `${constants_1.NEXUS_NEXT_SUBDOMAIN}.${constants_1.NEXUS_DOMAIN}`;
        case Section.Users:
            return `${constants_1.NEXUS_USERS_SUBDOMAIN}.${constants_1.NEXUS_DOMAIN}`;
        default:
            return `${constants_1.NEXUS_FLAMEWORK_SUBDOMAIN}.${constants_1.NEXUS_DOMAIN}`;
    }
}
function nexusModsURL(reqPath, options) {
    // Build the base URL
    const url = new URL(`${constants_1.NEXUS_PROTOCOL}//${sectionHost(options === null || options === void 0 ? void 0 : options.section)}`);
    // Add path segments
    if (reqPath.length > 0) {
        url.pathname = "/" + reqPath.join("/");
    }
    // Add query parameters
    const searchParams = new URLSearchParams();
    // Add existing parameters (they're already in "key=value" format)
    if (options === null || options === void 0 ? void 0 : options.parameters) {
        for (const param of options.parameters) {
            const [key, value] = param.split("=", 2);
            if (key && value) {
                searchParams.set(key, decodeURIComponent(value));
            }
        }
    }
    // Add campaign tracking parameters if specified
    if ((options === null || options === void 0 ? void 0 : options.campaign) !== undefined) {
        searchParams.set("utm_source", "vortex");
        searchParams.set("utm_medium", "app");
        if ((options === null || options === void 0 ? void 0 : options.content) !== undefined) {
            searchParams.set("utm_content", options.content);
        }
        searchParams.set("utm_campaign", options.campaign.toString());
    }
    // Set search params if any exist
    if (searchParams.toString()) {
        url.search = searchParams.toString();
    }
    return url.toString();
}
// environment variables we might have set for ourselves or passed in by chrome/electron/node
const noInheritEnv = [
    "BLUEBIRD_DEBUG",
    "CHROME_CRASHPAD_PIPE_NAME",
    "DEBUG_REACT_RENDERS",
    "DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",
    "FORCE_ALLOW_ELEVATED_SYMLINKING",
    "HIGHLIGHT_I18N",
    "IS_PREVIEW_BUILD",
    "NEXUS_NEXT_URL",
    "NODE_ENV",
    "NODE_OPTIONS",
    "SIMULATE_FS_ERRORS",
    "UV_THREADPOOL_SIZE",
];
function filteredEnvironment() {
    return _.omit(process.env, noInheritEnv);
}
function parseBool(input) {
    return ["true", "yes", "1"].includes((input !== null && input !== void 0 ? input : "").toLowerCase());
}
class Overlayable {
    constructor(baseData, deduceLayer) {
        this.mLayers = {};
        this.mBaseData = baseData;
        this.mDeduce = deduceLayer;
    }
    setLayer(layerId, data) {
        this.mLayers[layerId] = data;
    }
    keys() {
        return Object.keys(this.mBaseData);
    }
    has(key) {
        return this.mBaseData[key] !== undefined;
    }
    get(key, attr, extraArg) {
        var _a, _b, _c, _d, _e;
        const layer = this.mDeduce(key, extraArg);
        if (layer === undefined) {
            return (_a = this.mBaseData[key]) === null || _a === void 0 ? void 0 : _a[attr];
        }
        return ((_d = (_c = (_b = this.mLayers[layer]) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c[attr]) !== null && _d !== void 0 ? _d : (_e = this.mBaseData[key]) === null || _e === void 0 ? void 0 : _e[attr]);
    }
    get baseData() {
        return this.mBaseData;
    }
}
exports.Overlayable = Overlayable;
const proxyHandler = {
    ownKeys(target) {
        return Reflect.ownKeys(target.baseData);
    },
    getOwnPropertyDescriptor(target, prop) {
        if (Reflect.has(target, prop)) {
            return Reflect.getOwnPropertyDescriptor(target, prop);
        }
        else {
            return {
                enumerable: true,
                configurable: true,
            };
        }
    },
    has(target, prop) {
        return Reflect.has(target, prop) || target.baseData[prop];
    },
    get(target, prop, receiver) {
        var _a;
        return (_a = Reflect.get(target, prop, receiver)) !== null && _a !== void 0 ? _a : target.baseData[prop];
    },
};
/**
 * helper function to create a dictionary that can have conditional
 * overlays applied to it
 * @param baseData the base data object
 * @param layers keyed layers
 * @param deduceLayer determine the layer to be used for a given key. If this returns
 * @returns
 */
function makeOverlayableDictionary(baseData, layers, deduceLayer) {
    const res = new Overlayable(baseData, deduceLayer);
    for (const layerId of Object.keys(layers)) {
        res.setLayer(layerId, layers[layerId]);
    }
    return new Proxy(res, proxyHandler);
}
