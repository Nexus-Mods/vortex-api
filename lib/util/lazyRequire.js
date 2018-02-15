"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reqResolve = require("resolve");
function default_1(moduleId, basedir, exportId) {
    const handler = {
        get(target, name) {
            if (target.mod === undefined) {
                const modulePath = reqResolve.sync(moduleId, basedir !== undefined ? { basedir } : undefined);
                target.mod = require(modulePath);
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
