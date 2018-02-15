"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../util/log");
const util_1 = require("../util/util");
const TooltipControls_1 = require("./TooltipControls");
const _ = require("lodash");
const React = require("react");
/**
 * wraps a control that was added by an extension.
 *
 * This attaches to all objects created with makeReactive, to ensure the wrapped
 * component gets updated when that object changes.
 *
 * TODO: the object created by makeReactive gets mutated (otherwise the proxy that
 *   triggers rerenders wouldn't work). This would cause components to not pick up on
 *   changes to that object if they only compare by reference so this gate creates
 *   copies of those parameters and re-copies them whenever they change (by value).
 *   Thereby the wrapped components work as expected but it defeats the whole point
 *   of shallow comparing props. At some point we should see if we can find a better
 *   solution.
 *
 * @class ExtensionGate
 * @extends {React.Component<{}, {}>}
 */
class ExtensionGate extends React.Component {
    constructor() {
        super(...arguments);
        this.mWrappers = {};
    }
    componentWillMount() {
        if (React.Children.count(this.props.children) === 0) {
            return;
        }
        try {
            const props = React.Children.only(this.props.children).props;
            Object.keys(props).forEach(key => {
                if (util_1.truthy(props[key])
                    && (props[key].attach !== undefined)
                    && (props[key].detach !== undefined)) {
                    if (typeof (props[key]) === 'object') {
                        this.mWrappers[key] = Object.assign({}, props[key]);
                    }
                    props[key].attach(this);
                }
            });
            this.mValid = true;
        }
        catch (err) {
            log_1.log('warn', 'failed to mount extension control', { err });
            this.mValid = false;
        }
    }
    componentWillUnmount() {
        if (this.mValid) {
            const props = React.Children.only(this.props.children).props;
            Object.keys(props).forEach(key => {
                if (util_1.truthy(props[key])
                    && (props[key].attach !== undefined)
                    && (props[key].detach !== undefined)) {
                    props[key].detach(this);
                }
            });
            this.mWrappers = {};
        }
    }
    render() {
        if (React.Children.count(this.props.children) === 0) {
            return null;
        }
        if (!this.mValid) {
            return (React.createElement(TooltipControls_1.Icon, { id: this.props.id, tooltip: 'Extension failed to render', name: 'exclamation-triangle' }));
        }
        this.updateWrappers(React.Children.only(this.props.children).props);
        return React.cloneElement(React.Children.only(this.props.children), this.mWrappers);
    }
    updateWrappers(props) {
        Object.keys(this.mWrappers).forEach(key => {
            if (!_.isEqual(this.mWrappers[key], props[key])) {
                this.mWrappers[key] = Object.assign({}, props[key]);
            }
        });
    }
}
exports.default = ExtensionGate;
