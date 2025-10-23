"use strict";
/**
 * InputDemo Component
 * Demonstrates all Input component variants and features
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
exports.InputDemo = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const Input_1 = require("./Input");
const formfield_1 = require("../formfield");
const Typography_1 = require("../../typography/Typography");
const InputDemo = () => {
    const [textValue, setTextValue] = (0, react_1.useState)('');
    const [emailValue, setEmailValue] = (0, react_1.useState)('');
    const [passwordValue, setPasswordValue] = (0, react_1.useState)('');
    return (React.createElement("div", { className: "tw:p-8 tw:bg-surface-base tw:min-h-screen" },
        React.createElement(Typography_1.Typography, { as: "h1", typographyType: "heading-xl", className: "tw:mb-8" }, "Input Component Demo"),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Input Types"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Input_1.Input, { id: "text-input", label: "Text Input", type: "text", placeholder: "Enter some text...", value: textValue, onChange: (e) => setTextValue(e.target.value) }),
                React.createElement(Input_1.Input, { id: "email-input", label: "Email Input", type: "email", placeholder: "user@example.com", value: emailValue, onChange: (e) => setEmailValue(e.target.value) }),
                React.createElement(Input_1.Input, { id: "password-input", label: "Password Input", type: "password", placeholder: "Enter password...", value: passwordValue, onChange: (e) => setPasswordValue(e.target.value) }),
                React.createElement(Input_1.Input, { id: "url-input", label: "URL Input", type: "url", placeholder: "https://example.com" }),
                React.createElement(Input_1.Input, { id: "number-input", label: "Number Input", type: "number", placeholder: "Enter a number...", defaultValue: 42 }),
                React.createElement(Input_1.Input, { id: "date-input", label: "Date Input", type: "date" }),
                React.createElement(Input_1.Input, { id: "time-input", label: "Time Input", type: "time" }))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Input States"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Input_1.Input, { id: "default-input", label: "Default State", type: "text", placeholder: "Default input..." }),
                React.createElement(Input_1.Input, { id: "with-value-input", label: "With Value", type: "text", defaultValue: "Pre-filled value" }),
                React.createElement(Input_1.Input, { id: "disabled-input", label: "Disabled State", type: "text", placeholder: "Cannot edit...", disabled: true }),
                React.createElement(Input_1.Input, { id: "readonly-input", label: "Read-only State", type: "text", defaultValue: "Read-only value", readOnly: true }),
                React.createElement(Input_1.Input, { id: "required-input", label: "Required Field", type: "text", placeholder: "This field is required...", required: true }))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Validation & Error States"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Input_1.Input, { id: "error-input", label: "Input with Error", type: "text", errorMessage: "This field has an error", defaultValue: "Invalid value" }),
                React.createElement(Input_1.Input, { id: "error-required-input", label: "Required Field with Error", type: "email", required: true, errorMessage: "Please enter a valid email address" }))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Hints & Helper Text"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Input_1.Input, { id: "single-hint-input", label: "Input with Single Hint", type: "text", placeholder: "Enter username...", hints: "Username must be at least 3 characters" }),
                React.createElement(Input_1.Input, { id: "multiple-hints-input", label: "Input with Multiple Hints", type: "password", placeholder: "Enter secure password...", hints: [
                        'Must be at least 8 characters',
                        'Must contain uppercase and lowercase letters',
                        'Must contain at least one number',
                    ] }),
                React.createElement(Input_1.Input, { id: "hint-error-input", label: "Hints with Error State", type: "text", hints: "This hint is shown along with the error", errorMessage: "Value is too short", defaultValue: "ab" }))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Character Counter"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Input_1.Input, { id: "maxlength-input", label: "Input with Character Counter", type: "text", maxLength: 50, placeholder: "Type up to 50 characters...", hints: "Character counter appears below" }),
                React.createElement(Input_1.Input, { id: "maxlength-warning-input", label: "Counter Warning (25% threshold)", type: "text", maxLength: 20, defaultValue: "12345678901234", hints: "Type more to see warning threshold (yellow at 25%, red at 10%)" }),
                React.createElement(Input_1.Input, { id: "maxlength-danger-input", label: "Counter Danger (10% threshold)", type: "text", maxLength: 20, defaultValue: "12345678901234567", hints: "Very close to character limit (red)" }))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Hidden Labels (Screen Reader Only)"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Input_1.Input, { id: "hidden-label-input", label: "Hidden Label (SR only)", type: "text", placeholder: "Label is visually hidden but accessible to screen readers", hideLabel: true }))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Combined Features"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Input_1.Input, { id: "full-featured-input", label: "Username", type: "text", placeholder: "Enter username...", required: true, maxLength: 30, hints: [
                        'Username must be unique',
                        'Only alphanumeric characters allowed',
                    ] }),
                React.createElement(Input_1.Input, { id: "bio-input", label: "Bio", type: "text", placeholder: "Tell us about yourself...", maxLength: 200, hints: "Keep it short and sweet" })))));
};
exports.InputDemo = InputDemo;
