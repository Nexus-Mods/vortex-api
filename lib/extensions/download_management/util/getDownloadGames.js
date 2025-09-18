"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../../../util/log");
function getDownloadGames(download) {
    if (Array.isArray(download.game)) {
        return download.game;
    }
    else if (download.game === undefined) {
        (0, log_1.log)('warn', 'download with no game associated', JSON.stringify(download));
        return [];
    }
    else {
        return [download.game];
    }
}
exports.default = getDownloadGames;
