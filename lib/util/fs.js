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
const elevated_1 = require("./elevated");
const Promise = require("bluebird");
const electron_1 = require("electron");
const fs = require("fs-extra-promise");
const ipc = require("node-ipc");
const path = require("path");
const permissions_1 = require("permissions");
const shortid_1 = require("shortid");
const dialog = electron_1.remote !== undefined ? electron_1.remote.dialog : electron_1.dialog;
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
exports.readlinkAsync = fs_extra_promise_1.readlinkAsync;
exports.readJSONSync = fs_extra_promise_1.readJSONSync;
exports.removeSync = fs_extra_promise_1.removeSync;
exports.renameAsync = fs_extra_promise_1.renameAsync;
exports.statAsync = fs_extra_promise_1.statAsync;
exports.statSync = fs_extra_promise_1.statSync;
exports.symlinkAsync = fs_extra_promise_1.symlinkAsync;
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
        return func(...args)
            .catch(err => {
            err.stack = err.message + '\n' + stack;
            throw err;
        });
    };
    return res;
}
const mkdirAsync = genWrapperAsync(fs.mkdirAsync);
exports.mkdirAsync = mkdirAsync;
const utimesAsync = genWrapperAsync(fs.utimesAsync);
exports.utimesAsync = utimesAsync;
const readdirAsync = genWrapperAsync(fs.readdirAsync);
exports.readdirAsync = readdirAsync;
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
        err.stack = err.message + '\n' + stack;
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
        err.stack = err.message + '\n' + stack;
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
        err.stack = err.message + '\n' + stack;
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
        err.stack = err.message + '\n' + stack;
        throw err;
    });
}
function ensureDirWritableAsync(dirPath, confirm) {
    return fs.ensureDirAsync(dirPath)
        .then(() => {
        const canary = path.join(dirPath, '__vortex_canary');
        return fs.ensureFileAsync(canary)
            .then(() => fs.removeAsync(canary));
    })
        .catch(err => {
        if (err.code === 'EPERM') {
            return confirm()
                .then(() => new Promise((resolve, reject) => {
                const id = shortid_1.generate();
                const userId = permissions_1.getUserId();
                ipc.serve(`__fs_elevated_${id}`, () => undefined);
                ipc.server.start();
                ipc.server.on('socket.disconnected', () => {
                    ipc.server.stop();
                    resolve();
                });
                ipc.server.on('error', ipcErr => {
                    reject(ipcErr);
                });
                ipc.server.on('disconnect', () => {
                    ipc.server.stop();
                    resolve();
                });
                elevated_1.default(`__fs_elevated_${id}`, (ipcClient) => {
                    // tslint:disable-next-line:no-shadowed-variable
                    const fs = require('fs-extra-promise');
                    const { allow } = require('permissions');
                    return fs.ensureDirAsync(dirPath)
                        .then(() => {
                        return allow(dirPath, userId, 'rwx');
                    });
                }, { dirPath, userId })
                    .catch(reject);
            }));
        }
        else {
            return Promise.reject(err);
        }
    });
}
exports.ensureDirWritableAsync = ensureDirWritableAsync;
