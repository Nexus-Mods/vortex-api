import type { IProtocolRegistrationOptions } from "./types";
export type { IProtocolRegistrationOptions } from "./types";
/**
 * Register protocol handling for the current platform.
 *
 * Returns `true` when Vortex was not already the default handler and registration
 * was required; returns `false` when no default-handler change was needed.
 */
export declare function registerProtocolHandler(options: IProtocolRegistrationOptions): Promise<boolean>;
/**
 * Remove protocol handling for the current platform route.
 */
export declare function deregisterProtocolHandler(protocol: string, userDataPath?: string): Promise<void>;
