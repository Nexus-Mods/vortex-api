import * as React from 'react';
export interface IExtensibleControlProps {
    wrapperProps?: any;
}
interface IWrapperProps {
    priority: number;
    wrapper: React.ComponentType<{}>;
}
interface IExtensionProps {
    objects: IWrapperProps[];
}
declare type IProps = IExtensibleControlProps & IExtensionProps;
declare const _default: React.ComponentType<Pick<IProps, "wrapperProps"> & import("../types/IExtensionProvider").IExtensibleProps>;
export default _default;
