"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../../util/ComponentEx");
const log_1 = require("../../util/log");
const storeHelper_1 = require("../../util/storeHelper");
const ExtensionGate_1 = require("../ExtensionGate");
const FormInput_1 = require("../FormInput");
const Icon_1 = require("../Icon");
const More_1 = require("../More");
const _ = require("lodash");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const react_select_1 = require("react-select");
const nop = () => undefined;
class ValueComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: 'Select-value', title: this.props.value.text },
            React.createElement("span", { className: 'Select-value-label', role: 'option' }, this.props.value.text)));
    }
}
class DetailCell extends React.Component {
    constructor() {
        super(...arguments);
        this.warning = () => 'warning';
        this.changeCell = (newValue) => {
            const { attribute, onChangeData, rowIds } = this.props;
            onChangeData(rowIds, attribute.id, newValue);
        };
        this.changeCellEvt = (evt) => {
            this.changeCell(evt.currentTarget.value);
        };
        this.changeCellSelect = (value) => {
            if (value !== null) {
                this.changeCell(value.key);
            }
            else {
                this.changeCell(undefined);
            }
        };
    }
    shouldComponentUpdate(nextProps) {
        if (this.props.language !== nextProps.language) {
            return true;
        }
        if (this.props.rowIds !== nextProps.rowIds) {
            return true;
        }
        nextProps.rowIds.forEach(rowId => {
            if (this.props.rowData[rowId] !== nextProps.rowData[rowId]) {
                return true;
            }
        });
        if ((this.props.rowData !== nextProps.rowData)
            || (this.props.rawData !== nextProps.rawData)) {
            return true;
        }
        return false;
    }
    render() {
        const { t, attribute, rawData, rowData, rowIds } = this.props;
        let content = null;
        if (attribute.customRenderer !== undefined) {
            const values = rowIds.map(id => rawData[id]);
            if ((values.length === 0) || (values[0] === undefined)) {
                return null;
            }
            const attrControl = attribute.customRenderer(attribute.supportsMultiple ? values : values[0], true, t, {
                onHighlight: nop,
            });
            content = attrControl !== null ? (React.createElement(react_bootstrap_1.FormControl.Static, { componentClass: 'div' }, (React.createElement(ExtensionGate_1.default, { id: `extension-${rowIds[0]}-${attribute.id}` }, attrControl)))) : null;
        }
        else {
            const values = rowIds.map(id => rowData[id][attribute.id]);
            if (attribute.edit.onChangeValue !== undefined) {
                const readOnlyFunc = storeHelper_1.getSafe(attribute, ['edit', 'readOnly'], (val) => false);
                const readOnly = (rawData[rowIds[0]] !== undefined) && readOnlyFunc(rawData[rowIds[0]]);
                content = (attribute.edit.choices !== undefined)
                    ? this.renderSelect(values, readOnly)
                    : (attribute.edit.validate !== undefined)
                        ? this.renderValidation(values, readOnly)
                        : this.renderInput(values, readOnly);
            }
            else {
                content = this.renderRO(values);
            }
        }
        const key = `${rowIds[0]}-${attribute.id}`;
        const helpIcon = attribute.help !== undefined
            ? (React.createElement(More_1.default, { id: `more-tableattribute-${attribute.id}`, name: attribute.name }, attribute.help)) : null;
        return content !== null ? (React.createElement(react_bootstrap_1.FormGroup, { key: key },
            attribute.name !== undefined ? (React.createElement(react_bootstrap_1.ControlLabel, { title: attribute.description },
                attribute.name,
                helpIcon)) : null,
            content)) : null;
    }
    renderSelect(values, readOnly) {
        const { t, attribute, rowIds } = this.props;
        const various = values.find(iter => !Object.is(iter, values[0])) !== undefined;
        const choices = attribute.edit.choices();
        let currentChoice;
        if (!various) {
            currentChoice = choices.find(choice => choice.text === values[0]);
        }
        if (readOnly) {
            return (React.createElement(react_bootstrap_1.FormControl.Static, null, currentChoice !== undefined ? currentChoice.text : null));
        }
        else {
            const choiceKey = currentChoice !== undefined ? currentChoice.key : undefined;
            return (React.createElement(react_select_1.default, { options: choices, value: choiceKey, onChange: this.changeCellSelect, valueKey: 'key', labelKey: 'text', valueComponent: ValueComponent }));
        }
    }
    renderValidation(values, readOnly) {
        const { t, attribute } = this.props;
        const various = values.find(iter => !Object.is(iter, values[0])) !== undefined;
        return (React.createElement(FormInput_1.default, { id: attribute.id, label: t(attribute.name), value: various ? t('Various') : this.renderCell(values[0]), onChange: this.changeCell, readOnly: readOnly, validate: various ? this.warning : attribute.edit.validate }));
    }
    renderInput(values, readOnly) {
        const { t, attribute } = this.props;
        const various = values.find(iter => !Object.is(iter, values[0])) !== undefined;
        return (React.createElement(FormInput_1.default, { id: attribute.id, label: t(attribute.name), readOnly: readOnly, value: various ? '' : this.renderCell(values[0]), onChange: this.changeCell, placeholder: various ? t('Various') : '' }));
    }
    renderRO(values) {
        const { t, attribute } = this.props;
        const various = values.find(iter => !Object.is(iter, values[0])) !== undefined;
        const value = various ? t('Various') : values[0];
        if (Array.isArray(value)) {
            let idx = 0;
            return (React.createElement(react_bootstrap_1.ListGroup, null, value.map((val) => React.createElement(react_bootstrap_1.ListGroupItem, { key: `${attribute.id}-${idx++}` }, val))));
        }
        else {
            return (React.createElement(react_bootstrap_1.FormControl, { id: attribute.id, type: 'text', label: t(attribute.name), readOnly: true, value: this.renderCell(value) }));
        }
    }
    renderCell(value) {
        const { language } = this.props;
        if (value instanceof Date) {
            return value.toLocaleString(language);
        }
        else if (typeof (value) === 'string') {
            return value;
        }
        else if ((value === undefined) || (value === null)) {
            return '';
        }
        else {
            return value.toString();
        }
    }
}
class DetailBox extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.renderDetail = (attribute) => {
            const { t, language, rawData, rowData, rowIds } = this.props;
            return (React.createElement(DetailCell, { t: t, key: `detail-${rowIds[0]}-${attribute.id}`, attribute: attribute, language: language, rowData: rowData, rawData: rawData, rowIds: rowIds, onChangeData: this.onChangeData }));
        };
        this.onChangeData = (rowIds, attributeId, value) => {
            const { rawData } = this.props;
            const attribute = this.props.attributes
                .find((attr) => attr.id === attributeId);
            if (attribute.supportsMultiple === true) {
                attribute.edit.onChangeValue(rowIds.map(rowId => rawData[rowId]), value);
            }
            else if (rowIds.length === 1) {
                attribute.edit.onChangeValue(rawData[rowIds[0]], value);
            }
            else {
                log_1.log('error', 'attempt to change an attribute for multiple rows that doesn\'t support it', { rowIds, attribute, value });
            }
        };
    }
    shouldComponentUpdate(nextProps) {
        // TODO: when data changes it will almost always cause an update in rawData and
        //   then a delayed update to rowData, so this component gets updated twice for
        //   one change in row data
        return (this.props.rowIds !== nextProps.rowIds)
            || (this.props.language !== nextProps.language)
            || (this.props.rawData !== nextProps.rawData)
            || (this.props.rowData !== nextProps.rowData)
            || (this.props.show !== nextProps.show)
            || !_.isEqual(this.props.attributes, nextProps.attributes);
    }
    render() {
        const { t, attributes, onToggleShow, rowData, rowIds, show } = this.props;
        if (rowData[rowIds[0]] === undefined) {
            return null;
        }
        const detailList = attributes
            .filter(obj => (obj.isVolatile || (rowData[rowIds[0]][obj.id] !== undefined))
            && ((rowIds.length === 1)
                || obj.supportsMultiple));
        const visClass = (show ? 'table-form-details-show' : 'table-form-details-hide');
        return (React.createElement("div", { style: { height: '100%', position: 'relative', display: 'flex', overflowX: 'hidden' } },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                detailList.length > 0 ? (React.createElement("form", { className: 'table-form-details ' + visClass }, detailList.map(obj => this.renderDetail(obj)))) : (React.createElement("h4", { style: { marginTop: 'auto', marginBottom: 'auto', padding: 5 } }, t('Multiple items selected'))),
                React.createElement(react_bootstrap_1.Button, { id: 'btn-minimize-menu', onClick: onToggleShow, className: 'btn-menu-minimize' },
                    React.createElement(Icon_1.default, { name: show ? 'pane-right' : 'pane-left' })))));
    }
    renderHandle() {
        const { t, title, onToggleShow } = this.props;
        // TODO: hard coded style???
        const style = {
            border: '1px solid #0c5886',
            position: 'relative',
        };
        const textStyle = {
            transform: 'rotate(-90deg)',
            transformOrigin: 'left',
            position: 'absolute',
            whiteSpace: 'nowrap',
            top: '50%',
            left: '50%',
        };
        return (React.createElement(react_bootstrap_1.Button, { style: style, onClick: onToggleShow },
            React.createElement("div", { style: textStyle },
                React.createElement(Icon_1.default, { name: 'up' }),
                ' ',
                title || t('Details'))));
    }
}
exports.default = DetailBox;
