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
const ErrorBoundary_1 = __importDefault(require("../controls/ErrorBoundary"));
const ExtensionGate_1 = __importDefault(require("../controls/ExtensionGate"));
const ComponentEx_1 = require("../../util/ComponentEx");
const React = __importStar(require("react"));
class DialogContainer extends React.Component {
    render() {
        const { objects } = this.props;
        return (React.createElement("div", { id: "dialog-container" }, objects.map((dialog) => this.renderDialog(dialog))));
    }
    renderDialog(dialog) {
        const { onHideDialog, visibleDialog } = this.props;
        const props = dialog.props !== undefined ? dialog.props() : {};
        return (React.createElement(ErrorBoundary_1.default, { key: dialog.id, className: "errorboundary-dialog", canDisplayError: false, visible: dialog.id === visibleDialog, onHide: onHideDialog },
            React.createElement(ExtensionGate_1.default, { id: dialog.id },
                React.createElement(dialog.component, Object.assign({ visible: dialog.id === visibleDialog, onHide: onHideDialog }, props)))));
    }
}
function registerDialog(instanceGroup, id, component, props) {
    return { id, component, props };
}
exports.default = (0, ComponentEx_1.extend)(registerDialog)(DialogContainer);
