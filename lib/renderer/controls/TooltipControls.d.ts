import { ButtonType } from "./IconBar";
import * as React from "react";
import { Button as BootstrapButton, NavItem as BootstrapNavItem } from "react-bootstrap";
export interface ITooltipProps {
    tooltip: string | React.ReactElement<any>;
    id?: string;
    placement?: "top" | "right" | "bottom" | "left";
    buttonType?: ButtonType;
}
export type ButtonProps = ITooltipProps & typeof BootstrapButton.prototype.props;
/**
 * Button with a tooltip
 *
 */
export declare class Button extends React.PureComponent<ButtonProps, {}> {
    render(): React.JSX.Element;
}
export interface IIconButtonExtraProps {
    icon: string;
    set?: string;
    spin?: boolean;
    pulse?: boolean;
    stroke?: boolean;
    hollow?: boolean;
    border?: boolean;
    inverse?: boolean;
    flip?: "horizontal" | "vertical";
    rotate?: number;
    rotateId?: string;
    vertical?: boolean;
}
export type IconButtonProps = ButtonProps & IIconButtonExtraProps;
export declare class IconButton extends React.Component<IconButtonProps, {}> {
    render(): React.JSX.Element;
}
export interface IToggleButtonExtraProps {
    onIcon: string;
    offIcon: string;
    offTooltip: string | React.Component<any, any>;
    state: boolean;
}
export type ToggleButtonProps = ButtonProps & IToggleButtonExtraProps;
export declare class ToggleButton extends React.Component<ToggleButtonProps, {}> {
    render(): React.JSX.Element;
}
export type NavItemProps = ITooltipProps & typeof BootstrapNavItem.prototype.props;
export declare class NavItem extends React.Component<NavItemProps, {}> {
    render(): React.JSX.Element;
}
/**
 * copied from the typings .d.ts file because this interface is not exported
 *
 * @interface FontAwesomeProps
 */
export interface ITooltipIconProps {
    border?: boolean;
    className?: string;
    fixedWidth?: boolean;
    flip?: "horizontal" | "vertical";
    inverse?: boolean;
    name: string;
    set?: string;
    pulse?: boolean;
    rotate?: "90" | "180" | "270";
    rotateId?: string;
    spin?: boolean;
    stack?: string;
    stroke?: boolean;
    hollow?: boolean;
    style?: React.CSSProperties;
}
export type IconProps = ITooltipProps & ITooltipIconProps;
/**
 * Icon with a tooltip
 *
 * @export
 * @class Icon
 */
export declare class Icon extends React.Component<IconProps, {}> {
    render(): React.JSX.Element;
}
export type ClickPopoverProps = ButtonProps & IIconButtonExtraProps & {};
export declare class ClickPopover extends React.Component<ClickPopoverProps, {
    open: boolean;
}> {
    private mRef;
    constructor(props: ClickPopoverProps);
    render(): JSX.Element;
    private toggleOverlay;
    private hideOverlay;
    private setRef;
}
