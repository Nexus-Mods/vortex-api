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
const ComponentEx_1 = require("../util/ComponentEx");
const Overlay_1 = __importDefault(require("./Overlay"));
const TooltipControls_1 = require("./TooltipControls");
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_markdown_1 = __importDefault(require("react-markdown"));
const haveKnowledgeBase = (() => {
    let value;
    return (api) => {
        if (value === undefined) {
            // is this expensive? Is it worth caching?
            value = api.events.listenerCount('open-knowledge-base') > 0;
        }
        return value;
    };
})();
/**
 * Component to make additional information available to the user without taking much
 * space. The user only sees a clickable question mark. On click it will show a popover
 * with the info.
 *
 * double-linebreaks can be used in the text to start a new paragraph.
 *
 * @param {IProps} props
 * @returns
 */
class More extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.getRef = () => this.mRef;
        this.setRef = ref => {
            this.mRef = ref;
        };
        this.openWiki = (evt) => {
            this.context.api.events.emit('open-knowledge-base', evt.currentTarget.getAttribute('href').slice(1));
            this.hide();
        };
        this.toggle = evt => {
            evt.preventDefault();
            this.setState({ open: !this.state.open });
        };
        this.hide = () => {
            this.setState({ open: false });
        };
        this.getBounds = () => {
            const { container } = this.props;
            return container !== undefined ? container.getBoundingClientRect() : {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight,
            };
        };
        this.state = {
            open: false,
        };
    }
    render() {
        const { t, children, id, name, orientation, wikiId } = this.props;
        const { open } = this.state;
        if (children === undefined) {
            return null;
        }
        const wikiFooter = (wikiId === undefined) || !haveKnowledgeBase(this.context.api)
            ? null
            : (React.createElement("div", { className: 'more-footer' },
                React.createElement("a", { href: `#${wikiId}`, onClick: this.openWiki }, t('Learn more'))));
        let pCounter = 0;
        const popover = (React.createElement(react_bootstrap_1.Popover, { id: `popover-${id}`, className: 'more-popover', title: name },
            React.createElement(react_markdown_1.default, null, children),
            wikiFooter));
        return (React.createElement("div", { style: { display: 'inline' } },
            React.createElement(Overlay_1.default, { rootClose: true, show: open, onHide: this.hide, orientation: orientation, target: this.getRef, getBounds: this.getBounds }, popover),
            React.createElement("div", { className: 'more-link', ref: this.setRef },
                React.createElement(TooltipControls_1.IconButton, { tooltip: '', onClick: this.toggle, icon: 'details' }))));
    }
}
exports.default = (0, ComponentEx_1.translate)(['common'])(React.memo(More));
