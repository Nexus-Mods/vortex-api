import { IExtensionApi } from '../../../types/IExtensionContext';
import { IMod } from '../../mod_management/types/IMod';
import NexusT, { IFileUpdate, IUpdateEntry } from '@nexusmods/nexus-api';
import Promise from 'bluebird';
import { TFunction } from 'i18next';
import * as Redux from 'redux';
export declare const ONE_MINUTE: number;
export declare const ONE_DAY: number;
export declare const ONE_WEEK: number;
export declare const ONE_MONTH: number;
/**
 * fetch a list of mods, updated within a certain time range
 *
 * @param {Redux.Store<any>} store
 * @param {NexusT} nexus
 * @param {string} gameId game to fetch for
 * @param {number} minAge timestamp of the least recently updated mod we're interested in
 * @returns {Promise<IUpdateEntry[]>}
 */
export declare function fetchRecentUpdates(store: Redux.Store<any>, nexus: NexusT, gameId: string, minAge: number): Promise<IUpdateEntry[]>;
/**
 * check if there is a newer mod version on the server
 *
 * @param {NexusT} nexus
 * @param {string} gameId
 * @param {string} modId
 * @param {number} newestFileId
 * @param {string} version
 * @param {number} uploadedTimestamp
 * @return {Promise<IFileInfo>}
 *
 */
export declare function checkModVersion(store: Redux.Store<any>, nexus: NexusT, gameMode: string, mod: IMod): Promise<void>;
/**
 * based on file update information, find the newest version of the file
 * @param fileUpdates
 * @param fileId
 */
export declare function findLatestUpdate(fileUpdates: IFileUpdate[], updateChain: IFileUpdate[], fileId: number): IFileUpdate[];
export declare function retrieveModInfo(nexus: NexusT, api: IExtensionApi, gameMode: string, mod: IMod, t: TFunction): Promise<void>;
