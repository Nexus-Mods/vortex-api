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
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
function appendClasses(old, add) {
    const addStr = add.join(" ");
    return old ? old + " " + addStr : addStr;
}
// minimize but fit the content
const Fixed = (props) => {
    return (React.createElement("div", Object.assign({ className: appendClasses(props.className, ["layout-fixed"]) }, _.omit(props, ["className"])), props.children));
};
// uses all available space for the contents but no more
const Flex = (props) => {
    let outerClasses = ["layout-flex"];
    if (props.className) {
        outerClasses = outerClasses.concat(props.className.split(" ").map((cl) => cl + "-outer"));
    }
    const classes = ["layout-flex-inner"];
    if (props.fill === true) {
        classes.push("layout-flex-fill");
    }
    return (React.createElement("div", { className: outerClasses.join(" ") },
        React.createElement("div", Object.assign({ className: appendClasses(props.className, classes) }, _.omit(props, ["className", "fill"])), props.children)));
};
// flexbox based layouting class
class FlexLayout extends React.PureComponent {
    render() {
        const { fill, style, type } = this.props;
        const relayProps = _.omit(this.props, ["className", "fill", "style"]);
        const fullStyle = Object.assign(Object.assign({}, style), { flexDirection: type });
        const classes = ["layout-container", `layout-container-${type}`];
        if (fill !== false) {
            classes.push("layout-fill");
        }
        return (React.createElement("div", Object.assign({ className: appendClasses(this.props.className, classes), style: fullStyle }, relayProps), this.props.children));
    }
}
FlexLayout.Fixed = Fixed;
FlexLayout.Flex = Flex;
exports.default = FlexLayout;
