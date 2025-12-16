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
exports.DateTimeFilterComponent = void 0;
const TooltipControls_1 = require("../TooltipControls");
const ComponentEx_1 = require("../../../util/ComponentEx");
const datelocales_1 = require("../../../util/datelocales");
const util_1 = require("../../../util/util");
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_datepicker_1 = __importDefault(require("react-datepicker"));
class DateTimeFilterComponent extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.changeFilter = (date) => {
            const { attributeId, onSetFilter } = this.props;
            this.currentValue = date;
            onSetFilter(attributeId, {
                comparison: this.currentComparison,
                value: this.currentValue,
            });
        };
        this.toggleDirection = (evt) => {
            const { attributeId, filter, onSetFilter } = this.props;
            const filt = filter || { comparison: "eq", value: "" };
            const options = ["eq", "ge", "le"];
            this.currentComparison = options[(options.indexOf(filt.comparison) + 1) % options.length];
            onSetFilter(attributeId, {
                comparison: this.currentComparison,
                value: this.currentValue,
            });
        };
        const filt = props.filter || { comparison: "eq", value: "" };
        this.currentValue = filt.value;
        this.currentComparison = filt.comparison;
        this.comparisons = {
            eq: {
                symbol: "=",
                tooltip: props.t("Equal"),
            },
            ge: {
                symbol: "\u2265",
                tooltip: props.t("Greater-than or Equal"),
            },
            le: {
                symbol: "\u2264",
                tooltip: props.t("Less-than or Equal"),
            },
        };
    }
    render() {
        const { filter } = this.props;
        const filt = this.hasValidComparison(filter)
            ? filter
            : { comparison: "eq", value: "" };
        const currentComparison = this.comparisons[filt.comparison];
        const locale = this.context.api.locale();
        return (React.createElement(react_bootstrap_1.InputGroup, { className: "datetime-filter" },
            React.createElement(react_bootstrap_1.InputGroup.Addon, { className: "group-addon-btn" },
                React.createElement(TooltipControls_1.Button, { id: "btn-date-direction", className: "btn-embed", onClick: this.toggleDirection, tooltip: currentComparison.tooltip }, currentComparison.symbol)),
            React.createElement(react_datepicker_1.default, { selected: (0, util_1.truthy)(filt.value) ? new Date(filt.value) : null, onChange: this.changeFilter, locale: (0, datelocales_1.getLocale)(locale), dateFormat: (0, datelocales_1.getDateFormat)(locale), isClearable: true, className: "datetime-picker" })));
    }
    hasValidComparison(filter) {
        const validComparisons = Object.keys(this.comparisons);
        return validComparisons.includes(filter === null || filter === void 0 ? void 0 : filter.comparison);
    }
}
exports.DateTimeFilterComponent = DateTimeFilterComponent;
function roundToDay(date) {
    const result = new Date(date.getTime());
    result.setMilliseconds(0);
    result.setSeconds(0);
    result.setMinutes(0);
    result.setHours(0);
    return result;
}
class DateTimeFilter {
    constructor() {
        this.component = DateTimeFilterComponent;
        this.raw = false;
    }
    matches(filter, input) {
        const { comparison, value } = filter;
        if (!(0, util_1.truthy)(value)) {
            return true;
        }
        if (!(0, util_1.truthy)(input)) {
            return false;
        }
        return {
            eq: (lhs, rhs) => lhs.getTime() === rhs.getTime(),
            ge: (lhs, rhs) => lhs >= rhs,
            le: (lhs, rhs) => lhs <= rhs,
        }[comparison](roundToDay(input), roundToDay(new Date(value)));
    }
    isEmpty(filter) {
        return !(0, util_1.truthy)(filter) || !(0, util_1.truthy)(filter.value);
    }
}
exports.default = DateTimeFilter;
