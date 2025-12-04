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
const ComponentEx_1 = require("../../../util/ComponentEx");
const i18n_1 = require("../../../util/i18n");
const log_1 = require("../../../util/log");
const storeHelper_1 = require("../../../util/storeHelper");
const ExtensionGate_1 = __importDefault(require("../ExtensionGate"));
const FormInput_1 = __importDefault(require("../FormInput"));
const Icon_1 = __importDefault(require("../Icon"));
const More_1 = __importDefault(require("../More"));
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_select_1 = __importDefault(require("react-select"));
const nop = () => undefined;
function ValueComponent(props) {
    return (React.createElement("div", { className: 'Select-value', title: props.value.text },
        React.createElement("span", { className: 'Select-value-label', role: 'option' }, props.value.text)));
}
class DetailCell extends React.Component {
    constructor() {
        super(...arguments);
        this.warning = () => 'warning';
        this.changeCell = (newValue) => {
            const { attribute, onChangeData, rowIds } = this.props;
            onChangeData(rowIds, attribute.id, newValue);
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
        if (rawData === undefined) {
            // This shouldn't happen, rawData is just the original data object
            // passed to the table and if that was undefined
            return null;
        }
        if (attribute.customRenderer !== undefined) {
            const values = rowIds.map(id => rawData[id]).filter(val => val !== undefined);
            if ((values.length === 0) || (values[0] === undefined)) {
                return null;
            }
            const attrControl = attribute.customRenderer(attribute.supportsMultiple ? values : values[0], true, t, {
                onHighlight: nop,
            });
            content = attrControl !== null ? (React.createElement(react_bootstrap_1.FormControl.Static, { componentClass: 'div' }, (React.createElement(ExtensionGate_1.default, { id: `extension-${rowIds[0]}-${attribute.id}` }, attrControl)))) : null;
        }
        else {
            const values = rowIds
                .filter(id => rowData[id] !== undefined)
                .map(id => rowData[id][attribute.id]);
            if (attribute.edit.onChangeValue !== undefined) {
                const readOnlyFunc = (0, storeHelper_1.getSafe)(attribute, ['edit', 'readOnly'], (val) => false);
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
            ? (React.createElement(More_1.default, { id: `more-tableattribute-${attribute.id}`, name: (0, i18n_1.preT)(t, attribute.name, undefined, true) }, (0, i18n_1.preT)(t, attribute.help, undefined, true))) : null;
        return content !== null ? (React.createElement(react_bootstrap_1.FormGroup, { className: `table-detail-${attribute.id}`, key: key },
            attribute.name !== undefined ? (React.createElement(react_bootstrap_1.ControlLabel, { title: (0, i18n_1.preT)(t, attribute.description) },
                (0, i18n_1.preT)(t, attribute.name),
                helpIcon)) : null,
            content)) : null;
    }
    renderSelect(values, readOnly) {
        const { t, attribute, rawData } = this.props;
        const various = values.find(iter => !Object.is(iter, values[0])) !== undefined;
        const choices = attribute.edit.choices(rawData);
        let currentChoice;
        if (!various) {
            currentChoice = choices.find(choice => choice.text === values[0]);
        }
        if (readOnly) {
            return (React.createElement(react_bootstrap_1.FormControl.Static, null, currentChoice !== undefined ? currentChoice.text : t('<Nothing>')));
        }
        else {
            const choiceKey = currentChoice !== undefined ? currentChoice.key : undefined;
            const currentIcon = currentChoice !== undefined
                ? currentChoice.icon
                : undefined;
            return (React.createElement("div", { className: 'table-details-select-container' },
                currentIcon !== undefined ? React.createElement(Icon_1.default, { name: currentIcon }) : null,
                React.createElement(react_select_1.default, { options: choices, value: choiceKey, onChange: this.changeCellSelect, valueKey: 'key', labelKey: 'text', valueComponent: ValueComponent, placeholder: (attribute.edit.placeholder !== undefined)
                        ? attribute.edit.placeholder() : t('Select...') })));
        }
    }
    renderValidation(values, readOnly) {
        const { t, attribute } = this.props;
        const various = values.find(iter => !Object.is(iter, values[0])) !== undefined;
        return (React.createElement(FormInput_1.default, { id: attribute.id, label: (0, i18n_1.preT)(t, attribute.name), value: various ? t('Various') : this.renderCell(values[0]), onChange: this.changeCell, readOnly: readOnly, validate: various ? this.warning : attribute.edit.validate }));
    }
    renderInput(values, readOnly) {
        const { t, attribute } = this.props;
        const various = values.find(iter => !Object.is(iter, values[0])) !== undefined;
        return (React.createElement(FormInput_1.default, { id: attribute.id, label: (0, i18n_1.preT)(t, attribute.name), readOnly: readOnly, value: various ? '' : this.renderCell(values[0]), onChange: this.changeCell, placeholder: various ? t('Various') : '' }));
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
            return (React.createElement(react_bootstrap_1.FormControl, { id: attribute.id, type: 'text', label: (0, i18n_1.preT)(t, attribute.name), readOnly: true, value: this.renderCell(value) }));
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
        this.mFormRef = null;
        this.renderDetail = (attribute) => {
            const { t, language, rawData, rowData, rowIds } = this.props;
            return (React.createElement(DetailCell, { t: t, key: `detail-${rowIds[0]}-${attribute.id}`, attribute: attribute, language: language, rowData: rowData, rawData: rawData, rowIds: rowIds, onChangeData: this.onChangeData }));
        };
        this.setFormRef = (ref) => {
            const oldRef = this.mFormRef;
            this.mFormRef = ref;
            // this seeems - needlessly complicated. The hover on the form controls the styling
            // on containers higher up so that they provide enough space and controls don't get cut off.
            if (ref !== null) {
                ref.addEventListener('mouseenter', this.startHover);
                ref.addEventListener('mouseleave', this.stopHover);
            }
            else if (oldRef !== null) {
                oldRef.removeEventListener('mouseenter', this.startHover);
                oldRef.removeEventListener('mouseleave', this.stopHover);
            }
        };
        this.startHover = () => {
            this.nextState.hovered = true;
            // why is this necessary? the state change doesn't seem to trigger an update on its own
            this.forceUpdate();
        };
        this.stopHover = () => {
            this.nextState.hovered = false;
        };
        this.onChangeData = (rowIds, attributeId, value) => {
            const { rawData } = this.props;
            const attribute = this.props.attributes
                .find((attr) => attr.id === attributeId);
            if (attribute.supportsMultiple === true) {
                attribute.edit.onChangeValue(rowIds.map(rowId => rawData[rowId]).filter(iter => iter !== undefined), value);
            }
            else if (rowIds.length === 1) {
                const data = rawData[rowIds[0]];
                if (data !== undefined) {
                    attribute.edit.onChangeValue(data, value);
                }
            }
            else {
                (0, log_1.log)('error', 'attempt to change an attribute for multiple rows that doesn\'t support it', { rowIds, attribute, value });
            }
        };
        this.initState({ hovered: false });
    }
    shouldComponentUpdate(nextProps, nextState) {
        // TODO: when data changes it will almost always cause an update in rawData and
        //   then a delayed update to rowData, so this component gets updated twice for
        //   one change in row data
        return (this.props.rowIds !== nextProps.rowIds)
            || (this.props.language !== nextProps.language)
            || (this.props.rawData !== nextProps.rawData)
            || (this.props.rowData !== nextProps.rowData)
            || (this.props.show !== nextProps.show)
            || (this.state.hovered !== nextState.hovered)
            || !_.isEqual(this.props.attributes, nextProps.attributes);
    }
    render() {
        const { t, attributes, onToggleShow, rowData, rowIds, show } = this.props;
        if (rowData[rowIds[0]] === undefined) {
            return null;
        }
        const attributeSort = (lhs, rhs) => (lhs.position || 100) - (rhs.position || 100);
        const detailList = attributes
            .filter(obj => (obj.isVolatile || (rowData[rowIds[0]][obj.id] !== undefined))
            && ((rowIds.length === 1)
                || obj.supportsMultiple))
            .sort(attributeSort);
        const innerClasses = ['table-details-inner'];
        if (this.state.hovered) {
            innerClasses.push('table-details-hovered');
        }
        const visClass = (show ? 'table-form-details-show' : 'table-form-details-hide');
        return (React.createElement("div", { className: 'table-details-outer' },
            React.createElement("div", { className: innerClasses.join(' ') }, detailList.length > 0 ? (React.createElement("form", { className: 'table-form-details ' + visClass, ref: this.setFormRef }, detailList.map(obj => this.renderDetail(obj)))) : (React.createElement("h4", { style: { marginTop: 'auto', marginBottom: 'auto', padding: 5 } }, t('Multiple items selected')))),
            React.createElement(react_bootstrap_1.Button, { id: 'btn-minimize-menu', onClick: onToggleShow, className: 'btn-menu-minimize' },
                React.createElement(Icon_1.default, { name: show ? 'pane-right' : 'pane-left' }))));
    }
}
exports.default = DetailBox;
