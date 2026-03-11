export type AppPath = "base" | "assets" | "assets_unpacked" | "modules" | "modules_unpacked" | "bundledPlugins" | "locales" | "package" | "package_unpacked" | "application" | "userData" | "appData" | "localAppData" | "temp" | "home" | "documents" | "exe" | "desktop";
export declare function setVortexPath(id: AppPath, value: string | (() => string)): void;
/**
 * Get Vortex application path.
 *
 * This function provides paths to application data independent
 * of build configuration (development/production, asar/no-asar, portable/not).
 *
 * - Main process: Uses electron.app directly
 * - Renderer process: Uses window.vortexPaths from preload
 * - Forked child process: Uses environment variables
 */
declare function getVortexPath(id: AppPath): string;
export default getVortexPath;
