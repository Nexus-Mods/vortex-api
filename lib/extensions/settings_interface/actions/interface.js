"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
/**
 * change the user interface language
 */
exports.setLanguage = safeCreateAction_1.default('SET_USER_LANGUAGE', lang => lang);
/**
 * enable or disable advanced mode
 */
exports.setAdvancedMode = safeCreateAction_1.default('SET_ADVANCED_MODE', (advanced) => ({ advanced }));
exports.setProfilesVisible = safeCreateAction_1.default('SET_PROFILES_VISIBLE', (visible) => ({ visible }));
