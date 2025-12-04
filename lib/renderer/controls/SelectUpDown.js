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
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const react_select_1 = __importDefault(require("react-select"));
class SelectUpDown extends React.Component {
    constructor(props) {
        super(props);
        this.mNode = null;
        this.onMenuOpen = () => {
            const bounds = this.bounds;
            const newUp = this.mNode.getBoundingClientRect().bottom > (bounds.top + bounds.height / 2);
            // force redraw to ensure the menu gets rendered too
            this.setState({ up: newUp });
            if (this.props.onOpen !== undefined) {
                this.props.onOpen.apply(this);
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
        const classes = ['select-up-down'];
        if (this.props.className) {
            classes.push(...this.props.className.split(' '));
        }
        if (this.state.up) {
            classes.push('select-up-down-up');
        }
        return (React.createElement(react_select_1.default, Object.assign({}, this.props, { className: classes.join(' '), onOpen: this.onMenuOpen })));
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
exports.default = SelectUpDown;
