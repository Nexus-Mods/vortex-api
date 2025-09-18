"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nexusIdsFromDownloadId = exports.isLoggedIn = exports.apiKey = void 0;
const storeHelper_1 = require("../../util/storeHelper");
const reselect_1 = require("reselect");
const util_1 = require("../../util/util");
const util_2 = require("../nexus_integration/util");
const downloadFiles = (state) => state.persistent.downloads.files;
const apiKey = (state) => (0, storeHelper_1.getSafe)(state, ['confidential', 'account', 'nexus', 'APIKey'], undefined);
exports.apiKey = apiKey;
const isLoggedIn = (state) => {
    var _a, _b;
    const APIKEY = (_a = state.confidential.account['nexus']) === null || _a === void 0 ? void 0 : _a.APIKey;
    const OAuthCredentials = (_b = state.confidential.account['nexus']) === null || _b === void 0 ? void 0 : _b.OAuthCredentials;
    return (0, util_1.truthy)(APIKEY) || (0, util_1.truthy)(OAuthCredentials);
};
exports.isLoggedIn = isLoggedIn;
exports.nexusIdsFromDownloadId = (0, reselect_1.createSelector)(downloadFiles, (state, downloadId) => downloadId, (files, downloadId) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const dl = files[downloadId];
    if (((_c = (_b = (_a = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.ids) === null || _c === void 0 ? void 0 : _c.gameId) == null) {
        return undefined;
    }
    const numericGameId = (0, util_2.nexusGames)().find(g => g.domain_name === dl.modInfo.nexus.ids.gameId);
    return {
        gameDomainName: dl.modInfo.nexus.ids.gameId,
        fileId: dl.modInfo.nexus.ids.fileId,
        modId: dl.modInfo.nexus.ids.modId,
        numericGameId: (_d = numericGameId === null || numericGameId === void 0 ? void 0 : numericGameId.id) === null || _d === void 0 ? void 0 : _d.toString(),
        collectionSlug: (_g = (_f = (_e = dl.modInfo) === null || _e === void 0 ? void 0 : _e.nexus) === null || _f === void 0 ? void 0 : _f.ids) === null || _g === void 0 ? void 0 : _g.collectionSlug,
        collectionId: (_k = (_j = (_h = dl.modInfo) === null || _h === void 0 ? void 0 : _h.nexus) === null || _j === void 0 ? void 0 : _j.ids) === null || _k === void 0 ? void 0 : _k.collectionId,
        revisionId: (_m = (_l = dl.modInfo.nexus.ids) === null || _l === void 0 ? void 0 : _l.revisionId) === null || _m === void 0 ? void 0 : _m.toString(),
    };
});
