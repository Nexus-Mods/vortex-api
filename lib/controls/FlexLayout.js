"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const React = require("react");
function appendClasses(old, add) {
    const addStr = add.join(' ');
    return old ? old + ' ' + addStr : addStr;
}
// minimize but fit the content
const Fixed = (props) => {
    return (React.createElement("div", Object.assign({ className: appendClasses(props.className, ['layout-fixed']) }, _.omit(props, ['className'])), props.children));
};
// uses all available space for the contents but no more
const Flex = (props) => {
    const classes = ['layout-flex-inner'];
    if (props.fill === true) {
        classes.push('layout-flex-fill');
    }
    return (React.createElement("div", { className: 'layout-flex' },
        React.createElement("div", Object.assign({ className: appendClasses(props.className, classes) }, _.omit(props, ['className', 'fill'])), props.children)));
};
// flexbox based layouting class
class FlexLayout extends React.PureComponent {
    render() {
        const { fill, style, type } = this.props;
        const relayProps = _.omit(this.props, ['className', 'fill', 'style']);
        const fullStyle = Object.assign({}, style, { flexDirection: type });
        const classes = ['layout-container', `layout-container-${type}`];
        if (fill !== false) {
            classes.push('layout-fill');
        }
        return (React.createElement("div", Object.assign({ className: appendClasses(this.props.className, classes), style: fullStyle }, relayProps), this.props.children));
    }
}
FlexLayout.Fixed = Fixed;
FlexLayout.Flex = Flex;
exports.default = FlexLayout;
