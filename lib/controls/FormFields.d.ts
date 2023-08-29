import { TFunction } from 'i18next';
import * as React from 'react';
import { ComponentEx } from '../util/ComponentEx';
export interface IFormItemProps {
    t: TFunction;
    controlId: string;
    label: string;
    placeholder?: string;
    stateKey: string;
    value: any;
    onChangeValue?: (key: string, newValue: any) => void;
    validator?: (value: string) => string;
    readOnly?: boolean;
    maxLength?: number;
    style?: React.CSSProperties;
}
export declare class FormTextItem extends React.Component<IFormItemProps, {}> {
    render(): JSX.Element;
    private validationState;
    private onChangeValue;
}
export declare class FormCheckboxItem extends React.Component<IFormItemProps, {}> {
    render(): JSX.Element;
    private onChangeValue;
}
export interface IFormPathProps extends IFormItemProps {
    directory: boolean;
    extensions?: string[];
}
export declare class FormPathItem extends ComponentEx<IFormPathProps, {}> {
    render(): JSX.Element;
    private validationState;
    private handleTypePath;
    private handleChangePath;
}
