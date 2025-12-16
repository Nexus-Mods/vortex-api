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
const Dropdown_1 = __importDefault(require("./Dropdown"));
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_overlays_1 = require("react-overlays");
function nop() {
    // nop
}
class PortalMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = (evt) => {
            if (this.props.useMousePosition === true) {
                this.setState({ x: evt.clientX, y: evt.clientY });
            }
            this.props.onClick(evt);
        };
        this.state = {
            x: 0,
            y: 0,
        };
    }
    render() {
        const { onClose, open, placement, target, useMousePosition } = this.props;
        return (React.createElement(react_overlays_1.Overlay, { show: open, container: this.context.menuLayer, placement: placement !== null && placement !== void 0 ? placement : "bottom", onHide: nop, target: target, flip: true, rootClose: true, popperConfig: {
                modifiers: {
                    preventOverflow: {
                        boundariesElement: "window",
                    },
                },
            } }, (args) => {
            try {
                if (useMousePosition === true) {
                    args.props.style.top = this.state.y;
                    args.props.style.left = this.state.x;
                    delete args.props.style.transform;
                }
                else if (!!useMousePosition) {
                    args.props.style.top = useMousePosition.y;
                    args.props.style.left = useMousePosition.x;
                    delete args.props.style.transform;
                }
                else if (args.props.style !== undefined &&
                    args.props.style.transform !== undefined) {
                    // translate3d causes blurry text on "low-res" screens.
                    // Newer popper versions seem to account for that but react-popper still
                    // relies on an old version at the time of writing
                    const translateMatch = args.props.style.transform.match(/translate3d\((\w+), (\w+), 0\)/);
                    if (translateMatch !== undefined) {
                        args.props.style.top = translateMatch[2];
                        args.props.style.left = translateMatch[1];
                        delete args.props.style.transform;
                    }
                }
            }
            catch (err) {
                // nop, wtf is going on here?
            }
            return (React.createElement("div", Object.assign({}, args.props, { className: "icon-menu-positioner" }),
                React.createElement("div", { className: "menu-content" },
                    React.createElement(Dropdown_1.default.Menu, { style: { display: "block", position: "initial" }, onClose: onClose, open: open, onClick: this.onClick, onSelect: this.props.onSelect }, this.props.children))));
        }));
    }
}
PortalMenu.contextTypes = {
    menuLayer: PropTypes.object,
};
exports.default = PortalMenu;
