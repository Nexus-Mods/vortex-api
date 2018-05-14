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
const CustomErrors_1 = require("./CustomErrors");
const delayed_1 = require("./delayed");
const Promise = require("bluebird");
const electron_1 = require("electron");
const fs = require("fs-extra-promise");
const ipc = require("node-ipc");
const path = require("path");
const permissions_1 = require("permissions");
const shortid_1 = require("shortid");
const vortex_run_1 = require("vortex-run");
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
exports.fsyncAsync = fs_extra_promise_1.fsyncAsync;
exports.linkAsync = fs_extra_promise_1.linkAsync;
exports.linkSync = fs_extra_promise_1.linkSync;
exports.lstatAsync = fs_extra_promise_1.lstatAsync;
exports.moveAsync = fs_extra_promise_1.moveAsync;
exports.openSync = fs_extra_promise_1.openSync;
exports.openAsync = fs_extra_promise_1.openAsync;
exports.readFileSync = fs_extra_promise_1.readFileSync;
exports.readlinkAsync = fs_extra_promise_1.readlinkAsync;
exports.readJSONSync = fs_extra_promise_1.readJSONSync;
exports.removeSync = fs_extra_promise_1.removeSync;
exports.statAsync = fs_extra_promise_1.statAsync;
exports.statSync = fs_extra_promise_1.statSync;
exports.symlinkAsync = fs_extra_promise_1.symlinkAsync;
exports.watch = fs_extra_promise_1.watch;
exports.writeFileSync = fs_extra_promise_1.writeFileSync;
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
const readFileAsync = genWrapperAsync(fs.readFileAsync);
exports.readFileAsync = readFileAsync;
const writeAsync = genWrapperAsync(fs.writeAsync);
exports.writeAsync = writeAsync;
const writeFileAsync = genWrapperAsync(fs.writeFileAsync);
exports.writeFileAsync = writeFileAsync;
const renameAsync = genWrapperAsync(fs.renameAsync);
exports.renameAsync = renameAsync;
function ensureDirSync(dirPath) {
    try {
        fs.ensureDirSync(dirPath);
    }
    catch (err) {
        err.stack = err.stack + '\n' + (new Error().stack);
        throw err;
    }
}
exports.ensureDirSync = ensureDirSync;
function ensureFileAsync(filePath) {
    return fs.ensureFileAsync(filePath);
}
exports.ensureFileAsync = ensureFileAsync;
function ensureDirAsync(dirPath) {
    const stack = new Error().stack;
    return fs.ensureDirAsync(dirPath)
        .catch(err => {
        // ensureDir isn't supposed to cause EEXIST errors as far as I understood
        // it but on windows, when targeting a OneDrive path (and similar?)
        // it apparently still does
        if (err.code === 'EEXIST') {
            return Promise.resolve();
        }
        err.stack = err.message + '\n' + stack;
        return Promise.reject(err);
    });
}
exports.ensureDirAsync = ensureDirAsync;
function copyAsync(src, dest, options) {
    const stack = new Error().stack;
    // fs.copy in fs-extra has a bug where it doesn't correctly avoid copying files onto themselves
    return Promise.join(fs.statAsync(src), fs.statAsync(dest)
        .catch(err => err.code === 'ENOENT' ? Promise.resolve({}) : Promise.reject(err)))
        .then((stats) => {
        if (stats[0].ino === stats[1].ino) {
            const err = new Error('Source and destination are the same file.');
            err.stack = err.message + '\n' + stack;
            return Promise.reject(err);
        }
        else {
            Promise.resolve();
        }
    })
        .then(() => copyInt(src, dest, options || undefined, stack, NUM_RETRIES));
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
function elevated(func, parameters) {
    return new Promise((resolve, reject) => {
        const id = shortid_1.generate();
        ipc.serve(`__fs_elevated_${id}`, () => {
            vortex_run_1.runElevated(`__fs_elevated_${id}`, func, parameters)
                .catch(reject);
        });
        ipc.server.on('socket.disconnected', () => {
            ipc.server.stop();
            resolve();
        });
        ipc.server.on('error', ipcErr => {
            reject(new Error(ipcErr));
        });
        ipc.server.on('disconnect', () => {
            ipc.server.stop();
            resolve();
        });
        ipc.server.start();
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
                .then(() => {
                const userId = permissions_1.getUserId();
                return elevated(() => {
                    // tslint:disable-next-line:no-shadowed-variable
                    const fs = require('fs-extra-promise');
                    const { allow } = require('permissions');
                    return fs.ensureDirAsync(dirPath)
                        .then(() => {
                        return allow(dirPath, userId, 'rwx');
                    });
                }, { dirPath, userId });
            });
        }
        else {
            return Promise.reject(err);
        }
    });
}
exports.ensureDirWritableAsync = ensureDirWritableAsync;
function forcePerm(t, op) {
    return op()
        .catch(err => {
        if (err.code === 'EPERM') {
            const choice = dialog.showMessageBox(electron_1.remote !== undefined ? electron_1.remote.getCurrentWindow() : null, {
                message: t('Vortex needs to access a file it doesn\'t have permission to.\n'
                    + 'If your account has admin rights Vortex can unlock the file for you. '
                    + 'Windows will show an UAC dialog.', { replace: { fileName: err.path } }),
                buttons: [
                    'Cancel',
                    'Give permission',
                ],
                noLink: true,
                title: 'Access denied',
                type: 'warning',
                detail: err.path,
            });
            if (choice === 1) {
                let filePath = err.path;
                const userId = permissions_1.getUserId();
                return fs.statAsync(err.path)
                    .catch((statErr) => {
                    if (statErr.code === 'ENOENT') {
                        filePath = path.dirname(filePath);
                    }
                    return Promise.resolve();
                })
                    .then(() => elevated(() => {
                    // tslint:disable-next-line:no-shadowed-variable
                    const fs = require('fs-extra-promise');
                    const { allow } = require('permissions');
                    return allow(filePath, userId, 'rwx');
                }, { filePath, userId }))
                    .then(() => forcePerm(t, op));
            }
            else {
                return Promise.reject(new CustomErrors_1.UserCanceled());
            }
        }
        else {
            return Promise.reject(err);
        }
    });
}
exports.forcePerm = forcePerm;
