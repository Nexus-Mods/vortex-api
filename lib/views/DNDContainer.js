"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dnd_core_1 = require("dnd-core");
const PropTypes = require("prop-types");
const React = require("react");
const react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
let globalDNDManager;
function getContext() {
    if (globalDNDManager === undefined) {
        globalDNDManager = new dnd_core_1.DragDropManager(react_dnd_html5_backend_1.default);
    }
    return globalDNDManager;
}
class DNDContainer extends React.Component {
    getChildContext() {
        return {
            dragDropManager: getContext(),
        };
    }
    render() {
        const { children, style } = this.props;
        const childCount = React.Children.count(children);
        if (childCount === 0) {
            // should this be reported as an error? it might just be the child Element
            // is disabled/hidden for whatever reason
            return null;
        }
        return React.createElement("div", { style: style }, children);
    }
}
DNDContainer.childContextTypes = {
    dragDropManager: PropTypes.object.isRequired,
};
exports.default = DNDContainer;
