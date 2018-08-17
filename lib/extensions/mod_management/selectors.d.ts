import { IState } from '../../types/IState';
import { ICacheObject } from 're-reselect';
export declare const installPath: import("../../../../../Projects/Vortex/node_modules/reselect").OutputSelector<any, string, (res1: {
    [gameId: string]: string;
}, res2: string) => string>;
export declare const installPathForGame: import("../../../../../Projects/Vortex/node_modules/re-reselect").ParametricSelector<IState, string, string> & {
    resultFunc: (res1: string, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => import("../../../../../Projects/Vortex/node_modules/re-reselect").OutputParametricSelector<IState, string, string, (res1: string, res2: string) => string>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: string, res2: string) => string;
    cache: ICacheObject;
};
export declare const currentActivator: (state: IState) => string;
