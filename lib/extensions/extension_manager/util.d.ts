import { IExtensionApi } from '../../types/IExtensionContext';
import { ExtensionType, IAvailableExtension, IExtension, IExtensionDownloadInfo, ISelector } from './types';
import Promise from 'bluebird';
export declare function selectorMatch(ext: IAvailableExtension, selector: ISelector): boolean;
export declare function sanitize(input: string): string;
export declare function readExtensionInfo(extensionPath: string, bundled: boolean, fallback?: any): Promise<{
    id: string;
    info: IExtension;
}>;
export declare function readExtensions(force: boolean): Promise<{
    [extId: string]: IExtension;
}>;
export declare function fetchAvailableExtensions(forceCache: boolean, forceDownload?: boolean): Promise<{
    time: Date;
    extensions: IAvailableExtension[];
}>;
export declare function downloadAndInstallExtension(api: IExtensionApi, ext: IExtensionDownloadInfo): Promise<boolean>;
export declare function downloadFromNexus(api: IExtensionApi, ext: IExtensionDownloadInfo): Promise<string[]>;
export declare function downloadGithubRelease(api: IExtensionApi, ext: IExtensionDownloadInfo): Promise<string[]>;
export declare function downloadFile(url: string, outputPath: string): Promise<void>;
export declare function downloadGithubRaw(api: IExtensionApi, ext: IExtensionDownloadInfo): Promise<string[]>;
export declare function readExtensibleDir(extType: ExtensionType, bundledPath: string, customPath: string): Promise<any[]>;
