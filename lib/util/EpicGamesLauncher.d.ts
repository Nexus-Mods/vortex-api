import * as Promise from 'bluebird';
export interface IEpicGamesLauncher {
    isGameInstalled(name: string): Promise<boolean>;
}
declare const instance: IEpicGamesLauncher;
export default instance;
