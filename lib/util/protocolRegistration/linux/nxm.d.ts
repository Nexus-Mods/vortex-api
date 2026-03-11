/**
 * Linux-specific nxm:// registration for Vortex.
 *
 * This aligns with NexusMods.App behaviour:
 * - use `xdg-settings` for default handler assignment
 * - update desktop MIME cache with `update-desktop-database` when desktop files change
 * - generate a local dev desktop entry that uses `--download %u` like other Vortex builds
 *
 * ref: https://github.com/Nexus-Mods/NexusMods.App/blob/main/src/NexusMods.Backend/OS/LinuxInterop.Protocol.cs
 * ref: https://github.com/Nexus-Mods/NexusMods.App/blob/main/src/NexusMods.Backend/RuntimeDependency/XDGSettingsDependency.cs
 * ref: https://github.com/Nexus-Mods/NexusMods.App/blob/main/src/NexusMods.Backend/RuntimeDependency/UpdateDesktopDatabaseDependency.cs
 */
/**
 * Required registration inputs for Linux `nxm` routing.
 * These values are resolved by the Linux route dispatcher before calling this module.
 */
export interface ILinuxNxmProtocolRegistrationOptions {
    setAsDefault: boolean;
    executablePath: string;
    appPath: string;
}
/**
 * Register Vortex as the handler for nxm:// protocol on Linux.
 * See file-level comment above for implementation details.
 */
export declare function registerLinuxNxmProtocolHandler(options: ILinuxNxmProtocolRegistrationOptions): boolean;
/**
 * Linux `nxm` deregistration intentionally does not remove desktop associations.
 *
 * As with previous behaviour, Linux deregistration is treated as external/system-managed.
 */
export declare function deregisterLinuxNxmProtocolHandler(): void;
