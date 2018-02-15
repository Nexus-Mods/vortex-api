"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../util/ComponentEx");
const ExtensionProvider_1 = require("../util/ExtensionProvider");
const util_1 = require("../util/util");
const React = require("react");
const timers_1 = require("timers");
class Banner extends React.Component {
    constructor() {
        super(...arguments);
        this.mCurrentBanner = 0;
        this.renderBanner = (banner, idx) => {
            return (React.createElement("div", { key: idx, className: idx === this.mCurrentBanner ? 'active' : undefined },
                React.createElement(banner.component, null)));
        };
        this.setRef = ref => {
            this.mRef = ref;
        };
        this.cycle = () => {
            if (util_1.truthy(this.mRef)) {
                this.mRef.childNodes.item(this.mCurrentBanner).attributes.removeNamedItem('class');
                this.mCurrentBanner = (this.mCurrentBanner + 1) % this.mBanners.length;
                const attr = document.createAttribute('class');
                attr.value = 'active';
                this.mRef.childNodes.item(this.mCurrentBanner).attributes.setNamedItem(attr);
            }
        };
    }
    componentWillMount() {
        timers_1.setInterval(this.cycle, this.props.cycleTime || 15000);
    }
    render() {
        const { className, objects, style } = this.props;
        this.mBanners = objects.filter((obj, idx) => (obj.options.condition === undefined) || obj.options.condition(this.props[idx]));
        const classes = className !== undefined ? className.split(' ') : [];
        classes.push('banner');
        return (this.mBanners.length > 0) ? (React.createElement("div", { className: classes.join(' '), style: style, ref: this.setRef }, this.mBanners.map(this.renderBanner))) : null;
    }
}
function registerBanner(instanceProps, group, component, options) {
    if (instanceProps.group === group) {
        return { component, options };
    }
    else {
        return undefined;
    }
}
function mapStateToProps(state, ownProps) {
    return (ownProps.objects || []).reduce((prev, banner, idx) => {
        const props = banner.options.props;
        if (props !== undefined) {
            prev[idx] = Object.keys(props).reduce((propsPrev, key) => {
                propsPrev[key] = props[key](state);
                return propsPrev;
            }, {});
        }
        return prev;
    }, {});
}
exports.default = ExtensionProvider_1.extend(registerBanner)(ComponentEx_1.connect(mapStateToProps)(Banner));
