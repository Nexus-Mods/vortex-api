import Nexus, { ICollectionQuery, IFileInfo, IGameListEntry, IModInfo, IRevision, NexusError, ICollectionSearchOptions, ICollectionSearchResult } from '@nexusmods/nexus-api';
import BluebirdPromise from 'bluebird';
import { TFunction } from 'i18next';
import * as Redux from 'redux';
import { IExtensionApi } from '../../types/IExtensionContext';
import { IMod } from '../../types/IState';
import { RedownloadMode } from '../download_management/DownloadManager';
import { IValidateKeyDataV2 } from './types/IValidateKeyData';
interface IUserInfo {
    sub: string;
    name: string;
    email: string;
    avatar: string;
    group_id: number;
    membership_roles: string[];
    premium_expiry: number;
}
/**
 * Search for collections using the GraphQL API
 *
 * @param {Nexus} nexus - The Nexus API instance
 * @param {ICollectionQuery} query - GraphQL query for collection fields
 * @param {types.ICollectionSearchOptions} options - Search options (gameId, filters, sort, etc.)
 * @return {Promise<types.ICollectionSearchResult>} Search results with nodes and totalCount
 */
export declare function searchCollections(nexus: Nexus, query: ICollectionQuery, options: ICollectionSearchOptions): Promise<ICollectionSearchResult>;
export declare function onCancelLoginImpl(api: IExtensionApi): void;
export declare function bringToFront(): void;
export declare function requestLogin(nexus: Nexus, api: IExtensionApi, callback: (err: Error) => void): Promise<void>;
export declare function oauthCallback(api: IExtensionApi, code: string, state?: string): Promise<void>;
export declare function ensureLoggedIn(api: IExtensionApi): BluebirdPromise<void>;
export declare function startDownload(api: IExtensionApi, nexus: Nexus, nxmurl: string, redownload?: RedownloadMode, fileName?: string, allowInstall?: boolean, handleErrors?: boolean, referenceTag?: string): BluebirdPromise<string>;
export interface IRemoteInfo {
    modInfo?: IModInfo;
    fileInfo?: IFileInfo;
    revisionInfo?: Partial<IRevision>;
}
export declare function getInfo(nexus: Nexus, domain: string, modId: number, fileId: number): BluebirdPromise<IRemoteInfo>;
export declare function getInfoGraphQL(nexus: Nexus, domain: string, modId: number, fileId: number): BluebirdPromise<IRemoteInfo>;
export declare function getCollectionInfo(nexus: Nexus, collectionSlug: string, revisionNumber: number, revisionId: number): BluebirdPromise<IRemoteInfo>;
interface IRequestError {
    message: string;
    Servermessage?: string;
    URL?: string;
    Game?: string;
    stack?: string;
    fatal?: boolean;
    Mod?: number;
    Collection?: number;
    Revision?: number;
    Version?: string;
    noReport?: boolean;
}
export declare function processErrorMessage(err: NexusError): IRequestError;
export declare function resolveGraphError(t: TFunction, isLoggedIn: boolean, err: Error): string;
export declare function endorseDirectImpl(api: IExtensionApi, nexus: Nexus, gameId: string, nexusId: number, version: string, endorsedStatus: string): BluebirdPromise<string>;
export declare function endorseThing(api: IExtensionApi, nexus: Nexus, gameId: string, modId: string, endorsedStatus: string): void;
export declare function refreshEndorsements(store: Redux.Store<any>, nexus: Nexus): BluebirdPromise<void>;
export declare function checkForCollectionUpdates(store: Redux.Store<any>, nexus: Nexus, gameId: string, mods: {
    [modId: string]: IMod;
}): BluebirdPromise<{
    errorMessages: string[];
    updatedIds: string[];
}>;
export declare function checkModVersionsImpl(store: Redux.Store<any>, nexus: Nexus, gameId: string, mods: {
    [modId: string]: IMod;
}, forceFull: boolean | 'silent'): BluebirdPromise<{
    errors: string[];
    modIds: string[];
}>;
export declare function transformUserInfoFromApi(input: IUserInfo): IValidateKeyDataV2;
export declare function getOAuthTokenFromState(api: IExtensionApi): string;
export declare function updateToken(api: IExtensionApi, nexus: Nexus, credentials: any): BluebirdPromise<boolean>;
export declare function updateKey(api: IExtensionApi, nexus: Nexus, key: string): BluebirdPromise<boolean>;
export declare function retrieveNexusGames(nexus: Nexus): BluebirdPromise<void>;
export declare function nexusGames(): IGameListEntry[];
export declare function nexusGamesProm(): BluebirdPromise<IGameListEntry[]>;
export {};
