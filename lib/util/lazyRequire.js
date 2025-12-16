"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(delayed, exportId) {
    const handler = {
        get(target, name) {
            if (target.mod === undefined) {
                target.mod = delayed();
            }
            if (exportId !== undefined) {
                return target.mod[exportId][name];
            }
            else if (name === "__esModule") {
                return target.mod;
            }
            else {
                return target.mod[name];
            }
        },
        set(target, name, value) {
            if (target.mod === undefined) {
                target.mod = delayed();
            }
            if (exportId !== undefined) {
                target.mod[exportId][name] = value;
            }
            else {
                target.mod[name] = value;
            }
            return true;
        },
    };
    return new Proxy({}, handler);
}
