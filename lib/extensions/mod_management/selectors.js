"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modPathsForGame = exports.needToDeployForGame = exports.needToDeploy = exports.activatorForGame = exports.currentActivator = exports.installPathForGame = exports.installPath = void 0;
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
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
