import { IState } from '../../types/IState';
import { OutputSelector } from 'reselect';
import { ICacheObject, OutputParametricSelector, ParametricSelector } from 're-reselect';
export declare const installPath: OutputSelector<any, string, (res1: {
    [gameId: string]: string;
}, res2: string) => string>;
export declare const installPathForGame: ParametricSelector<IState, string, string> & {
    resultFunc: (res1: string, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, string, (res1: string, res2: string) => string>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: string, res2: string) => string;
    cache: ICacheObject;
};
export declare const currentActivator: (state: IState) => string;
export declare const needToDeploy: OutputSelector<any, boolean, (res1: {
    [gameId: string]: boolean;
}, res2: string) => boolean>;
export declare const needToDeployForGame: ParametricSelector<IState, string, boolean> & {
    resultFunc: (res1: {
        [gameId: string]: boolean;
    }, res2: string) => boolean;
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, boolean, (res1: {
        [gameId: string]: boolean;
    }, res2: string) => boolean>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: {
        [gameId: string]: boolean;
    }, res2: string) => boolean;
    cache: ICacheObject;
};
