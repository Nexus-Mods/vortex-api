import { IGame } from '../../../types/IGame';
import { IDiscoveryResult } from '../../gamemode_management/types/IDiscoveryResult';
export declare type GameVersionProviderFunc = (game: IGame, discovery: IDiscoveryResult) => PromiseLike<string>;
export declare type GameVersionProviderTest = (game: IGame, discovery: IDiscoveryResult) => PromiseLike<boolean>;
export interface IGameVersionProviderOptions {
}
export interface IGameVersionProvider {
    id: string;
    priority: number;
    supported: GameVersionProviderTest;
    getGameVersion: GameVersionProviderFunc;
    options?: IGameVersionProviderOptions;
}
