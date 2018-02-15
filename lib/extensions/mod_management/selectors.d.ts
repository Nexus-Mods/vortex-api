import { IState, IStatePaths } from '../../types/IState';
export interface IPathMap {
    [gameId: string]: IStatePaths;
}
export declare const basePath: ((state: any) => string) & {
    resultFunc: (res1: IPathMap, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
};
export declare const downloadPath: ((state: any) => string) & {
    resultFunc: (res1: IPathMap, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
};
export declare const installPath: ((state: any) => string) & {
    resultFunc: (res1: IPathMap, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
};
export declare const currentActivator: (state: IState) => string;
