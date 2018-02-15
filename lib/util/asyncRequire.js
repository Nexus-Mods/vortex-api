"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const fs = require("fs");
const path = require("path");
const React = require("react");
const reqResolve = require("resolve");
// tslint:disable-next-line
const Module = require('module');
/**
 * require a module asynchronously.
 * This makes only the file read asynchronous, compilation is still
 * synchronous (node is single threaded after all)
 * Use with care: does not add the module to the cache so using it
 * only makes sense if you know the module is required only once.
 *
 * @export
 * @param {string} id
 * @param {string} [basedir]
 * @returns {Promise<any>}
 */
function default_1(id, basedir) {
    return new Promise((resolve, reject) => {
        const options = basedir !== undefined ? { basedir } : undefined;
        reqResolve(id, options, (resErr, filePath) => {
            if (resErr) {
                return reject(resErr);
            }
            fs.readFile(filePath, (err, data) => {
                if (err !== null) {
                    return reject(new Error(`failed to read ${filePath}: ${err.message}`));
                }
                const paths = Module._nodeModulePaths(path.dirname(filePath));
                const mod = new Module(filePath, module.parent);
                mod.filename = filePath;
                mod.paths = paths;
                mod._compile(data.toString('utf-8'), filePath);
                resolve(mod.exports);
            });
        });
    });
}
exports.default = default_1;
class Placeholder extends React.Component {
    render() {
        return null;
    }
}
exports.Placeholder = Placeholder;
