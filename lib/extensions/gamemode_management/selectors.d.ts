import { IDiscoveryResult } from './types/IDiscoveryResult';
import { IGameStored } from './types/IGameStored';
export declare function knownGames(state: any): IGameStored[];
export declare const currentGame: import("../../../../../Work/Vortex_0_15/node_modules/reselect").OutputSelector<any, IGameStored, (res1: IGameStored[], res2: string) => IGameStored>;
export declare const gameById: import("../../../../../Work/Vortex_0_15/node_modules/re-reselect").ParametricSelector<any, string, IGameStored> & {
    resultFunc: (res1: IGameStored[], res2: string) => IGameStored;
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: any, props: string, ...args: any[]) => import("../../../../../Work/Vortex_0_15/node_modules/re-reselect").OutputParametricSelector<any, string, IGameStored, (res1: IGameStored[], res2: string) => IGameStored>;
    removeMatchingSelector: (state: any, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: IGameStored[], res2: string) => IGameStored;
    cache: import("../../../../../Work/Vortex_0_15/node_modules/re-reselect").ICacheObject;
};
/**
 * return the discovery information about a game
 *
 * @export
 * @param {*} state
 * @returns {IDiscoveryResult}
 */
export declare function currentGameDiscovery(state: any): IDiscoveryResult;
export declare function gameName(state: any, gameId: string): string;
