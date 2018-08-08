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
const PromiseBB = require("bluebird");
const electron_1 = require("electron");
const fs = require("fs-extra-promise");
const ipc = require("node-ipc");
const path = require("path");
const permissions_1 = require("permissions");
const rimraf = require("rimraf");
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
exports.closeSync = fs_extra_promise_1.closeSync;
exports.createReadStream = fs_extra_promise_1.createReadStream;
exports.createWriteStream = fs_extra_promise_1.createWriteStream;
exports.linkSync = fs_extra_promise_1.linkSync;
exports.openSync = fs_extra_promise_1.openSync;
exports.readFileSync = fs_extra_promise_1.readFileSync;
exports.readJSONSync = fs_extra_promise_1.readJSONSync;
exports.statSync = fs_extra_promise_1.statSync;
exports.watch = fs_extra_promise_1.watch;
exports.writeFileSync = fs_extra_promise_1.writeFileSync;
exports.writeSync = fs_extra_promise_1.writeSync;
const NUM_RETRIES = 3;
const RETRY_DELAY_MS = 100;
const RETRY_ERRORS = new Set(['EPERM', 'EBUSY', 'EUNKNOWN']);
function unlockConfirm(filePath) {
    if (dialog === undefined) {
        return PromiseBB.resolve(false);
    }
    const options = {
        title: 'Access denied',
        message: `Vortex needs to access "${filePath}" but doesn\'t have permission to.\n`
            + 'If your account has admin rights Vortex can unlock the file for you. '
            + 'Windows will show an UAC dialog.',
        buttons: [
            'Cancel',
            'Give permission',
        ],
        type: 'warning',
        noLink: true,
    };
    const choice = dialog.showMessageBox(electron_1.remote !== undefined ? electron_1.remote.getCurrentWindow() : null, options);
    return (choice === 0)
        ? PromiseBB.reject(new CustomErrors_1.UserCanceled())
        : PromiseBB.resolve(true);
}
function busyRetry(filePath) {
    if (dialog === undefined) {
        return PromiseBB.resolve(false);
    }
    const options = {
        title: 'File busy',
        message: `Vortex needs to access "${filePath}" but it\'s open in another application. `
            + 'Please close the file in all other applications and then retry',
        buttons: [
            'Cancel',
            'Retry',
        ],
        type: 'warning',
        noLink: true,
    };
    const choice = dialog.showMessageBox(electron_1.remote !== undefined ? electron_1.remote.getCurrentWindow() : null, options);
    return (choice === 0)
        ? PromiseBB.reject(new CustomErrors_1.UserCanceled())
        : PromiseBB.resolve(true);
}
function errorRepeat(code, filePath) {
    if (code === 'EBUSY') {
        return busyRetry(filePath);
    }
    else if (code === 'EPERM') {
        return unlockConfirm(filePath)
            .then(doUnlock => {
            if (doUnlock) {
                const userId = permissions_1.getUserId();
                return elevated((ipcPath, req) => {
                    const { allow } = req('permissions');
                    return allow(filePath, userId, 'rwx');
                }, { filePath, userId })
                    .then(() => true);
            }
            else {
                return PromiseBB.resolve(false);
            }
        });
    }
    else {
        return PromiseBB.resolve(false);
    }
}
function restackErr(error, stackErr) {
    error.stack = error.message + '\n' + stackErr.stack;
    return error;
}
function errorHandler(error, stackErr) {
    return errorRepeat(error.code, error.dest || error.path)
        .then(repeat => repeat
        ? PromiseBB.resolve()
        : PromiseBB.reject(restackErr(error, stackErr)))
        .catch(err => PromiseBB.reject(restackErr(err, stackErr)));
}
function genWrapperAsync(func) {
    const wrapper = (stackErr, ...args) => func(...args)
        .catch(err => errorHandler(err, stackErr)
        .then(() => wrapper(stackErr, ...args)));
    const res = (...args) => wrapper(new Error(), ...args);
    return res;
}
const chmodAsync = genWrapperAsync(fs.chmodAsync);
exports.chmodAsync = chmodAsync;
const closeAsync = genWrapperAsync(fs.closeAsync);
exports.closeAsync = closeAsync;
const fsyncAsync = genWrapperAsync(fs.fsyncAsync);
exports.fsyncAsync = fsyncAsync;
const linkAsync = genWrapperAsync(fs.linkAsync);
exports.linkAsync = linkAsync;
const lstatAsync = genWrapperAsync(fs.lstatAsync);
exports.lstatAsync = lstatAsync;
const mkdirAsync = genWrapperAsync(fs.mkdirAsync);
exports.mkdirAsync = mkdirAsync;
const moveAsync = genWrapperAsync(fs.moveAsync);
exports.moveAsync = moveAsync;
const openAsync = genWrapperAsync(fs.openAsync);
exports.openAsync = openAsync;
const readdirAsync = genWrapperAsync(fs.readdirAsync);
exports.readdirAsync = readdirAsync;
const readFileAsync = genWrapperAsync(fs.readFileAsync);
exports.readFileAsync = readFileAsync;
const readlinkAsync = genWrapperAsync(fs.readlinkAsync);
exports.readlinkAsync = readlinkAsync;
const statAsync = genWrapperAsync(fs.statAsync);
exports.statAsync = statAsync;
const symlinkAsync = genWrapperAsync(fs.symlinkAsync);
exports.symlinkAsync = symlinkAsync;
const utimesAsync = genWrapperAsync(fs.utimesAsync);
exports.utimesAsync = utimesAsync;
const writeAsync = genWrapperAsync(fs.writeAsync);
exports.writeAsync = writeAsync;
const writeFileAsync = genWrapperAsync(fs.writeFileAsync);
exports.writeFileAsync = writeFileAsync;
function ensureDirSync(dirPath) {
    try {
        fs.ensureDirSync(dirPath);
    }
    catch (err) {
        throw restackErr(err, new Error());
    }
}
exports.ensureDirSync = ensureDirSync;
function ensureFileAsync(filePath) {
    return fs.ensureFileAsync(filePath);
}
exports.ensureFileAsync = ensureFileAsync;
function ensureDirAsync(dirPath) {
    const stackErr = new Error();
    return fs.ensureDirAsync(dirPath)
        .catch(err => {
        // ensureDir isn't supposed to cause EEXIST errors as far as I understood
        // it but on windows, when targeting a OneDrive path (and similar?)
        // it apparently still does
        if (err.code === 'EEXIST') {
            return PromiseBB.resolve();
        }
        return PromiseBB.reject(restackErr(err, stackErr));
    });
}
exports.ensureDirAsync = ensureDirAsync;
function selfCopyCheck(src, dest) {
    return PromiseBB.join(fs.statAsync(src), fs.statAsync(dest)
        .catch(err => err.code === 'ENOENT' ? PromiseBB.resolve({}) : PromiseBB.reject(err)))
        .then((stats) => (stats[0].ino === stats[1].ino)
        ? PromiseBB.reject(new Error(`Source "${src}" and destination "${dest}" are the same file (id "${stats[0].ino}").`))
        : PromiseBB.resolve());
}
/**
 * copy file
 * The copy function from fs-extra doesn't (at the time of writing) correctly check that a file isn't
 * copied onto itself (it fails for links or potentially on case insensitive disks), so this makes
 * a check based on the ino number.
 * Unfortunately a bug in node.js (https://github.com/nodejs/node/issues/12115) prevents this check from
 * working reliably so it can currently be disabled.
 * @param src file to copy
 * @param dest destination path
 * @param options copy options (see documentation for fs)
 */
function copyAsync(src, dest, options) {
    const stackErr = new Error();
    // fs.copy in fs-extra has a bug where it doesn't correctly avoid copying files onto themselves
    const check = (options !== undefined) && options.noSelfCopy
        ? PromiseBB.resolve()
        : selfCopyCheck(src, dest);
    return check
        .then(() => copyInt(src, dest, options || undefined, stackErr))
        .catch(err => PromiseBB.reject(restackErr(err, stackErr)));
}
exports.copyAsync = copyAsync;
function copyInt(src, dest, options, stackErr) {
    return fs.copyAsync(src, dest, options)
        .catch((err) => errorHandler(err, stackErr).then(() => copyInt(src, dest, options, stackErr)));
}
function removeSync(dirPath) {
    rimraf.sync(dirPath, { maxBusyTries: 10 });
}
exports.removeSync = removeSync;
function removeAsync(dirPath) {
    return removeInt(dirPath, new Error());
}
exports.removeAsync = removeAsync;
function removeInt(dirPath, stackErr) {
    return new PromiseBB((resolve, reject) => {
        rimraf(dirPath, { maxBusyTries: 10 }, err => {
            if (err !== null) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    })
        .catch((err) => (err.code === 'ENOENT')
        // don't mind if a file we wanted deleted was already gone
        ? PromiseBB.resolve()
        : errorHandler(err, stackErr)
            .then(() => removeInt(dirPath, stackErr)));
}
function unlinkAsync(dirPath) {
    return unlinkInt(dirPath, new Error());
}
exports.unlinkAsync = unlinkAsync;
function unlinkInt(dirPath, stackErr) {
    return fs.unlinkAsync(dirPath)
        .catch((err) => (err.code === 'ENOENT')
        // don't mind if a file we wanted deleted was already gone
        ? PromiseBB.resolve()
        : errorHandler(err, stackErr)
            .then(() => unlinkInt(dirPath, stackErr)));
}
function renameAsync(sourcePath, destinationPath) {
    return renameInt(sourcePath, destinationPath, new Error());
}
exports.renameAsync = renameAsync;
function renameInt(sourcePath, destinationPath, stackErr) {
    return fs.renameAsync(sourcePath, destinationPath)
        .catch((err) => (err.code === 'EPERM')
        ? fs.statAsync(destinationPath)
            .then(stat => stat.isDirectory()
            ? PromiseBB.reject(restackErr(err, stackErr))
            : errorHandler(err, stackErr)
                .then(() => renameInt(sourcePath, destinationPath, stackErr)))
            .catch(newErr => PromiseBB.reject(restackErr(newErr, stackErr)))
        : errorHandler(err, stackErr)
            .then(() => renameInt(sourcePath, destinationPath, stackErr)));
}
function rmdirAsync(dirPath) {
    return rmdirInt(dirPath, new Error(), NUM_RETRIES);
}
exports.rmdirAsync = rmdirAsync;
function rmdirInt(dirPath, stackErr, tries) {
    return fs.rmdirAsync(dirPath)
        .catch((err) => {
        if (err.code === 'ENOENT') {
            // don't mind if a file we wanted deleted was already gone
            return PromiseBB.resolve();
        }
        else if (RETRY_ERRORS.has(err.code) && (tries > 0)) {
            return delayed_1.delayed(RETRY_DELAY_MS)
                .then(() => rmdirInt(dirPath, stackErr, tries - 1));
        }
        throw restackErr(err, stackErr);
    });
}
function elevated(func, parameters) {
    return new PromiseBB((resolve, reject) => {
        const ipcInst = new ipc.IPC();
        const id = shortid_1.generate();
        let resolved = false;
        ipcInst.serve(`__fs_elevated_${id}`, () => {
            vortex_run_1.runElevated(`__fs_elevated_${id}`, func, parameters)
                .catch(vortex_run_1.Win32Error, err => {
                if (err.code === 5) {
                    // this code is returned when the user rejected the UAC dialog. Not currently
                    // aware of another case
                    reject(new CustomErrors_1.UserCanceled());
                }
                else {
                    reject(new Error(`OS error ${err.message} (${err.code})`));
                }
            })
                .catch(err => {
                if (!resolved) {
                    resolved = true;
                    reject(err);
                }
            });
        });
        ipcInst.server.on('socket.disconnected', () => {
            ipcInst.server.stop();
            if (!resolved) {
                resolved = true;
                resolve();
            }
        });
        ipcInst.server.on('error', ipcErr => {
            if (!resolved) {
                resolved = true;
                reject(new Error(ipcErr));
            }
        });
        ipcInst.server.on('disconnect', () => {
            ipcInst.server.stop();
            if (!resolved) {
                resolved = true;
                resolve();
            }
        });
        ipcInst.server.start();
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
                return elevated((ipcPath, req) => {
                    // tslint:disable-next-line:no-shadowed-variable
                    const fs = req('fs-extra-promise');
                    const { allow } = req('permissions');
                    return fs.ensureDirAsync(dirPath)
                        .then(() => allow(dirPath, userId, 'rwx'));
                }, { dirPath, userId });
            });
        }
        else {
            return PromiseBB.reject(err);
        }
    });
}
exports.ensureDirWritableAsync = ensureDirWritableAsync;
function forcePerm(t, op) {
    return op()
        .catch(err => {
        if (err.code === 'EPERM') {
            const choice = dialog.showMessageBox(electron_1.remote !== undefined ? electron_1.remote.getCurrentWindow() : null, {
                title: 'Access denied',
                message: t('Vortex needs to access "{{ fileName }}" but doesn\'t have permission to.\n'
                    + 'If your account has admin rights Vortex can unlock the file for you. '
                    + 'Windows will show an UAC dialog.', { replace: { fileName: err.path } }),
                buttons: [
                    'Cancel',
                    'Give permission',
                ],
                noLink: true,
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
                    return PromiseBB.resolve();
                })
                    .then(() => elevated((ipcPath, req) => {
                    // tslint:disable-next-line:no-shadowed-variable
                    const { allow } = req('permissions');
                    return allow(filePath, userId, 'rwx');
                }, { filePath, userId }))
                    .then(() => forcePerm(t, op));
            }
            else {
                return PromiseBB.reject(new CustomErrors_1.UserCanceled());
            }
        }
        else {
            return PromiseBB.reject(err);
        }
    });
}
exports.forcePerm = forcePerm;
