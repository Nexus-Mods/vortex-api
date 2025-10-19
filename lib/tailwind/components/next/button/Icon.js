"use strict";
/**
 * Icon Component
 * Adapted from web team's "next" project for Vortex
 *
 * Renders Material Design Icons using SVG path data from @mdi/js
 * Compatible with both string path names (e.g., 'mdiAccount') and direct path data
 */
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
exports.Icon = void 0;
const React = __importStar(require("react"));
const mdi = __importStar(require("@mdi/js"));
/**
 * Icon component that renders Material Design Icons
 *
 * Usage:
 * - With icon name: <Icon path="mdiAccount" size="1" />
 * - With direct path: <Icon path={mdiAccount} size="1" />
 * - With className sizing: <Icon path="mdiAccount" size="none" className="tw:size-5" />
 */
const Icon = (_a) => {
    var { path, size = 1, className = '', title } = _a, rest = __rest(_a, ["path", "size", "className", "title"]);
    // Resolve path - if it's a string like 'mdiAccount', look it up in @mdi/js
    let svgPath;
    if (typeof path === 'string') {
        // Check if it's an icon name (starts with 'mdi') or already an SVG path
        if (path.startsWith('mdi') && path.length > 3) {
            // It's an icon name like 'mdiAccount' - look it up
            svgPath = mdi[path];
            if (!svgPath) {
                console.warn(`Icon: Unknown MDI icon name "${path}". Check @mdi/js exports.`);
                return null;
            }
        }
        else if (path.startsWith('M') || path.startsWith('m')) {
            // It's already an SVG path data string
            svgPath = path;
        }
        else {
            console.warn(`Icon: Invalid path "${path}". Expected MDI icon name or SVG path data.`);
            return null;
        }
    }
    if (!svgPath) {
        return null;
    }
    // Calculate size attributes
    const sizeValue = size === 'none' ? undefined : (typeof size === 'number' ? `${size * 24}px` : size);
    return (React.createElement("svg", Object.assign({ viewBox: "0 0 24 24", width: sizeValue, height: sizeValue, className: className, role: title ? 'img' : 'presentation', "aria-label": title }, rest),
        title && React.createElement("title", null, title),
        React.createElement("path", { d: svgPath, fill: "currentColor" })));
};
exports.Icon = Icon;
