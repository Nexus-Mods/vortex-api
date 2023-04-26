export declare class RelaxedReselectCache {
    private mCache;
    constructor();
    set(key: string, selectorFn: any): void;
    get(key: string): any;
    remove(key: string): void;
    clear(): void;
    isValidCacheKey(): boolean;
}
