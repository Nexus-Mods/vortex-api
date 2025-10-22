"use strict";
/**
 * Input Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a consistent input component with validation, hints, and accessibility features.
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
exports.Input = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const formfield_1 = require("../formfield");
const utils_1 = require("../../utils");
const Input = (_a) => {
    var _b, _c;
    var { className, defaultValue, disabled, errorMessage, fieldClassName, hideLabel = false, hints = [], hintsTypographyType, id, label = '', maxLength, onChange = () => null, readOnly, required, showRequiredLabel, type = 'text', value } = _a, props = __rest(_a, ["className", "defaultValue", "disabled", "errorMessage", "fieldClassName", "hideLabel", "hints", "hintsTypographyType", "id", "label", "maxLength", "onChange", "readOnly", "required", "showRequiredLabel", "type", "value"]);
    const trimToMaxLength = (val) => maxLength ? val === null || val === void 0 ? void 0 : val.toString().substring(0, maxLength) : val === null || val === void 0 ? void 0 : val.toString();
    const [inputLength, setInputLength] = (0, react_1.useState)((_c = (_b = trimToMaxLength(value !== null && value !== void 0 ? value : defaultValue)) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0);
    // Make sure hints is always an array
    hints = !Array.isArray(hints) ? [hints] : hints;
    return (React.createElement(formfield_1.FormField, { className: fieldClassName, disabled: disabled, errorMessage: errorMessage, hideLabel: hideLabel, hints: hints, hintsTypographyType: hintsTypographyType, id: id, inputLength: inputLength, label: label, maxLength: maxLength, showRequiredLabel: showRequiredLabel !== null && showRequiredLabel !== void 0 ? showRequiredLabel : required },
        React.createElement("input", Object.assign({}, props, { "aria-describedby": !!errorMessage ? `${id}_error` : hints.length > 0 ? `${id}_hints` : undefined, "aria-invalid": !!errorMessage || undefined, className: (0, utils_1.joinClasses)([
                'tw:text-neutral-strong tw:typography-body-lg tw:placeholder:text-neutral-subdued tw:min-h-9 tw:w-full tw:rounded tw:border tw:px-3 tw:transition-colors',
                ...(typeof errorMessage === 'string'
                    ? ['tw:bg-surface-translucent-mid tw:border-danger-strong']
                    : [
                        'tw:bg-translucent-dark-400 tw:border-stroke-subdued',
                        ...(readOnly || disabled
                            ? ['']
                            : [
                                'tw:focus:bg-surface-translucent-mid tw:focus:border-stroke-strong',
                                'tw:hover:bg-surface-translucent-low tw:hover:border-stroke-moderate',
                            ]),
                    ]),
                className,
            ], { 'tw:opacity-40 tw:outline-none': readOnly || disabled }), defaultValue: defaultValue, disabled: disabled, id: id, maxLength: maxLength, readOnly: readOnly, required: required, type: type, value: value, onChange: (e) => {
                if (maxLength) {
                    setInputLength(e.target.value.length);
                }
                onChange(e);
            } }))));
};
exports.Input = Input;
