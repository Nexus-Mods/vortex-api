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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    const dl = files[downloadId];
    if (((_c = (_b = (_a = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.ids) === null || _c === void 0 ? void 0 : _c.gameId) == null && ((_e = (_d = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _d === void 0 ? void 0 : _d.meta) === null || _e === void 0 ? void 0 : _e.gameId) == null) {
        return undefined;
    }
    const numericGameId = (0, util_2.nexusGames)().find(g => g.domain_name === dl.modInfo.nexus.ids.gameId);
    return {
        gameDomainName: dl.modInfo.nexus.ids.gameId || ((_g = (_f = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _f === void 0 ? void 0 : _f.meta) === null || _g === void 0 ? void 0 : _g.domainName),
        fileId: dl.modInfo.nexus.ids.fileId,
        modId: dl.modInfo.nexus.ids.modId,
        numericGameId: ((_h = numericGameId === null || numericGameId === void 0 ? void 0 : numericGameId.id) === null || _h === void 0 ? void 0 : _h.toString()) || ((_l = (_k = (_j = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _j === void 0 ? void 0 : _j.meta) === null || _k === void 0 ? void 0 : _k.gameId) === null || _l === void 0 ? void 0 : _l.toString()),
        collectionSlug: (_p = (_o = (_m = dl.modInfo) === null || _m === void 0 ? void 0 : _m.nexus) === null || _o === void 0 ? void 0 : _o.ids) === null || _p === void 0 ? void 0 : _p.collectionSlug,
        collectionId: (_s = (_r = (_q = dl.modInfo) === null || _q === void 0 ? void 0 : _q.nexus) === null || _r === void 0 ? void 0 : _r.ids) === null || _s === void 0 ? void 0 : _s.collectionId,
        revisionId: (_u = (_t = dl.modInfo.nexus.ids) === null || _t === void 0 ? void 0 : _t.revisionId) === null || _u === void 0 ? void 0 : _u.toString(),
    };
});
