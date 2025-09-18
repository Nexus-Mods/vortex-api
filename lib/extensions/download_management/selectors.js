"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeDownloads = exports.queueClearingDownloads = exports.downloadPath = void 0;
exports.downloadPathForGame = downloadPathForGame;
const selectors_1 = require("../../extensions/profile_management/selectors");
const getDownloadPath_1 = __importDefault(require("./util/getDownloadPath"));
const re_reselect_1 = __importDefault(require("re-reselect"));
const reselect_1 = require("reselect");
const downloadPathPattern = (state) => state.settings.downloads.path;
exports.downloadPath = (0, reselect_1.createSelector)(downloadPathPattern, selectors_1.activeGameId, (inPath, inGameId) => (0, getDownloadPath_1.default)(inPath, inGameId));
const downloadPathForGameImpl = (0, re_reselect_1.default)(downloadPathPattern, (state, gameId) => gameId, (inPath, gameId) => (0, getDownloadPath_1.default)(inPath, gameId))((state, gameId) => gameId);
function downloadPathForGame(state, gameId) {
    var _a;
    return downloadPathForGameImpl(state, (_a = gameId !== null && gameId !== void 0 ? gameId : (0, selectors_1.activeGameId)(state)) !== null && _a !== void 0 ? _a : '__invalid');
}
const downloadFiles = (state) => state.persistent.downloads.files;
const ACTIVE_STATES = ['finalizing', 'started'];
const QUEUE_CLEAR_STATES = ['started', 'paused', 'init'];
exports.queueClearingDownloads = (0, reselect_1.createSelector)(downloadFiles, (files) => Object.keys(files).reduce((prev, id) => {
    if (QUEUE_CLEAR_STATES.includes(files[id].state)) {
        prev[id] = files[id];
    }
    return prev;
}, {}));
exports.activeDownloads = (0, reselect_1.createSelector)(downloadFiles, (files) => Object.keys(files).reduce((prev, id) => {
    if (ACTIVE_STATES.includes(files[id].state)) {
        prev[id] = files[id];
    }
    return prev;
}, {}));
