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
const bbcode_to_react_1 = require("bbcode-to-react");
const React = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
class Spoiler extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = () => {
            this.setState({ display: !this.state.display });
        };
        this.state = { display: false };
    }
    render() {
        var _a;
        const { t } = this.props;
        return (React.createElement("div", { className: 'bbcode-spoiler-tag' },
            React.createElement("a", { onClick: this.toggle }, t((_a = this.props.label) !== null && _a !== void 0 ? _a : 'More')),
            this.state.display ? (React.createElement("div", { className: 'bbcode-spoiler-content' }, this.props.content)) : null));
    }
}
const SpoilerTrans = (0, react_i18next_1.withTranslation)(['common'])(Spoiler);
class SpoilerTag extends bbcode_to_react_1.Tag {
    toHTML() {
        return [this.getContent()];
    }
    toReact() {
        return React.createElement(SpoilerTrans, { content: this.getComponents(), label: this.params.label });
    }
}
exports.default = SpoilerTag;
