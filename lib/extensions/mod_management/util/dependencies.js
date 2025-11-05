"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findModByRef = findModByRef;
exports.lookupFromDownload = lookupFromDownload;
exports.findDownloadByRef = findDownloadByRef;
const CustomErrors_1 = require("../../../util/CustomErrors");
const ConcurrencyLimiter_1 = __importDefault(require("../../../util/ConcurrencyLimiter"));
const log_1 = require("../../../util/log");
const selectors_1 = require("../../../util/selectors");
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const bluebird_1 = __importDefault(require("bluebird"));
const _ = __importStar(require("lodash"));
const minimatch_1 = __importDefault(require("minimatch"));
const normalize_url_1 = __importDefault(require("normalize-url"));
const semver = __importStar(require("semver"));
const testModReference_1 = __importStar(require("./testModReference"));
function findModByRef(reference, mods, source) {
    if (!reference) {
        (0, log_1.log)('error', 'findModByRef called with undefined reference', { source, stack: new Error().stack });
        return undefined;
    }
    const fuzzy = (0, testModReference_1.isFuzzyVersion)(reference.versionMatch);
    if ((reference['idHint'] !== undefined)
        && ((0, testModReference_1.default)(mods[reference['idHint']], reference, source, fuzzy))) {
        // fast-path if we have an id from a previous match
        return mods[reference['idHint']];
    }
    if ((reference.versionMatch !== undefined)
        && (0, testModReference_1.isFuzzyVersion)(reference.versionMatch)
        && (reference.fileMD5 !== undefined)
        && ((reference.logicalFileName !== undefined)
            || (reference.fileExpression !== undefined))) {
        reference = Object.assign({ md5Hint: reference.fileMD5 }, reference);
        delete reference.fileMD5;
    }
    if (reference['md5Hint'] !== undefined
        && reference.installerChoices === undefined
        && reference.patches === undefined
        && reference.fileList === undefined) {
        const result = Object.keys(mods)
            .find(dlId => { var _a; return ((_a = mods[dlId].attributes) === null || _a === void 0 ? void 0 : _a.fileMD5) === reference['md5Hint']; });
        if (result !== undefined) {
            return mods[result];
        }
    }
    return Object.values(mods).find((mod) => (0, testModReference_1.default)(mod, reference, source, fuzzy));
}
function newerSort(lhs, rhs) {
    const lVersion = semver.coerce((0, storeHelper_1.getSafe)(lhs, ['modInfo', 'version'], undefined));
    const rVersion = semver.coerce((0, storeHelper_1.getSafe)(rhs, ['modInfo', 'version'], undefined));
    if ((lVersion !== null) && (rVersion !== null)) {
        return semver.compare(rVersion, lVersion);
    }
    return rhs.fileTime - lhs.fileTime;
}
function browseForDownload(api, url, instruction) {
    return new bluebird_1.default((resolve, reject) => {
        let lookupResult;
        const doLookup = () => {
            if (lookupResult === undefined) {
                lookupResult = api.emitAndAwait('browse-for-download', url, instruction, true)
                    .then((resultList) => {
                    if (resultList.length === 0) {
                        return undefined;
                    }
                    if (resultList[0].startsWith('err:')) {
                        const msg = resultList[0].slice(4);
                        if (msg === 'skip') {
                            return bluebird_1.default.reject(new CustomErrors_1.UserCanceled(true));
                        }
                        else if (msg === 'cancel') {
                            return bluebird_1.default.reject(new CustomErrors_1.UserCanceled(false));
                        }
                        return bluebird_1.default.reject(new Error(msg));
                    }
                    const [dlUrl, referer] = resultList[0].split('<');
                    return { url: dlUrl, referer };
                });
            }
            return lookupResult;
        };
        return resolve({
            url: () => doLookup().then(out => bluebird_1.default.resolve(out === null || out === void 0 ? void 0 : out.url)),
            referer: () => doLookup().then(out => out === null || out === void 0 ? void 0 : out.referer),
        });
    });
}
function lookupDownloadHint(api, input) {
    var _a, _b, _c, _d;
    if (input === undefined) {
        return bluebird_1.default.resolve(undefined);
    }
    if (input.mode === 'direct') {
        let urlNorm = '';
        try {
            urlNorm = (0, normalize_url_1.default)((_a = input.url) !== null && _a !== void 0 ? _a : '', { defaultProtocol: 'https:' });
        }
        catch (err) {
            return bluebird_1.default.reject(new CustomErrors_1.NotFound(`Invalid url set for external dependency: "${(_b = input.url) !== null && _b !== void 0 ? _b : '<unset>'}"`));
        }
        return bluebird_1.default.resolve({ url: urlNorm });
    }
    else if (input.mode === 'browse') {
        let urlNorm = '';
        try {
            urlNorm = (0, normalize_url_1.default)((_c = input.url) !== null && _c !== void 0 ? _c : '', { defaultProtocol: 'https:' });
        }
        catch (err) {
            return bluebird_1.default.reject(new CustomErrors_1.NotFound(`Invalid url set for external dependency: "${(_d = input.url) !== null && _d !== void 0 ? _d : '<unset>'}"`));
        }
        return browseForDownload(api, urlNorm, input.instructions)
            .then(result => {
            if (result === undefined) {
                return bluebird_1.default.reject(new CustomErrors_1.NotFound('No download found browsing url'));
            }
            else {
                return bluebird_1.default.resolve(result);
            }
        })
            .catch(err => {
            var _a;
            if (err instanceof CustomErrors_1.UserCanceled) {
                return bluebird_1.default.reject(new CustomErrors_1.UserCanceled((_a = err.skipped) !== null && _a !== void 0 ? _a : true));
            }
            else {
                return bluebird_1.default.reject(err);
            }
        });
    }
    else {
        return bluebird_1.default.reject(new CustomErrors_1.ProcessCanceled(input.instructions));
    }
}
function makeLookupResult(lookup, fromHint) {
    if (fromHint === undefined) {
        return lookup;
    }
    return _.merge(lookup, {
        value: {
            sourceURI: fromHint.url,
            referer: fromHint.referer,
        },
    });
}
function lookupFulfills(lookup, reference) {
    const { fileExpression, fileMD5, fileSize, gameId, logicalFileName, versionMatch, } = reference;
    if (lookup === undefined) {
        return false;
    }
    const { value } = lookup;
    return ((gameId === undefined) || (gameId === value.gameId))
        && ((fileMD5 === undefined) || (fileMD5 === value.fileMD5))
        && ((fileSize === undefined) || (fileSize === value.fileSizeBytes))
        && ((logicalFileName === undefined) || (logicalFileName === value.logicalFileName))
        && ((fileExpression === undefined)
            || ((value.fileName !== undefined) && (0, minimatch_1.default)(value.fileName, fileExpression)))
        && ((versionMatch === undefined)
            || semver.satisfies(semver.coerce(value.fileVersion), versionMatch));
}
function tagDuplicates(input) {
    // for all dependencies, figure out which of the other dependencies
    // would be solved by the same lookup result, sorted by the number of
    // collaterals it would fulfill
    const temp = input
        .map(dep => ({
        dep,
        collateral: input.filter(inner => inner !== dep &&
            lookupFulfills(dep.lookupResults[0], inner.reference)),
    }))
        .sort((lhs, rhs) => {
        var _a, _b, _c, _d, _e, _f;
        if (lhs.collateral.length !== rhs.collateral.length) {
            return rhs.collateral.length - lhs.collateral.length;
        }
        else {
            const fileVerL = (_c = (_b = (_a = lhs.dep.lookupResults[0]) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.fileVersion) !== null && _c !== void 0 ? _c : '0.0.1';
            const fileVerR = (_f = (_e = (_d = rhs.dep.lookupResults[0]) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.fileVersion) !== null && _f !== void 0 ? _f : '0.0.1';
            try {
                // within blocks of equal number of collaterals, consider the newer versions
                // before the ones with lower version
                return semver.compare((0, util_1.semverCoerce)(fileVerR), (0, util_1.semverCoerce)(fileVerL));
            }
            catch (err) {
                (0, log_1.log)('error', 'failed to compare version', { lhs: fileVerL, rhs: fileVerR });
                return fileVerR.localeCompare(fileVerL);
            }
        }
    });
    // now starting with the largest set of "collateral" fulfillments filter
    // those from the result
    // theoretically this may not produce ideal results, multiple smaller sets may eliminate
    // more collaterals than one large set but in practice I don't think this is going to be
    // relevant.
    // If this turns out to be a real problem, a much more complex recursive algorithm will
    // be necessary but I believe that to be very hypothetical.
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < temp.length; ++i) {
        if (!temp[i].dep.redundant) {
            temp[i].collateral.forEach(collateralItem => {
                // we can't store the index before because the list got sorted in the meantime
                // so we have to go searching for each collateral again
                const collateralIdx = temp.findIndex(iter => iter.dep === collateralItem);
                // tag items as redundant, this way they will get filtered out later, including
                // their own dependencies
                temp[collateralIdx].dep.redundant = true;
            });
        }
    }
    return bluebird_1.default.resolve(temp.filter(iter => iter !== null).map(iter => iter.dep));
}
function lookupFromDownload(download) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    // depending on where Vortex got the id (metadb, rest api or graph api and in which version,
    // the modid/fileid may be stored in differenent places).
    // Newer versions should be more consistent but existing downloads may still be messy
    const modId = (_h = (_d = (_c = (_b = (_a = download.modInfo) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.details) === null || _c === void 0 ? void 0 : _c.modId) !== null && _d !== void 0 ? _d : (_g = (_f = (_e = download.modInfo) === null || _e === void 0 ? void 0 : _e.nexus) === null || _f === void 0 ? void 0 : _f.ids) === null || _g === void 0 ? void 0 : _g.modId) !== null && _h !== void 0 ? _h : (_k = (_j = download.modInfo) === null || _j === void 0 ? void 0 : _j.ids) === null || _k === void 0 ? void 0 : _k.modId;
    const fileId = (_t = (_p = (_o = (_m = (_l = download.modInfo) === null || _l === void 0 ? void 0 : _l.meta) === null || _m === void 0 ? void 0 : _m.details) === null || _o === void 0 ? void 0 : _o.fileId) !== null && _p !== void 0 ? _p : (_s = (_r = (_q = download.modInfo) === null || _q === void 0 ? void 0 : _q.nexus) === null || _r === void 0 ? void 0 : _r.ids) === null || _s === void 0 ? void 0 : _s.fileId) !== null && _t !== void 0 ? _t : (_v = (_u = download.modInfo) === null || _u === void 0 ? void 0 : _u.ids) === null || _v === void 0 ? void 0 : _v.fileId;
    return {
        fileMD5: download.fileMD5,
        fileName: download.localPath,
        fileSizeBytes: download.size,
        version: (_x = (_w = download.modInfo) === null || _w === void 0 ? void 0 : _w.version) !== null && _x !== void 0 ? _x : (_z = (_y = download.modInfo) === null || _y === void 0 ? void 0 : _y.meta) === null || _z === void 0 ? void 0 : _z.fileVersion,
        logicalFileName: (_1 = (_0 = download.modInfo) === null || _0 === void 0 ? void 0 : _0.name) !== null && _1 !== void 0 ? _1 : (_3 = (_2 = download.modInfo) === null || _2 === void 0 ? void 0 : _2.meta) === null || _3 === void 0 ? void 0 : _3.logicalFileName,
        game: download.game,
        source: (_4 = download.modInfo) === null || _4 === void 0 ? void 0 : _4.source,
        referenceTag: (_5 = download.modInfo) === null || _5 === void 0 ? void 0 : _5.referenceTag,
        modId,
        fileId,
    };
}
function findDownloadByRef(reference, downloads) {
    if (reference['md5Hint'] !== undefined) {
        const result = Object.keys(downloads)
            .find(dlId => downloads[dlId].fileMD5 === reference['md5Hint']);
        if (result !== undefined) {
            return result;
        }
    }
    if ((0, testModReference_1.isFuzzyVersion)(reference.versionMatch)
        && (reference.fileMD5 !== undefined)
        && ((reference.logicalFileName !== undefined)
            || (reference.fileExpression !== undefined))) {
        reference = _.omit(reference, ['fileMD5']);
    }
    try {
        const fuzzy = (0, testModReference_1.isFuzzyVersion)(reference.versionMatch);
        const fileExpression = ((reference === null || reference === void 0 ? void 0 : reference.fileExpression) || (reference === null || reference === void 0 ? void 0 : reference.logicalFileName));
        const bundled = fileExpression && fileExpression.toLowerCase().startsWith('bundled');
        const existing = Object.keys(downloads).filter((dlId) => {
            var _a, _b, _c, _d;
            const download = downloads[dlId];
            const isRelevantDownload = download.game.includes(reference.gameId) && !((_a = download.modInfo) === null || _a === void 0 ? void 0 : _a.collectionSlug);
            if (download.state === 'failed' || !isRelevantDownload) {
                return false;
            }
            const lookup = lookupFromDownload(download);
            const fileIdSet = new Set();
            const nameSet = new Set();
            fileIdSet.add((_c = (_b = lookup === null || lookup === void 0 ? void 0 : lookup.fileId) === null || _b === void 0 ? void 0 : _b.toString) === null || _c === void 0 ? void 0 : _c.call(_b));
            nameSet.add(lookup === null || lookup === void 0 ? void 0 : lookup.logicalFileName);
            nameSet.add(lookup === null || lookup === void 0 ? void 0 : lookup.customFileName);
            nameSet.add((_d = download.modInfo) === null || _d === void 0 ? void 0 : _d.name);
            const identifiers = {
                modId: parseInt(lookup === null || lookup === void 0 ? void 0 : lookup.modId, 10),
                fileId: parseInt(lookup === null || lookup === void 0 ? void 0 : lookup.fileId, 10),
                fileIds: Array.from(fileIdSet).filter(util_1.truthy),
                fileNames: Array.from(nameSet).filter(util_1.truthy),
                gameId: download.game[0],
            };
            return fuzzy || bundled
                ? (0, testModReference_1.default)(lookup, reference, undefined, fuzzy)
                : (0, testModReference_1.default)(lookup, reference, undefined, fuzzy) || (0, testModReference_1.testRefByIdentifiers)(identifiers, reference);
        })
            .sort((lhs, rhs) => newerSort(downloads[lhs], downloads[rhs]));
        return existing[0];
    }
    catch (err) {
        return undefined;
    }
}
function gatherDependenciesGraph(rule, api, gameMode, recommendations, addToCache) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const state = api.getState();
        const downloads = state.persistent.downloads.files;
        const mods = (_a = state.persistent.mods[gameMode]) !== null && _a !== void 0 ? _a : {};
        const downloadId = findDownloadByRef(rule.reference, downloads);
        if (!downloadId) {
            (0, log_1.log)('debug', 'no download found', { ref: rule.reference.logicalFileName });
        }
        else {
            if (addToCache) {
                addToCache(downloads[downloadId]);
            }
        }
        if (rule.reference.fileMD5 !== undefined) {
            api.lookupModMeta({
                fileMD5: rule.reference.fileMD5,
                gameId: rule.reference.gameId,
                fileSize: rule.reference.fileSize,
            });
        }
        const modReference = Object.assign(Object.assign({}, rule.reference), { fileList: rule.fileList, patches: (_c = (_b = rule.extra) === null || _b === void 0 ? void 0 : _b.patches) !== null && _c !== void 0 ? _c : {}, installerChoices: (_d = rule.installerChoices) !== null && _d !== void 0 ? _d : {} });
        const mod = findModByRef(modReference, mods);
        let urlFromHint;
        let lookupResults = [];
        const limit = new ConcurrencyLimiter_1.default(20);
        try {
            if (!downloadId) {
                urlFromHint = yield lookupDownloadHint(api, rule.downloadHint);
                if (urlFromHint) {
                    (0, log_1.log)('info', 'url from dependency', { urlFromHint, md5: rule.reference.fileMD5 });
                }
            }
            lookupResults = yield api.lookupModReference(rule.reference, { requireURL: true });
            const subRules = [
                ...((_f = (_e = rule.extra) === null || _e === void 0 ? void 0 : _e['rules']) !== null && _f !== void 0 ? _f : []),
                ...((_j = (_h = (_g = lookupResults === null || lookupResults === void 0 ? void 0 : lookupResults[0]) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.rules) !== null && _j !== void 0 ? _j : []),
            ].filter(iter => iter.type === (recommendations ? 'recommends' : 'requires'));
            const dependencies = subRules.length > 0
                ? yield Promise.all(subRules.map(subRule => limit.do(() => gatherDependenciesGraph(subRule, api, gameMode, recommendations))))
                : [];
            const node = {
                download: downloadId,
                mod,
                reference: rule.reference,
                lookupResults: lookupResults.map(iter => makeLookupResult(iter, urlFromHint)),
                dependencies: dependencies.filter(Boolean),
                redundant: false,
                extra: rule.extra,
                patches: (_l = (_k = rule.extra) === null || _k === void 0 ? void 0 : _k.patches) !== null && _l !== void 0 ? _l : {},
                installerChoices: rule.installerChoices,
                fileList: rule.fileList,
                phase: (_o = (_m = rule.extra) === null || _m === void 0 ? void 0 : _m['phase']) !== null && _o !== void 0 ? _o : 0,
            };
            if (urlFromHint) {
                node.lookupResults.unshift({
                    key: 'from-download-hint', value: {
                        fileName: rule.reference.logicalFileName,
                        fileSizeBytes: rule.reference.fileSize,
                        gameId: rule.reference.gameId,
                        domainName: rule.reference.gameId,
                        fileVersion: undefined,
                        fileMD5: rule.reference.fileMD5,
                        sourceURI: urlFromHint.url,
                        referer: urlFromHint.referer,
                        details: {
                            homepage: rule.downloadHint.url,
                        },
                    },
                });
                if (((_p = rule.downloadHint) === null || _p === void 0 ? void 0 : _p.mode) === 'browse') {
                    node.reresolveDownloadHint = () => lookupDownloadHint(api, rule.downloadHint)
                        .then(dlHintRes => {
                        node.lookupResults[0].value = Object.assign(Object.assign({}, node.lookupResults[0].value), { sourceURI: dlHintRes.url, referer: dlHintRes.referer });
                    });
                }
            }
            return node;
        }
        catch (err) {
            if (!(err instanceof CustomErrors_1.ProcessCanceled)) {
                api.showErrorNotification('Failed to look up dependency', err, {
                    allowReport: false,
                    message: (_s = (_r = (_q = rule.downloadHint) === null || _q === void 0 ? void 0 : _q.url) !== null && _r !== void 0 ? _r : rule.comment) !== null && _s !== void 0 ? _s : rule.reference.description,
                });
                (0, log_1.log)('error', 'failed to look up', {
                    rule: JSON.stringify(rule),
                    ex: err.name,
                    message: err.message,
                    stack: err.stack,
                });
            }
            return null;
        }
    });
}
function flatten(nodes) {
    return nodes.reduce((agg, node) => {
        if ((node === null) || node.redundant) {
            return agg;
        }
        return [].concat(agg, node, flatten(node.dependencies));
    }, []);
}
/**
 * from a set of requires/recommends rules, deduce which of them need to be downloaded
 * and/or installed
 * @param rules
 * @param api
 * @param recommendations
 */
function gatherDependencies(rules, api, recommendations, progressCB, addToCache) {
    const state = api.getState();
    const gameMode = (0, selectors_1.activeGameId)(state);
    const requirements = rules === undefined
        ? []
        : rules.filter((rule) => rule.type === (recommendations ? 'recommends' : 'requires'));
    let numCompleted = 0;
    const onProgress = () => {
        ++numCompleted;
        if (progressCB !== undefined) {
            progressCB(numCompleted / requirements.length);
        }
    };
    const limit = new ConcurrencyLimiter_1.default(20);
    // for each requirement, look up the reference and recursively their dependencies
    return bluebird_1.default.all(requirements.map((rule) => bluebird_1.default.resolve(limit.do(() => gatherDependenciesGraph(rule, api, gameMode, recommendations, addToCache)))
        .then((node) => {
        onProgress();
        return bluebird_1.default.resolve(node);
    })
        .catch(err => {
        // gatherDependenciesGraph handles exceptions itself so we shouldn't get here
        // but better to make sure
        api.showErrorNotification('Failed to gather dependencies', err);
        return bluebird_1.default.resolve(null);
    })))
        // tag duplicates
        .then((nodes) => tagDuplicates(flatten(nodes)).then(() => nodes))
        .then((nodes) => 
    // this filters out the duplicates including their subtrees,
    // then converts IDependencyNodes to IDependencies
    flatten(nodes).map(node => _.omit(node, ['dependencies', 'redundant'])));
}
exports.default = gatherDependencies;
