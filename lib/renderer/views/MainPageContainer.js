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
const ExtensionGate_1 = __importDefault(require("../controls/ExtensionGate"));
const Icon_1 = __importDefault(require("../controls/Icon"));
const ComponentEx_1 = require("../../util/ComponentEx");
const errorHandling_1 = require("../../util/errorHandling");
const genHash_1 = require("../../util/genHash");
const log_1 = require("../../util/log");
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const application_1 = require("../../util/application");
class MainPageContainer extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.report = () => {
            const { events } = this.context.api;
            const { error, errorInfo } = this.state;
            events.emit("report-feedback", error.stack.split("\n")[0], `Component rendering error

Vortex Version: ${(0, application_1.getApplication)().version},

${error.stack}

ComponentStack:
  ${errorInfo.componentStack}
`, [], (0, genHash_1.genHash)(error));
        };
        this.retryRender = () => {
            this.setState({ error: undefined, errorInfo: undefined });
        };
        this.setHeaderRef = (ref) => {
            if (this.headerRef !== ref) {
                this.headerRef = ref;
                this.forceUpdate();
            }
        };
        this.state = {
            error: undefined,
            errorInfo: undefined,
        };
    }
    getChildContext() {
        const { page } = this.props;
        return {
            api: this.context.api,
            headerPortal: () => this.headerRef,
            page: page.id,
        };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }
    render() {
        const { t, active, page, secondary } = this.props;
        const { error } = this.state;
        const classes = ["main-page"];
        classes.push(active ? "page-active" : "page-hidden");
        if (secondary) {
            classes.push("secondary");
        }
        if (error !== undefined) {
            return (React.createElement("div", { id: `page-${page.id}`, className: classes.join(" ") },
                React.createElement(react_bootstrap_1.Alert, { className: "render-failure", bsStyle: "danger" },
                    React.createElement(Icon_1.default, { className: "render-failure-icon", name: "sad" }),
                    React.createElement("div", { className: "render-failure-text" }, t("Failed to render.")),
                    React.createElement("div", { className: "render-failure-buttons" },
                        (0, errorHandling_1.isOutdated)() || (0, errorHandling_1.didIgnoreError)() ? null : (React.createElement(react_bootstrap_1.Button, { onClick: this.report }, t("Report"))),
                        React.createElement(react_bootstrap_1.Button, { onClick: this.retryRender }, t("Retry"))))));
        }
        try {
            const props = page.propsFunc();
            return (React.createElement("div", { id: `page-${page.id}`, className: classes.join(" ") },
                React.createElement("div", { className: "mainpage-header-container", ref: this.setHeaderRef }),
                React.createElement("div", { className: "mainpage-body-container" },
                    React.createElement(ExtensionGate_1.default, { id: page.id },
                        React.createElement(page.component, Object.assign({ active: active, secondary: secondary }, props))))));
        }
        catch (err) {
            (0, log_1.log)("warn", "error rendering extension main page", { err: err.message });
            return (React.createElement("div", { className: classes.join(" ") },
                React.createElement(react_bootstrap_1.Jumbotron, null,
                    React.createElement("h4", null, t("Unavailable")))));
        }
    }
}
MainPageContainer.childContextTypes = {
    api: PropTypes.object.isRequired,
    headerPortal: PropTypes.func,
    page: PropTypes.string,
};
exports.default = (0, ComponentEx_1.translate)(["common"])(MainPageContainer);
