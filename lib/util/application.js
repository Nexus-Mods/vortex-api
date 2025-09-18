"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setApplication = setApplication;
exports.getApplication = getApplication;
const local_1 = __importDefault(require("./local"));
const app = (0, local_1.default)('application_global', { inst: {
        name: 'vortex',
        version: '0.0.1',
        isFocused: true,
        window: null,
        platform: 'fallback',
        platformVersion: '1.0.0',
        memory: {
            total: 0,
        },
        quit: (code) => process['exit'](code),
    } });
function setApplication(appIn) {
    app.inst = appIn;
}
function getApplication() {
    return app.inst;
}
const proxy = new Proxy(app, {
    get: (target, key, receiver) => Reflect.get(target.inst, key, receiver),
    set: () => { throw new Error('attempt to change read-only object'); },
    deleteProperty: () => { throw new Error('attempt to change read-only object'); },
});
exports.default = proxy;
