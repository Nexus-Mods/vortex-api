/**
 * Default Steam installation paths for Linux systems
 * Ordered by likelihood (most common first)
 */
export declare function getLinuxSteamPaths(): string[];
/**
 * Check if a path is a valid Steam installation
 */
export declare function isValidSteamPath(steamPath: string): boolean;
/**
 * Find the first valid Steam installation path on Linux
 */
export declare function findLinuxSteamPath(): string | undefined;
