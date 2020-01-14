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
    exclusive: boolean;
    detach: boolean;
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
    static toolIconRW(gameId: string, toolId: string): string;
    static run(info: StarterInfo, api: IExtensionApi, onShowError: OnShowErrorFunc): Promise<any>;
    private static executeWithSteam;
    private static executeWithEpic;
    private static runGameExecutable;
    private static runThroughLauncher;
    private static gameIcon;
    private static gameIconRW;
    private static toolIcon;
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
    originalEnvironment: {
        [key: string]: string;
    };
    shell: boolean;
    details: {
        [key: string]: any;
    };
    exclusive: boolean;
    detach: boolean;
    onStart?: 'hide' | 'close';
    private mExtensionPath;
    private mLogoName;
    private mIconPathCache;
    constructor(game: IGameStored, gameDiscovery: IDiscoveryResult, tool?: IToolStored, toolDiscovery?: IDiscoveredTool);
    get iconPath(): string;
    private initFromGame;
    private initFromTool;
}
export default StarterInfo;
