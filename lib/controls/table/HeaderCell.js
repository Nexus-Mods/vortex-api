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
const getAttr_1 = __importDefault(require("../../util/getAttr"));
const i18n_1 = require("../../util/i18n");
const TooltipControls_1 = require("../TooltipControls");
const MyTable_1 = require("./MyTable");
const SortIndicator_1 = __importDefault(require("./SortIndicator"));
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const More_1 = __importDefault(require("../More"));
function nextDirection(direction) {
    switch (direction) {
        case 'asc': return 'desc';
        default: return 'asc';
    }
}
function nop() {
    // nop
}
class HeaderCell extends React.Component {
    constructor() {
        super(...arguments);
        this.mMinWidth = -1;
        this.mRef = null;
        this.setRef = (ref) => {
            this.mRef = ref;
        };
        this.cycleDirection = (evt) => {
            const { attribute, onSetSortDirection, state } = this.props;
            if (evt.defaultPrevented) {
                return;
            }
            if (attribute.isSortable) {
                const direction = (0, getAttr_1.default)(state, 'sortDirection', 'none');
                onSetSortDirection(attribute.id, nextDirection(direction));
            }
        };
        this.setGroup = (evt) => {
            const { onSetGroup, attribute } = this.props;
            onSetGroup(attribute.id);
            evt.preventDefault();
        };
        this.setDirection = (dir) => {
            const { attribute, onSetSortDirection } = this.props;
            onSetSortDirection(attribute.id, dir);
        };
    }
    shouldComponentUpdate(newProps) {
        // TODO: state is a new object every call, needs to be fixed in Table.tsx
        return (this.props.attribute !== newProps.attribute)
            || !_.isEqual(this.props.state, newProps.state)
            || (this.props.doFilter !== newProps.doFilter)
            || (this.props.doGroup !== newProps.doGroup)
            || (this.props.children !== newProps.children);
    }
    render() {
        const { t, attribute, className, doFilter } = this.props;
        const style = {};
        if (this.mMinWidth >= 0) {
            style['minWidth'] = this.mMinWidth;
        }
        return (React.createElement(MyTable_1.TH, { className: `table-header-cell ${className}`, key: attribute.id, domRef: this.setRef, style: style },
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                React.createElement("div", { className: 'flex-fill', style: { display: 'flex', flexDirection: 'row' }, onClick: this.cycleDirection },
                    React.createElement("div", { style: { margin: 0, display: 'flex', alignItems: 'center' } },
                        (0, i18n_1.preT)(t, attribute.name),
                        (attribute.help !== undefined)
                            ? (React.createElement(More_1.default, { id: `more-${attribute.name}`, name: (0, i18n_1.preT)(t, attribute.name) }, (0, i18n_1.preT)(t, attribute.help))) : null),
                    React.createElement("div", { className: 'cell-controls' },
                        attribute.isSortable ? this.renderSortIndicator() : React.createElement("div", null),
                        attribute.isGroupable ? this.renderGroupIndicator() : null)),
                doFilter ? this.props.children : null)));
    }
    updateWidth() {
        if (this.mRef !== null) {
            if (this.mRef.clientWidth > this.mMinWidth) {
                this.mMinWidth = this.mRef.clientWidth;
            }
        }
    }
    renderGroupIndicator() {
        const { t, doGroup } = this.props;
        const classes = [
            'btn-embed',
        ];
        classes.push(doGroup ? 'table-group-enabled' : 'table-group-disabled');
        return (React.createElement(TooltipControls_1.IconButton, { icon: 'layout-list', onClick: this.setGroup, tooltip: t('Group the table by this attribute'), className: classes.join(' '), tabIndex: -1 }));
    }
    renderSortIndicator() {
        const { state } = this.props;
        const direction = (0, getAttr_1.default)(state, 'sortDirection', 'none');
        return (React.createElement(SortIndicator_1.default, { direction: direction, onSetDirection: this.setDirection }));
    }
}
exports.default = HeaderCell;
