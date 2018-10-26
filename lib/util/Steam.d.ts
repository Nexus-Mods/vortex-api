import * as Promise from 'bluebird';
export interface ISteamEntry {
    appid: string;
    name: string;
    gamePath: string;
    lastUpdated: Date;
}
export declare class GameNotFound extends Error {
    private mSearch;
    constructor(search: string);
    readonly search: any;
}
export interface ISteam {
    findByName(namePattern: string): Promise<ISteamEntry>;
    findByAppId(appId: string | string[]): Promise<ISteamEntry>;
    allGames(): Promise<ISteamEntry[]>;
}
declare const instance: ISteam;
export default instance;
