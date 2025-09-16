import * as reduxAct from 'redux-act';
/**
 * sets the list of known/supported games
 */
export declare const setKnownGames: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
export declare const clearGameDisabled: reduxAct.EmptyActionCreator;
export declare const setGameDisabled: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    disabledBy: string;
}, {}>;
