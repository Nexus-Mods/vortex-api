import * as reduxAct from 'redux-act';
/**
 * change the mod install path. Supports placeholders
 */
export declare const setInstallPath: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    path: string;
}, {}>;
/**
 * sets the activator to use for this game
 */
export declare const setActivator: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    activatorId: string;
}, {}>;
export declare const setShowModDropzone: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
export declare const setConfirmPurge: reduxAct.ComplexActionCreator1<boolean, boolean, {}>;
