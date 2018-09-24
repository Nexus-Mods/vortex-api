/// <reference types="react" />
import { IActionDefinitionEx } from './ActionControl';
import * as React from 'react';
export interface IMenuActionProps {
    id: string;
    action: IActionDefinitionEx;
    instanceId: string | string[];
}
export interface IContextMenuProps {
    position: {
        x: number;
        y: number;
    };
    visible: boolean;
    onHide: () => void;
    instanceId: string;
    actions?: IActionDefinitionEx[];
}
declare const _default: React.ComponentClass<IContextMenuProps>;
export default _default;
