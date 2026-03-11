export interface IProtonInfo {
    usesProton: boolean;
    compatDataPath?: string;
    protonPath?: string;
}
/**
 * Check if a game uses Proton by looking for its compatdata folder
 */
export declare function detectProtonUsage(steamAppsPath: string, appId: string): Promise<boolean>;
/**
 * Get the compatdata path for a game
 */
export declare function getCompatDataPath(steamAppsPath: string, appId: string): string;
/**
 * Get the Wine prefix path within compatdata
 */
export declare function getWinePrefixPath(compatDataPath: string): string;
/**
 * Read Steam's config.vdf to find the configured Proton version for a game
 */
export declare function getConfiguredProtonName(steamPath: string, appId: string): Promise<string | undefined>;
/**
 * Resolve a Proton config name to its installation path.
 *
 * Steam stores the configured Proton version in config.vdf using internal names
 * (e.g., "proton_experimental", "proton_9", "GE-Proton10-28"), but the actual
 * installation folders use different naming conventions:
 *   - config.vdf: "proton_experimental" -> folder: "Proton - Experimental"
 *   - config.vdf: "proton_9"            -> folder: "Proton 9.0"
 *   - config.vdf: "GE-Proton10-28"      -> folder: "GE-Proton10-28" (exact match)
 *
 * Steam provides no direct mapping between these names. Custom tools (GE-Proton, etc.)
 * use matching names, but official Proton versions do not.
 *
 * Resolution strategy (no hardcoded mappings):
 * 1. Custom tools: Check compatibilitytools.d/{name} - custom Proton builds
 *    use their config name as the folder name directly.
 * 2. Exact match: Check steamapps/common/{name} - in case config name matches.
 * 3. Fuzzy match: Scan steamapps/common/Proton* folders and match by keyword.
 *    Extract the keyword after "proton_" and find a folder containing it.
 *
 * This approach is self-maintaining and doesn't require updates when Valve
 * releases new Proton versions.
 */
export declare function resolveProtonPath(steamPath: string, protonName: string): Promise<string | undefined>;
/**
 * Find the latest installed Proton version (fallback)
 */
export declare function findLatestProton(steamPath: string): Promise<string | undefined>;
/**
 * Get full Proton info for a game
 */
export declare function getProtonInfo(steamPath: string, steamAppsPath: string, appId: string): Promise<IProtonInfo>;
/**
 * Check if a file is a Windows executable
 */
export declare function isWindowsExecutable(filePath: string): boolean;
/**
 * Build environment variables for running through Proton
 */
export declare function buildProtonEnvironment(compatDataPath: string, steamPath: string, existingEnv?: Record<string, string>): Record<string, string>;
/**
 * Build the command to run an executable through Proton
 */
export declare function buildProtonCommand(protonPath: string, exePath: string, args: string[]): {
    executable: string;
    args: string[];
};
