"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifierDropParent = exports.VerifierDrop = void 0;
exports.addReducer = addReducer;
/**
 * The repair function can't fix a value so delete it instead
 */
class VerifierDrop extends Error {
    constructor() {
        super("verifier drop");
        this.name = this.constructor.name;
    }
}
exports.VerifierDrop = VerifierDrop;
/**
 * The repair function can't fix a value so delete the parent object instead
 */
class VerifierDropParent extends Error {
    constructor() {
        super("verifier drop parent");
        this.name = this.constructor.name;
    }
}
exports.VerifierDropParent = VerifierDropParent;
function addReducer(action, handler) {
    return {
        [action]: handler,
    };
}
