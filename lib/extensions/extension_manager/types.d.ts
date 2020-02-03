import { IExtensionLoadFailure, IExtensionState } from '../../types/IState';
export declare type ExtensionType = 'game' | 'translation' | 'theme';
export interface IExtension {
    id?: string;
    name: string;
    author: string;
    description: string;
    version: string;
    type?: ExtensionType;
    bundled?: boolean;
    path?: string;
    modId?: number;
}
export declare type IExtensionWithState = IExtension & IExtensionState & {
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
export interface IAvailableExtension extends IExtensionDownloadInfo {
    description: {
        short: string;
        long: string;
    };
    id?: string;
    type?: ExtensionType;
    language?: string;
    gameName?: string;
    image: string;
    author: string;
    version: string;
    downloads: number;
    endorsements: number;
    tags: string[];
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
