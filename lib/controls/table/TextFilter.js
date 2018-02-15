"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
class TextFilterComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.changeFilter = (evt) => {
            const { attributeId, onSetFilter } = this.props;
            onSetFilter(attributeId, evt.currentTarget.value);
        };
    }
    render() {
        const { filter } = this.props;
        return (React.createElement(react_bootstrap_1.FormControl, { className: 'form-field-compact', type: 'text', value: filter || '', onChange: this.changeFilter }));
    }
}
exports.TextFilterComponent = TextFilterComponent;
class TextFilter {
    constructor(caseSensitive) {
        this.component = TextFilterComponent;
        this.raw = false;
        this.mCaseSensitive = caseSensitive;
    }
    matches(filter, value) {
        if (this.mCaseSensitive) {
            if ((value === undefined) || (filter === undefined)) {
                return false;
            }
            return value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        }
        else {
            return value.indexOf(filter) !== -1;
        }
    }
}
exports.default = TextFilter;
