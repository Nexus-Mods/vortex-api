import { PropsCallback } from '../types/IExtensionContext';
import * as React from 'react';
interface IExtOverlay {
    id: string;
    component: React.ComponentType<any>;
    props: PropsCallback;
}
export interface IBaseProps {
}
export interface IExtendedProps {
    objects: IExtOverlay[];
}
declare const _default: React.ComponentClass<IBaseProps>;
export default _default;
