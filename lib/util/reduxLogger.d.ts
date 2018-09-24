import * as Redux from 'redux';
export declare function reduxLogger(): (storeIn: Redux.Store<any, Redux.AnyAction>) => (next: Redux.Dispatch<Redux.AnyAction>) => <A extends Redux.Action<any>>(action: A) => A;
export interface ILog {
    action: {
        id: string;
        payload: any;
    };
    delta: any;
}
export declare function getReduxLog(): Promise<ILog[]>;
