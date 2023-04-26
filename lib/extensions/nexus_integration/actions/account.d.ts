import * as reduxAct from 'redux-act';
export declare const setUserAPIKey: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
export declare const clearOAuthCredentials: reduxAct.ComplexActionCreator1<unknown, any, {}>;
export declare const setOAuthCredentials: reduxAct.ComplexActionCreator3<string, string, string, {
    token: string;
    refreshToken: string;
    fingerprint: string;
}, {}>;
