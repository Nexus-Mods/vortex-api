/// <reference types="react" />
import { ValidationState } from '../types/ITableAttribute';
import * as React from 'react';
export interface IProps {
    value: string;
    onChange: (newValue: string) => void;
    id?: string;
    label?: string;
    readOnly?: boolean;
    placeholder?: string;
    validate?: (value: any) => ValidationState;
}
declare const _default: React.ComponentClass<IProps>;
export default _default;
