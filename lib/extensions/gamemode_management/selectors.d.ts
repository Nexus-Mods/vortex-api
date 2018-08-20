import { IDiscoveryResult } from './types/IDiscoveryResult';
import { IGameStored } from './types/IGameStored';
export declare function knownGames(state: any): IGameStored[];
export declare const currentGame: import("../../../../../Work/Vortex_0_15/node_modules/reselect").OutputSelector<any, IGameStored, (res1: IGameStored[], res2: string) => IGameStored>;
/**
 * return the discovery information about a game
 *
 * @export
 * @param {*} state
 * @returns {IDiscoveryResult}
 */
export declare function currentGameDiscovery(state: any): IDiscoveryResult;
export declare function gameName(state: any, gameId: string): string;
