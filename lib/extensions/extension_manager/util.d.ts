import { IExtensionApi } from '../../types/IExtensionContext';
import * as Promise from 'bluebird';
import { ExtensionType, IAvailableExtension, IExtension, IExtensionDownloadInfo } from './types';
export declare function sanitize(input: string): string;
export declare function readExtensionInfo(extensionPath: string, bundled: boolean, fallback?: any): Promise<{
    id: string;
    info: IExtension;
}>;
export declare function readExtensions(force: boolean): Promise<{
    [extId: string]: IExtension;
}>;
export declare function fetchAvailableExtensions(force: boolean): Promise<IAvailableExtension[]>;
export declare function downloadAndInstallExtension(api: IExtensionApi, ext: IExtensionDownloadInfo): Promise<boolean>;
export declare function readExtensibleDir(extType: ExtensionType, bundledPath: string, customPath: string): Promise<any[]>;
