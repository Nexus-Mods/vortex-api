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
exports.NumericFilterComponent = void 0;
const TooltipControls_1 = require("../TooltipControls");
const util_1 = require("../../../util/util");
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
class NumericFilterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.changeFilter = (evt) => {
            const { attributeId, onSetFilter } = this.props;
            this.currentValue = evt.currentTarget.value;
            onSetFilter(attributeId, { comparison: this.currentComparison, value: this.currentValue });
        };
        this.toggleDirection = (evt) => {
            const { attributeId, filter, onSetFilter } = this.props;
            const filt = filter || { comparison: 'eq', value: '' };
            const options = ['eq', 'ge', 'le'];
            this.currentComparison =
                options[(options.indexOf(filt.comparison) + 1) % options.length];
            onSetFilter(attributeId, { comparison: this.currentComparison, value: this.currentValue });
        };
        const filt = props.filter || { comparison: 'eq', value: '' };
        this.currentValue = filt.value;
        this.currentComparison = filt.comparison;
        this.comparisons = {
            eq: {
                symbol: '=',
                tooltip: props.t('Equal'),
            },
            ge: {
                symbol: '\u2265',
                tooltip: props.t('Greater-than or Equal'),
            },
            le: {
                symbol: '\u2264',
                tooltip: props.t('Less-than or Equal'),
            },
        };
    }
    render() {
        var _a;
        const { filter, t } = this.props;
        const filt = filter || { comparison: 'eq', value: '' };
        const currentComparison = (_a = this.comparisons[filt.comparison]) !== null && _a !== void 0 ? _a : this.comparisons.eq;
        return (React.createElement(react_bootstrap_1.InputGroup, { style: { width: '100%' } },
            React.createElement(react_bootstrap_1.InputGroup.Addon, { className: 'group-addon-btn' },
                React.createElement(TooltipControls_1.Button, { id: 'btn-numeric-direction', className: 'btn-embed', onClick: this.toggleDirection, tooltip: currentComparison.tooltip }, currentComparison.symbol)),
            React.createElement(react_bootstrap_1.FormControl, { className: 'form-field-compact', type: 'number', value: filt.value, onChange: this.changeFilter })));
    }
}
exports.NumericFilterComponent = NumericFilterComponent;
class NumericFilter {
    constructor() {
        this.component = NumericFilterComponent;
        this.raw = false;
    }
    matches(filter, input) {
        const { comparison, value } = filter;
        if (!(0, util_1.truthy)(value)) {
            return true;
        }
        return {
            eq: (lhs, rhs) => lhs === rhs,
            ge: (lhs, rhs) => lhs >= rhs,
            le: (lhs, rhs) => lhs <= rhs,
        }[comparison](input, parseInt(value, 10));
    }
}
exports.default = NumericFilter;
