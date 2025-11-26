"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDownloadByIds = exports.activeDownloads = exports.queueClearingDownloads = exports.downloadsForActiveGame = exports.downloadsForGame = exports.downloadPath = void 0;
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
const downloadsForGame = (state, gameId) => {
    return Object.keys(downloadFiles(state)).reduce((prev, id) => {
        const download = downloadFiles(state)[id];
        if (download.game.includes(gameId) && ['finished'].includes(download.state)) {
            prev[id] = download;
        }
        return prev;
    }, {});
};
exports.downloadsForGame = downloadsForGame;
const downloadsForActiveGame = (state) => (0, reselect_1.createSelector)(selectors_1.activeGameId, (inGameId) => (0, exports.downloadsForGame)(state, inGameId));
exports.downloadsForActiveGame = downloadsForActiveGame;
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
exports.getDownloadByIds = (0, reselect_1.createSelector)(downloadFiles, (state, identifiers) => identifiers, (files, identifiers) => {
    return Object.values(files).find(dl => {
        var _a, _b, _c, _d, _e, _f;
        if (dl.game.includes(identifiers.gameId) === false) {
            return false;
        }
        return (((_c = (_b = (_a = dl.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.ids) === null || _c === void 0 ? void 0 : _c.fileId) === identifiers.fileId)
            && (((_f = (_e = (_d = dl.modInfo) === null || _d === void 0 ? void 0 : _d.nexus) === null || _e === void 0 ? void 0 : _e.ids) === null || _f === void 0 ? void 0 : _f.modId) === identifiers.modId);
    });
});
