/**
 * Shared utility functions for web team components
 * Adapted from web team's "next" project
 */
/**
 * XOr type - ensures only one of two types can be used
 */
export type XOr<T, U> = T | U extends object ? (T & Partial<Record<keyof U, never>>) | (U & Partial<Record<keyof T, never>>) : T | U;
/**
 * Joins class names, filtering out falsy values
 * Supports conditional classes via object syntax
 */
export declare function joinClasses(classes: (string | string[] | Record<string, boolean | undefined>)[], conditionalClasses?: Record<string, boolean | undefined>): string;
/**
 * Responsive screen sizes for Tailwind
 */
export type ResponsiveScreenSizes = "default" | "sm" | "md" | "lg" | "xl" | "2xl";
/**
 * Converts a tab name into a valid HTML element ID
 * Converts to lowercase and replaces whitespace with underscores
 *
 * @example
 * getTabId('My Tab') → 'my_tab'
 * getTabId('Tab   1') → 'tab_1'
 * getTabId('A tab name\n  on multiple lines') → 'a_tab_name_on_multiple_lines'
 */
export declare function getTabId(tabName: string): string;
