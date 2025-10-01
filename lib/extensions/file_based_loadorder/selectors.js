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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isModEnabled = exports.enabledMods = exports.currentModStateForProfile = exports.currentGameMods = exports.currentLoadOrderForProfile = void 0;
const selectors_1 = require("../profile_management/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const _ = __importStar(require("lodash"));
const reselect_1 = require("reselect");
const selectors_2 = require("../profile_management/selectors");
const allMods = (state) => state.persistent.mods;
const allLoadOrders = (state) => { var _a; return ((_a = state === null || state === void 0 ? void 0 : state.persistent) === null || _a === void 0 ? void 0 : _a['loadOrder']) || {}; };
exports.currentLoadOrderForProfile = (0, reselect_1.createSelector)([allLoadOrders, (_, profileId) => profileId], (loadOrders, profileId) => {
    if (!loadOrders || !profileId) {
        return [];
    }
    return Array.isArray(loadOrders[profileId]) ? loadOrders[profileId] : [];
});
exports.currentGameMods = (0, reselect_1.createSelector)(allMods, selectors_1.activeGameId, (inMods, gameId) => { var _a; return (_a = inMods[gameId]) !== null && _a !== void 0 ? _a : {}; });
exports.currentModStateForProfile = (0, reselect_1.createSelector)(selectors_2.profileById, (profile) => profile ? profile.modState : {});
let lastLookupInfo;
exports.enabledMods = (0, reselect_1.createSelector)(exports.currentGameMods, exports.currentModStateForProfile, (mods, modStateIn) => {
    const res = [];
    Object.keys(mods || {}).forEach(modId => {
        const attributes = mods[modId].attributes || {};
        if ((0, storeHelper_1.getSafe)(modStateIn, [modId, 'enabled'], false)
            && (attributes['fileMD5'] || attributes['fileName']
                || attributes['logicalFileName'] || attributes['name'])) {
            res.push(Object.assign(Object.assign({}, attributes), { id: modId, type: mods[modId].type, installationPath: mods[modId].installationPath }));
        }
    });
    // avoid changing the object if content didn't change. reselect avoids recalculating unless input
    // changes but it's very possible mods/modState changes without causing the enabled-keys to change
    if (!_.isEqual(res, lastLookupInfo)) {
        lastLookupInfo = res;
    }
    return lastLookupInfo;
});
exports.isModEnabled = (0, reselect_1.createSelector)([exports.currentGameMods, exports.currentModStateForProfile, (_, modId) => modId], (mods, modStateIn, modId) => {
    if (!mods || !modId) {
        return false;
    }
    const mod = mods[modId];
    if (!mod) {
        return false;
    }
    return (0, storeHelper_1.getSafe)(modStateIn, [modId, 'enabled'], false);
});
