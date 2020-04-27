import * as Promise from 'bluebird';
import { IExtensionApi } from '../types/IExtensionContext'
import { IGameStore, IGameStoreEntry } from '../types/api';
declare class GameStoreHelper {
    private mStores;
    getGameStore(storeId: string): IGameStore;
    isGameInstalled(id: string, storeId?: string): Promise<string>;
    findByName(name: string | string[], storeId?: string): Promise<IGameStoreEntry>;
    findByAppId(appId: string | string[], storeId?: string): Promise<IGameStoreEntry>;
    launchGameStore(api: IExtensionApi, gameStoreId: string,
        parameters?: string[], askConsent?: boolean): Promise<void>;
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
