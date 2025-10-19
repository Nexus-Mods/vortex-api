/**
 * Icon Component
 * Adapted from web team's "next" project for Vortex
 *
 * Renders Material Design Icons using SVG path data from @mdi/js
 * Compatible with both string path names (e.g., 'mdiAccount') and direct path data
 */
import * as React from 'react';
export interface IconProps {
    className?: string;
    /**
     * Either an MDI icon name (string like 'mdiAccount') or direct SVG path data
     * Icon names are automatically mapped to @mdi/js exports
     */
    path?: string;
    /**
     * Size of the icon. Use 'none' to control size via className only
     */
    size?: 'none' | number | string;
    /**
     * Icon title for accessibility (optional)
     */
    title?: string;
    /**
     * Additional SVG attributes
     */
    [key: string]: any;
}
/**
 * Icon component that renders Material Design Icons
 *
 * Usage:
 * - With icon name: <Icon path="mdiAccount" size="1" />
 * - With direct path: <Icon path={mdiAccount} size="1" />
 * - With className sizing: <Icon path="mdiAccount" size="none" className="tw:size-5" />
 */
export declare const Icon: React.ComponentType<IconProps>;
