"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../actions/notifications");
const CustomErrors_1 = require("./CustomErrors");
const delayed_1 = require("./delayed");
const log_1 = require("./log");
const Promise = require("bluebird");
const child_process_1 = require("child_process");
const electron_1 = require("electron");
const fs = require("fs-extra-promise");
const path = require("path");
const tmp_1 = require("tmp");
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
exports.countIf = countIf;
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
exports.sum = sum;
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
exports.setdefault = setdefault;
/**
 * copy a file in such a way that it will not replace the target if the copy is
 * somehow interrupted. The file is first copied to a temporary file in the same
 * directory as the destination, then deletes the destination and renames the temp
 * to destination. Since the rename is atomic and the deletion only happens after
 * a successful write this should minimize the risk of error.
 *
 * @export
 * @param {string} srcPath
 * @param {string} destPath
 * @returns {Promise<void>}
 */
function copyFileAtomic(srcPath, destPath) {
    let cleanup;
    let tmpPath;
    return new Promise((resolve, reject) => {
        tmp_1.file({ template: `${destPath}.XXXXXX.tmp` }, (err, genPath, fd, cleanupCB) => {
            if (err) {
                return reject(err);
            }
            cleanup = cleanupCB;
            tmpPath = genPath;
            resolve(fd);
        });
    })
        .then((fd) => fs.closeAsync(fd))
        .then(() => fs.copyAsync(srcPath, tmpPath))
        .then(() => fs.unlinkAsync(destPath).catch((err) => {
        if (err.code === 'EPERM') {
            // if the file is currently in use, try a second time
            // 100ms later
            log_1.log('debug', 'file locked, retrying delete', destPath);
            return delayed_1.default(100).then(() => fs.unlinkAsync(destPath));
        }
        else if (err.code === 'ENOENT') {
            // file doesn't exist anyway? no problem
            return Promise.resolve();
        }
        else {
            return Promise.reject(err);
        }
    }))
        .catch(err => err.code === 'ENOENT' ? Promise.resolve() : Promise.reject(err))
        .then(() => (tmpPath !== undefined)
        ? fs.renameAsync(tmpPath, destPath)
        : Promise.resolve())
        .catch(err => {
        log_1.log('info', 'failed to copy', { srcPath, destPath, err: err.stack });
        if (cleanup !== undefined) {
            cleanup();
        }
        return Promise.reject(err);
    });
}
exports.copyFileAtomic = copyFileAtomic;
function removePersistent(store, destPath) {
    return fs.removeAsync(destPath)
        .catch(err => {
        if (err.code === 'ENOENT') {
            // the file I wanted gone was already gone??? Well, I can live with that...
            return Promise.resolve();
        }
        else if (err.code === 'EBUSY') {
            return store.dispatch(notifications_1.showDialog('error', 'Busy', {
                message: 'File is locked by another application: {{ fileName }}\n'
                    + 'please unlock it and retry.',
                parameters: { fileName: destPath },
            }, [
                { label: 'Cancel' },
                { label: 'Retry', default: true },
            ]))
                .then((result) => {
                if (result.action === 'Retry') {
                    return removePersistent(store, destPath);
                }
                else {
                    return Promise.reject(new CustomErrors_1.UserCanceled());
                }
            });
        }
    });
}
exports.removePersistent = removePersistent;
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
    return input.substr(0, half - 2)
        + '...'
        + input.substr(input.length - (half - 1));
}
exports.midClip = midClip;
/**
 * test if a string is null, undefined or consists only of whitespaces
 * @param {string} check the string to check
 */
function isNullOrWhitespace(check) {
    return (!check || (check.trim().length === 0));
}
exports.isNullOrWhitespace = isNullOrWhitespace;
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
exports.truthy = truthy;
/**
 * return the delta between two objects
 * @param lhs the left, "before", object
 * @param rhs the right, "after", object
 */
function objDiff(lhs, rhs) {
    const res = {};
    if ((typeof (lhs) === 'object') && (typeof (rhs) === 'object')) {
        Object.keys(lhs || {}).forEach(key => {
            if ((rhs[key] === undefined)) {
                res['-' + key] = lhs[key];
            }
            else {
                const sub = objDiff(lhs[key], rhs[key]);
                if (sub === null) {
                    res['-' + key] = lhs[key];
                    res['+' + key] = rhs[key];
                }
                else if (Object.keys(sub).length !== 0) {
                    res[key] = sub;
                }
            }
        });
        Object.keys(rhs || {}).forEach(key => {
            if ((lhs[key] === undefined)) {
                res['+' + key] = rhs[key];
            }
        });
    }
    else if (lhs !== rhs) {
        return null;
    }
    return res;
}
exports.objDiff = objDiff;
/**
 * spawn this application itself
 * @param args
 */
function spawnSelf(args) {
    const app = electron_1.app || electron_1.remote.app;
    if (process.execPath.endsWith('electron.exe')) {
        // development version
        args = [path.resolve(__dirname, '..', '..')].concat(args);
    }
    child_process_1.spawn(process.execPath, args, {
        detached: true,
    });
}
exports.spawnSelf = spawnSelf;
const labels = ['B', 'KB', 'MB', 'GB', 'TB'];
function bytesToString(bytes) {
    let labelIdx = 0;
    while (bytes >= 1024) {
        ++labelIdx;
        bytes /= 1024;
    }
    try {
        return bytes.toFixed(Math.max(0, labelIdx - 1)) + ' ' + labels[labelIdx];
    }
    catch (err) {
        return '???';
    }
}
exports.bytesToString = bytesToString;
let convertDiv;
function encodeHTML(input) {
    if (input === undefined) {
        return undefined;
    }
    if (convertDiv === undefined) {
        convertDiv = document.createElement('div');
    }
    convertDiv.innerText = input;
    return convertDiv.innerHTML;
}
exports.encodeHTML = encodeHTML;
function decodeHTML(input) {
    if (input === undefined) {
        return undefined;
    }
    if (convertDiv === undefined) {
        convertDiv = document.createElement('div');
    }
    convertDiv.innerHTML = input;
    return convertDiv.innerText;
}
exports.decodeHTML = decodeHTML;
