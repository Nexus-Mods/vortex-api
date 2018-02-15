"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncRequire_1 = require("./asyncRequire");
const React = require("react");
/**
 * React Component Wrapper for async require. This requires the
 * component asynchronously (assuming it's the default export),
 * showing nothing until loading is finished.
 *
 * @export
 * @template T
 * @param {string} moduleId
 * @param {string} [basedir]
 * @returns
 */
function default_1(moduleId, basedir) {
    let mod;
    asyncRequire_1.default(moduleId, basedir)
        .then(modIn => mod = modIn);
    return (props) => {
        if (mod === undefined) {
            return null;
        }
        return React.createElement(mod.default, Object.assign({}, props));
    };
}
exports.default = default_1;
