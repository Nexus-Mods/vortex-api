"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../../../util/ComponentEx");
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const filterModInfo_1 = require("../../mod_management/util/filterModInfo");
const selectors_1 = require("../../profile_management/selectors");
const Promise = require("bluebird");
const _ = require("lodash");
const React = require("react");
const react_select_1 = require("react-select");
class CategoryFilterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.changeFilter = (value) => {
            const { attributeId, onSetFilter } = this.props;
            onSetFilter(attributeId, value.map(val => val.value));
        };
        this.state = {
            archiveCategories: {},
        };
    }
    componentWillMount() {
        this.updateState([], this.props, true);
    }
    componentWillReceiveProps(newProps) {
        if (this.props.downloads !== newProps.downloads) {
            const before = Object.keys(this.props.downloads)
                .filter(dlId => this.props.downloads[dlId].game === this.props.gameId);
            this.updateState(before, newProps, false);
        }
    }
    render() {
        const { filter, categories, mods } = this.props;
        const { archiveCategories } = this.state;
        const installedArchives = new Set();
        const modCategories = new Set();
        Object.keys(mods || {}).forEach(modId => {
            const mod = mods[modId];
            const category = storeHelper_1.getSafe(mod.attributes, ['category'], undefined);
            if (category !== undefined) {
                modCategories.add(category.toString());
            }
            if (mod.archiveId !== undefined) {
                installedArchives.add(mod.archiveId);
            }
        });
        Object.keys(archiveCategories).forEach(archiveId => {
            if (!installedArchives.has(archiveId)) {
                modCategories.add(archiveCategories[archiveId].toString());
            }
        });
        const options = Array.from(modCategories)
            .filter(id => storeHelper_1.getSafe(categories, [id], undefined) !== undefined)
            .map(id => ({
            value: id.toString(),
            label: storeHelper_1.getSafe(categories, [id, 'name'], undefined),
        })).sort((lhs, rhs) => lhs.label.localeCompare(rhs.label));
        return (React.createElement(react_select_1.default, { multi: true, className: 'select-compact', options: options, value: filter, onChange: this.changeFilter, autosize: false }));
    }
    updateState(before, props, force) {
        const archiveCategories = Object.assign({}, this.state.archiveCategories);
        const after = Object.keys(props.downloads)
            .filter(dlId => props.downloads[dlId].game === props.gameId);
        const removed = _.difference(before, after);
        // remove disappeared downloads
        removed.forEach(archiveId => { delete archiveCategories[archiveId]; });
        // update added or changed downloads
        const filtered = force ? after : after.filter(archiveId => this.props.downloads[archiveId] !== props.downloads[archiveId]);
        Promise.map(filtered, archiveId => filterModInfo_1.default({ download: props.downloads[archiveId] }, undefined)
            .then(info => {
            if (info.category !== undefined) {
                archiveCategories[archiveId] = info.category;
            }
        }))
            .then(() => {
            this.setState({ archiveCategories });
        });
    }
}
function mapStateToProps(state) {
    const gameId = selectors_1.activeGameId(state);
    return {
        gameId,
        categories: state.persistent.categories[gameId],
        mods: state.persistent.mods[gameId],
        downloads: state.persistent.downloads.files,
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
    isEmpty(filter) {
        return filter.length === 0;
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
