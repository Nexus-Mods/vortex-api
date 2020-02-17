import * as Promise from 'bluebird';
export interface IEpicEntry {
    appid: string;
    name: string;
    gamePath: string;
}
export interface IEpicGamesLauncher {
    isGameInstalled(name: string): Promise<boolean>;
    findByName(name: string): Promise<IEpicEntry>;
    allGames(): Promise<IEpicEntry[]>;
}
export declare class EpicGameNotFound extends Error {
    private mName;
    constructor(name: string);
    readonly epicName: any;
}
declare const instance: IEpicGamesLauncher;
export default instance;
