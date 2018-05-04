/// <reference types="react" />
import { IExtensibleProps } from '../util/ExtensionProvider';
import { IActionControlProps } from './ActionControl';
import * as React from 'react';
export declare type ButtonType = 'text' | 'icon' | 'both' | 'menu';
export interface IBaseProps {
    className?: string;
    group?: string;
    instanceId?: string | string[];
    buttonType?: ButtonType;
    orientation?: 'horizontal' | 'vertical';
}
declare const _default: React.ComponentClass<IBaseProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>>;
export default _default;
