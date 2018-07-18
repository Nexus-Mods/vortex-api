"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const opn = require("opn");
let voidPtr;
let shell32;
class Win32Error extends Error {
    constructor(message, code) {
        super(`${message} (${code})`);
        this.name = this.constructor.name;
        this.mCode = code;
    }
    get code() {
        return this.mCode;
    }
}
exports.Win32Error = Win32Error;
function initTypes() {
    if ((shell32 !== undefined) || (process.platform !== 'win32')) {
        return;
    }
    const ref = require('ref');
    voidPtr = ref.refType(ref.types.void);
    if (shell32 === undefined) {
        const ffi = require('ffi');
        const ref = require('ref');
        shell32 = new ffi.Library('Shell32', {
            ShellExecuteA: [ref.types.int32, [voidPtr, ref.types.CString, ref.types.CString,
                    ref.types.CString, ref.types.CString, ref.types.int32]],
        });
    }
}
function open(target, wait) {
    initTypes();
    // TODO: can't implement wait behaviour with ShellExecute, would require ShellExecuteEx
    //   and then we can't get at error codes because GetLastError doesn't work with ffi...
    if ((shell32 !== undefined) && !wait) {
        return new Promise((resolve, reject) => {
            shell32.ShellExecuteA.async(null, 'open', target, null, null, 5, (execErr, res) => {
                if (execErr !== null) {
                    return reject(execErr);
                }
                if (res <= 32) {
                    return reject(new Win32Error('ShellExecute failed', res));
                }
                return resolve();
            });
        });
    }
    else {
        return Promise.resolve(opn(target, {
            wait,
        })).then(() => null);
    }
}
exports.default = open;
