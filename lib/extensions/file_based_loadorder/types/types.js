"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadOrderSerializationError = exports.LoadOrderValidationError = void 0;
class LoadOrderValidationError extends Error {
    constructor(validationRes, loadOrder) {
        super('Invalid Load Order');
        this.name = 'LoadOrderValidationError';
        this.mValidationRes = validationRes;
        this.mLoadOrder = loadOrder;
    }
    get validationResult() {
        return this.mValidationRes;
    }
    get loadOrder() {
        return this.mLoadOrder;
    }
    get loadOrderEntryNames() {
        const lo = this.mLoadOrder.filter(entry => !!entry)
            .map(entry => entry.name)
            .join('\n');
        return lo;
    }
}
exports.LoadOrderValidationError = LoadOrderValidationError;
class LoadOrderSerializationError extends Error {
    constructor(loadOrder) {
        super('Failed to serialize load order');
        this.name = 'LoadOrderSerializationError';
        this.mLoadOrder = loadOrder.map(entry => entry.name);
    }
    get loadOrder() {
        return this.mLoadOrder.join('\n');
    }
}
exports.LoadOrderSerializationError = LoadOrderSerializationError;
