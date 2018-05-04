/// <reference types="react" />
import { IActionDefinition } from '../types/IActionDefinition';
import * as React from 'react';
export interface IActionControlProps {
    instanceId?: string | string[];
    filter?: (action: IActionDefinition) => boolean;
}
export interface IExtensionProps {
    objects: IActionDefinition[];
}
export interface IActionDefinitionEx extends IActionDefinition {
    show: boolean | string;
}
declare const _default: React.ComponentClass<IActionControlProps>;
export default _default;
