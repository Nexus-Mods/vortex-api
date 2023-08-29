import { IExtensionApi } from '../../types/IExtensionContext';
import { IGame } from '../../types/IGame';
import { IDiscoveryResult } from '../gamemode_management/types/IDiscoveryResult';
import { IGameVersionProvider } from './types/IGameVersionProvider';
export default class GameVersionManager {
    private mApi;
    private mProviders;
    constructor(api: IExtensionApi, providers: IGameVersionProvider[]);
    getSupportedProvider(game: IGame, discovery?: IDiscoveryResult): Promise<IGameVersionProvider>;
    getGameVersion(game: IGame, discovery: IDiscoveryResult): Promise<string>;
    private isGameValid;
}
