"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storeHelper_1 = require("../../../util/storeHelper");
const electron_1 = require("electron");
const path = require("path");
const format = require("string-template");
const app = electron_1.remote !== undefined ? electron_1.remote.app : electron_1.app;
exports.pathDefaults = {
    base: path.join('{USERDATA}', '{GAME}'),
    download: path.join('{base}', 'downloads'),
    install: path.join('{base}', 'mods'),
};
let userData;
function resolvePath(key, paths, gameMode) {
    if (gameMode === undefined) {
        return undefined;
    }
    if (userData === undefined) {
        // if called in the renderer process, app.getPath requires an ipc.
        // since this function may be called a lot and userData does't change after
        // startup, caching it makes sense.
        // (userData _may_ change during startup though so caching during inital loading of this
        //  module would be unsafe!)
        userData = app.getPath('userData');
    }
    const formatKeys = {
        USERDATA: userData,
        GAME: gameMode,
        base: undefined,
    };
    if (key !== 'base') {
        formatKeys.base = resolvePath('base', paths, gameMode);
    }
    const actualPath = storeHelper_1.getSafe(paths, [gameMode, key], exports.pathDefaults[key]);
    return format(actualPath, formatKeys);
}
exports.default = resolvePath;
