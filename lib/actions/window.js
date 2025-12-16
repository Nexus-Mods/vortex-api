"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCustomTitlebar = exports.setTabsMinimized = exports.setZoomFactor = exports.setMaximized = exports.setWindowPosition = exports.setWindowSize = void 0;
const safeCreateAction_1 = __importDefault(require("./safeCreateAction"));
const identity = (input) => input;
/**
 * action to set window size in the store.
 * Takes one parameter of the form {width: number, height: number}
 */
exports.setWindowSize = (0, safeCreateAction_1.default)("STORE_WINDOW_SIZE", identity);
/**
 * action to set window position in the store.
 * Takes one parameter of the form {x: number, y: number}
 */
exports.setWindowPosition = (0, safeCreateAction_1.default)("STORE_WINDOW_POSITION", identity);
/**
 * action to set maximized in the store
 * to avoid confusion: maximize maintains window frame and fills one screen,
 * fullscreen makes the window borderless + fill the screen
 */
exports.setMaximized = (0, safeCreateAction_1.default)("SET_MAXIMIZED", identity);
exports.setZoomFactor = (0, safeCreateAction_1.default)("SET_ZOOM_FACTOR", identity);
exports.setTabsMinimized = (0, safeCreateAction_1.default)("SET_TABS_MINIMIZED", identity);
exports.setCustomTitlebar = (0, safeCreateAction_1.default)("SET_CUSTOM_TITLEBAR", identity);
