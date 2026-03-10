import * as reduxAct from "redux-act";
/**
 * sets a profile to be activated
 */
export declare const setNextProfile: reduxAct.ComplexActionCreator1<string, {
    profileId: string;
}, {}>;
/**
 * change current profile
 * this must only be used by profile_management internally!
 */
export declare const setCurrentProfile: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    profileId: string;
}, {}>;
/**
 * clear the last known active profile for the specified game.
 * this should also only be called by profile_management internally.
 */
export declare const clearLastActiveProfile: reduxAct.ComplexActionCreator1<string, {
    gameId: string;
}, {}>;
