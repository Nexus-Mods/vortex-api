import * as reduxAct from 'redux-act';
export declare const setPhaseCount: reduxAct.ComplexActionCreator1<{}, {}, {}>;
export declare const discoveryProgress: reduxAct.ComplexActionCreator3<number, number, string, {
    idx: number;
    percent: number;
    directory: string;
}, {}>;
export declare const discoveryFinished: reduxAct.EmptyActionCreator;
