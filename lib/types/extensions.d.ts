import type { IExtensionContext, IReducerSpec } from "./IExtensionContext";
import type { IExtensionLoadFailure, IExtensionState } from "./IState";
/**
 * Common types for extensions - ideally this will live in renderer/types
 * given that at present, main doesn't need to know about extensions beyond
 * persisting their state.
 *
 * But lets keep it here for now to avoid dependency chaos.
 */
export interface IExtensionReducer {
    path: string[];
    reducer: IReducerSpec;
}
export type ExtensionInit = (context: IExtensionContext) => boolean;
export type ExtensionType = "game" | "translation" | "theme";
/**
 * Information about an extension available from the info.json file
 */
export interface IExtension {
    id?: string;
    namespace?: string;
    name: string;
    author: string;
    description: string;
    version: string;
    type?: ExtensionType;
    bundled?: boolean;
    path?: string;
    modId?: number;
    issueTrackerURL?: string;
}
export type IExtensionWithState = IExtension & IExtensionState & {
    loadFailures: IExtensionLoadFailure[];
};
export interface IExtensionDownloadInfo {
    name: string;
    modId?: number;
    fileId?: number;
    github?: string;
    githubRawPath?: string;
    githubRelease?: string;
}
/**
 * information about an extension available on the central extension list
 */
export interface IAvailableExtension extends IExtensionDownloadInfo {
    description: {
        short: string;
        long: string;
    };
    id?: string;
    type?: ExtensionType;
    language?: string;
    gameName?: string;
    gameId?: string;
    image: string;
    author: string;
    uploader: string;
    version: string;
    downloads: number;
    endorsements: number;
    timestamp: number;
    tags: string[];
    dependencies?: {
        [key: string]: any;
    };
    hide?: boolean;
}
export interface IExtensionManifest {
    last_updated: number;
    extensions: IAvailableExtension[];
}
export interface ISelector {
    modId: number;
    github: string;
    githubRawPath: string;
}
export interface IRegisteredExtension {
    name: string;
    namespace: string;
    path: string;
    dynamic: boolean;
    initFunc: () => ExtensionInit;
    info?: IExtension;
}
