import * as React from 'react';
export interface IToolbarIconProps {
    id?: string;
    instanceId?: string[];
    text?: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    iconSet?: string;
    icon?: string;
    tooltip?: string;
    onClick?: (ids: string[]) => void;
    pulse?: boolean;
    disabled?: boolean;
    className?: string;
}
declare class ToolbarIcon extends React.PureComponent<IToolbarIconProps, {}> {
    render(): JSX.Element;
    private invokeAction;
}
export default ToolbarIcon;
