import type { IExtensionApi } from "../../types/IExtensionContext";
import type { IGame } from "../../types/IGame";
import type { IDiscoveryResult } from "../gamemode_management/types/IDiscoveryResult";
import type { IGameVersionProvider } from "./types/IGameVersionProvider";
export default class GameVersionManager {
    private mApi;
    private mProviders;
    constructor(api: IExtensionApi, providers: IGameVersionProvider[]);
    getSupportedProvider(game: IGame, discovery?: IDiscoveryResult): Promise<IGameVersionProvider>;
    getGameVersion(game: IGame, discovery: IDiscoveryResult): Promise<string>;
    private isGameValid;
}
