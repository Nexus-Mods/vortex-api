"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dropdown_1 = require("./Dropdown");
const Icon_1 = require("./Icon");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_overlays_1 = require("react-overlays");
const ComponentEx_1 = require("../util/ComponentEx");
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
        return (React.createElement(react_bootstrap_1.MenuItem, { eventKey: id, onSelect: this.trigger, disabled: action.show !== true, title: typeof (action.show) === 'string' ? action.show : undefined },
            action.icon !== undefined ? React.createElement(Icon_1.default, { name: action.icon }) : null,
            React.createElement("div", { className: 'button-text' }, action.title)));
    }
}
class RootCloseWrapper extends React.Component {
    componentDidMount() {
        document.addEventListener('click', this.props.onClose);
        document.addEventListener('contextmenu', this.props.onClose);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.props.onClose);
        document.removeEventListener('contextmenu', this.props.onClose);
    }
    render() {
        return this.props.children;
    }
}
class ContextMenu extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.renderMenuItem = (action, index) => {
            const { instanceId } = this.props;
            const id = `${instanceId || '1'}_${index}`;
            if ((action.icon === null) && (action.component === undefined)) {
                return (React.createElement(react_bootstrap_1.MenuItem, { className: 'menu-separator-line', key: id, disabled: true }, action.title));
            }
            return React.createElement(MenuAction, { key: id, id: id, action: action, instanceId: instanceId });
        };
    }
    render() {
        const { actions, children, onHide, position, visible } = this.props;
        if (!visible) {
            return null;
        }
        return (React.createElement(RootCloseWrapper, { onClose: onHide },
            React.createElement(react_overlays_1.Portal, { container: this.context.menuLayer },
                React.createElement("div", { style: { left: position.x, top: position.y, position: 'absolute' } },
                    React.createElement("div", { className: 'menu-content' }, children),
                    React.createElement(Dropdown_1.default.Menu, { style: { display: 'block', position: 'initial' }, onClose: onHide, open: true, onClick: onHide }, actions.map(this.renderMenuItem))))));
    }
}
exports.default = ContextMenu;
