"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRemoteCallSync = makeRemoteCallSync;
const electron_1 = require("electron");
const electron = __importStar(require("electron"));
const shortid_1 = require("shortid");
const log_1 = require("./log");
const IPC_CHANNEL = '__remote_electron_invocation';
const IPC_CHANNEL_REPLY = IPC_CHANNEL + '_reply';
const knownCalls = {};
const knownCallsSync = {};
const outstandingCalls = {};
(_a = electron_1.ipcMain === null || electron_1.ipcMain === void 0 ? void 0 : electron_1.ipcMain.on) === null || _a === void 0 ? void 0 : _a.call(electron_1.ipcMain, IPC_CHANNEL, (event, arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, callId, args } = JSON.parse(arg);
    if (knownCalls[id] === undefined) {
        event.sender.send(IPC_CHANNEL_REPLY, JSON.stringify({ callId, error: new Error('invalid remote call') }));
        return;
    }
    try {
        const result = yield knownCalls[id](electron, event.sender, ...args);
        event.sender.send(IPC_CHANNEL_REPLY, JSON.stringify({ callId, result }));
    }
    catch (error) {
        event.sender.send(IPC_CHANNEL_REPLY, JSON.stringify({ callId, error }));
    }
}));
(_b = electron_1.ipcRenderer === null || electron_1.ipcRenderer === void 0 ? void 0 : electron_1.ipcRenderer.on) === null || _b === void 0 ? void 0 : _b.call(electron_1.ipcRenderer, IPC_CHANNEL_REPLY, (event, arg) => {
    const { callId, error, result } = JSON.parse(arg);
    if (outstandingCalls[callId] === undefined) {
        (0, log_1.log)('warn', 'unexpected remote reply', arg);
        return;
    }
    if (error !== undefined) {
        outstandingCalls[callId].reject(error);
    }
    else {
        outstandingCalls[callId].resolve(result);
    }
    delete outstandingCalls[callId];
});
(_c = electron_1.ipcMain === null || electron_1.ipcMain === void 0 ? void 0 : electron_1.ipcMain.on) === null || _c === void 0 ? void 0 : _c.call(electron_1.ipcMain, IPC_CHANNEL + '_sync', (event, arg) => {
    const { id, callId, args } = JSON.parse(arg);
    try {
        event.returnValue = {
            error: null,
            result: knownCallsSync[id](electron, event.sender, ...args),
        };
    }
    catch (error) {
        event.returnValue = { error };
    }
});
function makeRemoteCallSync(id, cb) {
    if (electron_1.ipcRenderer !== undefined) {
        return (...args) => {
            const callId = (0, shortid_1.generate)();
            const res = electron_1.ipcRenderer.sendSync(IPC_CHANNEL + '_sync', JSON.stringify({ id, args, callId }));
            if (res.error !== null) {
                throw res.error;
            }
            else {
                return res.result;
            }
        };
    }
    else {
        knownCallsSync[id] = cb;
        return (...args) => {
            var _a, _b;
            return cb(electron, (_b = (_a = electron.webContents) === null || _a === void 0 ? void 0 : _a.getFocusedWebContents) === null || _b === void 0 ? void 0 : _b.call(_a), ...args);
        };
    }
}
function makeRemoteCall(id, cb) {
    if (electron_1.ipcRenderer !== undefined) {
        return (...args) => {
            const callId = (0, shortid_1.generate)();
            return new Promise((resolve, reject) => {
                outstandingCalls[callId] = { resolve, reject };
                electron_1.ipcRenderer.send(IPC_CHANNEL, JSON.stringify({ id, args, callId }));
            });
        };
    }
    else {
        knownCalls[id] = cb;
        return (...args) => {
            return cb(electron, electron.webContents.getFocusedWebContents(), ...args);
        };
    }
}
exports.default = makeRemoteCall;
