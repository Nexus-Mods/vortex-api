'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabContext = exports.TabProvider = exports.TabContext = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const utils_1 = require("../utils");
/**
 * The React context for the TabProvider
 */
exports.TabContext = (0, react_1.createContext)(undefined);
/**
 * React component to provide context to tabs
 */
const TabProvider = ({ children, onSetSelectedTab, tab, tabListId }) => {
    // Handles callback for tab select behaviour (e.g. scrolling)
    const setSelectedTab = (tabToSet) => {
        onSetSelectedTab === null || onSetSelectedTab === void 0 ? void 0 : onSetSelectedTab(tabToSet);
    };
    // Tracks the currently selected tab in id format
    const selectedTab = (0, utils_1.getTabId)(tab);
    // Store references to each tab to manage focus. References are keyed by tab name
    const [tabs, setTabs] = (0, react_1.useState)({});
    // Tracks all tabs in id format
    const tabIds = Object.keys(tabs);
    // Registers tabs in the `tabs` state variable to manage keyboard focus
    const registerTab = (0, react_1.useCallback)(({ name, ref, type }) => setTabs((currentTabs) => (Object.assign(Object.assign({}, currentTabs), { [name]: { ref, type } }))), []);
    // Perform keyboard navigation between tabs within the tab list
    const onKeyDown = (event) => {
        // Handle focus and selection separately
        const focusedIndex = tabIds.findIndex((t) => tabs[t].ref.current === document.activeElement);
        const selectedIndex = tabIds.findIndex((t) => t === selectedTab);
        // Track focused tab if it exists, else track selected tab
        let index = focusedIndex >= 0 ? focusedIndex : selectedIndex;
        switch (event.key) {
            case 'Home': {
                index = 0;
                event.preventDefault();
                break;
            }
            case 'End': {
                index = tabIds.length - 1;
                event.preventDefault();
                break;
            }
            case 'ArrowLeft': {
                index -= 1;
                break;
            }
            case 'ArrowRight': {
                index += 1;
                break;
            }
        }
        // Wrap the index around if it overflows using double modulo
        index = ((index % tabIds.length) + tabIds.length) % tabIds.length;
        // Get the tab id of the new selected tab
        const newTabId = tabIds[index];
        // If new tab is a button, select the new tab
        if (tabs[newTabId].type === 'button') {
            setSelectedTab(newTabId);
        }
        // Focus the new tab
        tabs[newTabId].ref.current.focus();
    };
    return (React.createElement(exports.TabContext.Provider, { value: {
            onKeyDown,
            onTabClick: setSelectedTab,
            registerTab,
            selectedTab,
            tabListId,
        } }, children));
};
exports.TabProvider = TabProvider;
/**
 * Hook to enforce that context has a provider
 * COMPATIBILITY FIX: Using useContext instead of use() for React 16 compatibility
 */
const useTabContext = () => {
    const context = (0, react_1.useContext)(exports.TabContext);
    if (context === undefined) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
};
exports.useTabContext = useTabContext;
