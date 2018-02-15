"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class MainPageBody extends React.Component {
    render() {
        return (React.createElement("div", Object.assign({ className: 'main-page-body' }, this.props), this.props.children));
    }
}
exports.default = MainPageBody;
