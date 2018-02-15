"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
/**
 * custom progress bar control, since the one from bootstrap isn't customizable
 * enough
 */
class ProgressBar extends React.PureComponent {
    render() {
        const { className, labelLeft, labelRight, showPercentage, now } = this.props;
        const min = this.props.min || 0;
        const max = this.props.max || 100;
        const percent = Math.floor((now - min) / (max - min) * 100);
        const hasLabel = (labelLeft !== undefined) || (labelRight !== undefined);
        return (React.createElement("div", { className: (className || '') + ' progressbar' },
            React.createElement("div", { className: 'progressbar-container' },
                hasLabel ? this.renderLabels() : null,
                React.createElement("div", { className: 'progressbar-track' },
                    React.createElement("div", { className: 'progressbar-progress', style: { width: `${percent}%` } }))),
            showPercentage ? this.renderPercentage(percent) : null));
    }
    renderLabels() {
        const { labelLeft, labelRight } = this.props;
        return (React.createElement("div", { className: 'progressbar-labels' },
            React.createElement("div", null, labelLeft || ''),
            React.createElement("div", null, labelRight || '')));
    }
    renderPercentage(percent) {
        return React.createElement("div", { className: 'progressbar-percentage' },
            percent,
            "%");
    }
}
exports.default = ProgressBar;
