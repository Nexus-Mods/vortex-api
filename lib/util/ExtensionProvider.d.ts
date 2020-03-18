import ExtensionManager from './ExtensionManager';
import { IExtendedProps, IExtensibleProps } from '../types/IExtensionProvider';
import * as React from 'react';
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare const ExtensionContext: React.Context<{}>;
export interface IExtensionProps {
    extensions: ExtensionManager;
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
