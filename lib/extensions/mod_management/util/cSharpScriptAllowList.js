"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCSharpScriptAllowListForGame = void 0;
const allowList = new Map([
    [{ domainName: 'newvegas', numericGameId: 130, internalId: 'falloutnv' }, new Set(['42507'])],
    [{ domainName: 'fallout3', numericGameId: 120, internalId: 'fallout3' }, new Set([])],
    [{ domainName: 'oblivion', numericGameId: 101, internalId: 'oblivion' }, new Set([])],
]);
/**
 * Get the CSharp script allow list for a specific game.
 * @param gameId internal game id (i.e. falloutnv)
 * @returns a set of allowed mod IDs
 */
const getCSharpScriptAllowListForGame = (gameId) => {
    const result = new Set();
    for (const [key, value] of allowList.entries()) {
        if (key.internalId === gameId) {
            value.forEach(modId => result.add(modId));
        }
    }
    return result;
};
exports.getCSharpScriptAllowListForGame = getCSharpScriptAllowListForGame;
