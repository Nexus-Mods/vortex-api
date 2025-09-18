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
    return ((BigInt(gameNum(repoInfo.gameId)) << BigInt(32))
        | BigInt(parseInt(repoInfo.fileId, 10))).toString();
}
function makeModUID(repoInfo) {
    return ((BigInt(gameNum(repoInfo.gameId)) << BigInt(32))
        | BigInt(parseInt(repoInfo.modId, 10))).toString();
}
function makeModAndFileUIDs(gameId, modId, fileId) {
    const repoInfo = { gameId, modId, fileId };
    return {
        modUID: makeModUID(repoInfo),
        fileUID: makeFileUID(repoInfo)
    };
}
