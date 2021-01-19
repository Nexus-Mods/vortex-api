import { IActionDefinitionEx } from './ActionControl';
import * as React from 'react';
import { TFunction } from '../util/i18n';
export interface IMenuActionProps {
    t: TFunction;
    id: string;
    action: IActionDefinitionEx;
    instanceId: string | string[];
}
export interface IContextPosition {
    x: number;
    y: number;
}
export interface IContextMenuProps {
    t?: TFunction;
    position?: IContextPosition;
    visible: boolean;
    onHide: () => void;
    instanceId: string;
    actions?: IActionDefinitionEx[];
}
declare const _default: React.ComponentClass<IContextMenuProps, any>;
export default _default;
