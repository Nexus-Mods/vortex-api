import type { IExtensionApi } from "./types/IExtensionContext";
/**
 * Interface for objects that can be updated when Redux state changes.
 * Works with both class components (which have forceUpdate) and
 * functional component wrappers.
 */
export interface IUpdateable {
    forceUpdate: () => void;
}
declare class ReduxProp<T> {
    private mInputs;
    private mFunc;
    private mApi;
    private mSubscribers;
    private mUnsubscribe;
    constructor(api: IExtensionApi, inputs: string[][], func: (...args: unknown[]) => T);
    attach(component: IUpdateable): void;
    detach(component: IUpdateable): void;
    calculate(): T | undefined;
    private subscribe;
    private unsubscribe;
}
export default ReduxProp;
