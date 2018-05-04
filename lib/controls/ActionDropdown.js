"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionControl_1 = require("./ActionControl");
const DropdownButton_1 = require("./DropdownButton");
const Icon_1 = require("./Icon");
const _ = require("lodash");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
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
class DropdownMenu extends React.Component {
    constructor() {
        super(...arguments);
        this.renderMenuItem = (action, index) => {
            const { instanceId } = this.props;
            const id = `${instanceId || '1'}_${index}`;
            if ((action.icon === null) && (action.component === undefined)) {
                return (React.createElement(react_bootstrap_1.MenuItem, { className: 'menu-separator-line', key: id, disabled: true }, action.title));
            }
            if (action.icon !== undefined) {
                return React.createElement(MenuAction, { key: id, id: id, action: action, instanceId: instanceId });
            }
            else {
                return (React.createElement(react_bootstrap_1.MenuItem, { key: id, eventKey: id, disabled: action.show !== true, title: genTooltip(action.show) }, this.renderCustomIcon(id, action)));
            }
        };
        this.triggerDefault = (evt) => {
            const { instanceId, actions } = this.props;
            const title = evt.currentTarget.attributes.getNamedItem('data-value').value;
            const action = actions.find(iter => iter.title === evt.currentTarget.attributes.getNamedItem('data-value').value);
            if (action !== undefined) {
                const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
                action.action(instanceIds);
            }
        };
    }
    render() {
        const { actions, id, instanceId, className, style } = this.props;
        const instanceIds = typeof (instanceId) === 'string' ? [instanceId] : instanceId;
        const classes = [];
        if (className) {
            classes.push(className);
        }
        const title = (React.createElement("div", { "data-value": actions[0].title, onClick: actions[0].show ? this.triggerDefault : undefined, title: genTooltip(actions[0].show), style: { width: '100%', height: '100%' } },
            React.createElement(Icon_1.default, { name: actions[0].icon }),
            actions[0].title));
        return (React.createElement(DropdownButton_1.default, { id: `${id}-menu`, split: true, title: title }, actions.slice(1).map((iter, idx) => this.renderMenuItem(iter, idx))));
    }
    renderCustomIcon(id, action) {
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
        if (action.props !== undefined) {
            const addProps = action.props();
            return React.createElement(action.component, Object.assign({}, staticProps, addProps));
        }
        else {
            return React.createElement(action.component, Object.assign({}, staticProps));
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
