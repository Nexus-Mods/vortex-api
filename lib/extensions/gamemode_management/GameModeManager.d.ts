import type { IExtensionApi } from "../../types/IExtensionContext";
import type { IGame } from "../../types/IGame";
import type { IGameStore } from "../../types/IGameStore";
import type { IState } from "../../types/IState";
import type { IExtensionDownloadInfo } from "../../types/extensions";
import PromiseBB from "bluebird";
import type * as Redux from "redux";
export interface IGameStub {
    ext: IExtensionDownloadInfo;
    game: IGame;
}
/**
 * discovers game modes
 *
 * @class GameModeManager
 */
declare class GameModeManager {
    private mApi;
    private mStore;
    private mKnownGames;
    private mGameStubs;
    private mKnownGameStores;
    private mActiveSearch;
    private mOnGameModeActivated;
    constructor(api: IExtensionApi, extensionGames: IGame[], gameStubs: IGameStub[], gameStoreExtensions: IGameStore[], onGameModeActivated: (mode: string) => void);
    /**
     * attach this manager to the specified store
     *
     * @param {Redux.Store<IStateEx>} store
     *
     * @memberOf GameModeManager
     */
    attachToStore(store: Redux.Store<IState>): void;
    /**
     * update the game mode being managed
     *
     * @param {string} newMode
     *
     * @memberOf GameModeManager
     */
    setGameMode(oldMode: string, newMode: string, profileId: string): PromiseBB<void>;
    /**
     * prepare change to a different game mode
     *
     * @param {string} gameMode
     * @returns {PromiseBB<void>}
     *
     * @memberOf GameModeManager
     */
    setupGameMode(gameMode: string): PromiseBB<void>;
    get games(): IGame[];
    get stubs(): IGameStub[];
    get gameStores(): IGameStore[];
    /**
     * starts game discovery, only using the search function from the game
     * extension
     *
     * @memberOf GameModeManager
     */
    startQuickDiscovery(games?: IGame[]): PromiseBB<string[]>;
    startToolDiscovery(gameId: string): PromiseBB<void>;
    isSearching(): boolean;
    /**
     * start game discovery using known files
     *
     * @memberOf GameModeManager
     */
    startSearchDiscovery(searchPaths: string[]): void;
    /**
     * stop search discovery
     *
     * @memberOf GameModeManager
     */
    stopSearchDiscovery(): void;
    private postDiscovery;
    private ensureWritable;
    private reloadStoreGames;
    private isValidGame;
    private storeGame;
    private storeTool;
    private onDiscoveredTool;
    private onDiscoveredGame;
    private onError;
}
export default GameModeManager;
