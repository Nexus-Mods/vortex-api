import { AttributeExtractor } from '../../../types/IExtensionContext';
export declare function registerAttributeExtractor(priority: number, extractor: AttributeExtractor): void;
/**
 * Debug function to list all registered attribute extractors
 * Useful for identifying which extractors are registered and their priorities
 */
export declare function debugListExtractors(): Array<{
    priority: number;
    name: string;
    details: string;
}>;
declare function filterModInfo(input: any, modPath: string): Promise<any>;
export default filterModInfo;
