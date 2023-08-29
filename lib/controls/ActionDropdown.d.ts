import { IExtensibleProps } from '../types/IExtensionProvider';
import { TFunction } from '../util/i18n';
import { IActionControlProps } from './ActionControl';
import * as React from 'react';
export type ButtonType = 'text' | 'icon' | 'both' | 'menu';
export interface IBaseProps {
    t: TFunction;
    className?: string;
    group?: string;
    instanceId?: string | string[];
    buttonType?: ButtonType;
    orientation?: 'horizontal' | 'vertical';
}
type ExportType = IBaseProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>;
declare const _default: React.ComponentClass<ExportType, any>;
export default _default;
