"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrors_1 = require("./CustomErrors");
const log_1 = require("./log");
const bluebird_1 = __importDefault(require("bluebird"));
const electron_1 = require("electron");
let winapi;
try {
    // tslint:disable-next-line:no-var-requires
    winapi = require('winapi-bindings');
}
catch (err) {
    // nop
}
// apparently the browser process is treated as the foreground process and only it
// can bring a window to the foreground
if (electron_1.ipcMain !== undefined && ((winapi === null || winapi === void 0 ? void 0 : winapi.ShellExecuteEx) !== undefined)) {
    electron_1.ipcMain.on('__opn_win32', (evt, target) => {
        try {
            winapi.ShellExecuteEx({ verb: 'open', show: 'foreground', file: target, mask: ['flag_no_ui'] });
        }
        catch (err) {
            (0, log_1.log)('warn', 'failed to run', { target, error: err.message });
        }
    });
}
function open(target, wait) {
    // TODO: technically with ShellExecuteEx we should be able to reproduce the wait behaviour
    if (((winapi === null || winapi === void 0 ? void 0 : winapi.ShellExecuteEx) !== undefined) && !wait) {
        try {
            if (electron_1.ipcRenderer !== undefined) {
                electron_1.ipcRenderer.send('__opn_win32', target);
                return bluebird_1.default.resolve();
            }
            else {
                try {
                    winapi.ShellExecuteEx({ verb: 'open', show: 'foreground', file: target, mask: ['flag_no_ui'] });
                    return bluebird_1.default.resolve();
                }
                catch (err) {
                    return bluebird_1.default.reject(err);
                }
            }
        }
        catch (err) {
            if (err.systemCode === 1155) {
                return bluebird_1.default.reject(new CustomErrors_1.MissingInterpreter('No default application set up for file type.', err.path));
            }
            else if (err.systemCode === 1223) {
                // Operation was canceled by the user.
                //  https://docs.microsoft.com/en-us/windows/win32/debug/system-error-codes--1000-1299-
                return bluebird_1.default.resolve();
            }
            else {
                return bluebird_1.default.reject(err);
            }
        }
    }
    else {
        if (wait) {
            return bluebird_1.default.resolve(electron_1.shell.openExternal(target, { activate: true }));
        }
        else {
            electron_1.shell.openExternal(target, { activate: true });
            return bluebird_1.default.resolve();
        }
    }
}
exports.default = open;
