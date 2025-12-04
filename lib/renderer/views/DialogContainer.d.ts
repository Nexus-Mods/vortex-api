import { PropsCallback } from '../../types/IExtensionContext';
import * as React from 'react';
interface IExtDialog {
    id: string;
    component: React.ComponentType<any>;
    props: PropsCallback;
}
export interface IBaseProps {
    visibleDialog: string;
    onHideDialog: () => void;
}
export interface IExtendedProps {
    objects: IExtDialog[];
}
declare const _default: React.ComponentClass<IBaseProps>;
export default _default;
