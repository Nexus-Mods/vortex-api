import { IRule } from 'modmeta-db';
export interface IModLookupData {
    fileName: string;
    fileSizeBytes: number;
    gameId: string;
    domainName?: string;
    logicalFileName?: string;
    fileVersion: string;
    fileMD5?: string;
    sourceURI: any;
    source?: string;
    rules?: IRule[];
    archived?: boolean;
    details?: {
        homepage?: string;
        category?: string;
        description?: string;
        author?: string;
        modId?: string;
        fileId?: string;
    };
}
export interface IModLookupResult {
    key: string;
    value: IModLookupData;
}
export interface ILookupOptions {
    requireURL?: boolean;
}
