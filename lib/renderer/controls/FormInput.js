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
const Debouncer_1 = __importDefault(require("../../util/Debouncer"));
const util_1 = require("../../util/util");
const TooltipControls_1 = require("./TooltipControls");
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const FormFeedback_1 = __importDefault(require("./FormFeedback"));
/**
 * this is a wrapper for the text input-component that is styled like the
 * bootstrap FormControl component.
 * This wrapper uses a "cache" in the state to reduce the number of (costy)
 * rerenders caused by changing the redux store every keypress.
 * As a side effect, this fixes a problem where the cursor always jumps to
 * the end of the line when using controlled input.
 */
class FormInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.clear = () => {
            this.setState({ cachedValue: "" });
            this.mDebouncer.schedule(undefined, "");
        };
        this.onBlur = (evt) => {
            const { onFocus } = this.props;
            evt.preventDefault();
            if (onFocus) {
                onFocus(false);
            }
        };
        this.onFocus = (evt) => {
            const { onFocus } = this.props;
            evt.preventDefault();
            if (onFocus) {
                onFocus(true);
            }
        };
        this.onChange = (evt) => {
            const { type, min, max } = this.props;
            evt.preventDefault();
            let newValue = evt.currentTarget.value;
            if (type === "number" && newValue.length > 0) {
                let numValue = parseFloat(newValue);
                if (Number.isNaN(numValue)) {
                    // ignore input if it's not valid
                    evt.currentTarget.value = this.state.cachedValue.toString();
                    return;
                }
                if (min !== undefined) {
                    numValue = Math.max(numValue, min);
                }
                if (max !== undefined) {
                    numValue = Math.min(numValue, max);
                }
                newValue = numValue.toString();
            }
            this.setState({ cachedValue: newValue });
            this.mDebouncer.schedule(undefined, newValue);
        };
        this.state = {
            cachedValue: props.value,
        };
        this.mDebouncer = new Debouncer_1.default((newValue) => {
            const { onChange, value } = this.props;
            this.mLastCommitted = newValue;
            onChange(newValue, props.id);
            return null;
        }, this.props.debounceTimer || 1000);
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.value !== this.props.value &&
            this.mLastCommitted !== newProps.value) {
            this.mLastCommitted = newProps.value;
            this.setState({ cachedValue: newProps.value });
        }
    }
    render() {
        const { className, clearable, emptyIcon, groupClass, id, label, min, max, maxLength, placeholder, readOnly, style, type, validate, } = this.props;
        const { cachedValue } = this.state;
        const classes = ["form-input-container"];
        if (className !== undefined) {
            classes.push(className);
        }
        let icon = null;
        if (cachedValue) {
            if (clearable) {
                this.renderClear();
            }
        }
        else if (emptyIcon !== undefined) {
            icon = this.renderIcon(emptyIcon);
        }
        if (icon !== null) {
            classes.push("form-input-hasicon");
        }
        const content = (React.createElement("div", { className: classes.join(" "), style: style },
            React.createElement("input", { className: "form-control", type: type !== null && type !== void 0 ? type : "text", title: label, value: cachedValue, id: id, onChange: this.onChange, readOnly: readOnly, placeholder: placeholder, onBlur: this.onBlur, onFocus: this.onFocus, min: min, max: max, maxLength: maxLength }),
            icon));
        if (validate) {
            const validationState = this.validateRes(cachedValue);
            return (React.createElement(react_bootstrap_1.FormGroup, { className: groupClass, validationState: validationState },
                content,
                readOnly ? null : React.createElement(FormFeedback_1.default, null)));
        }
        else {
            return content;
        }
    }
    validateRes(value) {
        const { validate } = this.props;
        if (validate === undefined) {
            return null;
        }
        let validateRes = validate;
        if ((0, util_1.isFunction)(validate)) {
            validateRes = validate(value);
        }
        return validateRes;
    }
    renderIcon(iconName) {
        return (React.createElement(TooltipControls_1.IconButton, { className: "form-input-clear btn-embed", icon: iconName, tooltip: undefined }));
    }
    renderClear() {
        return (React.createElement(TooltipControls_1.IconButton, { className: "form-input-clear btn-embed", icon: "input-cancel", tooltip: undefined, onClick: this.clear }));
    }
}
exports.default = FormInput;
