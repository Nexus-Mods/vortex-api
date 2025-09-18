"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nexusGameId = nexusGameId;
exports.convertGameIdReverse = convertGameIdReverse;
exports.convertNXMIdReverse = convertNXMIdReverse;
exports.toNXMId = toNXMId;
const util_1 = require("util");
const log_1 = require("../../../util/log");
const util_2 = require("../../../util/util");
const constants_1 = require("../../gamemode_management/constants");
/**
 * get the nexus page id for a game
 * TODO: some games have hard-coded transformations here, should move all of that to game.details
 */
function nexusGameId(game, fallbackGameId) {
    var _a;
    if ((game === undefined) && (fallbackGameId === undefined)) {
        return undefined;
    }
    if ((0, util_2.truthy)(game)
        && (game.details !== undefined)
        && (game.details.nexusPageId !== undefined)) {
        return game.details.nexusPageId;
    }
    const gameId = (_a = game === null || game === void 0 ? void 0 : game.id) !== null && _a !== void 0 ? _a : fallbackGameId;
    try {
        return {
            skyrimse: 'skyrimspecialedition',
            skyrimvr: 'skyrimspecialedition',
            falloutnv: 'newvegas',
            fallout4vr: 'fallout4',
            teso: 'elderscrollsonline',
        }[gameId.toLowerCase()] || gameId;
    }
    catch (err) {
        (0, log_1.log)('error', 'failed to convert game id to domain', {
            message: err.message,
            game: (0, util_1.inspect)(game),
            fallbackGameId,
        });
        throw err;
    }
}
/**
 * get our internal game id for a nexus page id
 */
function convertGameIdReverse(knownGames, input) {
    if ((input === null || input === void 0 ? void 0 : input.toLowerCase) === undefined) {
        return undefined;
    }
    const validGames = knownGames.filter(iter => iter.id === input.toLowerCase() ||
        (iter.details !== undefined) && (iter.details.nexusPageId === input));
    // We obviously prefer the exact match first.
    const game = validGames.find(iter => iter.id === input.toLowerCase());
    if (game !== undefined) {
        return game.id;
    }
    // Alternatively - there may be a nexus page id match.
    if (validGames.length > 0) {
        return validGames[0].id;
    }
    return {
        skyrimspecialedition: 'skyrimse',
        newvegas: 'falloutnv',
        elderscrollsonline: 'teso',
    }[input.toLowerCase()] || input.toLowerCase();
}
/**
 * get our internal game id for a nxm link id
 */
function convertNXMIdReverse(knownGames, input) {
    if (input === undefined) {
        return undefined;
    }
    const clearGameMatch = knownGames.find(iter => iter.id === input.toLowerCase());
    if (clearGameMatch) {
        return clearGameMatch.id;
    }
    const game = knownGames.find(iter => (iter.details !== undefined) &&
        ((iter.details.nxmLinkId === input) || (iter.details.nexusPageId === input)));
    if (game !== undefined) {
        return game.id;
    }
    return input.toLowerCase();
}
/**
 * get the nxm link id for a game
 */
function toNXMId(game, gameId) {
    // this is a bit of a workaround since "site" isn't and shouldn't be an
    // entry in the list of games (here or on the site)
    if (game == null) {
        return constants_1.SITE_ID;
    }
    if (!!game.downloadGameId && game.downloadGameId !== game.id) {
        return game.downloadGameId;
    }
    if ((game === null || game === void 0 ? void 0 : game.details) !== undefined) {
        if (game.details.nxmLinkId !== undefined) {
            return game.details.nxmLinkId;
        }
        else if (game.details.nexusPageId !== undefined) {
            return game.details.nexusPageId;
        }
        gameId = game.downloadGameId || game.id;
    }
    const gameIdL = gameId.toLowerCase();
    if (gameIdL === 'skyrimse') {
        return 'SkyrimSE';
    }
    else if (gameIdL === 'fallout4vr') {
        return 'fallout4';
    }
    else {
        return gameId;
    }
}
