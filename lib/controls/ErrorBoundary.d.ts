import * as React from 'react';
import { WithTranslation } from 'react-i18next';
export declare type CBFunction = (...args: any[]) => void;
export interface IErrorContext {
    safeCB: (cb: CBFunction, dependencyList?: any[]) => CBFunction;
}
export declare const ErrorContext: React.Context<IErrorContext>;
export interface IErrorBoundaryProps extends WithTranslation {
    visible?: boolean;
    onHide?: () => void;
    className?: string;
    canDisplayError?: boolean;
}
declare const _default: any;
export default _default;
/**
 * Higher-Order-Component that provides the component with a safeCB callback wrapper
 * which will get all exceptions from the callback forwarded to the nearest ErrorBoundary
 * so that they get reported properly instead of remaining unhandled.
 */
export declare function safeCallbacks<T, S>(ComponentToWrap: React.ComponentType<React.PropsWithChildren<T>>): React.ComponentType<Omit<T, keyof IErrorContext>>;
