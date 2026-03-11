/**
 * Helper module for accessing preload API with proper typing.
 * Use this in files that need to access window.api or application data
 * to ensure TypeScript recognizes these properties.
 *
 * NOTE: For windowId, appName, appVersion, and vortexPaths, you must ensure
 * ApplicationData.init() has been called before accessing these values.
 */
import type { Api, PreloadWindow } from "@vortex/shared/preload";
/**
 * Get the entire preload window object.
 * This is only available in the renderer process.
 * @deprecated Use window directly
 */
export declare function getPreloadWindow(): PreloadWindow;
/**
 * Get the preload API from the window object.
 * This is only available in the renderer process.
 * @deprecated Use window.api directly
 */
export declare function getPreloadApi(): Api;
/**
 * Get the current window ID from the ApplicationData cache.
 * This is only available in the renderer process after ApplicationData.init() has been called.
 * @throws Error if ApplicationData has not been initialized
 */
export declare function getWindowId(): number;
/**
 * Get the app name from the ApplicationData cache.
 * This is only available in the renderer process after ApplicationData.init() has been called.
 * @throws Error if ApplicationData has not been initialized
 */
export declare function getAppName(): string;
/**
 * Get the app version from the ApplicationData cache.
 * This is only available in the renderer process after ApplicationData.init() has been called.
 * @throws Error if ApplicationData has not been initialized
 */
export declare function getAppVersion(): string;
