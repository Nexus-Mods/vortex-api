"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDeployment = void 0;
class NoDeployment extends Error {
    constructor() {
        super('No supported deployment method');
        this.name = this.constructor.name;
        this['allowReport'] = false;
    }
}
exports.NoDeployment = NoDeployment;
