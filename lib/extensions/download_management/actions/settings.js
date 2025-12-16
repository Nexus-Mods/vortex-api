"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCollectionConcurrency = exports.setMaxBandwidth = exports.setCopyOnIFF = exports.setShowDLGraph = exports.setShowDLDropzone = exports.setDownloadPath = exports.setMaxDownloads = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
exports.setMaxDownloads = (0, safeCreateAction_1.default)("SET_MAX_DOWNLOADS", (max) => max);
exports.setDownloadPath = (0, safeCreateAction_1.default)("SET_DOWNLOAD_PATH", (dlPath) => dlPath);
exports.setShowDLDropzone = (0, safeCreateAction_1.default)("SET_SHOW_DL_DROPZONE", (show) => show);
exports.setShowDLGraph = (0, safeCreateAction_1.default)("SET_SHOW_DL_GRAPH", (show) => show);
exports.setCopyOnIFF = (0, safeCreateAction_1.default)("SET_COPY_ON_IFF", (enabled) => enabled);
exports.setMaxBandwidth = (0, safeCreateAction_1.default)("SET_MAX_BANDWIDTH", (bandwidth) => bandwidth);
exports.setCollectionConcurrency = (0, safeCreateAction_1.default)("SET_COLLECTION_INSTALL_DOWNLOAD_CONCURRENCY", (enabled) => enabled);
