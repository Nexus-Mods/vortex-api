"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../util/ComponentEx");
const ExtensionProvider_1 = require("../util/ExtensionProvider");
const util_1 = require("../util/util");
const _ = require("lodash");
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
        const { bannerProps, className, objects, style } = this.props;
        this.mBanners = objects.filter((obj, idx) => (obj.options.condition === undefined) || obj.options.condition(bannerProps[idx]));
        const classes = className !== undefined ? className.split(' ') : [];
        classes.push('banner');
        return (this.mBanners.length > 0) ? (React.createElement("div", { className: classes.join(' '), style: style, ref: this.setRef }, this.mBanners.map(this.renderBanner))) : null;
    }
}
function registerBanner(instanceGroup, group, component, options) {
    if (instanceGroup === group) {
        return { component, options };
    }
    else {
        return undefined;
    }
}
let lastBannerProps;
function mapStateToProps(state, ownProps) {
    const bannerProps = (ownProps.objects || []).reduce((prev, banner, idx) => {
        const props = banner.options.props;
        if (props !== undefined) {
            prev[idx] = Object.keys(props).reduce((propsPrev, key) => {
                propsPrev[key] = props[key](state);
                return propsPrev;
            }, {});
        }
        return prev;
    }, {});
    if (!_.isEqual(lastBannerProps, bannerProps)) {
        lastBannerProps = bannerProps;
    }
    return {
        bannerProps: lastBannerProps,
    };
}
exports.default = ExtensionProvider_1.extend(registerBanner, 'group')(ComponentEx_1.connect(mapStateToProps)(Banner));
