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
function extend(registerFunc) {
    const ExtensionManagerImpl = require('./ExtensionManager').default;
    ExtensionManagerImpl.registerUIAPI(registerFunc.name);
    return (ComponentToWrap) => {
        // tslint:disable-next-line:class-name
        return _a = class __ExtendedComponent extends React.Component {
                componentWillMount() {
                    this.mExtensions = [];
                    this.context.extensions.apply(registerFunc.name, (...args) => {
                        const res = registerFunc(this.props, ...args);
                        if (res !== undefined) {
                            this.mExtensions.push(res);
                        }
                    });
                }
                componentWillReceiveProps(nextProps) {
                    if (this.props.group !== nextProps.group) {
                        this.mExtensions = [];
                        this.mObjects = undefined;
                        this.context.extensions.apply(registerFunc.name, (...args) => {
                            const res = registerFunc(nextProps, ...args);
                            if (res !== undefined) {
                                this.mExtensions.push(res);
                            }
                        });
                    }
                    if (this.props.staticElements !== nextProps.staticElements) {
                        this.mObjects = undefined;
                    }
                }
                render() {
                    const { children, staticElements } = this.props;
                    if (this.mObjects === undefined) {
                        this.mObjects = [].concat(staticElements || [], this.mExtensions || []);
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
