import Promise from 'bluebird';
import { IExtensionApi } from '../../../types/IExtensionContext';
export declare const DOWNLOADS_DIR_TAG = "__vortex_downloads_folder";
export declare function writeDownloadsTag(api: IExtensionApi, tagPath: string): Promise<void>;
export declare function ensureDownloadsDirectory(api: IExtensionApi): Promise<void>;
