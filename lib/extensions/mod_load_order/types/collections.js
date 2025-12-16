"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionParseError = exports.CollectionGenerateError = void 0;
class CollectionGenerateError extends Error {
    constructor(why) {
        super(`Failed to generate game specific data for collection: ${why}`);
        this.name = "CollectionGenerateError";
    }
}
exports.CollectionGenerateError = CollectionGenerateError;
class CollectionParseError extends Error {
    constructor(collection, why) {
        super(`Failed to parse game specific data for collection: ${why}`);
        this.name = "CollectionGenerateError";
        this.mCollection = collection;
    }
    get collectionName() {
        return this.mCollection.info.name;
    }
}
exports.CollectionParseError = CollectionParseError;
