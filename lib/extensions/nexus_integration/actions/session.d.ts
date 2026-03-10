import { IUpdateEntry } from "@nexusmods/nexus-api";
import * as reduxAct from "redux-act";
export declare const setLoginId: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
export declare const setOauthPending: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
export declare const setLoginError: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
/**
 * store last time we checked for updates
 */
export declare const setLastUpdateCheck: reduxAct.ComplexActionCreator4<string, number, number, IUpdateEntry[], {
    gameId: string;
    time: number;
    range: number;
    updateList: IUpdateEntry[];
}, {}>;
export declare const addFreeUserDLItem: reduxAct.ComplexActionCreator1<string, string, {}>;
export declare const removeFreeUserDLItem: reduxAct.ComplexActionCreator1<string, string, {}>;
