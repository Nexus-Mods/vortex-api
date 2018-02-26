"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("../../../actions/safeCreateAction");
const identity = input => input;
/**
 * add info about a discovered game
 */
exports.addDiscoveredGame = safeCreateAction_1.default('ADD_DISCOVERED_GAME', (id, result) => ({ id, result }));
/**
 * override the path of a game that's already been discovered
 */
exports.setGamePath = safeCreateAction_1.default('SET_GAME_PATH', (gameId, gamePath) => ({ gameId, gamePath }));
/**
 * add info about a discovered tool
 */
exports.addDiscoveredTool = safeCreateAction_1.default('ADD_DISCOVERED_TOOL', (gameId, toolId, result) => ({ gameId, toolId, result }));
/**
 * set visibility of a tool. Tools that have been added by the user will be removed entirely whereas
 * discovered tools (those where we have code to discover them) are merely hidden
 */
exports.setToolVisible = safeCreateAction_1.default('SET_TOOL_VISIBLE', (gameId, toolId, visible) => ({ gameId, toolId, visible }));
/**
 * change parameters for a game (i.e. call arguments, environment, ...)
 */
exports.setGameParameters = safeCreateAction_1.default('SET_GAME_PARAMETERS', (gameId, parameters) => ({ gameId, parameters }));
/**
 * hide or unhide a game
 */
exports.setGameHidden = safeCreateAction_1.default('SET_GAME_HIDDEN', (gameId, hidden) => ({ gameId, hidden }));
/**
 * add a search path (path that is searched for game installations)
 */
exports.addSearchPath = safeCreateAction_1.default('ADD_SEARCH_PATH', identity);
exports.clearSearchPaths = safeCreateAction_1.default('CLEAR_SEARCH_PATHS');
/**
 * remove a search path
 */
exports.removeSearchPath = safeCreateAction_1.default('REMOVE_SEARCH_PATH', identity);
exports.setPickerLayout = safeCreateAction_1.default('SET_GAMEPICKER_LAYOUT', (layout) => ({ layout }));
