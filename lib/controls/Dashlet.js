"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const React = require("react");
class Dashlet extends React.Component {
    render() {
        const { className, title } = this.props;
        const classes = ['dashlet'].concat(className.split(' '));
        return (React.createElement("div", { className: classes.join(' ') },
            util_1.truthy(title) ? React.createElement("h2", null, title) : null,
            this.props.children));
    }
}
exports.default = Dashlet;
