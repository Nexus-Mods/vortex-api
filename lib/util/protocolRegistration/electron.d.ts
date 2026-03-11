/**
 * Register Vortex as the default handler for a protocol via Electron.
 */
export declare function setDefaultProtocolClient(protocol: string, userDataPath?: string): Promise<void>;
/**
 * Check whether Vortex is currently the default handler for a protocol.
 */
export declare function isDefaultProtocolClient(protocol: string, userDataPath?: string): Promise<boolean>;
/**
 * Remove Vortex as the default handler for a protocol via Electron.
 */
export declare function removeDefaultProtocolClient(protocol: string, userDataPath?: string): Promise<void>;
