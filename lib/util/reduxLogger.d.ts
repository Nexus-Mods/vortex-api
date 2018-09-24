import * as Redux from 'redux';
export declare function reduxLogger(): (storeIn: Redux.Store<any>) => (next: any) => <A extends Redux.Action>(action: A) => A;
export interface ILog {
    action: {
        id: string;
        payload: any;
    };
    delta: any;
}
export declare function getReduxLog(): Promise<ILog[]>;
