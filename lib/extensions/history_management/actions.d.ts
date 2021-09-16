import { IHistoryEvent } from './types';
export declare const addHistoryEvent: import("redux-act").ComplexActionCreator3<string, IHistoryEvent, number, {
    stack: string;
    event: IHistoryEvent;
    limit: number;
}, {}>;
export declare const setHistoryEvent: import("redux-act").ComplexActionCreator2<string, IHistoryEvent, {
    stack: string;
    event: IHistoryEvent;
}, {}>;
export declare const markHistoryReverted: import("redux-act").ComplexActionCreator2<string, IHistoryEvent, {
    stack: string;
    event: IHistoryEvent;
}, {}>;
export declare const showHistory: import("redux-act").ComplexActionCreator1<string, string, {}>;
