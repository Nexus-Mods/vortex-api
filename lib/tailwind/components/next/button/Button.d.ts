/**
 * Button Component
 * Adapted from web team's "next" project for Vortex
 *
 * Provides a consistent button system with multiple types, sizes, and states.
 */
import * as React from 'react';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentProps, ReactNode, Ref } from 'react';
import { Link } from '../link';
import { XOr } from '../utils';
export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'success' | 'premium';
type BaseButtonProps = {
    buttonType?: ButtonType;
    filled?: 'strong' | 'weak';
    isLoading?: boolean;
    isResponsive?: boolean;
    size?: 'sm' | 'md';
    children?: string;
    customContent?: ReactNode;
} & XOr<{
    leftIconPath?: string;
}, {
    leftIcon?: ReactNode;
}> & XOr<{
    rightIconPath?: string;
}, {
    rightIcon?: ReactNode;
}>;
type ButtonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    disabled?: boolean;
    href?: never;
    isExternal?: never;
    ref?: Ref<HTMLButtonElement>;
} & BaseButtonProps;
type ButtonLinkProps = Omit<ComponentProps<typeof Link>, 'as'> & {
    as: 'link';
    className?: string;
    disabled?: never;
    isExternal?: boolean;
    ref?: Ref<HTMLAnchorElement>;
} & BaseButtonProps;
type ButtonLinkAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    disabled?: never;
    isExternal?: boolean;
    ref?: Ref<HTMLAnchorElement>;
} & BaseButtonProps;
type ButtonProps = ButtonButtonProps | ButtonLinkProps | ButtonLinkAnchorProps;
export declare const Button: (all: ButtonProps) => React.JSX.Element;
export {};
