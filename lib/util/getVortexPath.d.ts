export type AppPath = 'base' | 'assets' | 'assets_unpacked' | 'modules' | 'modules_unpacked' | 'bundledPlugins' | 'locales' | 'package' | 'package_unpacked' | 'application' | 'userData' | 'appData' | 'localAppData' | 'temp' | 'home' | 'documents' | 'exe' | 'desktop';
export declare function setVortexPath(id: AppPath, value: string | (() => string)): void;
/**
 * the electron getAppPath function and globals like __dirname
 * or process.resourcesPath don't do a great job of abstracting away
 * how the application is being built, e.g. development or not, asar or not,
 * webpack or not, portable or not.
 * This function aims to provide reasonable paths to application data independent
 * of any of that.
 */
declare function getVortexPath(id: AppPath): string;
export declare function getVortexPathAsync(id: AppPath): Promise<string>;
export default getVortexPath;
