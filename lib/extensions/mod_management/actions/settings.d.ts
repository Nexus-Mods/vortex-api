import * as reduxAct from 'redux-act';
/**
 * change a path (base, download or installation) for
 * storing things. Supports placeholders
 */
export declare const setPath: reduxAct.ComplexActionCreator3<string, string, string, {
    gameId: string;
    key: string;
    path: string;
}, {}>;
/**
 * sets the activator to use for this game
 */
export declare const setActivator: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    activatorId: string;
}, {}>;
/**
 * sets the updating mods flag
 */
export declare const setUpdatingMods: reduxAct.ComplexActionCreator2<string, boolean, {
    gameId: string;
    updatingMods: boolean;
}, {}>;
