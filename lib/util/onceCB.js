"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Higher-Order function that ensures that the wrapped callback is only called once (through this wrapper)
 * When passing a callback to an event it might not be intended to be called more than once but since
 * any part of the application (including extensions) could be adding event handlers and break the logic
 * that ensures that - this ensures that errors like that are reported in a useable fashion.
 * @param func the function to wrap
 */
function onceCB(func) {
    let called = false;
    return ((...args) => {
        if (called) {
            throw new Error('Attempt to call callback multiple times');
        }
        called = true;
        return func(...args);
    });
}
exports.default = onceCB;
