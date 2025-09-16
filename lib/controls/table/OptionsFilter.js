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
const bindProps_1 = __importDefault(require("../../util/bindProps"));
const util_1 = require("../../util/util");
const React = __importStar(require("react"));
const react_select_1 = __importDefault(require("react-select"));
const dummy = '__undefined_BJL9vbThZ';
function OptionsFilterComponent(props) {
    const { t, attributeId, filter, multi, onSetFilter } = props;
    const [options, setOptions] = React.useState([]);
    React.useEffect(() => {
        if (Array.isArray(props.options)) {
            setOptions(props.options);
        }
    }, [props.options]);
    const changeFilterMulti = React.useCallback((newFilter) => {
        onSetFilter(attributeId, newFilter.map(val => val.value));
    }, [attributeId, onSetFilter]);
    const changeFilter = React.useCallback((newFilter) => {
        onSetFilter(attributeId, ((newFilter !== undefined) && (newFilter !== null)) ? newFilter.value : undefined);
    }, [attributeId, onSetFilter]);
    const updateOptions = React.useCallback(() => {
        if (!Array.isArray(props.options)) {
            setOptions(props.options());
        }
    }, [props.options]);
    React.useEffect(() => {
        if ((filter !== undefined) && (!Array.isArray(props.options))) {
            // if a filter is already set we do need to know the options
            updateOptions();
        }
    }, []);
    // can't use undefined as a value in Select
    const optionsSane = options.map(opt => opt.value === undefined ? { label: opt.label, value: dummy } : opt);
    return (React.createElement(react_select_1.default, { multi: multi, className: 'select-compact', options: optionsSane, value: filter, onChange: multi ? changeFilterMulti : changeFilter, autosize: false, placeholder: t('Select...'), onOpen: updateOptions }));
}
class OptionsFilter {
    constructor(options, multi, raw) {
        this.raw = true;
        this.component = (0, bindProps_1.default)({ options, multi })(OptionsFilterComponent);
        this.mMulti = multi;
        this.raw = raw !== false;
    }
    matches(filter, value) {
        if (this.mMulti && (filter !== undefined) && (filter.length === 0)) {
            return true;
        }
        const filtUnsane = this.mMulti
            ? new Set((filter || []).map(filt => filt === dummy ? undefined : filt))
            : filter;
        if (Array.isArray(value)) {
            if (this.mMulti) {
                if (filtUnsane.has(OptionsFilter.EMPTY) && (value.length === 0)) {
                    return true;
                }
            }
            else if (filter === OptionsFilter.EMPTY) {
                return (value.length === 0);
            }
            const filt = this.mMulti
                ? (iter) => filtUnsane.has(iter)
                : (iter) => filtUnsane === iter;
            return (value.find(filt) !== undefined);
        }
        else {
            if (this.mMulti) {
                if (filtUnsane.has(OptionsFilter.EMPTY) && !(0, util_1.truthy)(value)) {
                    return true;
                }
            }
            else if (filter === OptionsFilter.EMPTY) {
                return !(0, util_1.truthy)(value);
            }
            return this.mMulti
                ? filtUnsane.has(value)
                : filtUnsane === value;
        }
    }
    isEmpty(filter) {
        return filter.length === 0;
    }
}
OptionsFilter.EMPTY = '__empty';
exports.default = OptionsFilter;
