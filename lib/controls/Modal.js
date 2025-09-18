"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_one_1 = __importDefault(require("memoize-one"));
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const MutexContext_1 = require("../util/MutexContext");
class MyModal extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.getContainer = (0, memoize_one_1.default)(() => this.getContainerImpl());
        this.mMenuLayer = null;
        this.setMenuLayer = (ref) => {
            this.mMenuLayer = ref;
            this.forceUpdate();
        };
    }
    getChildContext() {
        return Object.assign(Object.assign({}, this.context), { menuLayer: this.mMenuLayer });
    }
    render() {
        return (React.createElement("div", { className: 'modal-container' },
            React.createElement(MutexContext_1.MutexWrapper, { show: this.props.show },
                React.createElement(react_bootstrap_1.Modal, Object.assign({}, this.props, { container: this.getContainer() }),
                    React.createElement("div", { className: 'menu-layer', ref: this.setMenuLayer }),
                    this.mMenuLayer !== null ? this.props.children : null))));
    }
    getContainerImpl() {
        return document.getElementById('overlays');
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
