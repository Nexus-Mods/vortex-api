"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeModReference = makeModReference;
const util_1 = require("../../../util/util");
const testModReference_1 = require("./testModReference");
function makeModReference(mod) {
    var _a;
    if (!(0, util_1.truthy)(mod.attributes['fileMD5'])
        && !(0, util_1.truthy)(mod.attributes['logicalFileName'])
        && !(0, util_1.truthy)(mod.attributes['fileName'])) {
        // if none of the usual markers are available, use just the mod name
        return {
            fileExpression: mod.attributes['name'],
        };
    }
    const fileName = mod.attributes['fileName'];
    return {
        fileExpression: (fileName !== undefined)
            ? (0, testModReference_1.sanitizeExpression)(fileName)
            : undefined,
        fileMD5: mod.attributes['fileMD5'],
        versionMatch: (_a = (0, testModReference_1.coerceToSemver)(mod.attributes['version'])) !== null && _a !== void 0 ? _a : mod.attributes['version'],
        logicalFileName: mod.attributes['logicalFileName'],
    };
}
