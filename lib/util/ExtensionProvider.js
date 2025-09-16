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
exports.ExtensionContext = void 0;
exports.extend = extend;
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
exports.ExtensionContext = React.createContext({});
/**
 * extension function. This function creates a wrapper around a component that
 * binds the extensions of a component to its props
 *
 * @export
 * @param {(React.ComponentClass<P & IExtensionProps>)} ComponentToWrap the component to wrap
 * @returns {React.ComponentClass<P>} the wrapper component
 */
function extend(registerFunc, groupProp, addExtInfo) {
    const ExtensionManagerImpl = require('./ExtensionManager').default;
    ExtensionManagerImpl.registerUIAPI(registerFunc.name);
    const extensions = {};
    const updateExtensions = (props, context) => {
        extensions[props[groupProp]] = [];
        context.apply(registerFunc.name, (extInfo, ...args) => {
            const res = registerFunc(props[groupProp], extInfo, ...args);
            if (res !== undefined) {
                extensions[props[groupProp]].push(res);
            }
        }, addExtInfo);
    };
    return (ComponentToWrap) => {
        var _a;
        // tslint:disable-next-line:class-name
        return _a = class __ExtendedComponent extends React.Component {
                UNSAFE_componentWillReceiveProps(nextProps) {
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
                    if (extensions[this.props[groupProp]] === undefined) {
                        updateExtensions(this.props, this.context);
                    }
                    if (this.mObjects === undefined) {
                        this.mObjects = [].concat(staticElements || [], extensions[this.props[groupProp]] || []);
                    }
                    const wrapProps = Object.assign(Object.assign({}, _.omit(this.props, ['staticElements', 'group'])), { objects: this.mObjects });
                    return React.createElement(ComponentToWrap, wrapProps, children);
                }
            },
            _a.contextType = exports.ExtensionContext,
            _a;
    };
}
