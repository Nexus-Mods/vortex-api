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
const React = __importStar(require("react"));
const ComponentEx_1 = require("../../util/ComponentEx");
class TriStateCheckbox extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mRef = null;
        this.onClick = (evt) => {
            const { disabled } = this.props;
            if (disabled) {
                this.mRef.checked = false;
                this.mRef.indeterminate = false;
                this.mRef.disabled = true;
                return;
            }
            this.mRef.indeterminate = false;
            this.nextState.checkboxState = this.mRef.checked ? 'enabled' : 'disabled';
        };
        this.onContextMenu = (evt) => {
            const { disabled, onContextMenu } = this.props;
            if (disabled || this.mRef === null) {
                return;
            }
            this.mRef.indeterminate = !this.mRef.indeterminate;
            if (!!this.mRef.indeterminate) {
                this.mRef.checked = true;
                this.nextState.checkboxState = 'locked';
            }
            else {
                this.mRef.checked = true;
                this.nextState.checkboxState = 'enabled';
            }
            if (onContextMenu) {
                onContextMenu(this.nextState.checkboxState);
            }
        };
        this.onChange = (evt) => {
            const { onChangeCB } = this.props;
            const { checkboxState } = this.state;
            if (!!onChangeCB) {
                onChangeCB(evt, checkboxState);
            }
        };
        this.onRef = (ref) => {
            if (ref === null) {
                // The checkbox may have moved somewhere
                //  else in the DOM or perhaps it was removed
                //  completely.
                return;
            }
            const { checkboxState } = this.state;
            if (checkboxState === 'locked') {
                ref.indeterminate = true;
            }
            this.mRef = ref;
        };
        this.initState({
            checkboxState: !!(props === null || props === void 0 ? void 0 : props.indeterminate)
                ? 'locked'
                : !!(props === null || props === void 0 ? void 0 : props.checked) ? 'enabled' : 'disabled',
        });
    }
    render() {
        const { classNames, indeterminate } = this.props;
        const indeterminateClass = !!indeterminate ? ['indeterminate'] : [''];
        const classes = (!!classNames)
            ? ['tri-state-checkbox'].concat(classNames, indeterminateClass)
            : ['tri-state-checkbox'].concat(indeterminateClass);
        return (React.createElement("div", { className: 'tri-state-checkbox-container' },
            React.createElement("input", { type: 'checkbox', checked: this.state.checkboxState !== 'disabled', className: classes.join(' '), ref: this.onRef, onChange: this.onChange, onClick: this.onClick, onContextMenu: this.onContextMenu }),
            this.props.children));
    }
}
exports.default = (0, ComponentEx_1.translate)(['common'])(TriStateCheckbox);
