import * as Redux from 'redux';
export declare class StateError extends Error {
    private mAction;
    constructor(action: Redux.Action, message: string);
}
export declare type SanityCheck = (state: any, action: Redux.Action) => string;
export declare function reduxSanity(callback: (err: StateError) => void): (store: Redux.Store<any, Redux.AnyAction>) => (next: Redux.Dispatch<Redux.AnyAction>) => <A extends Redux.Action<any>>(action: A) => A;
export declare function registerSanityCheck(type: string, check: SanityCheck): void;
