import { IGame } from '../../../types/IGame';
import { IGameStored, IGameStoredExt } from '../../gamemode_management/types/IGameStored';
/**
 * get the nexus page id for a game
 * TODO: some games have hard-coded transformations here, should move all of that to game.details
 */
export declare function nexusGameId(game: IGameStored | IGame, fallbackGameId?: string): string;
/**
 * get our internal game id for a nexus page id
 */
export declare function convertGameIdReverse(knownGames: IGameStored[], input: string): string;
/**
 * get our internal game id for a nxm link id
 */
export declare function convertNXMIdReverse(knownGames: IGameStored[], input: string): string;
/**
 * get the nxm link id for a game
 */
export declare function toNXMId(game: IGameStoredExt, gameId: string): string;
