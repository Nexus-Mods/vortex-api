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
export declare const clearDiscoveredGame: reduxAct.ComplexActionCreator1<string, {
    id: string;
}, {}>;
/**
 * override the path of a game that's already been discovered
 */
export declare const setGamePath: reduxAct.ComplexActionCreator4<string, string, string, string, {
    gameId: string;
    gamePath: string;
    store: string;
    exePath: string;
}, {}>;
/**
 * add info about a discovered tool
 */
export declare const addDiscoveredTool: reduxAct.ComplexActionCreator4<string, string, IDiscoveredTool, boolean, {
    gameId: string;
    toolId: string;
    result: IDiscoveredTool;
    manual: boolean;
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
export declare const setGameSearchPaths: reduxAct.ComplexActionCreator1<string[], string[], {}>;
export declare const setPickerLayout: reduxAct.ComplexActionCreator1<"list" | "small" | "large", {
    layout: "list" | "small" | "large";
}, {}>;
export declare const setSortManaged: reduxAct.ComplexActionCreator1<string, string, {}>;
export declare const setSortUnmanaged: reduxAct.ComplexActionCreator1<string, string, {}>;
