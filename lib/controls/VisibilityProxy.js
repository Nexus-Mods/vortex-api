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
const log_1 = require("../util/log");
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
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
                rootMargin: '360px 0px 360px 0px',
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
        if (target === null) {
            return;
        }
        VisibilityProxy.sInstances.delete(target);
        try {
            VisibilityProxy.getObserver(container).unobserve(target);
        }
        catch (err) {
            // not really critical, just not great for performance
            (0, log_1.log)('warn', 'Failed to unobserve', { err: err.message, id: target.id });
        }
    }
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        VisibilityProxy.observe(this.props.container, node, (visible) => {
            var _a, _b;
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
                this.mVisibleTime = now;
                (_b = (_a = this.props).setVisible) === null || _b === void 0 ? void 0 : _b.call(_a, visible);
            }
        });
    }
    componentWillUnmount() {
        VisibilityProxy.unobserve(this.props.container, ReactDOM.findDOMNode(this));
    }
    render() {
        const { componentClass: Component } = this.props;
        const props = _.omit(this.props, ['container', 'placeholder', 'content', 'visible',
            'setVisible', 'componentClass']);
        const content = (this.props.visible)
            ? this.props.content()
            : this.props.placeholder();
        if (Component === undefined) {
            // return <div className='visibility-proxy-wrap' {...props}>{content}</div>;
            return React.createElement(React.Fragment, null, content);
        }
        else {
            return React.createElement(Component, Object.assign({}, props), content);
        }
    }
}
// need to use maps because the keys aren't PODs
VisibilityProxy.sObservers = new Map();
VisibilityProxy.sInstances = new Map();
exports.default = VisibilityProxy;
