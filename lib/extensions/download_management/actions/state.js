"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCompatibleGames = exports.setDownloadTime = exports.setDownloadInstalled = exports.setDownloadModInfo = exports.mergeDownloadModInfo = exports.addLocalDownload = exports.setDownloadSpeeds = exports.setDownloadSpeed = exports.removeDownload = exports.setDownloadInterrupted = exports.pauseDownload = exports.setDownloadHashByFile = exports.setDownloadHash = exports.finishDownload = exports.finalizingDownload = exports.startDownload = exports.setDownloadPausable = exports.setDownloadFilePath = exports.finalizingProgress = exports.downloadProgress = exports.initDownload = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
const log_1 = require("../../../util/log");
/**
 * initialize a download (it may not be started immediately)
 */
exports.initDownload = (0, safeCreateAction_1.default)('INIT_DOWNLOAD', (id, urls, modInfo, games) => ({
    id, urls, modInfo, games,
}));
/**
 * set download progress (in percent)
 */
exports.downloadProgress = (0, safeCreateAction_1.default)('DOWNLOAD_PROGRESS', (id, received, total, chunks, urls) => ({ id, received, total, chunks, urls }));
exports.finalizingProgress = (0, safeCreateAction_1.default)('FINALIZING_PROGRESS', (id, progress) => ({ id, progress }));
/**
 * set/change the file path
 */
exports.setDownloadFilePath = (0, safeCreateAction_1.default)('SET_DOWNLOAD_FILEPATH', (id, filePath) => ({ id, filePath }));
/**
 * mark the download as pausable or not
 */
exports.setDownloadPausable = (0, safeCreateAction_1.default)('SET_DOWNLOAD_PAUSABLE', (id, pausable) => ({ id, pausable }));
/**
 * mark download as started
 */
exports.startDownload = (0, safeCreateAction_1.default)('START_DOWNLOAD', (id) => ({ id }));
/**
 * mark download as finalizing, meaning the file has been downloaded fully,
 * during this phase checksums are calculated for example
 */
exports.finalizingDownload = (0, safeCreateAction_1.default)('FINALIZING_DOWNLOAD', (id) => ({ id }));
/**
 * mark download as finished
 */
exports.finishDownload = (0, safeCreateAction_1.default)('FINISH_DOWNLOAD', (id, state, failCause) => ({ id, state, failCause }));
exports.setDownloadHash = (0, safeCreateAction_1.default)('SET_DOWNLOAD_HASH', (id, fileMD5) => ({ id, fileMD5 }));
exports.setDownloadHashByFile = (0, safeCreateAction_1.default)('SET_DOWNLOAD_HASH_BY_FILE', (fileName, fileMD5, fileSize) => ({ fileName, fileMD5, fileSize }));
/**
 * mark download paused
 */
exports.pauseDownload = (0, safeCreateAction_1.default)('PAUSE_DOWNLOAD', (id, paused, chunks) => ({ id, paused, chunks }));
exports.setDownloadInterrupted = (0, safeCreateAction_1.default)('SET_DOWNLOAD_INTERRUPTED', (id, realReceived) => ({ id, realReceived }));
/**
 * remove a download (and associated file if any)
 */
exports.removeDownload = (0, safeCreateAction_1.default)('REMOVE_DOWNLOAD', (id) => ({ id }));
/**
 * sets the current download speed in bytes/second
 */
exports.setDownloadSpeed = (0, safeCreateAction_1.default)('SET_DOWNLOAD_SPEED', speed => speed, () => ({ forward: false, scope: 'local' }));
exports.setDownloadSpeeds = (0, safeCreateAction_1.default)('SET_DOWNLOAD_SPEEDS', speeds => speeds);
/**
 * add a file that has been found on disk but where we weren't involved
 * in the download.
 */
exports.addLocalDownload = (0, safeCreateAction_1.default)('ADD_LOCAL_DOWNLOAD', (id, game, localPath, fileSize) => ({ id, game, localPath, fileSize }));
exports.mergeDownloadModInfo = (0, safeCreateAction_1.default)('MERGE_DOWNLOAD_MODINFO', (id, value) => ({ id, value }));
exports.setDownloadModInfo = (0, safeCreateAction_1.default)('SET_DOWNLOAD_MODINFO', (id, key, value) => {
    if ((key === 'game') && Array.isArray(value)) {
        const err = new Error();
        (0, log_1.log)('error', 'setting invalid gameid', { game: value, stack: err.stack });
        value = value[0];
    }
    return { id, key, value };
});
exports.setDownloadInstalled = (0, safeCreateAction_1.default)('SET_DOWNLOAD_INSTALLED', (id, gameId, modId) => ({ id, gameId, modId }));
exports.setDownloadTime = (0, safeCreateAction_1.default)('SET_DOWNLOAD_TIME', (id, time) => ({ id, time }));
exports.setCompatibleGames = (0, safeCreateAction_1.default)('SET_COMPATIBLE_GAMES', (id, games) => ({ id, games }));
