import { IState } from '../../types/IState';
export declare const installPath: ((state: any) => string) & {
    resultFunc: (res1: {
        [gameId: string]: string;
    }, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
};
export declare const installPathForGame: any;
export declare const currentActivator: (state: IState) => string;
