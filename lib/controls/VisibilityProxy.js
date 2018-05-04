"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const React = require("react");
const ReactDOM = require("react-dom");
/**
 * proxy component that delays loading of a control until it comes into view
 *
 * @class VisibilityProxy
 * @extends {React.Component<IProps, IState>}
 */
class VisibilityProxy extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.mLastVisible = false;
        this.mVisibleTime = 0;
    }
    static getObserver(container) {
        if (!VisibilityProxy.sObservers.has(container || null)) {
            VisibilityProxy.sObservers.set(container || null, new IntersectionObserver(VisibilityProxy.callback, {
                root: container,
                rootMargin: '90px 0px 90px 0px',
            }));
        }
        return VisibilityProxy.sObservers.get(container);
    }
    static callback(entries, observer) {
        entries.forEach(entry => {
            const cb = VisibilityProxy.sInstances.get(entry.target);
            if (cb !== undefined) {
                cb(entry.isIntersecting);
            }
        });
    }
    static observe(container, target, cb) {
        VisibilityProxy.sInstances.set(target, cb);
        VisibilityProxy.getObserver(container).observe(target);
    }
    static unobserve(container, target) {
        VisibilityProxy.sInstances.delete(target);
        VisibilityProxy.getObserver(container).unobserve(target);
    }
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        VisibilityProxy.observe(this.props.container, node, (visible) => {
            const now = Date.now();
            // workaround: There is the situation where when an element becomes visible it
            //   changes the layout around it which in turn pushes the element somwhere where it
            //   _isn't_ visible anymore, triggering an endless loop of the element switching
            //   between visible and invisible. Hence we don't turn items invisible if it
            //   became visible less than a second ago. Since the observer is flank triggered
            //   this may cause items to be rendered even though they don't have to but this
            //   is a performance optimisation anyway, nothing breaks.
            if ((this.mLastVisible !== visible) &&
                (visible || (now - this.mVisibleTime) > 1000.0)) {
                this.mLastVisible = visible;
                this.props.setVisible(visible);
            }
        });
    }
    componentWillUnmount() {
        VisibilityProxy.unobserve(this.props.container, ReactDOM.findDOMNode(this));
    }
    render() {
        return (React.createElement("div", Object.assign({}, _.omit(this.props, ['container', 'placeholder', 'content', 'visible', 'setVisible'])), (this.props.visible)
            ? this.props.content()
            : this.props.placeholder()));
    }
}
// need to use maps because the keys aren't PODs
VisibilityProxy.sObservers = new Map();
VisibilityProxy.sInstances = new Map();
exports.default = VisibilityProxy;
