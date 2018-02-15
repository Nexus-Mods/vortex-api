"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Step_1 = require("./Step");
const _ = require("lodash");
const React = require("react");
class Steps extends React.Component {
    render() {
        const { step } = this.props;
        const childArray = React.Children.toArray(this.props.children);
        const stepIdx = childArray
            .findIndex(child => child.props.stepId === step);
        const newChildren = childArray.reduce((prev, value, idx) => {
            if (idx !== 0) {
                prev.push(React.createElement("hr", { key: idx }));
            }
            prev.push(React.cloneElement(value, {
                index: idx,
                state: this.classByIdx(stepIdx, idx),
            }));
            return prev;
        }, []);
        return (React.createElement("div", Object.assign({ className: 'steps' }, _.omit(this.props, ['step'])), newChildren));
    }
    classByIdx(currentIdx, itemIdx) {
        return itemIdx < currentIdx
            ? 'done'
            : itemIdx === currentIdx
                ? 'current'
                : 'future';
    }
}
Steps.Step = Step_1.default;
exports.default = Steps;
