/**
 * Link Component
 * Simple wrapper around anchor tags for Electron/Vortex
 *
 * This replaces the web team's Next.js Link component with a basic
 * anchor tag suitable for Electron applications.
 */
import * as React from "react";
import { AnchorHTMLAttributes } from "react";
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    isExternal?: boolean;
    "aria-disabled"?: boolean;
    children?: React.ReactNode;
}
/**
 * Simple Link component for Electron
 * Renders a standard anchor tag with optional external link handling
 */
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
