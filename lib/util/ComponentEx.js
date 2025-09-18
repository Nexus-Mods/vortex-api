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
exports.PureComponentEx = exports.ComponentEx = exports.StateProxyHandler = exports.translate = exports.extend = exports.connect = void 0;
const React = __importStar(require("react"));
const storeHelper_1 = require("./storeHelper");
const PropTypes = __importStar(require("prop-types"));
const react_i18next_1 = require("react-i18next");
const timers_1 = require("timers");
const util_1 = require("./util");
var react_redux_1 = require("react-redux");
Object.defineProperty(exports, "connect", { enumerable: true, get: function () { return react_redux_1.connect; } });
var ExtensionProvider_1 = require("./ExtensionProvider");
Object.defineProperty(exports, "extend", { enumerable: true, get: function () { return ExtensionProvider_1.extend; } });
const translate = react_i18next_1.withTranslation;
exports.translate = translate;
class StateProxyHandler {
    constructor(component, baseObject, parent, objPath, delayed) {
        this.mComponent = component;
        this.mPath = objPath;
        this.mBaseObject = baseObject;
        this.mParent = parent;
        this.mSubProxies = {};
        this.mDelayed = delayed;
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
        this.setBaseObject((0, storeHelper_1.deleteOrNop)(this.baseObject(), fullPath));
        this.mComponent.setState(this.baseObject());
        return true;
    }
    set(target, key, value, receiver) {
        target[key] = value;
        const fullPath = [].concat(this.mPath, key);
        this.setBaseObject((0, storeHelper_1.setSafe)(this.baseObject(), fullPath, value));
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
            if (this.mDelayed) {
                if (this.mDelayedTimer !== undefined) {
                    (0, timers_1.clearImmediate)(this.mDelayedTimer);
                }
                this.mDelayedTimer = (0, timers_1.setImmediate)(() => {
                    this.mComponent.setState(this.mBaseObject);
                    this.mDelayedTimer = undefined;
                });
            }
            else {
                this.mComponent.setState(this.mBaseObject);
            }
        }
        else {
            this.mParent.setBaseObject(newObj);
        }
    }
    derive(obj, key) {
        if ((typeof (obj[key]) !== 'object') || (typeof key !== 'string') || !(0, util_1.truthy)(obj[key])) {
            return obj[key];
        }
        if (!(key in this.mSubProxies) || (obj[key] !== this.mSubProxies[key].obj)) {
            this.mSubProxies[key] = {
                proxy: new Proxy(obj[key], new StateProxyHandler(this.mComponent, null, this, [].concat(this.mPath, key), this.mDelayed)),
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
    initState(value, delayed = false) {
        this.state = JSON.parse(JSON.stringify(value));
        const proxyHandler = new StateProxyHandler(this, value, undefined, [], delayed);
        this.nextState = new Proxy(value, proxyHandler);
    }
}
exports.ComponentEx = ComponentEx;
ComponentEx.contextTypes = {
    api: PropTypes.object.isRequired,
    menuLayer: PropTypes.object,
    getModifiers: PropTypes.func,
};
class PureComponentEx extends React.PureComponent {
    initState(value, delayed = false) {
        this.state = JSON.parse(JSON.stringify(value));
        const proxyHandler = new StateProxyHandler(this, value, undefined, [], delayed);
        this.nextState = new Proxy(value, proxyHandler);
    }
}
exports.PureComponentEx = PureComponentEx;
PureComponentEx.contextTypes = {
    api: PropTypes.object.isRequired,
    menuLayer: PropTypes.object,
    getModifiers: PropTypes.func,
};
