"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeCaseInsensitive_1 = require("../../../util/makeCaseInsensitive");
const electron_1 = require("electron");
const path = require("path");
const format = require("string-template");
const app = electron_1.remote !== undefined ? electron_1.remote.app : electron_1.app;
let userData;
function getInstallPathPattern(pattern) {
    return pattern || path.join('{USERDATA}', '{GAME}', 'mods');
}
exports.getInstallPathPattern = getInstallPathPattern;
function getInstallPath(pattern, gameId) {
    if (userData === undefined) {
        // cached to avoid ipcs from renderer -> main process
        userData = app.getPath('userData');
    }
    const formatKeys = makeCaseInsensitive_1.default({
        userdata: userData,
        game: gameId,
    });
    return format(getInstallPathPattern(pattern), formatKeys);
}
exports.default = getInstallPath;
