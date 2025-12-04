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
Object.defineProperty(exports, "__esModule", { value: true });
const ExtensionProvider_1 = require("../../util/ExtensionProvider");
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
function numOr(input, def) {
    if (input !== undefined) {
        return input;
    }
    else {
        return 100;
    }
}
function iconSort(lhs, rhs) {
    return numOr(lhs.position, 100) - numOr(rhs.position, 100);
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
        this.state = {
            actions: this.actionsToShow(props),
        };
    }
    UNSAFE_componentWillReceiveProps(newProps) {
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
        const child = React.Children.only(children);
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                instanceId,
                actions: this.state.actions,
            });
        }
    }
    actionsToShow(props) {
        const { filter, instanceId, objects, showAll } = props;
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
        const transformActions = (items) => {
            if (!Array.isArray(items)) {
                items = items(instanceId);
            }
            return items
                .map(convert)
                .filter(iter => showAll || (iter.show !== false))
                .filter(iter => (filter === undefined) || filter(iter))
                .sort(iconSort);
        };
        const convert = (input) => (Object.assign(Object.assign({}, input), { show: checkCondition(input), subMenus: input.subMenus === undefined
                ? undefined
                : () => transformActions(input.subMenus) }));
        return transformActions(objects);
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
function registerAction(instanceGroup, extInfo, group, position, iconOrComponent, optionsIn, titleOrProps, actionOrCondition, condition) {
    if (instanceGroup === group) {
        const options = Object.assign(Object.assign({}, optionsIn), { namespace: extInfo.namespace });
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
exports.default = (0, ExtensionProvider_1.extend)(registerAction, 'group', true)(ActionControl);
