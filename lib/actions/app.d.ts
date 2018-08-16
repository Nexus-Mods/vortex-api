import * as reduxAct from 'redux-act';
export declare const setStateVersion: reduxAct.ComplexActionCreator1<{}, {}, {}>;
export declare const setApplicationVersion: reduxAct.ComplexActionCreator1<{}, {}, {}>;
export declare const setExtensionEnabled: reduxAct.ComplexActionCreator2<string, boolean, {
    extensionId: string;
    enabled: boolean;
}, {}>;
export declare const removeExtension: reduxAct.ComplexActionCreator1<any, any, {}>;
export declare const forgetExtension: reduxAct.ComplexActionCreator1<any, any, {}>;
export declare const setInstanceId: reduxAct.ComplexActionCreator1<any, any, {}>;
export declare const setWarnedAdmin: reduxAct.ComplexActionCreator1<any, any, {}>;
