/**
 * Input Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a consistent input component with validation, hints, and accessibility features.
 */
import * as React from 'react';
import { InputHTMLAttributes, Ref } from 'react';
import { BaseFormFieldProps } from '../formfield';
export interface InputProps extends BaseFormFieldProps, InputHTMLAttributes<HTMLInputElement> {
    /**
     * Restrict default value to string | number as we don't use this component for checkbox
     */
    defaultValue?: string | number;
    fieldClassName?: string;
    ref?: Ref<HTMLInputElement>;
    type?: 'text' | 'email' | 'password' | 'url' | 'number' | 'time' | 'date';
    /**
     * Restrict value to string | number as we don't use this component for checkbox
     */
    value?: string | number;
}
export declare const Input: ({ className, defaultValue, disabled, errorMessage, fieldClassName, hideLabel, hints, hintsTypographyType, id, label, maxLength, onChange, readOnly, required, showRequiredLabel, type, value, ...props }: InputProps) => React.JSX.Element;
