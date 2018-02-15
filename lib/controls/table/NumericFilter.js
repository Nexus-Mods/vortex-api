"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TooltipControls_1 = require("../../controls/TooltipControls");
const util_1 = require("../../util/util");
const React = require("react");
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
                tooltip: props.t('Higher or Equal'),
            },
            le: {
                symbol: '\u2264',
                tooltip: props.t('Less or Equal'),
            },
        };
    }
    render() {
        const { filter, t } = this.props;
        const filt = filter || { comparison: 'eq', value: '' };
        const currentComparison = this.comparisons[filt.comparison];
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
        if (!util_1.truthy(value)) {
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
