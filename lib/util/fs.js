"use strict";
/**
 * wrapper for the fs / fs-extra-promise module
 * this allows us to customise the behaviour of fs function across the application.
 * The api should remain compatible with fs-extra-promise, but extensions can be made
 * Notable behaviour changes:
 * - common async functions now retrieve a backtrace before calling, so that on error
 *   they can provide a useful backtrace to where the function was called
 *   (for many error cases the original function didn't have a stack trace in the first place)
 * - retrying on functions that commonly fail temporarily due to external applications
 *   (virus scanners, functions called from vortex) locking files.
 * - ignoring ENOENT error when deleting a file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const delayed_1 = require("./delayed");
const Promise = require("bluebird");
const fs = require("fs-extra-promise");
const path = require("path");
var fs_1 = require("fs");
exports.constants = fs_1.constants;
exports.Stats = fs_1.Stats;
exports.WriteStream = fs_1.WriteStream;
// simple re-export of functions we don't touch (yet)
var fs_extra_promise_1 = require("fs-extra-promise");
exports.accessSync = fs_extra_promise_1.accessSync;
exports.chmodAsync = fs_extra_promise_1.chmodAsync;
exports.closeAsync = fs_extra_promise_1.closeAsync;
exports.closeSync = fs_extra_promise_1.closeSync;
exports.createReadStream = fs_extra_promise_1.createReadStream;
exports.createWriteStream = fs_extra_promise_1.createWriteStream;
exports.ensureDirAsync = fs_extra_promise_1.ensureDirAsync;
exports.ensureDirSync = fs_extra_promise_1.ensureDirSync;
exports.fsyncAsync = fs_extra_promise_1.fsyncAsync;
exports.linkAsync = fs_extra_promise_1.linkAsync;
exports.linkSync = fs_extra_promise_1.linkSync;
exports.lstatAsync = fs_extra_promise_1.lstatAsync;
exports.moveAsync = fs_extra_promise_1.moveAsync;
exports.openSync = fs_extra_promise_1.openSync;
exports.openAsync = fs_extra_promise_1.openAsync;
exports.readFileAsync = fs_extra_promise_1.readFileAsync;
exports.readFileSync = fs_extra_promise_1.readFileSync;
exports.readdirAsync = fs_extra_promise_1.readdirAsync;
exports.readlinkAsync = fs_extra_promise_1.readlinkAsync;
exports.readJSONSync = fs_extra_promise_1.readJSONSync;
exports.removeSync = fs_extra_promise_1.removeSync;
exports.statAsync = fs_extra_promise_1.statAsync;
exports.statSync = fs_extra_promise_1.statSync;
exports.symlinkAsync = fs_extra_promise_1.symlinkAsync;
exports.utimesAsync = fs_extra_promise_1.utimesAsync;
exports.watch = fs_extra_promise_1.watch;
exports.writeAsync = fs_extra_promise_1.writeAsync;
exports.writeFileAsync = fs_extra_promise_1.writeFileAsync;
exports.writeSync = fs_extra_promise_1.writeSync;
const NUM_RETRIES = 3;
const RETRY_DELAY_MS = 100;
const RETRY_ERRORS = new Set(['EPERM', 'EBUSY', 'EUNKNOWN']);
function genWrapperAsync(func) {
    const res = (...args) => {
        const stack = new Error().stack;
        return func(args)
            .catch(err => {
            err.stack = stack;
            throw err;
        });
    };
    return res;
}
const mkdirAsync = genWrapperAsync(fs.mkdirAsync);
exports.mkdirAsync = mkdirAsync;
function isChild(child, parent) {
    const relative = path.relative(parent, child);
    return !!relative && !relative.startsWith('..') && !path.isAbsolute(relative);
}
function isChildOrSame(child, parent) {
    const relative = path.relative(parent, child);
    return !relative.startsWith('..') && !path.isAbsolute(relative);
}
function renameAsync(oldPath, newPath) {
    const stack = new Error().stack;
    if (isChild(newPath, oldPath)) {
        // trying to move a directory into its own subdirectory is like trying to climb on your own
        // shoulders, yet from a user perspective it should be possible
        return renameRecursive(oldPath, newPath, stack);
    }
    else {
        return renameAsyncInt(oldPath, newPath, stack);
    }
}
exports.renameAsync = renameAsync;
/**
 * manually recurse through the source directory and move files individually
 */
function renameRecursive(oldPath, newPath, stack) {
    return fs.mkdirAsync(newPath)
        .then(() => fs.readdirAsync(oldPath))
        .filter((fileName) => !isChildOrSame(newPath, path.join(oldPath, fileName)))
        .map((fileName) => {
        const src = path.join(oldPath, fileName);
        return fs.statAsync(src).then(stat => {
            const dst = path.join(newPath, fileName);
            return stat.isDirectory()
                // if directory, create output dir and recurse into it
                ? renameRecursive(src, dst, stack)
                    .then(() => fs.rmdirAsync(src))
                // if file, just move
                : fs.renameAsync(src, dst);
        });
    })
        .then(() => null)
        .catch(err => {
        err.stack = stack;
        throw err;
    });
}
function renameAsyncInt(oldPath, newPath, stack) {
    return fs.renameAsync(oldPath, newPath)
        .catch(err => {
        err.stack = stack;
        throw err;
    });
}
function ensureFileAsync(filePath) {
    return fs.ensureFileAsync(filePath);
}
exports.ensureFileAsync = ensureFileAsync;
function copyAsync(src, dest, options) {
    return copyInt(src, dest, options || undefined, new Error().stack, NUM_RETRIES);
}
exports.copyAsync = copyAsync;
function copyInt(src, dest, options, stack, tries) {
    return fs.copyAsync(src, dest, options)
        .catch((err) => {
        if (RETRY_ERRORS.has(err.code) && (tries > 0)) {
            return delayed_1.delayed(RETRY_DELAY_MS)
                .then(() => copyInt(src, dest, options, stack, tries - 1));
        }
        err.stack = stack;
        throw err;
    });
}
function removeAsync(dirPath) {
    return removeInt(dirPath, new Error().stack, NUM_RETRIES);
}
exports.removeAsync = removeAsync;
function removeInt(dirPath, stack, tries) {
    return fs.removeAsync(dirPath)
        .catch((err) => {
        if (err.code === 'ENOENT') {
            // don't mind if a file we wanted deleted was already gone
            return Promise.resolve();
        }
        else if (RETRY_ERRORS.has(err.code) && (tries > 0)) {
            return delayed_1.delayed(RETRY_DELAY_MS)
                .then(() => removeInt(dirPath, stack, tries - 1));
        }
        err.stack = stack;
        throw err;
    });
}
function unlinkAsync(dirPath) {
    return unlinkInt(dirPath, new Error().stack, NUM_RETRIES);
}
exports.unlinkAsync = unlinkAsync;
function unlinkInt(dirPath, stack, tries) {
    return fs.unlinkAsync(dirPath)
        .catch((err) => {
        if (err.code === 'ENOENT') {
            // don't mind if a file we wanted deleted was already gone
            return Promise.resolve();
        }
        else if (RETRY_ERRORS.has(err.code) && (tries > 0)) {
            return delayed_1.delayed(RETRY_DELAY_MS)
                .then(() => unlinkInt(dirPath, stack, tries - 1));
        }
        err.stack = stack;
        throw err;
    });
}
function rmdirAsync(dirPath) {
    return rmdirInt(dirPath, new Error().stack, NUM_RETRIES);
}
exports.rmdirAsync = rmdirAsync;
function rmdirInt(dirPath, stack, tries) {
    return fs.rmdirAsync(dirPath)
        .catch((err) => {
        if (err.code === 'ENOENT') {
            // don't mind if a file we wanted deleted was already gone
            return Promise.resolve();
        }
        else if (RETRY_ERRORS.has(err.code) && (tries > 0)) {
            return delayed_1.delayed(RETRY_DELAY_MS)
                .then(() => rmdirInt(dirPath, stack, tries - 1));
        }
        err.stack = stack;
        throw err;
    });
}
