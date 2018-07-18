"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
exports.addMod = safeCreateAction_1.default('ADD_MOD', (gameId, mod) => ({ gameId, mod }));
exports.addMods = safeCreateAction_1.default('ADD_MODS', (gameId, mods) => ({ gameId, mods }));
exports.removeMod = safeCreateAction_1.default('REMOVE_MOD', (gameId, modId) => ({ gameId, modId }));
/**
 * sets the state of a mod (whether it's downloaded, installed, ...)
 */
exports.setModState = safeCreateAction_1.default('SET_MOD_STATE', (gameId, modId, modState) => ({ gameId, modId, modState }));
/**
 * sets the (final) installation path of the mod. This should be set as soon as
 * any data is written to disk so that it can be cleaned/removed in case of an error.
 * The actual path on disk may be a variation of this path during installation.
 */
exports.setModInstallationPath = safeCreateAction_1.default('SET_MOD_INSTALLATION_PATH', (gameId, modId, installPath) => ({ gameId, modId, installPath }));
/**
 * sets the value of an attribute on a mod
 */
exports.setModAttribute = safeCreateAction_1.default('SET_MOD_ATTRIBUTE', (gameId, modId, attribute, value) => ({ gameId, modId, attribute, value }));
/**
 * set multiple mod attributes at once
 */
exports.setModAttributes = safeCreateAction_1.default('SET_MOD_ATTRIBUTES', (gameId, modId, attributes) => ({ gameId, modId, attributes }));
/**
 * sets the type of a mod
 */
exports.setModType = safeCreateAction_1.default('SET_MOD_TYPE', (gameId, modId, type) => ({ gameId, modId, type }));
/**
 * add a dependency rule for this mod
 */
exports.addModRule = safeCreateAction_1.default('ADD_MOD_RULE', (gameId, modId, rule) => ({ gameId, modId, rule }));
/**
 * remove a dependency rule from this mod
 */
exports.removeModRule = safeCreateAction_1.default('REMOVE_MOD_RULE', (gameId, modId, rule) => ({ gameId, modId, rule }));
exports.setINITweakEnabled = safeCreateAction_1.default('SET_TWEAK_ENABLED', (gameId, modId, tweak, enabled) => ({ gameId, modId, tweak, enabled }));
