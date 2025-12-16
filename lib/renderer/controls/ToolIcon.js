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
const Icon_1 = __importDefault(require("./Icon"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const url_1 = require("url");
const TooltipControls_1 = require("./TooltipControls");
const ToolIcon = (props) => {
    var _a;
    const validClass = props.valid ? "valid" : "invalid";
    let iconImage;
    if (props.imageUrl !== undefined) {
        let src = (0, url_1.pathToFileURL)(props.imageUrl).href;
        if (props.imageId !== undefined) {
            src += "?" + props.imageId;
        }
        iconImage = React.createElement(react_bootstrap_1.Image, { src: src, className: "tool-icon " + validClass });
    }
    else {
        iconImage = (React.createElement(Icon_1.default, { name: "executable", className: "tool-icon " + validClass }));
    }
    const classes = (_a = props.classes) !== null && _a !== void 0 ? _a : [];
    const containerClasses = props.isPrimary
        ? ["starter-tool-icon-container", "primary", ...classes]
        : ["starter-tool-icon-container", ...classes];
    return (React.createElement("div", { className: containerClasses.join(" ") },
        iconImage,
        props.isPrimary ? React.createElement("div", { className: "primary-star" }, "\u2605") : null,
        props.valid && props.t ? (React.createElement(TooltipControls_1.IconButton, { icon: "launch-simple", tooltip: props.item.name, onClick: props.onRun, className: "run-tool" })) : null,
        props.children));
};
exports.default = ToolIcon;
