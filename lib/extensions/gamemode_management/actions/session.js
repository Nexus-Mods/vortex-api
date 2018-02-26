"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
/**
 * sets the list of known/supported games
 */
exports.setKnownGames = safeCreateAction_1.default('SET_KNOWN_GAMES', games => games);
