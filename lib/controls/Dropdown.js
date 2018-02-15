"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const ReactDOM = require("react-dom");
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
            if (isOpen) {
                const bounds = this.bounds;
                const newUp = this.mNode.getBoundingClientRect().bottom > (bounds.top + bounds.height / 2);
                if (newUp !== this.state.up) {
                    this.setState({ up: newUp });
                }
            }
            this.mOpen = isOpen;
            if (this.props.onToggle) {
                this.props.onToggle.apply(this, arguments);
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
        const relayProps = _.omit(this.props, ['container', 'dropup', 'onToggle']);
        return (React.createElement(react_bootstrap_1.Dropdown, Object.assign({ dropup: this.state.up, onToggle: this.onToggle }, relayProps), this.props.children));
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
