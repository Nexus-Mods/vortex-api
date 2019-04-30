import ExtensionManager from './ExtensionManager';
import * as React from 'react';
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export interface IExtensionProps {
    extensions: ExtensionManager;
}
/**
 * provider for ui extensions. This makes extensions available to
 * to extensible components
 *
 * @export
 * @class ExtensionProvider
 * @extends {React.Component<IExtensionProps, {}>}
 */
export declare class ExtensionProvider extends React.Component<IExtensionProps, {}> {
    private static childContextTypes;
    getChildContext(): any;
    render(): string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)> | React.ReactPortal;
}
export interface IExtensibleProps {
    group?: string;
    staticElements?: any[];
}
export interface IExtendedProps {
    objects: any[];
}
/**
 * extension function. This function creates a wrapper around a component that
 * binds the extensions of a component to its props
 *
 * @export
 * @param {(React.ComponentClass<P & IExtensionProps>)} ComponentToWrap the component to wrap
 * @returns {React.ComponentClass<P>} the wrapper component
 */
export declare function extend(registerFunc: (...args: any[]) => void, groupProp?: string): <P extends IExtendedProps>(component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof IExtendedProps> & IExtensibleProps>;
export {};
