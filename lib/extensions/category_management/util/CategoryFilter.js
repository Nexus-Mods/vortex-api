"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../../../util/ComponentEx");
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const selectors_1 = require("../../profile_management/selectors");
const React = require("react");
const react_select_1 = require("react-select");
class CategoryFilterComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.changeFilter = (value) => {
            const { attributeId, onSetFilter } = this.props;
            onSetFilter(attributeId, value.map(val => val.value));
        };
    }
    render() {
        const { filter, categories, mods } = this.props;
        const usedCategories = new Set(Object.keys(mods || {})
            .map(modId => mods[modId].attributes['category'])
            .filter(category => category !== undefined));
        const options = Array.from(usedCategories)
            .filter(id => storeHelper_1.getSafe(categories, [id], undefined) !== undefined)
            .map(id => ({
            value: id.toString(),
            label: storeHelper_1.getSafe(categories, [id, 'name'], undefined),
        })).sort((lhs, rhs) => lhs.label.localeCompare(rhs.label));
        return (React.createElement(react_select_1.default, { multi: true, className: 'select-compact', options: options, value: filter, onChange: this.changeFilter, autosize: false }));
    }
}
function mapStateToProps(state) {
    const gameId = selectors_1.activeGameId(state);
    return {
        categories: state.persistent.categories[gameId],
        mods: state.persistent.mods[gameId],
    };
}
const CategoryFilterComponentConn = ComponentEx_1.connect(mapStateToProps)(CategoryFilterComponent);
class CategoryFilter {
    constructor() {
        this.component = CategoryFilterComponentConn;
        this.raw = 'attributes';
    }
    matches(filter, value, state) {
        if (filter.length === 0) {
            // no filter category set
            return true;
        }
        const filtList = new Set(filter);
        const allCategories = (value !== undefined)
            ? this.categoryChain(value.toString(), state)
            : [];
        return allCategories.find(cat => filtList.has(cat)) !== undefined;
    }
    categoryChain(category, state) {
        const gameId = selectors_1.activeGameId(state);
        const categories = state.persistent.categories[gameId];
        const result = [];
        let iter = category;
        while (util_1.truthy(iter) && (categories[iter] !== undefined)) {
            result.push(iter);
            iter = categories[iter].parentCategory;
        }
        return result;
    }
}
exports.default = CategoryFilter;
