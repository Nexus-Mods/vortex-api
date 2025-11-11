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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idOnlyRef = idOnlyRef;
exports.referenceEqual = referenceEqual;
exports.downloadToModRef = downloadToModRef;
exports.sanitizeExpression = sanitizeExpression;
exports.safeCoerce = safeCoerce;
exports.coerceToSemver = coerceToSemver;
exports.isFuzzyVersion = isFuzzyVersion;
exports.testRefByIdentifiers = testRefByIdentifiers;
exports.setResolvedCB = setResolvedCB;
exports.testModReference = testModReference;
/* eslint-disable */
const util_1 = require("../../../util/util");
const _ = __importStar(require("lodash"));
const minimatch_1 = __importDefault(require("minimatch"));
const path = __importStar(require("path"));
const semver = __importStar(require("semver"));
// test if the reference is by id only, meaning it is only useful in the current setup
function idOnlyRef(ref) {
    return ((ref === null || ref === void 0 ? void 0 : ref.id) !== undefined)
        && (Object.keys(_.omit(ref, ['archiveId', 'versionMatch', 'idHint'])).length === 1);
}
// these are only the "important" fields of the reference, not the "helper" fields
const REFERENCE_FIELDS = ['fileMD5', 'logicalFileName', 'fileExpression', 'versionMatch', 'repo'];
function referenceEqual(lhs, rhs) {
    // the id is only used if it's the only matching field (apart from the archive id)
    if (idOnlyRef(lhs) || idOnlyRef(rhs)) {
        return lhs.id === rhs.id;
    }
    return _.isEqual(_.pick(lhs, REFERENCE_FIELDS), _.pick(rhs, REFERENCE_FIELDS));
}
/**
 * Converts an IDownload object to an IModReference object.
 * Extracts relevant metadata from the download's modInfo structure to populate
 * the reference fields used for mod matching and dependency resolution.
 *
 * @param download - The download object to convert
 * @returns IModReference object with populated fields from the download
 */
function downloadToModRef(download) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    // Extract modId and fileId from nested structures
    // Priority: nexus.ids (preferred) -> meta.details (fallback)
    const modId = (_e = (_d = (_c = (_b = (_a = download.modInfo) === null || _a === void 0 ? void 0 : _a.nexus) === null || _b === void 0 ? void 0 : _b.ids) === null || _c === void 0 ? void 0 : _c.modId) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : (_h = (_g = (_f = download.modInfo) === null || _f === void 0 ? void 0 : _f.meta) === null || _g === void 0 ? void 0 : _g.details) === null || _h === void 0 ? void 0 : _h.modId;
    const fileId = (_o = (_m = (_l = (_k = (_j = download.modInfo) === null || _j === void 0 ? void 0 : _j.nexus) === null || _k === void 0 ? void 0 : _k.ids) === null || _l === void 0 ? void 0 : _l.fileId) === null || _m === void 0 ? void 0 : _m.toString()) !== null && _o !== void 0 ? _o : (_r = (_q = (_p = download.modInfo) === null || _p === void 0 ? void 0 : _p.meta) === null || _q === void 0 ? void 0 : _q.details) === null || _r === void 0 ? void 0 : _r.fileId;
    const ref = {
        archiveId: download.id,
        repo: ((_s = download.modInfo) === null || _s === void 0 ? void 0 : _s.source) ? {
            repository: download.modInfo.source,
            modId: modId,
            fileId: fileId,
        } : undefined,
        fileMD5: download.fileMD5,
        gameId: (_t = download.game) === null || _t === void 0 ? void 0 : _t[0],
        logicalFileName: (_w = (_v = (_u = download.modInfo) === null || _u === void 0 ? void 0 : _u.meta) === null || _v === void 0 ? void 0 : _v.logicalFileName) !== null && _w !== void 0 ? _w : download.localPath,
    };
    return ref;
}
function sanitizeExpression(fileName) {
    // Validate input - return empty string for invalid inputs
    if (fileName == null || typeof fileName !== 'string') {
        return '';
    }
    // drop extension and anything like ".1" or " (1)" at the end which probaby
    // indicates duplicate downloads (either in our own format or common browser
    // style)
    return path.basename(fileName, path.extname(fileName))
        .replace(/\.\d+$/, '')
        .replace(/ \(\d+\)$/, '');
}
const fuzzyVersionCache = {};
const coerceableRE = /^v?[0-9.]+$/;
function safeCoerce(input) {
    var _a;
    return coerceableRE.test(input)
        ? (_a = coerceToSemver(input)) !== null && _a !== void 0 ? _a : input
        : input;
}
function coerceToSemver(version) {
    var _a;
    version = (_a = version === null || version === void 0 ? void 0 : version.trim) === null || _a === void 0 ? void 0 : _a.call(version);
    if (!version) {
        return undefined;
    }
    const match = version.match(/^(\d+)\.(\d+)\.(\d+)(.*)$/);
    if (match) {
        const major = match[1];
        const minor = match[2];
        const patch = match[3];
        let preRelease = match[4].trim();
        // If there's something after the first three segments, treat it as pre-release
        if (preRelease) {
            // Remove leading punctuation from the pre-release part
            preRelease = preRelease.replace(/^[\.\-\+]/, '');
            return `${major}.${minor}.${patch}-${preRelease}`;
        }
        else {
            return `${major}.${minor}.${patch}`;
        }
    }
    else {
        if (coerceableRE.test(version)) {
            // Remove leading 0's from the version segments as that's
            //  an illegal semantic versioning format/pattern
            const sanitizedVersion = version.replace(/\b0+(\d)/g, '$1');
            const coerced = semver.coerce(sanitizedVersion);
            if (coerced) {
                return coerced.version;
            }
            return version;
        }
    }
}
function isFuzzyVersion(input) {
    const cachedRes = fuzzyVersionCache[input];
    if (cachedRes !== undefined) {
        return cachedRes;
    }
    if (!(0, util_1.truthy)(input) || typeof input !== 'string') {
        fuzzyVersionCache[input] = false;
    }
    else if (input.endsWith('+prefer') || (input === '*')) {
        // +prefer can be used with non-semver versions as well
        fuzzyVersionCache[input] = true;
    }
    else {
        // semver.validRange accepts partial versions as ranges, e.g. "1.5" is equivalent
        // to "1.5.x" but we can't accept that because then we can't distinguish them from
        // non-semantic versions where 1.5 should match exactly 1.5
        const coerced = safeCoerce(input);
        const valRange = semver.validRange(coerced);
        fuzzyVersionCache[input] = (valRange !== null) && (valRange !== coerced);
    }
    return fuzzyVersionCache[input];
}
function hasIdentifyingMarker(mod, modId, ref, fuzzyVersion, allowTag) {
    var _a;
    return ((ref.id !== undefined) && (modId !== undefined))
        || (!fuzzyVersion && (ref.fileMD5 !== undefined) && (mod.fileMD5 !== undefined))
        || ((ref.fileExpression !== undefined) && (((_a = mod.fileName) !== null && _a !== void 0 ? _a : mod.name) !== undefined))
        || ((ref.logicalFileName !== undefined) && (mod.logicalFileName !== undefined))
        || ((ref.repo !== undefined) && (mod.source !== undefined))
        || (allowTag && (ref.tag !== undefined) && (mod.referenceTag !== undefined));
}
let onRefResolved;
function testRef(mod, modId, ref, source, fuzzyVersion) {
    // Additional safety checks for ref parameter
    if (!ref || typeof ref !== 'object' || Array.isArray(ref)) {
        return false;
    }
    // if an id is set, it has to match
    if ((ref.id != null)
        && ((modId != null) || idOnlyRef(ref))
        && (ref.id !== modId)) {
        return false;
    }
    // testing if a version is fuzzy can be quite expensive. When doing multiple comparisons
    // for the same reference, the caller can calculate it once and pass it in
    if (fuzzyVersion == null) {
        fuzzyVersion = isFuzzyVersion(ref.versionMatch);
    }
    if (!hasIdentifyingMarker(mod, modId, ref, fuzzyVersion, true)) {
        // if the reference doesn't have any marker that _could_ match this mod,
        // return !false!, otherwise we might match any random mod that also has no matching marker
        return false;
    }
    // Right installer choices?
    if ((ref.installerChoices != null && Object.keys(ref.installerChoices).length > 0) && (!_.isEqualWith(mod.installerChoices, ref.installerChoices))) {
        return false;
    }
    // Right hashes?
    if ((ref.fileList != null && ref.fileList.length > 0) && (!_.isEqual(ref.fileList, mod.fileList))) {
        return false;
    }
    // Right patches?
    if ((ref.patches != null && Object.keys(ref.patches).length > 0 && ref.tag != null) && ((!_.isEqual(mod.patches, ref.patches)))) {
        if ((mod === null || mod === void 0 ? void 0 : mod.patches) != null && mod.referenceTag !== ref.tag) {
            return false;
        }
    }
    if (ref.tag != null) {
        if (mod.referenceTag === ref.tag) {
            return true;
        }
        else {
            // tags differ. if the mod has no stricter attribute we have to refuse here, otherwise
            // we'd match any kind of crap.
            if (!hasIdentifyingMarker(mod, modId, ref, fuzzyVersion, false)) {
                return false;
            }
        }
    }
    // if reference is by file hash and the match is not fuzzy, require the md5 to match
    if (((0, util_1.truthy)(ref.fileMD5))
        && !fuzzyVersion
        && (mod.fileMD5 !== ref.fileMD5)) {
        return false;
    }
    if (ref.repo != null) {
        if ((ref.repo.repository !== mod.source)
            || (ref.repo.modId !== (mod.modId || -1).toString())) {
            return false;
        }
        if (!fuzzyVersion) {
            // we already know it's the same repo and modId, if it's also the same
            // file id this is definitively the same file
            return (ref.repo.fileId === (mod.fileId || -1).toString());
        }
    }
    // right file?
    if (ref.logicalFileName != null) {
        if (mod.additionalLogicalFileNames != null) {
            if (!mod.additionalLogicalFileNames.includes(ref.logicalFileName)
                && (![mod.logicalFileName, mod.customFileName].includes(ref.logicalFileName) && ref.fileExpression == null)) {
                return false;
            }
        }
        else if (![mod.logicalFileName, mod.customFileName].includes(ref.logicalFileName) && ref.fileExpression == null) {
            return false;
        }
    }
    if (ref.fileExpression != null) {
        // file expression is either an exact match against the mod name or
        // a glob match against the archive name (without file extension)
        if (mod.fileName == null) {
            if (mod.name !== ref.fileExpression) {
                return false;
            }
        }
        else {
            const baseName = sanitizeExpression(mod.fileName);
            if ((baseName !== ref.fileExpression) &&
                !(0, minimatch_1.default)(baseName, ref.fileExpression)) {
                return false;
            }
        }
    }
    // right version?
    if (((0, util_1.truthy)(ref.versionMatch))
        && (ref.versionMatch !== '*')
        && (0, util_1.truthy)(mod.version)) {
        const versionMatch = ref.versionMatch.split('+')[0];
        const doesMatch = (mod.version === ref.versionMatch)
            || ref.fileMD5 === mod.fileMD5
            || (safeCoerce(mod.version) === safeCoerce(versionMatch));
        if (!doesMatch) {
            const versionCoerced = coerceToSemver(mod.version);
            if (semver.valid(versionCoerced)) {
                if (!semver.satisfies(versionCoerced, versionMatch, { loose: true, includePrerelease: true })) {
                    return false;
                } // the version is a valid semantic version and does match
            }
            else {
                // if the version number can't be interpreted then we can only use the exact match
                return false;
            }
        }
    }
    // right game?
    if ((ref.gameId !== undefined)
        && (mod.game !== undefined)
        && (mod.game.indexOf(ref.gameId) === -1)) {
        return false;
    }
    if ((source !== undefined) && (modId !== undefined) && (ref.idHint !== modId)) {
        // if this resolved to a different mod
        onRefResolved === null || onRefResolved === void 0 ? void 0 : onRefResolved(source.gameId, source.modId, ref, modId);
    }
    return true;
}
function testRefByIdentifiers(identifiers, ref) {
    var _a, _b;
    if (identifiers == null || typeof identifiers !== 'object' || Array.isArray(identifiers)) {
        return false;
    }
    const { fileNames, modId, fileIds, condition } = identifiers;
    if (((_a = ref.repo) === null || _a === void 0 ? void 0 : _a.modId) != null && modId != null
        && ((_b = ref.repo) === null || _b === void 0 ? void 0 : _b.fileId) != null && fileIds != null && fileIds.length > 0) {
        if (ref.repo.modId === modId.toString()
            && fileIds.includes(ref.repo.fileId)) {
            return true;
        }
    }
    // right file?
    if (ref.fileExpression == null && ref.logicalFileName != null && fileNames != null) {
        if (fileNames.includes(ref.logicalFileName)) {
            return true;
        }
    }
    if (ref.fileExpression != null && fileNames != null) {
        // file expression is either an exact match against the mod name or
        // a glob match against the archive name (without file extension)
        for (const fileName of fileNames) {
            const baseName = sanitizeExpression(fileName);
            if ((baseName === ref.fileExpression) || (0, minimatch_1.default)(baseName, ref.fileExpression)) {
                return true;
            }
        }
    }
    if (condition === null || condition === void 0 ? void 0 : condition()) {
        return true;
    }
    return false;
}
/**
 * sets the callback for when a (fuzzy) mod reference is resolved, so the cache can be updated
 */
function setResolvedCB(cb) {
    onRefResolved = cb;
}
function testModReference(mod, reference, source, fuzzyVersion) {
    if (mod == null || typeof mod !== 'object' || Array.isArray(mod)) {
        return false;
    }
    if (reference == null || typeof reference !== 'object' || Array.isArray(reference)) {
        return false;
    }
    if (mod.attributes) {
        return testRef(mod.attributes, mod.id, reference, source, fuzzyVersion);
    }
    else {
        const lookup = mod;
        return testRef(lookup, lookup.id, reference, source, fuzzyVersion);
    }
}
exports.default = testModReference;
