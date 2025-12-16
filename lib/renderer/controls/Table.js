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
exports.makeGetSelection = makeGetSelection;
const tables_1 = require("../../actions/tables");
const ComponentEx_1 = require("../../util/ComponentEx");
const Debouncer_1 = __importDefault(require("../../util/Debouncer"));
const log_1 = require("../../util/log");
const smoothScroll_1 = __importDefault(require("../../util/smoothScroll"));
const storeHelper_1 = require("../../util/storeHelper");
const util_1 = require("../../util/util");
const IconBar_1 = __importDefault(require("./IconBar"));
const GroupingRow_1 = __importStar(require("./table/GroupingRow"));
const HeaderCell_1 = __importDefault(require("./table/HeaderCell"));
const MyTable_1 = require("./table/MyTable");
const TableDetail_1 = __importDefault(require("./table/TableDetail"));
const TableRow_1 = __importDefault(require("./table/TableRow"));
const ToolbarIcon_1 = __importDefault(require("./ToolbarIcon"));
const Usage_1 = __importDefault(require("./Usage"));
const bluebird_1 = __importDefault(require("bluebird"));
const immutability_helper_1 = __importDefault(require("immutability-helper"));
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ReactDOM = __importStar(require("react-dom"));
const reselect_1 = require("reselect");
/**
 * a wrapper for the react-bootstrap table adding various features:
 * - desktop-like selection/multi-selection
 * - sorting
 * - toggleable columns
 * - a detail-pane that gives additional detail on the (last) selected row
 */
class SuperTable extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mRowRefs = {};
        this.mLastSelectOnly = 0;
        this.mLastDetailIds = [];
        this.mDetailTimer = null;
        this.mLastUpdateState = undefined;
        this.mNextUpdateState = undefined;
        this.mUpdateInProgress = false;
        this.mNextState = undefined;
        this.mNextVisibility = {};
        this.mDelayedVisibility = {};
        this.mWillSetVisibility = false;
        this.mMounted = false;
        this.mNoShrinkColumns = {};
        this.mDefaultFilterRef = null;
        this.mLastScrollLeft = 0;
        this.mLastOnTop = true;
        this.renderBody = () => {
            const { t, attributeState, data } = this.props;
            const { calculatedValues, groupedRows, sortedRows } = this.state;
            if (data === undefined ||
                calculatedValues === undefined ||
                sortedRows === undefined) {
                return React.createElement(MyTable_1.TBody, null);
            }
            const sortAttribute = this.mVisibleAttributes.find((attribute) => this.isSortColumn(attributeState[attribute.id]));
            if (groupedRows !== undefined) {
                return (React.createElement(MyTable_1.TBody, null, groupedRows.map((group) => {
                    const expanded = group.rows !== null;
                    const rows = group.rows || [];
                    return [
                        React.createElement(GroupingRow_1.default, { t: t, key: group.id || "__empty", groupId: group.id, groupName: group.name, expanded: expanded, count: group.count, width: this.mVisibleAttributes.length + 1, onToggle: this.toggleGroup, onExpandAll: this.expandAll, onCollapseAll: this.collapseAll }),
                        ...rows.map((rowId) => this.renderRow(rowId, sortAttribute, group.id)),
                    ];
                })));
            }
            else {
                return (React.createElement(MyTable_1.TBody, null, sortedRows.map((row, idx) => this.renderRow(row, sortAttribute))));
            }
        };
        this.toggleGroup = (groupName, expand) => {
            const { onCollapseGroup, tableId } = this.props;
            onCollapseGroup(tableId, groupName, !expand);
        };
        this.expandAll = () => {
            const { onSetCollapsedGroups, tableId } = this.props;
            onSetCollapsedGroups(tableId, []);
        };
        this.collapseAll = () => {
            const { groupBy, onSetCollapsedGroups, tableId } = this.props;
            const { calculatedValues, sortedRows } = this.state;
            const groupOptions = (0, util_1.makeUnique)(sortedRows.map((rowId) => calculatedValues[rowId][groupBy]));
            onSetCollapsedGroups(tableId, groupOptions);
        };
        this.scrollTo = (id, mayRetry) => {
            try {
                const node = ReactDOM.findDOMNode(this.mRowRefs[id]);
                if (node !== null) {
                    this.scrollToItem(node, false);
                }
                else if (mayRetry !== false) {
                    setTimeout(() => {
                        this.scrollTo(id, false);
                    }, 2000);
                }
                else {
                    (0, log_1.log)("warn", "node not found", id);
                }
            }
            catch (err) {
                if (mayRetry !== false) {
                    setTimeout(() => {
                        this.scrollTo(id, false);
                    }, 2000);
                }
                else {
                    (0, log_1.log)("warn", "failed to scroll to item", {
                        id,
                        tableId: this.props.tableId,
                        error: err.message,
                    });
                }
            }
        };
        this.selectItem = (id, openDetails) => {
            this.scrollTo(id);
            this.setGroup(undefined);
            this.selectOnly(id, undefined, false);
            this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                detailsOpen: { $set: openDetails },
            }), this.onRowStateChanged);
        };
        this.toggleDetails = () => {
            const { detailsOpen } = this.state;
            this.updateState((0, immutability_helper_1.default)(this.mNextState, { detailsOpen: { $set: !detailsOpen } }));
        };
        this.renderDetails = () => {
            const { t, data, detailsTitle, language, objects } = this.props;
            const { calculatedValues, detailsOpen, rowIdsDelayed } = this.state;
            if (rowIdsDelayed === undefined ||
                rowIdsDelayed.length === 0 ||
                calculatedValues === undefined ||
                data === undefined) {
                return null;
            }
            return (React.createElement(TableDetail_1.default, { t: t, rowIds: rowIdsDelayed, rowData: calculatedValues, rawData: data, attributes: this.mVisibleDetails, language: language, show: detailsOpen, title: detailsTitle, onToggleShow: this.toggleDetails }));
        };
        this.renderHeaderField = (attribute, proxy) => {
            var _a;
            const { t, filter, groupBy } = this.props;
            const attributeState = this.getAttributeState(attribute);
            const filt = attribute.filter !== undefined && filter !== undefined
                ? ((_a = filter[attribute.id]) !== null && _a !== void 0 ? _a : null)
                : undefined;
            if (attributeState.enabled) {
                const classes = [`header-${attribute.id}`];
                if (this.filterSet(filt) &&
                    (attribute.filter.isEmpty === undefined ||
                        !attribute.filter.isEmpty(filt))) {
                    classes.push("table-filter-column");
                }
                if (this.isSortColumn(attributeState)) {
                    classes.push("table-sort-column");
                }
                return (React.createElement(HeaderCell_1.default, { className: classes.join(" "), key: attribute.id, attribute: attribute, state: attributeState, doFilter: true, doGroup: attribute.id === groupBy, onSetSortDirection: this.setSortDirection, onSetGroup: this.setGroup, onSetFilter: this.setFilter, ref: proxy ? this.setHeaderCellRef : undefined, t: t }, attribute.filter !== undefined ? (React.createElement(attribute.filter.component, { filter: filt, attributeId: attribute.id, domRef: attribute.isDefaultFilter ? this.setDefaultFilterRef : undefined, t: t, onSetFilter: this.setFilter })) : null));
            }
            else {
                return null;
            }
        };
        this.setDefaultFilterRef = (ref) => {
            this.mDefaultFilterRef = ref;
        };
        this.setHeaderCellRef = (ref) => {
            if (ref !== null) {
                if (ref.props.attribute.noShrink === true) {
                    this.mNoShrinkColumns[ref.props.attribute.id] = ref;
                }
            }
        };
        this.handleKeyDown = (evt) => {
            const { lastSelected, selectionStart, sortedRows } = this.state;
            try {
                if (evt.target !== this.mScrollRef) {
                    return;
                }
                if (evt.key === "f" && evt.ctrlKey) {
                    if (this.mDefaultFilterRef !== null) {
                        this.mDefaultFilterRef.focus();
                    }
                    return;
                }
                if (this.useMultiSelect()) {
                    if (evt.key === "a" && evt.ctrlKey) {
                        this.selectAll();
                        return;
                    }
                    if (evt.shiftKey && selectionStart === undefined) {
                        const selection = lastSelected !== undefined
                            ? { rowId: lastSelected.rowId, groupId: lastSelected.groupId }
                            : undefined;
                        this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                            selectionStart: { $set: selection },
                        }));
                    }
                    else if (!evt.shiftKey && selectionStart !== undefined) {
                        this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                            selectionStart: { $set: undefined },
                        }));
                    }
                }
                // TODO: this calculation of the number of lines visible in the table is only
                // accurate under the assumption all lines have the same height
                let visibleLineCount = 0;
                if (lastSelected !== undefined &&
                    this.mRowRefs[lastSelected.rowId] !== undefined) {
                    // the previously selected row might no longer be visible, which would cause
                    // an exception when trying to find the associated dom node
                    const lastIdx = sortedRows.indexOf(lastSelected.rowId);
                    if (lastIdx !== -1) {
                        const selectedNode = ReactDOM.findDOMNode(this.mRowRefs[lastSelected.rowId]);
                        visibleLineCount =
                            this.mScrollRef.clientHeight / selectedNode.clientHeight;
                        // account for the header. quite inaccurate.
                        visibleLineCount -= 2;
                    }
                }
                let offset = 0;
                switch (evt.keyCode) {
                    case 32: {
                        evt.preventDefault();
                        this.toggleDetails();
                        break;
                    }
                    case 33:
                        offset = Math.round(visibleLineCount * -0.5);
                        break;
                    case 34:
                        offset = Math.round(visibleLineCount * 0.5);
                        break;
                    case 38:
                        offset = -1;
                        break;
                    case 40:
                        offset = 1;
                        break;
                }
                if (offset !== 0) {
                    evt.preventDefault();
                    const groupId = evt.currentTarget.getAttribute("data-group") || undefined;
                    const newItem = this.selectRelative(offset, groupId, evt.shiftKey);
                    if (this.mRowRefs[newItem] !== undefined && this.mMounted) {
                        this.scrollToItem(ReactDOM.findDOMNode(this.mRowRefs[newItem]), Math.abs(offset) > 1);
                    }
                }
                else {
                    const action = this.props.actions.find((iter) => this.matchHotKey(iter, evt.keyCode, evt.shiftKey, evt.altKey, evt.ctrlKey));
                    if (action !== undefined) {
                        evt.preventDefault();
                        const { rowState } = this.state;
                        action.action(Object.keys(rowState).filter((id) => rowState[id].selected));
                    }
                }
            }
            catch (err) {
                (0, log_1.log)("warn", "failed to handle keydown event", err.message);
            }
        };
        this.selectRelative = (delta, groupId, shiftHeld) => {
            const { groupBy } = this.props;
            const { groupedRows, lastSelected, selectionStart, sortedRows } = this.state;
            if (lastSelected === undefined || sortedRows === undefined) {
                return;
            }
            let groupSortedRows;
            if (groupBy !== undefined) {
                groupSortedRows = groupedRows.reduce((prev, group) => {
                    prev.push(...(group.rows || []));
                    return prev;
                }, []);
            }
            else {
                groupSortedRows = sortedRows;
            }
            let idx = groupSortedRows.indexOf(lastSelected.rowId);
            const oldIdx = idx;
            idx = Math.min(Math.max(idx + delta, 0), groupSortedRows.length - 1);
            const newSelection = groupSortedRows[idx];
            if (oldIdx === idx) {
                return newSelection;
            }
            this.selectOnly(newSelection, groupId, false);
            if (shiftHeld) {
                this.selectTo(selectionStart.rowId, selectionStart.groupId);
            }
            return newSelection;
        };
        this.setProxyHeaderRef = (ref) => {
            this.mProxyHeaderRef = ref;
            this.mHeaderUpdateDebouncer.schedule();
        };
        this.setVisibleHeaderRef = (ref) => {
            this.mVisibleHeaderRef = ref;
            this.mHeaderUpdateDebouncer.schedule();
        };
        this.mLastHeaderHeight = 0;
        this.setPinnedRef = (ref) => {
            this.mPinnedRef = ref;
        };
        this.setRowRef = (ref) => {
            if (ref !== null) {
                this.mRowRefs[ref.props["data-rowid"]] = ref;
            }
        };
        this.setRowVisible = (rowId, visible) => {
            // turn rows visible asap, turning them invisible can be done when scrolling ends
            // Important: This was intended as a performance optimisation but it also fixed
            //   a problem where drag&drop connectors between rows far apart didn't work because
            //   the source was hidden before while dragging.
            if (visible || this.mDelayedVisibilityTimer === undefined) {
                this.mNextVisibility[rowId] = visible;
                this.mDelayedVisibility[rowId] = visible;
                // it's possible that a previous visibility change hadn't even been
                // rendered yet, in this case we don't have to trigger an update
                if (visible !== this.state.rowVisibility[rowId]) {
                    this.triggerUpdateVisibility();
                }
            }
            else {
                this.mDelayedVisibility[rowId] = visible;
            }
        };
        this.setRowHighlight = (rowId, highlighted) => {
            this.updateState((0, storeHelper_1.setSafe)(this.mNextState, ["rowState", rowId, "highlighted"], highlighted));
        };
        this.scrollToItem = (item, smooth, iterations = 3) => {
            const height = this.mScrollRef.offsetHeight;
            const offset = height / 5;
            const topLimit = this.mScrollRef.scrollTop + offset;
            const bottomLimit = this.mScrollRef.scrollTop + this.mScrollRef.clientHeight - offset;
            const itemBottom = item.offsetTop + item.offsetHeight;
            let targetPos;
            if (item.offsetTop < topLimit) {
                targetPos = Math.max(item.offsetTop - offset, 0);
            }
            else if (itemBottom > bottomLimit) {
                targetPos = itemBottom - this.mScrollRef.clientHeight + offset;
            }
            if (targetPos !== undefined && targetPos !== this.mScrollRef.scrollTop) {
                if (smooth) {
                    (0, smoothScroll_1.default)(this.mScrollRef, targetPos, SuperTable.SCROLL_DURATION).then((cont) => cont && iterations > 0
                        ? this.scrollToItem(item, false, iterations - 1)
                        : bluebird_1.default.resolve());
                }
                else {
                    this.mScrollRef.scrollTop = targetPos;
                    if (iterations > 0) {
                        // workaround: since we're not rendering off-screen rows it's possible for row heights to
                        //  change as we scroll and then the offset we calculated might not be in the visible
                        //  range after all.
                        setTimeout(() => {
                            this.scrollToItem(item, smooth, iterations - 1);
                        }, 100);
                    }
                }
            }
        };
        this.onScroll = (event) => {
            this.mLastScroll = Date.now();
            if (this.mDelayedVisibilityTimer === undefined) {
                this.mDelayedVisibilityTimer = setTimeout(() => this.postScroll(), SuperTable.SCROLL_DEBOUNCE + 100);
            }
            const ele = event.target;
            const atTop = ele.scrollTop === 0;
            if ((ele.scrollLeft !== this.mLastScrollLeft && (0, util_1.truthy)(this.mHeaderRef)) ||
                (atTop !== this.mLastOnTop && (0, util_1.truthy)(this.mPinnedRef))) {
                this.mLastOnTop = atTop;
                this.mLastScrollLeft = ele.scrollLeft;
                window.requestAnimationFrame(() => {
                    if ((0, util_1.truthy)(this.mPinnedRef)) {
                        this.mPinnedRef.className = atTop
                            ? "table-pinned"
                            : "table-pinned-hidden";
                    }
                    if ((0, util_1.truthy)(this.mHeaderRef)) {
                        this.mHeaderRef.style.left = `-${ele.scrollLeft}px`;
                    }
                });
            }
            Object.keys(this.mNoShrinkColumns).forEach((colId) => {
                this.mNoShrinkColumns[colId].updateWidth();
            });
        };
        this.onResize = () => {
            this.mHeaderUpdateDebouncer.schedule();
        };
        this.mainPaneRef = (ref) => {
            if (ref === null) {
                return;
            }
            // not sure if this is necessary, I guess not
            ref.removeEventListener("scroll", this.onScroll);
            // translate the header so that it remains in view during scrolling
            ref.addEventListener("scroll", this.onScroll);
            this.mScrollRef = ref;
        };
        this.mainHeaderRef = (ref) => {
            this.mHeaderRef = ref;
        };
        this.setAttributeVisible = (attributeId, visible) => {
            const { onSetAttributeVisible, tableId } = this.props;
            onSetAttributeVisible(tableId, attributeId, visible);
        };
        this.selectRow = (evt) => {
            if (evt.isDefaultPrevented()) {
                return;
            }
            const { selectionStart } = this.state;
            if (!evt.shiftKey && selectionStart !== undefined) {
                this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                    selectionStart: { $set: undefined },
                }));
            }
            let iter = evt.target;
            while (iter !== null &&
                iter !== undefined &&
                iter.tagName !== "BUTTON" &&
                this.getClasses(iter).split(" ").indexOf("xtd") === -1) {
                iter = iter.parentNode;
            }
            if (iter !== null && iter.tagName === "BUTTON") {
                // don't handle if the click was on a button
                return;
            }
            const row = evt.currentTarget;
            const rowId = row.getAttribute("data-rowid");
            const groupId = row.getAttribute("data-group");
            if (this.useMultiSelect() && evt.ctrlKey) {
                // ctrl-click -> toggle the selected row, leave remaining selection intact
                this.selectToggle(rowId, groupId);
            }
            else if (this.useMultiSelect() && evt.shiftKey) {
                // shift-click -> select everything between this row and the last one clicked,
                //                deselect everything else
                this.selectTo(rowId, groupId);
            }
            else {
                // regular click -> select only the clicked row, everything else get deselected
                this.selectOnly(rowId, groupId, true);
            }
        };
        this.onRowStateChanged = () => {
            const { onChangeSelection } = this.props;
            const { rowState } = this.state;
            const selectedIds = Object.keys(rowState).filter((id) => rowState[id].selected);
            this.updateDetailIds(selectedIds);
            onChangeSelection === null || onChangeSelection === void 0 ? void 0 : onChangeSelection(selectedIds);
        };
        this.deselectAll = () => {
            const { rowState } = this.state;
            const newState = {};
            Object.keys(rowState).forEach((key) => {
                if (rowState[key].selected) {
                    newState[key] = { selected: { $set: false } };
                }
            });
            this.updateState((0, immutability_helper_1.default)(this.mNextState, { rowState: newState }), this.onRowStateChanged);
        };
        this.setSortDirection = (id, direction) => {
            const { objects, onSetAttributeSort, tableId } = this.props;
            // reset all other columns because we can't really support multisort with this ui
            for (const testId of objects.map((attribute) => attribute.id)) {
                const attrState = this.getAttributeState(objects.find((attribute) => attribute.id === testId));
                if (id !== testId && attrState.sortDirection !== "none") {
                    onSetAttributeSort(tableId, testId, "none");
                }
            }
            onSetAttributeSort(tableId, id, direction);
        };
        this.setGroup = (id) => {
            const { groupBy, onSetGroupingAttribute, tableId } = this.props;
            if (groupBy === id) {
                onSetGroupingAttribute(tableId, undefined);
            }
            else {
                onSetGroupingAttribute(tableId, id);
            }
        };
        this.setFilter = (attributeId, filter) => {
            const { onSetAttributeFilter, tableId } = this.props;
            onSetAttributeFilter(tableId, attributeId, filter);
            this.deselectAll();
        };
        this.clearFilters = () => {
            this.setFilter();
        };
        this.mNextState = this.state = {
            lastSelected: undefined,
            calculatedValues: undefined,
            rowState: {},
            sortedRows: undefined,
            groupedRows: undefined,
            detailsOpen: false,
            rowIdsDelayed: [],
            rowVisibility: {},
            singleRowActions: this.singleRowActions(props),
            multiRowActions: this.multiRowActions(props),
            columnToggles: this.columnToggles(props),
        };
        const { table, detail, inline } = this.visibleAttributes(props.objects, props.attributeState);
        this.mVisibleAttributes = table;
        this.mVisibleDetails = detail;
        this.mVisibleInlines = inline;
        this.updateCalculatedValues(props).then((didRun) => {
            if (didRun) {
                this.refreshSorted(this.mNextUpdateState);
                this.updateSelection(this.mNextUpdateState);
            }
            return null;
        });
        this.mHeaderUpdateDebouncer = new Debouncer_1.default(() => {
            this.updateColumnWidth();
            return bluebird_1.default.resolve();
        }, 200, false);
        this.mUpdateCalculatedDebouncer = new Debouncer_1.default(() => {
            return this.updateCalculatedValues(this.props).then((changedColumns) => {
                this.refreshSorted(this.mNextUpdateState);
                this.updateSelection(this.mNextUpdateState);
                return null;
            });
        }, 200, true);
    }
    componentDidMount() {
        this.updateSelection(this.props);
        const { api } = this.context;
        api.events.on(this.props.tableId + "-scroll-to", this.scrollTo);
        api.events.on(this.props.tableId + "-select-item", this.selectItem);
        this.props.objects.forEach((object) => {
            if (object.externalData !== undefined) {
                object.externalData(() => {
                    this.invalidate(object.id);
                });
            }
        });
        this.mMounted = true;
        window.addEventListener("resize", this.onResize);
    }
    componentWillUnmount() {
        this.context.api.events.removeAllListeners(this.props.tableId + "-scroll-to");
        window.removeEventListener("resize", this.onResize);
        this.mMounted = false;
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.attributeState !== this.props.attributeState ||
            newProps.objects !== this.props.objects) {
            const { attributeState, objects } = newProps;
            const { table, detail, inline } = this.visibleAttributes(objects, attributeState);
            this.mVisibleAttributes = table;
            this.mVisibleDetails = detail;
            this.mVisibleInlines = inline;
            if (Object.keys(newProps.attributeState).find((id) => this.props.attributeState[id] === undefined ||
                this.props.attributeState[id].enabled !==
                    newProps.attributeState[id].enabled)) {
                const columnToggles = this.columnToggles(newProps);
                this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                    columnToggles: { $set: columnToggles },
                }));
            }
        }
        if (newProps.actions !== this.props.actions) {
            this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                singleRowActions: { $set: this.singleRowActions(newProps) },
                multiRowActions: { $set: this.multiRowActions(newProps) },
            }));
        }
        if (newProps.data !== this.props.data) {
            Object.keys(this.mRowRefs).forEach((key) => {
                if (newProps.data[key] === undefined) {
                    delete this.mRowRefs[key];
                    if (this.state.lastSelected !== undefined &&
                        this.state.lastSelected.rowId === key) {
                        this.updateState((0, immutability_helper_1.default)(this.mNextState, { lastSelected: { $set: undefined } }));
                    }
                }
            });
        }
        if (newProps.data !== this.props.data ||
            newProps.dataId !== this.props.dataId ||
            newProps.objects !== this.props.objects) {
            this.mUpdateCalculatedDebouncer.schedule();
        }
        else if (newProps.attributeState !== this.props.attributeState ||
            newProps.language !== this.props.language ||
            newProps.filter !== this.props.filter) {
            this.refreshSorted(newProps);
        }
        else if (newProps.groupBy !== this.props.groupBy ||
            newProps.collapsedGroups !== this.props.collapsedGroups) {
            this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                groupedRows: {
                    $set: this.groupedRows(newProps, this.state.sortedRows),
                },
            }));
        }
    }
    componentDidUpdate() {
        this.mHeaderUpdateDebouncer.schedule();
    }
    shouldComponentUpdate(newProps, newState) {
        return (newState !== this.state ||
            newProps.dataId !== this.props.dataId ||
            newProps.tableId !== this.props.tableId ||
            newProps.actions !== this.props.actions ||
            newProps.attributeState !== this.props.attributeState ||
            newProps.filter !== this.props.filter ||
            newProps.defaultSort !== this.props.defaultSort ||
            newProps.showHeader !== this.props.showHeader ||
            newProps.detailsTitle !== this.props.detailsTitle ||
            newProps.showDetails !== this.props.showDetails ||
            newProps.groupBy !== this.props.groupBy ||
            newProps.collapsedGroups !== this.props.collapsedGroups);
    }
    render() {
        const { showHeader, showDetails, tableId } = this.props;
        const { detailsOpen } = this.state;
        const openClass = detailsOpen ? "open" : "closed";
        const containerClasses = ["table-container"];
        if (showDetails) {
            containerClasses.push("has-details");
        }
        return (React.createElement("div", { id: `table-${tableId}`, className: containerClasses.join(" ") },
            React.createElement("div", { className: "table-container-inner" },
                React.createElement("div", { className: "table-main-pane", ref: this.mainPaneRef, tabIndex: 0, onKeyDown: this.handleKeyDown },
                    React.createElement(MyTable_1.Table, { hover: true },
                        showHeader === false ? null : this.renderHeader(true),
                        this.renderBody()),
                    this.props.children),
                this.renderFooter()),
            showHeader === false ? null : (React.createElement("div", { className: "table-header-pane", ref: this.mainHeaderRef },
                React.createElement(MyTable_1.Table, { hover: true }, this.renderHeader(false)))),
            showDetails === false ? null : (React.createElement("div", { className: `table-details-pane ${openClass}` }, this.renderDetails()))));
    }
    renderHeader(proxy) {
        const { t, data, hasActions } = this.props;
        const { sortedRows } = this.state;
        const filteredLength = sortedRows !== undefined ? sortedRows.length : undefined;
        const totalLength = Object.keys(data).length;
        const actionHeader = this.renderTableActions(hasActions !== false);
        const filterActive = filteredLength !== undefined && filteredLength < totalLength;
        return (React.createElement(MyTable_1.THead, { className: "table-header" },
            React.createElement(MyTable_1.TR, { domRef: proxy ? this.setProxyHeaderRef : this.setVisibleHeaderRef },
                this.mVisibleAttributes.map((attribute) => this.renderHeaderField(attribute, proxy)),
                actionHeader),
            filterActive ? (React.createElement(MyTable_1.TR, { className: "table-pinned", domRef: this.setPinnedRef },
                React.createElement(MyTable_1.TD, { colSpan: this.mVisibleAttributes.length + 1 },
                    t("This table is filtered, showing {{shown}}/{{hidden}} items.", { replace: { shown: filteredLength, hidden: totalLength } }),
                    React.createElement(react_bootstrap_1.Button, { onClick: this.clearFilters }, t("Clear all filters"))))) : null));
    }
    renderFooter() {
        const { t, tableId } = this.props;
        const { multiRowActions, rowState } = this.state;
        const selected = Object.keys(rowState).filter((key) => rowState[key].selected);
        if (!this.useMultiSelect()) {
            return null;
        }
        if (selected.length < 2) {
            return (React.createElement(Usage_1.default, { infoId: "table-multiselect" }, t("Did you know? You can select multiple items using ctrl+click or shift+click or " +
                "select everything using ctrl+a and then do things with all selected items at once.")));
        }
        // the footer itself (.table-footer) is absolutely positioned so it fills out a surrounding
        // panel. To ensure the table body isn't overlapped by the footer, insert a placeholder
        // that needs to be the same size as the footer itself (see css)
        return (React.createElement("div", { className: "table-footer-placeholder" },
            React.createElement("div", { className: "table-footer" },
                React.createElement(IconBar_1.default, { t: t, className: "menubar", group: `${tableId}-multirow-actions`, groupByIcon: false, instanceId: selected, staticElements: multiRowActions }),
                React.createElement("div", { className: "menubar" },
                    React.createElement("p", null, t("{{ count }} item selected", { count: selected.length })),
                    React.createElement(ToolbarIcon_1.default, { key: "btn-deselect", icon: "deselect", text: t("Deselect All"), onClick: this.deselectAll })))));
    }
    getGroupOptions(props, sortedRows, sortAttribute, groupAttribute, valFunc) {
        const { attributeState, data } = props;
        let arrays = false;
        let compare;
        const groupOptions = (0, util_1.makeUnique)(sortedRows.reduce((prev, rowId) => {
            if (data[rowId] === undefined) {
                return prev;
            }
            const value = valFunc(rowId);
            if (Array.isArray(value)) {
                arrays = true;
                prev.push(...value);
            }
            else {
                prev.push(value);
            }
            return prev;
        }, [])).sort((lhs, rhs) => {
            var _a;
            if (compare === undefined) {
                const desc = sortAttribute !== undefined &&
                    sortAttribute.id === groupAttribute.id &&
                    ((_a = attributeState[sortAttribute.id]) === null || _a === void 0 ? void 0 : _a.sortDirection) === "desc";
                if (typeof lhs === "number") {
                    compare = desc ? (l, r) => r - l : (l, r) => l - r;
                }
                else {
                    compare = desc
                        ? (l, r) => r
                            .toString()
                            .toLowerCase()
                            .localeCompare(l.toString().toLowerCase())
                        : (l, r) => l
                            .toString()
                            .toLowerCase()
                            .localeCompare(r.toString().toLowerCase());
                }
            }
            return compare(lhs, rhs);
        });
        if (arrays) {
            groupOptions.push(GroupingRow_1.EMPTY_ID);
        }
        return groupOptions;
    }
    invalidate(columnId) {
        this.updateCalculatedValues(this.props, columnId);
    }
    setRowState(rowIds) {
        const { data } = this.props;
        const filteredRowIds = rowIds.filter((id) => this.state.calculatedValues[id] !== undefined && data[id] !== undefined);
        this.updateState((0, immutability_helper_1.default)(this.mNextState, { rowIdsDelayed: { $set: filteredRowIds } }));
        this.mDetailTimer = null;
    }
    updateDetailIds(rowIds) {
        if (_.isEqual(this.mLastDetailIds, rowIds)) {
            return;
        }
        this.mLastDetailIds = rowIds;
        if (this.mDetailTimer !== null) {
            clearTimeout(this.mDetailTimer);
        }
        this.mDetailTimer = setTimeout(() => this.setRowState(rowIds), 200);
    }
    columnToggles(props) {
        const { t, columnBlacklist, objects } = props;
        const result = [];
        const blacklist = new Set(columnBlacklist || []);
        const { columns, inlines, disabled } = objects.reduce((prev, attr) => {
            var _a, _b;
            if (attr.isToggleable && !blacklist.has(attr.id)) {
                const visible = (_b = (_a = attr.condition) === null || _a === void 0 ? void 0 : _a.call(attr)) !== null && _b !== void 0 ? _b : true;
                const attributeState = this.getAttributeState(attr, props.attributeState);
                prev[attr.placement === "inline"
                    ? "inlines"
                    : visible
                        ? "columns"
                        : "disabled"].push({
                    icon: attributeState.enabled
                        ? "checkbox-checked"
                        : "checkbox-unchecked",
                    title: attr.name,
                    action: (arg) => this.setAttributeVisible(attr.id, !attributeState.enabled),
                });
            }
            return prev;
        }, { columns: [], inlines: [], disabled: [] });
        if (columns.length > 0) {
            result.push({
                icon: null,
                title: "Toggle Columns",
            }, ...columns);
        }
        if (inlines.length > 0) {
            result.push({
                icon: null,
                title: "Toggle Inlines",
            }, ...inlines);
        }
        /* currently not showing disabled columns at all, that's probably the more
           intuitive solution
        if (disabled.length > 0) {
          result.push({
            icon: null,
            title: t('Toggle Disabled Columns'),
          }, ...disabled);
        }
        */
        return result.map((res, idx) => (Object.assign(Object.assign({}, res), { position: idx })));
    }
    renderTableActions(hasActions) {
        const { t, tableId } = this.props;
        const { columnToggles } = this.state;
        return (React.createElement(MyTable_1.TH, { className: `table-${tableId} header-action` },
            React.createElement("div", null,
                hasActions ? (React.createElement("div", { className: "header-action-label" }, t("Actions"))) : null,
                columnToggles.length > 0 ? (React.createElement(IconBar_1.default, { id: `${tableId}-tableactions`, group: `${tableId}-action-icons-multi`, className: "table-actions", staticElements: columnToggles, collapse: "force", icon: "settings", t: t })) : null)));
    }
    isSortColumn(attributeState) {
        return (attributeState !== undefined &&
            attributeState.sortDirection !== undefined &&
            attributeState.sortDirection !== "none");
    }
    renderRow(rowId, sortAttribute, groupId) {
        const { t, attributeState, data, language, hasActions, objects, tableId } = this.props;
        const { calculatedValues, rowState, rowVisibility, singleRowActions } = this.state;
        if (calculatedValues[rowId] === undefined || data[rowId] === undefined) {
            return null;
        }
        const attributes = this.mVisibleAttributes;
        const extraClasses = this.props.objects
            .map((attr) => {
            var _a;
            return (_a = attr.cssClass) === null || _a === void 0 ? void 0 : _a.call(attr, data[rowId], this.getAttributeState(attr, attributeState).enabled);
        })
            .filter((cls) => (0, util_1.truthy)(cls));
        extraClasses.push((0, util_1.sanitizeCSSId)(rowId));
        const tableRowId = (0, util_1.sanitizeCSSId)(rowId + "_" + (groupId || ""));
        return (React.createElement(TableRow_1.default, { t: t, tableId: tableId, id: tableRowId, rowClasses: extraClasses, key: tableRowId, data: calculatedValues[rowId], group: groupId, rawData: data[rowId], attributes: attributes, inlines: this.mVisibleInlines, sortAttribute: sortAttribute !== undefined ? sortAttribute.id : undefined, actions: singleRowActions, hasActions: hasActions !== undefined ? hasActions : true, language: language, onClick: this.selectRow, selected: (0, storeHelper_1.getSafe)(rowState, [rowId, "selected"], false), highlighted: (0, storeHelper_1.getSafe)(rowState, [rowId, "highlighted"], false), domRef: this.setRowRef, container: this.mScrollRef, visible: rowVisibility[tableRowId] === true, grouped: groupId !== undefined, onSetVisible: this.setRowVisible, onHighlight: this.setRowHighlight }));
    }
    filterSet(filt) {
        return (0, util_1.truthy)(filt) && (!Array.isArray(filt) || filt.length !== 0);
    }
    matchHotKey(action, code, shift, alt, ctrl) {
        return (action.hotKey !== undefined &&
            action.hotKey.code === code &&
            (action.hotKey.shift || shift === false) &&
            (action.hotKey.alt || alt === false) &&
            (action.hotKey.ctrl || ctrl === false));
    }
    refreshSorted(props) {
        const { data, language } = props;
        if (this.state.calculatedValues === undefined) {
            return;
        }
        const filtered = this.filteredRows(props, this.mVisibleAttributes, data);
        const attrState = this.getAttributeStates(props);
        const sortedRows = this.sortedRows(attrState, this.mVisibleAttributes, filtered, language);
        const groupedRows = this.groupedRows(props, sortedRows);
        this.updateState((0, immutability_helper_1.default)(this.mNextState, {
            sortedRows: { $set: sortedRows },
            groupedRows: { $set: groupedRows },
        }));
    }
    getAttributeStates(props) {
        var _a;
        return Object.keys((_a = props.attributeState) !== null && _a !== void 0 ? _a : {}).length > 0 ||
            this.mVisibleAttributes === undefined
            ? props.attributeState
            : this.mVisibleAttributes.reduce((prev, attribute) => {
                if (attribute.isDefaultSort === true) {
                    prev[attribute.id] = { sortDirection: "asc" };
                }
                else if (attribute.isDefaultSort === "desc") {
                    prev[attribute.id] = { sortDirection: "desc" };
                }
                return prev;
            }, {});
    }
    singleRowActions(props) {
        return props.actions.filter((action) => { var _a; return (_a = action.singleRowAction) !== null && _a !== void 0 ? _a : true; });
    }
    multiRowActions(props) {
        return props.actions.filter((action) => { var _a; return (_a = action.multiRowAction) !== null && _a !== void 0 ? _a : true; });
    }
    updateColumnWidth() {
        if (!(0, util_1.truthy)(this.mProxyHeaderRef) || !(0, util_1.truthy)(this.mVisibleHeaderRef)) {
            return;
        }
        this.mProxyHeaderRef.childNodes.forEach((node, index) => {
            this.mVisibleHeaderRef.childNodes.item(index).style.minWidth = this.mVisibleHeaderRef.childNodes.item(index).style.maxWidth = `${node.clientWidth}px`;
        });
        const height = this.mVisibleHeaderRef.clientHeight;
        if (height !== this.mLastHeaderHeight) {
            this.mScrollRef.style["marginTop"] = `${height}px`;
            this.mLastHeaderHeight = height;
        }
    }
    triggerUpdateVisibility() {
        if (!this.mWillSetVisibility) {
            this.mWillSetVisibility = true;
            window.requestAnimationFrame(() => {
                this.mWillSetVisibility = false;
                this.updateState((0, storeHelper_1.setSafe)(this.mNextState, ["rowVisibility"], Object.assign({}, this.mNextVisibility)));
            });
        }
    }
    postScroll() {
        if (Date.now() - this.mLastScroll < SuperTable.SCROLL_DEBOUNCE) {
            this.mDelayedVisibilityTimer = setTimeout(() => this.postScroll(), SuperTable.SCROLL_DEBOUNCE + 100);
        }
        else {
            this.mDelayedVisibilityTimer = undefined;
            this.mNextVisibility = Object.assign({}, this.mDelayedVisibility);
            this.triggerUpdateVisibility();
        }
    }
    updateCalculatedValues(props, forceUpdateId) {
        this.mNextUpdateState = props;
        if (this.mUpdateInProgress) {
            return bluebird_1.default.resolve([]);
        }
        this.mUpdateInProgress = true;
        const { t, data, objects } = props;
        // keep track of which columns had data changed so that we can later figure out if
        // sorting needs to be updated
        const changedColumns = new Set();
        const oldState = this.mLastUpdateState || { data: {} };
        let newValues = this.state.calculatedValues || {};
        // recalculate each attribute in each row
        return bluebird_1.default.map(Object.keys(data), (rowId) => {
            const delta = {};
            return bluebird_1.default.map(objects, (attribute) => {
                // avoid recalculating if the source data hasn't changed. To support
                // isVolatile we still go through each attribute even if the entire row didn't change
                if (!attribute.isVolatile &&
                    attribute.id !== forceUpdateId &&
                    oldState.data[rowId] === data[rowId]) {
                    return bluebird_1.default.resolve();
                }
                if (attribute.calc === undefined) {
                    return bluebird_1.default.resolve();
                }
                return bluebird_1.default.resolve(attribute.calc(data[rowId], t))
                    .then((newValue) => {
                    if (!_.isEqual(newValue, (0, storeHelper_1.getSafe)(newValues, [rowId, attribute.id], undefined))) {
                        changedColumns.add(attribute.id);
                        delta[attribute.id] = newValue;
                    }
                    return null;
                })
                    .catch((err) => {
                    (0, log_1.log)("error", "failed to calculate attribute value", {
                        attribute: attribute.id,
                        row: rowId,
                        error: err.message,
                    });
                });
            }).then(() => {
                if (Object.keys(delta).length > 0) {
                    delta.__id = rowId;
                    if (newValues[rowId] === undefined) {
                        newValues[rowId] = delta;
                    }
                    else {
                        newValues = (0, immutability_helper_1.default)(newValues, { [rowId]: { $merge: delta } });
                    }
                }
            });
        })
            .then(() => bluebird_1.default.map(Object.keys(oldState.data), (rowId) => {
            if (data[rowId] === undefined) {
                delete newValues[rowId];
            }
        }))
            .then(() => 
        // once everything is recalculated, update the cache
        new bluebird_1.default((resolve, reject) => {
            this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                calculatedValues: { $set: newValues },
            }), () => resolve());
        }))
            .then(() => {
            const { rowState } = this.state;
            return this.updateDetailIds(Object.keys(rowState).filter((id) => rowState[id].selected));
        })
            .then(() => {
            this.mUpdateInProgress = false;
            this.mLastUpdateState = props;
            if (this.mNextUpdateState !== this.mLastUpdateState) {
                // another update was queued while this was active
                return this.updateCalculatedValues(this.mNextUpdateState);
            }
            else {
                return bluebird_1.default.resolve(Array.from(changedColumns));
            }
        })
            .catch((err) => {
            this.mUpdateInProgress = false;
            return bluebird_1.default.reject(err);
        });
    }
    updateSelection(props) {
        // unselect rows that are no longer in the data
        const changes = {};
        const selected = [];
        Object.keys(this.state.rowState).forEach((rowId) => {
            if (this.state.rowState[rowId].selected) {
                if (props.data[rowId] === undefined) {
                    changes[rowId] = { selected: { $set: false } };
                }
                else {
                    selected.push(rowId);
                }
            }
        });
        if (!_.isEqual(this.mNextState.rowState, changes)) {
            this.updateState((0, immutability_helper_1.default)(this.mNextState, { rowState: changes }), this.onRowStateChanged);
        }
    }
    standardSort(lhs, rhs) {
        return lhs < rhs ? -1 : lhs === rhs ? 0 : 1;
    }
    filteredRows(props, attributes, data) {
        const { filter } = props;
        const { calculatedValues } = this.state;
        if (filter === undefined) {
            return data;
        }
        const result = {};
        Object.keys(calculatedValues)
            .filter((rowId) => {
            // filter out rows which no longer exist
            if (data[rowId] === undefined) {
                return false;
            }
            // return only elements for which we can't find a non-matching filter
            // (in other words: Keep only those items that match all filters)
            return (attributes.find((attribute) => {
                if (attribute.filter === undefined) {
                    return false;
                }
                const dataId = attribute.filter.dataId || attribute.id;
                // raw can be true, false or a string that specifies an attribute that is
                // different from the one for which the filter is set. The raw value of that
                // attribute is then used for the filter
                const value = attribute.filter.raw !== false
                    ? attribute.filter.raw === true
                        ? dataId === "$"
                            ? data[rowId]
                            : data[rowId][dataId]
                        : (data[rowId][attribute.filter.raw] || {})[dataId]
                    : calculatedValues[rowId][dataId];
                return (filter[attribute.id] !== undefined &&
                    filter[attribute.id] !== null &&
                    !attribute.filter.matches(filter[attribute.id], value, this.context.api.store.getState()));
            }) === undefined);
        })
            .forEach((key) => (result[key] = data[key]));
        return result;
    }
    attributeSortFunction(sortAttribute, calculatedValues, data, locale) {
        let sortFunction;
        if (sortAttribute.sortFunc !== undefined) {
            sortFunction = (lhsId, rhsId) => sortAttribute.sortFunc(calculatedValues[lhsId][sortAttribute.id], calculatedValues[rhsId][sortAttribute.id], locale);
        }
        else if (sortAttribute.sortFuncRaw !== undefined) {
            sortFunction = (lhsId, rhsId) => sortAttribute.sortFuncRaw(data[lhsId], data[rhsId], locale);
        }
        else {
            sortFunction = (lhsId, rhsId) => this.standardSort(calculatedValues[lhsId][sortAttribute.id], calculatedValues[rhsId][sortAttribute.id]);
        }
        return sortFunction;
    }
    sortedRows(attributeState, attributes, data, locale) {
        const { calculatedValues } = this.state;
        const sortAttribute = attributes.find((attribute) => {
            return (attributeState[attribute.id] !== undefined &&
                attributeState[attribute.id].sortDirection !== undefined &&
                attributeState[attribute.id].sortDirection !== "none");
        });
        // return unsorted if no sorting column was selected or if the values
        // haven't been calculated yet
        if (sortAttribute === undefined) {
            return (Object.keys(data)
                // catch cases where input data was broken. Code is usually not
                // equipped to deal with undefined row data
                .filter((rowId) => data[rowId] !== undefined));
        }
        const sortFunction = this.attributeSortFunction(sortAttribute, calculatedValues, data, locale);
        const descending = attributeState[sortAttribute.id].sortDirection === "desc";
        const dataIds = Object.keys(data).filter((key) => calculatedValues[key] !== undefined);
        // comparison function if either value or both is/are undefined
        const undefCompare = (lhsId, rhsId) => calculatedValues[lhsId][sortAttribute.id] !== undefined
            ? 1
            : calculatedValues[rhsId][sortAttribute.id] !== undefined
                ? -1
                : 0;
        return dataIds.sort((lhsId, rhsId) => {
            const res = sortAttribute.sortFuncRaw !== undefined ||
                (calculatedValues[lhsId][sortAttribute.id] !== undefined &&
                    calculatedValues[rhsId][sortAttribute.id] !== undefined)
                ? sortFunction(lhsId, rhsId)
                : undefCompare(lhsId, rhsId);
            return descending ? res * -1 : res;
        });
    }
    groupedRows(props, sortedRows) {
        const { t, attributeState, collapsedGroups, data, groupBy } = props;
        const { calculatedValues } = this.state;
        const groupAttribute = this.mVisibleAttributes.find((attribute) => attribute.id === groupBy);
        if (groupAttribute === undefined) {
            return undefined;
        }
        if (sortedRows === undefined) {
            return [];
        }
        const sortAttribute = this.mVisibleAttributes.find((attribute) => this.isSortColumn(attributeState[attribute.id]));
        const valFunc = (rowId) => {
            var _a;
            return typeof groupAttribute.isGroupable === "function"
                ? groupAttribute.isGroupable(data[rowId], t)
                : ((_a = calculatedValues[rowId]) === null || _a === void 0 ? void 0 : _a[groupAttribute.id]) || "";
        };
        const groupOptions = this.getGroupOptions(this.props, sortedRows, sortAttribute, groupAttribute, valFunc);
        return groupOptions.reduce((prev, group) => {
            const groupItems = sortedRows.filter((row) => {
                if (data[row] === undefined) {
                    return prev;
                }
                const rowVal = valFunc(row);
                if (Array.isArray(rowVal)) {
                    if (rowVal.length === 0) {
                        return group === GroupingRow_1.EMPTY_ID;
                    }
                    return rowVal.indexOf(group) !== -1;
                }
                else {
                    return rowVal === group;
                }
            });
            if (groupItems.length !== 0) {
                const expanded = collapsedGroups.indexOf(group || "") === -1;
                const groupName = groupAttribute.groupName !== undefined
                    ? groupAttribute.groupName(group)
                    : group;
                prev.push({
                    id: group,
                    name: groupName,
                    count: groupItems.length,
                    rows: expanded ? groupItems : null,
                });
            }
            return prev;
        }, []);
    }
    getClasses(element) {
        // because classname is supposed to be a string but on svg elements
        // it may be SVGAnimatedString
        const classAny = element.className;
        return classAny === undefined
            ? ""
            : classAny instanceof SVGAnimatedString
                ? classAny.baseVal
                : element.className;
    }
    selectOnly(rowId, groupId, click) {
        const rowState = {};
        Object.keys(this.state.rowState).forEach((iterId) => {
            rowState[iterId] = { selected: { $set: false } };
        });
        rowState[rowId] =
            this.state.rowState[rowId] === undefined
                ? { $set: { selected: true } }
                : { selected: { $set: true } };
        const now = Date.now();
        if (click &&
            this.state.lastSelected !== undefined &&
            this.state.lastSelected.rowId === rowId &&
            now - this.mLastSelectOnly < 500) {
            this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                detailsOpen: { $set: !this.state.detailsOpen },
                rowState,
            }), this.onRowStateChanged);
        }
        else {
            if (click) {
                this.mLastSelectOnly = now;
            }
            this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                lastSelected: { $set: { rowId, groupId } },
                rowState,
            }), this.onRowStateChanged);
        }
    }
    selectToggle(rowId, groupId) {
        const wasSelected = (0, storeHelper_1.getSafe)(this.state.rowState, [rowId, "selected"], undefined);
        if (!wasSelected) {
            const rowState = wasSelected === undefined
                ? { $set: { selected: true } }
                : { selected: { $set: !wasSelected } };
            this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                lastSelected: { $set: { rowId, groupId } },
                rowState: { [rowId]: rowState },
            }), this.onRowStateChanged);
        }
        else {
            this.updateState((0, immutability_helper_1.default)(this.mNextState, {
                rowState: { [rowId]: { selected: { $set: !wasSelected } } },
            }), this.onRowStateChanged);
        }
    }
    selectAll() {
        const { sortedRows, rowState } = this.state;
        const newState = {};
        // first, disable what's currently selected
        Object.keys(rowState).forEach((key) => {
            if (rowState[key].selected) {
                newState[key] = { selected: { $set: false } };
            }
        });
        // then (re-)enable all visible selections
        (sortedRows || []).forEach((key) => {
            newState[key] =
                newState[key] === undefined
                    ? { $set: { selected: true } }
                    : { selected: { $set: true } };
        });
        this.updateState((0, immutability_helper_1.default)(this.mNextState, { rowState: newState }), this.onRowStateChanged);
    }
    selectTo(rowId, groupId) {
        const { objects } = this.props;
        const { lastSelected, groupedRows, sortedRows } = this.mNextState;
        if (lastSelected === undefined) {
            return;
        }
        let groupBy = this.props.groupBy;
        // if the grouping attribute was provided by an extension it might have become unavailable
        const groupAttribute = groupBy !== undefined
            ? objects.find((attribute) => attribute.id === groupBy)
            : undefined;
        const groupByState = groupAttribute !== undefined
            ? this.getAttributeState(groupAttribute)
            : undefined;
        if (groupBy !== undefined && !(groupByState === null || groupByState === void 0 ? void 0 : groupByState.enabled)) {
            groupBy = undefined;
        }
        let groupSortedRows;
        if (groupBy !== undefined && groupedRows !== undefined) {
            groupSortedRows = groupedRows.reduce((prev, group) => {
                prev.push(...((group.rows || []).map((rId) => ({
                    rowId: rId,
                    groupId: group.id,
                })) || []));
                return prev;
            }, []);
        }
        else {
            groupSortedRows = sortedRows.map((rId) => ({
                rowId: rId,
                groupId: undefined,
            }));
        }
        const selection = new Set([rowId, lastSelected.rowId]);
        let selecting = false;
        groupSortedRows.forEach((iterId) => {
            let isBracket = (iterId.rowId === rowId && (!groupBy || iterId.groupId === groupId)) ||
                (iterId.rowId === lastSelected.rowId &&
                    (!groupBy || iterId.groupId === lastSelected.groupId));
            if (!selecting && isBracket) {
                selecting = true;
                isBracket =
                    rowId === lastSelected.rowId && groupId === lastSelected.groupId;
            }
            if (selecting) {
                selection.add(iterId.rowId);
                if (isBracket) {
                    selecting = false;
                }
            }
        });
        const rowState = {};
        groupSortedRows.forEach((iterId) => {
            rowState[iterId.rowId] =
                this.state.rowState[iterId.rowId] === undefined
                    ? { $set: { selected: selection.has(iterId.rowId) } }
                    : { selected: { $set: selection.has(iterId.rowId) } };
        });
        this.updateState((0, immutability_helper_1.default)(this.mNextState, { rowState }), this.onRowStateChanged);
    }
    visibleAttributes(attributes, attributeStates) {
        const filtered = attributes
            .filter((attribute) => (attribute.condition === undefined || attribute.condition()) &&
            !(this.props.columnBlacklist || []).includes(attribute.id))
            .sort((lhs, rhs) => { var _a, _b; return ((_a = lhs.position) !== null && _a !== void 0 ? _a : 100) - ((_b = rhs.position) !== null && _b !== void 0 ? _b : 100); });
        const enabled = filtered.filter((attribute) => this.getAttributeState(attribute, attributeStates).enabled);
        const attributeSort = (lhs, rhs) => (lhs.position || 100) - (rhs.position || 100);
        return {
            table: enabled
                .filter((attribute) => ["table", "both"].includes(attribute.placement))
                .sort(attributeSort),
            detail: filtered
                .filter((attribute) => ["detail", "both"].includes(attribute.placement))
                .sort(attributeSort),
            inline: enabled
                .filter((attribute) => attribute.placement === "inline")
                .sort(attributeSort),
        };
    }
    getAttributeState(attribute, attributeStatesIn) {
        const attributeStates = attributeStatesIn || this.getAttributeStates(this.props) || {};
        const defaultVisible = attribute.isDefaultVisible !== undefined
            ? attribute.isDefaultVisible
            : true;
        return Object.assign({ enabled: defaultVisible, sortDirection: "none" }, attributeStates[attribute.id]);
    }
    useMultiSelect() {
        // default to true
        return this.props.multiSelect !== false;
    }
    updateState(newState, callback) {
        if (_.isEqual(newState, this.state)) {
            if (callback !== undefined) {
                callback();
            }
            return;
        }
        this.mNextState = newState;
        if (this.mMounted) {
            this.setState(newState, callback);
        }
    }
}
SuperTable.SCROLL_DURATION = 200;
// delay certain actions (like hiding offscreen items) until after scrolling ends.
// this improves scroll smoothness at the expense of memory
SuperTable.SCROLL_DEBOUNCE = 5000;
const emptyObj = {};
const emptyList = [];
function mapStateToProps(state, ownProps) {
    var _a, _b, _c;
    let groupBy = (_a = state.settings.tables[ownProps.tableId]) === null || _a === void 0 ? void 0 : _a.groupBy;
    if (((_b = ownProps.columnBlacklist) !== null && _b !== void 0 ? _b : []).includes(groupBy)) {
        groupBy = undefined;
    }
    return {
        language: state.settings.interface.language,
        attributeState: (0, storeHelper_1.getSafe)(state, ["settings", "tables", ownProps.tableId, "attributes"], emptyObj),
        filter: (_c = state.settings.tables[ownProps.tableId]) === null || _c === void 0 ? void 0 : _c.filter,
        groupBy,
        collapsedGroups: (0, storeHelper_1.getSafe)(state, ["settings", "tables", ownProps.tableId, "collapsedGroups"], emptyList),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetAttributeVisible: (tableId, attributeId, visible) => dispatch((0, tables_1.setAttributeVisible)(tableId, attributeId, visible)),
        onSetAttributeSort: (tableId, attributeId, dir) => dispatch((0, tables_1.setAttributeSort)(tableId, attributeId, dir)),
        onSetAttributeFilter: (tableId, attributeId, filter) => dispatch((0, tables_1.setAttributeFilter)(tableId, attributeId, filter)),
        onSetGroupingAttribute: (tableId, attributeId) => dispatch((0, tables_1.setGroupingAttribute)(tableId, attributeId)),
        onCollapseGroup: (tableId, groupId, collapse) => dispatch((0, tables_1.collapseGroup)(tableId, groupId, collapse)),
        onSetCollapsedGroups: (tableId, collapsed) => dispatch((0, tables_1.setCollapsedGroups)(tableId, collapsed)),
    };
}
function registerTableAttribute(instanceGroup, group, attribute) {
    if (instanceGroup === group) {
        return attribute;
    }
    else {
        return undefined;
    }
}
function getTableState(state, tableId) {
    return state.settings.tables[tableId];
}
function makeGetSelection(tableId) {
    const getTableStateInst = (state) => getTableState(state, tableId);
    return (0, reselect_1.createSelector)(getTableStateInst, (tableState) => {
        return Object.keys(tableState.rows).filter((rowId) => tableState.rows[rowId].selected);
    });
}
exports.default = (0, ComponentEx_1.translate)(["common"])((0, ComponentEx_1.extend)(registerTableAttribute, "tableId")((0, ComponentEx_1.connect)(mapStateToProps, mapDispatchToProps)(SuperTable)));
