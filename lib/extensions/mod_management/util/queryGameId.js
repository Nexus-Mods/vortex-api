"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../../../actions");
const CustomErrors_1 = require("../../../util/CustomErrors");
const selectors_1 = require("../../../util/selectors");
const constants_1 = require("../../gamemode_management/constants");
const convertGameId_1 = require("../../nexus_integration/util/convertGameId");
const bluebird_1 = __importDefault(require("bluebird"));
/**
 * Determine which game to install a download for.
 * If the currently managed game is compatible, just pick that, otherwise ask the user
 */
function queryGameId(store, downloadGameIds, fileName) {
    const state = store.getState();
    const gameMode = (0, selectors_1.activeGameId)(state);
    if (!Array.isArray(downloadGameIds)) {
        downloadGameIds = [downloadGameIds];
    }
    if (gameMode === undefined && downloadGameIds.length === 1) {
        // Surely if there's no active game, and the downloaded game id
        //  array contains a single element, then we can just use that.
        return bluebird_1.default.resolve(downloadGameIds[0]);
    }
    if (downloadGameIds.indexOf(gameMode) !== -1) {
        // the managed game is compatible to the archive so use that
        return bluebird_1.default.resolve(gameMode);
    }
    // Check for game ID conversion compatibility (e.g., skyrimse <-> skyrimspecialedition)
    const games = (0, selectors_1.knownGames)(state);
    const currentGame = games.find(game => game.id === gameMode);
    if (currentGame) {
        // Check if any downloadGameIds match when converted to internal IDs
        const convertedDownloadIds = downloadGameIds.map(id => (0, convertGameId_1.convertGameIdReverse)(games, id));
        if (convertedDownloadIds.indexOf(gameMode) !== -1) {
            return bluebird_1.default.resolve(gameMode);
        }
        // Check if current game's nexus ID matches any downloadGameIds
        const currentGameNexusId = (0, convertGameId_1.nexusGameId)(currentGame);
        if (downloadGameIds.indexOf(currentGameNexusId) !== -1) {
            return bluebird_1.default.resolve(gameMode);
        }
    }
    if ((downloadGameIds.length === 1) && (downloadGameIds[0] === constants_1.SITE_ID) && fileName.toLowerCase().includes('extension')) {
        return bluebird_1.default.resolve(downloadGameIds[0]);
    }
    const profiles = state.persistent.profiles;
    const profileGames = new Set(Object.keys(profiles).map((profileId) => profiles[profileId].gameId));
    // we only offer to install for games that are managed because for others the user
    // doesn't have a direct way to configure the install directory
    const managed = downloadGameIds.filter(gameId => { var _a; return profileGames.has(gameId) && (((_a = (0, selectors_1.discoveryByGame)(state, gameId)) === null || _a === void 0 ? void 0 : _a.path) !== undefined); });
    // ask the user
    return new bluebird_1.default((resolve, reject) => {
        const options = [
            { label: 'Cancel', action: () => reject(new CustomErrors_1.UserCanceled()) },
        ];
        if (gameMode !== undefined) {
            options.push({
                label: (0, selectors_1.gameName)(state, gameMode),
                action: () => resolve(gameMode),
            });
        }
        if (managed.length === 0) {
            store.dispatch((0, actions_1.showDialog)('question', 'No compatible game being managed', {
                text: 'The game(s) associated with this download are not managed, '
                    + 'Install for the currently managed game?',
                message: fileName,
            }, options));
        }
        else {
            store.dispatch((0, actions_1.showDialog)('question', 'Download is for a different game', {
                text: 'The download is not marked compatible with the managed game. ' +
                    'Which one do you want to install it for?',
                message: fileName,
            }, options.concat(managed.map(gameId => ({ label: (0, selectors_1.gameName)(store.getState(), gameId), action: () => resolve(gameId) })))));
        }
    });
}
exports.default = queryGameId;
