"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("./Icon");
const React = require("react");
class EmptyPlaceholder extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { fill, icon, subtext, text } = this.props;
        const classes = ['placeholder'];
        if (fill) {
            classes.push('fill-parent');
        }
        return (React.createElement("div", { className: classes.join(' ') },
            React.createElement(Icon_1.default, { name: icon }),
            React.createElement("div", { className: 'placeholder-text' }, text),
            subtext !== undefined
                ? typeof (subtext) === 'string'
                    ? React.createElement("div", { className: 'placeholder-subtext' }, subtext)
                    : subtext
                : null));
    }
}
exports.default = EmptyPlaceholder;
