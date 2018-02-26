import * as reduxAct from 'redux-act';
export declare const setGameInfo: reduxAct.ComplexActionCreator4<string, string, number, {
    key: string;
    title: string;
    value: any;
}[], {
    gameId: string;
    provider: string;
    expires: number;
    values: {
        key: string;
        title: string;
        value: any;
    }[];
}, {}>;
