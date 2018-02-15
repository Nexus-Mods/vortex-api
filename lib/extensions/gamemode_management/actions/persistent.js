"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
exports.setGameInfo = safeCreateAction_1.default('SET_GAME_INFO', (gameId, provider, expires, values) => ({ gameId, provider, expires, values }));
