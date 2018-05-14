import { IDiscoveredTool } from '../../../types/IDiscoveredTool';
import { IDiscoveryResult } from '../types/IDiscoveryResult';
import * as reduxAct from 'redux-act';
/**
 * add info about a discovered game
 */
export declare const addDiscoveredGame: reduxAct.ComplexActionCreator2<string, IDiscoveryResult, {
    id: string;
    result: IDiscoveryResult;
}, {}>;
/**
 * override the path of a game that's already been discovered
 */
export declare const setGamePath: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    gamePath: string;
}, {}>;
/**
 * add info about a discovered tool
 */
export declare const addDiscoveredTool: reduxAct.ComplexActionCreator3<string, string, IDiscoveredTool, {
    gameId: string;
    toolId: string;
    result: IDiscoveredTool;
}, {}>;
/**
 * set visibility of a tool. Tools that have been added by the user will be removed entirely whereas
 * discovered tools (those where we have code to discover them) are merely hidden
 */
export declare const setToolVisible: reduxAct.ComplexActionCreator3<string, string, boolean, {
    gameId: string;
    toolId: string;
    visible: boolean;
}, {}>;
/**
 * change parameters for a game (i.e. call arguments, environment, ...)
 */
export declare const setGameParameters: reduxAct.ComplexActionCreator2<string, any, {
    gameId: string;
    parameters: any;
}, {}>;
/**
 * hide or unhide a game
 */
export declare const setGameHidden: reduxAct.ComplexActionCreator2<string, boolean, {
    gameId: string;
    hidden: boolean;
}, {}>;
/**
 * add a search path (path that is searched for game installations)
 */
export declare const addSearchPath: reduxAct.ComplexActionCreator1<any, any, {}>;
export declare const clearSearchPaths: reduxAct.EmptyActionCreator;
/**
 * remove a search path
 */
export declare const removeSearchPath: reduxAct.ComplexActionCreator1<any, any, {}>;
export declare const setPickerLayout: reduxAct.ComplexActionCreator1<"small" | "list" | "large", {
    layout: "small" | "list" | "large";
}, {}>;
