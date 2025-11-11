import { IMod, IState } from '../../types/IState';
export declare const installPath: ((state: IState) => string) & import("reselect").OutputSelectorFields<(args_0: {
    [gameId: string]: string;
}, args_1: string) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const installPathForGame: import("re-reselect").ParametricSelector<IState, string, string> & {
    resultFunc: (res1: string, res2: string) => string;
    dependencies: [import("re-reselect").ParametricSelector<IState, string, string>, import("re-reselect").ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => import("re-reselect").OutputParametricSelector<IState, string, string, (res1: string, res2: string) => string, [import("re-reselect").ParametricSelector<IState, string, string>, import("re-reselect").ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
export declare const currentActivator: ((state: IState) => string) & import("reselect").OutputSelectorFields<(args_0: {
    [gameId: string]: string;
}, args_1: string) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const activatorForGame: import("re-reselect").ParametricSelector<IState, string, string> & {
    resultFunc: (res1: {
        [gameId: string]: string;
    }, res2: string) => string;
    dependencies: [import("re-reselect").ParametricSelector<IState, string, {
        [gameId: string]: string;
    }>, import("re-reselect").ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => import("re-reselect").OutputParametricSelector<IState, string, string, (res1: {
        [gameId: string]: string;
    }, res2: string) => string, [import("re-reselect").ParametricSelector<IState, string, {
        [gameId: string]: string;
    }>, import("re-reselect").ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
interface INeedToDeployMap {
    [gameId: string]: boolean;
}
export declare const needToDeploy: ((state: IState) => boolean) & import("reselect").OutputSelectorFields<(args_0: {
    [gameId: string]: boolean;
}, args_1: string) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const needToDeployForGame: import("re-reselect").ParametricSelector<IState, string, boolean> & {
    resultFunc: (res1: INeedToDeployMap, res2: string) => boolean;
    dependencies: [import("re-reselect").ParametricSelector<IState, string, INeedToDeployMap>, import("re-reselect").ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => import("re-reselect").OutputParametricSelector<IState, string, boolean, (res1: INeedToDeployMap, res2: string) => boolean, [import("re-reselect").ParametricSelector<IState, string, INeedToDeployMap>, import("re-reselect").ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
export declare const modPathsForGame: ((state: IState, gameId: string) => {
    [typeId: string]: string;
}) & import("reselect").OutputSelectorFields<(args_0: {}, args_1: string) => {
    [typeId: string]: string;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const modsForGame: (state: IState, gameId: string) => {
    [modId: string]: IMod;
};
export declare const modsForActiveGame: ((state: IState) => {
    [modId: string]: IMod;
}) & import("reselect").OutputSelectorFields<(args_0: string, args_1: IState) => {
    [modId: string]: IMod;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const getMod: ((state: IState, gameId: string, modId: string) => IMod) & import("reselect").OutputSelectorFields<(args_0: {
    [modId: string]: IMod;
}, args_1: string) => IMod, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const getModInstallPath: ((state: IState, gameId: string, modId: string) => string) & import("reselect").OutputSelectorFields<(args_0: IMod, args_1: string) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export {};
