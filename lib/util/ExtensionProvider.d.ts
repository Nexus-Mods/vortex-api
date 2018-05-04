/// <reference types="react" />
import ExtensionManager from './ExtensionManager';
import * as React from 'react';
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
    render(): JSX.Element;
}
export interface IExtensibleProps {
    group?: string;
    staticElements?: any[];
}
/**
 * extension function. This function creates a wrapper around a component that
 * binds the extensions of a component to its props
 *
 * @export
 * @param {(React.ComponentClass<P & IExtensionProps>)} ComponentToWrap the component to wrap
 * @returns {React.ComponentClass<P>} the wrapper component
 */
export declare function extend(registerFunc: (...args) => void, groupProp?: string): <P, S>(ComponentToWrap: React.ComponentClass<P>) => any;
