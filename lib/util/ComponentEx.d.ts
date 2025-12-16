import * as React from "react";
import { IComponentContext } from "../types/IComponentContext";
import { WithTranslation } from "react-i18next";
export { connect } from "react-redux";
export { extend } from "./ExtensionProvider";
declare const translate: any;
export { translate };
export declare class StateProxyHandler<T extends object> implements ProxyHandler<T> {
    private mComponent;
    private mPath;
    private mBaseObject;
    private mParent;
    private mSubProxies;
    private mDelayed;
    private mDelayedTimer;
    constructor(component: ComponentEx<any, T> | PureComponentEx<any, T>, baseObject: T, parent: StateProxyHandler<T>, objPath: string[], delayed: boolean);
    has(target: T, key: PropertyKey): boolean;
    get(target: T, key: PropertyKey): any;
    deleteProperty(target: T, key: PropertyKey): boolean;
    set(target: T, key: PropertyKey, value: any, receiver: any): boolean;
    private baseObject;
    private setBaseObject;
    private derive;
}
/**
 * convenience extension for React.Component that adds support for the
 * i18n library.
 *
 * This whole module is just here to reduce the code required for "decorated"
 * components.
 *
 * @export
 * @class ComponentEx
 * @extends {(React.Component<P & II18NProps, S>)}
 * @template P
 * @template S
 */
export declare class ComponentEx<P, S extends object> extends React.Component<P & Partial<WithTranslation>, S> {
    static contextTypes: React.ValidationMap<any>;
    context: IComponentContext;
    nextState: S;
    protected initState(value: S, delayed?: boolean): void;
}
export declare class PureComponentEx<P, S extends object> extends React.PureComponent<P & Partial<WithTranslation>, S> {
    static contextTypes: React.ValidationMap<any>;
    context: IComponentContext;
    nextState: S;
    protected initState(value: S, delayed?: boolean): void;
}
