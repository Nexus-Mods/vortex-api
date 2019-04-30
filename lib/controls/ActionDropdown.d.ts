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
declare type ExportType = IBaseProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>;
declare const _default: React.ComponentClass<ExportType, any>;
export default _default;
