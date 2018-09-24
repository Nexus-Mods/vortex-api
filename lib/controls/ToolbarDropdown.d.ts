import { ButtonType } from './IconBar';
import * as React from 'react';
import { IActionDefinition } from '../types/api';
export interface IToolbarDropdownProps {
    id: string;
    instanceId: string[];
    icons: IActionDefinition[];
    className?: string;
    buttonType: ButtonType;
    orientation: 'vertical' | 'horizontal';
}
declare class ToolbarDropdown extends React.PureComponent<IToolbarDropdownProps, {}> {
    render(): JSX.Element;
    private renderTitle;
}
export default ToolbarDropdown;
