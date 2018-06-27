"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExtensionProvider_1 = require("../util/ExtensionProvider");
const _ = require("lodash");
const React = require("react");
function iconSort(lhs, rhs) {
    return (lhs.position || 100) - (rhs.position || 100);
}
/**
 * wrapper control providing an extensible set of icons/buttons/actions
 * In the simplest form this is simply a bunch of buttons that will run
 * an action if clicked, but an icon can also be more dynamic (i.e. rendering
 * dynamic content or having multiple states)
 *
 * @class IconBar
 */
class ActionControl extends React.Component {
    constructor(props) {
        super(props);
        this.iconSort = (lhs, rhs) => (lhs.position || 100) - (rhs.position || 100);
        this.state = {
            actions: this.actionsToShow(props),
        };
    }
    componentWillReceiveProps(newProps) {
        // TODO: since we can't know how the condition callback is implemented,
        //   there is no way to determine, based on props, whether the actions
        //   to be shown need to be updated.
        //   this here is inefficient and could technically still miss updates
        const newActions = this.actionsToShow(newProps);
        if (!_.isEqual(newActions, this.state.actions)) {
            this.setState({ actions: newActions });
        }
    }
    render() {
        const { children, instanceId } = this.props;
        return React.cloneElement(React.Children.only(children), {
            instanceId,
            actions: this.state.actions,
        });
    }
    actionsToShow(props) {
        const { filter, instanceId, objects } = props;
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
            .filter(iter => iter.show !== false)
            .filter(iter => (filter === undefined) || filter(iter));
    }
}
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
function registerAction(instanceGroup, group, position, iconOrComponent, options, titleOrProps, actionOrCondition, condition) {
    if (instanceGroup === group) {
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
exports.default = ExtensionProvider_1.extend(registerAction, 'group')(ActionControl);
