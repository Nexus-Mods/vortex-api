import { IState } from '../../types/IState';
import { ICacheObject, OutputParametricSelector, ParametricSelector } from 're-reselect';
import { OutputSelector } from 'reselect';
export declare const installPath: OutputSelector<any, string, (res1: {
    [gameId: string]: string;
}, res2: string) => string>;
export declare const installPathForGame: ParametricSelector<IState, string, string> & {
    resultFunc: (res1: string, res2: string) => string;
    dependencies: [ParametricSelector<IState, string, string>, ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, string, (res1: string, res2: string) => string, [ParametricSelector<IState, string, string>, ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
export declare const currentActivator: OutputSelector<any, string, (res1: {
    [gameId: string]: string;
}, res2: string) => string>;
export declare const activatorForGame: ParametricSelector<IState, string, string> & {
    resultFunc: (res1: {
        [gameId: string]: string;
    }, res2: string) => string;
    dependencies: [ParametricSelector<IState, string, {
        [gameId: string]: string;
    }>, ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, string, (res1: {
        [gameId: string]: string;
    }, res2: string) => string, [ParametricSelector<IState, string, {
        [gameId: string]: string;
    }>, ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
interface INeedToDeployMap {
    [gameId: string]: boolean;
}
export declare const needToDeploy: OutputSelector<any, boolean, (res1: INeedToDeployMap, res2: string) => boolean>;
export declare const needToDeployForGame: ParametricSelector<IState, string, boolean> & {
    resultFunc: (res1: INeedToDeployMap, res2: string) => boolean;
    dependencies: [ParametricSelector<IState, string, INeedToDeployMap>, ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, boolean, (res1: INeedToDeployMap, res2: string) => boolean, [ParametricSelector<IState, string, INeedToDeployMap>, ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
export {};
