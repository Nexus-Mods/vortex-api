import { IExtensionApi } from '../../../types/IExtensionContext';
import { IDeploymentManifest } from '../types/IDeploymentManifest';
import { IDeployedFile, IDeploymentMethod } from '../types/IDeploymentMethod';
import Promise from 'bluebird';
export declare function purgeDeployedFiles(basePath: string, files: IDeployedFile[]): Promise<void>;
/**
 * purge files using information from the manifest
 */
export declare function fallbackPurge(api: IExtensionApi): Promise<void>;
export declare function withActivationLock(func: () => Promise<any>, tryOnly?: boolean): Promise<unknown>;
/**
 * return a manifest (detailing which files are currently deployed by Vortex)
 * Please note that the manifest is intended only as kind of a fallback, core functionality
 * of Vortex is designed to work cleanly even if the manifest is deleted by the user and
 * the same should be true for any extension using this function: Work on the assumption
 * that the manifest may be missing or outdated.
 * @remarks
 * This call is expensive as it attempts to read the manifest every time. Store the
 * result or call infrequently to minimise allocations and/or lag.
 * @param api api
 * @param modType the mod type for which to retrieve the manifest, default mod type if undefined
 * @param gameId the game for which to retrieve the manifest, defaults to the current game.
 */
export declare function getManifest(api: IExtensionApi, modType?: string, gameId?: string): Promise<IDeploymentManifest>;
export declare function loadActivation(api: IExtensionApi, gameId: string, modType: string, deployPath: string, stagingPath: string, activator: IDeploymentMethod): Promise<IDeployedFile[]>;
export declare function saveActivation(gameId: string, modType: string, instance: string, gamePath: string, stagingPath: string, activation: IDeployedFile[], activatorId?: string): Promise<any>;
