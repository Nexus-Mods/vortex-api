"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
/**
 * add or edit a profile
 */
exports.setProfile = safeCreateAction_1.default('SET_PROFILE');
exports.removeProfile = safeCreateAction_1.default('REMOVE_PROFILE');
/**
 * enable or disable a mod in a profile
 */
exports.setModEnabled = safeCreateAction_1.default('SET_MOD_ENABLED', (profileId, modId, enable) => ({ profileId, modId, enable }));
exports.forgetMod = safeCreateAction_1.default('FORGET_PROFILE_MOD', (profileId, modId) => ({ profileId, modId }));
exports.setFeature = safeCreateAction_1.default('SET_PROFILE_FEATURE', (profileId, featureId, value) => ({ profileId, featureId, value }));
exports.setProfileActivated = safeCreateAction_1.default('SET_PROFILE_ACTIVATED');
