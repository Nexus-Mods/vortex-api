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
const log_1 = require("../util/log");
const ActionControl_1 = __importDefault(require("./ActionControl"));
const constants_1 = require("./constants");
const ContextMenu_1 = __importDefault(require("./ContextMenu"));
const Icon_1 = __importDefault(require("./Icon"));
const PortalMenu_1 = __importDefault(require("./PortalMenu"));
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ReactDOM = __importStar(require("react-dom"));
function nop() {
    // nop
}
function genTooltip(show) {
    return typeof (show) === 'string'
        ? show
        : undefined;
}
function MenuAction(props) {
    const { t, action, instanceId, onSelect, id } = props;
    const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
    const [open, setOpenMenu] = React.useState(false);
    const [subMenus, setSubMenus] = React.useState([]);
    const setOpen = React.useCallback((value) => {
        if (subMenus.length === 0) {
            if (Array.isArray(action.subMenus)) {
                setSubMenus(action.subMenus);
            }
            else {
                setSubMenus(action.subMenus());
            }
        }
        setOpenMenu(value);
    }, [setOpenMenu, action.subMenus]);
    const setOpenFalse = React.useCallback(() => { setOpen(false); }, [setOpen]);
    const itemRef = React.useRef();
    const hideTimer = React.useRef();
    const trigger = React.useCallback(() => {
        var _a;
        if (hideTimer.current) {
            clearTimeout(hideTimer.current);
        }
        (_a = action.action) === null || _a === void 0 ? void 0 : _a.call(action, instanceIds, action.data);
        if (action.subMenus !== undefined) {
            setOpen(old => !old);
        }
        else {
            onSelect === null || onSelect === void 0 ? void 0 : onSelect();
        }
    }, [instanceId, action, onSelect, setOpen]);
    const show = React.useCallback(() => {
        if (hideTimer.current) {
            clearTimeout(hideTimer.current);
        }
        hideTimer.current = setTimeout(() => {
            setOpen(true);
        }, constants_1.HOVER_DELAY);
    }, [setOpen, hideTimer.current]);
    const hide = React.useCallback(() => {
        if (hideTimer.current) {
            clearTimeout(hideTimer.current);
        }
        hideTimer.current = setTimeout(() => {
            setOpen(false);
        }, constants_1.HOVER_DELAY);
    }, [setOpen]);
    const setItemRef = (ref) => {
        itemRef.current = ReactDOM.findDOMNode(ref);
    };
    return (React.createElement(react_bootstrap_1.MenuItem, { eventKey: id, onSelect: trigger, onMouseEnter: action.subMenus !== undefined ? show : undefined, onMouseLeave: action.subMenus !== undefined ? hide : undefined, disabled: action.show !== true, ref: setItemRef, title: genTooltip(action.show) },
        React.createElement(Icon_1.default, { name: action.icon }),
        React.createElement("div", { className: 'button-text' }, t(action.title)),
        action.subMenus !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement(ContextMenu_1.default, { instanceId: instanceId[0], visible: open, anchor: itemRef.current, onHide: setOpenFalse, actions: subMenus }),
            React.createElement(Icon_1.default, { className: 'menu-more-icon', name: 'showhide-right' }))) : null));
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
class DropdownMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.setRef = (ref) => {
            this.mRef = ReactDOM.findDOMNode(ref);
        };
        this.close = () => {
            this.setState({ open: false });
        };
        this.toggleOpen = (evt) => {
            evt.preventDefault();
            this.setState({ open: !this.state.open });
        };
        this.renderMenuItem = (action, index) => {
            const { t, instanceId } = this.props;
            const id = `${instanceId || '1'}_${index}`;
            if ((action.icon === null) && (action.component === undefined)) {
                return (React.createElement(react_bootstrap_1.MenuItem, { className: 'menu-separator-line', key: id, disabled: true }, t(action.title)));
            }
            if (action.icon !== undefined) {
                return React.createElement(MenuAction, { t: t, key: id, id: id, action: action, instanceId: instanceId });
            }
            else {
                return (React.createElement(react_bootstrap_1.MenuItem, { key: id, eventKey: id, disabled: action.show !== true, title: genTooltip(action.show) }, this.renderCustomIcon(id, action)));
            }
        };
        this.triggerDefault = (evt) => {
            var _a;
            const { instanceId, actions } = this.props;
            const data = evt.currentTarget.attributes.getNamedItem('data-value');
            if (data === undefined) {
                (0, log_1.log)('error', 'no default action', JSON.stringify(actions));
                return;
            }
            const title = data.value;
            const action = actions.find(iter => iter.title === title);
            if (action !== undefined) {
                const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
                (_a = action.action) === null || _a === void 0 ? void 0 : _a.call(action, instanceIds);
            }
        };
        this.state = { open: false };
    }
    render() {
        const { t, actions, id, className } = this.props;
        const classes = [];
        if (className) {
            classes.push(className);
        }
        const defaultIdx = actions.findIndex(act => act.show === true);
        if (defaultIdx === -1) {
            return null;
        }
        const rest = actions.slice(0);
        rest.splice(defaultIdx, 1);
        const title = (React.createElement("div", { title: genTooltip(actions[defaultIdx].show), style: { width: '100%', height: '100%' } },
            React.createElement(Icon_1.default, { name: actions[defaultIdx].icon }),
            t(actions[defaultIdx].title)));
        const btn = (React.createElement(react_bootstrap_1.Button, { onClick: actions[defaultIdx].show ? this.triggerDefault : undefined, "data-value": actions[defaultIdx].title }, title));
        if (rest.length === 0) {
            return btn;
        }
        return (React.createElement(react_bootstrap_1.Dropdown, { id: `${id}-menu`, ref: this.setRef },
            btn,
            React.createElement(react_bootstrap_1.Dropdown.Toggle, { open: this.state.open, onClick: this.toggleOpen }),
            React.createElement(PortalMenu_1.default, { open: this.state.open, target: this.mRef, onClose: this.close, onClick: nop, bsRole: 'menu' }, rest.map((iter, idx) => this.renderMenuItem(iter, idx)))));
    }
    renderCustomIcon(id, action) {
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
        if (action.props !== undefined) {
            const addProps = action.props();
            return React.createElement(action.component, Object.assign({}, staticProps, addProps, { parentType: 'dropdown' }));
        }
        else {
            return React.createElement(action.component, Object.assign({}, staticProps, { parentType: 'dropdown' }));
        }
    }
}
class ActionDropdown extends React.Component {
    render() {
        const actionProps = _.pick(this.props, ActionDropdown.ACTION_PROPS);
        const menuProps = _.omit(this.props, ActionDropdown.ACTION_PROPS);
        return (React.createElement(ActionControl_1.default, Object.assign({}, actionProps),
            React.createElement(DropdownMenu, Object.assign({}, menuProps))));
    }
}
ActionDropdown.ACTION_PROPS = ['filter', 'group', 'instanceId', 'staticElements'];
exports.default = ActionDropdown;
