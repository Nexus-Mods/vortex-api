import type { IExtensionApi } from "../../types/IExtensionContext";
import type { ExtensionType, IAvailableExtension, IExtension, IExtensionDownloadInfo, ISelector } from "../../types/extensions";
import PromiseBB from "bluebird";
export declare function selectorMatch(ext: IAvailableExtension, selector: ISelector): boolean;
export declare function sanitize(input: string): string;
export declare function readExtensionInfo(extensionPath: string, bundled: boolean, fallback?: any): PromiseBB<{
    id: string;
    info: IExtension;
}>;
export declare function readExtensions(force: boolean): PromiseBB<{
    [extId: string]: IExtension;
}>;
export declare function fetchAvailableExtensions(forceCache: boolean, forceDownload?: boolean): PromiseBB<{
    time: Date;
    extensions: IAvailableExtension[];
}>;
export declare function downloadAndInstallExtension(api: IExtensionApi, ext: IExtensionDownloadInfo): PromiseBB<boolean>;
export declare function downloadFromNexus(api: IExtensionApi, ext: IExtensionDownloadInfo): PromiseBB<string[]>;
export declare function downloadGithubRelease(api: IExtensionApi, ext: IExtensionDownloadInfo): PromiseBB<string[]>;
export declare function downloadFile(url: string, outputPath: string): PromiseBB<void>;
export declare function downloadGithubRaw(api: IExtensionApi, ext: IExtensionDownloadInfo): PromiseBB<string[]>;
export declare function readExtensibleDir(extType: ExtensionType, bundledPath: string, customPath: string): PromiseBB<any[]>;
