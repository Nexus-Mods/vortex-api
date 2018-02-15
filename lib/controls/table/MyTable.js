"use strict";
/**
 * replacement for the react table using
 * the css display classes 'table', 'table-row' and so on
 * instead of <table>, <tr>, ... for more flexibility
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const React = require("react");
function Table(props) {
    const classes = ['table', 'xtable'].concat((props.className || '').split(' '));
    if (props.condensed === true) {
        classes.push('table-condensed');
    }
    if (props.hover === true) {
        classes.push('table-hover');
    }
    return (React.createElement("div", { style: Object.assign({}, props.style, { display: 'table' }), className: classes.join(' ') }, props.children));
}
exports.Table = Table;
function THead(props) {
    const classes = ['table-header', 'xthead'].concat((props.className || '').split(' '));
    return (React.createElement("div", { style: Object.assign({}, props.style, { display: 'table-header-group' }), className: classes.join(' '), ref: props.domRef }, props.children));
}
exports.THead = THead;
function TBody(props) {
    const classes = ['xtbody'].concat((props.className || '').split(' '));
    return (React.createElement("div", { style: Object.assign({}, props.style, { display: 'table-row-group' }), className: classes.join(' '), ref: props.domRef }, props.children));
}
exports.TBody = TBody;
function TH(props) {
    const classes = ['table-header-cell', 'xth'].concat((props.className || '').split(' '));
    return (React.createElement("div", Object.assign({ style: Object.assign({}, props.style, { display: 'table-cell' }), className: classes.join(' ') }, _.omit(props, ['style', 'className'])), props.children));
}
exports.TH = TH;
function TR(props) {
    const classes = ['xtr'].concat((props.className || '').split(' '));
    return (React.createElement("div", { style: Object.assign({}, props.style, { display: 'table-row' }), className: classes.join(' ') }, props.children));
}
exports.TR = TR;
function TD(props) {
    const classes = ['xtd'].concat((props.className || '').split(' '));
    return (React.createElement("div", Object.assign({ style: Object.assign({}, props.style, { display: 'table-cell' }), className: classes.join(' ') }, _.omit(props, ['style', 'className'])), props.children));
}
exports.TD = TD;
