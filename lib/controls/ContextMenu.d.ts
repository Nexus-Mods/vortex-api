import { TFunction } from '../util/i18n';
import { IActionDefinitionEx } from './ActionControl';
import * as React from 'react';
export interface IMenuActionProps {
    t: TFunction;
    id: string;
    action: IActionDefinitionEx;
    instanceId: string;
    onTrigger?: () => void;
}
export interface IContextPosition {
    x: number;
    y: number;
}
export interface IContextMenuProps {
    t?: TFunction;
    position?: IContextPosition;
    anchor?: HTMLElement;
    visible: boolean;
    onHide: () => void;
    instanceId: string;
    actions?: IActionDefinitionEx[];
    className?: string;
    onTrigger?: () => void;
}
declare const _default: React.ComponentClass<IContextMenuProps, any>;
export default _default;
