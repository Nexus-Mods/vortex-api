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
const ComponentEx_1 = require("../../util/ComponentEx");
const constants_1 = require("./constants");
const Dropdown_1 = __importDefault(require("./Dropdown"));
const Icon_1 = __importDefault(require("./Icon"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_dom_1 = __importDefault(require("react-dom"));
const react_overlays_1 = require("react-overlays");
const timers_1 = require("timers");
function MenuAction(props) {
    const { t, action, id, instanceId, onTrigger } = props;
    const renderCustom = React.useCallback(() => {
        const knownProps = ['condition', 'className', 'group', 't', 'i18nLoadedAt',
            'objects', 'children'];
        const unknownProps = Object.keys(props).reduce((prev, current) => {
            if (knownProps.indexOf(current) === -1) {
                return Object.assign(Object.assign({}, prev), { [current]: props[current] });
            }
            else {
                return prev;
            }
        }, {});
        const staticProps = Object.assign(Object.assign({}, unknownProps), { key: id });
        if (action.props !== undefined) {
            const addProps = action.props();
            return React.createElement(action.component, Object.assign({}, staticProps, addProps, { parentType: 'context' }));
        }
        else {
            return React.createElement(action.component, Object.assign({}, staticProps, { parentType: 'context' }));
        }
    }, [props]);
    // stuff for submenus
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
    const trigger = React.useCallback(() => {
        var _a;
        if (hideTimer.current) {
            (0, timers_1.clearTimeout)(hideTimer.current);
        }
        const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
        (_a = action.action) === null || _a === void 0 ? void 0 : _a.call(action, instanceIds, action.data);
        if (action.subMenus !== undefined) {
            setOpen(old => !old);
        }
        else {
            onTrigger === null || onTrigger === void 0 ? void 0 : onTrigger();
        }
    }, [instanceId, action, setOpen]);
    const hideTimer = React.useRef();
    const show = React.useCallback(() => {
        if (hideTimer.current) {
            (0, timers_1.clearTimeout)(hideTimer.current);
        }
        hideTimer.current = setTimeout(() => {
            setOpen(true);
        }, constants_1.HOVER_DELAY);
    }, [setOpen, hideTimer.current]);
    const hide = React.useCallback(() => {
        if (hideTimer.current) {
            (0, timers_1.clearTimeout)(hideTimer.current);
        }
        hideTimer.current = setTimeout(() => {
            setOpen(false);
        }, constants_1.HOVER_DELAY);
    }, [setOpen]);
    const setItemRef = (ref) => {
        itemRef.current = react_dom_1.default.findDOMNode(ref);
    };
    return (React.createElement(react_bootstrap_1.MenuItem, { eventKey: id, onSelect: trigger, onMouseEnter: action.subMenus !== undefined ? show : undefined, onMouseLeave: action.subMenus !== undefined ? hide : undefined, disabled: action.show !== true, ref: setItemRef, title: typeof (action.show) === 'string' ? t(action.show) : undefined },
        (action.component !== undefined)
            ? renderCustom()
            : (React.createElement(React.Fragment, null,
                action.icon !== undefined ? React.createElement(Icon_1.default, { name: action.icon }) : null,
                React.createElement("div", { className: 'button-text' }, t(action.title)))),
        action.subMenus !== undefined ? (React.createElement(React.Fragment, null,
            React.createElement(ContextMenu, { instanceId: instanceId, visible: open, anchor: itemRef.current, onHide: setOpenFalse, actions: subMenus, onTrigger: onTrigger }),
            React.createElement(Icon_1.default, { className: 'menu-more-icon', name: 'showhide-right' }))) : null));
}
class RootCloseWrapper extends React.Component {
    constructor() {
        super(...arguments);
        this.close = (evt) => {
            if (!evt.defaultPrevented) {
                this.props.onClose();
            }
        };
    }
    componentDidMount() {
        document.addEventListener('click', this.close);
        document.addEventListener('contextmenu', this.close);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.close);
        document.removeEventListener('contextmenu', this.close);
    }
    render() {
        return this.props.children;
    }
}
function nop() {
    // nop
}
class ContextMenu extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mMenuRef = null;
        this.renderMenuItem = (action, index) => {
            const { t, instanceId } = this.props;
            const id = `${instanceId || '1'}_${index}`;
            const tf = t !== null && t !== void 0 ? t : (input => input);
            if ((action.icon === null)
                && (action.component === undefined)
                && (action.action === undefined)) {
                return (React.createElement(react_bootstrap_1.MenuItem, { className: 'menu-separator-line', key: id, disabled: true }, action.title !== undefined ? tf(action.title) : React.createElement("hr", null)));
            }
            return (React.createElement(MenuAction, { t: tf, key: id, id: id, onTrigger: this.trigger, action: action, instanceId: instanceId }));
        };
        this.trigger = () => {
            const { onHide, onTrigger } = this.props;
            onTrigger === null || onTrigger === void 0 ? void 0 : onTrigger();
            onHide();
        };
        this.setMenuRef = (ref) => {
            this.mMenuRef = ref;
            if (ref !== null) {
                this.updatePlacement(this.props.position);
            }
        };
        this.initState({
            right: 0,
            bottom: 0,
        });
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if ((this.props.visible !== newProps.visible)
            && newProps.visible) {
            this.updatePlacement(newProps.position);
        }
    }
    render() {
        const { actions, children, className, onHide, position, visible } = this.props;
        const { right, bottom } = this.state;
        if (!visible || ((actions || []).length === 0)) {
            return null;
        }
        const menuStyle = { position: 'absolute' };
        if (right !== undefined) {
            menuStyle['right'] = right;
        }
        else {
            menuStyle['left'] = position.x;
        }
        if (bottom !== undefined) {
            menuStyle['bottom'] = bottom;
        }
        else {
            menuStyle['top'] = position.y;
        }
        return (React.createElement(RootCloseWrapper, { onClose: onHide },
            React.createElement(react_overlays_1.Portal, { container: this.context.menuLayer },
                React.createElement("div", { className: className, style: menuStyle, ref: this.setMenuRef },
                    React.createElement("div", { className: 'menu-content' }, children),
                    React.createElement(Dropdown_1.default.Menu, { style: { display: 'block', position: 'initial' }, open: true, onClose: onHide, onClick: nop }, (actions || []).map(this.renderMenuItem))))));
    }
    updatePlacement(position) {
        if (this.mMenuRef === null) {
            return;
        }
        const rect = this.mMenuRef.getBoundingClientRect();
        const outer = this.context.menuLayer.getBoundingClientRect();
        if (position !== undefined) {
            this.nextState.bottom = ((position.y + rect.height) > outer.bottom)
                ? outer.bottom - position.y
                : undefined;
            this.nextState.right = ((position.x + rect.width) > outer.right)
                ? outer.right - position.x
                : undefined;
        }
        else if (!!this.props.anchor) {
            const bbrect = this.props.anchor.getBoundingClientRect();
            this.nextState.bottom = Math.max(0, outer.bottom - bbrect.y - rect.height);
            let right = outer.right - bbrect.right - rect.width;
            if (right < 0) {
                right = outer.right - bbrect.left;
            }
            this.nextState.right = right;
        }
        else {
            this.nextState.bottom = 0;
            this.nextState.right = 0;
        }
    }
}
exports.default = ContextMenu;
