/// <reference types="react" />
import { IExtensionApi } from '../types/IExtensionContext';
import * as React from 'react';
export interface IComponentContext {
    api: IExtensionApi;
    headerPortal: () => HTMLElement;
    page: string;
}
declare const _default: React.ComponentClass<{}>;
export default _default;
