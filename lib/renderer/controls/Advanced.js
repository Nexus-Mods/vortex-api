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
const ComponentEx_1 = require("../../util/ComponentEx");
const React = __importStar(require("react"));
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
            control = this.props.advancedMode
                ? React.Children.toArray(this.props.children)[0]
                : React.Children.toArray(this.props.children)[1];
        }
        else {
            throw new Error("Advanced component should always have exactly 2 children");
        }
        if (typeof control === "string") {
            return React.createElement("span", null, control);
        }
        else {
            return control;
        }
    }
}
function mapStateToProps(state) {
    return {
        // disabled for now. We make practically no use of the advanced mode so it's just confusing
        // advancedMode: state.settings.interface.advanced,
        advancedMode: true,
    };
}
exports.default = (0, ComponentEx_1.connect)(mapStateToProps)(Advanced);
