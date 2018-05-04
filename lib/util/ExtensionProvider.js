"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PropTypes = require("prop-types");
const React = require("react");
/**
 * provider for ui extensions. This makes extensions available to
 * to extensible components
 *
 * @export
 * @class ExtensionProvider
 * @extends {React.Component<IExtensionProps, {}>}
 */
class ExtensionProvider extends React.Component {
    getChildContext() {
        const { extensions } = this.props;
        return { extensions };
    }
    render() {
        return React.Children.only(this.props.children);
    }
}
// tslint:disable-next-line:no-unused-variable
ExtensionProvider.childContextTypes = {
    extensions: PropTypes.object.isRequired,
};
exports.ExtensionProvider = ExtensionProvider;
/**
 * extension function. This function creates a wrapper around a component that
 * binds the extensions of a component to its props
 *
 * @export
 * @param {(React.ComponentClass<P & IExtensionProps>)} ComponentToWrap the component to wrap
 * @returns {React.ComponentClass<P>} the wrapper component
 */
function extend(registerFunc, groupProp) {
    const ExtensionManagerImpl = require('./ExtensionManager').default;
    ExtensionManagerImpl.registerUIAPI(registerFunc.name);
    const extensions = {};
    const updateExtensions = (props, context) => {
        extensions[props[groupProp]] = [];
        context.extensions.apply(registerFunc.name, (...args) => {
            const res = registerFunc(props[groupProp], ...args);
            if (res !== undefined) {
                extensions[props[groupProp]].push(res);
            }
        });
    };
    return (ComponentToWrap) => {
        // tslint:disable-next-line:class-name
        return _a = class __ExtendedComponent extends React.Component {
                componentWillMount() {
                    if (extensions[this.props[groupProp]] === undefined) {
                        updateExtensions(this.props, this.context);
                    }
                }
                componentWillReceiveProps(nextProps) {
                    if (this.props[groupProp] !== nextProps[groupProp]) {
                        if (extensions[nextProps[groupProp]] === undefined) {
                            updateExtensions(nextProps, this.context);
                        }
                    }
                    if (this.props.staticElements !== nextProps.staticElements) {
                        this.mObjects = undefined;
                    }
                }
                render() {
                    const { children, staticElements } = this.props;
                    if (this.mObjects === undefined) {
                        this.mObjects = [].concat(staticElements || [], extensions[this.props[groupProp]] || []);
                    }
                    const wrapProps = Object.assign({}, this.props, { objects: this.mObjects });
                    delete wrapProps.staticElements;
                    delete wrapProps.group;
                    return React.createElement(ComponentToWrap, wrapProps, children);
                }
            },
            _a.contextTypes = {
                extensions: PropTypes.object.isRequired,
            },
            _a;
        var _a;
    };
}
exports.extend = extend;
