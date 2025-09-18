"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBatchContext = getBatchContext;
exports.withBatchContext = withBatchContext;
const util_1 = require("./util");
class BatchContext {
    constructor(id, keys) {
        this.mCloseCBs = [];
        this.mValues = {};
        this.mId = id;
        this.mKeys = keys;
        this.mCompletion = new Promise(resolve => {
            this.onClose(() => resolve());
        });
    }
    get itemCount() {
        return this.mKeys.length;
    }
    await() {
        return this.mCompletion;
    }
    get(varName, fallback) {
        var _a;
        return (_a = this.mValues[varName]) !== null && _a !== void 0 ? _a : fallback;
    }
    set(varName, value) {
        this.mValues[varName] = value;
    }
    close() {
        this.mCloseCBs.forEach(cb => cb(this));
    }
    onClose(cb) {
        this.mCloseCBs.push(cb);
    }
}
const contexts = {};
function makeKey(id, key) {
    return `${id}-${key}`;
}
function previousBatch(keys, context) {
    for (const key of keys) {
        if ((contexts[key] !== undefined) && (contexts[key][0] !== context)) {
            return contexts[key][0];
        }
    }
    return undefined;
}
function getBatchContext(operation, key, create = false) {
    const fullKey = makeKey(operation, key);
    const res = contexts[fullKey];
    if (res !== undefined) {
        return res[0];
    }
    else {
        if (create) {
            const newContext = new BatchContext(operation, [key]);
            contexts[fullKey] = [newContext];
            return newContext;
        }
        return undefined;
    }
}
function withBatchContext(operation, keys, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        const context = new BatchContext(operation, keys);
        const fullKeys = keys.map(key => makeKey(operation, key));
        for (const key of fullKeys) {
            (0, util_1.setdefault)(contexts, key, []).push(context);
        }
        // ensure we're not processing another batch of the same operation including this key
        // concurrently
        // This is necessary as the contexts are globals, fortunately it should be really rare
        // this becomes relevant
        let preBatch = previousBatch(fullKeys, context);
        while (preBatch !== undefined) {
            yield preBatch.await();
            preBatch = previousBatch(fullKeys, context);
        }
        let res;
        try {
            res = yield cb();
        }
        finally {
            context.close();
            fullKeys.forEach(key => {
                const idx = contexts[key].indexOf(context);
                // idx should *always* be 0 at this point, the block above ensures we only run a batch
                // when it's at idx 0 for all keys
                contexts[key].splice(idx, idx + 1);
            });
        }
        return res;
    });
}
