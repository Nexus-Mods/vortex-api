"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
/**
 * initialize a download (it may not be started immediately)
 */
exports.initDownload = safeCreateAction_1.default('INIT_DOWNLOAD', (id, urls, modInfo, game) => ({
    id, urls, modInfo, game,
}));
/**
 * set download progress (in percent)
 */
exports.downloadProgress = safeCreateAction_1.default('DOWNLOAD_PROGRESS', (id, received, total, chunks, urls) => ({ id, received, total, chunks, urls }));
/**
 * set/change the file path
 */
exports.setDownloadFilePath = safeCreateAction_1.default('SET_DOWNLOAD_FILEPATH', (id, filePath) => ({ id, filePath }));
/**
 * mark download as started
 */
exports.startDownload = safeCreateAction_1.default('START_DOWNLOAD', (id) => ({ id }));
/**
 * mark download as finished
 */
exports.finishDownload = safeCreateAction_1.default('FINISH_DOWNLOAD', (id, state, failCause) => ({ id, state, failCause }));
exports.setDownloadHash = safeCreateAction_1.default('SET_DOWNLOAD_HASH', (id, fileMD5) => ({ id, fileMD5 }));
exports.setDownloadHashByFile = safeCreateAction_1.default('SET_DOWNLOAD_HASH_BY_FILE', (fileName, fileMD5, fileSize) => ({ fileName, fileMD5, fileSize }));
/**
 * mark download paused
 */
exports.pauseDownload = safeCreateAction_1.default('PAUSE_DOWNLOAD', (id, paused, chunks) => ({ id, paused, chunks }));
exports.setDownloadInterrupted = safeCreateAction_1.default('SET_DOWNLOAD_INTERRUPTED', (id, realReceived) => ({ id, realReceived }));
/**
 * remove a download (and associated file if any)
 */
exports.removeDownload = safeCreateAction_1.default('REMOVE_DOWNLOAD', (id) => ({ id }));
/**
 * sets the current download speed in bytes/second
 */
exports.setDownloadSpeed = safeCreateAction_1.default('SET_DOWNLOAD_SPEED', speed => speed);
/**
 * add a file that has been found on disk but where we weren't involved
 * in the download.
 */
exports.addLocalDownload = safeCreateAction_1.default('ADD_LOCAL_DOWNLOAD', (id, game, localPath, fileSize) => ({ id, game, localPath, fileSize }));
exports.setDownloadModInfo = safeCreateAction_1.default('SET_DOWNLOAD_MODINFO', (id, key, value) => ({ id, key, value }));
exports.setDownloadInstalled = safeCreateAction_1.default('SET_DOWNLOAD_INSTALLED', (id, gameId, modId) => ({ id, gameId, modId }));
exports.setDownloadTime = safeCreateAction_1.default('SET_DOWNLOAD_TIME', (id, time) => ({ id, time }));
