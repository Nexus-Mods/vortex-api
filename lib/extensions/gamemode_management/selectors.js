"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectors_1 = require("../../util/selectors");
const storeHelper_1 = require("../../util/storeHelper");
const reselect_1 = require("reselect");
function knownGames(state) {
    return storeHelper_1.getSafe(state, ['session', 'gameMode', 'known'], []);
}
exports.knownGames = knownGames;
exports.currentGame = reselect_1.createSelector(knownGames, selectors_1.activeGameId, (games, currentGameMode) => games.find(game => game.id === currentGameMode));
/**
 * return the discovery information about a game
 *
 * @export
 * @param {*} state
 * @returns {IDiscoveryResult}
 */
function currentGameDiscovery(state) {
    const gameMode = selectors_1.activeGameId(state);
    return storeHelper_1.getSafe(state, ['settings', 'gameMode', 'discovered', gameMode], undefined);
}
exports.currentGameDiscovery = currentGameDiscovery;
function gameName(state, gameId) {
    const fromDiscovery = storeHelper_1.getSafe(state, ['settings', 'gameMode', 'discovered', gameId, 'name'], undefined);
    if (fromDiscovery !== undefined) {
        return fromDiscovery;
    }
    const known = storeHelper_1.getSafe(state, ['session', 'gameMode', 'known'], [])
        .find(game => game.id === gameId);
    if (known !== undefined) {
        return known.name;
    }
    else {
        return undefined;
    }
}
exports.gameName = gameName;
