"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
exports.setMaxDownloads = safeCreateAction_1.default('SET_MAX_DOWNLOADS', max => max);
exports.setShowDLDropzone = safeCreateAction_1.default('SET_SHOW_DL_DROPZONE', show => show);
exports.setShowDLGraph = safeCreateAction_1.default('SET_SHOW_DL_GRAPH', show => show);
