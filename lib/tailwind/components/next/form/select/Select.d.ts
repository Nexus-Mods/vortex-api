/**
 * Select Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a styled select dropdown with custom icon and validation support.
 */
import * as React from "react";
import { Ref, SelectHTMLAttributes } from "react";
import { BaseFormFieldProps } from "../formfield";
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & BaseFormFieldProps & {
    ref?: Ref<HTMLSelectElement>;
};
export declare const Select: ({ children, className, disabled, errorMessage, hideLabel, hints, id, label, ref, required, showRequiredLabel, ...props }: SelectProps) => React.JSX.Element;
