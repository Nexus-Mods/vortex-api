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
const session_1 = require("../../actions/session");
const EmptyPlaceholder_1 = __importDefault(require("../controls/EmptyPlaceholder"));
const ComponentEx_1 = require("../../util/ComponentEx");
const lazyRequire_1 = __importDefault(require("../../util/lazyRequire"));
const makeReactive_1 = __importDefault(require("../../util/makeReactive"));
const MainPage_1 = __importDefault(require("./MainPage"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const startupSettings = (0, lazyRequire_1.default)(() => require('../../util/startupSettings'), 'default');
/**
 * settings dialog
 *
 * @class Settings
 * @extends {ComponentEx<ISettingsProps, {}>}
 */
class Settings extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.renderTab = (page) => {
            const { t } = this.props;
            const elements = page.elements
                .filter(ele => (ele.visible === undefined) || ele.visible())
                .sort((lhs, rhs) => lhs.priority - rhs.priority);
            const content = (elements.length > 0)
                ? (React.createElement("div", null, elements.map(this.renderTabElement))) : (React.createElement(EmptyPlaceholder_1.default, { icon: 'settings', text: t('Nothing to configure.'), subtext: t('Other games may require settings here.') }));
            return (React.createElement(react_bootstrap_1.Tab, { key: page.title, eventKey: page.title, title: t(page.title) },
                React.createElement("div", null, content)));
        };
        this.renderTabElement = (page, idx) => {
            const props = page.props !== undefined ? page.props() : {};
            return (React.createElement(react_bootstrap_1.Panel, { key: idx },
                React.createElement(react_bootstrap_1.Panel.Body, null,
                    idx !== 0 ? React.createElement("hr", { style: { marginTop: 0 } }) : null,
                    React.createElement(page.component, Object.assign({}, props, { startup: this.mStartupSettings, changeStartup: this.changeStartup })))));
        };
        this.sortByPriority = (lhs, rhs) => {
            return lhs.priority - rhs.priority;
        };
        this.setCurrentPage = (page) => {
            this.props.onSetPage(page);
        };
        this.changeStartup = (key, value) => {
            this.mStartupSettings[key] = value;
        };
        this.mStartupSettings = (0, makeReactive_1.default)(startupSettings);
    }
    render() {
        const { settingsPage, objects } = this.props;
        const combined = objects.reduce((prev, current) => {
            const result = prev.slice();
            const existingPage = prev.find((ele) => ele.title === current.title);
            if (existingPage === undefined) {
                result.push({ title: current.title, elements: [current], priority: current.priority });
            }
            else {
                existingPage.elements.push(current);
                if ((existingPage.priority === undefined) || (current.priority < existingPage.priority)) {
                    existingPage.priority = current.priority;
                }
            }
            return result;
        }, []);
        const page = combined.find(iter => iter.title === settingsPage) !== undefined
            ? settingsPage : combined[0].title;
        return (React.createElement(MainPage_1.default, null,
            React.createElement(MainPage_1.default.Body, null,
                React.createElement(react_bootstrap_1.Tabs, { id: 'settings-tab', activeKey: page, onSelect: this.setCurrentPage }, combined.sort(this.sortByPriority).map(this.renderTab)))));
    }
}
function registerSettings(instanceGroup, title, component, props, visible, priority) {
    return { title, component, props, visible, priority: priority || 100 };
}
function mapStateToProps(state) {
    return {
        settingsPage: state.session.base.settingsPage || undefined,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetPage: (title) => dispatch((0, session_1.setSettingsPage)(title)),
    };
}
exports.default = (0, ComponentEx_1.translate)(['common'])((0, ComponentEx_1.connect)(mapStateToProps, mapDispatchToProps)((0, ComponentEx_1.extend)(registerSettings)(Settings)));
