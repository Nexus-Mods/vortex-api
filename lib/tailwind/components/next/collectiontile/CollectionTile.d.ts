/**
 * CollectionTile Component
 * Displays a collection card with image, metadata, and action buttons
 * Adapted from Figma design for collection browsing
 */
import * as React from "react";
import { IExtensionApi } from "../../../../types/IExtensionContext";
export interface CollectionTileProps {
    id: string;
    slug: string;
    gameId: string;
    title: string;
    author: {
        name: string;
        avatar?: string;
    };
    coverImage: string;
    tags: string[];
    stats: {
        endorsements: number;
        modCount: number;
        size: number;
    };
    description: string;
    version?: string;
    badges?: Array<{
        name: string;
        description: string;
    }>;
    onAddCollection?: () => void;
    onViewPage?: () => void;
    className?: string;
}
export declare const CollectionTile: React.ComponentType<CollectionTileProps & {
    api: IExtensionApi;
}>;
