import { IExtensionApi } from '../../../types/IExtensionContext';
export declare function fileMD5Async(filePath: string, progressFunc: (progress: number, total: number) => void): Promise<string>;
export declare function finalizeDownload(api: IExtensionApi, id: string, filePath: string): Promise<void>;
