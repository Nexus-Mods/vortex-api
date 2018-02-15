"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("./Icon");
const React = require("react");
class Step extends React.Component {
    render() {
        const { description, index, state, title } = this.props;
        return (React.createElement("div", { className: `steps-step ${state}` },
            React.createElement("div", { className: 'steps-step-number' }, state === 'done' ? React.createElement(Icon_1.default, { name: 'feedback-success' }) : index + 1),
            React.createElement("div", { className: 'steps-step-main' },
                React.createElement("div", { className: 'steps-step-title' }, title))));
    }
}
exports.default = Step;
