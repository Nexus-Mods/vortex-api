"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TooltipControls_1 = require("../../controls/TooltipControls");
const util_1 = require("../../util/util");
const moment = require("moment");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_datepicker_1 = require("react-datepicker");
const ComponentEx_1 = require("../../util/ComponentEx");
class DateTimeFilterComponent extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.changeFilter = (date) => {
            const { attributeId, onSetFilter } = this.props;
            this.currentValue = date !== null ? date.toDate() : null;
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
                tooltip: props.t('Higher or Equal'),
            },
            le: {
                symbol: '\u2264',
                tooltip: props.t('Less or Equal'),
            },
        };
    }
    render() {
        const { filter } = this.props;
        const filt = filter || { comparison: 'eq', value: '' };
        const currentComparison = this.comparisons[filt.comparison];
        return (React.createElement(react_bootstrap_1.InputGroup, { className: 'datetime-filter' },
            React.createElement(react_bootstrap_1.InputGroup.Addon, { className: 'group-addon-btn' },
                React.createElement(TooltipControls_1.Button, { id: 'btn-date-direction', className: 'btn-embed', onClick: this.toggleDirection, tooltip: currentComparison.tooltip }, currentComparison.symbol)),
            React.createElement(react_datepicker_1.default, { selected: filt.value !== null ? moment(filt.value) : null, onChange: this.changeFilter, locale: this.context.api.locale(), isClearable: true, className: 'datetime-picker' })));
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
        if (!util_1.truthy(value)) {
            return true;
        }
        if (!util_1.truthy(input)) {
            return false;
        }
        return {
            eq: (lhs, rhs) => lhs.getTime() === rhs.getTime(),
            ge: (lhs, rhs) => lhs >= rhs,
            le: (lhs, rhs) => lhs <= rhs,
        }[comparison](roundToDay(input), roundToDay(new Date(value)));
    }
    isEmpty(filter) {
        return !util_1.truthy(filter) || !util_1.truthy(filter.value);
    }
}
exports.default = DateTimeFilter;
