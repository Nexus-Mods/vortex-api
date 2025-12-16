"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearLastActiveProfile = exports.setCurrentProfile = exports.setNextProfile = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
/**
 * sets a profile to be activated
 */
exports.setNextProfile = (0, safeCreateAction_1.default)("SET_NEXT_PROFILE", (profileId) => ({ profileId }));
/**
 * change current profile
 * this must only be used by profile_management internally!
 */
exports.setCurrentProfile = (0, safeCreateAction_1.default)("SET_CURRENT_PROFILE", (gameId, profileId) => ({ gameId, profileId }));
/**
 * clear the last known active profile for the specified game.
 * this should also only be called by profile_management internally.
 */
exports.clearLastActiveProfile = (0, safeCreateAction_1.default)("CLEAR_LAST_ACTIVE_PROFILE", (gameId) => ({ gameId }));
