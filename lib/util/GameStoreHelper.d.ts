import Bluebird from 'bluebird';
import { IGameStore } from '../types/IGameStore';
import { IGameStoreEntry } from '../types/IGameStoreEntry';
import { IExtensionApi } from '../types/IExtensionContext';
declare class GameStoreHelper {
    private mStores;
    getGameStore(storeId: string): IGameStore;
    isGameInstalled(id: string, storeId?: string): Bluebird<string>;
    isGameStoreInstalled(storeId: string): Bluebird<boolean>;
    findByName(name: string | string[], storeId?: string): Bluebird<IGameStoreEntry>;
    findByAppId(appId: string | string[], storeId?: string): Bluebird<IGameStoreEntry>;
    launchGameStore(api: IExtensionApi, gameStoreId: string, parameters?: string[], askConsent?: boolean): Bluebird<void>;
    identifyStore(gamePath: string): Promise<string>;
    reloadGames(): Bluebird<void>;
    private isStoreRunning;
    private getstores;
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
