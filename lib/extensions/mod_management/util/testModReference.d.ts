import { IReference } from 'modmeta-db';
import { IMod } from '../types/IMod';
export interface IModLookupInfo {
    id: string;
    fileMD5: string;
    fileSizeBytes: number;
    fileName: string;
    name?: string;
    logicalFileName?: string;
    customFileName?: string;
    version: string;
}
export declare function testModReference(mod: IMod | IModLookupInfo, reference: IReference): boolean;
export default testModReference;
