import { IActionDefinition } from '../types/IActionDefinition';
import * as React from 'react';
export interface IActionControlProps {
    instanceId?: string | string[];
    filter?: (action: IActionDefinition) => boolean;
    showAll?: boolean;
}
export interface IExtensionProps {
    objects: IActionDefinition[];
}
export interface IActionDefinitionEx extends IActionDefinition {
    show: boolean | string;
    subMenus?: IActionDefinitionEx[] | (() => IActionDefinitionEx[]);
}
declare const _default: React.ComponentClass<IActionControlProps, any>;
export default _default;
