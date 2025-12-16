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
exports.FormPathItem = exports.FormCheckboxItem = exports.FormTextItem = void 0;
const FormFeedback_1 = __importDefault(require("./FormFeedback"));
const TooltipControls_1 = require("./TooltipControls");
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ComponentEx_1 = require("../../util/ComponentEx");
const FormInput_1 = __importDefault(require("./FormInput"));
class FormTextItem extends React.Component {
    constructor() {
        super(...arguments);
        this.onChangeValue = (value) => {
            const { stateKey, onChangeValue } = this.props;
            onChangeValue(stateKey, value);
        };
    }
    render() {
        const { controlId, label, maxLength, placeholder, readOnly, style, value } = this.props;
        const validation = value !== undefined ? this.validationState() : undefined;
        const validationState = validation === undefined
            ? undefined
            : validation === null
                ? "success"
                : "error";
        return (React.createElement(react_bootstrap_1.FormGroup, { controlId: controlId, validationState: validationState, style: style },
            React.createElement(react_bootstrap_1.Col, { componentClass: react_bootstrap_1.ControlLabel, sm: 3 }, label),
            React.createElement(react_bootstrap_1.Col, { sm: 9 },
                React.createElement(FormInput_1.default, { type: "text", placeholder: placeholder, value: value || "", onChange: this.onChangeValue, readOnly: readOnly, maxLength: maxLength }),
                validation ? React.createElement(react_bootstrap_1.ControlLabel, null, validation) : null),
            React.createElement(FormFeedback_1.default, null)));
    }
    validationState() {
        const { validator, value } = this.props;
        if (validator === undefined) {
            return undefined;
        }
        return validator(value);
    }
}
exports.FormTextItem = FormTextItem;
class FormCheckboxItem extends React.Component {
    constructor() {
        super(...arguments);
        this.onChangeValue = (evt) => {
            const { stateKey, onChangeValue } = this.props;
            if (onChangeValue !== undefined) {
                onChangeValue(stateKey, evt.currentTarget.value);
            }
        };
    }
    render() {
        const { label, style, value } = this.props;
        return (React.createElement(react_bootstrap_1.Checkbox, { value: value, onChange: this.onChangeValue, style: style }, label));
    }
}
exports.FormCheckboxItem = FormCheckboxItem;
class FormPathItem extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.handleTypePath = (evt) => {
            const { onChangeValue, stateKey } = this.props;
            onChangeValue(stateKey, evt.target.value);
        };
        this.handleChangePath = () => {
            const { directory, extensions, onChangeValue, stateKey, value } = this.props;
            const func = directory
                ? this.context.api.selectDir
                : this.context.api.selectFile;
            func({
                defaultPath: value,
                filters: extensions !== undefined ? [{ name: "Files", extensions }] : [],
            }).then((result) => {
                if (result !== undefined) {
                    onChangeValue(stateKey, result);
                }
            });
        };
    }
    render() {
        const { t, controlId, label, placeholder, readOnly, style, value } = this.props;
        const validation = value !== undefined ? this.validationState() : undefined;
        const validationState = validation === undefined
            ? undefined
            : validation === null
                ? "success"
                : "error";
        return (React.createElement(react_bootstrap_1.FormGroup, { controlId: controlId, validationState: validationState, style: style },
            React.createElement(react_bootstrap_1.Col, { componentClass: react_bootstrap_1.ControlLabel, sm: 3 }, label),
            React.createElement(react_bootstrap_1.Col, { sm: 9 },
                React.createElement(react_bootstrap_1.InputGroup, null,
                    React.createElement(react_bootstrap_1.FormControl, { type: "text", value: value, placeholder: placeholder, readOnly: readOnly, onChange: this.handleTypePath }),
                    readOnly ? null : (React.createElement(react_bootstrap_1.InputGroup.Button, { className: "inset-btn" },
                        React.createElement(TooltipControls_1.IconButton, { id: "change-tool-path", tooltip: t("Change"), onClick: this.handleChangePath, icon: "browse" })))),
                validation ? React.createElement(react_bootstrap_1.ControlLabel, null, validation) : null)));
    }
    validationState() {
        const { validator, value } = this.props;
        if (validator === undefined) {
            return undefined;
        }
        return validator(value);
    }
}
exports.FormPathItem = FormPathItem;
