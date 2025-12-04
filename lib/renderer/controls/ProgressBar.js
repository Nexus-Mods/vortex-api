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
const React = __importStar(require("react"));
const util_1 = require("../../util/util");
/**
 * custom progress bar control, since the one from bootstrap isn't customizable
 * enough
 */
class ProgressBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            startTime: undefined,
            startPos: undefined,
        };
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if ((this.props.now !== newProps.now) && (this.state.startTime === undefined)) {
            this.setState({ startTime: Date.now(), startPos: newProps.now });
        }
    }
    render() {
        const { className, labelLeft, labelRight, showPercentage, showTimeLeft, style, now } = this.props;
        const min = this.props.min || 0;
        const max = this.props.max || 100;
        const percent = Math.floor((now - min) / (max - min) * 100);
        const hasLabel = (labelLeft !== undefined) || (labelRight !== undefined);
        return (React.createElement("div", { className: (className || '') + ' progressbar', style: style },
            React.createElement("div", { className: 'progressbar-container' },
                hasLabel ? this.renderLabels() : null,
                React.createElement("div", { className: 'progressbar-track' },
                    React.createElement("div", { className: 'progressbar-progress', style: { width: `${percent}%` } }))),
            showPercentage ? this.renderPercentage(percent) : null,
            showTimeLeft ? this.renderTimeLeft(percent) : null));
    }
    renderLabels() {
        const { labelLeft, labelRight } = this.props;
        return (React.createElement("div", { className: 'progressbar-labels' },
            React.createElement("div", null, labelLeft || ''),
            React.createElement("div", null, labelRight || '')));
    }
    renderPercentage(percent) {
        const percString = ((percent < 0) || (percent > 100))
            ? '???'
            : `${percent}`;
        return React.createElement("div", { className: 'progressbar-percentage' },
            percString,
            "%");
    }
    renderTimeLeft(percent) {
        const elapsed = Date.now() - this.state.startTime;
        if (Number.isNaN(elapsed) || (percent === 0)) {
            return null;
        }
        const expected = elapsed / (percent / 100);
        const timeString = (elapsed < expected)
            ? (0, util_1.timeToString)((expected - elapsed) / 1000)
            : '???';
        return (React.createElement("div", { className: 'progressbar-timeleft' }, timeString));
    }
}
exports.default = ProgressBar;
