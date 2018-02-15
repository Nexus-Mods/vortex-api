"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const React = require("react");
function ignoreFunction(lhs, rhs) {
    if (_.isFunction(lhs)) {
        return true;
    }
    return undefined;
}
/**
 * a hack to ensure a component gets rerendered when dynamic props
 * change even though we have no even to react to when that happens.
 * TODO: This is ugly polling, can we find a better way without
 *   uglifying the api for the user?
 *
 * @class DynamicProps
 * @extends {React.Component<any, {}>}
 */
class DynamicProps extends React.Component {
    constructor() {
        super(...arguments);
        this.mLastProps = {};
    }
    componentWillMount() {
        this.mLastProps = this.props.dynamicProps();
    }
    componentDidMount() {
        listeners.push(this);
        if (listeners.length === 1) {
            refreshListeners();
        }
        else {
            this.refreshProps();
        }
    }
    componentWillUnmount() {
        const idx = listeners.indexOf(this);
        if (idx !== -1) {
            listeners.splice(idx, 1);
        }
    }
    refreshProps() {
        const props = this.props.dynamicProps();
        if (!_.isEqualWith(props, this.mLastProps, ignoreFunction)) {
            this.mLastProps = props;
            this.setState({});
        }
    }
    render() {
        return (React.createElement(this.props.component, Object.assign({}, this.props.staticProps, this.mLastProps), this.props.children));
    }
}
const listeners = [];
function refreshListeners() {
    listeners.forEach(listener => listener.refreshProps());
    if (listeners.length > 0) {
        setTimeout(refreshListeners, 500);
    }
}
exports.default = DynamicProps;
