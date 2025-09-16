export declare const setPrimaryTool: import("redux-act").ComplexActionCreator2<string, string, {
    gameId: string;
    toolId: string;
}, {}>;
export declare const setToolOrder: import("redux-act").ComplexActionCreator2<string, string[], {
    gameId: string;
    tools: string[];
}, {}>;
export declare const setToolValid: import("redux-act").ComplexActionCreator3<string, string, boolean, {
    gameId: string;
    toolId: string;
    valid: boolean;
}, {}>;
