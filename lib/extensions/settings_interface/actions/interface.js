"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setForegroundDL = exports.setRelativeTimes = exports.showUsageInstruction = exports.setHideTopLevelCategory = exports.setDesktopNotifications = exports.setProfilesVisible = exports.setAdvancedMode = exports.setLanguage = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
/**
 * change the user interface language
 */
exports.setLanguage = (0, safeCreateAction_1.default)('SET_USER_LANGUAGE', lang => lang);
/**
 * enable or disable advanced mode
 */
exports.setAdvancedMode = (0, safeCreateAction_1.default)('SET_ADVANCED_MODE', (advanced) => ({ advanced }));
exports.setProfilesVisible = (0, safeCreateAction_1.default)('SET_PROFILES_VISIBLE', (visible) => ({ visible }));
exports.setDesktopNotifications = (0, safeCreateAction_1.default)('SET_DESKTOP_NOTIFICATIONS', (enabled) => enabled);
exports.setHideTopLevelCategory = (0, safeCreateAction_1.default)('SET_HIDE_TOPLEVEL_CATEGORY', (hide) => ({ hide }));
exports.showUsageInstruction = (0, safeCreateAction_1.default)('SHOW_USAGE_INSTRUCTION', (usageId, show) => ({ usageId, show }));
exports.setRelativeTimes = (0, safeCreateAction_1.default)('SET_RELATIVE_TIMES', (enabled) => enabled);
exports.setForegroundDL = (0, safeCreateAction_1.default)('SET_FOREGROUND_DL', (enabled) => enabled);
