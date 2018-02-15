"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../util/ComponentEx");
const PropTypes = require("prop-types");
const React = require("react");
const react_overlays_1 = require("react-overlays");
class MainPageHeader extends React.Component {
    shouldComponentUpdate() {
        return true;
    }
    render() {
        if (this.context.headerPortal() === null) {
            return null;
        }
        return (this.props.mainPage === this.context.page) ? (React.createElement(react_overlays_1.Portal, { container: this.context.headerPortal },
            React.createElement("div", { className: 'mainpage-header' }, this.props.children))) : null;
    }
}
MainPageHeader.contextTypes = {
    api: PropTypes.object.isRequired,
    headerPortal: PropTypes.func,
    page: PropTypes.string,
};
function mapStateToProps(state) {
    return {
        mainPage: state.session.base.mainPage,
    };
}
exports.default = ComponentEx_1.connect(mapStateToProps)(MainPageHeader);
