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
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __importStar(require("d3"));
const React = __importStar(require("react"));
const spinData = {
    class: 'running',
    min: 0,
    max: 100,
    value: 25,
};
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
    UNSAFE_componentWillReceiveProps(newProps) {
        this.updateArcGen(newProps);
    }
    render() {
        const { className, data, offset, style, totalRadius, spin } = this.props;
        const sideLength = (totalRadius + (offset || 0)) * 2;
        const classNames = ['radial', className];
        let progressData = [...data];
        if (spin && progressData.length == 0) {
            // The normal progress has higher priority than the spin
            classNames.push('radial--spin');
            progressData.push(spinData);
        }
        return (React.createElement("svg", { className: classNames.join(' '), viewBox: `0 0 ${sideLength} ${sideLength}`, style: style }, progressData.map(this.renderArc)));
    }
    updateArcGen(props) {
        var _a, _b, _c, _d;
        const { data, maxWidth, totalRadius } = props;
        const length = Math.max(data.length + 1, 2);
        this.mWidthPerArc = totalRadius / length;
        if (maxWidth !== undefined) {
            this.mWidthPerArc = Math.min(this.mWidthPerArc, maxWidth);
        }
        const offset = (_a = this.props.offset) !== null && _a !== void 0 ? _a : 0;
        const gap = (_b = this.props.gap) !== null && _b !== void 0 ? _b : 1;
        const innerGap = (_c = this.props.innerGap) !== null && _c !== void 0 ? _c : 0;
        const restOverlap = (_d = this.props.restOverlap) !== null && _d !== void 0 ? _d : true;
        const inner = (isRest, idx) => {
            let res = offset + innerGap + this.mWidthPerArc * (idx + 1);
            if (isRest && restOverlap) {
                res += (this.mWidthPerArc - gap) / 4;
            }
            return res;
        };
        const outer = (isRest, idx) => {
            let res = offset + this.mWidthPerArc * (idx + 2);
            if (isRest && restOverlap) {
                res -= gap - (this.mWidthPerArc - gap) / 4;
            }
            return res;
        };
        this.mArcGen = d3.arc()
            .startAngle(0)
            .endAngle((item) => this.perc(item) * 2 * Math.PI)
            .cornerRadius(4)
            .innerRadius((item, idx, count) => inner(false, idx))
            .outerRadius((item, idx, count) => outer(false, idx));
        this.mRestArcGen = d3.arc()
            .startAngle((item) => this.perc(item) * 2 * Math.PI)
            .endAngle(2 * Math.PI)
            .innerRadius((item, idx, count) => inner(true, idx))
            .outerRadius((item, idx, count) => outer(true, idx));
    }
}
exports.default = RadialProgress;
