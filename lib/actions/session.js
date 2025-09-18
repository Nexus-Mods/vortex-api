"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCommandLine = exports.setNetworkConnected = exports.clearUIBlocker = exports.setUIBlocker = exports.setExtensionLoadFailures = exports.setToolStopped = exports.setToolPid = exports.setToolRunning = exports.setProgress = exports.stopActivity = exports.startActivity = exports.setOpenMainPage = exports.setSettingsPage = exports.setDialogVisible = exports.displayGroup = void 0;
const safeCreateAction_1 = __importDefault(require("./safeCreateAction"));
const uiOnlyMeta = (process.type === 'renderer')
    ? () => ({ forward: false, scope: 'local' })
    : undefined;
/**
 * action to choose which item in a group to display (all other items in the
 * group will be hidden). the itemId can be undefined to hide them all.
 */
exports.displayGroup = (0, safeCreateAction_1.default)('DISPLAY_GROUP', (groupId, itemId) => ({ groupId, itemId }));
exports.setDialogVisible = (0, safeCreateAction_1.default)('SET_DIALOG_VISIBLE', (dialogId) => ({ dialogId }));
exports.setSettingsPage = (0, safeCreateAction_1.default)('SET_SETTINGS_PAGE', (pageId) => ({ pageId }));
exports.setOpenMainPage = (0, safeCreateAction_1.default)('SET_OPEN_MAINPAGE', (page, secondary) => ({ page, secondary }));
exports.startActivity = (0, safeCreateAction_1.default)('START_ACTIVITY', (group, activityId) => ({ group, activityId }), uiOnlyMeta);
exports.stopActivity = (0, safeCreateAction_1.default)('STOP_ACTIVITY', (group, activityId) => ({ group, activityId }), uiOnlyMeta);
exports.setProgress = (0, safeCreateAction_1.default)('SET_PROGRESS', (group, progressId, text, percent) => ({ group, progressId, text, percent }));
exports.setToolRunning = (0, safeCreateAction_1.default)('SET_TOOL_RUNNING', (exePath, started, exclusive) => ({ exePath, started, exclusive }));
exports.setToolPid = (0, safeCreateAction_1.default)('SET_TOOL_RUNNING', (exePath, pid, exclusive) => ({ exePath, pid, exclusive }));
exports.setToolStopped = (0, safeCreateAction_1.default)('SET_TOOL_STOPPED', (exePath) => ({ exePath }));
exports.setExtensionLoadFailures = (0, safeCreateAction_1.default)('SET_EXT_LOAD_FAILURES', failures => failures);
exports.setUIBlocker = (0, safeCreateAction_1.default)('SET_UI_BLOCKER', (id, icon, description, mayCancel) => ({ id, icon, description, mayCancel }));
exports.clearUIBlocker = (0, safeCreateAction_1.default)('CLEAR_UI_BLOCKER', (id) => id);
exports.setNetworkConnected = (0, safeCreateAction_1.default)('SET_NETWORK_CONNECTED', (connected) => connected);
exports.setCommandLine = (0, safeCreateAction_1.default)('SET_COMMAND_LINE', (args) => args);
