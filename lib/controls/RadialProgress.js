"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = require("d3");
const React = require("react");
class RadialProgress extends React.Component {
    constructor(props) {
        super(props);
        this.perc = (bar) => bar.value / (bar.max - bar.min);
        this.renderArc = (bar, idx, arr) => {
            const { offset, totalRadius } = this.props;
            return (React.createElement("g", { key: idx, transform: `translate(${totalRadius + (offset || 0)}, ${totalRadius + (offset || 0)})` },
                React.createElement("path", { className: `radial-progress radial-progress-${bar.class}`, d: this.mArcGen(bar, idx, arr.length) }),
                React.createElement("path", { className: 'radial-rest', d: this.mRestArcGen(bar, idx, arr.length) })));
        };
        this.updateArcGen(props);
    }
    componentWillReceiveProps(newProps) {
        this.updateArcGen(newProps);
    }
    render() {
        const { data, offset, style, totalRadius } = this.props;
        const sideLength = (totalRadius + (offset || 0)) * 2;
        return (React.createElement("svg", { viewBox: `0 0 ${sideLength} ${sideLength}`, style: style }, data.map(this.renderArc)));
    }
    updateArcGen(props) {
        const { data, maxWidth, totalRadius } = props;
        this.mWidthPerArc = totalRadius / (data.length + 1);
        if (maxWidth !== undefined) {
            this.mWidthPerArc = Math.min(this.mWidthPerArc, maxWidth);
        }
        const offset = this.props.offset || 0;
        const gap = this.props.gap || 1;
        this.mArcGen = d3.arc()
            .startAngle(0)
            .endAngle((item) => this.perc(item) * 2 * Math.PI)
            .innerRadius((item, idx, count) => offset + this.mWidthPerArc * (idx + 1))
            .outerRadius((item, idx, count) => offset + this.mWidthPerArc * (idx + 2) - (gap || 1));
        this.mRestArcGen = d3.arc()
            .startAngle((item) => this.perc(item) * 2 * Math.PI)
            .endAngle(2 * Math.PI)
            .innerRadius((item, idx, count) => offset + this.mWidthPerArc * (idx + 1) + (this.mWidthPerArc - gap) / 4)
            .outerRadius((item, idx, count) => offset + this.mWidthPerArc * (idx + 2) - gap - (this.mWidthPerArc - gap) / 4);
    }
}
exports.default = RadialProgress;
