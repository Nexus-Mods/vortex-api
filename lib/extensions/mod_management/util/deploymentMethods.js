"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDeploymentMethod = registerDeploymentMethod;
exports.getAllActivators = getAllActivators;
exports.getSupportedActivators = getSupportedActivators;
exports.getSelectedActivator = getSelectedActivator;
exports.getCurrentActivator = getCurrentActivator;
exports.getActivator = getActivator;
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const getGame_1 = require("../../gamemode_management/util/getGame");
const selectors_1 = require("../../profile_management/selectors");
const allTypesSupported_1 = __importDefault(require("./allTypesSupported"));
const activators = [];
function byPriority(lhs, rhs) {
    return lhs.priority - rhs.priority;
}
function registerDeploymentMethod(activator) {
    activators.push(activator);
    activators.sort(byPriority);
}
function getAllActivators() {
    return activators;
}
/**
 * return only those activators that are supported based on the current state
 *
 * @param {*} state
 * @returns {IDeploymentMethod[]}
 */
function getSupportedActivators(state) {
    const gameId = (0, selectors_1.activeGameId)(state);
    const discovery = state.settings.gameMode.discovered[gameId];
    if ((discovery === undefined) || (discovery.path === undefined)) {
        return [];
    }
    const game = (0, getGame_1.getGame)(gameId);
    if (game === undefined) {
        return [];
    }
    const modPaths = game.getModPaths(discovery.path);
    const modTypes = Object.keys(modPaths)
        .filter(typeId => (0, util_1.truthy)(modPaths[typeId]));
    return activators.filter(act => (0, allTypesSupported_1.default)(act, state, gameId, modTypes).errors.length === 0);
}
function getSelectedActivator(state, gameId) {
    const activatorId = state.settings.mods.activator[gameId];
    return (activatorId !== undefined)
        ? activators.find((act) => act.id === activatorId)
        : undefined;
}
function getCurrentActivator(state, gameId, allowDefault) {
    let activator = getSelectedActivator(state, gameId);
    const gameDiscovery = (0, storeHelper_1.getSafe)(state, ['settings', 'gameMode', 'discovered', gameId], undefined);
    if ((gameDiscovery === null || gameDiscovery === void 0 ? void 0 : gameDiscovery.path) === undefined) {
        // activator for a game that's not discovered doesn't really make sense
        return undefined;
    }
    const game = (0, getGame_1.getGame)(gameId);
    if ((game === null || game === void 0 ? void 0 : game.getModPaths) === undefined) {
        // Game is discovered but the gameModeManager isn't aware of it ?
        //  fantastic. https://github.com/Nexus-Mods/Vortex/issues/7079
        return undefined;
    }
    const modPaths = game.getModPaths(gameDiscovery.path);
    const types = Object.keys(modPaths)
        .filter(typeId => (0, util_1.truthy)(modPaths[typeId]));
    // if no activator has been selected for the game, allow using a default
    if (allowDefault && (activator === undefined)) {
        if ((game !== undefined) && ((gameDiscovery === null || gameDiscovery === void 0 ? void 0 : gameDiscovery.path) !== undefined)) {
            const modTypes = Object.keys(modPaths);
            const hadWarnings = [];
            activator = activators.find(act => {
                const problems = (0, allTypesSupported_1.default)(act, state, gameId, modTypes);
                if (problems.errors.length === 0) {
                    if (problems.warnings.length > 0) {
                        hadWarnings.push(act);
                    }
                    else {
                        return true;
                    }
                }
                return false;
            });
            // prefer an activator without warnings but if there is none, use one with warnings
            if ((activator === undefined) && (hadWarnings.length > 0)) {
                activator = hadWarnings[0];
            }
        }
    }
    if (activator === undefined) {
        return undefined;
    }
    if ((0, allTypesSupported_1.default)(activator, state, gameId, types).errors.length !== 0) {
        // if the selected activator is no longer supported, don't use it
        return undefined;
    }
    return activator;
}
function getActivator(activatorId) {
    return activators.find(act => act.id === activatorId);
}
