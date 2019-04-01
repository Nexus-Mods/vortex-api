import * as Promise from 'bluebird';
export interface ISteamEntry {
    appid: string;
    name: string;
    gamePath: string;
    lastUser: string;
    lastUpdated: Date;
}
export interface ISteamExec {
    steamPath: string;
    arguments: string[];
}
export declare class GamePathNotMatched extends Error {
    private mGamePath;
    private mEntryPaths;
    constructor(gamePath: string, entries: string[]);
    readonly gamePath: string;
    readonly steamEntryPaths: string[];
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
    getSteamExecutionPath(gamePath: string, args?: string[]): Promise<ISteamExec>;
}
declare const instance: ISteam;
export default instance;
