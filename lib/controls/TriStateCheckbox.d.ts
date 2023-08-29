import * as React from 'react';
export type CheckboxState = 'enabled' | 'disabled' | 'locked';
export interface ITriCheckboxProps {
    checked: boolean;
    indeterminate: boolean;
    classNames?: string[];
    disabled: boolean;
    onChangeCB?: (evt: React.ChangeEvent<HTMLInputElement>, value: CheckboxState) => void;
    onContextMenu?: (checkboxState: CheckboxState) => void;
}
declare const _default: any;
export default _default;
