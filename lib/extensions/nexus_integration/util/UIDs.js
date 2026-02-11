"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFileUID = makeFileUID;
exports.makeModUID = makeModUID;
exports.makeModAndFileUIDs = makeModAndFileUIDs;
const convertGameId_1 = require("../../nexus_integration/util/convertGameId");
const getGame_1 = require("../../gamemode_management/util/getGame");
const log_1 = require("../../../util/log");
const util_1 = require("../util");
const gameNum = (() => {
    let cache;
    return (gameId) => {
        if (cache === undefined) {
            const games = (0, util_1.nexusGames)();
            if (games.length > 0) {
                cache = games.reduce((prev, game) => {
                    prev[game.domain_name] = game.id;
                    return prev;
                }, {});
            }
        }
        const game = (0, getGame_1.getGame)(gameId);
        return cache[(0, convertGameId_1.nexusGameId)(game, gameId)];
    };
})();
function makeFileUID(repoInfo) {
    // check if gameId is numeric and if not, use gameNum() to convert
    const gameIdNum = /^\d+$/.test(repoInfo.gameId)
        ? parseInt(repoInfo.gameId, 10)
        : gameNum(repoInfo.gameId);
    if (gameIdNum === undefined || isNaN(gameIdNum)) {
        return undefined;
    }
    const fileId = parseInt(repoInfo.fileId, 10);
    if (isNaN(fileId)) {
        return undefined;
    }
    return ((BigInt(gameIdNum) << BigInt(32)) | BigInt(fileId)).toString();
}
function makeModUID(repoInfo) {
    // check if gameId is numeric and if not, use gameNum() to convert
    const gameIdNum = /^\d+$/.test(repoInfo.gameId)
        ? parseInt(repoInfo.gameId, 10)
        : gameNum(repoInfo.gameId);
    if (gameIdNum === undefined || isNaN(gameIdNum)) {
        return undefined;
    }
    const modId = parseInt(repoInfo.modId, 10);
    if (isNaN(modId)) {
        return undefined;
    }
    return ((BigInt(gameIdNum) << BigInt(32)) | BigInt(modId)).toString();
}
function makeModAndFileUIDs(gameId, modId, fileId) {
    // 1303 518 138454
    const repoInfo = { gameId, modId, fileId };
    if (process.env.NODE_ENV === "development") {
        (0, log_1.log)("debug", "makeModAndFileUIDs", JSON.stringify(repoInfo));
    }
    // Early return if gameId, modId or fileId is missing or invalid
    if (!repoInfo.gameId ||
        !repoInfo.modId ||
        !repoInfo.fileId ||
        isNaN(parseInt(repoInfo.modId, 10)) ||
        isNaN(parseInt(repoInfo.fileId, 10))) {
        return { modUID: undefined, fileUID: undefined };
    }
    const gameIdNum = /^\d+$/.test(repoInfo.gameId)
        ? parseInt(repoInfo.gameId, 10)
        : gameNum(repoInfo.gameId);
    if (gameIdNum === undefined || isNaN(gameIdNum)) {
        return { modUID: undefined, fileUID: undefined };
    }
    return {
        modUID: makeModUID(repoInfo),
        fileUID: makeFileUID(repoInfo),
    };
}
