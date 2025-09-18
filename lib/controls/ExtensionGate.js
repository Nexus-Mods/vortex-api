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
const log_1 = require("../util/log");
const util_1 = require("../util/util");
const TooltipControls_1 = require("./TooltipControls");
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
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
    componentWillUnmount() {
        if (this.mValid) {
            const props = React.Children.only(this.props.children).props;
            Object.keys(props).forEach(key => {
                if ((0, util_1.truthy)(props[key])
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
        if (this.mValid === undefined) {
            this.initialize();
        }
        if (!this.mValid) {
            return (React.createElement(TooltipControls_1.Icon, { id: this.props.id, tooltip: 'Extension failed to render', name: 'extension-render-failed' }));
        }
        this.updateWrappers(React.Children.only(this.props.children).props);
        return React.cloneElement(React.Children.only(this.props.children), this.mWrappers);
    }
    initialize() {
        if (React.Children.count(this.props.children) === 0) {
            return;
        }
        try {
            const props = React.Children.only(this.props.children).props;
            Object.keys(props).forEach(key => {
                if ((0, util_1.truthy)(props[key])
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
            (0, log_1.log)('warn', 'failed to mount extension control', { err });
            this.mValid = false;
        }
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
