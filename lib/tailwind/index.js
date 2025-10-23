"use strict";
/**
 * Tailwind Component Library - Namespace Export
 *
 * All Tailwind components are exported under the `Tailwind` namespace
 * to avoid naming conflicts with existing Vortex components.
 *
 * Usage:
 *   import { Tailwind } from 'vortex-api';
 *   <Tailwind.Icon path="nxmVortex" size="lg" />
 *   <Tailwind.Button buttonType="primary">Click</Tailwind.Button>
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tailwind = void 0;
// Import all components and utilities
const typography = __importStar(require("./components/next/typography"));
const button = __importStar(require("./components/next/button"));
const icon = __importStar(require("./components/next/icon"));
const link = __importStar(require("./components/next/link"));
const collectiontile = __importStar(require("./components/next/collectiontile"));
const form = __importStar(require("./components/next/form"));
const iconPaths = __importStar(require("./lib/icon-paths"));
/**
 * Tailwind namespace containing all Tailwind components and utilities
 *
 * Components:
 * - Typography: Typography component with design system styles
 * - Button: Button component with multiple types and states
 * - Icon: Icon component supporting MDI and Nexus custom icons
 * - Link: Link wrapper component for Electron
 * - CollectionTile: Collection card component
 * - FormField: Form field wrapper with labels, hints, and validation
 * - Input: Input component with validation and accessibility features
 * - Select: Select dropdown with custom styling and icon
 *
 * Icon Paths:
 * - nxm*: 34 custom Nexus Mods icons (nxmVortex, nxmCollection, etc.)
 *
 * Types:
 * - ButtonType, IconSize, IconProps, FormFieldProps, InputProps, SelectProps, etc.
 */
exports.Tailwind = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, typography), button), icon), link), collectiontile), form), iconPaths);
// Also export as default for convenience
exports.default = exports.Tailwind;
