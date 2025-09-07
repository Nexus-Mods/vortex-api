import { IModInfo } from 'modmeta-db';
import { IDependency } from '../types/IDependency';
/**
 * Converts a dependency object to an IModInfo object
 * @param dependency The dependency object to convert
 * @param gameId The game ID for the mod info
 * @returns A properly formatted IModInfo object
 */
export declare function dependencyToModInfo(dependency: IDependency, gameId: string): IModInfo;
/**
 * Converts multiple dependencies to IModInfo objects
 * @param dependencies Array of dependency objects to convert
 * @param gameId The game ID for the mod infos
 * @returns Array of properly formatted IModInfo objects
 */
export declare function dependenciesToModInfos(dependencies: IDependency[], gameId: string): IModInfo[];
/**
 * Extracts the best available mod name from a dependency
 * @param dependency The dependency object
 * @returns The most appropriate display name for the mod
 */
export declare function getDependencyDisplayName(dependency: IDependency): string;
/**
 * Checks if a dependency has sufficient information to create a valid ModInfo
 * @param dependency The dependency object to validate
 * @returns True if the dependency has sufficient information
 */
export declare function isDependencyComplete(dependency: IDependency): boolean;
/**
 * Extracts and constructs an IModInfo object from a complex nested object structure
 * @param obj The complex object containing mod information (could have choices, patches, download.modInfo, etc.)
 * @param gameId The game ID for the mod info
 * @returns A properly formatted IModInfo object extracted from the nested data
 */
export declare function extractModInfoFromObject(obj: any, gameId: string): IModInfo;
