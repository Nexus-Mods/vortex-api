"use strict";
/**
 * Two implementations of embedding web content, both have drawbacks.
 * WebViewOverlay uses the electron BrowserView api, sized automatically to be positioned inside
 * a div in the DOM.
 * Browser functionality seems to be perfect, but it is rendered as a fully separate view on top
 * of the rest of Vortex and can thus not be overlayed. As such it will also not disappear until
 * unmounted (or set to an empty url).
 * Thus care has to be taken how this is utilized or it will appear broken and janky
 *
 * WebviewEmbed uses the chrome <webview> component which integrates better but doesn't seem to
 * forward all events correcty. Specifically we were not able to handle any event when clicking
 * the download button on google drive. (as of Electron 15.1.1)
 */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebviewEmbed = exports.WebviewOverlay = void 0;
const log_1 = require("../util/log");
const util_1 = require("../util/util");
const webview_1 = require("../util/webview");
const electron_1 = require("electron");
const lodash_1 = require("lodash");
const React = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const timers_1 = require("timers");
const RESIZE_EVENTS = ['scroll', 'resize'];
function BrowserView(props) {
    const viewId = React.useRef();
    const container = React.useRef();
    const bounds = React.useRef();
    const updateViewBounds = React.useCallback(() => {
        if ((0, util_1.truthy)(container.current)) {
            const rect = container.current.getBoundingClientRect();
            bounds.current = {
                x: Math.round(rect.left),
                y: Math.round(rect.top),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
            };
            (0, webview_1.positionBrowserView)(viewId.current, bounds.current);
        }
    }, []);
    React.useEffect(() => {
        let wasVisible = true;
        const overlapTest = setInterval(() => {
            if ((0, util_1.truthy)(bounds.current)) {
                // janky way of estimating a position that would be overlapped
                const x = bounds.current.x + bounds.current.width / 2;
                const y1 = bounds.current.y + (bounds.current.height * 0.33);
                const y2 = bounds.current.y + (bounds.current.height * 0.66);
                const ele1 = document.elementFromPoint(x, y1);
                const ele2 = document.elementFromPoint(x, y2);
                const isVisible = (ele1 === container.current) && (ele2 === container.current);
                if (wasVisible !== isVisible) {
                    (0, webview_1.positionBrowserView)(viewId.current, isVisible
                        ? bounds.current
                        : { x: 0, y: 0, width: 0, height: 0 });
                    wasVisible = isVisible;
                }
            }
        }, 1000);
        return () => {
            (0, timers_1.clearInterval)(overlapTest);
        };
    }, []);
    React.useEffect(() => {
        (0, webview_1.updateViewURL)(viewId.current, props.src);
    }, [props.src]);
    React.useEffect(() => {
        const impl = () => __awaiter(this, void 0, void 0, function* () {
            viewId.current = yield (0, webview_1.makeBrowserView)(props.src, Object.keys(props.events));
            RESIZE_EVENTS.forEach(evtId => {
                window.addEventListener(evtId, updateViewBounds);
            });
            Object.keys(props.events)
                .forEach(evtId => {
                electron_1.ipcRenderer.on(`view-${viewId.current}-${evtId}`, (evt, argsJSON) => {
                    props.events[evtId](...JSON.parse(argsJSON));
                });
            });
            updateViewBounds();
        });
        impl();
        return () => {
            (0, webview_1.closeBrowserView)(viewId.current);
            RESIZE_EVENTS.forEach(evtId => {
                window.removeEventListener(evtId, updateViewBounds);
            });
            Object.keys(props.events)
                .forEach(evtId => {
                electron_1.ipcRenderer.removeAllListeners(`view-${viewId.current}-${evtId}`);
            });
        };
    }, []);
    return (React.createElement("div", { ref: container, style: {
            width: '100%',
            height: '100%',
        } }));
}
const emptyObject = {};
class WebviewOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.startLoad = () => {
            const { onLoading } = this.props;
            if (onLoading !== undefined) {
                onLoading(true);
            }
        };
        this.stopLoad = () => {
            const { onLoading } = this.props;
            if (onLoading !== undefined) {
                onLoading(false);
            }
        };
        this.newWindow = (url, frameName, disposition) => {
            const { onNewWindow } = this.props;
            if (onNewWindow !== undefined) {
                onNewWindow(url, disposition);
            }
        };
        this.enterFullscreen = () => {
            const { onFullscreen } = this.props;
            if (onFullscreen !== undefined) {
                onFullscreen(true);
            }
        };
        this.leaveFullscreen = () => {
            const { onFullscreen } = this.props;
            if (onFullscreen !== undefined) {
                onFullscreen(false);
            }
        };
        this.logMessage = (level, message) => {
            if (level > 2) {
                (0, log_1.log)('info', 'from embedded page', { level, message });
            }
        };
        this.state = {
            src: props.src,
        };
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if (this.props.src !== newProps.src) {
            this.setState({ src: newProps.src });
        }
    }
    render() {
        const { events } = this.props;
        return (0, util_1.truthy)(this.props.src) ? (React.createElement(BrowserView, { src: this.state.src, events: Object.assign({ 'did-start-loading': this.startLoad, 'did-stop-loading': this.stopLoad, 'console-message': this.logMessage, 'new-window': this.newWindow, 'enter-html-full-screen': this.enterFullscreen, 'leave-html-full-screen': this.leaveFullscreen }, (events !== null && events !== void 0 ? events : emptyObject)) })) : null;
    }
    loadURL(newUrl) {
        this.setState({ src: newUrl });
    }
}
exports.WebviewOverlay = WebviewOverlay;
class WebviewEmbed extends React.Component {
    constructor() {
        super(...arguments);
        this.startLoad = () => {
            const { onLoading } = this.props;
            if (onLoading !== undefined) {
                onLoading(true);
            }
        };
        this.stopLoad = () => {
            const { onLoading } = this.props;
            if (onLoading !== undefined) {
                onLoading(false);
            }
        };
        this.newWindow = (evt) => {
            const { onNewWindow } = this.props;
            if (onNewWindow !== undefined) {
                onNewWindow(evt.url, evt.disposition);
            }
        };
        this.enterFullscreen = (evt) => {
            const { onFullscreen } = this.props;
            if (onFullscreen !== undefined) {
                onFullscreen(true);
            }
        };
        this.leaveFullscreen = (evt) => {
            const { onFullscreen } = this.props;
            if (onFullscreen !== undefined) {
                onFullscreen(false);
            }
        };
        this.logMessage = (evt) => {
            if (evt.level > 2) {
                (0, log_1.log)('info', 'from embedded page', { level: evt.level, message: evt.message });
            }
        };
    }
    componentDidMount() {
        this.mNode = react_dom_1.default.findDOMNode(this);
        this.mNode.addEventListener('did-start-loading', this.startLoad);
        this.mNode.addEventListener('did-stop-loading', this.stopLoad);
        this.mNode.addEventListener('dom-ready', () => {
            const id = this.mNode['getWebContentsId']();
            electron_1.ipcRenderer.send('webview-dom-ready', id);
            electron_1.ipcRenderer.on('webview-open-url', (_, idInner, url, disposition) => {
                var _a, _b;
                if (id === idInner) {
                    (_b = (_a = this.props).onNewWindow) === null || _b === void 0 ? void 0 : _b.call(_a, url, disposition);
                }
            });
            /*
            (this.mNode as any).insertCSS(
              'body.mediawiki, #content, #mw-pages > table { background-color: #4c4c4c !important }');
            */
            // (this.mNode as any).openDevTools();
        });
        this.mNode.addEventListener('console-message', this.logMessage);
        // this.mNode.addEventListener('new-window', this.newWindow);
        this.mNode.addEventListener('enter-html-full-screen', this.enterFullscreen);
        this.mNode.addEventListener('leave-html-full-screen', this.leaveFullscreen);
    }
    componentWillUnmount() {
        this.mNode.removeEventListener('did-start-loading', this.startLoad);
        this.mNode.removeEventListener('did-stop-loading', this.stopLoad);
        this.mNode.removeEventListener('console-message', this.logMessage);
        // this.mNode.removeEventListener('new-window', this.newWindow);
        this.mNode.removeEventListener('enter-html-full-screen', this.enterFullscreen);
        this.mNode.removeEventListener('leave-html-full-screen', this.leaveFullscreen);
    }
    render() {
        return React.createElement('webview', Object.assign(Object.assign({}, (0, lodash_1.omit)(this.props, ['onLoading', 'onNewWindow', 'onFullscreen', 'events'])), { allowpopups: 'true' }));
    }
    loadURL(newUrl) {
        this.mNode['loadURL'](newUrl);
    }
}
exports.WebviewEmbed = WebviewEmbed;
exports.default = WebviewEmbed;
