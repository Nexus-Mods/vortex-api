"use client";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabLink = exports.TabButton = exports.TabContent = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const numeral = require("numeral");
const typography_1 = require("../../typography");
const utils_1 = require("../../utils");
const tabs_context_1 = require("../tabs.context");
const TabContent = ({ count, label, }) => (React.createElement("span", { className: "tw:flex tw:items-center tw:gap-x-1 tw:pb-2" },
    React.createElement(typography_1.Typography, { appearance: "none", as: "span", className: "tw:whitespace-nowrap tw:transition-colors", typographyType: "body-xl" }, label),
    count !== undefined && (React.createElement(typography_1.Typography, { appearance: "none", as: "span", className: "tw:bg-surface-mid tw:text-neutral-subdued tw:flex tw:items-center tw:justify-center tw:rounded-full tw:px-2 tw:py-0.5 tw:transition-colors", typographyType: "body-sm" }, numeral(count).format("0,0")))));
exports.TabContent = TabContent;
/**
 * Standard tab component, implemented as a button. Clicking it will reveal the
 * content for the selected tab.
 */
const TabButton = (_a) => {
    var { className, count, disabled, name } = _a, props = __rest(_a, ["className", "count", "disabled", "name"]);
    const ref = (0, react_1.useRef)(null);
    const { onKeyDown, onTabClick, registerTab, selectedTab, tabListId } = (0, tabs_context_1.useTabContext)();
    const tabId = (0, utils_1.getTabId)(name);
    const selected = selectedTab === (0, utils_1.getTabId)(name);
    // Register the tab ref with the parent tab bar to set focus on keydown
    (0, react_1.useEffect)(() => registerTab({ name: tabId, ref, type: "button" }), [tabId, registerTab]);
    return (React.createElement("button", Object.assign({ ref: ref, "aria-controls": `tabcontent-${tabId}`, "aria-selected": selected, className: (0, utils_1.joinClasses)([
            "tw:relative tw:border-b focus-visible:tw:-outline-offset-2 tw:transition-colors",
            selected
                ? "tw:border-primary-moderate tw:text-neutral-strong"
                : "tw:border-transparent tw:text-neutral-subdued",
            disabled
                ? "tw:cursor-not-allowed tw:opacity-40"
                : "tw:cursor-pointer tw:hover:text-neutral-moderate",
            className,
        ]), disabled: disabled, id: `tablist-${tabListId}-${tabId}`, role: "tab", tabIndex: selected ? 0 : -1, type: "button", onClick: () => onTabClick(tabId), onKeyDown: onKeyDown }, props),
        React.createElement(exports.TabContent, { count: count, label: name })));
};
exports.TabButton = TabButton;
/**
 * Link tab component. This is not selectable, but can be clicked to open
 * the link. Can also be focused using arrow key navigation (but not selected).
 */
const TabLink = (_a) => {
    var { className, count, name } = _a, props = __rest(_a, ["className", "count", "name"]);
    const ref = (0, react_1.useRef)(null);
    const { onKeyDown, registerTab, tabListId } = (0, tabs_context_1.useTabContext)();
    const tabId = (0, utils_1.getTabId)(name);
    // Register the tab ref with the parent tab bar to set focus on keydown
    (0, react_1.useEffect)(() => registerTab({ name: tabId, ref, type: "link" }), [tabId, registerTab]);
    return (React.createElement("a", Object.assign({ ref: ref, className: (0, utils_1.joinClasses)([
            "tw:border-b tw:border-transparent tw:text-neutral-subdued focus-visible:tw:-outline-offset-2 tw:hover:text-neutral-moderate tw:transition-colors",
            className,
        ]), id: `tablist-${tabListId}-${tabId}`, role: "tab", tabIndex: -1, onKeyDown: onKeyDown }, props),
        React.createElement(exports.TabContent, { count: count, label: name })));
};
exports.TabLink = TabLink;
