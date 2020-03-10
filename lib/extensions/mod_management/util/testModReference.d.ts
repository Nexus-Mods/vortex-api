import { IMod, IModReference } from '../types/IMod';
export interface IModLookupInfo {
    id?: string;
    fileMD5: string;
    fileSizeBytes: number;
    fileName: string;
    name?: string;
    logicalFileName?: string;
    customFileName?: string;
    version: string;
    game?: string[];
    fileId?: string;
    modId?: string;
    source?: string;
}
export declare function referenceEqual(lhs: IModReference, rhs: IModReference): boolean;
export declare function sanitizeExpression(fileName: string): string;
export declare function testModReference(mod: IMod | IModLookupInfo, reference: IModReference): boolean;
export default testModReference;
