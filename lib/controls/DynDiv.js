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
const ComponentEx_1 = require("../util/ComponentEx");
const ExtensionProvider_1 = require("../util/ExtensionProvider");
const React = __importStar(require("react"));
/**
 * A control to contain arbitrary controls added through extensions.
 */
class DynDiv extends React.Component {
    render() {
        const { group, objects, orientation } = this.props;
        const visible = objects.filter((obj, idx) => { var _a; return (((_a = obj.options) === null || _a === void 0 ? void 0 : _a.condition) === undefined) || obj.options.condition({}); });
        const classes = ['dyndiv'];
        if (orientation === 'vertical') {
            classes.push('dyndiv-vertical');
        }
        else { // default to horizontal
            classes.push('dyndiv-horizontal');
        }
        return (React.createElement("div", { id: group, className: classes.join(' ') }, visible.map((comp, idx) => this.renderComponent(comp, idx))));
    }
    renderComponent(object, idx) {
        var _a, _b;
        const props = (_b = (_a = object.options) === null || _a === void 0 ? void 0 : _a.props) !== null && _b !== void 0 ? _b : {};
        return React.createElement(object.component, Object.assign({ key: idx }, props));
    }
}
function registerDynDiv(instanceGroup, group, component, options) {
    if (instanceGroup === group) {
        return { component, options };
    }
    else {
        return undefined;
    }
}
function mapStateToProps() {
    return {};
}
exports.default = (0, ExtensionProvider_1.extend)(registerDynDiv, 'group')((0, ComponentEx_1.connect)(mapStateToProps)(DynDiv));
