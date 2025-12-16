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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Step_1 = __importDefault(require("./Step"));
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
class Steps extends React.Component {
    render() {
        const { step } = this.props;
        const childArray = React.Children.toArray(this.props.children);
        const stepIdx = childArray.findIndex((child) => child.props.stepId === step);
        const newChildren = childArray.reduce((prev, value, idx) => {
            if (idx !== 0) {
                prev.push(React.createElement("hr", { key: idx }));
            }
            prev.push(React.cloneElement(value, {
                index: idx,
                state: this.classByIdx(stepIdx, idx),
            }));
            return prev;
        }, []);
        return (React.createElement("div", Object.assign({ className: "steps" }, _.omit(this.props, ["step"])), newChildren));
    }
    classByIdx(currentIdx, itemIdx) {
        return itemIdx < currentIdx
            ? "done"
            : itemIdx === currentIdx
                ? "current"
                : "future";
    }
}
Steps.Step = Step_1.default;
exports.default = Steps;
