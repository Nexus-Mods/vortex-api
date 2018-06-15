"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
/**
 * change a path (base, download or installation) for
 * storing things. Supports placeholders
 */
exports.setPath = safeCreateAction_1.default('SET_MOD_PATH', (gameId, key, path) => ({ gameId, key, path }));
/**
 * sets the activator to use for this game
 */
exports.setActivator = safeCreateAction_1.default('SET_ACTIVATOR', (gameId, activatorId) => ({ gameId, activatorId }));
/**
 * sets the updating mods flag
 */
exports.setUpdatingMods = safeCreateAction_1.default('SET_UPDATING_MODS', (gameId, updatingMods) => ({ gameId, updatingMods }));
exports.setShowModDropzone = safeCreateAction_1.default('SET_SHOW_MOD_DROPZONE', show => show);
