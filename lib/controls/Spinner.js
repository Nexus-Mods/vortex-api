"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("./Icon");
const React = require("react");
function Spinner(props) {
    return React.createElement(Icon_1.default, { className: props.className, name: 'spinner', style: props.style });
}
exports.default = Spinner;
