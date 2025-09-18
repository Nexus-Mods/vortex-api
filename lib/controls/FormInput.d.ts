import { ValidationState } from '../types/ITableAttribute';
import * as React from 'react';
export interface IProps {
    className?: string;
    groupClass?: string;
    style?: any;
    value: string | number;
    min?: number;
    max?: number;
    onChange: (newValue: string, id: string) => void;
    onFocus?: (focused: boolean) => void;
    id?: string;
    label?: string;
    type?: string;
    readOnly?: boolean;
    placeholder?: string;
    validate?: ValidationState | ((value: any) => ValidationState);
    debounceTimer?: number;
    clearable?: boolean;
    emptyIcon?: string;
    maxLength?: number;
}
declare const _default: React.ComponentClass<IProps>;
export default _default;
