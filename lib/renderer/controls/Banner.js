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
const ComponentEx_1 = require("../../util/ComponentEx");
const ExtensionProvider_1 = require("../../util/ExtensionProvider");
const util_1 = require("../../util/util");
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const timers_1 = require("timers");
class Banner extends React.Component {
    constructor() {
        super(...arguments);
        this.mCurrentBanner = 0;
        this.renderBanner = (banner, idx) => {
            return (React.createElement("div", { key: idx, className: idx === this.mCurrentBanner ? "active" : undefined },
                React.createElement(banner.component, null)));
        };
        this.setRef = (ref) => {
            this.mRef = ref;
        };
        this.cycle = () => {
            var _a, _b, _c, _d;
            if ((0, util_1.truthy)(this.mRef)) {
                const prev = this.mRef.childNodes.item(this.mCurrentBanner);
                (_b = (_a = prev === null || prev === void 0 ? void 0 : prev.attributes) === null || _a === void 0 ? void 0 : _a.removeNamedItem) === null || _b === void 0 ? void 0 : _b.call(_a, "class");
                this.mCurrentBanner = (this.mCurrentBanner + 1) % this.mBanners.length;
                const attr = document.createAttribute("class");
                attr.value = "active";
                const current = this.mRef.childNodes.item(this.mCurrentBanner);
                (_d = (_c = current === null || current === void 0 ? void 0 : current.attributes) === null || _c === void 0 ? void 0 : _c.setNamedItem) === null || _d === void 0 ? void 0 : _d.call(_c, attr);
            }
        };
    }
    componentDidMount() {
        (0, timers_1.setInterval)(this.cycle, this.props.cycleTime || 15000);
    }
    render() {
        const { bannerProps, className, objects, style } = this.props;
        this.mBanners = objects.filter((obj, idx) => obj.options.condition === undefined ||
            obj.options.condition(bannerProps[idx]));
        const classes = className !== undefined ? className.split(" ") : [];
        classes.push("banner");
        return this.mBanners.length > 0 ? (React.createElement("div", { className: classes.join(" "), style: style, ref: this.setRef }, this.mBanners.map(this.renderBanner))) : null;
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
exports.default = (0, ExtensionProvider_1.extend)(registerBanner, "group")((0, ComponentEx_1.connect)(mapStateToProps)(Banner));
