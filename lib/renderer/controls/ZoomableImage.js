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
const storeHelper_1 = require("../../util/storeHelper");
const Icon_1 = __importDefault(require("./Icon"));
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_overlays_1 = require("react-overlays");
function PopoverImage(props) {
    return (React.createElement(react_bootstrap_1.Image, { src: props.src, className: 'zoomed-image', onClick: props.onClick, style: { top: props.positionTop, left: props.positionLeft } }));
}
class ZoomableImage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOverlay = () => {
            this.setState((0, storeHelper_1.setSafe)(this.state, ['showOverlay'], !this.state.showOverlay));
        };
        this.state = {
            showOverlay: false,
        };
    }
    render() {
        const { className, container, overlayClass, url } = this.props;
        const { showOverlay } = this.state;
        const classes = ['zoom-backdrop'];
        if (overlayClass !== undefined) {
            classes.push(overlayClass);
        }
        return (React.createElement("div", { className: className },
            (url !== undefined)
                ? React.createElement(react_bootstrap_1.Image, { className: 'zoomable-image', src: url, onClick: this.toggleOverlay })
                : React.createElement(Icon_1.default, { name: 'placeholder-image' }),
            showOverlay ? (React.createElement(react_overlays_1.Portal, { container: container !== undefined ? container : this.context.menuLayer },
                React.createElement("div", { className: classes.join(' ') },
                    React.createElement(PopoverImage, { src: url, onClick: this.toggleOverlay })))) : null,
            this.props.children));
    }
}
ZoomableImage.contextTypes = {
    menuLayer: PropTypes.object,
};
exports.default = ZoomableImage;
