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
const Dropdown_1 = __importDefault(require("../controls/Dropdown"));
const Icon_1 = __importDefault(require("../controls/Icon"));
const PortalMenu_1 = __importDefault(require("../controls/PortalMenu"));
const Spinner_1 = __importDefault(require("../controls/Spinner"));
const ComponentEx_1 = require("../../util/ComponentEx");
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const TooltipControls_1 = require("../controls/TooltipControls");
class Action extends React.Component {
    constructor() {
        super(...arguments);
        this.trigger = () => {
            const { onTrigger, title } = this.props;
            onTrigger(title);
        };
    }
    render() {
        const { t, count, icon, title } = this.props;
        if (icon !== undefined) {
            return React.createElement(TooltipControls_1.IconButton, { onClick: this.trigger, icon: icon, tooltip: t(title, { count }) });
        }
        else {
            return React.createElement(react_bootstrap_1.Button, { onClick: this.trigger }, t(title, { count }));
        }
    }
}
class Notification extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.open = () => {
            this.nextState.open = true;
        };
        this.close = () => {
            this.nextState.open = false;
        };
        this.suppressNotification = () => {
            const { onSuppress, params } = this.props;
            onSuppress(params.id);
        };
        this.renderAction = (action, count) => {
            var _a;
            return (React.createElement(Action, { key: (_a = action.title) !== null && _a !== void 0 ? _a : action.icon, t: this.props.t, icon: action.icon, title: action.title, count: count, onTrigger: this.trigger }));
        };
        this.trigger = (actionTitle) => {
            const { onTriggerAction, params } = this.props;
            onTriggerAction(params.id, actionTitle);
        };
        this.expand = () => {
            this.props.onExpand(this.props.params.group);
        };
        this.dismiss = () => this.props.onDismiss(this.props.params.id);
        this.menuRef = React.createRef();
        this.initState({ open: false });
    }
    render() {
        const { t, collapsed, onDismiss, onExpand, onTriggerAction } = this.props;
        const { actions, id, message, noDismiss, progress, title, type } = this.props.params;
        if ((message === undefined) && (title === undefined)) {
            return null;
        }
        const lines = (message || '')
            // improve chance the message can be line-broken on hover
            .replace(/\W/g, _ => `${_}\u200b`)
            .split('\n');
        const styleName = this.typeToStyle(type);
        return (React.createElement("div", { role: 'alert', className: `notification alert-${styleName}` },
            progress !== undefined
                ? React.createElement("span", { className: 'notification-progress', style: { left: `${progress}%` } })
                : null,
            React.createElement("div", { className: 'btn btn-default btn-embed no-hover' },
                this.typeToIcon(type),
                ' '),
            React.createElement("div", { className: 'notification-textbox' },
                title !== undefined ? React.createElement("div", { className: 'notification-title' }, title) : null,
                React.createElement("div", { className: 'notification-message hover-expand' }, lines.map((line, idx) => React.createElement("span", { key: idx }, line)))),
            React.createElement("div", { className: 'notification-buttons' },
                (actions !== undefined) && (onTriggerAction !== undefined)
                    ? actions.map(action => this.renderAction(action, collapsed))
                    : null,
                !noDismiss && (onDismiss !== undefined) ? (React.createElement(TooltipControls_1.IconButton, { icon: 'close', tooltip: (collapsed > 1) ? t('Dismiss All') : t('Dismiss'), onClick: this.dismiss })) : null,
                ((collapsed > 1) && (onExpand !== undefined)) ? (React.createElement(react_bootstrap_1.Button, { onClick: this.expand }, t('{{ count }} More', { count: collapsed - 1 }))) : null,
                id !== undefined
                    ? this.renderExtraOptions()
                    : null)));
    }
    renderExtraOptions() {
        const { t, onSuppress, params } = this.props;
        const { open } = this.state;
        // currently that's the only extra option
        const hasExtraOptions = params.allowSuppress === true;
        if (!hasExtraOptions) {
            return null;
        }
        return (React.createElement(Dropdown_1.default, { id: `notification-${params.id}-extra`, className: 'notification-extra-options', ref: this.menuRef },
            React.createElement(Dropdown_1.default.Toggle, { onClick: this.open },
                React.createElement(Icon_1.default, { name: 'settings' })),
            React.createElement(PortalMenu_1.default, { open: open, onClick: this.close, onClose: this.close, target: this.menuRef.current, bsRole: 'menu' }, (params.allowSuppress && (onSuppress !== undefined)) ? (React.createElement(react_bootstrap_1.MenuItem, { onClick: this.suppressNotification, eventKey: 'suppress' }, t('Never show again'))) : null)));
    }
    typeToStyle(type) {
        switch (type) {
            case 'success': return 'success';
            case 'activity': return 'info';
            case 'info': return 'info';
            case 'warning': return 'warning';
            case 'error': return 'danger';
            default: return 'warning';
        }
    }
    typeToIcon(type) {
        switch (type) {
            case 'activity': return React.createElement(Spinner_1.default, null);
            case 'success': return React.createElement(Icon_1.default, { name: 'feedback-success' });
            case 'info': return React.createElement(Icon_1.default, { name: 'feedback-info' });
            case 'warning': return React.createElement(Icon_1.default, { name: 'feedback-warning' });
            case 'error': return React.createElement(Icon_1.default, { name: 'feedback-error' });
            default: return null;
        }
    }
}
exports.default = Notification;
