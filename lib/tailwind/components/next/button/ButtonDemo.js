"use strict";
/**
 * Button Demo Component
 * Demonstrates the Button component from the web team's "next" project
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
exports.ButtonDemo = void 0;
const React = __importStar(require("react"));
const Button_1 = require("./Button");
const Typography_1 = require("../typography/Typography");
const ButtonDemo = () => {
    const [loadingStates, setLoadingStates] = React.useState({});
    const handleLoadingClick = (key) => {
        setLoadingStates(Object.assign(Object.assign({}, loadingStates), { [key]: true }));
        setTimeout(() => {
            setLoadingStates(Object.assign(Object.assign({}, loadingStates), { [key]: false }));
        }, 2000);
    };
    return (React.createElement("div", { className: "tw:p-6 tw:space-y-8" },
        React.createElement(Typography_1.Typography, { as: "h1", typographyType: "heading-2xl", appearance: "strong", className: "tw:mb-6" }, "Button System from Web Team"),
        React.createElement(Typography_1.Typography, { as: "p", typographyType: "body-md", appearance: "subdued", className: "tw:mb-8" }, "This component is adapted from the web team's \"next\" project. It provides a consistent button system with multiple types, sizes, and states. Note: Icon support is pending implementation."),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Primary Buttons"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { buttonType: "primary", size: "md" }, "Primary Medium"),
                React.createElement(Button_1.Button, { buttonType: "primary", size: "sm" }, "Primary Small"),
                React.createElement(Button_1.Button, { buttonType: "primary", size: "md", disabled: true }, "Disabled"),
                React.createElement(Button_1.Button, { buttonType: "primary", size: "md", isLoading: loadingStates.primary, onClick: () => handleLoadingClick('primary') }, "Click for Loading"))),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Secondary Buttons"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { buttonType: "secondary", size: "md" }, "Secondary Medium"),
                React.createElement(Button_1.Button, { buttonType: "secondary", size: "sm" }, "Secondary Small"),
                React.createElement(Button_1.Button, { buttonType: "secondary", size: "md", filled: "strong" }, "Filled Strong"),
                React.createElement(Button_1.Button, { buttonType: "secondary", size: "md", filled: "weak" }, "Filled Weak"),
                React.createElement(Button_1.Button, { buttonType: "secondary", size: "md", disabled: true }, "Disabled"))),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Tertiary Buttons"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { buttonType: "tertiary", size: "md" }, "Tertiary Medium"),
                React.createElement(Button_1.Button, { buttonType: "tertiary", size: "sm" }, "Tertiary Small"),
                React.createElement(Button_1.Button, { buttonType: "tertiary", size: "md", filled: "strong" }, "Filled Strong"),
                React.createElement(Button_1.Button, { buttonType: "tertiary", size: "md", filled: "weak" }, "Filled Weak"))),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Success Buttons"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { buttonType: "success", size: "md" }, "Success Medium"),
                React.createElement(Button_1.Button, { buttonType: "success", size: "sm" }, "Success Small"),
                React.createElement(Button_1.Button, { buttonType: "success", size: "md", disabled: true }, "Disabled"))),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Premium Buttons"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { buttonType: "premium", size: "md" }, "Premium Medium"),
                React.createElement(Button_1.Button, { buttonType: "premium", size: "sm" }, "Premium Small"),
                React.createElement(Button_1.Button, { buttonType: "premium", size: "md", disabled: true }, "Disabled"))),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Responsive Buttons"),
            React.createElement(Typography_1.Typography, { as: "p", typographyType: "body-sm", appearance: "subdued", className: "tw:mb-4" }, "These buttons change size based on screen width. Try resizing the window!"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { buttonType: "primary", size: "sm", isResponsive: true }, "Responsive (sm on mobile, md on desktop)"))),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Button as Link"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { as: "link", buttonType: "primary", size: "md", href: "https://nexusmods.com", isExternal: true }, "External Link"),
                React.createElement(Button_1.Button, { as: "a", buttonType: "secondary", size: "md", href: "#demo" }, "Anchor Link"))),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Custom Content"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { buttonType: "primary", size: "md", customContent: React.createElement("span", { className: "tw:flex tw:items-center tw:gap-2" },
                        React.createElement("span", null, "\uD83C\uDFAE"),
                        React.createElement("span", null, "Custom Content Button")) }))),
        React.createElement("div", { className: "tw:space-y-4" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Buttons with Icons"),
            React.createElement("div", { className: "tw:flex tw:gap-4 tw:flex-wrap tw:items-center" },
                React.createElement(Button_1.Button, { buttonType: "primary", size: "md", leftIconPath: "mdiDownload" }, "Download"),
                React.createElement(Button_1.Button, { buttonType: "secondary", size: "md", rightIconPath: "mdiChevronRight" }, "Next"),
                React.createElement(Button_1.Button, { buttonType: "success", size: "sm", leftIconPath: "mdiCheck" }, "Confirm"),
                React.createElement(Button_1.Button, { buttonType: "tertiary", size: "md", leftIconPath: "mdiCog" }, "Settings")))));
};
exports.ButtonDemo = ButtonDemo;
