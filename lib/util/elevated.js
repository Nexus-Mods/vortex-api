"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const fs = require("fs");
const path = require("path");
const tmp = require("tmp");
let DUMMYUNIONNAME;
let SHELLEXECUTEINFO;
let voidPtr;
let SHELLEXECUTEINFOPtr;
let shell32;
function initTypes() {
    if (DUMMYUNIONNAME !== undefined) {
        return;
    }
    const ref = require('ref');
    const struct = require('ref-struct');
    const uniontype = require('ref-union');
    voidPtr = ref.refType(ref.types.void);
    DUMMYUNIONNAME = uniontype({
        hIcon: voidPtr,
        hMonitor: voidPtr,
    });
    SHELLEXECUTEINFO = struct({
        cbSize: ref.types.uint32,
        fMask: ref.types.uint32,
        hwnd: voidPtr,
        lpVerb: ref.types.CString,
        lpFile: ref.types.CString,
        lpParameters: ref.types.CString,
        lpDirectory: ref.types.CString,
        nShow: ref.types.int32,
        hInstApp: voidPtr,
        lpIDList: voidPtr,
        lpClass: ref.types.CString,
        hkeyClass: voidPtr,
        dwHotKey: ref.types.uint32, DUMMYUNIONNAME,
        hProcess: voidPtr,
    });
    SHELLEXECUTEINFOPtr = ref.refType(SHELLEXECUTEINFO);
}
function execInfo(scriptPath) {
    const ref = require('ref');
    const instApp = ref.alloc(voidPtr);
    return new SHELLEXECUTEINFO({
        cbSize: SHELLEXECUTEINFO.size,
        fMask: 0,
        hwnd: null,
        lpVerb: 'runas',
        lpFile: process.execPath,
        lpParameters: `--run ${scriptPath}`,
        lpDirectory: path.dirname(process.execPath),
        nShow: 0x01,
        hInstApp: instApp,
        lpIDList: null,
        lpCLass: null,
        hkeyClass: null,
        dwHotKey: null,
        DUMMYUNIONNAME: {
            hIcon: null,
            hMonitor: null,
        },
        hProcess: ref.alloc(voidPtr),
    });
}
function elevatedMain(baseDir, moduleRoot, ipcPath, main) {
    const elevatedPath = require('path');
    const requireOrig = require;
    const newRequire = (id) => {
        if (id.startsWith('.')) {
            return requireOrig(elevatedPath.join(baseDir, id));
        }
        else {
            return requireOrig(id);
        }
    };
    newRequire.requireActual = newRequire;
    require = newRequire;
    module.paths.push(moduleRoot);
    const ipc = require('node-ipc');
    ipc.connectTo(ipcPath, ipcPath, () => {
        ipc.of[ipcPath].on('quit', () => {
            process.exit(0);
        });
        main(ipc.of[ipcPath]);
    });
}
/**
 * run a function as an elevated process (windows only!).
 * This is quite a hack because obviously windows doesn't allow us to elevate a
 * running process so instead we have to store the function code into a file and start a
 * new node process elevated to execute that script.
 * Through some hackery the base path for relative requires can be set.
 *
 * IMPORTANT As a consequence the function can not bind any parameters
 *
 * @param {string} ipcPath a unique identifier for a local ipc channel that can be used to
 *                 communicate with the elevated process (as stdin/stdout can not be)
 *                 redirected
 * @param {Function} func The closure to run in the elevated process. Try to avoid
 *                        'fancy' code.
 * @param {Object} args arguments to be passed into the elevated process
 * @param {string} moduleBase base directory for all relative require call. If undefined,
 *                 the directory of this very file (elevated.js) will be used.
 * @returns {Promise<any>} a promise that will be resolved as soon as the process is started
 *                         (which happens after the user confirmed elevation)
 */
function runElevated(ipcPath, func, args, moduleBase) {
    initTypes();
    if (shell32 === undefined) {
        if (process.platform === 'win32') {
            const ffi = require('ffi');
            shell32 = new ffi.Library('Shell32', {
                ShellExecuteExA: ['bool', [SHELLEXECUTEINFOPtr]],
            });
        }
    }
    return new Promise((resolve, reject) => {
        tmp.file((err, tmpPath, fd, cleanup) => {
            if (err) {
                return reject(err);
            }
            const projectRoot = process.env.NODE_ENV === 'development'
                ? path.resolve(__dirname, '../../node_modules').split('\\').join('/')
                : path.resolve(__dirname, '../node_modules').split('\\').join('/');
            if (moduleBase === undefined) {
                moduleBase = __dirname;
            }
            moduleBase = moduleBase.split('\\').join('/');
            let mainBody = elevatedMain.toString();
            mainBody = mainBody.slice(mainBody.indexOf('{') + 1, mainBody.lastIndexOf('}'));
            let prog = `
        let moduleRoot = '${projectRoot}';\n
        let baseDir = '${moduleBase}';\n
        let ipcPath = '${ipcPath}';\n
      `;
            if (args !== undefined) {
                for (const argKey of Object.keys(args)) {
                    if (args.hasOwnProperty(argKey)) {
                        prog += `let ${argKey} = ${JSON.stringify(args[argKey])};\n`;
                    }
                }
            }
            prog += `
        let main = ${func.toString()};\n
        ${mainBody}\n
      `;
            fs.write(fd, prog, (writeErr, written, str) => {
                if (writeErr) {
                    cleanup();
                    return reject(writeErr);
                }
                const runInfo = execInfo(tmpPath);
                shell32.ShellExecuteExA.async(runInfo.ref(), (execErr, res) => {
                    // this is reached after the user confirmed the UAC dialog but before node
                    // has read the script source so we have to give a little time for that to
                    // happen before we can remove the tmp file
                    setTimeout(cleanup, 5000);
                    if (execErr) {
                        reject(execErr);
                    }
                    else {
                        if (res) {
                            resolve(res);
                        }
                        else {
                            reject(new Error(`ShellExecute failed, errorcode ${res}`));
                        }
                    }
                });
            });
        });
    });
}
exports.default = runElevated;
