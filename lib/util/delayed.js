"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
/**
 * promise-equivalent of setTimeout
 *
 * @export
 * @param {number} durationMS
 * @param {*} [value]
 * @returns
 */
function delayed(durationMS, value) {
    let timer;
    let reject;
    const res = new Promise((resolve, rejectPar) => {
        timer = setTimeout(() => {
            resolve(value);
        }, durationMS);
        reject = rejectPar;
    });
    res.cancel = () => {
        clearTimeout(timer);
        reject(new Error('delayed operation canceled'));
    };
    return res;
}
exports.delayed = delayed;
exports.default = delayed;
