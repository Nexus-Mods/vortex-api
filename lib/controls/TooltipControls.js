"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("./Icon");
const update = require("immutability-helper");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
/**
 * Button with a tooltip
 *
 */
class Button extends React.PureComponent {
    render() {
        const relayProps = Object.assign({}, this.props);
        delete relayProps.tooltip;
        delete relayProps.placement;
        if (typeof (this.props.tooltip) === 'string') {
            return (React.createElement(react_bootstrap_1.Button, Object.assign({}, relayProps, { title: this.props.tooltip }), this.props.children));
        }
        else {
            const tooltip = React.createElement(react_bootstrap_1.Popover, { id: this.props.id }, this.props.tooltip);
            return (React.createElement(react_bootstrap_1.OverlayTrigger, { overlay: tooltip, placement: this.props.placement || 'bottom', delayShow: 300, delayHide: 150 },
                React.createElement(react_bootstrap_1.Button, Object.assign({}, relayProps), this.props.children)));
        }
    }
}
exports.Button = Button;
const iconPropNames = new Set(['spin', 'pulse', 'stroke', 'border', 'inverse',
    'flip', 'rotate', 'rotateId']);
class IconButton extends React.Component {
    render() {
        const buttonProps = {};
        const iconProps = {};
        Object.keys(this.props).forEach(propKey => {
            if (['tooltip', 'placement', 'icon'].indexOf(propKey) !== -1) {
                return;
            }
            if (iconPropNames.has(propKey)) {
                iconProps[propKey] = this.props[propKey];
            }
            else {
                buttonProps[propKey] = this.props[propKey];
            }
        });
        if (buttonProps['className'] !== undefined) {
            buttonProps['className'] += ' icon-button';
        }
        else {
            buttonProps['className'] = 'icon-button';
        }
        if (React.Children.count(this.props.children) > 0) {
            buttonProps['className'] += ' has-children';
        }
        if (typeof (this.props.tooltip) === 'string') {
            return (React.createElement(react_bootstrap_1.Button, Object.assign({}, buttonProps, { title: this.props.tooltip }),
                React.createElement(Icon_1.default, Object.assign({ name: this.props.icon }, iconProps)),
                this.props.children));
        }
        else {
            const tooltip = React.createElement(react_bootstrap_1.Popover, { id: this.props.id }, this.props.tooltip);
            return (React.createElement(react_bootstrap_1.OverlayTrigger, { overlay: tooltip, placement: this.props.placement || 'bottom', delayShow: 300, delayHide: 150 },
                React.createElement(react_bootstrap_1.Button, Object.assign({}, buttonProps),
                    React.createElement(Icon_1.default, Object.assign({ name: this.props.icon }, iconProps)),
                    this.props.children)));
        }
    }
}
exports.IconButton = IconButton;
class ToggleButton extends React.Component {
    render() {
        const { state } = this.props;
        const relayProps = Object.assign({}, this.props);
        ['buttonType', 'tooltip', 'offTooltip', 'placement',
            'onIcon', 'offIcon', 'state'].forEach((prop) => {
            delete relayProps[prop];
        });
        const bType = this.props.buttonType || 'icon';
        const icon = state ? this.props.onIcon : this.props.offIcon;
        const tooltipText = state ? this.props.tooltip : this.props.offTooltip;
        if (typeof (tooltipText) === 'string') {
            return (React.createElement(react_bootstrap_1.Button, Object.assign({}, relayProps, { title: tooltipText }),
                ['icon', 'both'].indexOf(bType) !== -1 ? React.createElement(Icon_1.default, { name: icon }) : null,
                ['text', 'both'].indexOf(bType) !== -1
                    ? React.createElement("p", { className: 'button-text' }, tooltipText)
                    : null,
                this.props.children));
        }
        else {
            const tooltip = (React.createElement(react_bootstrap_1.Popover, { id: this.props.id }, tooltipText));
            return (React.createElement(react_bootstrap_1.OverlayTrigger, { overlay: tooltip, placement: this.props.placement || 'bottom', delayShow: 300, delayHide: 150 },
                React.createElement(react_bootstrap_1.Button, Object.assign({}, relayProps),
                    ['icon', 'both'].indexOf(bType) !== -1 ? React.createElement(Icon_1.default, { name: icon }) : null,
                    ['text', 'both'].indexOf(bType) !== -1
                        ? React.createElement("p", { className: 'button-text' }, tooltipText)
                        : null,
                    this.props.children)));
        }
    }
}
exports.ToggleButton = ToggleButton;
class NavItem extends React.Component {
    render() {
        const relayProps = Object.assign({}, this.props);
        delete relayProps.tooltip;
        delete relayProps.placement;
        if (typeof (this.props.tooltip) === 'string') {
            return (React.createElement(react_bootstrap_1.NavItem, Object.assign({}, relayProps, { title: this.props.tooltip }), this.props.children));
        }
        else {
            const tooltip = React.createElement(react_bootstrap_1.Popover, { id: this.props.id }, this.props.tooltip);
            return (React.createElement(react_bootstrap_1.OverlayTrigger, { overlay: tooltip, placement: this.props.placement || 'bottom', delayShow: 300, delayHide: 150 },
                React.createElement(react_bootstrap_1.NavItem, Object.assign({}, relayProps), this.props.children)));
        }
    }
}
exports.NavItem = NavItem;
/**
 * Icon with a tooltip
 *
 * @export
 * @class Icon
 */
class Icon extends React.Component {
    render() {
        const relayProps = Object.assign({}, this.props);
        delete relayProps.tooltip;
        delete relayProps.placement;
        if (typeof (this.props.tooltip) === 'string') {
            return (React.createElement("a", { className: 'fake-link', title: this.props.tooltip },
                React.createElement(Icon_1.default, Object.assign({}, relayProps))));
        }
        else {
            const tooltip = React.createElement(react_bootstrap_1.Popover, { id: this.props.id }, this.props.tooltip);
            return (React.createElement(react_bootstrap_1.OverlayTrigger, { overlay: tooltip, placement: this.props.placement || 'bottom', delayShow: 300, delayHide: 150 },
                React.createElement("a", { className: 'fake-link' },
                    React.createElement(Icon_1.default, Object.assign({}, relayProps)))));
        }
    }
}
exports.Icon = Icon;
class ClickPopover extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOverlay = () => {
            this.setState(update(this.state, { open: { $set: !this.state.open } }));
        };
        this.hideOverlay = () => {
            this.setState(update(this.state, { open: { $set: false } }));
        };
        this.setRef = (ref) => {
            this.mRef = ref;
        };
        this.state = {
            open: false,
        };
    }
    render() {
        const { className, children, icon, id, tooltip } = this.props;
        const popover = (React.createElement(react_bootstrap_1.Popover, { id: `popover-${id}`, style: { maxWidth: 500 } }, children));
        return (React.createElement("div", { style: { display: 'inline' } },
            React.createElement(IconButton, { id: `btn-${id}`, className: className, tooltip: tooltip, icon: icon, ref: this.setRef, onClick: this.toggleOverlay }),
            React.createElement(react_bootstrap_1.Overlay, { show: this.state.open, onHide: this.hideOverlay, placement: 'left', rootClose: true, target: this.mRef }, popover)));
    }
}
exports.ClickPopover = ClickPopover;
