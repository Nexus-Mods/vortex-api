import { ValidationState } from '../types/ITableAttribute';
import * as React from 'react';
export interface IProps {
    value: string;
    onChange: (newValue: string) => void;
    onFocus?: (focused: boolean) => void;
    id?: string;
    label?: string;
    readOnly?: boolean;
    placeholder?: string;
    validate?: (value: any) => ValidationState;
    debounceTimer?: number;
}
declare const _default: React.ComponentClass<IProps, React.ComponentState>;
export default _default;
