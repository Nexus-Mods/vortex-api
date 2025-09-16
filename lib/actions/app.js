"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInstallType = exports.setWarnedAdmin = exports.setInstanceId = exports.completeMigration = exports.forgetExtension = exports.removeExtension = exports.setExtensionEndorsed = exports.setExtensionVersion = exports.setExtensionEnabled = exports.setApplicationVersion = exports.setStateVersion = void 0;
const safeCreateAction_1 = __importDefault(require("./safeCreateAction"));
const id = input => input;
exports.setStateVersion = (0, safeCreateAction_1.default)('SET_STATE_VERSION', version => version);
exports.setApplicationVersion = (0, safeCreateAction_1.default)('SET_APPLICATION_VERSION', version => version);
exports.setExtensionEnabled = (0, safeCreateAction_1.default)('SET_EXTENSION_ENABLED', (extensionId, enabled) => ({ extensionId, enabled }));
exports.setExtensionVersion = (0, safeCreateAction_1.default)('SET_EXTENSION_VERSION', (extensionId, version) => ({ extensionId, version }));
exports.setExtensionEndorsed = (0, safeCreateAction_1.default)('SET_EXTENSION_ENDORSED', (extensionId, endorsed) => ({ extensionId, endorsed }));
exports.removeExtension = (0, safeCreateAction_1.default)('REMOVE_EXTENSION', id);
exports.forgetExtension = (0, safeCreateAction_1.default)('FORGET_EXTENSION', id);
exports.completeMigration = (0, safeCreateAction_1.default)('COMPLETE_MIGRATION', id);
exports.setInstanceId = (0, safeCreateAction_1.default)('SET_INSTANCE_ID', id);
exports.setWarnedAdmin = (0, safeCreateAction_1.default)('SET_WARNED_ADMIN', id);
exports.setInstallType = (0, safeCreateAction_1.default)('SET_INSTALL_TYPE', (type) => type);
