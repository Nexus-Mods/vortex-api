"use strict";
/**
 * CollectionTile Demo Component
 * Demonstrates the CollectionTile component with mock data
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
exports.CollectionTileDemo = void 0;
const React = __importStar(require("react"));
const CollectionTile_1 = require("./CollectionTile");
const Typography_1 = require("../typography/Typography");
const CollectionTileDemo = ({ api }) => {
    const handleAddCollection = (title) => {
        console.log("Add collection:", title);
    };
    const handleViewPage = (title) => {
        console.log("View page:", title);
    };
    const gameId = "stardewvalley";
    const mockCollections = [
        {
            id: "1",
            gameId,
            slug: "ultimate-civil-war-reloaded",
            title: "Ultimate Civil War Reloaded",
            author: {
                name: "RyukanoHi",
                avatar: undefined,
            },
            coverImage: "https://placehold.co/166x207/1f1f1f/ffffff?text=Collection",
            tags: ["Total Overhaul", "Adult"],
            stats: {
                endorsements: 320,
                size: 540000000,
                modCount: 320,
            },
            description: "1.6.8 The story of Stardew Valley expands outside of Pelican Town with this expanded collection designed to stay true to the original game. Created with co-op in mind, perfect for experienced solo-players. Easy install, includes configuration.",
            version: "1.6.8",
        },
        {
            id: "2",
            gameId,
            slug: "immersive-graphics-overhaul",
            title: "Immersive Graphics Overhaul",
            author: {
                name: "GraphicsMod",
                avatar: undefined,
            },
            coverImage: "https://placehold.co/166x207/2a2a2a/ffffff?text=Graphics",
            tags: ["Graphics", "Performance"],
            stats: {
                endorsements: 890,
                size: 21000000,
                modCount: 1520,
            },
            description: "Complete graphics overhaul with enhanced textures, lighting, and weather effects. Optimized for performance with minimal FPS impact. Includes ENB preset and configuration tool.",
        },
        {
            id: "3",
            gameId,
            title: "Quest Expansion Pack",
            slug: "quest-expansion-pack",
            author: {
                name: "QuestMaster",
                avatar: undefined,
            },
            coverImage: "https://placehold.co/166x207/1a1a1a/ffffff?text=Quests",
            tags: ["Quests"],
            stats: {
                endorsements: 425,
                size: 1200004,
                modCount: 650,
            },
            description: "Adds 50+ new quests with unique storylines, characters, and rewards. Fully voice-acted with professional cast. Compatible with all major mods.",
        },
    ];
    return (React.createElement("div", { className: "tw:p-6 tw:space-y-8" },
        React.createElement(Typography_1.Typography, { as: "h1", typographyType: "heading-2xl", appearance: "strong", className: "tw:mb-6" }, "Collection Tile Component"),
        React.createElement(Typography_1.Typography, { as: "p", typographyType: "body-md", appearance: "subdued", className: "tw:mb-8" }, "Collection tiles for browsing and managing mod collections. Based on Figma design specifications. Maximum 2 tags shown, no icons (placeholders only), with primary and tertiary action buttons."),
        React.createElement("div", { className: "tw:space-y-6" },
            React.createElement(Typography_1.Typography, { as: "h2", typographyType: "heading-xl", appearance: "strong", className: "tw:mb-4" }, "Sample Collections"),
            React.createElement("div", { className: "tw:flex tw:flex-col tw:gap-6" }, mockCollections.map((collection) => (React.createElement(CollectionTile_1.CollectionTile, Object.assign({ key: collection.id }, collection, { onAddCollection: () => handleAddCollection(collection.title), onViewPage: () => handleViewPage(collection.title), api: api })))))),
        React.createElement("div", { className: "tw:p-4 tw:bg-yellow-50 tw:rounded tw:border tw:border-yellow-200 tw:mt-8" },
            React.createElement(Typography_1.Typography, { as: "p", typographyType: "body-sm", appearance: "moderate" },
                React.createElement("strong", null, "Design Notes:"),
                " Fixed dimensions (465x288px), max 2 tags displayed, \"Adult\" tag uses danger-400 color (#F87171), no hover effects on card (only buttons), icons are placeholder divs (no actual icons rendered)."))));
};
exports.CollectionTileDemo = CollectionTileDemo;
