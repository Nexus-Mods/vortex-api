/**
 * FormField Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a form field wrapper with label, hints, error messages, and character counter.
 */
import * as React from "react";
import { HTMLAttributes, ReactNode, Ref } from "react";
import { TypographyTypes } from "../../typography/Typography";
export interface BaseFormFieldProps {
    /**
     * Makes the elements non-interactive
     */
    disabled?: boolean;
    /**
     * Styles and adds an error message to the field
     */
    errorMessage?: string;
    /**
     * Hides the label
     */
    hideLabel?: boolean;
    /**
     * Applies additional hint to the field
     */
    hints?: string | string[];
    /**
     * Typography type for hints
     */
    hintsTypographyType?: TypographyTypes;
    /**
     * Applies additional hint to the field
     */
    id?: string;
    /**
     * Adds a label that floats if no placeholder is provided
     */
    label?: string;
    /**
     * Adds a required text inside the label
     */
    showRequiredLabel?: boolean;
}
export interface FormFieldProps extends BaseFormFieldProps, HTMLAttributes<HTMLElement> {
    /**
     * Form element to be rendered
     */
    children?: ReactNode;
    /**
     * Current length of the input value
     */
    inputLength?: number;
    /**
     * Max length input value can be
     */
    maxLength?: number;
    ref?: Ref<HTMLDivElement>;
}
export declare const FormField: ({ children, className, disabled, errorMessage, hideLabel, hints, hintsTypographyType, id, inputLength, label, maxLength, ref, showRequiredLabel, }: FormFieldProps) => React.JSX.Element;
export declare const FormFieldWrap: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
