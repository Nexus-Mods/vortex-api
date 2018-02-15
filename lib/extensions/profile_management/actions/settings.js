"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
/**
 * sets a profile to be activated
 */
exports.setNextProfile = safeCreateAction_1.default('SET_NEXT_PROFILE', (profileId) => ({ profileId }));
/**
 * change current profile
 * this must only be used by profile_management internally!
 */
exports.setCurrentProfile = safeCreateAction_1.default('SET_CURRENT_PROFILE', (gameId, profileId) => ({ gameId, profileId }));
