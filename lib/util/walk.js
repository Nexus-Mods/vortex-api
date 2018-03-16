"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("./fs");
const Promise = require("bluebird");
const path = require("path");
/**
 * recursively walk the target directory
 *
 * @param {string} target the directory to search
 * @param {any} callback called on each file and directory encountered. Receives the path and
 *                       corresponding fs stats as parameter. Should return a promise that will be
 *                       awaited before proceeding to the next directory. If this promise is
 *                       rejected, the walk is interrupted
 * @returns {Promise<void>} a promise that is resolved once the search is complete
 */
function walk(target, callback, options) {
    const opt = options || {};
    let allFileNames;
    return fs.readdirAsync(target)
        .then((fileNames) => {
        allFileNames = fileNames;
        return Promise.map(fileNames, (statPath) => fs.lstatAsync(path.join(target, statPath)).reflect(), { concurrency: 50 });
    }).then((res) => {
        // use the stats results to generate a list of paths of the directories
        // in the searched directory
        const subDirs = [];
        const cbPromises = [];
        res.forEach((stat, idx) => {
            if (!stat.isFulfilled()) {
                return;
            }
            const fullPath = path.join(target, allFileNames[idx]);
            cbPromises.push(callback(fullPath, stat.value()));
            if (stat.value().isDirectory()) {
                subDirs.push(fullPath);
            }
        });
        return Promise.all(cbPromises.concat(Promise.mapSeries(subDirs, (subDir) => walk(subDir, callback))));
    })
        .catch(err => {
        if ((opt.ignoreErrors !== undefined)
            && ((opt.ignoreErrors === true)
                || (opt.ignoreErrors.indexOf(err.code) !== -1))) {
            return Promise.resolve();
        }
        else {
            return Promise.reject(err);
        }
    })
        .then(() => undefined);
}
exports.default = walk;
