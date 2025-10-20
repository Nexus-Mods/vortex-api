/**
 * Icon Component
 * Adapted from web team's "next" project for Vortex
 *
 * Renders icons using SVG path data from multiple sources:
 * - Material Design Icons (@mdi/js) - e.g., 'mdiAccount'
 * - Nexus Mods custom icons - e.g., 'nxmVortex', 'nxmCollection'
 * - Direct SVG path data
 *
 * Size System:
 * - xs: 0.75rem (12px) - Extra small icons
 * - sm: 1rem (16px) - Small icons
 * - md: 1.25rem (20px) - Medium icons (DEFAULT)
 * - lg: 1.5rem (24px) - Large icons
 * - xl: 2rem (32px) - Extra large icons
 * - 2xl: 3rem (48px) - 2X extra large icons
 * - none: Size controlled via className
 */
import * as React from 'react';
import { XOr } from '../utils';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'size' | 'path'> & {
    /**
     * Icon path or name (REQUIRED):
     * - MDI icon name: 'mdiAccount', 'mdiDownload', etc.
     * - Nexus icon name: 'nxmVortex', 'nxmCollection', etc.
     * - Direct SVG path data string
     * Icon names are automatically resolved from @mdi/js or Nexus icon paths
     */
    path: string;
    /**
     * Icon title for accessibility (optional)
     */
    title?: string;
} & XOr<{
    /**
     * Named size from design system (default: 'md')
     * Cannot be used with sizeOverride
     */
    size?: IconSize;
}, {
    /**
     * Custom size override (e.g., '1.5rem', '24px', 'var(--custom-size)')
     * Cannot be used with size
     */
    sizeOverride?: string;
}>;
/**
 * Icon component that renders icons from multiple sources
 *
 * Usage:
 * - With MDI icon name: <Icon path="mdiAccount" size="md" />
 * - With Nexus icon name: <Icon path="nxmVortex" size="lg" />
 * - With direct path: <Icon path={mdiAccount} size="sm" />
 * - With className sizing: <Icon path="mdiAccount" size="none" className="tw:size-5" />
 * - With custom size: <Icon path="mdiDownload" sizeOverride="1.75rem" />
 */
export declare const Icon: ({ path, size, sizeOverride, className, title, ...rest }: IconProps) => React.JSX.Element;
