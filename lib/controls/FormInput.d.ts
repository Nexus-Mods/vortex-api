import { ValidationState } from '../types/ITableAttribute';
import * as React from 'react';
export interface IProps {
    className?: string;
    value: string;
    onChange: (newValue: string, id: string) => void;
    onFocus?: (focused: boolean) => void;
    id?: string;
    label?: string;
    type?: string;
    readOnly?: boolean;
    placeholder?: string;
    validate?: (value: any) => ValidationState;
    debounceTimer?: number;
    clearable?: boolean;
}
declare const _default: React.ComponentClass<IProps, any>;
export default _default;
