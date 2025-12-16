"use strict";
/**
 * FormField Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a form field wrapper with label, hints, error messages, and character counter.
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
exports.FormFieldWrap = exports.FormField = void 0;
const React = __importStar(require("react"));
const Typography_1 = require("../../typography/Typography");
const utils_1 = require("../../utils");
const FormField = ({ children, className, disabled, errorMessage, hideLabel = false, hints = [], hintsTypographyType = "body-md", id, inputLength = 0, label = "", maxLength, ref, showRequiredLabel, }) => {
    // Make sure hints is always an array
    hints = !Array.isArray(hints) ? [hints] : hints;
    return (React.createElement("div", { ref: ref, className: (0, utils_1.joinClasses)(["tw:min-w-0", className], {
            "tw:opacity-40 tw:pointer-events-none": disabled,
        }) },
        React.createElement("label", { className: (0, utils_1.joinClasses)(["tw:mb-2 tw:flex tw:gap-x-1 tw:text-sm"], {
                "tw:sr-only": hideLabel,
            }), htmlFor: id },
            React.createElement(Typography_1.Typography, { as: "span", typographyType: "body-md" },
                label,
                showRequiredLabel && (React.createElement(Typography_1.Typography, { appearance: "subdued", as: "span", typographyType: "body-md" }, ` (Required)`)))),
        children,
        (!!errorMessage || !!hints.length || !!maxLength) && (React.createElement("div", { className: "tw:flex tw:justify-between tw:pt-1" },
            React.createElement("div", null,
                !!errorMessage && (React.createElement(Typography_1.Typography, { appearance: "none", className: "tw:text-danger-strong", id: `${id}_error` }, errorMessage)),
                !!hints.length && (React.createElement("ul", { className: "tw:flex tw:flex-col tw:gap-y-1", id: `${id}_hints` }, hints.map((hint) => (React.createElement("li", { key: `${id}_${hint}` },
                    React.createElement(Typography_1.Typography, { appearance: "subdued", as: "span", typographyType: hintsTypographyType }, hint))))))),
            !!maxLength && (React.createElement(Typography_1.Typography, { appearance: "none", "aria-label": "remaining character count", className: (0, utils_1.joinClasses)([
                    "tw:font-semibold",
                    maxLength - inputLength <= maxLength * 0.1
                        ? "tw:text-danger-strong"
                        : maxLength - inputLength <= maxLength * 0.25
                            ? "tw:text-warning-strong"
                            : "tw:text-neutral-moderate",
                ]) }, `${maxLength - inputLength} / ${maxLength}`))))));
};
exports.FormField = FormField;
const FormFieldWrap = ({ children }) => (React.createElement("div", { className: "tw:flex tw:flex-col tw:gap-y-4" }, children));
exports.FormFieldWrap = FormFieldWrap;
