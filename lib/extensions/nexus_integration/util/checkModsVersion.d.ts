import type { IExtensionApi } from "../../../types/IExtensionContext";
import type { IMod } from "../../mod_management/types/IMod";
import type { IFileUpdate, IUpdateEntry } from "@nexusmods/nexus-api";
import type NexusT from "@nexusmods/nexus-api";
import PromiseBB from "bluebird";
import type { TFunction } from "i18next";
import type * as Redux from "redux";
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
 * @returns {PromiseBB<IUpdateEntry[]>}
 */
export declare function fetchRecentUpdates(store: Redux.Store<any>, nexus: NexusT, gameId: string, minAge: number): PromiseBB<IUpdateEntry[]>;
/**
 * check if there is a newer mod version on the server
 *
 * @param {NexusT} nexus
 * @param {string} gameId
 * @param {string} modId
 * @param {number} newestFileId
 * @param {string} version
 * @param {number} uploadedTimestamp
 * @return {PromiseBB<IFileInfo>}
 *
 */
export declare function checkModVersion(store: Redux.Store<any>, nexus: NexusT, gameMode: string, mod: IMod): PromiseBB<void>;
/**
 * based on file update information, find the newest version of the file
 * @param fileUpdates
 * @param fileId
 */
export declare function findLatestUpdate(fileUpdates: IFileUpdate[], updateChain: IFileUpdate[], fileId: number): IFileUpdate[];
export declare function retrieveModInfo(nexus: NexusT, api: IExtensionApi, gameMode: string, mod: IMod, t: TFunction): PromiseBB<void>;
