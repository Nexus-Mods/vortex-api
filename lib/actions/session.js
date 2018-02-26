"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("./safeCreateAction");
/**
 * action to choose which item in a group to display (all other items in the
 * group will be hidden). the itemId can be undefined to hide them all.
 */
exports.displayGroup = safeCreateAction_1.default('DISPLAY_GROUP', (groupId, itemId) => ({ groupId, itemId }));
exports.setDialogVisible = safeCreateAction_1.default('SET_DIALOG_VISIBLE', (dialogId) => ({ dialogId }));
exports.setSettingsPage = safeCreateAction_1.default('SET_SETTINGS_PAGE', (pageId) => ({ pageId }));
/**
 * open the overlay for the current page
 */
exports.setOverlayOpen = safeCreateAction_1.default('SET_OVERLAY_OPEN', (open) => ({ open }));
exports.setOpenMainPage = safeCreateAction_1.default('SET_OPEN_MAINPAGE', (page, secondary) => ({ page, secondary }));
exports.startActivity = safeCreateAction_1.default('START_ACTIVITY', (group, activityId) => ({ group, activityId }));
exports.stopActivity = safeCreateAction_1.default('STOP_ACTIVITY', (group, activityId) => ({ group, activityId }));
exports.setProgress = safeCreateAction_1.default('SET_PROGRESS', (group, progressId, text, percent) => ({ group, progressId, text, percent }));
exports.setExtensionLoadFailures = safeCreateAction_1.default('SET_EXT_LOAD_FAILURES', failures => failures);
