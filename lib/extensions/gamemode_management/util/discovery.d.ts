/// <reference types="bluebird" />
import { IDiscoveredTool } from '../../../types/IDiscoveredTool';
import { IGame } from '../../../types/IGame';
import { IDiscoveryResult } from '../types/IDiscoveryResult';
import { Normalize } from '../../../util/getNormalizeFunc';
import * as Promise from 'bluebird';
export declare type DiscoveredCB = (gameId: string, result: IDiscoveryResult) => void;
export declare type DiscoveredToolCB = (toolId: string, result: IDiscoveredTool) => void;
/**
 * run the "quick" discovery using functions provided by the game extension
 *
 * @export
 * @param {IGame[]} knownGames
 * @param {DiscoveredCB} onDiscoveredGame
 */
export declare function quickDiscovery(knownGames: IGame[], discoveredGames: {
    [id: string]: IDiscoveryResult;
}, onDiscoveredGame: DiscoveredCB, onDiscoveredTool: DiscoveredToolCB): Promise<string[]>;
export declare function discoverRelativeTools(game: IGame, gamePath: string, discoveredGames: {
    [id: string]: IDiscoveryResult;
}, onDiscoveredTool: DiscoveredToolCB, normalize: Normalize): Promise<void>;
/**
 * run the "search"-discovery based on required files as specified by the game extension
 *
 * @export
 * @param {IGame[]} knownGames
 * @param {{ [id: string]: any }} discoveredGames
 * @param {string[]} searchPaths
 * @param {DiscoveredCB} onDiscoveredGame
 * @param {Progress} progressObj
 * @returns {Promise<any[]>}
 */
export declare function searchDiscovery(knownGames: IGame[], discoveredGames: {
    [id: string]: IDiscoveryResult;
}, searchPaths: string[], onDiscoveredGame: DiscoveredCB, onDiscoveredTool: DiscoveredToolCB, onError: (title: string, message: string) => void, progressCB: (idx: number, percent: number, label: string) => void): Promise<any>;
