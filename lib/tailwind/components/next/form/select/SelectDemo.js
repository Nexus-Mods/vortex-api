"use strict";
/**
 * SelectDemo Component
 * Demonstrates all Select component variants and features
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
exports.SelectDemo = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const Select_1 = require("./Select");
const formfield_1 = require("../formfield");
const Typography_1 = require("../../typography/Typography");
const SelectDemo = () => {
    const [country, setCountry] = (0, react_1.useState)("");
    const [language, setLanguage] = (0, react_1.useState)("en");
    const [game, setGame] = (0, react_1.useState)("");
    return (React.createElement("div", { className: "tw:p-8 tw:bg-surface-base tw:min-h-screen" },
        React.createElement(Typography_1.Typography, { as: "h1", typographyType: "heading-xl", className: "tw:mb-8" }, "Select Component Demo"),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Basic Select"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Select_1.Select, { id: "basic-select", label: "Basic Select", value: country, onChange: (e) => setCountry(e.target.value) },
                    React.createElement("option", { value: "" }, "Select an option..."),
                    React.createElement("option", { value: "option1" }, "Option 1"),
                    React.createElement("option", { value: "option2" }, "Option 2"),
                    React.createElement("option", { value: "option3" }, "Option 3")),
                React.createElement(Select_1.Select, { id: "country-select", label: "Country", value: country, onChange: (e) => setCountry(e.target.value) },
                    React.createElement("option", { value: "" }, "Select a country..."),
                    React.createElement("option", { value: "us" }, "United States"),
                    React.createElement("option", { value: "uk" }, "United Kingdom"),
                    React.createElement("option", { value: "ca" }, "Canada"),
                    React.createElement("option", { value: "au" }, "Australia"),
                    React.createElement("option", { value: "de" }, "Germany"),
                    React.createElement("option", { value: "fr" }, "France"),
                    React.createElement("option", { value: "jp" }, "Japan")),
                React.createElement(Select_1.Select, { id: "language-select", label: "Language", value: language, onChange: (e) => setLanguage(e.target.value) },
                    React.createElement("option", { value: "en" }, "English"),
                    React.createElement("option", { value: "es" }, "Spanish"),
                    React.createElement("option", { value: "fr" }, "French"),
                    React.createElement("option", { value: "de" }, "German"),
                    React.createElement("option", { value: "ja" }, "Japanese"),
                    React.createElement("option", { value: "zh" }, "Chinese")))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Select States"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Select_1.Select, { id: "default-select", label: "Default State" },
                    React.createElement("option", { value: "" }, "Select..."),
                    React.createElement("option", { value: "1" }, "Option 1"),
                    React.createElement("option", { value: "2" }, "Option 2")),
                React.createElement(Select_1.Select, { id: "disabled-select", label: "Disabled State", disabled: true },
                    React.createElement("option", { value: "" }, "Cannot select..."),
                    React.createElement("option", { value: "1" }, "Option 1"),
                    React.createElement("option", { value: "2" }, "Option 2")),
                React.createElement(Select_1.Select, { id: "required-select", label: "Required Field", required: true },
                    React.createElement("option", { value: "" }, "Please select..."),
                    React.createElement("option", { value: "1" }, "Option 1"),
                    React.createElement("option", { value: "2" }, "Option 2")),
                React.createElement(Select_1.Select, { id: "preselected-select", label: "Pre-selected Value", defaultValue: "option2" },
                    React.createElement("option", { value: "option1" }, "Option 1"),
                    React.createElement("option", { value: "option2" }, "Option 2 (Selected)"),
                    React.createElement("option", { value: "option3" }, "Option 3")))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Validation & Error States"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Select_1.Select, { id: "error-select", label: "Select with Error", errorMessage: "This field has an error" },
                    React.createElement("option", { value: "" }, "Select..."),
                    React.createElement("option", { value: "1" }, "Option 1"),
                    React.createElement("option", { value: "2" }, "Option 2")),
                React.createElement(Select_1.Select, { id: "error-required-select", label: "Required Field with Error", required: true, errorMessage: "Please select a valid option" },
                    React.createElement("option", { value: "" }, "Please select..."),
                    React.createElement("option", { value: "admin" }, "Admin"),
                    React.createElement("option", { value: "user" }, "User"),
                    React.createElement("option", { value: "guest" }, "Guest")))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Hints & Helper Text"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Select_1.Select, { id: "single-hint-select", label: "Select with Single Hint", hints: "Choose your preferred option" },
                    React.createElement("option", { value: "" }, "Select..."),
                    React.createElement("option", { value: "basic" }, "Basic"),
                    React.createElement("option", { value: "advanced" }, "Advanced"),
                    React.createElement("option", { value: "expert" }, "Expert")),
                React.createElement(Select_1.Select, { id: "multiple-hints-select", label: "Select with Multiple Hints", hints: [
                        "This selection affects your experience",
                        "You can change this later in settings",
                    ] },
                    React.createElement("option", { value: "" }, "Select theme..."),
                    React.createElement("option", { value: "light" }, "Light Theme"),
                    React.createElement("option", { value: "dark" }, "Dark Theme"),
                    React.createElement("option", { value: "auto" }, "Auto (System)")),
                React.createElement(Select_1.Select, { id: "hint-error-select", label: "Hints with Error State", hints: "Please select a valid region", errorMessage: "Region is required" },
                    React.createElement("option", { value: "" }, "Select region..."),
                    React.createElement("option", { value: "na" }, "North America"),
                    React.createElement("option", { value: "eu" }, "Europe"),
                    React.createElement("option", { value: "asia" }, "Asia")))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Grouped Options"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Select_1.Select, { id: "game-select", label: "Select Game", value: game, onChange: (e) => setGame(e.target.value) },
                    React.createElement("option", { value: "" }, "Select a game..."),
                    React.createElement("optgroup", { label: "Bethesda Games" },
                        React.createElement("option", { value: "skyrim" }, "The Elder Scrolls V: Skyrim"),
                        React.createElement("option", { value: "skyrimse" }, "Skyrim Special Edition"),
                        React.createElement("option", { value: "fallout4" }, "Fallout 4"),
                        React.createElement("option", { value: "fallout76" }, "Fallout 76"),
                        React.createElement("option", { value: "starfield" }, "Starfield")),
                    React.createElement("optgroup", { label: "CD Projekt RED" },
                        React.createElement("option", { value: "witcher3" }, "The Witcher 3"),
                        React.createElement("option", { value: "cyberpunk" }, "Cyberpunk 2077")),
                    React.createElement("optgroup", { label: "FromSoftware" },
                        React.createElement("option", { value: "eldenring" }, "Elden Ring"),
                        React.createElement("option", { value: "darksouls3" }, "Dark Souls III"),
                        React.createElement("option", { value: "sekiro" }, "Sekiro"))),
                React.createElement(Select_1.Select, { id: "category-select", label: "Select Category" },
                    React.createElement("option", { value: "" }, "All Categories..."),
                    React.createElement("optgroup", { label: "Gameplay" },
                        React.createElement("option", { value: "combat" }, "Combat"),
                        React.createElement("option", { value: "magic" }, "Magic"),
                        React.createElement("option", { value: "stealth" }, "Stealth")),
                    React.createElement("optgroup", { label: "Visual" },
                        React.createElement("option", { value: "textures" }, "Textures"),
                        React.createElement("option", { value: "lighting" }, "Lighting"),
                        React.createElement("option", { value: "weather" }, "Weather")),
                    React.createElement("optgroup", { label: "Audio" },
                        React.createElement("option", { value: "music" }, "Music"),
                        React.createElement("option", { value: "sfx" }, "Sound Effects"),
                        React.createElement("option", { value: "voice" }, "Voice"))))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Many Options"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Select_1.Select, { id: "many-options-select", label: "Select from Many Options", hints: "A long list of options to demonstrate scrolling" },
                    React.createElement("option", { value: "" }, "Select a number..."),
                    Array.from({ length: 50 }, (_, i) => (React.createElement("option", { key: i + 1, value: i + 1 },
                        "Option ",
                        i + 1)))))),
        React.createElement("div", { className: "tw:mb-12" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-md", className: "tw:mb-4" }, "Combined Features"),
            React.createElement(formfield_1.FormFieldWrap, null,
                React.createElement(Select_1.Select, { id: "role-select", label: "User Role", required: true, hints: [
                        "Select the appropriate role for this user",
                        "Roles determine access permissions",
                    ] },
                    React.createElement("option", { value: "" }, "Select role..."),
                    React.createElement("optgroup", { label: "Administrative" },
                        React.createElement("option", { value: "superadmin" }, "Super Admin"),
                        React.createElement("option", { value: "admin" }, "Admin"),
                        React.createElement("option", { value: "moderator" }, "Moderator")),
                    React.createElement("optgroup", { label: "Standard Users" },
                        React.createElement("option", { value: "user" }, "User"),
                        React.createElement("option", { value: "guest" }, "Guest"))),
                React.createElement(Select_1.Select, { id: "priority-select", label: "Priority Level", required: true, defaultValue: "medium", hints: "Choose the priority level for this task" },
                    React.createElement("option", { value: "critical" }, "Critical"),
                    React.createElement("option", { value: "high" }, "High"),
                    React.createElement("option", { value: "medium" }, "Medium"),
                    React.createElement("option", { value: "low" }, "Low"))))));
};
exports.SelectDemo = SelectDemo;
