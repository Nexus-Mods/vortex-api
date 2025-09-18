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
const ComponentEx_1 = require("../util/ComponentEx");
const React = __importStar(require("react"));
/**
 * Footer on the main window. Can be extended
 * @class MainFooter
 */
class MainFooter extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.renderFooter = (footer) => {
            const { slim } = this.props;
            const props = footer.props !== undefined ? footer.props() : {};
            return React.createElement(footer.component, Object.assign({ key: footer.id, slim: slim }, props));
        };
    }
    render() {
        const { objects } = this.props;
        return (React.createElement("div", { id: 'main-footer' }, objects.map(this.renderFooter)));
    }
}
function registerFooter(instanceGroup, id, component, props) {
    return { id, component, props };
}
exports.default = (0, ComponentEx_1.translate)(['common'])((0, ComponentEx_1.extend)(registerFooter)(MainFooter));
