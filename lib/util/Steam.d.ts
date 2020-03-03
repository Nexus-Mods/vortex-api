import { IGameStore, IGameStoreEntry } from '../types/api';
export interface ISteamEntry extends IGameStoreEntry {
}
export declare class GameNotFound extends Error {
    private mSearch;
    constructor(search: string);
    readonly search: any;
}
declare const instance: IGameStore;
export default instance;
