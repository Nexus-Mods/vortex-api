import { IState } from '../../types/IState';
import { IDiscoveryResult } from './types/IDiscoveryResult';
import { IGameStored } from './types/IGameStored';
export declare function knownGames(state: any): IGameStored[];
export declare const currentGame: ((state: any) => IGameStored) & import("reselect").OutputSelectorFields<(args_0: IGameStored[], args_1: string) => IGameStored, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const gameById: import("re-reselect").ParametricSelector<any, string, IGameStored> & {
    resultFunc: (res1: IGameStored[], res2: string) => IGameStored;
    dependencies: [import("re-reselect").ParametricSelector<any, string, IGameStored[]>, import("re-reselect").ParametricSelector<any, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: any, props: string, ...args: any[]) => import("re-reselect").OutputParametricSelector<any, string, IGameStored, (res1: IGameStored[], res2: string) => IGameStored, [import("re-reselect").ParametricSelector<any, string, IGameStored[]>, import("re-reselect").ParametricSelector<any, string, string>]>;
    removeMatchingSelector: (state: any, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<any, string>;
};
/**
 * return the discovery information about a game
 *
 * @export
 * @param {*} state
 * @returns {IDiscoveryResult}
 */
export declare function currentGameDiscovery(state: any): IDiscoveryResult;
export declare const discoveryByGame: import("re-reselect").ParametricSelector<IState, string, IDiscoveryResult> & {
    resultFunc: (res1: {
        [id: string]: IDiscoveryResult;
    }, res2: string) => IDiscoveryResult;
    dependencies: [import("re-reselect").ParametricSelector<IState, string, {
        [id: string]: IDiscoveryResult;
    }>, import("re-reselect").ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => import("re-reselect").OutputParametricSelector<IState, string, IDiscoveryResult, (res1: {
        [id: string]: IDiscoveryResult;
    }, res2: string) => IDiscoveryResult, [import("re-reselect").ParametricSelector<IState, string, {
        [id: string]: IDiscoveryResult;
    }>, import("re-reselect").ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
export declare function gameName(state: any, gameId: string): string;
