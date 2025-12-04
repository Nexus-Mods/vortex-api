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
const React = __importStar(require("react"));
class Toggle extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onToggle = () => {
            const { onToggle, checked, dataId } = this.props;
            onToggle(!checked, dataId);
        };
    }
    render() {
        const { children, checked, disabled } = this.props;
        const classes = ['toggle-container'];
        if (disabled === true) {
            classes.push('toggle-disabled');
        }
        return (React.createElement("div", null,
            React.createElement("div", { className: classes.join(' ') },
                React.createElement("div", { className: `toggle toggle-${checked ? 'on' : 'off'}`, onClick: disabled === true ? undefined : this.onToggle },
                    React.createElement("div", { className: 'toggle-track' },
                        React.createElement(Icon_1.default, { name: checked ? 'toggle-enabled' : 'toggle-disabled' })),
                    React.createElement("div", { className: 'toggle-handle' },
                        React.createElement(Icon_1.default, { name: 'riffle', rotate: 90 }))),
                React.createElement("div", { className: 'toggle-children' }, children))));
    }
}
exports.default = Toggle;
