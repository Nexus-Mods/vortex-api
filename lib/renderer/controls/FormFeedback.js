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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = __importDefault(require("./Icon"));
const Spinner_1 = __importDefault(require("./Spinner"));
const classnames_1 = __importDefault(require("classnames"));
const _ = __importStar(require("lodash"));
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
class FormFeedback extends React.Component {
    render() {
        const formGroup = this.context.$bs_formGroup;
        const { className } = this.props;
        const classes = ["form-control-feedback", "feedback-awesome"];
        const { pending } = this.props;
        const elementProps = _.omit(this.props, ["pending", "bsRole"]);
        const icon = this.icon(formGroup && formGroup.validationState, pending);
        if (icon === undefined) {
            return null;
        }
        else {
            return (React.createElement("div", Object.assign({}, elementProps, { className: (0, classnames_1.default)(className, classes) }), icon));
        }
    }
    icon(state, pending) {
        const style = { verticalAlign: "baseline" };
        if (pending) {
            return React.createElement(Spinner_1.default, { style: style });
        }
        switch (state) {
            case "success":
                return React.createElement(Icon_1.default, { name: "feedback-success", style: style });
            case "warning":
                return React.createElement(Icon_1.default, { name: "feedback-warning", style: style });
            case "error":
                return React.createElement(Icon_1.default, { name: "feedback-error", style: style });
            default:
                return undefined;
        }
    }
}
FormFeedback.contextTypes = {
    $bs_formGroup: PropTypes.object,
};
FormFeedback.defaultProps = {
    bsRole: "feedback",
};
exports.default = FormFeedback;
