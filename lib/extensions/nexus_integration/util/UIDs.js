"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFileUID = makeFileUID;
exports.makeModUID = makeModUID;
exports.makeModAndFileUIDs = makeModAndFileUIDs;
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
        return cache[gameId];
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
    console.log('makeModAndFileUIDs', gameId, modId, fileId);
    console.log('makeModAndFileUIDs repoInfo', repoInfo);
    return {
        modUID: makeModUID(repoInfo),
        fileUID: makeFileUID(repoInfo)
    };
}
