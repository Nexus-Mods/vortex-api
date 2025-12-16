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
const React = __importStar(require("react"));
const debugMissingIcons = process.env.NODE_ENV === "development";
const debugReported = new Set();
/**
 * renders a svg icon (as an instance/ref of a globally defined svg)
 */
class Icon extends React.Component {
    constructor() {
        super(...arguments);
        this.setRef = (ref) => {
            if (ref !== null) {
                const { width, height } = ref.getBoundingClientRect();
                this.mCurrentSize = { width, height };
                this.forceUpdate();
                if (this.props.rotateId !== undefined) {
                    Icon.sCache[this.props.rotateId] = this.mCurrentSize;
                }
            }
        };
    }
    componentDidMount() {
        this.setIcon(this.props);
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        this.setIcon(newProps);
    }
    render() {
        const { name, style, svgStyle } = this.props;
        let classes = ["icon", `icon-${name}`];
        // avoid using css for transforms. For one thing this is more flexible but more importantly
        // it has no interactions with other css. For example css transforms tend to break z ordering
        const transforms = [];
        if (this.props.spin || name === "spinner") {
            classes.push("icon-spin");
        }
        if (this.props.pulse) {
            classes.push("icon-pulse");
        }
        if (this.props.border) {
            classes.push("icon-border");
        }
        if (this.props.stroke) {
            classes.push("icon-stroke");
        }
        if (this.props.hollow) {
            classes.push("icon-hollow");
        }
        if (this.props.flip) {
            transforms.push(this.props.flip === "horizontal" ? `scale(-1, 1)` : `scale(1, -1)`);
        }
        const effectiveStyle = Object.assign({}, style);
        if (this.props.rotate) {
            // narf... I can't use css transform for the rotation because that somehow
            // messes up the z-ordering of items.
            // with svg transforms we have to provide the center of rotation ourselves
            // and we can't use relative units.
            /*
            if (this.mCurrentSize !== undefined) {
              const { width, height } = this.mCurrentSize;
              transforms.push(
                `rotate(${this.props.rotate}, ${Math.floor(width / 2)}, ${Math.floor(height / 2)})`);
            }
            */
            effectiveStyle.transform = `rotateZ(${this.props.rotate}deg)`;
            effectiveStyle.transformStyle = "preserve-3d";
        }
        if (this.props.className !== undefined) {
            classes = classes.concat(this.props.className.split(" "));
        }
        return (React.createElement("svg", { preserveAspectRatio: "xMidYMid meet", className: classes.join(" "), style: effectiveStyle, ref: 
            /*this.props.rotate && (this.mCurrentSize === undefined) ? this.setRef : */ undefined, onContextMenu: this.props.onContextMenu },
            svgStyle !== undefined ? (React.createElement("style", { type: "text/css" }, svgStyle)) : null,
            React.createElement("use", { className: "svg-use", xlinkHref: `#icon-${name}`, transform: transforms.join(" ") })));
    }
    setIcon(props) {
        const set = props.set || "icons";
        props.getSet(set).then((requiredSet) => {
            if (debugMissingIcons &&
                requiredSet !== null &&
                !requiredSet.has("icon-" + props.name) &&
                !debugReported.has(props.name)) {
                // tslint:disable-next-line:no-console
                console.trace("icon missing", props.name);
                debugReported.add(props.name);
            }
        });
        if (props.rotate &&
            props.rotateId !== undefined &&
            this.mCurrentSize === undefined) {
            this.mCurrentSize = Icon.sCache[props.rotateId];
        }
    }
}
Icon.sCache = {};
exports.default = Icon;
