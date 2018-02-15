"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
exports.startDialog = safeCreateAction_1.default('START_FOMOD_DIALOG', (info) => info);
exports.endDialog = safeCreateAction_1.default('END_FOMOD_DIALOG', () => undefined);
exports.setDialogState = safeCreateAction_1.default('SET_FOMOD_DIALOG_STATE', (state) => state);
exports.setInstallerDataPath = safeCreateAction_1.default('SET_INSTALLER_DATA_PATH', (path) => path);
