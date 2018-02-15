"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExtensionProvider_1 = require("../util/ExtensionProvider");
const Dropdown_1 = require("./Dropdown");
const DropdownButton_1 = require("./DropdownButton");
const DynamicProps_1 = require("./DynamicProps");
const Icon_1 = require("./Icon");
const ToolbarIcon_1 = require("./ToolbarIcon");
const TooltipControls_1 = require("./TooltipControls");
const update = require("immutability-helper");
const PropTypes = require("prop-types");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_overlays_1 = require("react-overlays");
function iconSort(lhs, rhs) {
    return (lhs.position || 100) - (rhs.position || 100);
}
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
function arrayType(x) {
    return null;
}
/**
 * represents an extensible row of icons/buttons
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
                return (React.createElement(ToolbarIcon_1.default, { key: id, id: id, instanceId: instanceIds, icon: icon.icon, text: icon.title, onClick: icon.action, placement: tooltipPlacement }));
            }
            else {
                return this.renderCustomIcon(id, icon);
            }
        };
        this.triggerDefault = (evt) => {
            const { instanceId, objects } = this.props;
            const title = evt.currentTarget.attributes.getNamedItem('data-value').value;
            const action = objects.find(iter => iter.title === evt.currentTarget.attributes.getNamedItem('data-value').value);
            if (action !== undefined) {
                const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
                action.action(instanceIds);
            }
        };
        this.setButtonRef = (ref) => {
            this.buttonRef = ref;
        };
        this.toggleCollapsed = () => {
            this.setState(update(this.state, {
                open: { $set: !this.state.open },
            }));
        };
        this.state = {
            open: false,
        };
    }
    render() {
        const { collapse, dropdown, icon, id, instanceId, objects, orientation, className, style } = this.props;
        const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
        const icons = this.iconsToShow();
        const classes = [];
        if (className) {
            classes.push(className);
        }
        if (dropdown) {
            const sorted = icons.sort(iconSort);
            const title = (React.createElement("div", { "data-value": sorted[0].title, onClick: sorted[0].show ? this.triggerDefault : undefined, title: genTooltip(sorted[0].show) },
                React.createElement(Icon_1.default, { name: sorted[0].icon }),
                sorted[0].title));
            return (React.createElement(DropdownButton_1.default, { id: `${id}-menu`, split: true, title: title }, sorted.slice(1).map((iter, idx) => this.renderMenuItem(iter, idx))));
        }
        else if (collapse) {
            classes.push('btngroup-collapsed');
            const collapsed = [];
            const unCollapsed = [];
            icons.forEach(action => {
                if ((collapse === 'force')
                    || ((action.options === undefined) || !action.options.noCollapse)) {
                    collapsed.push(action);
                }
                else {
                    unCollapsed.push(action);
                }
            });
            const moreButton = (collapsed.length === 0) ? null : (React.createElement("div", null,
                React.createElement(TooltipControls_1.IconButton, { id: `btn-menu-${id}`, className: 'btn-embed', onClick: this.toggleCollapsed, tooltip: '', icon: icon || 'menu', rotateId: `dots-iconbar-${id}`, stroke: true, ref: this.setButtonRef }),
                React.createElement(PortalMenu, { open: this.state.open, target: this.buttonRef, onClose: this.toggleCollapsed, onClick: this.toggleCollapsed }, this.state.open ? collapsed.sort(iconSort).map(this.renderMenuItem) : null)));
            return (React.createElement(react_bootstrap_1.ButtonGroup, { id: id, className: classes.join(' '), style: style },
                moreButton,
                unCollapsed.sort(iconSort).map((iter, idx) => (React.createElement("div", { key: idx }, this.renderIcon(iter, idx))))));
        }
        else {
            return (React.createElement(react_bootstrap_1.ButtonGroup, { id: id, className: classes.join(' '), style: style, vertical: orientation === 'vertical' },
                this.props.children,
                icons.sort(iconSort).map(this.renderIcon)));
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
        const staticProps = Object.assign({}, unknownProps, { key: id });
        if (icon.props !== undefined) {
            return (React.createElement(DynamicProps_1.default, { key: id, dynamicProps: icon.props, staticProps: staticProps, component: icon.component }));
        }
        else {
            return React.createElement(icon.component, Object.assign({}, staticProps));
        }
    }
    iconsToShow() {
        const { instanceId, objects } = this.props;
        const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
        const checkCondition = (def) => {
            if (def.condition === undefined) {
                return true;
            }
            try {
                return def.condition(instanceIds);
            }
            catch (err) {
                return `Error: ${err.message}`;
            }
        };
        return objects
            .map((iter) => (Object.assign({}, iter, { show: checkCondition(iter) })))
            .filter(iter => iter.show !== false);
    }
}
IconBar.contextTypes = {
    menuLayer: PropTypes.object,
};
/**
 * called to register an extension icon. Please note that this function is called once for every
 * icon bar in the ui for each icon. Only the bar with matching group name should accept the icon
 * by returning a descriptor object.
 *
 * @param {IconBar} instance the bar to test against. Please note that this is not actually an
 *                           IconBar instance but the Wrapper, as the bar itself is not yet
 *                           registered, but all props are there
 * @param {string} group name of the icon group this icon wants to be registered with
 * @param {string} icon name of the icon to use
 * @param {string} title title of the icon
 * @param {*} action the action to call on click
 * @returns
 */
function registerAction(instanceProps, group, position, iconOrComponent, options, titleOrProps, actionOrCondition, condition) {
    if (instanceProps.group === group) {
        if (typeof (iconOrComponent) === 'string') {
            return { type: 'simple', icon: iconOrComponent, title: titleOrProps,
                position, action: actionOrCondition, options, condition };
        }
        else {
            return { type: 'ext', component: iconOrComponent, props: titleOrProps,
                position, condition: actionOrCondition, options };
        }
    }
    else {
        return undefined;
    }
}
exports.default = ExtensionProvider_1.extend(registerAction)(IconBar);
