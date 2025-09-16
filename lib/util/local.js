"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * create a global variable that is available through an id.
 * This is basically a hack to get around the fact js can't have
 * proper singletons.
 */
function local(id, init) {
    const sym = Symbol.for(id);
    if (global[sym] === undefined) {
        global[sym] = init;
    }
    return global[sym];
}
exports.default = local;
