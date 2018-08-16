import { IState } from '../../types/IState';
import { ICacheObject } from 're-reselect';
export declare const installPath: ((state: any) => string) & {
    resultFunc: (res1: {
        [gameId: string]: string;
    }, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
};
export declare const installPathForGame: ((state: IState, props: string, ...args: any[]) => string) & {
    resultFunc: (res1: string, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => ((state: IState, props: string, ...args: any[]) => string) & {
        resultFunc: (res1: string, res2: string) => string;
        recomputations: () => number;
        resetRecomputations: () => number;
    };
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: string, res2: string) => string;
    cache: ICacheObject;
};
export declare const currentActivator: (state: IState) => string;
