import Bluebird from 'bluebird';
import { IExtensionApi } from '../../types/IExtensionContext';
export declare const STAGING_DIR_TAG = "__vortex_staging_folder";
export declare function ensureStagingDirectory(api: IExtensionApi, instPath?: string, gameId?: string): Bluebird<string>;
