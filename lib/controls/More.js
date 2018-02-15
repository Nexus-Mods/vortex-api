"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Overlay_1 = require("./Overlay");
const TooltipControls_1 = require("./TooltipControls");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
/**
 * Component to make additional information available to the user without taking much
 * space. The user only sees a clickable question mark. On click it will show a popover
 * with the info.
 *
 * double-linebreaks can be used in the text to start a new paragraph.
 *
 * @param {IProps} props
 * @returns
 */
class More extends React.Component {
    constructor(props) {
        super(props);
        this.getRef = () => this.mRef;
        this.setRef = ref => {
            this.mRef = ref;
        };
        this.toggle = evt => {
            evt.preventDefault();
            this.setState({ open: !this.state.open });
        };
        this.hide = () => {
            this.setState({ open: false });
        };
        this.getBounds = () => {
            const { container } = this.props;
            return container !== undefined ? container.getBoundingClientRect() : {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight,
            };
        };
        this.state = {
            open: false,
        };
    }
    render() {
        const { children, id, name, orientation } = this.props;
        const { open } = this.state;
        if (children === undefined) {
            return null;
        }
        let pCounter = 0;
        const popover = (React.createElement(react_bootstrap_1.Popover, { id: `popover-${id}`, className: 'more-popover', title: name }, children.split('\n\n').map((paragraph) => React.createElement("p", { key: pCounter++ }, paragraph))));
        return (React.createElement("div", { style: { display: 'inline' } },
            React.createElement(Overlay_1.default, { rootClose: true, show: open, onHide: this.hide, orientation: orientation, target: this.getRef, getBounds: this.getBounds }, popover),
            React.createElement("div", { className: 'more-link', ref: this.setRef },
                React.createElement(TooltipControls_1.IconButton, { tooltip: '', onClick: this.toggle, icon: 'details' }))));
    }
}
exports.default = More;
