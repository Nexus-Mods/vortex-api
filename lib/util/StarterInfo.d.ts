import { IDiscoveredTool } from '../types/IDiscoveredTool';
import { IDiscoveryResult } from '../extensions/gamemode_management/types/IDiscoveryResult';
import { IGameStored } from '../extensions/gamemode_management/types/IGameStored';
import { IToolStored } from '../extensions/gamemode_management/types/IToolStored';
import { IExtensionApi } from '../types/IExtensionContext';
import * as Promise from 'bluebird';
export interface IStarterInfo {
    id: string;
    gameId: string;
    isGame: boolean;
    iconPath: string;
    iconOutPath: string;
    name: string;
    exePath: string;
    commandLine: string[];
    workingDirectory: string;
    environment: {
        [key: string]: string;
    };
}
declare type OnShowErrorFunc = (message: string, details?: string | Error | any, allowReport?: boolean) => void;
/**
 * holds info about an executable to start
 *
 * @class StarterInfo
 */
declare class StarterInfo implements IStarterInfo {
    static getGameIcon(game: IGameStored, gameDiscovery: IDiscoveryResult): string;
    private static executeWithSteam;
    private static executeWithEpic;
    private static runGameExecutable;
    static run(info: StarterInfo, api: IExtensionApi, onShowError: OnShowErrorFunc): Promise<void>;
    private static runThroughLauncher;
    private static gameIcon;
    private static gameIconRW;
    private static toolIcon;
    private static toolIconRW;
    id: string;
    gameId: string;
    isGame: boolean;
    iconOutPath: string;
    name: string;
    exePath: string;
    commandLine: string[];
    workingDirectory: string;
    environment: {
        [key: string]: string;
    };
    shell: boolean;
    private mExtensionPath;
    private mLogoName;
    private mIconPathCache;
    constructor(game: IGameStored, gameDiscovery: IDiscoveryResult, tool?: IToolStored, toolDiscovery?: IDiscoveredTool);
    readonly iconPath: string;
    private initFromGame;
    private initFromTool;
}
export default StarterInfo;
