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
/**
 * custom variant of the overlay that automatically chooses the placement
 * of the popover based on the position on the screen.
 *
 * This still uses an "orientation" of horizontal or vertical to pick the dimension
 * on which to move.
 *
 * The prop "getBounds" is used to retrieve the bounding rect used to determine the
 * placement. We can't use the container for this as the container may be a scrolling
 * control and not having to scroll to see the popover is the whole point of this.
 *
 * Right now the placement is only calculated when the popover is opened, it isn't updated
 * as a result of scrolling/resizing while the popover is open
 *
 * @class MyOverlayTrigger
 * @extends {React.Component<any, { placement: string }>}
 */
class MyOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.onEnter = (input) => {
            const node = typeof this.props.target === 'function' ? this.props.target() : this.props.target;
            if (node) {
                const bounds = this.props.getBounds();
                if (this.props.orientation === 'horizontal') {
                    const rightOfMid = node.getBoundingClientRect().left > bounds.left + bounds.width / 2;
                    this.setState({
                        placement: rightOfMid ? 'left' : 'right',
                    });
                }
                else {
                    const belowMid = node.getBoundingClientRect().top > bounds.top + bounds.height / 2;
                    this.setState({
                        placement: belowMid ? 'top' : 'bottom',
                    });
                }
            }
            if (this.props.onEnter) {
                this.props.onEnter(input);
            }
        };
        this.state = {
            placement: props.orientation === 'horizontal' ? 'right' : 'bottom',
        };
    }
    render() {
        const { placement } = this.state;
        const relayProps = _.omit(this.props, ['getBounds', 'placement', 'onEnter', 'triggerRef']);
        return (React.createElement(react_bootstrap_1.Overlay, Object.assign({ placement: placement, onEnter: this.onEnter, ref: this.props.triggerRef }, relayProps), this.props.children));
    }
}
exports.default = MyOverlay;
