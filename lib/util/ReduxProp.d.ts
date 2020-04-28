/// <reference types="react" />
import { IExtensionApi } from '../types/IExtensionContext';
declare class ReduxProp<T> {
    private mInputs;
    private mFunc;
    private mApi;
    private mSubscribers;
    private mUnsubscribe;
    constructor(api: IExtensionApi, inputs: string[][], func: (...args: any[]) => T);
    attach(component: React.Component<any, any>): void;
    detach(component: React.Component<any, any>): void;
    calculate(): T;
    private subscribe;
    private unsubscribe;
}
export default ReduxProp;
