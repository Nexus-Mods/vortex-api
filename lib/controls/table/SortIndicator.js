"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../Icon");
const React = require("react");
function next(direction) {
    switch (direction) {
        case 'asc': return 'desc';
        default: return 'asc';
    }
}
class SortIndicator extends React.Component {
    constructor() {
        super(...arguments);
        this.cycleDirection = () => {
            const { direction, onSetDirection } = this.props;
            onSetDirection(next(direction));
        };
    }
    render() {
        const { direction } = this.props;
        return (React.createElement("div", { style: { display: 'inline' } },
            React.createElement(Icon_1.default, { name: this.icon(direction) })));
    }
    icon(direction) {
        switch (direction) {
            case 'none': return 'sort-none';
            case 'asc': return 'sort-up';
            case 'desc': return 'sort-down';
            default: return 'question';
        }
    }
}
exports.default = SortIndicator;
