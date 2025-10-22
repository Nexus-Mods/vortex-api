"use strict";
/**
 * Select Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a styled select dropdown with custom icon and validation support.
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
exports.Select = void 0;
const React = __importStar(require("react"));
const js_1 = require("@mdi/js");
const icon_1 = require("../../icon");
const utils_1 = require("../../utils");
const formfield_1 = require("../formfield");
const Select = (_a) => {
    var { children, className, disabled, errorMessage, hideLabel = false, hints = [], id, label = '', ref, required, showRequiredLabel } = _a, props = __rest(_a, ["children", "className", "disabled", "errorMessage", "hideLabel", "hints", "id", "label", "ref", "required", "showRequiredLabel"]);
    // Make sure hints is always an array
    hints = !Array.isArray(hints) ? [hints] : hints;
    return (React.createElement(formfield_1.FormField, { className: className, disabled: disabled, errorMessage: errorMessage, hideLabel: hideLabel, hints: hints, id: id, label: label, showRequiredLabel: showRequiredLabel !== null && showRequiredLabel !== void 0 ? showRequiredLabel : required },
        React.createElement("div", { className: (0, utils_1.joinClasses)(['tw:relative tw:flex tw:flex-col', className], { 'tw:opacity-40': disabled }) },
            React.createElement("select", Object.assign({}, props, { ref: ref, "aria-describedby": !!errorMessage ? `${id}_error` : hints.length > 0 ? `${id}_hints` : undefined, "aria-invalid": !!errorMessage || undefined, className: (0, utils_1.joinClasses)([
                    'tw:border-neutral-subdued tw:bg-surface-low tw:text-base tw:text-neutral-strong tw:group tw:relative tw:w-full tw:appearance-none tw:rounded tw:border tw:py-2 tw:pl-4 tw:pr-12',
                    !!errorMessage ? 'tw:border-danger-strong tw:hover:border-neutral-subdued' : 'tw:border-neutral-subdued',
                    'tw:hover:border-white',
                    'tw:focus:bg-surface-low tw:focus:border-white tw:focus-visible:outline-offset-1',
                ]), disabled: disabled, id: id, required: required }), children),
            React.createElement(icon_1.Icon, { className: (0, utils_1.joinClasses)([
                    'tw:text-neutral-subdued tw:pointer-events-none tw:absolute tw:right-4 tw:top-1/2 tw:-translate-y-1/2 tw:transform',
                    'tw:group-hover:text-white tw:group-focus:text-white',
                ]), path: js_1.mdiMenuDown, size: "lg" }))));
};
exports.Select = Select;
