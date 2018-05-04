"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionControl_1 = require("./ActionControl");
const Dropdown_1 = require("./Dropdown");
const Icon_1 = require("./Icon");
const ToolbarIcon_1 = require("./ToolbarIcon");
const TooltipControls_1 = require("./TooltipControls");
const update = require("immutability-helper");
const _ = require("lodash");
const PropTypes = require("prop-types");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_overlays_1 = require("react-overlays");
// takes the props of a Popover. ignores the arrow, applies the absolute
// position
function Positioner(props) {
    const { children, positionLeft, positionTop } = props;
    return (React.createElement("div", { className: props.className, style: { top: positionTop, left: positionLeft, position: 'absolute' } },
        React.createElement("div", { className: 'menu-content' }, children)));
}
class PortalMenu extends React.Component {
    render() {
        const { onClick, onClose, open, target } = this.props;
        return (React.createElement(react_overlays_1.Overlay, { show: open, container: this.context.menuLayer, placement: 'bottom', target: target },
            React.createElement(Positioner, { className: 'icon-menu-positioner' },
                React.createElement(Dropdown_1.default.Menu, { style: { display: 'block', position: 'initial' }, onClose: onClose, open: open, onClick: onClick }, this.props.children))));
    }
}
PortalMenu.contextTypes = {
    menuLayer: PropTypes.object,
};
function genTooltip(show) {
    return typeof (show) === 'string'
        ? show
        : undefined;
}
class MenuAction extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.trigger = () => {
            const { action, instanceId } = this.props;
            const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
            action.action(instanceIds);
        };
    }
    render() {
        const { action, id } = this.props;
        return (React.createElement(react_bootstrap_1.MenuItem, { eventKey: id, onSelect: this.trigger, disabled: action.show !== true, title: genTooltip(action.show) },
            React.createElement(Icon_1.default, { name: action.icon }),
            React.createElement("div", { className: 'button-text' }, action.title)));
    }
}
/**
 * represents an extensible row of icons/buttons/actions
 * In the simplest form this is simply a bunch of buttons that will run
 * an action if clicked, but an icon can also be more dynamic (i.e. rendering
 * dynamic content or having multiple states)
 *
 * @class IconBar
 * @extends {ComponentEx<IProps, {}>}
 */
class IconBar extends React.Component {
    constructor(props) {
        super(props);
        this.renderMenuItem = (icon, index) => {
            const { instanceId } = this.props;
            const id = `${instanceId || '1'}_${index}`;
            if ((icon.icon === null) && (icon.component === undefined)) {
                return (React.createElement(react_bootstrap_1.MenuItem, { className: 'menu-separator-line', key: id, disabled: true }, icon.title));
            }
            if (icon.icon !== undefined) {
                return React.createElement(MenuAction, { key: id, id: id, action: icon, instanceId: instanceId });
            }
            else {
                return (React.createElement(react_bootstrap_1.MenuItem, { key: id, eventKey: id, disabled: icon.show !== true, title: genTooltip(icon.show) }, this.renderCustomIcon(id, icon)));
            }
        };
        this.renderIcon = (icon, index) => {
            if ((icon.icon === null) && (icon.component === undefined)) {
                // skip text-only elements in this mode
                return null;
            }
            return this.renderIconInner(icon, index);
        };
        this.renderIconInner = (icon, index, forceButtonType) => {
            const { instanceId, tooltipPlacement } = this.props;
            const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
            const id = `${instanceId || '1'}_${index}`;
            if (icon.icon !== undefined) {
                // simple case
                if (icon.icon === null) {
                    return React.createElement("p", null, icon.title);
                }
                const buttonType = forceButtonType || this.props.buttonType;
                const hasIcon = (buttonType === undefined)
                    || ['icon', 'both', 'menu'].indexOf(buttonType) !== -1;
                const hasText = (buttonType === undefined)
                    || ['text', 'both', 'menu'].indexOf(buttonType) !== -1;
                return (React.createElement(ToolbarIcon_1.default, { key: id, id: id, instanceId: instanceIds, icon: hasIcon ? icon.icon : undefined, text: hasText ? icon.title : undefined, onClick: icon.action, placement: tooltipPlacement }));
            }
            else {
                return this.renderCustomIcon(id, icon);
            }
        };
        this.setPortalTargetRef = (ref) => {
            this.portalTargetRef = ref;
        };
        this.toggleOpen = () => {
            this.setState(update(this.state, {
                open: { $set: !this.state.open },
                x: { $set: undefined },
                y: { $set: undefined },
            }));
        };
        this.state = {
            open: false,
        };
        this.updateBGClick();
    }
    componentWillReceiveProps() {
        this.updateBGClick();
    }
    render() {
        const { actions, clickAnywhere, collapse, icon, id, instanceId, orientation, className, style } = this.props;
        const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
        const classes = [];
        if (className) {
            classes.push(className);
        }
        if (collapse) {
            classes.push('btngroup-collapsed');
            const collapsed = [];
            const unCollapsed = [];
            actions.forEach(action => {
                if ((collapse === 'force')
                    || ((action.options === undefined) || !action.options.noCollapse)) {
                    collapsed.push(action);
                }
                else {
                    unCollapsed.push(action);
                }
            });
            const moreButton = (collapsed.length === 0) ? null : (React.createElement("div", null,
                React.createElement(TooltipControls_1.IconButton, { id: `btn-menu-${id}`, className: 'btn-embed', onClick: this.toggleOpen, tooltip: '', icon: icon || 'menu', rotateId: `dots-iconbar-${id}`, stroke: true, ref: this.setPortalTargetRef }),
                React.createElement(PortalMenu, { open: this.state.open, target: this.portalTargetRef, onClose: this.toggleOpen, onClick: this.toggleOpen }, this.state.open ? collapsed.map(this.renderMenuItem) : null)));
            return (React.createElement(react_bootstrap_1.ButtonGroup, { id: id, className: classes.join(' '), style: style },
                moreButton,
                unCollapsed.map((iter, idx) => (React.createElement("div", { key: idx }, this.renderIcon(iter, idx))))));
        }
        else {
            return (React.createElement(react_bootstrap_1.ButtonGroup, { id: id, className: classes.join(' '), style: style, vertical: orientation === 'vertical', onClick: this.mBackgroundClick },
                this.props.children,
                actions.map(this.renderIcon)));
        }
    }
    renderCustomIcon(id, icon) {
        // custom case. the caller can pass properties via the props() function and by
        // passing the prop to the iconbar. the props on the iconbar that we don't handle are
        // passed on
        const knownProps = ['condition', 'className', 'group', 't', 'i18nLoadedAt',
            'objects', 'children'];
        const unknownProps = Object.keys(this.props).reduce((prev, current) => {
            if (knownProps.indexOf(current) === -1) {
                return Object.assign({}, prev, { [current]: this.props[current] });
            }
            else {
                return prev;
            }
        }, {});
        const staticProps = Object.assign({}, unknownProps, { key: id, buttonType: this.props.buttonType, orientation: this.props.orientation });
        if (icon.props !== undefined) {
            const addProps = icon.props();
            return React.createElement(icon.component, Object.assign({}, staticProps, addProps));
        }
        else {
            return React.createElement(icon.component, Object.assign({}, staticProps));
        }
    }
    updateBGClick() {
        const { actions, clickAnywhere, instanceId } = this.props;
        const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
        this.mBackgroundClick = ((clickAnywhere === true) && (actions.length === 1))
            ? (() => actions[0].action(instanceIds))
            : undefined;
    }
}
IconBar.contextTypes = {
    menuLayer: PropTypes.object,
};
class ActionIconBar extends React.Component {
    render() {
        const actionProps = _.pick(this.props, ActionIconBar.ACTION_PROPS);
        const barProps = _.omit(this.props, ActionIconBar.ACTION_PROPS);
        return (React.createElement(ActionControl_1.default, Object.assign({}, actionProps),
            React.createElement(IconBar, Object.assign({}, barProps))));
    }
}
ActionIconBar.ACTION_PROPS = ['filter', 'group', 'instanceId', 'staticElements'];
exports.default = ActionIconBar;
