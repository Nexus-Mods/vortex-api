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
const ExtensionProvider_1 = require("../util/ExtensionProvider");
const React = __importStar(require("react"));
function ExtensibleControl(props) {
    const { objects, wrapperProps } = props;
    const wrappers = objects.sort((lhs, rhs) => rhs.priority - lhs.priority);
    let cur = React.createElement(React.Fragment, null, props.children);
    for (const wrapper of wrappers) {
        cur = (React.createElement(wrapper.wrapper, Object.assign({}, (wrapperProps !== null && wrapperProps !== void 0 ? wrapperProps : {})), cur));
    }
    return cur;
}
function registerControlWrapper(instanceGroup, group, priority, wrapper) {
    if (instanceGroup === group) {
        return { priority, wrapper };
    }
}
exports.default = (0, ExtensionProvider_1.extend)(registerControlWrapper, 'group')(ExtensibleControl);
