"use strict";
/**
 * CollectionTile Component
 * Displays a collection card with image, metadata, and action buttons
 * Adapted from Figma design for collection browsing
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionTile = void 0;
const React = __importStar(require("react"));
const Button_1 = require("../button/Button");
const Typography_1 = require("../typography/Typography");
const icon_1 = require("../icon");
const icon_paths_1 = require("../../../lib/icon-paths");
const numeral_1 = __importDefault(require("numeral"));
const CollectionTile = ({ title, author, coverImage, tags, stats, description, onAddCollection, onViewPage, className, }) => {
    // Helper to extract tag text from string or object
    const getTagText = (tag) => {
        if (typeof tag === 'string') {
            return tag;
        }
        if (tag && typeof tag === 'object' && 'name' in tag) {
            return String(tag.name);
        }
        return String(tag);
    };
    // Take max 2 tags
    const displayTags = tags.slice(0, 2);
    return (React.createElement("div", { className: `tw:w-full tw:max-w-[465px] tw:h-[283px] tw:bg-surface-mid tw:flex tw:flex-col tw:justify-start tw:items-start ${className || ''}` },
        React.createElement("div", { className: "tw:self-stretch tw:flex-1 tw:px-3 tw:pt-3 tw:rounded-tl tw:rounded-tr tw:flex tw:flex-col tw:justify-start tw:items-start tw:gap-2 tw:overflow-hidden" },
            React.createElement("div", { className: "tw:self-stretch tw:flex tw:flex-1 tw:justify-between tw:items-start" },
                React.createElement("div", { className: "tw:w-[175px] tw:h-[219px] tw:relative tw:shrink-0" },
                    React.createElement("img", { className: "tw:w-[166px] tw:h-[208px] tw:absolute tw:top-0 tw:left-0 tw:rounded-sm tw:object-cover", src: coverImage, alt: title })),
                React.createElement("div", { className: "tw:flex-1 tw:self-stretch tw:flex tw:flex-col tw:justify-start tw:items-start" },
                    React.createElement("div", { className: "tw:self-stretch tw:pl-3 tw:pb-2 tw:flex tw:flex-col tw:justify-start tw:items-start tw:gap-0" },
                        React.createElement(Typography_1.Typography, { as: "div", className: "tw:line-clamp-1 tw:font-semibold tw:break-words", appearance: "strong", typographyType: "body-xl" }, title),
                        React.createElement("div", { className: "tw:flex tw:items-center tw:gap-1" },
                            author.avatar && (React.createElement("img", { src: author.avatar, alt: author.name, className: "tw:w-4 tw:h-4 tw:rounded-full tw:bg-zinc-300" })),
                            !author.avatar && (React.createElement("div", { className: "tw:w-4 tw:h-4 tw:bg-zinc-300 tw:rounded-full" })),
                            React.createElement(Typography_1.Typography, { as: "div", typographyType: "body-xs", appearance: "moderate", className: "tw:justify-center tw:tracking-tight" }, author.name))),
                    displayTags.length > 0 && (React.createElement("div", { className: "tw:self-stretch tw:pl-3 tw:flex tw:flex-col tw:justify-start tw:items-start tw:gap-2" },
                        React.createElement("div", { className: "tw:self-stretch tw:py-1.5 tw:border-t tw:border-b tw:border-stroke-neutral-translucent-weak tw:inline-flex tw:justify-start tw:items-center tw:gap-1.5 tw:flex-wrap tw:content-center" }, displayTags.map((tag, index) => {
                            const tagText = getTagText(tag);
                            return (React.createElement(React.Fragment, { key: index },
                                React.createElement(Typography_1.Typography, { as: "div", typographyType: "body-xs", appearance: "none", className: `tw:justify-center tw:tracking-tight ${tagText.toLowerCase() === 'adult'
                                        ? 'tw:text-danger-strong'
                                        : 'tw:text-info-strong'}` }, tagText),
                                index < displayTags.length - 1 && (React.createElement("div", { className: "tw:w-1 tw:h-1 tw:rotate-45 tw:bg-neutral-subdued" }))));
                        })))),
                    React.createElement("div", { className: "tw:self-stretch tw:pl-3 tw:inline-flex tw:justify-start tw:items-center tw:gap-5" },
                        React.createElement("div", { className: "tw:flex-1 tw:py-1.5 tw:border-b tw:border-stroke-neutral-translucent-weak tw:flex tw:justify-start tw:items-center tw:gap-5" },
                            React.createElement("div", { className: "tw:flex tw:justify-start tw:items-center tw:gap-1 tw:overflow-hidden" },
                                React.createElement(icon_1.Icon, { path: "mdiThumbUp", size: "sm" }),
                                React.createElement(Typography_1.Typography, { as: "div", typographyType: "body-xs", appearance: "moderate", className: "tw:justify-start tw:tracking-tight" }, (0, numeral_1.default)(stats.endorsements).format('0 a'))),
                            React.createElement("div", { className: "tw:flex tw:justify-center tw:items-center tw:gap-1 tw:overflow-hidden" },
                                React.createElement(icon_1.Icon, { path: icon_paths_1.nxmFileSize, size: "sm" }),
                                React.createElement(Typography_1.Typography, { as: "div", typographyType: "body-xs", appearance: "moderate", className: "tw:justify-start tw:tracking-tight" }, (0, numeral_1.default)(stats.size).format('0.0 b'))),
                            React.createElement("div", { className: "tw:flex tw:justify-center tw:items-center tw:gap-1 tw:overflow-hidden" },
                                React.createElement(icon_1.Icon, { path: icon_paths_1.nxmMod, size: "sm" }),
                                React.createElement(Typography_1.Typography, { as: "div", typographyType: "body-xs", appearance: "moderate", className: "tw:justify-start tw:tracking-tight" }, (0, numeral_1.default)(stats.modCount).format('0,0'))))),
                    React.createElement("div", { className: "tw:self-stretch tw:flex-1 tw:pl-3 tw:py-1 tw:flex tw:flex-col tw:justify-start tw:items-start tw:gap-2" },
                        React.createElement(Typography_1.Typography, { as: "div", typographyType: "body-md", appearance: "subdued", className: "tw:line-clamp-4 tw:break-words tw:leading-tight" }, description))))),
        React.createElement("div", { className: "tw:self-stretch tw:p-3 tw:bg-surface-high tw:rounded-bl tw:rounded-br tw:inline-flex tw:justify-start tw:items-center tw:gap-2" },
            React.createElement(Button_1.Button, { buttonType: "primary", size: "sm", onClick: onAddCollection }, "Add collection"),
            React.createElement(Button_1.Button, { buttonType: "tertiary", size: "sm", onClick: onViewPage, leftIconPath: "mdiOpenInNew" }, "View page"))));
};
exports.CollectionTile = CollectionTile;
