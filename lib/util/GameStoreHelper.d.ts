import Bluebird from "bluebird";
import type { IExtensionApi } from "../types/IExtensionContext";
import type { IGameStore } from "../types/IGameStore";
import type { IGameStoreEntry } from "../types/IGameStoreEntry";
export declare const defaultPriority = 100;
export interface IStoreQuery {
    id?: string;
    name?: string;
    prefer?: number;
}
declare class GameStoreHelper {
    private mApi;
    private mStores;
    private mStoresDict;
    getGameStore(storeId: string): IGameStore | undefined;
    isGameInstalled(id: string, storeId?: string): Bluebird<string | undefined>;
    isGameStoreInstalled(storeId: string): Bluebird<boolean>;
    registryLookup(lookup: string): Bluebird<IGameStoreEntry>;
    find: (query: IStoreQuery) => Bluebird<IGameStoreEntry[]>;
    findByName(name: string | string[], storeId?: string): Bluebird<IGameStoreEntry>;
    findByAppId(appId: string | string[], storeId?: string): Bluebird<IGameStoreEntry>;
    launchGameStore(api: IExtensionApi, gameStoreId: string, parameters?: string[], askConsent?: boolean): Bluebird<void>;
    identifyStore: (gamePath: string) => Bluebird<string>;
    reloadGames(api?: IExtensionApi): Bluebird<void>;
    /**
     * @returns list of stores, sorted by priority
     */
    storeIds(): IGameStore[];
    private isStoreRunning;
    private validInput;
    private getStores;
    /**
     * Returns a store entry for a specified pattern.
     * @param searchType dictates which functor we execute.
     * @param pattern the pattern we're looking for.
     * @param storeId optional parameter used when trying to query a specific store.
     */
    private findGameEntry;
}
declare const instance: GameStoreHelper;
export default instance;
