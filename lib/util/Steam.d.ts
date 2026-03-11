import PromiseBB from "bluebird";
import type { IExecInfo, IGameStore, IGameStoreEntry } from "../types/api";
import type { IExtensionApi } from "../types/IExtensionContext";
export interface ISteamEntry extends IGameStoreEntry {
    manifestData?: any;
    usesProton?: boolean;
    compatDataPath?: string;
    protonPath?: string;
}
export declare class GameNotFound extends Error {
    private mSearch;
    constructor(search: string);
    get search(): any;
}
/**
 * base class to interact with local steam installation
 * @class Steam
 */
declare class Steam implements IGameStore {
    id: string;
    name: string;
    priority: number;
    private mBaseFolder;
    private mCache;
    constructor();
    /**
     * find the first game that matches the specified name pattern
     */
    findByName(namePattern: string): PromiseBB<ISteamEntry>;
    launchGame(appInfo: any, api?: IExtensionApi): PromiseBB<void>;
    getPosixPath(appInfo: any): PromiseBB<string>;
    getExecInfo(appInfo: any): PromiseBB<IExecInfo>;
    /**
     * find the first game with the specified appid or one of the specified appids
     */
    findByAppId(appId: string | string[]): PromiseBB<ISteamEntry>;
    allGames(): PromiseBB<ISteamEntry[]>;
    getGameStorePath(): PromiseBB<string | undefined>;
    reloadGames(): PromiseBB<void>;
    identifyGame(gamePath: string, fallback: (gamePath: string) => PromiseLike<boolean>): PromiseBB<boolean>;
    private isCustomExecObject;
    private resolveSteamPaths;
    private parseManifests;
    /**
     * Run a Windows tool through Proton using the game's prefix
     */
    runToolWithProton(api: IExtensionApi, exePath: string, args: string[], options: any, gameEntry: ISteamEntry): Promise<void>;
}
declare const instance: Steam;
export default instance;
export { Steam };
