"use strict";
/**
 * replacement for the react table using
 * the css display classes 'table', 'table-row' and so on
 * instead of <table>, <tr>, ... for more flexibility
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TH = void 0;
exports.Table = Table;
exports.THead = THead;
exports.TBody = TBody;
exports.TR = TR;
exports.TD = TD;
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
function Table(props) {
    const classes = ['table', 'xtable'].concat((props.className || '').split(' '));
    if (props.condensed === true) {
        classes.push('table-condensed');
    }
    if (props.hover === true) {
        classes.push('table-hover');
    }
    return (React.createElement("table", { style: Object.assign({}, props.style), className: classes.join(' ') }, props.children));
}
function THead(props) {
    const classes = ['table-header', 'xthead'].concat((props.className || '').split(' '));
    return (React.createElement("thead", { style: Object.assign({}, props.style), className: classes.join(' '), ref: props.domRef }, props.children));
}
function TBody(props) {
    const classes = ['xtbody'].concat((props.className || '').split(' '));
    return (React.createElement("tbody", { style: Object.assign({}, props.style), className: classes.join(' '), ref: props.domRef }, props.children));
}
class TH extends React.Component {
    render() {
        const { children, className, domRef, style } = this.props;
        const classes = ['table-header-cell', 'xth'].concat((className || '').split(' '));
        return (React.createElement("th", Object.assign({ style: Object.assign({}, style), className: classes.join(' '), ref: domRef }, _.omit(this.props, ['style', 'className', 'domRef'])), children));
    }
}
exports.TH = TH;
function TR(props) {
    const { className, domRef } = props;
    const classes = ['xtr'].concat((className || '').split(' '));
    return (React.createElement("tr", Object.assign({ className: classes.join(' '), ref: domRef }, _.omit(props, ['className', 'domRef'])), props.children));
}
function TD(props) {
    const classes = ['xtd'].concat((props.className || '').split(' '));
    return (React.createElement("td", Object.assign({ className: classes.join(' ') }, _.omit(props, ['className', 'domRef']), { ref: props.domRef }), props.children));
}
