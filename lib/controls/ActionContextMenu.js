"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionControl_1 = require("./ActionControl");
const ContextMenu_1 = require("./ContextMenu");
const _ = require("lodash");
const React = require("react");
class ActionContextMenu extends React.Component {
    render() {
        const actionProps = _.pick(this.props, ActionContextMenu.ACTION_PROPS);
        const menuProps = _.omit(this.props, ActionContextMenu.ACTION_PROPS);
        return (React.createElement(ActionControl_1.default, Object.assign({}, actionProps),
            React.createElement(ContextMenu_1.default, Object.assign({}, menuProps))));
    }
}
ActionContextMenu.ACTION_PROPS = ['filter', 'group', 'instanceId', 'staticElements'];
exports.default = ActionContextMenu;
