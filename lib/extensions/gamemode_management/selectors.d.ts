import { IState } from '../../types/IState';
import { IDiscoveryResult } from './types/IDiscoveryResult';
import { IGameStored } from './types/IGameStored';
import { OutputSelector } from 'reselect';
import { ICacheObject, OutputParametricSelector, ParametricSelector } from 're-reselect';
export declare function knownGames(state: any): IGameStored[];
export declare const currentGame: OutputSelector<any, IGameStored, (res1: IGameStored[], res2: string) => IGameStored>;
export declare const gameById: ParametricSelector<any, string, IGameStored> & {
    resultFunc: (res1: IGameStored[], res2: string) => IGameStored;
    dependencies: [ParametricSelector<any, string, IGameStored[]>, ParametricSelector<any, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: any, props: string, ...args: any[]) => OutputParametricSelector<any, string, IGameStored, (res1: IGameStored[], res2: string) => IGameStored, [ParametricSelector<any, string, IGameStored[]>, ParametricSelector<any, string, string>]>;
    removeMatchingSelector: (state: any, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: ICacheObject;
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
export declare const discoveryByGame: ParametricSelector<IState, string, IDiscoveryResult> & {
    resultFunc: (res1: {
        [id: string]: IDiscoveryResult;
    }, res2: string) => IDiscoveryResult;
    dependencies: [ParametricSelector<IState, string, {
        [id: string]: IDiscoveryResult;
    }>, ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, IDiscoveryResult, (res1: {
        [id: string]: IDiscoveryResult;
    }, res2: string) => IDiscoveryResult, [ParametricSelector<IState, string, {
        [id: string]: IDiscoveryResult;
    }>, ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
export declare function gameName(state: any, gameId: string): string;
