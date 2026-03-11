/**
 * Resolve the writable Linux applications directory used for local desktop entries.
 */
export declare function applicationsDirectory(): string;
/**
 * Refresh the Linux desktop MIME cache after desktop entry changes.
 */
export declare function refreshDesktopDatabase(applicationsDir: string): void;
/**
 * Read the current desktop-id associated with a URL scheme on Linux.
 * In Flatpak, uses flatpak-spawn to query the host's settings.
 */
export declare function getDefaultUrlSchemeHandler(protocol: string): string | undefined;
/**
 * Set the desktop-id that should handle a URL scheme on Linux.
 * In Flatpak, uses flatpak-spawn to modify the host's settings.
 * ref: https://github.com/Nexus-Mods/NexusMods.App/blob/main/src/NexusMods.Backend/RuntimeDependency/XDGSettingsDependency.cs#L22-L34
 */
export declare function setDefaultUrlSchemeHandler(protocol: string, desktopId: string): void;
