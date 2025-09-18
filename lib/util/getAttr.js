"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAttr(dict, key, def) {
    if ((dict === undefined) || (dict === null)) {
        return def;
    }
    return dict[key] !== undefined ? dict[key] : def;
}
exports.default = getAttr;
