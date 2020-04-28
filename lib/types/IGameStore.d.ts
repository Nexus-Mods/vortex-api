import { IExecInfo } from './IExecInfo';
import { IExtensionApi } from './IExtensionContext';
import { IGameStoreEntry } from './IGameStoreEntry';
import Promise from 'bluebird';
export declare type GameLaunchType = 'gamestore' | 'commandline';
export declare class GameStoreNotFound extends Error {
    private mName;
    constructor(name: any);
    get storeName(): string;
}
export declare class GameEntryNotFound extends Error {
    private mName;
    private mStore;
    private mExistingNames;
    constructor(name: string, store: string, existing?: string[]);
    get gameName(): string;
    get storeName(): string;
    get existingGames(): string[];
}
export interface ICustomExecutionInfo {
    appId: string;
    parameters: string[];
    launchType?: GameLaunchType;
}
/**
 * interface for game store launcher extensions
 *
 * @interface IGameStore
 */
export interface IGameStore {
    /**
     * This launcher's id.
     */
    id: string;
    /**
     * Returns all recognized/installed games which are currently
     *  installed with this game store/launcher.
     */
    allGames: () => Promise<IGameStoreEntry[]>;
    /**
     * Attempt to find a game entry using its game store Id/Ids.
     *
     * @param appId of the game entry. This is obviously game store specific.
     */
    findByAppId: (appId: string | string[]) => Promise<IGameStoreEntry>;
    /**
     * Attempt to find a game store entry using the game's name.
     *
     * @param appName the game name which the game store uses to identify this game.
     */
    findByName: (appName: string) => Promise<IGameStoreEntry>;
    /**
     * Determine whether the game has been installed by this game store launcher.
     *  returns true if the game store installed this game, false otherwise.
     *
     * @param name of the game we're looking for.
     */
    isGameInstalled?: (name: string) => Promise<boolean>;
    /**
     * Some launchers may support Posix paths when attempting to launch a
     *  game, if set, the launcher will be expected to generate a valid
     *  posix path which Vortex can use to start the game.
     *
     * Please note that Vortex will not be able to tell if the game
     *  actually launched successfully when using Posix Paths; reason
     *  why this should only be used as a last resort.
     *
     * @param name of the game we want the posix path for.
     */
    getPosixPath?: (name: string) => Promise<string>;
    /**
     * Game store may support command line arguments when launching the game.
     *  Function will return the path to the game store's executable and any required
     *  arguments to launch the game.
     *
     * @param appId - Whatever the game store uses to identify a game.
     */
    getExecInfo?: (appId: any) => Promise<IExecInfo>;
    /**
     * Generally the game store helper should be able to launch games directly.
     *  This functor allows game stores to define their own custom start up logic
     *  if needed. e.g. gamestore-xbox
     */
    launchGameStore?: (api: IExtensionApi, parameters?: string[]) => Promise<void>;
    /**
     * Returns the full path to the launcher's executable.
     */
    getGameStorePath?: () => Promise<string>;
    /**
     * Launches the game using this game launcher.
     * @param appId whatever the game store uses to identify a game.
     * @param api gives access to API functions if needed.
     */
    launchGame: (appId: any, api?: IExtensionApi) => Promise<void>;
}
