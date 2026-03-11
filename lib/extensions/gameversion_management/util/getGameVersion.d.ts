import type { IGame } from "../../../types/IGame";
import type { IDiscoveryResult } from "../../gamemode_management/types/IDiscoveryResult";
export declare function testExtProvider(game: IGame, discovery: IDiscoveryResult): Promise<boolean>;
export declare function getExtGameVersion(game: IGame, discovery: IDiscoveryResult): Promise<string>;
export declare function testExecProvider(game: IGame, discovery: IDiscoveryResult): Promise<boolean>;
export declare function getExecGameVersion(game: IGame, discovery: IDiscoveryResult): Promise<string>;
