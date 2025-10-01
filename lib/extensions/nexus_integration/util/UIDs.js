"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFileUID = makeFileUID;
exports.makeModUID = makeModUID;
exports.makeModAndFileUIDs = makeModAndFileUIDs;
const api_1 = require("../../../util/api");
const log_1 = require("../../../util/log");
const util_1 = require("../util");
const gameNum = (() => {
    let cache;
    return (gameId) => {
        if (cache === undefined) {
            cache = (0, util_1.nexusGames)().reduce((prev, game) => {
                prev[game.domain_name] = game.id;
                return prev;
            }, {});
        }
        const game = (0, api_1.getGame)(gameId);
        return cache[(0, api_1.nexusGameId)(game, gameId)];
    };
})();
function makeFileUID(repoInfo) {
    // check if gameId is numeric and if not, use gameNum() to convert
    const gameIdNum = /^\d+$/.test(repoInfo.gameId)
        ? parseInt(repoInfo.gameId, 10)
        : gameNum(repoInfo.gameId);
    return ((BigInt(gameIdNum) << BigInt(32))
        | BigInt(parseInt(repoInfo.fileId, 10))).toString();
}
function makeModUID(repoInfo) {
    // check if gameId is numeric and if not, use gameNum() to convert
    const gameIdNum = /^\d+$/.test(repoInfo.gameId)
        ? parseInt(repoInfo.gameId, 10)
        : gameNum(repoInfo.gameId);
    return ((BigInt(gameIdNum) << BigInt(32))
        | BigInt(parseInt(repoInfo.modId, 10))).toString();
}
function makeModAndFileUIDs(gameId, modId, fileId) {
    // 1303 518 138454
    const repoInfo = { gameId, modId, fileId };
    if (process.env.NODE_ENV === 'development') {
        (0, log_1.log)('debug', 'makeModAndFileUIDs', JSON.stringify(repoInfo));
    }
    // Early return if mId or fId is missing or invalid
    if (!repoInfo.modId || !repoInfo.fileId
        || isNaN(parseInt(repoInfo.modId, 10))
        || isNaN(parseInt(repoInfo.fileId, 10))) {
        return { modUID: undefined, fileUID: undefined };
    }
    else {
        return {
            modUID: makeModUID(repoInfo),
            fileUID: makeFileUID(repoInfo)
        };
    }
}
