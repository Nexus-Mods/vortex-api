"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tables_1 = require("../actions/tables");
const ComponentEx_1 = require("../util/ComponentEx");
const Debouncer_1 = require("../util/Debouncer");
const log_1 = require("../util/log");
const smoothScroll_1 = require("../util/smoothScroll");
const storeHelper_1 = require("../util/storeHelper");
const util_1 = require("../util/util");
const IconBar_1 = require("./IconBar");
const HeaderCell_1 = require("./table/HeaderCell");
const MyTable_1 = require("./table/MyTable");
const TableDetail_1 = require("./table/TableDetail");
const TableRow_1 = require("./table/TableRow");
const ToolbarIcon_1 = require("./ToolbarIcon");
const Promise = require("bluebird");
const update = require("immutability-helper");
const _ = require("lodash");
const React = require("react");
const ReactDOM = require("react-dom");
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
        this.mWillSetVisibility = false;
        this.renderBody = (visibleAttributes) => {
            const { calculatedValues, sortedRows } = this.state;
            if ((calculatedValues === undefined) || (sortedRows === undefined)) {
                return React.createElement(MyTable_1.TBody, null);
            }
            // TODO: forcing the first 40 items to be visible. Would be nicer to have a more dynamic
            //   estimate of the number of items that will be visible, but there is no reliable way
            //   to know the size without rendering
            return (React.createElement(MyTable_1.TBody, { domRef: this.setBodyRef }, sortedRows.map((row, idx) => this.renderRow(row, visibleAttributes))));
        };
        this.scrollTo = (id, mayRetry) => {
            try {
                const node = ReactDOM.findDOMNode(this.mRowRefs[id]);
                if (node !== null) {
                    this.scrollToItem(node, false);
                }
            }
            catch (err) {
                // nop. I think this can happen if the event is emitted before the window has
                // been activated
                if (mayRetry !== false) {
                    setTimeout(() => {
                        this.scrollTo(id, false);
                    }, 2000);
                }
                else {
                    log_1.log('warn', 'failed to scroll to item', { id, tableId: this.props.tableId, error: err.message });
                }
            }
        };
        this.toggleDetails = () => {
            const { detailsOpen } = this.state;
            this.updateState(update(this.mNextState, { detailsOpen: { $set: !detailsOpen } }));
        };
        this.renderDetails = (rowIds) => {
            const { detailsOpen, rowIdsDelayed } = this.state;
            if ((rowIdsDelayed === undefined)
                || (rowIdsDelayed.length === 0)
                || (this.state.calculatedValues === undefined)) {
                return null;
            }
            const { t, data, detailsTitle, language, objects } = this.props;
            const detailAttributes = objects.filter((attribute) => attribute.placement !== 'table');
            return (React.createElement(TableDetail_1.default, { t: t, rowIds: rowIdsDelayed, rowData: this.state.calculatedValues, rawData: data, attributes: detailAttributes, language: language, show: detailsOpen, title: detailsTitle, onToggleShow: this.toggleDetails }));
        };
        this.renderHeaderField = (attribute) => {
            const { t, advancedMode, filter, tableId } = this.props;
            const attributeState = this.getAttributeState(attribute);
            const filt = (attribute.filter !== undefined) && (filter !== undefined)
                ? (filter[attribute.id] || null)
                : undefined;
            if (attributeState.enabled) {
                const classes = [
                    `header-${attribute.id}`,
                ];
                if (util_1.truthy(filt)
                    && ((attribute.filter.isEmpty === undefined) || !attribute.filter.isEmpty(filt))) {
                    classes.push('table-filter-column');
                }
                if (this.isSortColumn(attributeState)) {
                    classes.push('table-sort-column');
                }
                return (React.createElement(HeaderCell_1.default, { className: classes.join(' '), key: attribute.id, attribute: attribute, state: attributeState, doFilter: advancedMode, onSetSortDirection: this.setSortDirection, onSetFilter: this.setFilter, advancedMode: advancedMode, t: t }, attribute.filter !== undefined ? (React.createElement(attribute.filter.component, { filter: filt, attributeId: attribute.id, t: t, onSetFilter: this.setFilter })) : null));
            }
            else {
                return null;
            }
        };
        this.handleKeyDown = (evt) => {
            const { multiSelect } = this.props;
            const { lastSelected } = this.state;
            if (evt.target !== this.mScrollRef) {
                return;
            }
            if (this.useMultiSelect() && (evt.keyCode === 65) && evt.ctrlKey) {
                this.selectAll();
                return;
            }
            // TODO: this calculation of the number of lines visible in the table is only
            // accurate under the assumption all lines have the same height
            let visibleLineCount = 0;
            if (this.mRowRefs[lastSelected] !== undefined) {
                const selectedNode = ReactDOM.findDOMNode(this.mRowRefs[lastSelected]);
                visibleLineCount = this.mScrollRef.clientHeight / selectedNode.clientHeight;
                // account for the header. quite inaccurate.
                visibleLineCount -= 2;
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
                const newItem = this.selectRelative(offset);
                if (this.mRowRefs[newItem] !== undefined) {
                    this.scrollToItem(ReactDOM.findDOMNode(this.mRowRefs[newItem]), Math.abs(offset) > 1);
                }
            }
            else {
                const action = this.props.actions.find(iter => this.matchHotKey(iter, evt.keyCode, evt.shiftKey, evt.altKey, evt.ctrlKey));
                if (action !== undefined) {
                    evt.preventDefault();
                    const { rowState } = this.state;
                    action.action(Object.keys(rowState).filter(id => rowState[id].selected));
                }
            }
        };
        this.selectRelative = (delta) => {
            const { lastSelected, sortedRows } = this.state;
            if ((lastSelected === undefined) || (sortedRows === undefined)) {
                return;
            }
            let idx = sortedRows.findIndex(item => item.id === lastSelected);
            idx = Math.min(Math.max(idx + delta, 0), sortedRows.length - 1);
            const newSelection = sortedRows[idx].id;
            this.selectOnly(newSelection, false);
            return newSelection;
        };
        this.setSplitRef = ref => {
            this.mSplitContainer = ref;
        };
        this.setHeadRef = ref => {
            this.mHeadRef = ref;
        };
        this.setBodyRef = ref => {
            this.mBodyRef = ref;
        };
        this.setRowRef = (ref) => {
            if (ref !== null) {
                this.mRowRefs[ref.props.id] = ref;
            }
        };
        this.setRowVisible = (rowId, visible) => {
            this.mNextVisibility[rowId] = visible;
            this.triggerUpdateVisibility();
        };
        this.setRowHighlight = (rowId, highlighted) => {
            this.updateState(storeHelper_1.setSafe(this.mNextState, ['rowState', rowId, 'highlighted'], highlighted));
        };
        this.scrollToItem = (item, smooth) => {
            const topLimit = this.mScrollRef.scrollTop + SuperTable.SCROLL_OFFSET;
            const bottomLimit = this.mScrollRef.scrollTop + this.mScrollRef.clientHeight - SuperTable.SCROLL_OFFSET;
            const itemBottom = item.offsetTop + item.offsetHeight;
            let targetPos;
            if (item.offsetTop < topLimit) {
                targetPos = Math.max(item.offsetTop - SuperTable.SCROLL_OFFSET, 0);
            }
            else if (itemBottom > bottomLimit) {
                targetPos = itemBottom - this.mScrollRef.clientHeight + SuperTable.SCROLL_OFFSET;
            }
            if ((targetPos !== undefined) && (targetPos !== this.mScrollRef.scrollTop)) {
                if (smooth) {
                    smoothScroll_1.default(this.mScrollRef, targetPos, SuperTable.SCROLL_DURATION);
                }
                else {
                    this.mScrollRef.scrollTop = targetPos;
                }
            }
        };
        this.translateHeader = (event) => {
            window.requestAnimationFrame(() => {
                if ((this.mHeadRef !== undefined) && (this.mHeadRef !== null)) {
                    const transform = `translate(0, ${event.target.scrollTop}px)`;
                    this.mHeadRef.style.transform = transform;
                }
            });
        };
        this.mainPaneRef = (ref) => {
            if (ref === null) {
                return;
            }
            // not sure if this is necessary, I guess not
            ref.removeEventListener('scroll', this.translateHeader);
            // translate the header so that it remains in view during scrolling
            ref.addEventListener('scroll', this.translateHeader);
            this.mScrollRef = ref;
        };
        this.changeSplitPos = value => {
            this.mSplitDebouncer.schedule(undefined, value);
            const totalWidth = this.mSplitContainer.splitPane.offsetWidth;
            const maxWidth = Math.min(totalWidth * 0.5, totalWidth - 700);
            if (maxWidth !== this.state.splitMax) {
                this.updateState(update(this.mNextState, {
                    splitMax: { $set: maxWidth },
                }));
            }
        };
        this.setAttributeVisible = (attributeId, visible) => {
            const { onSetAttributeVisible, tableId } = this.props;
            onSetAttributeVisible(tableId, attributeId, visible);
        };
        this.selectRow = (evt) => {
            let iter = evt.target;
            while (((iter !== null) && (iter !== undefined))
                && (iter.tagName !== 'BUTTON')
                && (this.getClasses(iter).split(' ').indexOf('xtd') === -1)) {
                iter = iter.parentNode;
            }
            if ((iter !== null) && (iter.tagName === 'BUTTON')) {
                // don't handle if the click was on a button
                return;
            }
            const row = evt.currentTarget;
            if (this.useMultiSelect() && evt.ctrlKey) {
                // ctrl-click -> toggle the selected row, leave remaining selection intact
                this.selectToggle(row.id);
            }
            else if (this.useMultiSelect() && evt.shiftKey) {
                // shift-click -> select everything between this row and the last one clicked,
                //                deselect everything else
                this.selectTo(row.id);
            }
            else {
                // regular click -> select only the clicked row, everything else get deselected
                this.selectOnly(row.id, true);
            }
        };
        this.onRowStateChanged = () => {
            const { rowState } = this.state;
            this.updateDetailIds(Object.keys(rowState).filter(id => rowState[id].selected));
        };
        this.deselectAll = () => {
            const { rowState } = this.state;
            const newState = {};
            Object.keys(rowState).forEach(key => {
                if (rowState[key].selected) {
                    newState[key] = { selected: { $set: false } };
                }
            });
            this.updateState(update(this.mNextState, { rowState: newState }), this.onRowStateChanged);
        };
        this.setSortDirection = (id, direction) => {
            const { objects, onSetAttributeSort, tableId } = this.props;
            // reset all other columns because we can't really support multisort with this ui
            for (const testId of objects.map(attribute => attribute.id)) {
                const attrState = this.getAttributeState(objects.find((attribute) => attribute.id === testId));
                if ((id !== testId) && (attrState.sortDirection !== 'none')) {
                    onSetAttributeSort(tableId, testId, 'none');
                }
            }
            onSetAttributeSort(tableId, id, direction);
        };
        this.setFilter = (attributeId, filter) => {
            const { onSetAttributeFilter, tableId } = this.props;
            onSetAttributeFilter(tableId, attributeId, filter);
        };
        this.mNextState = this.state = {
            lastSelected: undefined,
            calculatedValues: undefined,
            splitMax: 9999,
            rowState: {},
            sortedRows: undefined,
            detailsOpen: false,
            rowIdsDelayed: [],
            rowVisibility: {},
            singleRowActions: this.singleRowActions(props),
            multiRowActions: this.multiRowActions(props),
        };
        this.mVisibleAttributes = this.visibleAttributes(props.objects, props.attributeState);
        this.updateCalculatedValues(props)
            .then(didRun => {
            if (didRun) {
                this.refreshSorted(this.mNextUpdateState);
                this.updateSelection(this.mNextUpdateState);
            }
            return null;
        });
        this.mSplitDebouncer = new Debouncer_1.default((...args) => {
            props.onSetSplitPos(props.tableId, args[0]);
            return null;
        }, 100);
    }
    componentWillMount() {
        this.updateSelection(this.props);
        this.context.api.events.on(this.props.tableId + '-scroll-to', this.scrollTo);
        this.props.objects.forEach(object => {
            if (object.externalData !== undefined) {
                object.externalData(() => {
                    this.invalidate(object.id);
                });
            }
        });
    }
    componentWillUnmount() {
        this.context.api.events.removeAllListeners(this.props.tableId + '-scroll-to');
    }
    componentWillReceiveProps(newProps) {
        if ((newProps.attributeState !== this.props.attributeState)
            || (newProps.objects !== this.props.objects)) {
            const { attributeState, objects } = newProps;
            this.mVisibleAttributes = this.visibleAttributes(objects, attributeState);
        }
        if (newProps.actions !== this.props.actions) {
            this.updateState(update(this.mNextState, {
                singleRowActions: this.singleRowActions(newProps),
                multiRowActions: this.multiRowActions(newProps),
            }));
        }
        if (newProps.data !== this.props.data) {
            Object.keys(this.mRowRefs).forEach(key => {
                if (newProps.data[key] === undefined) {
                    delete this.mRowRefs[key];
                }
                if (this.state.lastSelected === key) {
                    this.updateState(update(this.mNextState, { lastSelected: { $set: undefined } }));
                }
            });
        }
        if ((newProps.data !== this.props.data)
            || (newProps.dataId !== this.props.dataId)
            || (newProps.objects !== this.props.objects)) {
            this.updateCalculatedValues(newProps)
                .then(changedColumns => {
                this.refreshSorted(this.mNextUpdateState);
                this.updateSelection(this.mNextUpdateState);
                return null;
            });
        }
        else if ((newProps.attributeState !== this.props.attributeState)
            || (newProps.language !== this.props.language)
            || (newProps.filter !== this.props.filter)) {
            this.refreshSorted(newProps);
        }
    }
    render() {
        const { t, actions, objects, showHeader, showDetails, splitPos, tableId } = this.props;
        const { detailsOpen, rowState, singleRowActions, splitMax } = this.state;
        let hasActions = false;
        if (actions !== undefined) {
            hasActions = singleRowActions.length > 0;
        }
        const actionHeader = this.renderTableActions(hasActions);
        const openClass = detailsOpen ? 'open' : 'closed';
        const rowIds = Object.keys(rowState).filter(rowId => rowState[rowId].selected);
        const scrollOffset = this.mScrollRef !== undefined ? this.mScrollRef.scrollTop : 0;
        const headerStyle = { transform: `translate(0, ${scrollOffset}px)` };
        return (React.createElement("div", { id: `table-${tableId}`, className: 'table-container' },
            React.createElement("div", { className: 'table-container-inner' },
                React.createElement("div", { className: 'table-main-pane', ref: this.mainPaneRef, tabIndex: 0, onKeyDown: this.handleKeyDown },
                    React.createElement(MyTable_1.Table, { hover: true },
                        this.renderBody(this.mVisibleAttributes),
                        showHeader === false ? null : React.createElement(MyTable_1.THead, { className: 'table-header', domRef: this.setHeadRef, style: headerStyle },
                            React.createElement(MyTable_1.TR, null,
                                this.mVisibleAttributes.map(this.renderHeaderField),
                                actionHeader))),
                    this.props.children),
                this.renderFooter()),
            showDetails === false ? null : (React.createElement("div", { className: `table-details-pane ${openClass}` }, this.renderDetails(rowIds)))));
    }
    renderFooter() {
        const { t, actions } = this.props;
        const { multiRowActions, rowState } = this.state;
        const selected = Object.keys(rowState).filter(key => rowState[key].selected);
        if ((multiRowActions.length === 0) || (selected.length < 2)) {
            return null;
        }
        // the footer itself (.table-footer) is absolutely positioned so it fills out a surrounding
        // panel. To ensure the table body isn't overlapped by the footer, insert a placeholder
        // that needs to be the same size as the footer itself (see css)
        return (React.createElement("div", { className: 'table-footer-placeholder' },
            React.createElement("div", { className: 'table-footer' },
                React.createElement(IconBar_1.default, { className: 'menubar' }, multiRowActions.map((action, idx) => React.createElement(ToolbarIcon_1.default, { key: idx, icon: action.icon, text: action.title, instanceId: selected, onClick: action.action }))),
                React.createElement("div", { className: 'menubar' },
                    React.createElement("p", null, t('{{count}} item selected', { count: selected.length })),
                    React.createElement(ToolbarIcon_1.default, { key: 'btn-deselect', icon: 'deselect', text: t('Deselect All'), onClick: this.deselectAll })))));
    }
    invalidate(columnId) {
        this.updateCalculatedValues(this.props, columnId);
    }
    setRowState(rowIds) {
        const { data } = this.props;
        const filteredRowIds = rowIds.filter(id => (this.state.calculatedValues[id] !== undefined) && (data[id] !== undefined));
        this.updateState(update(this.mNextState, { rowIdsDelayed: { $set: filteredRowIds } }));
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
    renderTableActions(hasActions) {
        const { t, actions, objects, tableId } = this.props;
        const { rowState } = this.state;
        let pos = 1;
        const getPos = () => {
            return pos++;
        };
        const selected = Object.keys(rowState).filter(key => rowState[key].selected);
        const elements = [{
                icon: null,
                title: t('Toggle Columns'),
                position: getPos(),
            }].concat(objects
            .filter(attr => attr.isToggleable)
            .map(attr => {
            const attributeState = this.getAttributeState(attr);
            return {
                icon: attributeState.enabled ? 'checkbox-checked' : 'checkbox-unchecked',
                title: attr.name,
                position: getPos(),
                action: (arg) => this.setAttributeVisible(attr.id, !attributeState.enabled),
            };
        }));
        return (React.createElement(MyTable_1.TH, { className: `table-${tableId} header-action` },
            React.createElement("div", null,
                hasActions ? React.createElement("div", { className: 'header-action-label' }, t('Actions')) : null,
                elements.length > 0 ? (React.createElement(IconBar_1.default, { id: `${tableId}-tableactions`, group: `${tableId}-action-icons-multi`, className: 'table-actions', staticElements: elements, instanceId: selected, collapse: 'force', icon: 'settings' })) : null)));
    }
    isSortColumn(attributeState) {
        return (attributeState !== undefined)
            && (attributeState.sortDirection !== undefined)
            && (attributeState.sortDirection !== 'none');
    }
    renderRow(data, visibleAttributes) {
        const { t, actions, attributeState, language, tableId } = this.props;
        const { calculatedValues, rowState, singleRowActions } = this.state;
        if (calculatedValues[data.id] === undefined) {
            return null;
        }
        const attributes = this.mVisibleAttributes;
        const sortAttribute = attributes.find(attribute => this.isSortColumn(attributeState[attribute.id]));
        return (React.createElement(TableRow_1.default, { t: t, tableId: tableId, id: data.id, key: data.id, data: calculatedValues[data.id], rawData: data.data, attributes: visibleAttributes, sortAttribute: sortAttribute !== undefined ? sortAttribute.id : undefined, actions: singleRowActions, language: language, onClick: this.selectRow, selected: storeHelper_1.getSafe(rowState, [data.id, 'selected'], false), highlighted: storeHelper_1.getSafe(rowState, [data.id, 'highlighted'], false), domRef: this.setRowRef, container: this.mScrollRef, visible: this.state.rowVisibility[data.id] === true, onSetVisible: this.setRowVisible, onHighlight: this.setRowHighlight }));
    }
    matchHotKey(action, code, shift, alt, ctrl) {
        return (action.hotKey !== undefined)
            && (action.hotKey.code === code)
            && (action.hotKey.shift || false === shift)
            && (action.hotKey.alt || false === alt)
            && (action.hotKey.ctrl || false === ctrl);
    }
    refreshSorted(props) {
        const { data, language } = props;
        if (this.state.calculatedValues === undefined) {
            return;
        }
        const filtered = this.filteredRows(props, this.mVisibleAttributes, data);
        const attrState = this.getAttributeStates(props);
        this.updateState(update(this.mNextState, {
            sortedRows: {
                $set: this.sortedRows(attrState, this.mVisibleAttributes, filtered, language),
            },
        }));
    }
    getAttributeStates(props) {
        return (util_1.truthy(props.attributeState) || (this.mVisibleAttributes === undefined))
            ? props.attributeState
            : this.mVisibleAttributes.reduce((prev, attribute) => {
                if (attribute.isDefaultSort === true) {
                    prev[attribute.id] = { sortDirection: 'asc' };
                }
                return prev;
            }, {});
    }
    singleRowActions(props) {
        return props.actions.filter((action) => (action.singleRowAction === undefined) || action.singleRowAction);
    }
    multiRowActions(props) {
        return props.actions.filter((action) => (action.multiRowAction === undefined) || action.multiRowAction);
    }
    triggerUpdateVisibility() {
        if (!this.mWillSetVisibility) {
            this.mWillSetVisibility = true;
            window.requestAnimationFrame(() => {
                this.mWillSetVisibility = false;
                this.updateState(storeHelper_1.setSafe(this.mNextState, ['rowVisibility'], this.mNextVisibility));
            });
        }
    }
    updateCalculatedValues(props, forceUpdateId) {
        this.mNextUpdateState = props;
        if (this.mUpdateInProgress) {
            return Promise.resolve([]);
        }
        this.mUpdateInProgress = true;
        const { t, data, objects } = props;
        // keep track of which columns had data changed so that we can later figure out if
        // sorting needs to be updated
        const changedColumns = new Set();
        const oldState = this.mLastUpdateState || { data: {} };
        let newValues = this.state.calculatedValues || {};
        // recalculate each attribute in each row
        return Promise.map(Object.keys(data), (rowId) => {
            const delta = {};
            return Promise.map(objects, (attribute) => {
                // avoid recalculating if the source data hasn't changed
                if (!attribute.isVolatile
                    && (attribute.id !== forceUpdateId)
                    && (oldState.data[rowId] === data[rowId])) {
                    return Promise.resolve();
                }
                return Promise.resolve(attribute.calc(data[rowId], t))
                    .then(newValue => {
                    if (!_.isEqual(newValue, storeHelper_1.getSafe(newValues, [rowId, attribute.id], undefined))) {
                        changedColumns.add(attribute.id);
                        delta[attribute.id] = newValue;
                    }
                    return null;
                });
            })
                .then(() => {
                if (Object.keys(delta).length > 0) {
                    delta.__id = rowId;
                    if (newValues[rowId] === undefined) {
                        newValues[rowId] = delta;
                    }
                    else {
                        newValues = update(newValues, { [rowId]: { $merge: delta } });
                    }
                }
            });
        })
            .then(() => Promise.map(Object.keys(oldState.data), rowId => {
            if (data[rowId] === undefined) {
                delete newValues[rowId];
            }
        }))
            .then(() => 
        // once everything is recalculated, update the cache
        new Promise((resolve, reject) => {
            this.updateState(update(this.mNextState, {
                calculatedValues: { $set: newValues },
            }), () => resolve());
        }))
            .then(() => {
            const { rowState } = this.state;
            return this.updateDetailIds(Object.keys(rowState).filter(id => rowState[id].selected));
        })
            .then(() => {
            this.mUpdateInProgress = false;
            this.mLastUpdateState = props;
            if (this.mNextUpdateState !== this.mLastUpdateState) {
                // another update was queued while this was active
                return this.updateCalculatedValues(this.mNextUpdateState);
            }
            else {
                return Promise.resolve(Array.from(changedColumns));
            }
        })
            .catch(err => {
            this.mUpdateInProgress = false;
            return Promise.reject(err);
        });
    }
    updateSelection(props) {
        // unselect rows that are no longer in the data
        const changes = {};
        const selected = [];
        Object.keys(this.state.rowState).forEach(rowId => {
            if (this.state.rowState[rowId].selected) {
                if (props.data[rowId] === undefined) {
                    changes[rowId] = { selected: { $set: false } };
                }
                else {
                    selected.push(rowId);
                }
            }
        });
        this.updateState(update(this.mNextState, { rowState: changes }), this.onRowStateChanged);
    }
    standardSort(lhs, rhs) {
        return lhs < rhs ? -1
            : lhs === rhs ? 0
                : 1;
    }
    filteredRows(props, attributes, data) {
        const { advancedMode, filter } = props;
        const { calculatedValues } = this.state;
        if (filter === undefined) {
            return data;
        }
        const result = {};
        Object.keys(calculatedValues).filter(rowId => {
            // filter out rows which no longer exist
            if (data[rowId] === undefined) {
                return false;
            }
            // return only elements for which we can't find a non-matching filter
            // (in other words: Keep only those items that match all filters)
            return !advancedMode
                || (attributes.find(attribute => {
                    if (attribute.filter === undefined) {
                        return false;
                    }
                    const dataId = attribute.filter.dataId || attribute.id;
                    // raw can be true, false or a string that specifies an attribute that is
                    // different from the one for which the filter is set. The raw value of that
                    // attribute is then used for the filter
                    const value = attribute.filter.raw !== false
                        ? attribute.filter.raw === true
                            ? data[rowId][dataId]
                            : data[rowId][attribute.filter.raw][dataId]
                        : calculatedValues[rowId][dataId];
                    return util_1.truthy(filter[attribute.id])
                        && !attribute.filter.matches(filter[attribute.id], value, this.context.api.store.getState());
                }) === undefined);
        })
            .forEach(key => result[key] = data[key]);
        return result;
    }
    sortedRows(attributeState, attributes, data, locale) {
        const { calculatedValues } = this.state;
        const sortAttribute = attributes.find(attribute => {
            return (attributeState[attribute.id] !== undefined)
                && (attributeState[attribute.id].sortDirection !== undefined)
                && (attributeState[attribute.id].sortDirection !== 'none');
        });
        const idsToRows = (rowId) => ({
            id: rowId,
            data: data[rowId],
        });
        // return unsorted if no sorting column was selected or if the values
        // haven't been calculated yet
        if (sortAttribute === undefined) {
            return Object.keys(data)
                .map(idsToRows)
                .filter(row => row.data !== undefined);
        }
        let sortFunction = sortAttribute.sortFunc;
        if (sortFunction === undefined) {
            sortFunction = this.standardSort;
        }
        const descending = attributeState[sortAttribute.id].sortDirection === 'desc';
        const dataIds = Object.keys(data).filter(key => calculatedValues[key] !== undefined);
        return dataIds.sort((lhsId, rhsId) => {
            let res = 0;
            if (calculatedValues[lhsId][sortAttribute.id] === undefined) {
                res = calculatedValues[rhsId][sortAttribute.id] === undefined ? 0 : -1;
            }
            else if (calculatedValues[rhsId][sortAttribute.id] === undefined) {
                res = 1;
            }
            else {
                res = sortFunction(calculatedValues[lhsId][sortAttribute.id], calculatedValues[rhsId][sortAttribute.id], locale);
            }
            if (descending) {
                res *= -1;
            }
            return res;
        }).map(idsToRows);
    }
    getClasses(element) {
        // because classname is supposed to be a string but on svg elements
        // it may be SVGAnimatedString
        const classAny = element.className;
        return classAny === undefined
            ? ''
            : classAny instanceof SVGAnimatedString
                ? classAny.baseVal
                : element.className;
    }
    selectOnly(rowId, click) {
        const { tableId } = this.props;
        const rowState = {};
        Object.keys(this.state.rowState)
            .forEach(iterId => {
            rowState[iterId] = { selected: { $set: false } };
        });
        rowState[rowId] = (this.state.rowState[rowId] === undefined)
            ? { $set: { selected: true } }
            : { selected: { $set: true } };
        const now = new Date().getTime();
        if (click && (this.state.lastSelected === rowId) && ((now - this.mLastSelectOnly) < 500)) {
            this.updateState(update(this.mNextState, {
                detailsOpen: { $set: !this.state.detailsOpen },
                rowState,
            }), this.onRowStateChanged);
        }
        else {
            if (click) {
                this.mLastSelectOnly = now;
            }
            this.updateState(update(this.mNextState, {
                lastSelected: { $set: rowId },
                rowState,
            }), this.onRowStateChanged);
        }
    }
    selectToggle(rowId) {
        const { tableId } = this.props;
        const wasSelected = storeHelper_1.getSafe(this.state.rowState, [rowId, 'selected'], undefined);
        if (!wasSelected) {
            this.updateState(update(this.mNextState, {
                lastSelected: { $set: rowId },
                rowState: { [rowId]: wasSelected === undefined
                        ? { $set: { selected: true } }
                        : { selected: { $set: !wasSelected } },
                }
            }), this.onRowStateChanged);
        }
        else {
            this.updateState(update(this.mNextState, {
                rowState: { [rowId]: { selected: { $set: !wasSelected } } },
            }), this.onRowStateChanged);
        }
    }
    selectAll() {
        const { sortedRows, rowState } = this.state;
        const newState = {};
        // first, disable what's currently selected
        Object.keys(rowState).forEach(key => {
            if (rowState[key].selected) {
                newState[key] = { selected: { $set: false } };
            }
        });
        // then (re-)enable all visible selections
        sortedRows.map(row => row.id).forEach(key => {
            newState[key] = (newState[key] === undefined)
                ? { $set: { selected: true } }
                : { selected: { $set: true } };
        });
        this.updateState(update(this.mNextState, { rowState: newState }), this.onRowStateChanged);
    }
    selectTo(rowId) {
        const { attributeState, data, language, objects, tableId } = this.props;
        const { sortedRows } = this.state;
        const visibleAttributes = this.visibleAttributes(objects, attributeState);
        const selection = new Set([rowId, this.state.lastSelected]);
        let selecting = false;
        sortedRows.forEach((iterRow) => {
            let isBracket = (iterRow.id === rowId) || (iterRow.id === this.state.lastSelected);
            if (!selecting && isBracket) {
                selecting = true;
                isBracket = false;
            }
            if (selecting) {
                selection.add(iterRow.id);
                if (isBracket) {
                    selecting = false;
                }
            }
        });
        const rowState = {};
        sortedRows.map(row => row.id).forEach(iterId => {
            rowState[iterId] = (this.state.rowState[iterId] === undefined)
                ? { $set: { selected: selection.has(iterId) } }
                : { selected: { $set: selection.has(iterId) } };
        });
        this.updateState(update(this.mNextState, { rowState }), this.onRowStateChanged);
    }
    visibleAttributes(attributes, attributeStates) {
        return attributes.filter((attribute) => {
            const state = this.getAttributeState(attribute, attributeStates);
            if (attribute.placement === 'detail') {
                return false;
            }
            else {
                return state.enabled;
            }
        });
    }
    getAttributeState(attribute, attributeStatesIn) {
        const attributeStates = attributeStatesIn || this.getAttributeStates(this.props) || {};
        const defaultVisible = attribute.isDefaultVisible !== undefined ? attribute.isDefaultVisible : true;
        return Object.assign({ enabled: defaultVisible, sortDirection: 'none' }, attributeStates[attribute.id]);
    }
    useMultiSelect() {
        // default to true
        return this.props.multiSelect !== false;
    }
    updateState(newState, callback) {
        this.mNextState = newState;
        this.setState(newState, callback);
    }
}
// minimum distance of the focused item to the table header when navigating with the
// keyboard
SuperTable.SCROLL_OFFSET = 100;
SuperTable.SCROLL_DURATION = 200;
const emptyObj = {};
function mapStateToProps(state, ownProps) {
    return {
        language: state.settings.interface.language,
        attributeState: storeHelper_1.getSafe(state, ['settings', 'tables', ownProps.tableId, 'attributes'], emptyObj),
        splitPos: storeHelper_1.getSafe(state, ['settings', 'tables', ownProps.tableId, 'splitPos'], 200),
        filter: storeHelper_1.getSafe(state, ['settings', 'tables', ownProps.tableId, 'filter'], undefined),
        advancedMode: state.settings.interface.advanced,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetAttributeVisible: (tableId, attributeId, visible) => dispatch(tables_1.setAttributeVisible(tableId, attributeId, visible)),
        onSetAttributeSort: (tableId, attributeId, dir) => dispatch(tables_1.setAttributeSort(tableId, attributeId, dir)),
        onSetSplitPos: (tableId, pos) => dispatch(tables_1.setSplitPos(tableId, pos)),
        onSetAttributeFilter: (tableId, attributeId, filter) => dispatch(tables_1.setAttributeFilter(tableId, attributeId, filter)),
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
    return reselect_1.createSelector(getTableStateInst, (tableState) => {
        return Object.keys(tableState.rows).filter((rowId) => (tableState.rows[rowId].selected));
    });
}
exports.makeGetSelection = makeGetSelection;
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.extend(registerTableAttribute, 'tableId')(ComponentEx_1.connect(mapStateToProps, mapDispatchToProps)(SuperTable)));
