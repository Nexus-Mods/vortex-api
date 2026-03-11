import type { IGame } from "../../../types/IGame";
import type { IGameStore } from "../../../types/IGameStore";
import type { IExtensionDownloadInfo } from "../../../types/extensions";
export declare function getGames(): IGame[];
export declare function getGame(gameId: string): IGame;
export declare function getGameStubDownloadInfo(gameId: string): IExtensionDownloadInfo | undefined;
export declare function getGameStores(): IGameStore[];
export declare function getGameStore(id: string): IGameStore;
