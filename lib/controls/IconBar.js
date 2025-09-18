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
const util_1 = require("../util/util");
const ActionControl_1 = __importDefault(require("./ActionControl"));
const Icon_1 = __importDefault(require("./Icon"));
const PortalMenu_1 = __importDefault(require("./PortalMenu"));
const ToolbarDropdown_1 = __importDefault(require("./ToolbarDropdown"));
const ToolbarIcon_1 = __importDefault(require("./ToolbarIcon"));
const TooltipControls_1 = require("./TooltipControls");
const immutability_helper_1 = __importDefault(require("immutability-helper"));
const _ = __importStar(require("lodash"));
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_dom_1 = __importDefault(require("react-dom"));
function genTooltip(t, show, ns) {
    return typeof (show) === 'string'
        ? t(show, { ns })
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
        var _a, _b;
        const { t, action, id } = this.props;
        return (React.createElement(react_bootstrap_1.MenuItem, { eventKey: id, onSelect: this.trigger, disabled: action.show !== true, title: genTooltip(t, action.show, (_a = action.options) === null || _a === void 0 ? void 0 : _a.namespace) },
            React.createElement(Icon_1.default, { name: action.icon }),
            React.createElement("div", { className: 'button-text' }, t(action.title, { ns: (_b = action.options) === null || _b === void 0 ? void 0 : _b.namespace }))));
    }
}
function nop() {
    // nop
}
function IconBarIcon(props) {
    var _a, _b, _c, _d;
    const { t, actionId, buttonType, icon, instanceIds, tooltipPlacement } = props;
    // stuff for submenus
    const [open, setOpenMenu] = React.useState(false);
    const [subMenus, setSubMenus] = React.useState([]);
    const setOpen = React.useCallback((value) => {
        if (Array.isArray(icon.subMenus)) {
            setSubMenus(icon.subMenus);
        }
        else {
            setSubMenus(icon.subMenus());
        }
        setOpenMenu(value);
    }, [setOpenMenu, icon.subMenus]);
    const itemRef = React.useRef();
    const trigger = React.useCallback(() => {
        var _a;
        (_a = icon.action) === null || _a === void 0 ? void 0 : _a.call(icon, instanceIds, icon.data);
        if (icon.subMenus !== undefined) {
            setOpen(old => !old);
        }
    }, [instanceIds, icon, setOpen]);
    const setOpenFalse = React.useCallback(() => { setOpen(false); }, [setOpen]);
    const hasIcon = (buttonType === undefined)
        || ['icon', 'both', 'menu'].includes(buttonType);
    const hasText = (buttonType === undefined)
        || ['text', 'both', 'menu'].includes(buttonType);
    const tooltip = (typeof (icon.show) === 'string')
        ? icon.show
        : t(icon.title, { ns: (_a = icon.options) === null || _a === void 0 ? void 0 : _a.namespace });
    const setItemRef = (ref) => {
        itemRef.current = react_dom_1.default.findDOMNode(ref);
    };
    return (React.createElement(ToolbarIcon_1.default, { key: actionId, ref: setItemRef, className: actionId, instanceId: instanceIds, icon: hasIcon ? icon.icon : undefined, text: hasText ? t(icon.title, { ns: (_b = icon.options) === null || _b === void 0 ? void 0 : _b.namespace }) : undefined, tooltip: tooltip, onClick: trigger, placement: tooltipPlacement, disabled: (icon.show !== true) && (icon.show !== undefined), stroke: ((_c = icon.options) === null || _c === void 0 ? void 0 : _c.hollowIcon) === true, hollow: ((_d = icon.options) === null || _d === void 0 ? void 0 : _d.hollowIcon) === true },
        React.createElement(PortalMenu_1.default, { open: open, target: itemRef.current, onClose: setOpenFalse, onClick: nop }, (subMenus !== null && subMenus !== void 0 ? subMenus : []).map(subMenu => React.createElement(MenuAction, { t: t, key: subMenu.title, id: subMenu.title, action: subMenu, instanceId: actionId })))));
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
            var _a;
            const { t, instanceId } = this.props;
            const id = `${instanceId || '1'}_${index}`;
            if ((icon.icon === null) && (icon.component === undefined)) {
                return (React.createElement(react_bootstrap_1.MenuItem, { className: 'menu-separator-line', key: id, disabled: true }, t(icon.title, { ns: (_a = icon.options) === null || _a === void 0 ? void 0 : _a.namespace })));
            }
            if (icon.icon !== undefined) {
                return React.createElement(MenuAction, { key: id, id: id, action: icon, instanceId: instanceId, t: t });
            }
            else {
                return (React.createElement(react_bootstrap_1.MenuItem, { key: id, eventKey: id, disabled: icon.show !== true, title: genTooltip(t, icon.show) }, this.renderCustomIcon(id, icon)));
            }
        };
        this.renderIcon = (icon, index) => {
            if ((icon.icon === null) && (icon.component === undefined)) {
                // skip text-only elements in this mode
                return null;
            }
            return this.renderIconInner(icon, index);
        };
        this.renderIcons = (icons, index) => {
            if (icons.length === 1) {
                if ((icons[0].icon === null) && (icons[0].component === undefined)) {
                    // skip text-only elements in this mode
                    return null;
                }
                return this.renderIconInner(icons[0], index);
            }
            else {
                return this.renderIconGroup(icons, index);
            }
        };
        this.renderIconGroup = (icons, index) => {
            const { t, instanceId, orientation, buttonType } = this.props;
            const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
            const id = `${instanceId || '1'}_${index}`;
            return (React.createElement(ToolbarDropdown_1.default, { t: t, key: id, id: id, instanceId: instanceIds, icons: icons, buttonType: buttonType, orientation: orientation }));
        };
        this.renderIconInner = (icon, index, forceButtonType) => {
            const { t, instanceId, tooltipPlacement } = this.props;
            const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
            let actionId = (icon.title || index.toString()).toLowerCase().replace(/ /g, '-');
            actionId = `action-${actionId}`;
            if (icon.component === undefined) {
                return (React.createElement(IconBarIcon, { key: actionId, t: t, actionId: actionId, buttonType: forceButtonType || this.props.buttonType, icon: icon, instanceIds: instanceIds, tooltipPlacement: tooltipPlacement !== null && tooltipPlacement !== void 0 ? tooltipPlacement : 'top' }));
            }
            else {
                return this.renderCustomIcon(actionId, icon);
            }
        };
        this.setPortalTargetRef = (ref) => {
            this.portalTargetRef = ref;
        };
        this.toggleOpen = () => {
            this.setState((0, immutability_helper_1.default)(this.state, {
                open: { $set: !this.state.open },
            }));
        };
        this.state = {
            open: false,
        };
        this.updateBGClick();
    }
    UNSAFE_componentWillReceiveProps() {
        this.updateBGClick();
    }
    render() {
        const { actions, collapse, icon, id, groupByIcon, orientation, className, style } = this.props;
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
                React.createElement(TooltipControls_1.IconButton, { id: `btn-menu-${id}`, className: 'btn-embed', onClick: this.toggleOpen, tooltip: '', icon: icon || 'menu', stroke: true, ref: this.setPortalTargetRef }),
                React.createElement(PortalMenu_1.default, { open: this.state.open, target: this.portalTargetRef, onClose: this.toggleOpen, onClick: this.toggleOpen }, this.state.open ? collapsed.map(this.renderMenuItem) : null)));
            return (React.createElement(react_bootstrap_1.ButtonGroup, { id: id, className: classes.join(' '), style: style },
                moreButton,
                unCollapsed.map((iter, idx) => (React.createElement("div", { key: idx }, this.renderIcon(iter, idx))))));
        }
        else {
            const groupedByIcon = actions.reduce((prev, action, idx) => {
                if ((action.icon !== undefined) && (groupByIcon !== false)) {
                    (0, util_1.setdefault)(prev, action.icon, []).push(action);
                }
                else {
                    prev[idx.toString()] = [action];
                }
                return prev;
            }, {});
            const byFirstPrio = (lhs, rhs) => {
                return lhs[0].position - rhs[0].position;
            };
            const groupByGroup = (prev, actionList) => {
                var _a;
                const group = (_a = actionList[0].group) !== null && _a !== void 0 ? _a : '__unset';
                if (prev[group] === undefined) {
                    prev[group] = [actionList];
                }
                else {
                    prev[group].push(actionList);
                }
                return prev;
            };
            const grouped = Object.values(groupedByIcon)
                .sort(byFirstPrio)
                .reduce(groupByGroup, {});
            return (React.createElement(react_bootstrap_1.ButtonGroup, { id: id, className: classes.join(' '), style: style, vertical: orientation === 'vertical', onClick: this.mBackgroundClick },
                this.props.children,
                (Object.keys(grouped).length !== 1)
                    ? Object.keys(grouped).map((groupId, idx) => (React.createElement("div", { className: 'iconbar-actiongroup', key: groupId }, grouped[groupId].map(this.renderIcons))))
                    : Object.values(grouped)[0].map(this.renderIcons)));
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
                return Object.assign(Object.assign({}, prev), { [current]: this.props[current] });
            }
            else {
                return prev;
            }
        }, {});
        const staticProps = Object.assign(Object.assign({}, unknownProps), { key: id, buttonType: this.props.buttonType, orientation: this.props.orientation });
        if (icon.props !== undefined) {
            const addProps = icon.props();
            return React.createElement(icon.component, Object.assign({}, staticProps, addProps, { parentType: 'iconbar' }));
        }
        else {
            return React.createElement(icon.component, Object.assign({}, staticProps, { parentType: 'iconbar' }));
        }
    }
    updateBGClick() {
        const { actions, clickAnywhere, instanceId } = this.props;
        const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
        this.mBackgroundClick = ((clickAnywhere === true) && (actions.length === 1))
            ? ((evt) => {
                // don't trigger if the button itself was clicked
                if (!evt.isDefaultPrevented()) {
                    evt.preventDefault();
                    actions[0].action(instanceIds);
                }
            })
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
ActionIconBar.ACTION_PROPS = ['filter', 'group', 'instanceId', 'showAll', 'staticElements'];
exports.default = ActionIconBar;
