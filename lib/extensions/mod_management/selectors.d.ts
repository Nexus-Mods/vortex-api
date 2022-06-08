import { IDiscoveryResult, IState } from '../../types/IState';
export declare const installPath: import("reselect").OutputSelector<any, string, (res1: {
    [gameId: string]: string;
}, res2: string) => string>;
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
export declare const currentActivator: import("reselect").OutputSelector<any, string, (res1: {
    [gameId: string]: string;
}, res2: string) => string>;
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
export declare const needToDeploy: import("reselect").OutputSelector<any, boolean, (res1: INeedToDeployMap, res2: string) => boolean>;
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
export declare const modPathsForGame: import("reselect").OutputParametricSelector<IState, string, {
    [typeId: string]: string;
}, (res1: {
    [gameId: string]: IDiscoveryResult;
}, res2: string) => {
    [typeId: string]: string;
}>;
export {};
