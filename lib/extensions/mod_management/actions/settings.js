"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCleanupOnDeploy = exports.setConfirmPurge = exports.setShowModDropzone = exports.setActivator = exports.setSuggestInstallPathDirectory = exports.setInstallPathMode = exports.setInstallPath = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
/**
 * change the mod install path. Supports placeholders
 */
exports.setInstallPath = (0, safeCreateAction_1.default)("SET_MOD_INSTALL_PATH", (gameId, path) => ({ gameId, path }));
exports.setInstallPathMode = (0, safeCreateAction_1.default)("SET_MOD_INSTALL_PATH_MODE", (mode) => mode);
exports.setSuggestInstallPathDirectory = (0, safeCreateAction_1.default)("SET_SUGGEST_INSTALL_PATH_DIRECTORY", (path) => path);
/**
 * sets the activator to use for this game
 */
exports.setActivator = (0, safeCreateAction_1.default)("SET_ACTIVATOR", (gameId, activatorId) => ({ gameId, activatorId }));
exports.setShowModDropzone = (0, safeCreateAction_1.default)("SET_SHOW_MOD_DROPZONE", (show) => show);
exports.setConfirmPurge = (0, safeCreateAction_1.default)("SET_CONFIRM_PURGE", (confirm) => confirm);
exports.setCleanupOnDeploy = (0, safeCreateAction_1.default)("SET_CLEANUP_ON_DEPLOY", (cleanup) => cleanup);
