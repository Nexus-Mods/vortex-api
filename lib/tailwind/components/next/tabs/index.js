"use strict";
/**
 * Tabs Component System
 * Adapted from web team's "next" project for Vortex
 *
 * A complete tabbed interface system with:
 * - Context-based state management
 * - Button tabs (selectable) and Link tabs (focusable only)
 * - Full keyboard navigation (Arrow keys, Home, End)
 * - ARIA accessibility support
 * - Optional count badges
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabContext = exports.TabProvider = exports.TabPanel = exports.TabLink = exports.TabContent = exports.TabButton = exports.TabBar = exports.getTabId = void 0;
var utils_1 = require("../utils");
Object.defineProperty(exports, "getTabId", { enumerable: true, get: function () { return utils_1.getTabId; } });
var tab_bar_1 = require("./tab-bar");
Object.defineProperty(exports, "TabBar", { enumerable: true, get: function () { return tab_bar_1.TabBar; } });
var tab_1 = require("./tab");
Object.defineProperty(exports, "TabButton", { enumerable: true, get: function () { return tab_1.TabButton; } });
Object.defineProperty(exports, "TabContent", { enumerable: true, get: function () { return tab_1.TabContent; } });
Object.defineProperty(exports, "TabLink", { enumerable: true, get: function () { return tab_1.TabLink; } });
var tab_panel_1 = require("./tab-panel");
Object.defineProperty(exports, "TabPanel", { enumerable: true, get: function () { return tab_panel_1.TabPanel; } });
var tabs_context_1 = require("./tabs.context");
Object.defineProperty(exports, "TabProvider", { enumerable: true, get: function () { return tabs_context_1.TabProvider; } });
Object.defineProperty(exports, "useTabContext", { enumerable: true, get: function () { return tabs_context_1.useTabContext; } });
