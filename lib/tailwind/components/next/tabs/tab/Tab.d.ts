import * as React from 'react';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
type Tab = {
    count?: number;
    name: string;
};
export type TabButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Tab;
export type TabLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & Tab;
export declare const TabContent: ({ count, label }: {
    count?: number;
    label: string;
}) => React.JSX.Element;
/**
 * Standard tab component, implemented as a button. Clicking it will reveal the
 * content for the selected tab.
 */
export declare const TabButton: ({ className, count, disabled, name, ...props }: TabButtonProps) => React.JSX.Element;
/**
 * Link tab component. This is not selectable, but can be clicked to open
 * the link. Can also be focused using arrow key navigation (but not selected).
 */
export declare const TabLink: ({ className, count, name, ...props }: TabLinkProps) => React.JSX.Element;
export {};
