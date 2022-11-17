import { IActionDefinition } from '../types/IActionDefinition';
import { IExtensibleProps } from '../types/IExtensionProvider';
import { TFunction } from '../util/i18n';
import { IActionControlProps } from './ActionControl';
import * as React from 'react';
export type ButtonType = 'text' | 'icon' | 'both' | 'menu';
export interface IBaseProps {
    className?: string;
    group?: string;
    instanceId?: string | string[];
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
    buttonType?: ButtonType;
    orientation?: 'horizontal' | 'vertical';
    collapse?: boolean | 'force';
    groupByIcon?: boolean;
    filter?: (action: IActionDefinition) => boolean;
    icon?: string;
    pullRight?: boolean;
    clickAnywhere?: boolean;
    showAll?: boolean;
    t: TFunction;
}
type ExportType = IBaseProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>;
declare const _default: React.ComponentClass<ExportType, any>;
export default _default;
