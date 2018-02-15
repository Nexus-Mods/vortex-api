"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../util/ComponentEx");
const React = require("react");
/**
 * simple control to present advanced features only if the corresponding settings
 * has been set.
 * This can have one or two children. If there is only one child, this child
 * will be rendered in advanced mode.
 * If there are two, the first will be rendered in advanced mode, the second
 * otherwise.
 *
 * @class Advanced
 * @extends {ComponentEx<IProps, {}>}
 */
class Advanced extends ComponentEx_1.ComponentEx {
    render() {
        let control = null;
        if (React.Children.count(this.props.children) === 1) {
            if (this.props.advancedMode) {
                control = React.Children.only(this.props.children);
            }
        }
        else if (React.Children.count(this.props.children) === 2) {
            control = (this.props.advancedMode)
                ? React.Children.toArray(this.props.children)[0]
                : React.Children.toArray(this.props.children)[1];
        }
        else {
            throw new Error('Advanced component should always have exactly 2 children');
        }
        if (typeof (control) === 'string') {
            return React.createElement("span", null, control);
        }
        else {
            return control;
        }
    }
}
function mapStateToProps(state) {
    return {
        advancedMode: state.settings.interface.advanced,
    };
}
exports.default = ComponentEx_1.connect(mapStateToProps)(Advanced);
