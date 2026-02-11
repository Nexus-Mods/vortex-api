"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCompatibleGames = exports.setDownloadTime = exports.setDownloadInstalled = exports.setDownloadModInfo = exports.mergeDownloadModInfo = exports.addLocalDownload = exports.setDownloadSpeeds = exports.setDownloadSpeed = exports.removeDownloadSilent = exports.removeDownload = exports.setDownloadInterrupted = exports.pauseDownload = exports.setDownloadHashByFile = exports.setDownloadHash = exports.finishDownload = exports.finalizingDownload = exports.startDownload = exports.setDownloadPausable = exports.setDownloadFilePath = exports.finalizingProgress = exports.downloadProgress = exports.initDownload = void 0;
const redux_act_1 = require("redux-act");
const log_1 = require("../../../util/log");
/**
 * initialize a download (it may not be started immediately)
 */
exports.initDownload = (0, redux_act_1.createAction)("INIT_DOWNLOAD", (id, urls, modInfo, games) => ({
    id,
    urls,
    modInfo,
    games,
}));
/**
 * set download progress (in percent)
 */
exports.downloadProgress = (0, redux_act_1.createAction)("DOWNLOAD_PROGRESS", (id, received, total, chunks, urls) => ({ id, received, total, chunks, urls }));
exports.finalizingProgress = (0, redux_act_1.createAction)("FINALIZING_PROGRESS", (id, progress) => ({ id, progress }));
/**
 * set/change the file path
 */
exports.setDownloadFilePath = (0, redux_act_1.createAction)("SET_DOWNLOAD_FILEPATH", (id, filePath) => ({ id, filePath }));
/**
 * mark the download as pausable or not
 */
exports.setDownloadPausable = (0, redux_act_1.createAction)("SET_DOWNLOAD_PAUSABLE", (id, pausable) => ({ id, pausable }));
/**
 * mark download as started
 */
exports.startDownload = (0, redux_act_1.createAction)("START_DOWNLOAD", (id) => ({
    id,
}));
/**
 * mark download as finalizing, meaning the file has been downloaded fully,
 * during this phase checksums are calculated for example
 */
exports.finalizingDownload = (0, redux_act_1.createAction)("FINALIZING_DOWNLOAD", (id) => ({ id }));
/**
 * mark download as finished
 */
exports.finishDownload = (0, redux_act_1.createAction)("FINISH_DOWNLOAD", (id, state, failCause) => ({
    id,
    state,
    failCause,
}));
exports.setDownloadHash = (0, redux_act_1.createAction)("SET_DOWNLOAD_HASH", (id, fileMD5) => ({ id, fileMD5 }));
exports.setDownloadHashByFile = (0, redux_act_1.createAction)("SET_DOWNLOAD_HASH_BY_FILE", (fileName, fileMD5, fileSize) => ({
    fileName,
    fileMD5,
    fileSize,
}));
/**
 * mark download paused
 */
exports.pauseDownload = (0, redux_act_1.createAction)("PAUSE_DOWNLOAD", (id, paused, chunks) => ({ id, paused, chunks }));
exports.setDownloadInterrupted = (0, redux_act_1.createAction)("SET_DOWNLOAD_INTERRUPTED", (id, realReceived) => ({ id, realReceived }));
/**
 * remove a download (and associated file if any)
 */
exports.removeDownload = (0, redux_act_1.createAction)("REMOVE_DOWNLOAD", (id) => ({
    id,
}));
exports.removeDownloadSilent = (0, redux_act_1.createAction)("REMOVE_DOWNLOAD_SILENT", (id) => ({ id }));
/**
 * sets the current download speed in bytes/second
 */
exports.setDownloadSpeed = (0, redux_act_1.createAction)("SET_DOWNLOAD_SPEED", (speed) => speed, () => ({ forward: false, scope: "local" }));
exports.setDownloadSpeeds = (0, redux_act_1.createAction)("SET_DOWNLOAD_SPEEDS", (speeds) => speeds);
/**
 * add a file that has been found on disk but where we weren't involved
 * in the download.
 */
exports.addLocalDownload = (0, redux_act_1.createAction)("ADD_LOCAL_DOWNLOAD", (id, game, localPath, fileSize) => ({
    id,
    game,
    localPath,
    fileSize,
}));
exports.mergeDownloadModInfo = (0, redux_act_1.createAction)("MERGE_DOWNLOAD_MODINFO", (id, value) => ({ id, value }));
exports.setDownloadModInfo = (0, redux_act_1.createAction)("SET_DOWNLOAD_MODINFO", (id, key, value) => {
    if (key === "game" && Array.isArray(value)) {
        const err = new Error();
        (0, log_1.log)("error", "setting invalid gameid", { game: value, stack: err.stack });
        value = value[0];
    }
    return { id, key, value };
});
exports.setDownloadInstalled = (0, redux_act_1.createAction)("SET_DOWNLOAD_INSTALLED", (id, gameId, modId) => ({ id, gameId, modId }));
exports.setDownloadTime = (0, redux_act_1.createAction)("SET_DOWNLOAD_TIME", (id, time) => ({ id, time }));
exports.setCompatibleGames = (0, redux_act_1.createAction)("SET_COMPATIBLE_GAMES", (id, games) => ({ id, games }));
