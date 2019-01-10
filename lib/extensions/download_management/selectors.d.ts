import { IState } from '../../types/IState';
import { OutputSelector } from 'reselect';
import { ICacheObject, OutputParametricSelector, ParametricSelector } from 're-reselect';
export declare const downloadPath: OutputSelector<any, string, (inPath: string, inGameMode: string) => string>;
export declare const downloadPathForGame: ParametricSelector<IState, string, string> & {
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
