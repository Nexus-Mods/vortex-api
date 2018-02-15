/// <reference types="react" />
import { IActionDefinition } from '../types/IActionDefinition';
import { IExtensibleProps } from '../util/ExtensionProvider';
import * as React from 'react';
export declare type ButtonType = 'text' | 'icon' | 'both' | 'menu';
export interface IBaseProps {
    className?: string;
    group: string;
    instanceId?: string | string[];
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
    buttonType?: ButtonType;
    orientation?: 'horizontal' | 'vertical';
    collapse?: boolean | 'force';
    dropdown?: boolean;
    icon?: string;
}
export interface IExtensionProps {
    objects: IActionDefinition[];
}
export declare type ExportType = IBaseProps & IExtensibleProps & React.HTMLAttributes<any> & any;
declare const _default: React.ComponentClass<any>;
export default _default;
