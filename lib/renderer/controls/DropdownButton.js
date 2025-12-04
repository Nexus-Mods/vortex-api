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
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ReactDOM = __importStar(require("react-dom"));
/**
 * An enhanced dropdown button that adjusts placement of the popover based on the
 * position within the container, so it doesn't get cut off (as long as the
 * popover isn't larger than half of the container)
 *
 * @class MyDropdownButton
 * @extends {React.Component<IProps, { up: boolean }>}
 */
function MyDropdownButton(props) {
    const { container } = props;
    const [up, setUp] = React.useState(false);
    const [right, setRight] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    const getBounds = React.useCallback(() => {
        return container
            ? container.getBoundingClientRect()
            : {
                top: 0,
                left: 0,
                bottom: window.innerHeight,
                right: window.innerWidth,
                height: window.innerHeight,
                width: window.innerWidth,
            };
    }, [container]);
    const onToggle = React.useCallback((isOpen, evt, metadata) => {
        var _a;
        if ((_a = evt === null || evt === void 0 ? void 0 : evt.isDefaultPrevented) === null || _a === void 0 ? void 0 : _a.call(evt)) {
            return;
        }
        setOpen(isOpen);
        if (isOpen) {
            const bounds = getBounds();
            const nodeBounds = node.current.getBoundingClientRect();
            const newUp = nodeBounds.bottom > (bounds.top + bounds.height / 2);
            const newRight = nodeBounds.right > (bounds.left + bounds.width / 2);
            setUp(newUp);
            setRight(newRight);
        }
        if (props.onToggle) {
            props.onToggle(isOpen, evt, metadata);
        }
    }, [setOpen]);
    const setRef = React.useCallback((newRef) => {
        node.current = ReactDOM.findDOMNode(newRef);
    }, []);
    const relayProps = _.omit(props, ['container', 'dropup', 'onToggle', 'split', 'children']);
    const Comp = props.split ? react_bootstrap_1.SplitButton : react_bootstrap_1.DropdownButton;
    return (React.createElement(Comp, Object.assign({ ref: setRef, dropup: up, pullRight: right, open: open, onToggle: onToggle }, relayProps), open ? props.children : null));
}
exports.default = MyDropdownButton;
