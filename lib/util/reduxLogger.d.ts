import * as Redux from 'redux';
export declare function reduxLogger(): (storeIn: Redux.Store<any>) => (next: Redux.Dispatch) => <A extends Redux.Action<any>>(action: A) => A;
export interface ILog {
    action: {
        type: string;
        payload: any;
    };
    delta: any;
}
export declare function getReduxLog(): Promise<ILog[]>;
