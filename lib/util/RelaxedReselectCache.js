"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelaxedReselectCache = void 0;
const NULL_KEY = "e210e05b-5b22-47ee-96d7-cfd10ae18ef9";
class RelaxedReselectCache {
    constructor() {
        this.mCache = new Map();
    }
    set(key, selectorFn) {
        this.mCache.set(key !== null && key !== void 0 ? key : NULL_KEY, selectorFn);
    }
    get(key) {
        return this.mCache.get(key !== null && key !== void 0 ? key : NULL_KEY);
    }
    remove(key) {
        this.mCache.delete(key !== null && key !== void 0 ? key : NULL_KEY);
    }
    clear() {
        this.mCache.clear();
    }
    isValidCacheKey() {
        return true;
    }
}
exports.RelaxedReselectCache = RelaxedReselectCache;
