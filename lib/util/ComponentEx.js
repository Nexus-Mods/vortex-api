"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const storeHelper_1 = require("./storeHelper");
const PropTypes = require("prop-types");
var react_i18next_1 = require("react-i18next");
exports.translate = react_i18next_1.translate;
var react_redux_1 = require("react-redux");
exports.connect = react_redux_1.connect;
var ExtensionProvider_1 = require("./ExtensionProvider");
exports.extend = ExtensionProvider_1.extend;
class StateProxyHandler {
    constructor(component, baseObject, parent, objPath) {
        this.mComponent = component;
        this.mPath = objPath;
        this.mBaseObject = baseObject;
        this.mParent = parent;
        this.mSubProxies = {};
    }
    has(target, key) {
        return key in target;
    }
    get(target, key) {
        return this.derive(target, key);
    }
    deleteProperty(target, key) {
        delete target[key];
        const fullPath = [].concat(this.mPath, key);
        this.setBaseObject(storeHelper_1.deleteOrNop(this.baseObject(), fullPath));
        this.mComponent.setState(this.baseObject());
        return true;
    }
    set(target, key, value, receiver) {
        target[key] = value;
        const fullPath = [].concat(this.mPath, key);
        this.setBaseObject(storeHelper_1.setSafe(this.baseObject(), fullPath, value));
        return true;
    }
    baseObject() {
        if (this.mParent === undefined) {
            return this.mBaseObject;
        }
        else {
            return this.mParent.baseObject();
        }
    }
    setBaseObject(newObj) {
        if (this.mParent === undefined) {
            this.mBaseObject = newObj;
            this.mComponent.setState(this.mBaseObject);
        }
        else {
            this.mParent.setBaseObject(newObj);
        }
    }
    derive(obj, key) {
        if (typeof (obj[key]) !== 'object') {
            return obj[key];
        }
        if (!(key in this.mSubProxies) || (obj[key] !== this.mSubProxies[key].obj)) {
            this.mSubProxies[key] = {
                proxy: new Proxy(obj[key], new StateProxyHandler(this.mComponent, null, this, [].concat(this.mPath, key))),
                obj: obj[key],
            };
        }
        return this.mSubProxies[key].proxy;
    }
}
exports.StateProxyHandler = StateProxyHandler;
/**
 * convenience extension for React.Component that adds support for the
 * i18n library.
 *
 * This whole module is just here to reduce the code required for "decorated"
 * components.
 *
 * @export
 * @class ComponentEx
 * @extends {(React.Component<P & II18NProps, S>)}
 * @template P
 * @template S
 */
class ComponentEx extends React.Component {
    initState(value) {
        this.state = value;
        const proxyHandler = new StateProxyHandler(this, value, undefined, []);
        this.nextState = new Proxy(value, proxyHandler);
    }
}
ComponentEx.contextTypes = {
    api: PropTypes.object.isRequired,
    menuLayer: PropTypes.object,
};
exports.ComponentEx = ComponentEx;
class PureComponentEx extends React.PureComponent {
    initState(value) {
        this.state = value;
        const proxyHandler = new StateProxyHandler(this, value, undefined, []);
        this.nextState = new Proxy(value, proxyHandler);
    }
}
PureComponentEx.contextTypes = {
    api: PropTypes.object.isRequired,
    menuLayer: PropTypes.object,
};
exports.PureComponentEx = PureComponentEx;
