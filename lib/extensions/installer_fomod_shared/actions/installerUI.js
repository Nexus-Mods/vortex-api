"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDialogState = exports.clearDialog = exports.endDialog = exports.startDialog = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
exports.startDialog = (0, safeCreateAction_1.default)("START_FOMOD_DIALOG", (info, instanceId) => ({
    info,
    instanceId,
}));
exports.endDialog = (0, safeCreateAction_1.default)("END_FOMOD_DIALOG", (instanceId) => ({
    instanceId,
}));
exports.clearDialog = (0, safeCreateAction_1.default)("CLEAR_FOMOD_DIALOG", (instanceId) => ({
    instanceId,
}));
exports.setDialogState = (0, safeCreateAction_1.default)("SET_FOMOD_DIALOG_STATE", (dialogState, instanceId) => ({
    dialogState,
    instanceId,
}));
