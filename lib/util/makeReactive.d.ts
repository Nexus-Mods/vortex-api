export declare class ObserverProxyHandler<T extends object> implements ProxyHandler<T> {
    private mSubscribers;
    has(target: T, key: PropertyKey): boolean;
    get(target: T, key: PropertyKey): any;
    set(target: T, key: PropertyKey, value: any, receiver: any): boolean;
    private attach;
    private detach;
}
/**
 * create a proxy around the specified object that forces any
 * react component that has this proxy as a prop to update whenever
 * the object is changed (mutated)
 *
 * TODO: The implementation isn't particularly efficient (see comment in
 *   ExtensionGate.tsx), I hope we can fix that someday without changing
 *   the api
 *
 * @template T
 * @param {T} value
 * @returns {T}
 */
declare function makeReactive<T extends object>(value: T): T;
export default makeReactive;
