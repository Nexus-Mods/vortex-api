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
const i18n_1 = require("../../util/i18n");
const ActionContextMenu_1 = __importDefault(require("../ActionContextMenu"));
const ActionDropdown_1 = __importDefault(require("../ActionDropdown"));
const Dropdown_1 = __importStar(require("../Dropdown"));
const ExtensibleControl_1 = __importDefault(require("../ExtensibleControl"));
const ExtensionGate_1 = __importDefault(require("../ExtensionGate"));
const FormInput_1 = __importDefault(require("../FormInput"));
const Icon_1 = __importDefault(require("../Icon"));
const SelectUpDown_1 = __importDefault(require("../SelectUpDown"));
const Toggle_1 = __importDefault(require("../Toggle"));
const TooltipControls_1 = require("../TooltipControls");
const VisibilityProxy_1 = __importDefault(require("../VisibilityProxy"));
const MyTable_1 = require("./MyTable");
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
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
        this.changeCellToggle = (value) => {
            this.changeCell(value);
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
        this.onChangeNumValue = (newValue) => {
            const { attribute, rawData } = this.props;
            attribute.edit.onChangeValue(rawData, parseInt(newValue, 10));
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
        return ((newProps.attribute.customRenderer !== undefined)
            && (this.props.rawData !== newProps.rawData))
            || this.props.data !== newProps.data
            || this.props.language !== newProps.language
            || this.state.isOpen !== newState.isOpen;
    }
    render() {
        const { t, attribute, onHighlight, rawData, rowId, tableId } = this.props;
        // if a custom renderer was set then rowData is the raw object
        // passed to the table by the user.
        // otherwise rowData is the calculated value of this cell
        let content = null;
        if (attribute.customRenderer !== undefined) {
            const attrControl = attribute.customRenderer(rawData, false, t, {
                onHighlight
            }) || null;
            content = attrControl !== null ? (React.createElement(ExtensionGate_1.default, { id: `extension-${rowId}-${attribute.id}` }, attrControl)) : null;
        }
        else {
            content = this.renderDefault();
        }
        return attribute.isExtensible
            ? (React.createElement(ExtensibleControl_1.default, { group: `${tableId}-${attribute.id}`, wrapperProps: { rowId } }, content)) : content;
    }
    renderDefault() {
        const { t, attribute, data, language, rowId } = this.props;
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
            else if ((cellType === 'number') && (attribute.edit.onChangeValue !== undefined)) {
                return (React.createElement(FormInput_1.default, { value: data, onChange: this.onChangeNumValue, type: 'number', validate: attribute.edit.validate, min: attribute.edit.min, max: attribute.edit.max }));
            }
            else if (cellType === 'boolean') {
                if (attribute.edit.onChangeValue !== undefined) {
                    return (React.createElement(TooltipControls_1.IconButton, { className: 'btn-embed', id: `toggle-${rowId}-${attribute.id}`, tooltip: (0, i18n_1.preT)(t, attribute.name, undefined, true), icon: data ? 'checkbox-checked' : 'checkbox-unchecked', onClick: this.toggle }));
                }
                else {
                    return (React.createElement(TooltipControls_1.IconButton, { className: 'btn-embed', icon: data ? 'toggle-enabled' : 'toggle-disabled', tooltip: (0, i18n_1.preT)(t, 'attribute.name, undefined, true'), style: { pointerEvents: 'none' } }));
                }
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
        const { t, attribute, container, rawData, right, tableId } = this.props;
        const choices = attribute.edit.choices(rawData);
        const currentChoice = choices.find(choice => choice.text === data);
        const key = currentChoice !== undefined ? currentChoice.key : undefined;
        return (React.createElement(Dropdown_1.default, { id: `dropdown-${tableId}-${attribute.id}`, container: container, pullRight: right, onToggle: this.openChoice },
            React.createElement(TooltipControls_1.Button, { id: `btn-${tableId}-${attribute.id}`, className: `btn-${tableId}-${attribute.id}-${key} dropdown-title`, key: key, onClick: this.cycle, onSelect: this.changeCell, tooltip: (0, i18n_1.preT)(t, attribute.description, undefined, true) },
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
        const { t, attribute, container, rawData } = this.props;
        const choices = attribute.edit.choices(rawData);
        if ((choices.length === 2)
            && (choices[0].bool !== undefined)
            && (choices[1].bool !== undefined)) {
            // special case where we have exactly two choices: true and false
            const currentChoice = choices.find(choice => choice.bool === data);
            return (React.createElement(Toggle_1.default, { checked: (currentChoice !== undefined) && currentChoice.bool, onToggle: this.changeCellToggle }));
        }
        else {
            const currentChoice = choices.find(choice => choice.text === data);
            const choiceKey = currentChoice !== undefined ? currentChoice.key : undefined;
            return (React.createElement(SelectUpDown_1.default, { options: choices, value: choiceKey, onChange: this.changeCellSelect, valueKey: 'key', labelKey: 'text', valueComponent: ValueComponent, clearable: false, searchable: false, placeholder: t('Select...'), container: container }));
        }
    }
}
class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.renderPlaceholder = () => {
            return (React.createElement(MyTable_1.TD, null, '\u00A0'));
        };
        this.renderRow = () => {
            const { t, actions, attributes, data, hasActions, tableId } = this.props;
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
            if (hasActions) {
                res.push((React.createElement(MyTable_1.TD, { style: { textAlign: 'center' }, key: 'action-cell', className: `table-${tableId} cell-actions` },
                    React.createElement(ActionContextMenu_1.default, { t: t, id: `${tableId}-${data.__id}-action-context`, group: `${tableId}-action-icons`, instanceId: data.__id, className: 'table-actions', staticElements: sorted, visible: this.state.contextVisible, position: this.state.context, onHide: this.onHideContext }),
                    React.createElement(ActionDropdown_1.default, { t: t, id: `${tableId}-${data.__id}-action-icons`, group: `${tableId}-action-icons`, instanceId: data.__id, className: 'table-actions', staticElements: actions }))));
            }
            else {
                res.push(React.createElement(MyTable_1.TD, { key: 'no-action' }));
            }
            return res;
        };
        this.setVisible = (visible) => {
            // it may be that this visible value is the same as the one in props, but
            // since rows are turned invisible with a delay, it's possible a row becomes invisible
            // and visible again without the prop changing, so we have to call this anyway.
            this.props.onSetVisible(this.props.id, visible);
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
        this.renderAttributeExtra = (attribute) => {
            const { t, attributes, data, hasActions, rawData, tableId } = this.props;
            const classes = [
                `table-${tableId}`,
                `cell-${attribute.id}`,
            ];
            return (React.createElement(MyTable_1.TD, { className: classes.join(' '), key: attribute.id, colSpan: attributes.length + (hasActions ? 1 : 0) }, this.renderCell(attribute, rawData, data[attribute.id], t, false)));
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
            || (this.props.grouped !== nextProps.grouped)
            || (this.props.highlighted !== nextProps.highlighted)
            || (this.props.attributes !== nextProps.attributes)
            || (this.state.contextVisible !== nextState.contextVisible)
            || (this.state.context !== nextState.context);
    }
    render() {
        const { data, domRef, inlines, group, grouped, highlighted, id, onClick, rowClasses, selected } = this.props;
        const classes = rowClasses;
        if (selected) {
            classes.push('table-selected');
        }
        if (highlighted) {
            classes.push('table-highlighted');
        }
        if (grouped) {
            classes.push('table-row-grouped');
        }
        const res = [(React.createElement(VisibilityProxy_1.default, { id: id, componentClass: MyTable_1.TR, "data-rowid": data.__id, "data-group": group, key: data.__id, className: classes.join(' '), onClick: onClick, onContextMenu: this.onContext, ref: domRef, style: { position: 'relative' }, visible: this.props.visible, setVisible: this.setVisible, container: this.props.container, placeholder: this.renderPlaceholder, content: this.renderRow }))];
        if (this.props.visible) {
            inlines.forEach(extra => {
                res.push((React.createElement("tr", { key: data.__id + '_extra_' + extra.id }, this.renderAttributeExtra(extra))));
            });
        }
        return res;
    }
    renderCell(attribute, rawData, calculatedData, t, right) {
        const { container, data, language, tableId } = this.props;
        return (React.createElement(TableCell, { t: t, attribute: attribute, rawData: rawData, data: calculatedData, rowId: data.__id, tableId: tableId, language: language, container: container, onHighlight: this.highlight, right: right }));
    }
}
exports.default = TableRow;
