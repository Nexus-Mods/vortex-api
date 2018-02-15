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
export interface IComponentState {
    cachedValue: string;
}
/**
 * this is a wrapper for the text input-component that is styled like the
 * bootstrap FormControl component.
 * This wrapper uses a "cache" in the state to reduce the number of (costy)
 * rerenders caused by changing the redux store every keypress.
 * As a side effect, this fixes a problem where the cursor always jumps to
 * the end of the line when using controlled input.
 */
declare class FormInput extends React.PureComponent<IProps, IComponentState> {
    private mDebouncer;
    private mLastCommitted;
    constructor(props: IProps);
    componentWillReceiveProps(newProps: IProps): void;
    render(): JSX.Element;
    private onChange;
}
export default FormInput;
