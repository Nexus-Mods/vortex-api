"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../util/log");
const fs = require("./fs");
const Promise = require("bluebird");
const path = require("path");
const storeHelper_1 = require("./storeHelper");
function genNormalizeSeparator(func) {
    const sepRE = /\//g;
    return (input) => func(input).replace(sepRE, path.sep);
}
function genNormalizeUnicode(func) {
    return (input) => func(input).normalize();
}
function genNormalizeRelative(func) {
    return (input) => path.normalize(func(input)).replace(/[\\/]$/, '');
}
function genNormalizeCase() {
    return (input) => input.toUpperCase();
}
function isCaseSensitiveFailed(testPath) {
    const parentPath = path.dirname(testPath);
    if (parentPath === testPath) {
        log_1.log('warn', 'failed to determine case sensitivity', { testPath });
        // on windows, assume case insensitive, everywhere else: case sensitive
        return Promise.resolve(process.platform !== 'win32');
    }
    else {
        return isCaseSensitive(parentPath);
    }
}
function isCaseSensitive(testPath) {
    return fs.readdirAsync(testPath)
        .then(files => {
        // we need a filename that contains letters with case variants, otherwise we can't
        // determine case sensitivity
        const fileName = files.find(file => file !== file.toLowerCase() || file !== file.toUpperCase());
        if (fileName === undefined) {
            return null;
        }
        // to find out if case sensitive, stat the file itself and the upper and lower case variants.
        // if they are all the same file, it's case insensitive
        return Promise.map([fileName, fileName.toLowerCase(), fileName.toUpperCase()], file => fs.statAsync(path.join(testPath, file)).reflect());
    })
        .then((stats) => {
        if (stats === null) {
            return isCaseSensitiveFailed(testPath);
        }
        if (stats[1].isFulfilled()
            && stats[2].isFulfilled()
            && (stats[0].value().ino === stats[1].value().ino)
            && (stats[0].value().ino === stats[2].value().ino)) {
            log_1.log('debug', 'file system case-insensitive', { testPath });
            return false;
        }
        else {
            log_1.log('debug', 'file system case-sensitive', { testPath });
            return true;
        }
    })
        .catch(err => (err.code === 'EPERM')
        ? Promise.resolve(process.platform !== 'win32')
        : Promise.reject(err));
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
    return isCaseSensitive(testPath)
        .then(caseSensitive => {
        let funcOut = caseSensitive
            ? (input) => input
            : genNormalizeCase();
        if (storeHelper_1.getSafe(parameters, ['separators'], true) && (process.platform === 'win32')) {
            funcOut = genNormalizeSeparator(funcOut);
        }
        if (storeHelper_1.getSafe(parameters, ['unicode'], true)) {
            funcOut = genNormalizeUnicode(funcOut);
        }
        if (storeHelper_1.getSafe(parameters, ['relative'], true)) {
            funcOut = genNormalizeRelative(funcOut);
        }
        return funcOut;
    })
        .catch(err => {
        if (err.code === 'ENOENT') {
            const parent = path.dirname(testPath);
            return (parent === testPath)
                ? Promise.reject(err)
                : getNormalizeFunc(parent);
        }
        else {
            return Promise.reject(err);
        }
    });
}
exports.default = getNormalizeFunc;
