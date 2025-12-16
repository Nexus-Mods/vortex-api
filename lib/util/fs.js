"use strict";
/**
 * wrapper for the fs / fs-extra module
 * this allows us to customise the behaviour of fs function across the application,
 * In particular it handles certain user-interactions (file busy, permissions, ...) in a uniform
 * way.
 * The api should remain compatible with fs-extra, but extensions can be made
 * Notable behaviour changes:
 * - common async functions now retrieve a backtrace before calling, so that on error
 *   they can provide a useful backtrace to where the function was called
 *   (for many error cases the original function didn't have a stack trace in the first place)
 * - retrying on functions that commonly fail temporarily due to external applications
 *   (virus scanners, functions called from vortex) locking files.
 * - ignoring ENOENT error when deleting a file.
 */
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
exports.withTmpFile = exports.withTmpDir = exports.writeFileAsync = exports.writeAsync = exports.utimesAsync = exports.symlinkAsync = exports.statSilentAsync = exports.statAsync = exports.readFileAsync = exports.readAsync = exports.readdirAsync = exports.openAsync = exports.moveAsync = exports.mkdirsAsync = exports.mkdirAsync = exports.lstatAsync = exports.fsyncAsync = exports.closeAsync = exports.chmodAsync = exports.appendFileAsync = exports.writeSync = exports.writeFileSync = exports.watch = exports.symlinkSync = exports.statSync = exports.readFileSync = exports.readdirSync = exports.openSync = exports.linkSync = exports.createWriteStream = exports.createReadStream = exports.closeSync = exports.appendFileSync = exports.accessSync = exports.WriteStream = exports.Stats = exports.constants = void 0;
exports.setTFunction = setTFunction;
exports.genFSWrapperAsync = genFSWrapperAsync;
exports.isDirectoryAsync = isDirectoryAsync;
exports.ensureDirSync = ensureDirSync;
exports.ensureFileAsync = ensureFileAsync;
exports.ensureDirAsync = ensureDirAsync;
exports.moveRenameAsync = moveRenameAsync;
exports.copyAsync = copyAsync;
exports.linkAsync = linkAsync;
exports.removeSync = removeSync;
exports.unlinkAsync = unlinkAsync;
exports.renameAsync = renameAsync;
exports.rmdirAsync = rmdirAsync;
exports.removeAsync = removeAsync;
exports.readlinkAsync = readlinkAsync;
exports.ensureDirWritableAsync = ensureDirWritableAsync;
exports.changeFileOwnership = changeFileOwnership;
exports.changeFileAttributes = changeFileAttributes;
exports.makeFileWritableAsync = makeFileWritableAsync;
exports.forcePerm = forcePerm;
exports.withTmpDirImpl = withTmpDirImpl;
exports.encodingFromBOM = encodingFromBOM;
exports.readFileBOM = readFileBOM;
const CustomErrors_1 = require("./CustomErrors");
const errorHandling_1 = require("./errorHandling");
const lazyRequire_1 = __importDefault(require("./lazyRequire"));
const log_1 = require("./log");
const nativeErrors_1 = require("./nativeErrors");
const util_1 = require("./util");
const bluebird_1 = __importDefault(require("bluebird"));
const iconv_lite_1 = require("iconv-lite");
const electron_1 = require("electron");
const fs = __importStar(require("fs-extra"));
const json_socket_1 = __importDefault(require("json-socket"));
const _ = __importStar(require("lodash"));
const net = __importStar(require("net"));
const path = __importStar(require("path"));
const rimraf_1 = __importDefault(require("rimraf"));
const shortid_1 = require("shortid");
const tmp = __importStar(require("tmp"));
const permission = (0, lazyRequire_1.default)(() => require("permissions"));
const vortexRun = (0, lazyRequire_1.default)(() => require("vortex-run"));
const wholocks = (0, lazyRequire_1.default)(() => require("wholocks"));
const dialog = process.type === "renderer"
    ? // tslint:disable-next-line:no-var-requires
        require("@electron/remote").dialog
    : electron_1.dialog;
var fs_1 = require("fs");
Object.defineProperty(exports, "constants", { enumerable: true, get: function () { return fs_1.constants; } });
Object.defineProperty(exports, "Stats", { enumerable: true, get: function () { return fs_1.Stats; } });
Object.defineProperty(exports, "WriteStream", { enumerable: true, get: function () { return fs_1.WriteStream; } });
// simple re-export of functions we don't touch (yet)
var original_fs_1 = require("original-fs");
Object.defineProperty(exports, "accessSync", { enumerable: true, get: function () { return original_fs_1.accessSync; } });
Object.defineProperty(exports, "appendFileSync", { enumerable: true, get: function () { return original_fs_1.appendFileSync; } });
Object.defineProperty(exports, "closeSync", { enumerable: true, get: function () { return original_fs_1.closeSync; } });
Object.defineProperty(exports, "createReadStream", { enumerable: true, get: function () { return original_fs_1.createReadStream; } });
Object.defineProperty(exports, "createWriteStream", { enumerable: true, get: function () { return original_fs_1.createWriteStream; } });
Object.defineProperty(exports, "linkSync", { enumerable: true, get: function () { return original_fs_1.linkSync; } });
Object.defineProperty(exports, "openSync", { enumerable: true, get: function () { return original_fs_1.openSync; } });
Object.defineProperty(exports, "readdirSync", { enumerable: true, get: function () { return original_fs_1.readdirSync; } });
Object.defineProperty(exports, "readFileSync", { enumerable: true, get: function () { return original_fs_1.readFileSync; } });
Object.defineProperty(exports, "statSync", { enumerable: true, get: function () { return original_fs_1.statSync; } });
Object.defineProperty(exports, "symlinkSync", { enumerable: true, get: function () { return original_fs_1.symlinkSync; } });
Object.defineProperty(exports, "watch", { enumerable: true, get: function () { return original_fs_1.watch; } });
Object.defineProperty(exports, "writeFileSync", { enumerable: true, get: function () { return original_fs_1.writeFileSync; } });
Object.defineProperty(exports, "writeSync", { enumerable: true, get: function () { return original_fs_1.writeSync; } });
let tFunction = (input) => input;
function setTFunction(tFunc) {
    tFunction = tFunc;
}
const NUM_RETRIES = 5;
const RETRY_DELAY_MS = 100;
const RETRY_ERRORS = new Set([
    "EPERM",
    "EBUSY",
    "EIO",
    "EBADF",
    "ENOTEMPTY",
    "EMFILE",
    "UNKNOWN",
]);
const simfail = process.env.SIMULATE_FS_ERRORS === "true"
    ? (func) => {
        if (Math.random() < 0.25) {
            const code = Math.random() < 0.33
                ? "EBUSY"
                : Math.random() < 0.5
                    ? "EIO"
                    : "UNKNOWN";
            const res = new Error(`fake error ${code}`);
            if (code === "UNKNOWN") {
                res["nativeCode"] = 21;
            }
            res.code = code;
            res.path = "foobar file";
            return bluebird_1.default.reject(res);
        }
        else {
            return func();
        }
    }
    : (func) => func();
function nospcQuery() {
    if (dialog === undefined) {
        return bluebird_1.default.resolve(false);
    }
    const options = {
        title: "Disk full",
        message: `Operation can't continue because the disk is full. ` +
            "Please free up some space and click retry. Cancelling the transfer operation " +
            "at this point will remove any changes and revert back to the previous state.",
        buttons: ["Cancel", "Retry"],
        type: "warning",
        noLink: true,
    };
    const choice = dialog.showMessageBoxSync((0, errorHandling_1.getVisibleWindow)(), options);
    return choice === 0
        ? bluebird_1.default.reject(new CustomErrors_1.UserCanceled())
        : bluebird_1.default.resolve(true);
}
function ioQuery() {
    if (dialog === undefined) {
        return bluebird_1.default.resolve(false);
    }
    const options = {
        title: "I/O Error",
        message: "Disk access failed repeatedly. " +
            "If this is a removable disk (like a network or external drive), please ensure " +
            "it's connected. Otherwise this may indicate filesystem corruption, you may " +
            "want to run chkdsk or similar software to scan for problems.",
        buttons: ["Cancel", "Retry"],
        type: "warning",
        noLink: true,
    };
    const choice = dialog.showMessageBoxSync((0, errorHandling_1.getVisibleWindow)(), options);
    return choice === 0
        ? bluebird_1.default.reject(new CustomErrors_1.UserCanceled())
        : bluebird_1.default.resolve(true);
}
function unlockConfirm(filePath) {
    if (dialog === undefined || !(0, util_1.truthy)(filePath)) {
        return bluebird_1.default.resolve(false);
    }
    let processes = [];
    try {
        processes = wholocks.default(filePath);
    }
    catch (err) {
        (0, log_1.log)("warn", "failed to determine list of processes locking file", {
            filePath,
            error: err.message,
        });
    }
    const baseMessage = processes.length === 0
        ? `Vortex needs to access "${filePath}" but doesn\'t have permission to.`
        : `Vortex needs to access "${filePath}" but it either has too restrictive ` +
            "permissions or is locked by another process.";
    const buttons = ["Cancel", "Retry"];
    if (processes.length === 0) {
        buttons.push("Give permission");
    }
    const options = {
        title: "Access denied",
        message: baseMessage +
            " If your account has admin rights Vortex can try to unlock the file for you.",
        detail: processes.length === 0
            ? undefined
            : "Please close the following applications and retry:\n" +
                processes.map((proc) => `${proc.appName} (${proc.pid})`).join("\n"),
        buttons,
        type: "warning",
        noLink: true,
    };
    const choice = dialog.showMessageBoxSync((0, errorHandling_1.getVisibleWindow)(), options);
    return choice === 0
        ? bluebird_1.default.reject(new CustomErrors_1.UserCanceled())
        : bluebird_1.default.resolve(choice === 2);
}
function unknownErrorRetry(filePath, err, stackErr) {
    var _a;
    if (dialog === undefined) {
        return bluebird_1.default.resolve(false);
    }
    if (filePath === undefined) {
        // unfortunately these error message don't necessarily contain the filename
        filePath = "<filename unknown>";
    }
    const options = {
        title: "Unknown error",
        message: `The operating system has reported an error without details when accessing "${filePath}" ` +
            "This is usually due the user's environment and not a bug in Vortex.\n" +
            "Please diagnose your environment and then retry",
        type: "warning",
        noLink: true,
    };
    if (![255, 362, 383, 388, 390, 395, 396, 404].includes(err["nativeCode"])) {
        options.detail =
            "Possible error causes:\n" +
                `1. "${filePath}" is a removable, possibly network drive which has been disconnected.\n` +
                "2. An External application has interfered with file operations " +
                "(Anti-virus, Disk Management Utility, Virus)\n";
    }
    const decoded = (0, nativeErrors_1.decodeSystemError)(err, filePath);
    if (decoded !== undefined) {
        options.title = decoded.title;
        options.message = tFunction(decoded.message, { replace: { filePath } });
    }
    if ((decoded === null || decoded === void 0 ? void 0 : decoded.rethrowAs) === undefined) {
        options.buttons = ["Cancel", "Retry"];
    }
    else {
        options.message +=
            "\n\nYou can try continuing but you do so at your own risk.";
        options.buttons = ["Cancel", "Ignore", "Retry"];
    }
    const choice = dialog.showMessageBoxSync((0, errorHandling_1.getVisibleWindow)(), options);
    if (options.buttons[choice] === "Cancel and Report") {
        // we're reporting this to collect a list of native errors and provide better error
        // message
        const nat = err["nativeCode"];
        (0, errorHandling_1.createErrorReport)("Unknown error", {
            message: `Windows System Error (${nat})`,
            stack: (0, util_1.restackErr)(err, stackErr).stack,
            path: filePath,
        }, {}, ["bug"], {});
        return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
    }
    switch (options.buttons[choice]) {
        case "Retry":
            return bluebird_1.default.resolve(true);
        case "Ignore": {
            err["code"] = (_a = decoded === null || decoded === void 0 ? void 0 : decoded.rethrowAs) !== null && _a !== void 0 ? _a : "UNKNOWN";
            err["allowReport"] = false;
            return bluebird_1.default.reject(err);
        }
    }
    return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
}
function busyRetry(filePath) {
    if (dialog === undefined) {
        return bluebird_1.default.resolve(false);
    }
    if (filePath === undefined) {
        filePath = "<filename unknown>";
    }
    let processes = [];
    try {
        processes = wholocks.default(filePath);
    }
    catch (err) {
        (0, log_1.log)("warn", "failed to determine list of processes locking file", {
            filePath,
            error: err.message,
        });
    }
    const options = {
        title: "File busy",
        message: `Vortex needs to access "${filePath}" but it\'s open in another application. ` +
            "Please close the file in all other applications and then retry.",
        detail: processes.length > 0
            ? "Please close the following applications and retry:\n" +
                processes.map((proc) => `${proc.appName} (${proc.pid})`).join("\n")
            : undefined,
        buttons: ["Cancel", "Retry"],
        type: "warning",
        noLink: true,
    };
    const choice = dialog.showMessageBoxSync((0, errorHandling_1.getVisibleWindow)(), options);
    return choice === 0
        ? bluebird_1.default.reject(new CustomErrors_1.UserCanceled())
        : bluebird_1.default.resolve(true);
}
function errorRepeat(error, filePath, retries, stackErr, showDialogCallback, options) {
    if (retries > 0 &&
        (RETRY_ERRORS.has(error.code) ||
            ((options === null || options === void 0 ? void 0 : options.extraRetryErrors) || []).includes(error.code))) {
        // retry these errors without query for a few times
        return bluebird_1.default.delay(retries === 1 ? 1000 : 100).then(() => bluebird_1.default.resolve(true));
    }
    if (showDialogCallback !== undefined && !showDialogCallback()) {
        return bluebird_1.default.resolve(false);
    }
    // system error code 1224 means there is a user-mapped section open in the file
    if (error.code === "EBUSY" ||
        error["nativeCode"] === 1224 ||
        (error.code === "ENOTEMPTY" && (options === null || options === void 0 ? void 0 : options.enotempty))) {
        return busyRetry(filePath);
    }
    else if (error.code === "ENOSPC") {
        return nospcQuery();
    }
    else if (["EBADF", "EIO"].includes(error.code)) {
        return ioQuery();
    }
    else if (error.code === "EPERM") {
        let unlockPath = filePath;
        return bluebird_1.default.resolve(fs.stat(unlockPath))
            .catch((statErr) => {
            if (statErr.code === "ENOENT") {
                unlockPath = path.dirname(filePath);
                return bluebird_1.default.resolve();
            }
            else {
                return bluebird_1.default.reject(statErr);
            }
        })
            .then(() => unlockConfirm(unlockPath))
            .then((doUnlock) => {
            if (doUnlock) {
                const userId = permission.getUserId();
                return elevated((ipcPath, req) => {
                    return req("permissions").allow(unlockPath, userId, "rwx");
                }, { unlockPath, userId })
                    .then(() => true)
                    .catch((elevatedErr) => {
                    if (elevatedErr instanceof CustomErrors_1.UserCanceled ||
                        elevatedErr.message.indexOf("The operation was canceled by the user") !== -1) {
                        return Promise.reject(new CustomErrors_1.UserCanceled());
                    }
                    // if elevation failed, return the original error because the one from
                    // elevate - while interesting as well - would make error handling too complicated
                    (0, log_1.log)("error", "failed to acquire permission", {
                        filePath,
                        error: elevatedErr.message,
                    });
                    return Promise.reject(error);
                });
            }
            else {
                return bluebird_1.default.resolve(true);
            }
        });
    }
    else if (error.code === "UNKNOWN") {
        return unknownErrorRetry(filePath, error, stackErr);
    }
    else {
        return bluebird_1.default.resolve(false);
    }
}
function augmentError(error) {
    if (error.message === "dest already exists.") {
        error.code = "EEXIST";
    }
}
function errorHandler(error, stackErr, tries, showDialogCallback, options) {
    augmentError(error);
    const repProm = errorRepeat(error, error.dest || error.path, tries, stackErr, showDialogCallback, options);
    // trying to narrow down #6404
    if (repProm === undefined) {
        const err = new Error(`Failed to handle filesystem error "${error.code}": ${error.message}.`);
        err.stack = error.stack;
        throw bluebird_1.default.reject(err);
    }
    return repProm
        .then((repeat) => repeat
        ? bluebird_1.default.resolve()
        : bluebird_1.default.reject((0, util_1.restackErr)(error, stackErr)))
        .catch((err) => bluebird_1.default.reject((0, util_1.restackErr)(err, stackErr)));
}
function genFSWrapperAsync(func) {
    const wrapper = (stackErr, tries, ...args) => simfail(() => bluebird_1.default.resolve(func(...args))).catch((err) => errorHandler(err, stackErr, tries).then(() => wrapper(stackErr, tries - 1, ...args)));
    const res = (...args) => {
        return wrapper(new Error(), NUM_RETRIES, ...args);
    };
    return res;
}
// tslint:disable:max-line-length
const chmodAsync = genFSWrapperAsync(fs.chmod);
exports.chmodAsync = chmodAsync;
const closeAsync = genFSWrapperAsync(fs.close);
exports.closeAsync = closeAsync;
const fsyncAsync = genFSWrapperAsync(fs.fsync);
exports.fsyncAsync = fsyncAsync;
const lstatAsync = genFSWrapperAsync(fs.lstat);
exports.lstatAsync = lstatAsync;
const mkdirAsync = genFSWrapperAsync(fs.mkdir);
exports.mkdirAsync = mkdirAsync;
const mkdirsAsync = genFSWrapperAsync(fs.mkdirs);
exports.mkdirsAsync = mkdirsAsync;
const moveAsync = genFSWrapperAsync(fs.move);
exports.moveAsync = moveAsync;
const openAsync = genFSWrapperAsync(fs.open);
exports.openAsync = openAsync;
const readdirAsync = genFSWrapperAsync(fs.readdir);
exports.readdirAsync = readdirAsync;
const readFileAsync = genFSWrapperAsync(fs.readFile);
exports.readFileAsync = readFileAsync;
const statAsync = genFSWrapperAsync(fs.stat);
exports.statAsync = statAsync;
const statSilentAsync = (statPath) => bluebird_1.default.resolve(fs.stat(statPath));
exports.statSilentAsync = statSilentAsync;
const symlinkAsync = genFSWrapperAsync(fs.symlink);
exports.symlinkAsync = symlinkAsync;
const utimesAsync = genFSWrapperAsync(fs.utimes);
exports.utimesAsync = utimesAsync;
// fs.write and fs.read don't promisify correctly because it has two return values. fs-extra already works around this in their
// promisified api so no reason to reinvent the wheel (also we want the api to be compatible)
const writeAsync = genFSWrapperAsync(fs.write);
exports.writeAsync = writeAsync;
const readAsync = genFSWrapperAsync(fs.read);
exports.readAsync = readAsync;
const writeFileAsync = genFSWrapperAsync(fs.writeFile);
exports.writeFileAsync = writeFileAsync;
const appendFileAsync = genFSWrapperAsync(fs.appendFile);
exports.appendFileAsync = appendFileAsync;
function isDirectoryAsync(dirPath) {
    return bluebird_1.default.resolve(fs.stat(dirPath)).then((stats) => stats.isDirectory());
}
function ensureDirSync(dirPath) {
    try {
        fs.ensureDirSync(dirPath);
    }
    catch (err) {
        throw (0, util_1.restackErr)(err, new Error());
    }
}
function ensureFileAsync(filePath) {
    const stackErr = new Error();
    return bluebird_1.default.resolve(fs.ensureFile(filePath)).catch((err) => {
        throw (0, util_1.restackErr)(err, stackErr);
    });
}
function ensureDirAsync(dirPath, onDirCreatedCB) {
    const stackErr = new Error();
    // If a onDirCreated callback is provided, we can't use fs-extra's
    //  implementation directly as there's no way for us to reliably determine
    //  whether the parent folder was empty. We're going to create the
    //  directories ourselves.
    return !!onDirCreatedCB
        ? ensureDir(dirPath, onDirCreatedCB)
        : ensureDirInt(dirPath, stackErr, NUM_RETRIES);
}
function ensureDirInt(dirPath, stackErr, tries) {
    return bluebird_1.default.resolve(fs.ensureDir(dirPath)).catch((err) => {
        // ensureDir isn't supposed to cause EEXIST errors as far as I understood
        // it but on windows, when targeting a OneDrive path (and similar?)
        // it apparently still does
        if (err.code === "EEXIST") {
            return bluebird_1.default.resolve();
        }
        return simfail(() => errorHandler(err, stackErr, tries, undefined)).then(() => ensureDirInt(dirPath, stackErr, tries - 1));
    });
}
function ensureDir(targetDir, onDirCreatedCB) {
    // Please note, onDirCreatedCB will be called for _each_ directory
    //  we create.
    const created = [];
    const mkdirRecursive = (dir) => bluebird_1.default.resolve(fs.mkdir(dir))
        .then(() => {
        created.push(dir);
        return onDirCreatedCB(dir);
    })
        .catch((err) => {
        if (err.code === "EEXIST") {
            return bluebird_1.default.resolve();
        }
        else {
            return ["ENOENT"].indexOf(err.code) !== -1
                ? mkdirRecursive(path.dirname(dir))
                    .then(() => bluebird_1.default.resolve(fs.mkdir(dir)))
                    .then(() => {
                    created.push(dir);
                    return onDirCreatedCB(dir);
                })
                    .catch((err2) => err2.code === "EEXIST"
                    ? bluebird_1.default.resolve()
                    : bluebird_1.default.reject(err2))
                : bluebird_1.default.reject(err);
        }
    });
    return mkdirRecursive(targetDir).then(() => created.indexOf(targetDir) !== -1
        ? bluebird_1.default.resolve(targetDir)
        : bluebird_1.default.resolve(null));
}
function selfCopyCheck(src, dest) {
    return bluebird_1.default.all([
        fs.stat(src, { bigint: true }),
        fs.stat(dest, { bigint: true }).catch((err) => {
            return err.code === "ENOENT" ? Promise.resolve({}) : Promise.reject(err);
        }),
    ]).then((stats) => stats[0].ino === stats[1].ino
        ? bluebird_1.default.reject(new CustomErrors_1.SelfCopyCheckError(src, dest, stats[0].ino))
        : bluebird_1.default.resolve());
}
function nextName(input) {
    const ext = path.extname(input);
    const base = path.basename(input, ext);
    const count = parseInt(path.extname(base).slice(1), 10) || 1;
    return path.join(path.dirname(input), `${base}.${count}${ext}`);
}
/**
 * move a file. If the destination exists, will generate a new name with an
 * increasing counter until an unused name is found
 */
function moveRenameAsync(src, dest) {
    return moveAsync(src, dest, { overwrite: false })
        .then(() => dest)
        .catch({ code: "EEXIST" }, () => moveRenameAsync(src, nextName(dest)));
}
/**
 * copy file
 * The copy function from fs-extra doesn't (at the time of writing) correctly check that a file
 * isn't copied onto itself (it fails for links or potentially on case insensitive disks),
 * so this makes a check based on the ino number.
 * A bug in older versions of node.js made it necessary this check be optional but that is
 * resolved now so the check should always be enabled.
 * @param src file to copy
 * @param dest destination path
 * @param options copy options (see documentation for fs)
 */
function copyAsync(src, dest, options) {
    const stackErr = new Error();
    // fs.copy in fs-extra has a bug where it doesn't correctly avoid copying files onto themselves
    const check = (options === null || options === void 0 ? void 0 : options.noSelfCopy)
        ? bluebird_1.default.resolve()
        : selfCopyCheck(src, dest);
    return check
        .then(() => copyInt(src, dest, options || undefined, stackErr, NUM_RETRIES))
        .catch((err) => bluebird_1.default.reject((0, util_1.restackErr)(err, stackErr)));
}
function copyInt(src, dest, options, stackErr, tries) {
    return simfail(() => bluebird_1.default.resolve(fs.copy(src, dest, options))).catch((err) => errorHandler(err, stackErr, tries, options === null || options === void 0 ? void 0 : options.showDialogCallback, {
        extraRetryErrors: ["EEXIST"],
    }).then(() => copyInt(src, dest, options, stackErr, tries - 1)));
}
function linkAsync(src, dest, options) {
    const stackErr = new Error();
    return linkInt(src, dest, stackErr, NUM_RETRIES, options).catch((err) => bluebird_1.default.reject((0, util_1.restackErr)(err, stackErr)));
}
function linkInt(src, dest, stackErr, tries, options) {
    return simfail(() => bluebird_1.default.resolve(fs.link(src, dest))).catch((err) => errorHandler(err, stackErr, tries, options !== undefined ? options.showDialogCallback : undefined).then(() => linkInt(src, dest, stackErr, tries - 1, options)));
}
function removeSync(dirPath) {
    fs.removeSync(dirPath);
}
function unlinkAsync(filePath, options) {
    return unlinkInt(filePath, new Error(), NUM_RETRIES, options || {});
}
function unlinkInt(filePath, stackErr, tries, options) {
    return simfail(() => bluebird_1.default.resolve(fs.unlink(filePath))).catch((err) => {
        const handle = () => errorHandler(err, stackErr, tries, options.showDialogCallback).then(() => unlinkInt(filePath, stackErr, tries - 1, options));
        if (err.code === "ENOENT") {
            // don't mind if a file we wanted deleted was already gone
            return bluebird_1.default.resolve();
        }
        else if (err.code === "EPERM") {
            // this could be caused by the path actually pointing to a directory,
            // unlink can only handle files
            return bluebird_1.default.resolve(fs.stat(filePath))
                .then((stats) => {
                if (stats.isDirectory()) {
                    err.code = "EISDIR";
                }
                return handle();
            })
                .catch((errInner) => errInner instanceof CustomErrors_1.UserCanceled
                ? Promise.reject(errInner)
                : handle());
        }
        else {
            return handle();
        }
    });
}
function renameAsync(sourcePath, destinationPath) {
    return renameInt(sourcePath, destinationPath, new Error(), NUM_RETRIES);
}
function renameInt(sourcePath, destinationPath, stackErr, tries) {
    return simfail(() => bluebird_1.default.resolve(fs.rename(sourcePath, destinationPath))).catch((err) => {
        if (tries > 0 && RETRY_ERRORS.has(err.code)) {
            return bluebird_1.default.delay((NUM_RETRIES - tries + 1) * RETRY_DELAY_MS).then(() => renameInt(sourcePath, destinationPath, stackErr, tries - 1));
        }
        return err.code === "EPERM"
            ? bluebird_1.default.resolve(fs.stat(destinationPath))
                .then((stat) => stat.isDirectory()
                ? bluebird_1.default.reject((0, util_1.restackErr)(err, stackErr))
                : errorHandler(err, stackErr, tries).then(() => renameInt(sourcePath, destinationPath, stackErr, tries - 1)))
                .catch((newErr) => bluebird_1.default.reject((0, util_1.restackErr)(newErr, stackErr)))
            : errorHandler(err, stackErr, tries).then(() => renameInt(sourcePath, destinationPath, stackErr, tries - 1));
    });
}
function rmdirAsync(dirPath) {
    return rmdirInt(dirPath, new Error(), NUM_RETRIES);
}
function rmdirInt(dirPath, stackErr, tries) {
    return simfail(() => bluebird_1.default.resolve(fs.rmdir(dirPath))).catch((err) => {
        if (err.code === "ENOENT") {
            // don't mind if a file we wanted deleted was already gone
            return bluebird_1.default.resolve();
        }
        else if (RETRY_ERRORS.has(err.code) && tries > 0) {
            return bluebird_1.default.delay(RETRY_DELAY_MS).then(() => rmdirInt(dirPath, stackErr, tries - 1));
        }
        throw (0, util_1.restackErr)(err, stackErr);
    });
}
function removeAsync(remPath, options) {
    const stackErr = new Error();
    return removeInt(remPath, stackErr, NUM_RETRIES, options || {});
}
function removeInt(remPath, stackErr, tries, options) {
    return simfail(() => rimrafAsync(remPath)).catch((err) => errorHandler(err, stackErr, tries, options.showDialogCallback, {
        enotempty: true,
    }).then(() => removeInt(remPath, stackErr, tries - 1, options)));
}
function rimrafAsync(remPath) {
    return new bluebird_1.default((resolve, reject) => {
        // don't use the rimraf implementation of busy retries because it's f*cked:
        // https://github.com/isaacs/rimraf/issues/187
        (0, rimraf_1.default)(remPath, {
            maxBusyTries: 0,
        }, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
function readlinkAsync(linkPath) {
    const stackErr = new Error();
    return readlinkInt(linkPath, stackErr, NUM_RETRIES);
}
function readlinkInt(linkPath, stackErr, tries) {
    return simfail(() => bluebird_1.default.resolve(fs.readlink(linkPath))).catch((err) => {
        if (err.code === "UNKNOWN" && process.platform === "win32") {
            // on windows this return UNKNOWN if the file is not a link.
            // of course there could be a thousand other things returning UNKNOWN but we'll never
            // know, will we? libuv? will we?
            const newErr = new Error("Not a link");
            newErr.code = "EINVAL";
            newErr.syscall = "readlink";
            newErr.path = linkPath;
            return Promise.reject(newErr);
        }
        else if (err.code === "EINVAL") {
            return Promise.reject(err);
        }
        else {
            return errorHandler(err, stackErr, tries).then(() => readlinkInt(linkPath, stackErr, tries - 1));
        }
    });
}
function elevated(func, parameters) {
    let server;
    return new bluebird_1.default((resolve, reject) => {
        const id = (0, shortid_1.generate)();
        let resolved = false;
        const ipcPath = `__fs_elevated_${id}`;
        server = net
            .createServer((connRaw) => {
            const conn = new json_socket_1.default(connRaw);
            conn
                .on("message", (data) => {
                if (data.error !== undefined) {
                    if (data.error.startsWith("InvalidScriptError")) {
                        reject(new Error(data.error));
                    }
                    else {
                        (0, log_1.log)("error", "elevated process failed", data.error);
                    }
                }
                else {
                    (0, log_1.log)("warn", "got unexpected ipc message", JSON.stringify(data));
                }
            })
                .on("end", () => {
                if (!resolved) {
                    resolved = true;
                    resolve();
                }
            })
                .on("error", (err) => {
                (0, log_1.log)("error", "elevated code reported error", err);
                if (!resolved) {
                    resolved = true;
                    reject(err);
                }
            });
        })
            .listen(path.join("\\\\?\\pipe", ipcPath));
        vortexRun.runElevated(ipcPath, func, parameters).catch((err) => {
            if (err.code === 5 ||
                (process.platform === "win32" && err.systemCode === 1223)) {
                // this code is returned when the user rejected the UAC dialog. Not currently
                // aware of another case
                reject(new CustomErrors_1.UserCanceled());
            }
            else {
                reject(new Error(`OS error ${err.message} (${err.code})`));
            }
        });
    }).finally(() => {
        if (server !== undefined) {
            server.close();
        }
    });
}
function ensureDirWritableAsync(dirPath, confirm) {
    if (confirm === undefined) {
        confirm = () => bluebird_1.default.resolve();
    }
    const stackErr = new Error();
    return bluebird_1.default.resolve(fs.ensureDir(dirPath))
        .then(() => {
        const canary = path.join(dirPath, "__vortex_canary");
        return ensureFileAsync(canary).then(() => removeAsync(canary));
    })
        .catch((err) => {
        // weirdly we get EBADF from ensureFile sometimes when the
        // directory isn't writeable instead of EPERM. More weirdly, this seems to happen
        // only on startup.
        // Additionally, users may occasionally get EEXIST (OneDrive specific?)
        //  as far as I understand fs-extra that is not supposed to happen! but I suppose
        //  it doesn't hurt to add some code to handle that use case.
        //  https://github.com/Nexus-Mods/Vortex/issues/6856
        if (["EPERM", "EBADF", "UNKNOWN", "EEXIST"].indexOf(err.code) !== -1) {
            return bluebird_1.default.resolve(confirm()).then(() => {
                const userId = permission.getUserId();
                return (elevated((ipcPath, req) => {
                    // tslint:disable-next-line:no-shadowed-variable
                    const fs = req("fs-extra");
                    // tslint:disable-next-line:no-shadowed-variable
                    const path = req("path");
                    const { allow } = req("permissions");
                    const allowDir = (targetPath) => {
                        try {
                            allow(targetPath, userId, "rwx");
                            return Promise.resolve();
                        }
                        catch (err) {
                            return Promise.reject(err);
                        }
                    };
                    // recurse upwards in the directory tree if necessary
                    const ensureAndAllow = (targetPath, allowRecurse) => {
                        return fs
                            .ensureDir(targetPath)
                            .catch((elevatedErr) => {
                            const parentPath = path.dirname(targetPath);
                            if (["EPERM", "ENOENT"].includes(elevatedErr.code) &&
                                parentPath !== targetPath &&
                                allowRecurse) {
                                return ensureAndAllow(parentPath, true).then(() => ensureAndAllow(targetPath, false));
                            }
                            else if (elevatedErr.code === "EEXIST") {
                                // Directory already exists - that's fine.
                                //  Theoretically fs.ensureDir shouldn't be throwing EEXIST
                                //  errors, but we've seen this happen on multiple occassions.
                                return Promise.resolve();
                            }
                            else {
                                return Promise.reject(elevatedErr);
                            }
                        })
                            .then(() => allowDir(targetPath));
                    };
                    return ensureAndAllow(dirPath, true);
                }, { dirPath, userId })
                    // if elevation fails, rethrow the original error, not the failure to elevate
                    .catch((elevatedErr) => {
                    if (elevatedErr.message.indexOf("The operation was canceled by the user") !== -1) {
                        return Promise.reject(new CustomErrors_1.UserCanceled());
                    }
                    // if elevation failed, return the original error because the one from
                    // elevate, while interesting as well, would make error handling too complicated
                    (0, log_1.log)("error", "failed to acquire permission", elevatedErr.message);
                    return bluebird_1.default.reject((0, util_1.restackErr)(err, stackErr));
                }));
            });
        }
        else {
            return bluebird_1.default.reject((0, util_1.restackErr)(err, stackErr));
        }
    });
}
function changeFileOwnership(filePath, stat) {
    if (process.platform === "win32") {
        // This is a *nix only function.
        return bluebird_1.default.resolve();
    }
    const readAndWriteOther = parseInt("0006", 8);
    if ((stat.mode & readAndWriteOther) === readAndWriteOther) {
        return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled("Ownership change not required"));
    }
    const readAndWriteGroup = parseInt("0060", 8);
    const hasGroupPermissions = (stat.mode & readAndWriteGroup) === readAndWriteGroup;
    // (Writing this down as it can get confusing) Cases where we need to change ownership are:
    //  <BaseOwnerCheck> - If the process real ID is different than the file's real ID.
    //
    //  1. If <BaseOwnerCheck> is true and the file does NOT have the group read/write bits set.
    //  2. If <BaseOwnerCheck> is true and the file DOES have the group read/write bits set but
    //   the process group id differs from the file's group id.
    //
    // Ask for forgiveness, not permission.
    return stat.uid !== process.getuid()
        ? !hasGroupPermissions ||
            (hasGroupPermissions && stat.gid !== process.getgid())
            ? bluebird_1.default.resolve(fs.chown(filePath, process.getuid(), stat.gid)).catch((err) => bluebird_1.default.reject(err))
            : bluebird_1.default.resolve()
        : bluebird_1.default.resolve();
}
function changeFileAttributes(filePath, wantedAttributes, stat) {
    return changeFileOwnership(filePath, stat)
        .then(() => {
        const finalAttributes = stat.mode | wantedAttributes;
        return bluebird_1.default.resolve(fs.chmod(filePath, finalAttributes));
    })
        .catch(CustomErrors_1.ProcessCanceled, () => bluebird_1.default.resolve())
        .catch((err) => bluebird_1.default.reject(err));
}
function makeFileWritableAsync(filePath) {
    const stackErr = new Error();
    const wantedAttributes = process.platform === "win32" ? parseInt("0666", 8) : parseInt("0600", 8);
    return bluebird_1.default.resolve(fs.stat(filePath)).then((stat) => {
        if (!stat.isFile()) {
            const err = new Error(`Expected a file, found a directory: "${filePath}"`);
            err.code = "EISDIR";
            err.path = filePath;
            err.syscall = "stat";
            err.stack = stackErr.stack;
            return bluebird_1.default.reject(err);
        }
        return (stat.mode & wantedAttributes) !== wantedAttributes
            ? changeFileAttributes(filePath, wantedAttributes, stat)
            : bluebird_1.default.resolve();
    });
}
function raiseUACDialog(t, err, op, filePath) {
    let fileToAccess = filePath !== undefined ? filePath : err.path;
    const choice = dialog.showMessageBoxSync((0, errorHandling_1.getVisibleWindow)(), {
        title: "Access denied (2)",
        message: t('Vortex needs to access "{{ fileName }}" but doesn\'t have permission to.\n' +
            "If your account has admin rights Vortex can unlock the file for you. " +
            "Windows will show an UAC dialog.", { replace: { fileName: fileToAccess } }),
        buttons: ["Cancel", "Retry", "Give permission"],
        noLink: true,
        type: "warning",
    });
    if (choice === 1) {
        // Retry
        return forcePerm(t, op, filePath);
    }
    else if (choice === 2) {
        // Give Permission
        const userId = permission.getUserId();
        return bluebird_1.default.resolve(fs.stat(fileToAccess))
            .catch((statErr) => {
            if (statErr.code === "ENOENT") {
                fileToAccess = path.dirname(fileToAccess);
            }
            return bluebird_1.default.resolve();
        })
            .then(() => elevated((ipcPath, req) => {
            // tslint:disable-next-line:no-shadowed-variable
            const { allow } = req("permissions");
            return allow(fileToAccess, userId, "rwx");
        }, { fileToAccess, userId }).catch((elevatedErr) => {
            if (elevatedErr instanceof CustomErrors_1.UserCanceled ||
                elevatedErr.message.indexOf("The operation was canceled by the user") !== -1) {
                return Promise.reject(new CustomErrors_1.UserCanceled());
            }
            // if elevation failed, return the original error because the one from
            // elevate, while interesting as well, would make error handling too complicated
            (0, log_1.log)("error", "failed to acquire permission", elevatedErr.message);
            return Promise.reject(err);
        }))
            .then(() => forcePerm(t, op, filePath));
    }
    else {
        return bluebird_1.default.reject(new CustomErrors_1.UserCanceled());
    }
}
function forcePerm(t, op, filePath, maxTries = 3) {
    return op().catch((err) => {
        const fileToAccess = filePath !== undefined ? filePath : err.path;
        if (["EPERM", "EACCES"].indexOf(err.code) !== -1 || err.systemCode === 5) {
            const wantedAttributes = process.platform === "win32"
                ? parseInt("0666", 8)
                : parseInt("0600", 8);
            return fs
                .stat(fileToAccess)
                .then((stat) => changeFileAttributes(fileToAccess, wantedAttributes, stat))
                .then(() => op())
                .catch((innerErr) => {
                if (innerErr instanceof CustomErrors_1.UserCanceled) {
                    return Promise.resolve(undefined);
                }
                return raiseUACDialog(t, err, op, filePath);
            });
        }
        else if (RETRY_ERRORS.has(err.code) && maxTries > 0) {
            return bluebird_1.default.delay(RETRY_DELAY_MS).then(() => forcePerm(t, op, filePath, maxTries - 1));
        }
        else {
            return bluebird_1.default.reject(err);
        }
    });
}
function withTmpDirImpl(cb) {
    return new bluebird_1.default((resolve, reject) => {
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
                        (0, log_1.log)("warn", "Failed to clean up temporary directory", {
                            tmpPath,
                        });
                    }
                });
            }
        });
    });
}
function withTmpFileImpl(cb, options) {
    return new bluebird_1.default((resolve, reject) => {
        tmp.file(_.omit(options !== null && options !== void 0 ? options : {}, ["cleanup"]), (err, name, fd, cleanup) => {
            if (err !== null) {
                return reject(err);
            }
            else {
                cb(fd, name)
                    .then(resolve)
                    .catch(reject)
                    .finally(() => {
                    if ((options === null || options === void 0 ? void 0 : options.cleanup) !== false) {
                        try {
                            cleanup();
                        }
                        catch (err) {
                            (0, log_1.log)("warn", "Failed to clean up temporary file", { name });
                        }
                    }
                });
            }
        });
    });
}
const withTmpDir = genFSWrapperAsync(withTmpDirImpl);
exports.withTmpDir = withTmpDir;
const withTmpFile = genFSWrapperAsync(withTmpFileImpl);
exports.withTmpFile = withTmpFile;
const KNOWN_BOMS = [
    { bom: Buffer.from([0xef, 0xbb, 0xbf]), enc: "utf8" },
    { bom: Buffer.from([0x00, 0x00, 0xfe, 0xff]), enc: "utf32-be" },
    { bom: Buffer.from([0xff, 0xfe, 0x00, 0x00]), enc: "utf32-le" },
    { bom: Buffer.from([0xfe, 0xff]), enc: "utf16be" },
    { bom: Buffer.from([0xff, 0xfe]), enc: "utf16le" },
];
function encodingFromBOM(buf) {
    const bom = KNOWN_BOMS.find((b) => b.bom.length < buf.length && b.bom.compare(buf, 0, b.bom.length) === 0);
    if (bom !== undefined) {
        return { encoding: bom.enc, length: bom.bom.length };
    }
    return undefined;
}
/**
 * read file, using the BOM to determine the encoding
 * @param filePath the file to read
 * @param fallbackEncoding the encoding to use if there is no BOM. Expects one of the iconv-constants,
 *                         which seem to be a super-set of the regular node buffer encodings
 * @returns decoded file encoding
 */
function readFileBOM(filePath, fallbackEncoding) {
    return Promise.resolve(readFileAsync(filePath)).then((buffer) => {
        var _a;
        // iconv-lite has its own BOM handling but it's weird because you apparently
        // still have to specify utf-8/utf-16/utf-32 - it just detects the endianness
        const detectedEnc = encodingFromBOM(buffer);
        if (detectedEnc === undefined) {
            // no bom
            return (0, iconv_lite_1.decode)(buffer, fallbackEncoding !== null && fallbackEncoding !== void 0 ? fallbackEncoding : "utf8");
        }
        else {
            return (0, iconv_lite_1.decode)(buffer.slice(detectedEnc.length), (_a = detectedEnc === null || detectedEnc === void 0 ? void 0 : detectedEnc.encoding) !== null && _a !== void 0 ? _a : fallbackEncoding);
        }
    });
}
