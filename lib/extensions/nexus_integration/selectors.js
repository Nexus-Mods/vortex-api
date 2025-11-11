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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
    const dl = files[downloadId];
    if (((_c = (_b = (_a = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.ids) === null || _c === void 0 ? void 0 : _c.gameId) == null && ((_e = (_d = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _d === void 0 ? void 0 : _d.meta) === null || _e === void 0 ? void 0 : _e.gameId) == null) {
        return undefined;
    }
    const numericGameId = (0, util_2.nexusGames)().find(g => { var _a, _b, _c, _d, _e; return g.domain_name === (((_c = (_b = (_a = dl.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.ids) === null || _c === void 0 ? void 0 : _c.gameId) || ((_e = (_d = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _d === void 0 ? void 0 : _d.meta) === null || _e === void 0 ? void 0 : _e.domainName)); });
    return {
        gameDomainName: ((_h = (_g = (_f = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _f === void 0 ? void 0 : _f.nexus) === null || _g === void 0 ? void 0 : _g.ids) === null || _h === void 0 ? void 0 : _h.gameId) || ((_k = (_j = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _j === void 0 ? void 0 : _j.meta) === null || _k === void 0 ? void 0 : _k.domainName),
        fileId: (_p = (_o = (_m = (_l = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _l === void 0 ? void 0 : _l.nexus) === null || _m === void 0 ? void 0 : _m.ids) === null || _o === void 0 ? void 0 : _o.fileId) === null || _p === void 0 ? void 0 : _p.toString(),
        modId: (_t = (_s = (_r = (_q = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _q === void 0 ? void 0 : _q.nexus) === null || _r === void 0 ? void 0 : _r.ids) === null || _s === void 0 ? void 0 : _s.modId) === null || _t === void 0 ? void 0 : _t.toString(),
        numericGameId: (numericGameId === null || numericGameId === void 0 ? void 0 : numericGameId.id) || parseInt((_v = (_u = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _u === void 0 ? void 0 : _u.meta) === null || _v === void 0 ? void 0 : _v.gameId),
        collectionSlug: (_y = (_x = (_w = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _w === void 0 ? void 0 : _w.nexus) === null || _x === void 0 ? void 0 : _x.ids) === null || _y === void 0 ? void 0 : _y.collectionSlug,
        collectionId: (_3 = (_2 = (_1 = (_0 = (_z = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _z === void 0 ? void 0 : _z.nexus) === null || _0 === void 0 ? void 0 : _0.ids) === null || _1 === void 0 ? void 0 : _1.collectionId) === null || _2 === void 0 ? void 0 : _2.toString()) !== null && _3 !== void 0 ? _3 : (_8 = (_7 = (_6 = (_5 = (_4 = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _4 === void 0 ? void 0 : _4.nexus) === null || _5 === void 0 ? void 0 : _5.revisionInfo) === null || _6 === void 0 ? void 0 : _6.collection) === null || _7 === void 0 ? void 0 : _7.id) === null || _8 === void 0 ? void 0 : _8.toString(),
        revisionId: (_12 = (_11 = (_10 = (_9 = dl === null || dl === void 0 ? void 0 : dl.modInfo) === null || _9 === void 0 ? void 0 : _9.nexus) === null || _10 === void 0 ? void 0 : _10.ids) === null || _11 === void 0 ? void 0 : _11.revisionId) === null || _12 === void 0 ? void 0 : _12.toString(),
    };
});
