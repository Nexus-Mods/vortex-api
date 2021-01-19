import { IActionDefinition } from '../types/IActionDefinition';
import { ButtonType } from './IconBar';
import { TFunction } from 'i18next';
import * as React from 'react';
export interface IToolbarDropdownProps {
    t: TFunction;
    id: string;
    instanceId: string[];
    icons: IActionDefinition[];
    className?: string;
    buttonType?: ButtonType;
    orientation: 'vertical' | 'horizontal';
}
declare class ToolbarDropdown extends React.PureComponent<IToolbarDropdownProps, {}> {
    render(): JSX.Element;
    private renderTitle;
    private invokeDefault;
}
export default ToolbarDropdown;
