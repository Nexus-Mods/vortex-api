"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PropTypes = require("prop-types");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
class MyModal extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.setMenuLayer = (ref) => {
            this.mMenuLayer = ref;
        };
    }
    getChildContext() {
        return Object.assign({}, this.context, { menuLayer: this.mMenuLayer });
    }
    render() {
        return (React.createElement("div", { className: 'modal-container' },
            React.createElement(react_bootstrap_1.Modal, Object.assign({}, this.props),
                React.createElement("div", { className: 'menu-layer', ref: this.setMenuLayer }),
                this.props.children)));
    }
}
MyModal.Header = react_bootstrap_1.Modal.Header;
MyModal.Title = react_bootstrap_1.Modal.Title;
MyModal.Body = react_bootstrap_1.Modal.Body;
MyModal.Footer = react_bootstrap_1.Modal.Footer;
MyModal.childContextTypes = {
    menuLayer: PropTypes.object,
};
exports.default = MyModal;
