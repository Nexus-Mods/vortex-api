"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../util/ComponentEx");
const PropTypes = require("prop-types");
const React = require("react");
const react_overlays_1 = require("react-overlays");
class MainPageOverlay extends React.Component {
    render() {
        if (this.context.overlayPortal() === null) {
            return null;
        }
        return (this.context.page === this.props.mainPage) ? (React.createElement(react_overlays_1.Portal, { container: this.context.overlayPortal },
            React.createElement("div", null, this.props.children))) : null;
    }
}
MainPageOverlay.contextTypes = {
    api: PropTypes.object.isRequired,
    overlayPortal: PropTypes.func,
    page: PropTypes.string,
};
function mapStateToProps(state) {
    return {
        mainPage: state.session.base.mainPage,
    };
}
exports.default = ComponentEx_1.connect(mapStateToProps)(MainPageOverlay);
