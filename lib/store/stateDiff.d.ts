import type { DiffOperation } from "@vortex/shared/ipc";
/**
 * Compute the diff operations needed to transform oldState into newState.
 * Returns an array of DiffOperation objects that can be sent over IPC
 * for persistence in the main process.
 *
 * @param oldState - The previous state
 * @param newState - The new state
 * @param path - Current path in the state tree (used for recursion)
 * @returns Array of diff operations (set/remove)
 */
export declare function computeStateDiff<T>(oldState: T, newState: T, path?: string[]): DiffOperation[];
/**
 * Compute diffs for multiple hives, returning a map of hive -> operations.
 * Only includes hives that have changes.
 *
 * @param oldState - The previous full state
 * @param newState - The new full state
 * @param hives - List of hive names to check for changes
 * @returns Map of hive name to diff operations
 */
export declare function computeStateDiffByHive<T extends Record<string, unknown>>(oldState: T, newState: T, hives: string[]): Map<string, DiffOperation[]>;
