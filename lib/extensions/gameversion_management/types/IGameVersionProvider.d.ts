import { IGame } from '../../../types/IGame';
import { IDiscoveryResult } from '../../gamemode_management/types/IDiscoveryResult';
export type GameVersionProviderFunc = (game: IGame, discovery: IDiscoveryResult) => PromiseLike<string>;
export type GameVersionProviderTest = (game: IGame, discovery: IDiscoveryResult) => PromiseLike<boolean>;
export interface IGameVersionProviderOptions {
}
export interface IGameVersionProvider {
    id: string;
    priority: number;
    supported: GameVersionProviderTest;
    getGameVersion: GameVersionProviderFunc;
    options?: IGameVersionProviderOptions;
}
