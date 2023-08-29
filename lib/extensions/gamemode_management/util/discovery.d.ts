import { IDiscoveredTool } from '../../../types/IDiscoveredTool';
import { IExtensionApi } from '../../../types/IExtensionContext';
import { IGame } from '../../../types/IGame';
import { ITool } from '../../../types/ITool';
import { Normalize } from '../../../util/getNormalizeFunc';
import { IDiscoveryResult } from '../types/IDiscoveryResult';
import Bluebird from 'bluebird';
export type DiscoveredCB = (gameId: string, result: IDiscoveryResult) => void;
export type DiscoveredToolCB = (gameId: string, result: IDiscoveredTool) => void;
export declare function quickDiscoveryTools(gameId: string, tools: ITool[], onDiscoveredTool: DiscoveredToolCB): Bluebird<void>;
/**
 * run the "quick" discovery using functions provided by the game extension
 *
 * @export
 * @param {IGame[]} knownGames
 * @param {DiscoveredCB} onDiscoveredGame
 * @return the list of gameIds that were discovered
 */
export declare function quickDiscovery(knownGames: IGame[], discoveredGames: {
    [id: string]: IDiscoveryResult;
}, onDiscoveredGame: DiscoveredCB, onDiscoveredTool: DiscoveredToolCB): Bluebird<string[]>;
export declare function assertToolDir(tool: ITool, testPath: string): Bluebird<string>;
export declare function discoverRelativeTools(game: IGame, gamePath: string, discoveredGames: {
    [id: string]: IDiscoveryResult;
}, onDiscoveredTool: DiscoveredToolCB, normalize: Normalize): Bluebird<void>;
/**
 * run the "search"-discovery based on required files as specified by the game extension
 *
 * @export
 * @param {IGame[]} knownGames
 * @param {{ [id: string]: any }} discoveredGames
 * @param {string[]} searchPaths
 * @param {DiscoveredCB} onDiscoveredGame
 * @param {Progress} progressObj
 * @returns {Bluebird<any[]>}
 */
export declare function searchDiscovery(knownGames: IGame[], discoveredGames: {
    [id: string]: IDiscoveryResult;
}, searchPaths: string[], onDiscoveredGame: DiscoveredCB, onDiscoveredTool: DiscoveredToolCB, onError: (title: string, message: string) => void, progressCB: (idx: number, percent: number, label: string) => void): Bluebird<any>;
export declare function suggestStagingPath(api: IExtensionApi, gameId: string): Promise<string>;
