"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(delayed, exportId) {
    const handler = {
        get(target, name) {
            if (target.mod === undefined) {
                target.mod = delayed();
            }
            if (exportId !== undefined) {
                return target.mod[exportId][name];
            }
            else {
                return target.mod[name];
            }
        },
    };
    return new Proxy({}, handler);
}
exports.default = default_1;
