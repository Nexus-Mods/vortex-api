import * as React from "react";
import type { IExtendedProps, IExtensibleProps } from "./types/IExtensionProvider";
import ExtensionManager from "./ExtensionManager";
/**
 * Hook to get extension objects for a given register function.
 * This is the hook equivalent of the `extend` HOC.
 *
 * @param registerFunc - The register function (e.g., registerSettings)
 * @param staticElements - Optional static elements to merge with extensions
 * @param group - Optional group identifier for grouped extensions
 * @param addExtInfo - Whether to add extension info to the callback
 * @returns Array of collected extension objects
 */
export declare function useExtensionObjects<T>(registerFunc: (...args: unknown[]) => T | undefined, staticElements?: T[], group?: string, addExtInfo?: boolean): T[];
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare const ExtensionContext: React.Context<ExtensionManager>;
export declare const useExtensionContext: () => ExtensionManager;
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
export declare function extend(registerFunc: (...args: any[]) => void, groupProp?: string, addExtInfo?: boolean): <P extends IExtendedProps>(component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof IExtendedProps> & IExtensibleProps>;
export {};
