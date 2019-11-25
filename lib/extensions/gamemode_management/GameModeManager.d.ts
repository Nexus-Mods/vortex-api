import { IGame } from '../../types/IGame';
import { IGameStore } from '../../types/IGameStore';
import { IState } from '../../types/IState';
import * as Promise from 'bluebird';
import * as Redux from 'redux';
/**
 * discovers game modes
 *
 * @class GameModeManager
 */
declare class GameModeManager {
    private mStore;
    private mKnownGames;
    private mKnownGameStores;
    private mActiveSearch;
    private mOnGameModeActivated;
    constructor(extensionGames: IGame[], gameStoreExtensions: IGameStore[], onGameModeActivated: (mode: string) => void);
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
    setGameMode(oldMode: string, newMode: string, profileId: any): Promise<void>;
    /**
     * prepare change to a different game mode
     *
     * @param {string} gameMode
     * @returns {Promise<void>}
     *
     * @memberOf GameModeManager
     */
    setupGameMode(gameMode: string): Promise<void>;
    readonly games: IGame[];
    readonly gameStores: IGameStore[];
    /**
     * starts game discovery, only using the search function from the game
     * extension
     *
     * @memberOf GameModeManager
     */
    startQuickDiscovery(): Promise<string[]>;
    isSearching(): boolean;
    /**
     * start game discovery using known files
     *
     * @memberOf GameModeManager
     */
    startSearchDiscovery(): void;
    /**
     * stop search discovery
     *
     * @memberOf GameModeManager
     */
    stopSearchDiscovery(): void;
    private ensureWritable;
    private storeGame;
    private storeTool;
    private onDiscoveredTool;
    private onDiscoveredGame;
    private onError;
}
export default GameModeManager;
