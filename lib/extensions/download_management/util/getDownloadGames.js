"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDownloadGames(download) {
    if (Array.isArray(download.game)) {
        return download.game;
    }
    else if (download.game === undefined) {
        return [];
    }
    else {
        return [download.game];
    }
}
exports.default = getDownloadGames;
