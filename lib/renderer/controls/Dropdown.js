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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyMenu = void 0;
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ReactDOM = __importStar(require("react-dom"));
class DummyMenu extends React.Component {
    render() {
        return React.createElement("div", null);
    }
    focusNext() {
        // nop
    }
}
exports.DummyMenu = DummyMenu;
DummyMenu.defaultProps = {
    bsRole: react_bootstrap_1.Dropdown.Menu.defaultProps.bsRole,
};
/**
 * An enhanced dropdown that adjusts placement of the popover based on the
 * position within the container, so it doesn't get cut off (as long as the
 * popover isn't larger than half of the container)
 *
 * @class MyDropdown
 * @extends {React.Component<IProps, { up: boolean }>}
 */
class MyDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.mOpen = false;
        this.onToggle = (isOpen) => {
            this.mOpen = isOpen;
            if (isOpen) {
                const bounds = this.bounds;
                const newUp = this.mNode.getBoundingClientRect().bottom > (bounds.top + bounds.height / 2);
                // force redraw to ensure the menu gets rendered too
                this.setState({ up: newUp });
            }
            if (this.props.onToggle) {
                this.props.onToggle.apply(this, [isOpen]);
            }
        };
        this.state = {
            up: false,
        };
    }
    componentDidMount() {
        this.mNode = ReactDOM.findDOMNode(this);
    }
    render() {
        const relayProps = _.omit(this.props, ['container', 'dropup', 'onToggle', 'children']);
        const filt = this.mOpen
            ? this.props.children
            : React.Children.map(this.props.children, child => child.props.bsRole === 'menu' ? React.createElement(DummyMenu, null) : child);
        return (React.createElement(react_bootstrap_1.Dropdown, Object.assign({ dropup: this.state.up, onToggle: this.onToggle }, relayProps), filt));
    }
    get bounds() {
        return this.props.container
            ? this.props.container.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: window.innerHeight,
                right: window.innerWidth,
                height: window.innerHeight,
                width: window.innerWidth,
            };
    }
}
MyDropdown.Menu = react_bootstrap_1.Dropdown.Menu;
MyDropdown.Toggle = react_bootstrap_1.Dropdown.Toggle;
exports.default = MyDropdown;
