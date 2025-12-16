"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGameDisabled = exports.clearGameDisabled = exports.setKnownGames = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
/**
 * sets the list of known/supported games
 */
exports.setKnownGames = (0, safeCreateAction_1.default)("SET_KNOWN_GAMES", (games) => games);
exports.clearGameDisabled = (0, safeCreateAction_1.default)("CLEAR_GAME_DISABLED");
exports.setGameDisabled = (0, safeCreateAction_1.default)("SET_GAME_DISABLED", (gameId, disabledBy) => ({ gameId, disabledBy }));
