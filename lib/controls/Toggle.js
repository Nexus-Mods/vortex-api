"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../controls/Icon");
const React = require("react");
class Toggle extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onToggle = () => {
            const { onToggle, checked, dataId } = this.props;
            onToggle(!checked, dataId);
        };
    }
    render() {
        const { children, checked, disabled } = this.props;
        const classes = ['toggle-container'];
        if (disabled === true) {
            classes.push('toggle-disabled');
        }
        return (React.createElement("div", null,
            React.createElement("div", { className: 'toggle-container' },
                React.createElement("div", { className: `toggle toggle-${checked ? 'on' : 'off'}`, onClick: disabled === true ? undefined : this.onToggle },
                    React.createElement("div", { className: 'toggle-track' },
                        React.createElement(Icon_1.default, { name: checked ? 'toggle-enabled' : 'toggle-disabled' })),
                    React.createElement("div", { className: 'toggle-handle' },
                        React.createElement(Icon_1.default, { name: 'riffle', rotate: 90 }))),
                React.createElement("div", null, children))));
    }
}
exports.default = Toggle;
