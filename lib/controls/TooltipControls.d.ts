/// <reference types="react" />
import { ButtonType } from './IconBar';
import * as React from 'react';
import { Button as BootstrapButton, NavItem as BootstrapNavItem } from 'react-bootstrap';
export interface ITooltipProps {
    tooltip: string | React.ReactElement<any>;
    id?: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    buttonType?: ButtonType;
}
export declare type ButtonProps = ITooltipProps & typeof BootstrapButton.prototype.props;
/**
 * Button with a tooltip
 *
 */
export declare class Button extends React.PureComponent<ButtonProps, {}> {
    render(): JSX.Element;
}
export interface IIconButtonExtraProps {
    icon: string;
    spin?: boolean;
    pulse?: boolean;
    stroke?: boolean;
    border?: boolean;
    inverse?: boolean;
    flip?: 'horizontal' | 'vertical';
    rotate?: number;
    rotateId?: string;
}
export declare type IconButtonProps = ButtonProps & IIconButtonExtraProps;
export declare class IconButton extends React.Component<IconButtonProps, {}> {
    render(): JSX.Element;
}
export interface IToggleButtonExtraProps {
    onIcon: string;
    offIcon: string;
    offTooltip: string | React.Component<any, any>;
    state: boolean;
}
export declare type ToggleButtonProps = ButtonProps & IToggleButtonExtraProps;
export declare class ToggleButton extends React.Component<ToggleButtonProps, {}> {
    render(): JSX.Element;
}
export declare type NavItemProps = ITooltipProps & typeof BootstrapNavItem.prototype.props;
export declare class NavItem extends React.Component<NavItemProps, {}> {
    render(): JSX.Element;
}
/**
 * copied from the typings .d.ts file because this interface is not exported
 *
 * @interface FontAwesomeProps
 */
export interface IFontAwesomeProps {
    border?: boolean;
    className?: string;
    fixedWidth?: boolean;
    flip?: 'horizontal' | 'vertical';
    inverse?: boolean;
    name: string;
    pulse?: boolean;
    rotate?: '90' | '180' | '270';
    rotateId?: string;
    spin?: boolean;
    stack?: string;
    style?: React.CSSProperties;
}
export declare type IconProps = ITooltipProps & IFontAwesomeProps;
/**
 * Icon with a tooltip
 *
 * @export
 * @class Icon
 */
export declare class Icon extends React.Component<IconProps, {}> {
    render(): JSX.Element;
}
export declare type ClickPopoverProps = ButtonProps & IIconButtonExtraProps & {};
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
