"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discoveryByGame = exports.gameById = exports.currentGame = void 0;
exports.knownGames = knownGames;
exports.currentGameDiscovery = currentGameDiscovery;
exports.gameName = gameName;
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const constants_1 = require("./constants");
const re_reselect_1 = __importDefault(require("re-reselect"));
const reselect_1 = require("reselect");
function knownGames(state) {
    return (0, storeHelper_1.getSafe)(state, ["session", "gameMode", "known"], []);
}
function discovered(state) {
    return state.settings.gameMode.discovered;
}
exports.currentGame = (0, reselect_1.createSelector)(knownGames, selectors_1.activeGameId, (games, currentGameMode) => games.find((game) => game.id === currentGameMode));
exports.gameById = (0, re_reselect_1.default)(knownGames, (state, gameId) => gameId, (games, gameId) => games.find((game) => game.id === gameId))((state, gameId) => gameId);
/**
 * return the discovery information about a game
 *
 * @export
 * @param {*} state
 * @returns {IDiscoveryResult}
 */
function currentGameDiscovery(state) {
    const gameMode = (0, selectors_1.activeGameId)(state);
    return (0, storeHelper_1.getSafe)(state, ["settings", "gameMode", "discovered", gameMode], undefined);
}
exports.discoveryByGame = (0, re_reselect_1.default)(discovered, (state, gameId) => gameId, (discoveredIn, gameId) => discoveredIn[gameId])((state, gameId) => gameId);
function gameName(state, gameId) {
    if (gameId === constants_1.SITE_ID) {
        return "Tools & Extensions";
    }
    const fromDiscovery = (0, storeHelper_1.getSafe)(state, ["settings", "gameMode", "discovered", gameId, "name"], undefined);
    if (fromDiscovery !== undefined) {
        return fromDiscovery;
    }
    const known = (0, storeHelper_1.getSafe)(state, ["session", "gameMode", "known"], []).find((game) => game.id === gameId);
    if (known !== undefined) {
        return known.name;
    }
    else {
        return undefined;
    }
}
