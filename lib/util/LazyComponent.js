"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reqResolve = require("resolve");
function default_1(moduleId, basedir) {
    let mod;
    return (props) => {
        if (mod === undefined) {
            const options = basedir !== undefined ? { basedir } : undefined;
            mod = require(reqResolve.sync(moduleId, options));
        }
        return React.createElement(mod.default, Object.assign({}, props));
    };
}
exports.default = default_1;
