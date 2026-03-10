import { IDiscoveredTool } from "../types/IDiscoveredTool";
import { IDiscoveryResult } from "../extensions/gamemode_management/types/IDiscoveryResult";
import { IGameStored } from "../extensions/gamemode_management/types/IGameStored";
import { IToolStored } from "../extensions/gamemode_management/types/IToolStored";
import { IExtensionApi } from "../types/IExtensionContext";
import Promise from "bluebird";
export interface IStarterInfo {
    id: string;
    gameId: string;
    isGame: boolean;
    iconOutPath: string;
    name: string;
    exePath: string;
    commandLine: string[];
    workingDirectory: string;
    exclusive: boolean;
    detach: boolean;
    shell: boolean;
    store: string;
    onStart?: "hide" | "hide_recover" | "close";
    environment: {
        [key: string]: string;
    };
    defaultPrimary?: boolean;
    extensionPath: string;
    logoName: string;
}
type OnShowErrorFunc = (message: string, details?: string | Error | any, allowReport?: boolean) => void;
/**
 * wrapper for information about a game or tool, combining static and runtime/discovery information
 * for the purpose of actually starting them in a uniform way.
 * This implements things like running the game through a launcher (steam/epic/...) if necessary
 *
 * @class StarterInfo
 */
declare class StarterInfo implements IStarterInfo {
    static getGameIcon(game: IGameStored, gameDiscovery: IDiscoveryResult): string;
    static toolIconRW(gameId: string, toolId: string): string;
    static run(info: IStarterInfo, api: IExtensionApi, onShowError: OnShowErrorFunc): Promise<any>;
    static getIconPath(info: IStarterInfo): string;
    private static runDirectly;
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
    onStart?: "hide" | "hide_recover" | "close";
    defaultPrimary: boolean;
    extensionPath: string;
    logoName: string;
    timestamp: number;
    store: string;
    constructor(game: IGameStored, gameDiscovery: IDiscoveryResult, tool?: IToolStored, toolDiscovery?: IDiscoveredTool);
    private initFromGame;
    private initFromTool;
}
export default StarterInfo;
