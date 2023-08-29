import { IGame } from '../../../types/IGame';
import { IGameStore } from '../../../types/IGameStore';
export declare function getGames(): IGame[];
export declare function getGame(gameId: string): IGame;
export declare function getGameStores(): IGameStore[];
export declare function getGameStore(id: string): IGameStore;
