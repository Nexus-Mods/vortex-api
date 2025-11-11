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
exports.getModInstallPath = exports.getMod = exports.modsForActiveGame = exports.modsForGame = exports.modPathsForGame = exports.needToDeployForGame = exports.needToDeploy = exports.activatorForGame = exports.currentActivator = exports.installPathForGame = exports.installPath = void 0;
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const path = __importStar(require("path"));
const getGame_1 = require("../gamemode_management/util/getGame");
const getInstallPath_1 = __importDefault(require("./util/getInstallPath"));
const re_reselect_1 = __importDefault(require("re-reselect"));
const reselect_1 = require("reselect");
const RelaxedReselectCache_1 = require("../../util/RelaxedReselectCache");
const installPathPattern = (state) => state.settings.mods.installPath;
const gameInstallPathPattern = (state, gameId) => state.settings.mods.installPath[gameId];
const activators = (state) => state.settings.mods.activator;
const allNeedToDeploy = (state) => state.persistent.deployment.needToDeploy;
exports.installPath = (0, reselect_1.createSelector)(installPathPattern, selectors_1.activeGameId, (inPaths, inGameMode) => {
    if (inGameMode === undefined) {
        return undefined;
    }
    return (0, getInstallPath_1.default)(inPaths[inGameMode], inGameMode);
});
exports.installPathForGame = (0, re_reselect_1.default)(gameInstallPathPattern, (state, gameId) => gameId, (inPath, gameId) => gameId !== undefined ? (0, getInstallPath_1.default)(inPath, gameId) : undefined)((state, gameId) => {
    if (gameId === undefined) {
        return undefined;
    }
    return gameId;
}, {
    cacheObject: new RelaxedReselectCache_1.RelaxedReselectCache(),
});
exports.currentActivator = (0, reselect_1.createSelector)(activators, selectors_1.activeGameId, (inActivators, inGameMode) => {
    return inActivators[inGameMode];
});
exports.activatorForGame = (0, re_reselect_1.default)(activators, (state, gameId) => gameId, (inActivators, gameId) => inActivators[gameId])((state, gameId) => {
    if (gameId === undefined) {
        throw new Error('gameId can\'t be undefined');
    }
    return gameId;
});
exports.needToDeploy = (0, reselect_1.createSelector)(allNeedToDeploy, selectors_1.activeGameId, (inNeedToDeploy, inGameMode) => inNeedToDeploy[inGameMode]);
exports.needToDeployForGame = (0, re_reselect_1.default)(allNeedToDeploy, (state, gameId) => gameId, (inNeedToDeploy, inGameId) => inNeedToDeploy[inGameId])((state, gameId) => gameId);
const emptyObj = {};
function discoveries(state) {
    return (0, storeHelper_1.getSafe)(state, ['settings', 'gameMode', 'discovered'], emptyObj);
}
exports.modPathsForGame = (0, reselect_1.createSelector)(discoveries, (state, gameId) => gameId, (inDiscoveries, inGameId) => {
    const game = (0, getGame_1.getGame)(inGameId);
    const discovery = inDiscoveries[inGameId];
    if (game === undefined) {
        return undefined;
    }
    if ((discovery === undefined) || (discovery.path === undefined)) {
        return undefined;
    }
    return game.getModPaths(discovery.path);
});
const modsForGame = (state, gameId) => {
    var _a;
    if (gameId === undefined) {
        return {};
    }
    return ((_a = state.persistent.mods) === null || _a === void 0 ? void 0 : _a[gameId]) || {};
};
exports.modsForGame = modsForGame;
exports.modsForActiveGame = (0, reselect_1.createSelector)(selectors_1.activeGameId, (state) => state, (activeGameId, state) => {
    return (0, exports.modsForGame)(state, activeGameId);
});
exports.getMod = (0, reselect_1.createSelector)(exports.modsForGame, (state, gameId, modId) => modId, (mods, modId) => {
    if (typeof modId === 'number') {
        return Object.values(mods).find(mod => { var _a; return ((_a = mod.attributes) === null || _a === void 0 ? void 0 : _a.modId) === modId; });
    }
    return mods[modId];
});
exports.getModInstallPath = (0, reselect_1.createSelector)(exports.getMod, (state, gameId) => (0, exports.installPathForGame)(state, gameId), (mod, gameInstallPath) => {
    if ((mod === null || mod === void 0 ? void 0 : mod.installationPath) == null || gameInstallPath == null) {
        return undefined;
    }
    return path.join(gameInstallPath, mod.installationPath);
});
