"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSortUnmanaged = exports.setSortManaged = exports.setPickerLayout = exports.setGameSearchPaths = exports.setGameHidden = exports.setGameParameters = exports.setToolVisible = exports.addDiscoveredTool = exports.setGamePath = exports.clearDiscoveredGame = exports.addDiscoveredGame = void 0;
const safeCreateAction_1 = __importDefault(require("../../../actions/safeCreateAction"));
const identity = (input) => input;
/**
 * add info about a discovered game
 */
exports.addDiscoveredGame = (0, safeCreateAction_1.default)("ADD_DISCOVERED_GAME", (id, result) => ({ id, result }));
// undiscover game that's no longer found
exports.clearDiscoveredGame = (0, safeCreateAction_1.default)("UNDISCOVER_GAME", (id) => ({ id }));
/**
 * override the path of a game that's already been discovered
 */
exports.setGamePath = (0, safeCreateAction_1.default)("SET_GAME_PATH", (gameId, gamePath, store, exePath) => ({
    gameId,
    gamePath,
    store,
    exePath,
}));
/**
 * add info about a discovered tool
 */
exports.addDiscoveredTool = (0, safeCreateAction_1.default)("ADD_DISCOVERED_TOOL", (gameId, toolId, result, manual) => ({ gameId, toolId, result, manual }));
/**
 * set visibility of a tool. Tools that have been added by the user will be removed entirely whereas
 * discovered tools (those where we have code to discover them) are merely hidden
 */
exports.setToolVisible = (0, safeCreateAction_1.default)("SET_TOOL_VISIBLE", (gameId, toolId, visible) => ({
    gameId,
    toolId,
    visible,
}));
/**
 * change parameters for a game (i.e. call arguments, environment, ...)
 */
exports.setGameParameters = (0, safeCreateAction_1.default)("SET_GAME_PARAMETERS", (gameId, parameters) => ({ gameId, parameters }));
/**
 * hide or unhide a game
 */
exports.setGameHidden = (0, safeCreateAction_1.default)("SET_GAME_HIDDEN", (gameId, hidden) => ({ gameId, hidden }));
exports.setGameSearchPaths = (0, safeCreateAction_1.default)("SET_GAME_SEARCH_PATHS", (paths) => paths);
exports.setPickerLayout = (0, safeCreateAction_1.default)("SET_GAMEPICKER_LAYOUT", (layout) => ({ layout }));
exports.setSortManaged = (0, safeCreateAction_1.default)("SET_SORT_MANAGED", (order) => order);
exports.setSortUnmanaged = (0, safeCreateAction_1.default)("SET_SORT_UNMANAGED", (order) => order);
