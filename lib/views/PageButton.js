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
const Icon_1 = __importDefault(require("../controls/Icon"));
const Spinner_1 = __importDefault(require("../controls/Spinner"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
class PageButton extends React.Component {
    componentDidMount() {
        const { page } = this.props;
        if (page.badge) {
            page.badge.attach(this);
        }
        if (page.activity) {
            page.activity.attach(this);
        }
    }
    componentWillUnmount() {
        const { page } = this.props;
        if (page.badge) {
            page.badge.detach(this);
        }
        if (page.activity) {
            page.activity.detach(this);
        }
    }
    render() {
        const { t, namespace, page } = this.props;
        return (React.createElement("div", null,
            React.createElement(Icon_1.default, { name: page.icon }),
            React.createElement("span", { className: 'menu-label' }, t(page.title, { ns: namespace })),
            this.renderBadge(),
            this.renderActivity()));
    }
    renderBadge() {
        const { page } = this.props;
        if (page.badge === undefined) {
            return null;
        }
        return React.createElement(react_bootstrap_1.Badge, null, page.badge.calculate());
    }
    renderActivity() {
        const { page } = this.props;
        if ((page.activity === undefined) || !page.activity.calculate()) {
            return null;
        }
        return React.createElement(Spinner_1.default, null);
    }
}
exports.default = PageButton;
