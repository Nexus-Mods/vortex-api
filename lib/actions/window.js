"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const safeCreateAction_1 = require("./safeCreateAction");
const identity = input => input;
/**
 * action to set window size in the store.
 * Takes one parameter of the form {width: number, height: number}
 */
exports.setWindowSize = safeCreateAction_1.default('STORE_WINDOW_SIZE', identity);
/**
 * action to set window position in the store.
 * Takes one parameter of the form {x: number, y: number}
 */
exports.setWindowPosition = safeCreateAction_1.default('STORE_WINDOW_POSITION', identity);
/**
 * action to set maximized in the store
 * to avoid confusion: maximize maintains window frame and fills one screen,
 * fullscreen makes the window borderless + fill the screen
 */
exports.setMaximized = safeCreateAction_1.default('SET_MAXIMIZED', identity);
exports.setTabsMinimized = safeCreateAction_1.default('SET_TABS_MINIMIZED', identity);
exports.setCustomTitlebar = safeCreateAction_1.default('SET_CUSTOM_TITLEBAR', identity);
