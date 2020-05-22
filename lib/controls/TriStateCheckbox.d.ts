import * as React from 'react';
import { ComponentEx, translate } from '../util/ComponentEx';

export interface ITriCheckboxProps {
  checked: boolean;
  classNames?: string[];
  disabled: boolean;
  indeterminate: boolean;
  style?: React.CSSProperties;
  onChangeCB?: (evt: React.ChangeEvent<HTMLInputElement>, value: CheckboxState) => void;
  onContextMenu?: (checkboxState: CheckboxState) => void;
}

export declare class TriStateCheckbox extends ComponentEx<ITriCheckboxProps, {}> {
  render(): JSX.Element;
  private onChange;
  private onContextMenu;
  private onClick;
  private onRef;
}
