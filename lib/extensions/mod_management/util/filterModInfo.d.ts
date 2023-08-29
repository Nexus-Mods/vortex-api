import { AttributeExtractor } from '../../../types/IExtensionContext';
import Promise from 'bluebird';
export declare function registerAttributeExtractor(priority: number, extractor: AttributeExtractor): void;
declare function filterModInfo(input: any, modPath: string): Promise<any>;
export default filterModInfo;
