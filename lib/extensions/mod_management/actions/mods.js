"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFileOverride = exports.setINITweakEnabled = exports.cacheModReference = exports.removeModRule = exports.addModRule = exports.clearModRules = exports.setModType = exports.setModAttributes = exports.setModAttribute = exports.setModInstallationPath = exports.setModState = exports.setModArchiveId = exports.removeMod = exports.addMods = exports.addMod = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
exports.addMod = (0, safeCreateAction_1.default)('ADD_MOD', (gameId, mod) => ({ gameId, mod }));
exports.addMods = (0, safeCreateAction_1.default)('ADD_MODS', (gameId, mods) => ({ gameId, mods }));
exports.removeMod = (0, safeCreateAction_1.default)('REMOVE_MOD', (gameId, modId) => ({ gameId, modId }));
exports.setModArchiveId = (0, safeCreateAction_1.default)('SET_MOD_ARCHIVEID', (gameId, modId, archiveId) => ({ gameId, modId, archiveId }));
/**
 * sets the state of a mod (whether it's downloaded, installed, ...)
 */
exports.setModState = (0, safeCreateAction_1.default)('SET_MOD_STATE', (gameId, modId, modState) => ({ gameId, modId, modState }));
/**
 * sets the (final) installation path of the mod. This should be set as soon as
 * any data is written to disk so that it can be cleaned/removed in case of an error.
 * The actual path on disk may be a variation of this path during installation.
 */
exports.setModInstallationPath = (0, safeCreateAction_1.default)('SET_MOD_INSTALLATION_PATH', (gameId, modId, installPath) => ({ gameId, modId, installPath }));
/**
 * sets the value of an attribute on a mod
 */
exports.setModAttribute = (0, safeCreateAction_1.default)('SET_MOD_ATTRIBUTE', (gameId, modId, attribute, value) => ({ gameId, modId, attribute, value }));
/**
 * set multiple mod attributes at once
 */
exports.setModAttributes = (0, safeCreateAction_1.default)('SET_MOD_ATTRIBUTES', (gameId, modId, attributes) => ({ gameId, modId, attributes }));
/**
 * sets the type of a mod
 */
exports.setModType = (0, safeCreateAction_1.default)('SET_MOD_TYPE', (gameId, modId, type) => ({ gameId, modId, type }));
exports.clearModRules = (0, safeCreateAction_1.default)('CLEAR_MOD_RULE', (gameId, modId) => ({ gameId, modId }));
/**
 * add a dependency rule for this mod
 */
exports.addModRule = (0, safeCreateAction_1.default)('ADD_MOD_RULE', (gameId, modId, rule) => ({ gameId, modId, rule }));
/**
 * remove a dependency rule from this mod
 */
exports.removeModRule = (0, safeCreateAction_1.default)('REMOVE_MOD_RULE', (gameId, modId, rule) => ({ gameId, modId, rule }));
/**
 * store the mod id for a resolved rule, so we can resolve it quicker and more
 * reliably in the future
 */
exports.cacheModReference = (0, safeCreateAction_1.default)('CACHE_MOD_REFERENCE', (gameId, modId, reference, refModId) => ({ gameId, modId, reference, refModId }));
exports.setINITweakEnabled = (0, safeCreateAction_1.default)('SET_TWEAK_ENABLED', (gameId, modId, tweak, enabled) => ({ gameId, modId, tweak, enabled }));
/**
 * set list of files that will always be provided by this mod, no matter the deployment order
 */
exports.setFileOverride = (0, safeCreateAction_1.default)('SET_FILE_OVERRIDE', (gameId, modId, files) => ({ gameId, modId, files }));
