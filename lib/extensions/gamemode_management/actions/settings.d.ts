import type { IDiscoveredTool } from "../../../types/IDiscoveredTool";
import type { IDiscoveryResult } from "../types/IDiscoveryResult";
/**
 * add info about a discovered game
 */
export declare const addDiscoveredGame: import("redux-act").ComplexActionCreator2<string, IDiscoveryResult, {
    id: string;
    result: IDiscoveryResult;
}, {}>;
export declare const clearDiscoveredGame: import("redux-act").ComplexActionCreator1<string, {
    id: string;
}, {}>;
/**
 * override the path of a game that's already been discovered
 */
export declare const setGamePath: import("redux-act").ComplexActionCreator4<string, string, string, string, {
    gameId: string;
    gamePath: string;
    store: string;
    exePath: string;
}, {}>;
/**
 * add info about a discovered tool
 */
export declare const addDiscoveredTool: import("redux-act").ComplexActionCreator4<string, string, IDiscoveredTool, boolean, {
    gameId: string;
    toolId: string;
    result: IDiscoveredTool;
    manual: boolean;
}, {}>;
/**
 * set visibility of a tool. Tools that have been added by the user will be removed entirely whereas
 * discovered tools (those where we have code to discover them) are merely hidden
 */
export declare const setToolVisible: import("redux-act").ComplexActionCreator3<string, string, boolean, {
    gameId: string;
    toolId: string;
    visible: boolean;
}, {}>;
/**
 * change parameters for a game (i.e. call arguments, environment, ...)
 */
export declare const setGameParameters: import("redux-act").ComplexActionCreator2<string, any, {
    gameId: string;
    parameters: any;
}, {}>;
/**
 * hide or unhide a game
 */
export declare const setGameHidden: import("redux-act").ComplexActionCreator2<string, boolean, {
    gameId: string;
    hidden: boolean;
}, {}>;
export declare const setGameSearchPaths: import("redux-act").ComplexActionCreator1<string[], string[], {}>;
export declare const setPickerLayout: import("redux-act").ComplexActionCreator1<"list" | "small" | "large", {
    layout: "list" | "small" | "large";
}, {}>;
export declare const setSortManaged: import("redux-act").ComplexActionCreator1<string, string, {}>;
export declare const setSortUnmanaged: import("redux-act").ComplexActionCreator1<string, string, {}>;
