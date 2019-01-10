import { IState } from '../../types/IState';
import { IDiscoveryResult } from './types/IDiscoveryResult';
import { IGameStored } from './types/IGameStored';
import { OutputSelector } from 'reselect';
import { ICacheObject, OutputParametricSelector, ParametricSelector } from 're-reselect';
export declare function knownGames(state: any): IGameStored[];
export declare const currentGame: OutputSelector<any, IGameStored, (res1: IGameStored[], res2: string) => IGameStored>;
export declare const gameById: ParametricSelector<any, string, IGameStored> & {
    resultFunc: (res1: IGameStored[], res2: string) => IGameStored;
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: any, props: string, ...args: any[]) => OutputParametricSelector<any, string, IGameStored, (res1: IGameStored[], res2: string) => IGameStored>;
    removeMatchingSelector: (state: any, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: IGameStored[], res2: string) => IGameStored;
    cache: ICacheObject;
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
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, IDiscoveryResult, (res1: {
        [id: string]: IDiscoveryResult;
    }, res2: string) => IDiscoveryResult>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: {
        [id: string]: IDiscoveryResult;
    }, res2: string) => IDiscoveryResult;
    cache: ICacheObject;
};
export declare function gameName(state: any, gameId: string): string;
