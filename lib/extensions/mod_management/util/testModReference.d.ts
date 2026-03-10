import { IMod, IModReference, IFileListItem, IModAttributes } from "../types/IMod";
import { IDownload } from "../../download_management/types/IDownload";
export interface IModLookupInfo {
    id?: string;
    fileMD5: string;
    fileSizeBytes: number;
    fileName: string;
    name?: string;
    logicalFileName?: string;
    additionalLogicalFileNames?: string[];
    customFileName?: string;
    version: string;
    game?: string[];
    fileId?: string;
    modId?: string;
    source?: string;
    referenceTag?: string;
    installerChoices?: any;
    patches?: any;
    fileList?: IFileListItem[];
}
export declare function modAttributesToLookupInfo(mod: IMod | IModAttributes | IModLookupInfo): IModLookupInfo;
export declare function idOnlyRef(ref: IModReference): boolean;
export declare function referenceEqual(lhs: IModReference, rhs: IModReference): boolean;
/**
 * Converts an IDownload object to an IModReference object.
 * Extracts relevant metadata from the download's modInfo structure to populate
 * the reference fields used for mod matching and dependency resolution.
 *
 * @param download - The download object to convert
 * @returns IModReference object with populated fields from the download
 */
export declare function downloadToModRef(download: IDownload): IModReference;
export declare function sanitizeExpression(fileName: string): string;
export declare function safeCoerce(input: string): string;
export declare function coerceToSemver(version: string): string;
export declare function isFuzzyVersion(input: string): boolean;
export declare function testRefByIdentifiers(identifiers: {
    gameId: string;
    modId?: number;
    fileId?: number;
    fileNames?: string[];
    fileIds?: string[];
    condition?: () => boolean;
}, ref: IModReference): boolean;
/**
 * sets the callback for when a (fuzzy) mod reference is resolved, so the cache can be updated
 */
export declare function setResolvedCB(cb: (gameId: string, sourceModId: string, ref: IModReference, modId: string) => void): void;
export declare function testModReference(mod: IMod | IModLookupInfo, reference: IModReference, source?: {
    gameId: string;
    modId: string;
}, fuzzyVersion?: boolean): boolean;
export default testModReference;
