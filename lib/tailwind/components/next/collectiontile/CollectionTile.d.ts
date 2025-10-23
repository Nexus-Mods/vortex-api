/**
 * CollectionTile Component
 * Displays a collection card with image, metadata, and action buttons
 * Adapted from Figma design for collection browsing
 */
import * as React from 'react';
export interface CollectionTileProps {
    id: string;
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
        size: string;
    };
    description: string;
    version?: string;
    onAddCollection?: () => void;
    onViewPage?: () => void;
    className?: string;
}
export declare const CollectionTile: React.ComponentType<CollectionTileProps>;
