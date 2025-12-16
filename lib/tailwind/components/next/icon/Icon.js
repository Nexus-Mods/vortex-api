"use strict";
/**
 * Icon Component
 * Adapted from web team's "next" project for Vortex
 *
 * Renders icons using SVG path data from multiple sources:
 * - Material Design Icons (@mdi/js) - e.g., 'mdiAccount'
 * - Nexus Mods custom icons - e.g., 'nxmVortex', 'nxmCollection'
 * - Direct SVG path data
 *
 * Size System:
 * - xs: 0.75rem (12px) - Extra small icons
 * - sm: 1rem (16px) - Small icons
 * - md: 1.25rem (20px) - Medium icons (DEFAULT)
 * - lg: 1.5rem (24px) - Large icons
 * - xl: 2rem (32px) - Extra large icons
 * - 2xl: 3rem (48px) - 2X extra large icons
 * - none: Size controlled via className
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
const nxm = __importStar(require("../../../lib/icon-paths"));
/* eslint-disable sort-keys */
const sizeMap = {
    none: undefined,
    xs: "var(--icon-size-xs)",
    sm: "var(--icon-size-sm)",
    md: "var(--icon-size-md)",
    lg: "var(--icon-size-lg)",
    xl: "var(--icon-size-xl)",
    "2xl": "var(--icon-size-2xl)",
};
/**
 * Icon component that renders icons from multiple sources
 *
 * Usage:
 * - With MDI icon name: <Icon path="mdiAccount" size="md" />
 * - With Nexus icon name: <Icon path="nxmVortex" size="lg" />
 * - With direct path: <Icon path={mdiAccount} size="sm" />
 * - With className sizing: <Icon path="mdiAccount" size="none" className="tw:size-5" />
 * - With custom size: <Icon path="mdiDownload" sizeOverride="1.75rem" />
 */
const Icon = (_a) => {
    var { path, size = "md", sizeOverride, className = "", title } = _a, rest = __rest(_a, ["path", "size", "sizeOverride", "className", "title"]);
    // Resolve path - if it's a string like 'mdiAccount' or 'nxmVortex', look it up
    let svgPath;
    if (typeof path === "string") {
        // Check if it's an icon name or already an SVG path
        if (path.startsWith("mdi") && path.length > 3) {
            // It's a Material Design Icon name like 'mdiAccount' - look it up in @mdi/js
            svgPath = mdi[path];
            if (!svgPath) {
                console.warn(`Icon: Unknown MDI icon name "${path}". Check @mdi/js exports.`);
                return null;
            }
        }
        else if (path.startsWith("nxm") && path.length > 3) {
            // It's a Nexus Mods icon name like 'nxmVortex' - look it up in our icon paths
            svgPath = nxm[path];
            if (!svgPath) {
                console.warn(`Icon: Unknown Nexus icon name "${path}". Check available nxm* icons.`);
                return null;
            }
        }
        else if (path.startsWith("M") || path.startsWith("m")) {
            // It's already an SVG path data string
            svgPath = path;
        }
        else {
            console.warn(`Icon: Invalid path "${path}". Expected MDI icon name (mdi*), Nexus icon name (nxm*), or SVG path data.`);
            return null;
        }
    }
    else {
        console.warn(`Icon: path prop must be a string. Received: ${typeof path}`);
        return null;
    }
    if (!svgPath) {
        return null;
    }
    // Determine size - use sizeOverride if provided, otherwise use size from map
    const sizeValue = sizeOverride !== null && sizeOverride !== void 0 ? sizeOverride : sizeMap[size !== null && size !== void 0 ? size : "md"];
    return (React.createElement("svg", Object.assign({ viewBox: "0 0 24 24", style: { width: sizeValue, height: sizeValue }, className: className, role: title ? "img" : "presentation", "aria-label": title }, rest),
        title && React.createElement("title", null, title),
        React.createElement("path", { d: svgPath, fill: "currentColor" })));
};
exports.Icon = Icon;
