/**
 * Typography Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a consistent typography system with predefined sizes and appearances.
 */
import * as React from "react";
import { AllHTMLAttributes, Ref } from "react";
import { ResponsiveScreenSizes } from "../utils";
export type TypographyTypes = "heading-2xl" | "heading-xl" | "heading-lg" | "heading-md" | "heading-sm" | "heading-xs" | "title-md" | "title-sm" | "title-xs" | "body-xl" | "body-2xl" | "body-lg" | "body-md" | "body-sm" | "body-xs";
type TypographyTypeObjectDefault = {
    [key in Extract<ResponsiveScreenSizes, "default">]: TypographyTypes;
};
type TypographyTypeObject = TypographyTypeObjectDefault & {
    [key in Exclude<ResponsiveScreenSizes, "default">]?: TypographyTypes;
};
export type TypographyElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "ul";
export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
    /**
     * The text colour
     */
    appearance?: "inverted" | "moderate" | "strong" | "subdued" | "weak" | "none";
    as?: TypographyElements;
    isTranslucent?: boolean;
    ref?: Ref<HTMLElement>;
    typographyType?: TypographyTypes | TypographyTypeObject;
}
export declare const Typography: React.ComponentType<TypographyProps>;
export {};
