"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("../../extensions/profile_management/selectors");
const getDownloadPath_1 = require("./util/getDownloadPath");
const reselect_1 = require("reselect");
const re_reselect_1 = require("re-reselect");
const downloadPathPattern = (state) => state.settings.downloads.path;
exports.downloadPath = reselect_1.createSelector(downloadPathPattern, selectors_1.activeGameId, (inPath, inGameMode) => getDownloadPath_1.default(inPath, inGameMode));
exports.downloadPathForGame = re_reselect_1.default(downloadPathPattern, (state, gameId) => gameId, (inPath, gameId) => getDownloadPath_1.default(inPath, gameId))((state, gameId) => gameId);
