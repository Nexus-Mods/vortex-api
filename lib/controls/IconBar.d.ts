/// <reference types="i18next" />
/// <reference types="react" />
import { IActionDefinition } from '../types/IActionDefinition';
import { IExtensibleProps } from '../util/ExtensionProvider';
import { IActionControlProps } from './ActionControl';
import * as I18next from 'i18next';
import * as React from 'react';
export declare type ButtonType = 'text' | 'icon' | 'both' | 'menu';
export interface IBaseProps {
    className?: string;
    group?: string;
    instanceId?: string | string[];
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
    buttonType?: ButtonType;
    orientation?: 'horizontal' | 'vertical';
    collapse?: boolean | 'force';
    filter?: (action: IActionDefinition) => boolean;
    icon?: string;
    pullRight?: boolean;
    clickAnywhere?: boolean;
    t: I18next.TranslationFunction;
}
declare const _default: React.ComponentClass<IBaseProps & IActionControlProps & IExtensibleProps & React.HTMLAttributes<any>>;
export default _default;
