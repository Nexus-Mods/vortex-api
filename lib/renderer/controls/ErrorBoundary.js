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
exports.ErrorContext = void 0;
exports.safeCallbacks = safeCallbacks;
const ComponentEx_1 = require("../../util/ComponentEx");
const errorHandling_1 = require("../../util/errorHandling");
const genHash_1 = require("../../util/genHash");
const message_1 = require("../../util/message");
const Icon_1 = __importDefault(require("./Icon"));
const TooltipControls_1 = require("./TooltipControls");
const _ = __importStar(require("lodash"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const application_1 = require("../../util/application");
exports.ErrorContext = React.createContext({
    safeCB: (cb) => cb,
});
class ErrorBoundary extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.report = () => {
            const { events } = this.context.api;
            const { onHide } = this.props;
            const { error, errorInfo } = this.state;
            if (error === undefined || errorInfo === undefined) {
                return;
            }
            if (onHide !== undefined) {
                onHide();
            }
            let errMessage = "Component rendering error\n\n" +
                `Vortex Version: ${(0, application_1.getApplication)().version}\n\n` +
                `${error.stack}`;
            if (errorInfo !== undefined) {
                errMessage += "\n\nComponentStack:" + errorInfo.componentStack + "\n";
            }
            events.emit("report-feedback", error.stack.split("\n")[0], errMessage, [], (0, genHash_1.genHash)(error));
        };
        this.retryRender = () => {
            this.setState({ error: undefined, errorInfo: undefined });
        };
        this.state = {
            error: undefined,
            errorInfo: undefined,
        };
        this.mErrContext = {
            safeCB: (cb) => {
                return (...args) => {
                    try {
                        cb(...args);
                    }
                    catch (err) {
                        this.setState({ error: err });
                    }
                };
            },
        };
    }
    componentDidCatch(error, errorInfo) {
        if (this.props.canDisplayError === false) {
            this.context.api.sendNotification({
                type: "error",
                message: "Failed to render",
                actions: [
                    {
                        title: "More",
                        action: () => {
                            const rendered = (0, message_1.renderError)(error);
                            this.context.api.showDialog("error", "Failed to render", {
                                message: rendered.message,
                                text: rendered.text,
                                options: {
                                    wrap: rendered.wrap,
                                    translated: rendered.translated,
                                },
                                parameters: Object.assign({}, (rendered.parameters || {})),
                            }, [{ label: "Close" }]);
                        },
                    },
                    {
                        title: "Retry",
                        action: () => {
                            this.retryRender();
                        },
                    },
                    {
                        title: "Report",
                        action: () => {
                            this.report();
                        },
                    },
                ],
            });
        }
        this.setState({ error, errorInfo });
    }
    render() {
        const { t, className, canDisplayError, onHide, visible } = this.props;
        const { error } = this.state;
        if (error === undefined) {
            return (React.createElement(exports.ErrorContext.Provider, { value: this.mErrContext }, React.Children.only(this.props.children)));
        }
        else if (canDisplayError === false) {
            return null;
        }
        const classes = (className || "").split(" ");
        classes.push("errorboundary");
        return visible ? (React.createElement("div", { className: classes.join(" ") },
            React.createElement(react_bootstrap_1.Alert, { className: "render-failure", bsStyle: "danger" },
                React.createElement(Icon_1.default, { className: "render-failure-icon", name: "sad" }),
                React.createElement("div", { className: "render-failure-text" }, t("Failed to render.")),
                React.createElement("div", { className: "render-failure-buttons" },
                    (0, errorHandling_1.isOutdated)() || (0, errorHandling_1.didIgnoreError)() ? null : (React.createElement(react_bootstrap_1.Button, { onClick: this.report }, t("Report"))),
                    React.createElement(react_bootstrap_1.Button, { onClick: this.retryRender }, t("Retry"))),
                onHide !== undefined ? (React.createElement(TooltipControls_1.IconButton, { className: "error-boundary-close", tooltip: t("Hide"), icon: "close", onClick: onHide })) : null))) : null;
    }
}
exports.default = (0, ComponentEx_1.translate)(["common"])(ErrorBoundary);
/**
 * Higher-Order-Component that provides the component with a safeCB callback wrapper
 * which will get all exceptions from the callback forwarded to the nearest ErrorBoundary
 * so that they get reported properly instead of remaining unhandled.
 */
function safeCallbacks(ComponentToWrap) {
    // tslint:disable-next-line:class-name
    // return class __SafeCallbackComponent extends React.Component<T, S> {
    const cache = {};
    return (props) => {
        const context = React.useContext(exports.ErrorContext);
        const cachingSafeCB = React.useCallback((cb, depList) => {
            const id = cb.toString();
            if (cache[id] === undefined ||
                (depList !== undefined && !_.isEqual(depList, cache[id].depList))) {
                cache[id] = { cb: context.safeCB(cb, []), depList };
            }
            return cache[id].cb;
        }, [context]);
        return React.createElement(ComponentToWrap, Object.assign(Object.assign({}, props), { safeCB: cachingSafeCB }), props.children);
    };
}
