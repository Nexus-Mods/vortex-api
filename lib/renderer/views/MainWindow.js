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
exports.MainWindow = exports.MainContext = void 0;
const session_1 = require("../../actions/session");
const window_1 = require("../../actions/window");
const Banner_1 = __importDefault(require("../controls/Banner"));
const DynDiv_1 = __importDefault(require("../controls/DynDiv"));
const FlexLayout_1 = __importDefault(require("../controls/FlexLayout"));
const Icon_1 = __importDefault(require("../controls/Icon"));
const IconBar_1 = __importDefault(require("../controls/IconBar"));
const ProgressBar_1 = __importDefault(require("../controls/ProgressBar"));
const Spinner_1 = __importDefault(require("../controls/Spinner"));
const TooltipControls_1 = require("../controls/TooltipControls");
const ComponentEx_1 = require("../../util/ComponentEx");
const log_1 = require("../../util/log");
const MutexContext_1 = require("../../util/MutexContext");
const startupSettings_1 = __importDefault(require("../../util/startupSettings"));
const storeHelper_1 = require("../../util/storeHelper");
const util_1 = require("../../util/util");
const Dialog_1 = __importDefault(require("./Dialog"));
const DialogContainer_1 = __importDefault(require("./DialogContainer"));
const DNDContainer_1 = __importDefault(require("./DNDContainer"));
const MainFooter_1 = __importDefault(require("./MainFooter"));
const MainPageContainer_1 = __importDefault(require("./MainPageContainer"));
const NotificationButton_1 = __importDefault(require("./NotificationButton"));
const OverlayContainer_1 = __importDefault(require("./OverlayContainer"));
const PageButton_1 = __importDefault(require("./PageButton"));
const QuickLauncher_1 = __importDefault(require("./QuickLauncher"));
const Settings_1 = __importDefault(require("./Settings"));
const WindowControls_1 = __importDefault(require("./WindowControls"));
const semver = __importStar(require("semver"));
const selectors_1 = require("../../util/selectors");
const getGame_1 = require("../../extensions/gamemode_management/util/getGame");
const immutability_helper_1 = __importDefault(require("immutability-helper"));
const _ = __importStar(require("lodash"));
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
// tslint:disable-next-line:no-submodule-imports
const bootstrapUtils_1 = require("react-bootstrap/lib/utils/bootstrapUtils");
const react_hot_toast_1 = require("react-hot-toast"); // at top
(0, bootstrapUtils_1.addStyle)(react_bootstrap_1.Button, 'secondary');
(0, bootstrapUtils_1.addStyle)(react_bootstrap_1.Button, 'ad');
(0, bootstrapUtils_1.addStyle)(react_bootstrap_1.Button, 'ghost');
(0, bootstrapUtils_1.addStyle)(react_bootstrap_1.Button, 'link');
(0, bootstrapUtils_1.addStyle)(react_bootstrap_1.Button, 'inverted');
exports.MainContext = React.createContext({
    api: undefined,
    getModifiers: undefined,
    menuLayer: undefined,
});
class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.globalButtons = [];
        this.modifiers = { alt: false, ctrl: false, shift: false };
        this.menuLayer = null;
        this.sidebarRef = null;
        this.mutexQueue = (0, MutexContext_1.createQueue)();
        this.getModifiers = () => {
            return this.modifiers;
        };
        this.unblock = (evt) => {
            const id = evt.currentTarget.getAttribute('data-id');
            this.props.api.events.emit(`force-unblock-${id}`);
            this.props.onUnblockUI(id);
        };
        this.updateModifiers = (event) => {
            const newModifiers = {
                alt: event.altKey,
                ctrl: event.ctrlKey,
                shift: event.shiftKey,
            };
            if (!_.isEqual(newModifiers, this.modifiers)) {
                this.modifiers = newModifiers;
            }
        };
        this.updateSize = () => {
            var _a, _b;
            this.updateState({
                hidpi: { $set: ((_b = (_a = global.screen) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 0) > 1920 },
            });
        };
        this.setFocus = () => {
            if (process.env.DEBUG_REACT_RENDERS !== 'true') {
                this.updateState({
                    focused: { $set: true },
                });
            }
        };
        this.unsetFocus = () => {
            if (process.env.DEBUG_REACT_RENDERS !== 'true') {
                this.updateState({
                    focused: { $set: false },
                });
            }
        };
        this.renderPageGroup = ({ title, key }) => {
            const { t, mainPage, objects, tabsMinimized } = this.props;
            const pages = objects.filter(page => {
                try {
                    return (page.group === key) && page.visible();
                }
                catch (err) {
                    (0, log_1.log)('error', 'Failed to determine page visibility', { error: err.message, page: page.id });
                    return false;
                }
            });
            if (key === 'global') {
                pages.push(this.settingsPage);
            }
            if (pages.length === 0) {
                return null;
            }
            const showTitle = !tabsMinimized && (title !== undefined);
            return (React.createElement("div", { key: key },
                showTitle ? React.createElement("p", { className: 'main-nav-group-title' }, t(title)) : null,
                React.createElement(react_bootstrap_1.Nav, { bsStyle: 'pills', stacked: true, activeKey: mainPage, className: 'main-nav-group' }, pages.map(this.renderPageButton))));
        };
        this.setSidebarRef = ref => {
            this.sidebarRef = ref;
            if (this.sidebarRef !== null) {
                this.sidebarRef.setAttribute('style', 'min-width: ' + ref.getBoundingClientRect().width + 'px');
            }
        };
        this.renderPageButton = (page, idx) => {
            const { t, secondaryPage } = this.props;
            return (React.createElement(TooltipControls_1.NavItem, { id: page.id, className: secondaryPage === page.id ? 'secondary' : undefined, key: page.id, eventKey: page.id, tooltip: t(page.title, { ns: page.namespace }), placement: 'right', onClick: this.handleClickPage },
                React.createElement(PageButton_1.default, { t: this.props.t, namespace: page.namespace, page: page })));
        };
        this.setMenuLayer = (ref) => {
            this.menuLayer = ref;
            if (this.menuObserver !== undefined) {
                this.menuObserver.disconnect();
                this.menuObserver = undefined;
            }
            if (ref !== null) {
                let hasChildren = this.menuLayer.children.length > 0;
                this.menuObserver = new MutationObserver(() => {
                    if (this.menuLayer === null) {
                        // shouldn't get here but better make sure
                        return;
                    }
                    const newHasChildren = this.menuLayer.children.length > 0;
                    if (newHasChildren !== hasChildren) {
                        hasChildren = newHasChildren;
                        this.updateState({ menuOpen: { $set: hasChildren } });
                    }
                });
                this.menuObserver.observe(ref, { childList: true });
            }
        };
        this.handleClickPage = (evt) => {
            var _a;
            if (this.props.mainPage !== evt.currentTarget.id) {
                this.setMainPage(evt.currentTarget.id, evt.ctrlKey);
            }
            else {
                // a second click on the same nav item is treated as a request to "reset"
                // the page, as in: return it to its initial state (without canceling any operations).
                // What that means for an individual page, whether it has an actual effect,
                // is up to the individual page.
                const page = this.props.objects.find(iter => iter.id === this.props.mainPage);
                (_a = page === null || page === void 0 ? void 0 : page.onReset) === null || _a === void 0 ? void 0 : _a.call(page);
            }
        };
        this.setMainPage = (pageId, secondary) => {
            // set the page as "loaded", set it as the shown page next frame.
            // this way it gets rendered as hidden once and can then "transition"
            // to visible
            if (this.state.loadedPages.indexOf(pageId) === -1) {
                this.updateState({
                    loadedPages: { $push: [pageId] },
                });
            }
            setImmediate(() => {
                if (secondary && (pageId === this.props.secondaryPage)) {
                    this.props.onSetOpenMainPage('', secondary);
                }
                else {
                    this.props.onSetOpenMainPage(pageId, secondary);
                }
            });
        };
        this.toggleMenu = () => {
            const newMinimized = !this.props.tabsMinimized;
            this.props.onSetTabsMinimized(newMinimized);
            if (this.sidebarTimer !== undefined) {
                clearTimeout(this.sidebarTimer);
                this.sidebarTimer = undefined;
            }
            if (this.sidebarRef !== null) {
                if (newMinimized) {
                    this.sidebarRef.setAttribute('style', '');
                }
                else {
                    this.sidebarTimer = setTimeout(() => {
                        var _a, _b;
                        this.sidebarTimer = undefined;
                        (_b = (_a = this.sidebarRef) === null || _a === void 0 ? void 0 : _a.setAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, 'style', 'min-width:' + this.sidebarRef.getBoundingClientRect().width + 'px');
                    }, 500);
                }
            }
        };
        this.state = this.nextState = {
            showLayer: '',
            loadedPages: [],
            hidpi: false,
            focused: true,
            menuOpen: false,
        };
        this.settingsPage = {
            id: 'application_settings',
            title: 'Settings',
            group: 'global',
            component: Settings_1.default,
            icon: 'settings',
            propsFunc: () => undefined,
            visible: () => true,
        };
        this.applicationButtons = [];
        this.props.api.events.on('show-main-page', pageId => {
            this.setMainPage(pageId, false);
        });
        this.props.api.events.on('refresh-main-page', () => {
            this.forceUpdate();
        });
        this.props.api.events.on('show-modal', id => {
            this.updateState({
                showLayer: { $set: id },
            });
        });
    }
    getChildContext() {
        const { api } = this.props;
        return { api, menuLayer: this.menuLayer, getModifiers: this.getModifiers };
    }
    componentDidMount() {
        if (this.props.objects.length > 0) {
            const def = this.props.objects.sort((lhs, rhs) => lhs.priority - rhs.priority)[0];
            this.setMainPage(def.title, false);
        }
        if (this.props.customTitlebar) {
            document.body.classList.add('custom-titlebar-body');
        }
        this.updateSize();
        window.addEventListener('resize', this.updateSize);
        window.addEventListener('keydown', this.updateModifiers);
        window.addEventListener('keyup', this.updateModifiers);
        window.addEventListener('focus', this.setFocus);
        window.addEventListener('blur', this.unsetFocus);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize);
        window.removeEventListener('keydown', this.updateModifiers);
        window.removeEventListener('keyup', this.updateModifiers);
        window.removeEventListener('focus', this.setFocus);
        window.removeEventListener('blur', this.unsetFocus);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.visibleDialog !== nextProps.visibleDialog
            || this.props.tabsMinimized !== nextProps.tabsMinimized
            || this.props.mainPage !== nextProps.mainPage
            || this.props.secondaryPage !== nextProps.secondaryPage
            || this.props.activeProfileId !== nextProps.activeProfileId
            || this.props.nextProfileId !== nextProps.nextProfileId
            || this.props.progressProfile !== nextProps.progressProfile
            || this.props.userInfo !== nextProps.userInfo
            || this.props.uiBlockers !== nextProps.uiBlockers
            || this.state.showLayer !== nextState.showLayer
            || this.state.hidpi !== nextState.hidpi
            || this.state.focused !== nextState.focused
            || this.state.menuOpen !== nextState.menuOpen;
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        const page = newProps.objects.find(iter => iter.id === newProps.mainPage);
        if ((page !== undefined) && !page.visible()) {
            this.setMainPage('Dashboard', false);
        }
    }
    render() {
        const { activeProfileId, customTitlebar, onHideDialog, nextProfileId, uiBlockers, visibleDialog } = this.props;
        const { focused, hidpi, menuOpen } = this.state;
        const switchingProfile = ((activeProfileId !== nextProfileId) && (0, util_1.truthy)(nextProfileId));
        const classes = [];
        classes.push(hidpi ? 'hidpi' : 'lodpi');
        classes.push(focused ? 'window-focused' : 'window-unfocused');
        if (customTitlebar) {
            // a border around the window if the standard os frame is disabled.
            // this is important to indicate to the user he can resize the window
            // (even though it's not actually this frame that lets him do it)
            classes.push('window-frame');
        }
        if (menuOpen) {
            classes.push('menu-open');
        }
        if (startupSettings_1.default.disableGPU) {
            classes.push('no-gpu-acceleration');
        }
        const uiBlocker = (0, util_1.truthy)(uiBlockers)
            ? Object.keys(uiBlockers).find(() => true)
            : undefined;
        const contextValue = this.getChildContext();
        return (React.createElement(React.Suspense, { fallback: React.createElement(Spinner_1.default, { className: 'suspense-spinner' }) },
            React.createElement(exports.MainContext.Provider, { value: contextValue },
                React.createElement(MutexContext_1.MutexProvider, { value: this.mutexQueue },
                    React.createElement("div", { key: 'main', className: classes.join(' ') },
                        React.createElement("div", { className: 'menu-layer', ref: this.setMenuLayer }),
                        React.createElement(FlexLayout_1.default, { id: 'main-window-content', type: 'column' },
                            this.renderToolbar(switchingProfile),
                            customTitlebar ? React.createElement("div", { className: 'dragbar' }) : null,
                            switchingProfile ? this.renderWait() : this.renderBody()),
                        React.createElement(Dialog_1.default, null),
                        React.createElement(DialogContainer_1.default, { visibleDialog: visibleDialog, onHideDialog: onHideDialog }),
                        React.createElement(OverlayContainer_1.default, null),
                        React.createElement(react_hot_toast_1.Toaster, { position: "bottom-center", reverseOrder: false, toastOptions: {
                                className: 'custom-toast',
                                success: {
                                    className: 'custom-toast toast-success',
                                    iconTheme: {
                                        primary: 'var(--toast-success-primary)',
                                        secondary: 'var(--toast-success-secondary)',
                                    },
                                },
                                error: {
                                    className: 'custom-toast toast-error',
                                    iconTheme: {
                                        primary: 'var(--toast-error-primary)',
                                        secondary: 'var(--toast-error-secondary)',
                                    },
                                }
                            } }),
                        customTitlebar ? React.createElement(WindowControls_1.default, null) : null),
                    (uiBlocker !== undefined)
                        ? this.renderBlocker(uiBlocker, uiBlockers[uiBlocker])
                        : null))));
    }
    renderWait() {
        var _a;
        const { t, onHideDialog, nextProfileId, profiles, progressProfile, visibleDialog } = this.props;
        const progress = (0, storeHelper_1.getSafe)(progressProfile, ['deploying'], undefined);
        const profile = nextProfileId !== undefined ? profiles[nextProfileId] : undefined;
        const control = (progress !== undefined)
            ? React.createElement(ProgressBar_1.default, { labelLeft: progress.text, now: progress.percent, style: { width: '50%' } })
            : React.createElement(Spinner_1.default, { style: { width: 64, height: 64 } });
        return (React.createElement("div", { key: 'wait' },
            React.createElement("div", { className: 'center-content', style: { flexDirection: 'column' } },
                React.createElement("h4", null, t('Switching to Profile: {{name}}', { replace: { name: (_a = profile === null || profile === void 0 ? void 0 : profile.name) !== null && _a !== void 0 ? _a : t('None') } })),
                control),
            React.createElement(Dialog_1.default, null),
            React.createElement(DialogContainer_1.default, { visibleDialog: visibleDialog, onHideDialog: onHideDialog })));
    }
    renderBlocker(id, blocker) {
        const { t } = this.props;
        return (React.createElement("div", { className: 'ui-blocker' },
            React.createElement(Icon_1.default, { name: blocker.icon }),
            React.createElement("div", { className: 'blocker-text' }, blocker.description),
            blocker.mayCancel
                ? (React.createElement(react_bootstrap_1.Button, { "data-id": id, onClick: this.unblock }, t('Cancel')))
                : null));
    }
    updateState(spec) {
        this.nextState = (0, immutability_helper_1.default)(this.nextState, spec);
        this.setState(this.nextState);
    }
    renderToolbar(switchingProfile) {
        var _a;
        const { t, customTitlebar, updateChannel, version } = this.props;
        let parsedVersion = semver.parse(version);
        const prerelease = (_a = parsedVersion === null || parsedVersion === void 0 ? void 0 : parsedVersion.prerelease[0]) !== null && _a !== void 0 ? _a : 'stable';
        const updateChannelClassName = 'toolbar-version-container toolbar-version-' + prerelease;
        const className = customTitlebar ? 'toolbar-app-region' : 'toolbar-default';
        if (switchingProfile) {
            return (React.createElement("div", { className: className }));
        }
        return (React.createElement(FlexLayout_1.default.Fixed, { id: 'main-toolbar', className: className },
            React.createElement(QuickLauncher_1.default, { t: t }),
            React.createElement(Banner_1.default, { group: 'main-toolbar' }),
            React.createElement(DynDiv_1.default, { group: 'main-toolbar' }),
            React.createElement("div", { className: 'flex-fill' }),
            React.createElement("div", { className: 'main-toolbar-right' },
                React.createElement("div", { className: 'toolbar-version' },
                    process.env.IS_PREVIEW_BUILD === 'true' ? React.createElement("div", { className: 'toolbar-version-container toolbar-version-staging' },
                        React.createElement(Icon_1.default, { name: 'conflict' }),
                        React.createElement("div", { className: 'toolbar-version-text' }, "Staging")) : null,
                    process.env.NODE_ENV === 'development' ? React.createElement("div", { className: 'toolbar-version-container toolbar-version-dev' },
                        React.createElement(Icon_1.default, { name: 'mods' }),
                        React.createElement("div", { className: 'toolbar-version-text' }, "Development")) : null,
                    React.createElement("div", { className: updateChannelClassName },
                        prerelease !== 'stable' ? React.createElement(Icon_1.default, { name: 'highlight-lab' }) : null,
                        React.createElement("div", { className: 'toolbar-version-text' }, version))),
                React.createElement("div", { className: 'application-icons-group' },
                    React.createElement(IconBar_1.default, { className: 'application-icons', group: 'application-icons', staticElements: this.applicationButtons, t: t }),
                    React.createElement(NotificationButton_1.default, { id: 'notification-button', hide: switchingProfile }),
                    React.createElement(IconBar_1.default, { id: 'global-icons', className: 'global-icons', group: 'global-icons', staticElements: this.globalButtons, orientation: 'vertical', collapse: true, t: t })))));
    }
    renderBody() {
        const { t, objects, tabsMinimized } = this.props;
        const sbClass = tabsMinimized ? 'sidebar-compact' : 'sidebar-expanded';
        const pages = objects.map(obj => this.renderPage(obj));
        pages.push(this.renderPage(this.settingsPage));
        const state = this.props.api.getState();
        const profile = (0, selectors_1.profileById)(state, this.props.activeProfileId);
        const game = profile !== undefined ? (0, getGame_1.getGame)(profile.gameId) : undefined;
        const gameName = (game === null || game === void 0 ? void 0 : game.shortName) || (game === null || game === void 0 ? void 0 : game.name) || 'Mods';
        const pageGroups = [
            { title: undefined, key: 'dashboard' },
            { title: 'General', key: 'global' },
            { title: gameName, key: 'per-game' },
            { title: 'About', key: 'support' },
        ];
        return (React.createElement(FlexLayout_1.default.Flex, null,
            React.createElement(FlexLayout_1.default, { type: 'row', style: { overflow: 'hidden' } },
                React.createElement(FlexLayout_1.default.Fixed, { id: 'main-nav-sidebar', className: sbClass },
                    React.createElement("div", { id: 'main-nav-container', ref: this.setSidebarRef }, pageGroups.map(this.renderPageGroup)),
                    React.createElement(MainFooter_1.default, { slim: tabsMinimized }),
                    React.createElement(TooltipControls_1.Button, { tooltip: tabsMinimized ? t('Restore') : t('Minimize'), id: 'btn-minimize-menu', onClick: this.toggleMenu, className: 'btn-menu-minimize' },
                        React.createElement(Icon_1.default, { name: tabsMinimized ? 'pane-right' : 'pane-left' }))),
                React.createElement(FlexLayout_1.default.Flex, { fill: true, id: 'main-window-pane' },
                    React.createElement(DNDContainer_1.default, { style: { display: 'flex', flexDirection: 'column', height: '100%' } }, pages)))));
    }
    renderPage(page) {
        const { mainPage, secondaryPage } = this.props;
        const { loadedPages } = this.state;
        if (loadedPages.indexOf(page.id) === -1) {
            // don't render pages that have never been opened
            return null;
        }
        const active = [mainPage, secondaryPage].indexOf(page.id) !== -1;
        return (React.createElement(MainPageContainer_1.default, { key: page.id, page: page, active: active, secondary: secondaryPage === page.id }));
    }
}
exports.MainWindow = MainWindow;
// tslint:disable-next-line:no-unused-variable
MainWindow.childContextTypes = {
    api: PropTypes.object.isRequired,
    menuLayer: PropTypes.object,
    getModifiers: PropTypes.func,
};
function trueFunc() {
    return true;
}
function emptyFunc() {
    return {};
}
function mapStateToProps(state) {
    return {
        tabsMinimized: (0, storeHelper_1.getSafe)(state, ['settings', 'window', 'tabsMinimized'], false),
        visibleDialog: state.session.base.visibleDialog || undefined,
        mainPage: state.session.base.mainPage,
        secondaryPage: state.session.base.secondaryPage,
        activeProfileId: state.settings.profiles.activeProfileId,
        nextProfileId: state.settings.profiles.nextProfileId,
        profiles: state.persistent.profiles,
        progressProfile: (0, storeHelper_1.getSafe)(state.session.base, ['progress', 'profile'], undefined),
        customTitlebar: state.settings.window.customTitlebar,
        userInfo: (0, storeHelper_1.getSafe)(state, ['persistent', 'nexus', 'userInfo'], undefined),
        notifications: state.session.notifications.notifications,
        uiBlockers: state.session.base.uiBlockers,
        version: state.app.appVersion,
        updateChannel: state.settings.update.channel,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetTabsMinimized: (minimized) => dispatch((0, window_1.setTabsMinimized)(minimized)),
        onSetOpenMainPage: (page, secondary) => dispatch((0, session_1.setOpenMainPage)(page, secondary)),
        onHideDialog: () => dispatch((0, session_1.setDialogVisible)(undefined)),
        onUnblockUI: (id) => dispatch((0, session_1.clearUIBlocker)(id)),
    };
}
function registerMainPage(instanceGroup, extInfo, icon, title, component, options) {
    return {
        id: options.id || title,
        icon,
        title,
        component,
        propsFunc: options.props || emptyFunc,
        visible: options.visible || trueFunc,
        group: options.group,
        badge: options.badge,
        activity: options.activity,
        priority: options.priority !== undefined ? options.priority : 100,
        onReset: options.onReset,
        namespace: extInfo.namespace,
    };
}
exports.default = (0, ComponentEx_1.extend)(registerMainPage, undefined, true)((0, ComponentEx_1.connect)(mapStateToProps, mapDispatchToProps)(MainWindow));
