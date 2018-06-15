"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function default_1(load) {
    let mod;
    return (props) => {
        if (mod === undefined) {
            mod = load();
        }
        return React.createElement(mod.default, Object.assign({}, props));
    };
}
exports.default = default_1;
