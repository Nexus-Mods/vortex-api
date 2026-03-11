import type { IProtocolRegistrationOptions } from "../types";
/**
 * Register Linux protocol handling through the Linux-specific route map.
 *
 * At present only `nxm` has a custom Linux route; other protocols are not
 * supported and return `false` (registration fails silently).
 */
export declare function registerLinuxProtocolHandler(options: IProtocolRegistrationOptions): boolean;
/**
 * Deregister Linux protocol handling through the Linux-specific route map.
 */
export declare function deregisterLinuxProtocolHandler(protocol: string): void;
