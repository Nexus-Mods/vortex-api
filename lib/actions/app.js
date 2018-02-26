"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("./safeCreateAction");
const id = input => input;
exports.setStateVersion = safeCreateAction_1.default('SET_STATE_VERSION');
exports.setExtensionEnabled = safeCreateAction_1.default('SET_EXTENSION_ENABLED', (extensionId, enabled) => ({ extensionId, enabled }));
exports.removeExtension = safeCreateAction_1.default('REMOVE_EXTENSION', id);
exports.forgetExtension = safeCreateAction_1.default('FORGET_EXTENSION', id);
exports.setInstanceId = safeCreateAction_1.default('SET_INSTANCE_ID', id);
