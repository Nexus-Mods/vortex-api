"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const ReactDOM = require("react-dom");
/**
 * An enhanced dropdown button that adjusts placement of the popover based on the
 * position within the container, so it doesn't get cut off (as long as the
 * popover isn't larger than half of the container)
 *
 * @class MyDropdownButton
 * @extends {React.Component<IProps, { up: boolean }>}
 */
class MyDropdownButton extends React.Component {
    constructor(props) {
        super(props);
        this.mOpen = false;
        this.onToggle = (isOpen) => {
            this.mOpen = isOpen;
            if (isOpen) {
                const bounds = this.bounds;
                const nodeBounds = this.mNode.getBoundingClientRect();
                const newUp = nodeBounds.bottom > (bounds.top + bounds.height / 2);
                const newRight = nodeBounds.right > (bounds.left + bounds.width / 2);
                this.setState({ up: newUp, right: newRight });
            }
            if (this.props.onToggle) {
                this.props.onToggle.apply(this, arguments);
            }
        };
        this.state = {
            up: false,
            right: false,
        };
    }
    componentDidMount() {
        this.mNode = ReactDOM.findDOMNode(this);
    }
    render() {
        const { up, right } = this.state;
        const relayProps = _.omit(this.props, ['container', 'dropup', 'onToggle', 'split', 'children']);
        const Comp = this.props.split ? react_bootstrap_1.SplitButton : react_bootstrap_1.DropdownButton;
        return (React.createElement(Comp, Object.assign({ dropup: up, pullRight: right, onToggle: this.onToggle }, relayProps), this.mOpen ? this.props.children : null));
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
exports.default = MyDropdownButton;
