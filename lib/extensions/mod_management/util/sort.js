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
exports.CycleError = void 0;
const log_1 = require("../../../util/log");
const storeHelper_1 = require("../../../util/storeHelper");
const selectors_1 = require("../../download_management/selectors");
const testModReference_1 = __importStar(require("./testModReference"));
const bluebird_1 = __importDefault(require("bluebird"));
const graphlib_1 = require("graphlib");
const _ = __importStar(require("lodash"));
const path = __importStar(require("path"));
const mods_1 = require("../actions/mods");
class CycleError extends Error {
    constructor(cycles) {
        super('Rules contain cycles');
        this.name = this.constructor.name;
        this.mCycles = cycles;
    }
    get cycles() {
        return this.mCycles;
    }
}
exports.CycleError = CycleError;
function findByRef(mods, reference, source) {
    const fuzzy = (0, testModReference_1.isFuzzyVersion)(reference.versionMatch);
    return mods.find((mod) => (0, testModReference_1.default)(mod, reference, source, fuzzy));
}
let sortModsCache = {
    id: { gameId: undefined, mods: [] }, sorted: bluebird_1.default.resolve([])
};
function sortMods(gameId, mods, api) {
    if (mods.length === 0) {
        // don't flush the cache if the input is empty
        return bluebird_1.default.resolve([]);
    }
    if ((sortModsCache.id.gameId === gameId)
        && _.isEqual(sortModsCache.id.mods, mods)) {
        return sortModsCache.sorted;
    }
    const startTime = Date.now();
    (0, log_1.log)('info', 'sorting mods', { modCount: mods.length });
    // if the graphlib library throws a custom exception it may not contain a stack trace, so prepare
    // one we can use
    const stackErr = new Error();
    const dependencies = new graphlib_1.Graph();
    // counting only effective rules, for mods that are actually installed
    let numRules = 0;
    const modMapper = (mod) => {
        var _a;
        let downloadGame = (0, storeHelper_1.getSafe)(mod.attributes, ['downloadGame'], gameId);
        if (Array.isArray(downloadGame)) {
            downloadGame = downloadGame[0];
        }
        const state = api.getState();
        const downloadPath = (0, selectors_1.downloadPathForGame)(state, downloadGame);
        const fileName = (0, storeHelper_1.getSafe)(mod.attributes, ['fileName'], undefined);
        const filePath = fileName !== undefined ? path.join(downloadPath, fileName) : undefined;
        const effectiveGameId = ((_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.downloadGame) || gameId;
        return api.lookupModMeta({
            fileMD5: (0, storeHelper_1.getSafe)(mod.attributes, ['fileMD5'], undefined),
            fileSize: (0, storeHelper_1.getSafe)(mod.attributes, ['fileSize'], undefined),
            filePath,
            gameId: effectiveGameId,
        })
            .catch(() => [])
            .then((metaInfo) => {
            if ((metaInfo.length > 0) && (mod.attributes.fileMD5 === undefined)) {
                api.store.dispatch((0, mods_1.setModAttribute)(gameId, mod.id, 'fileMD5', metaInfo[0].value.fileMD5));
            }
            const rules = [].concat((0, storeHelper_1.getSafe)(metaInfo, [0, 'value', 'rules'], []), mod.rules || []);
            rules.forEach((rule) => {
                const ref = findByRef(mods, rule.reference, { modId: mod.id, gameId });
                if (ref !== undefined) {
                    ++numRules;
                    if (rule.type === 'before') {
                        dependencies.setEdge(mod.id, ref.id);
                    }
                    else if (rule.type === 'after') {
                        dependencies.setEdge(ref.id, mod.id);
                    }
                }
            });
            return bluebird_1.default.resolve();
        });
    };
    mods.forEach(mod => { dependencies.setNode(mod.id); });
    const sorted = bluebird_1.default.map(mods, modMapper)
        .catch((err) => {
        (0, log_1.log)('error', 'failed to sort mods', { msg: err.message, stack: err.stack });
    })
        .then(() => {
        try {
            const res = graphlib_1.alg.topsort(dependencies);
            api.dismissNotification('mod-cycle-warning');
            const lookup = mods.reduce((prev, mod) => {
                prev[mod.id] = mod;
                return prev;
            }, {});
            const elapsed = Math.floor((Date.now() - startTime) / 100) / 10;
            (0, log_1.log)('info', 'done sorting mods', { elapsed, numRules });
            return bluebird_1.default.resolve(res.map(id => lookup[id]));
        }
        catch (err) {
            // exception type not included in typings
            if (err instanceof graphlib_1.alg.topsort.CycleException) {
                const res = new CycleError(graphlib_1.alg.findCycles(dependencies));
                res.stack = stackErr.stack;
                return bluebird_1.default.reject(res);
            }
            else {
                return bluebird_1.default.reject(err);
            }
        }
    });
    sortModsCache = { id: { gameId, mods }, sorted };
    return sorted;
}
exports.default = sortMods;
