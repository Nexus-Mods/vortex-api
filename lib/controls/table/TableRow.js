"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionContextMenu_1 = require("../ActionContextMenu");
const ActionDropdown_1 = require("../ActionDropdown");
const Dropdown_1 = require("../Dropdown");
const ExtensionGate_1 = require("../ExtensionGate");
const Icon_1 = require("../Icon");
const TooltipControls_1 = require("../TooltipControls");
const VisibilityProxy_1 = require("../VisibilityProxy");
const MyTable_1 = require("./MyTable");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_select_1 = require("react-select");
const ValueComponent = (props) => (React.createElement("div", { className: 'Select-value', title: props.value.text },
    React.createElement("span", { className: 'Select-value-label', role: 'option' }, props.value.text)));
class TableCell extends React.Component {
    constructor(props) {
        super(props);
        this.cycle = () => {
            const { attribute, rawData } = this.props;
            attribute.edit.onChangeValue(rawData, undefined);
        };
        this.changeCell = (key) => {
            const { attribute, rawData } = this.props;
            attribute.edit.onChangeValue(rawData, key);
        };
        this.changeCellSelect = (value) => {
            if (value !== null) {
                this.changeCell(value.key);
            }
            else {
                this.changeCell(undefined);
            }
        };
        this.openChoice = (isOpen) => {
            this.setState({ isOpen });
        };
        this.renderChoice = (choice) => {
            const { t, attribute, tableId } = this.props;
            return (React.createElement(react_bootstrap_1.MenuItem, { eventKey: choice.key, key: choice.key, className: `option-${tableId}-${attribute.id}-${choice.key}` },
                choice.icon ? React.createElement(Icon_1.default, { name: choice.icon }) : null,
                t(choice.text)));
        };
        this.toggle = () => {
            const { attribute, data, rawData } = this.props;
            const value = data;
            attribute.edit.onChangeValue(rawData, !value);
        };
        this.state = {
            isOpen: false,
        };
    }
    shouldComponentUpdate(newProps, newState) {
        return this.props.rawData !== newProps.rawData
            || this.props.data !== newProps.data
            || this.props.language !== newProps.language
            || this.state.isOpen !== newState.isOpen;
    }
    render() {
        const { t, attribute, data, language, onHighlight, rawData, rowId } = this.props;
        // if a custom renderer was set then rowData is the raw object
        // passed to the table by the user.
        // otherwise rowData is the calculated value of this cell
        if (attribute.customRenderer !== undefined) {
            const attrControl = attribute.customRenderer(rawData, false, t, {
                onHighlight
            }) || null;
            return attrControl !== null ? (React.createElement(ExtensionGate_1.default, { id: `extension-${rowId}-${attribute.id}` }, attrControl)) : null;
        }
        if ((data === undefined) || (data === null)) {
            return React.createElement("span", null, ' ');
        }
        else if ((attribute.edit.onChangeValue !== undefined) && attribute.edit.inline) {
            if (attribute.edit.choices !== undefined) {
                return this.renderChoices(data);
            }
        }
        else {
            const cellType = typeof (data);
            if (cellType === 'string') {
                return React.createElement("span", null, data);
            }
            else if (cellType === 'boolean') {
                return (React.createElement(TooltipControls_1.IconButton, { className: 'btn-embed', id: `toggle-${rowId}-${attribute.id}`, tooltip: attribute.name, icon: data ? 'checkbox-checked' : 'square-remove', onClick: this.toggle }));
            }
            else if ((cellType === 'object') && (data instanceof Date)) {
                return (React.createElement("span", null, data !== undefined ? data.toLocaleString(language) : t('Not installed')));
            }
        }
        return React.createElement("span", null, data.toString());
    }
    renderChoices(data) {
        const { attribute } = this.props;
        if (attribute.edit.actions !== false) {
            return this.renderAction(data);
        }
        else {
            return this.renderSelect(data);
        }
    }
    renderAction(data) {
        const { t, attribute, container, right, tableId } = this.props;
        const choices = attribute.edit.choices();
        const currentChoice = choices.find(choice => choice.text === data);
        const key = currentChoice !== undefined ? currentChoice.key : undefined;
        return (React.createElement(Dropdown_1.default, { id: `dropdown-${tableId}-${attribute.id}`, container: container, pullRight: right, onToggle: this.openChoice },
            React.createElement(TooltipControls_1.Button, { id: `btn-${tableId}-${attribute.id}`, className: `btn-${tableId}-${attribute.id}-${key}`, key: key, onClick: this.cycle, onSelect: this.changeCell, tooltip: attribute.description },
                ((currentChoice !== undefined) && (currentChoice.icon !== undefined))
                    ? React.createElement(Icon_1.default, { name: currentChoice.icon }) : null,
                currentChoice !== undefined ? t(currentChoice.text) : ''),
            React.createElement(Dropdown_1.default.Toggle, { className: `toggle-${tableId}-${attribute.id} `
                    + `toggle-${tableId}-${attribute.id}-${key}` }),
            this.state.isOpen
                ? (React.createElement(Dropdown_1.default.Menu, { onSelect: this.changeCell }, choices.filter(choice => choice.visible !== false).map(this.renderChoice)))
                : React.createElement(Dropdown_1.DummyMenu, null)));
    }
    renderSelect(data) {
        const { t, attribute } = this.props;
        const choices = attribute.edit.choices();
        const currentChoice = choices.find(choice => choice.text === data);
        const choiceKey = currentChoice !== undefined ? currentChoice.key : undefined;
        return (React.createElement(react_select_1.default, { options: choices, value: choiceKey, onChange: this.changeCellSelect, valueKey: 'key', labelKey: 'text', valueComponent: ValueComponent, clearable: false, searchable: false }));
    }
}
class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.renderPlaceholder = () => {
            return (React.createElement(MyTable_1.TD, null, '\u00A0'));
        };
        this.renderRow = () => {
            const { actions, attributes, data, tableId } = this.props;
            const res = attributes.map(this.renderAttribute);
            const sorted = actions
                .filter(icon => {
                try {
                    return (icon.condition === undefined)
                        || icon.condition([data.__id]);
                }
                catch (err) {
                    return false;
                }
            })
                .sort((lhs, rhs) => lhs.position - rhs.position);
            if (sorted.length > 0) {
                res.push(React.createElement(MyTable_1.TD, { style: { textAlign: 'center' }, key: 'action-cell', className: `table-${tableId} cell-actions` },
                    React.createElement(ActionContextMenu_1.default, { id: `${tableId}-${data.__id}-action-context`, group: `${tableId}-action-icons`, instanceId: data.__id, className: 'table-actions', staticElements: actions, visible: this.state.contextVisible, position: this.state.context, onHide: this.onHideContext }),
                    React.createElement(ActionDropdown_1.default, { id: `${tableId}-${data.__id}-action-icons`, group: `${tableId}-action-icons`, instanceId: data.__id, className: 'table-actions', staticElements: actions })));
            }
            else {
                res.push(React.createElement(MyTable_1.TD, { key: 'no-action' }));
            }
            return res;
        };
        this.setVisible = (visible) => {
            this.props.onSetVisible(this.props.data.__id, visible);
        };
        this.renderAttribute = (attribute, index, arr) => {
            const { t, data, rawData, sortAttribute, tableId } = this.props;
            const classes = [
                `table-${tableId}`,
                `cell-${attribute.id}`,
            ];
            if (attribute.id === sortAttribute) {
                classes.push('table-sort-column');
            }
            return (React.createElement(MyTable_1.TD, { className: classes.join(' '), key: attribute.id }, this.renderCell(attribute, rawData, data[attribute.id], t, index >= (arr.length / 2))));
        };
        this.highlight = (highlight) => {
            const { data, onHighlight } = this.props;
            onHighlight(data.__id, highlight);
        };
        this.onContext = (event) => {
            this.setState({ contextVisible: true, context: { x: event.clientX, y: event.clientY } });
        };
        this.onHideContext = () => {
            this.setState({ contextVisible: false });
        };
        this.state = {
            contextVisible: false,
            context: undefined,
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        // don't redraw if _just_ rawdata changed because the calculated data should always update
        // too (with a delay) so updating on both events would cause two updates for every data change
        return (this.props.visible !== nextProps.visible)
            || (this.props.data !== nextProps.data)
            || (this.props.selected !== nextProps.selected)
            || (this.props.highlighted !== nextProps.highlighted)
            || (this.props.attributes !== nextProps.attributes)
            || (this.state.contextVisible !== nextState.contextVisible)
            || (this.state.context !== nextState.context);
    }
    render() {
        const { data, domRef, highlighted, onClick, selected } = this.props;
        const classes = ['xtr'];
        if (selected) {
            classes.push('table-selected');
        }
        if (highlighted) {
            classes.push('table-highlighted');
        }
        return (React.createElement(VisibilityProxy_1.default, { id: data.__id, key: data.__id, className: classes.join(' '), onClick: onClick, onContextMenu: this.onContext, ref: domRef, style: { display: 'table-row', position: 'relative' }, visible: this.props.visible, setVisible: this.setVisible, container: this.props.container, placeholder: this.renderPlaceholder, content: this.renderRow }));
    }
    renderCell(attribute, rawData, calculatedData, t, right) {
        const { container, data, language, tableId } = this.props;
        return (React.createElement(TableCell, { t: t, attribute: attribute, rawData: rawData, data: calculatedData, rowId: data.__id, tableId: tableId, language: language, container: container, onHighlight: this.highlight, right: right }));
    }
}
exports.default = TableRow;
