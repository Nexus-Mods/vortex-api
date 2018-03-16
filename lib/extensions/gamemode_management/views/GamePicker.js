"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../../../actions/notifications");
const EmptyPlaceholder_1 = require("../../../controls/EmptyPlaceholder");
const FlexLayout_1 = require("../../../controls/FlexLayout");
const IconBar_1 = require("../../../controls/IconBar");
const TooltipControls_1 = require("../../../controls/TooltipControls");
const ComponentEx_1 = require("../../../util/ComponentEx");
const getAttr_1 = require("../../../util/getAttr");
const selectors_1 = require("../../../util/selectors");
const storeHelper_1 = require("../../../util/storeHelper");
const MainPage_1 = require("../../../views/MainPage");
const settings_1 = require("../../gamemode_management/actions/settings");
const settings_2 = require("../actions/settings");
const GameRow_1 = require("./GameRow");
const GameThumbnail_1 = require("./GameThumbnail");
const ShowHiddenButton_1 = require("./ShowHiddenButton");
const update = require("immutability-helper");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
function gameFromDiscovery(id, discovered) {
    return {
        id,
        name: discovered.name,
        shortName: discovered.shortName,
        executable: discovered.executable,
        extensionPath: discovered.extensionPath,
        logo: discovered.logo,
        requiredFiles: [],
        supportedTools: [],
    };
}
/**
 * picker/configuration for game modes
 *
 * @class GamePicker
 */
class GamePicker extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.renderProgress = (phase, idx) => {
            const { discovery } = this.props;
            if (phase === undefined) {
                return React.createElement(react_bootstrap_1.ProgressBar, null);
            }
            return (React.createElement(react_bootstrap_1.ProgressBar, { striped: phase.progress < 100, key: idx, className: `discovery-progress-${idx % 4}`, active: phase.progress < 100, min: 0, max: 100 * Object.keys(discovery.phases).length, now: phase.progress, label: phase.directory }));
        };
        this.setRef = ref => {
            this.mRef = ref;
        };
        this.setScrollRef = ref => {
            this.mScrollRef = ref;
            this.forceUpdate();
        };
        this.getBounds = () => this.mRef.getBoundingClientRect();
        this.getScrollContainer = () => this.mScrollRef;
        this.toggleHidden = () => {
            this.setState(update(this.state, { showHidden: { $set: !this.state.showHidden } }));
        };
        this.setLayoutList = () => {
            this.props.onSetPickerLayout('list');
        };
        this.setLayoutSmall = () => {
            this.props.onSetPickerLayout('small');
        };
        this.startDiscovery = () => {
            this.context.api.events.emit('start-discovery');
        };
        this.stopDiscovery = () => {
            this.context.api.events.emit('cancel-discovery');
        };
        this.renderGames = (games, type) => {
            const { t, gameMode, pickerLayout } = this.props;
            if (games.length === 0) {
                if (type === 'managed') {
                    return (React.createElement(EmptyPlaceholder_1.default, { icon: 'game', text: t('You haven\'t managed any games yet'), subtext: t('To start managing a game, go to "Discovered" and activate a game there.') }));
                }
                else if (type === 'discovered') {
                    return (React.createElement(EmptyPlaceholder_1.default, { icon: 'game', text: t('No games were discovered'), subtext: t('You can manually add a game from "Supported" or start a full disk scan.') }));
                }
            }
            switch (pickerLayout) {
                case 'list': return this.renderGamesList(games, type, gameMode);
                case 'small': return this.renderGamesSmall(games, type, gameMode);
                default: throw new Error('invalid picker layout ' + pickerLayout);
            }
        };
        this.setGamePath = (gameId, gamePath) => {
            this.props.onSetGamePath(gameId, gamePath);
        };
        this.addDiscoveredGame = (gameId, discovery) => {
            this.props.onAddDiscoveredGame(gameId, discovery);
        };
        this.state = {
            showHidden: false,
        };
        this.buttons = [
            {
                component: ShowHiddenButton_1.default,
                props: () => ({ t: this.props.t, showHidden: this.state.showHidden, toggleHidden: this.toggleHidden }),
            },
        ];
    }
    render() {
        const { t, discoveredGames, discovery, knownGames, pickerLayout, profiles } = this.props;
        const { showHidden } = this.state;
        // TODO: lots of computation and it doesn't actually change except through discovery
        //   or when adding a profile
        const displayedGames = showHidden ? knownGames : knownGames.filter((game) => !getAttr_1.default(discoveredGames, game.id, { hidden: false }).hidden);
        const profileGames = new Set(Object.keys(profiles).map((profileId) => profiles[profileId].gameId));
        const managedGameList = [];
        const discoveredGameList = [];
        const supportedGameList = [];
        displayedGames.forEach((game) => {
            if (storeHelper_1.getSafe(discoveredGames, [game.id, 'path'], undefined) !== undefined) {
                if (profileGames.has(game.id)) {
                    managedGameList.push(game);
                }
                else {
                    discoveredGameList.push(game);
                }
            }
            else {
                supportedGameList.push(game);
            }
        });
        Object.keys(discoveredGames).forEach(gameId => {
            if (knownGames.find(game => game.id === gameId) === undefined) {
                if (discoveredGames[gameId].extensionPath === undefined) {
                    return;
                }
                if (profileGames.has(gameId)) {
                    managedGameList.push(gameFromDiscovery(gameId, discoveredGames[gameId]));
                }
                else {
                    discoveredGameList.push(gameFromDiscovery(gameId, discoveredGames[gameId]));
                }
            }
        });
        const title = (text, count) => {
            return (React.createElement("div", { className: 'nav-title' },
                React.createElement("div", { className: 'nav-title-title' }, text),
                React.createElement("div", { className: 'nav-title-count' },
                    "(",
                    count,
                    ")")));
        };
        return (React.createElement(MainPage_1.default, { domRef: this.setRef },
            React.createElement(MainPage_1.default.Header, null,
                React.createElement(IconBar_1.default, { group: 'game-icons', staticElements: this.buttons, className: 'menubar' }),
                React.createElement("div", { className: 'flex-fill' }),
                React.createElement(IconBar_1.default, { id: 'gamepicker-layout-list', group: 'gamepicker-layout-icons', staticElements: [], className: 'menubar' },
                    React.createElement(TooltipControls_1.ToggleButton, { id: 'gamepicker-layout-list', onClick: this.setLayoutList, onIcon: 'layout-list', offIcon: 'layout-list', tooltip: t('List'), offTooltip: t('List'), state: pickerLayout === 'list' },
                        React.createElement("span", { className: 'button-text' }, t('List View'))),
                    React.createElement(TooltipControls_1.ToggleButton, { id: 'gamepicker-layout-grid', onClick: this.setLayoutSmall, onIcon: 'layout-grid', offIcon: 'layout-grid', tooltip: t('Grid'), offTooltip: t('Grid'), state: pickerLayout === 'small' },
                        React.createElement("span", { className: 'button-text' }, t('Grid View'))))),
            React.createElement(MainPage_1.default.Body, null,
                React.createElement(FlexLayout_1.default, { type: 'column', className: 'game-page' },
                    React.createElement(FlexLayout_1.default.Flex, null,
                        React.createElement("div", { ref: this.setScrollRef, className: 'gamepicker-body' },
                            React.createElement(react_bootstrap_1.Tabs, { defaultActiveKey: 'managed', id: 'games-picker-tabs' },
                                React.createElement(react_bootstrap_1.Tab, { eventKey: 'managed', title: title(t('Managed'), managedGameList.length) }, this.renderGames(managedGameList, 'managed')),
                                React.createElement(react_bootstrap_1.Tab, { eventKey: 'discovered', title: title(t('Discovered'), discoveredGameList.length) }, this.renderGames(discoveredGameList, 'discovered')),
                                React.createElement(react_bootstrap_1.Tab, { eventKey: 'supported', title: title(t('Supported'), supportedGameList.length) }, this.renderGames(supportedGameList, 'undiscovered'))))),
                    React.createElement(FlexLayout_1.default.Fixed, null,
                        React.createElement(react_bootstrap_1.Alert, { bsStyle: 'warning' }, "Bug: Search can't be cancelled once started"),
                        React.createElement("div", { className: 'discovery-progress-container' },
                            React.createElement(FlexLayout_1.default.Flex, null,
                                React.createElement(react_bootstrap_1.ProgressBar, null, Object.keys(discovery.phases)
                                    .map(idx => discovery.phases[idx]).map(this.renderProgress))),
                            React.createElement(FlexLayout_1.default.Fixed, null,
                                React.createElement(TooltipControls_1.IconButton, { id: 'start-discovery', icon: discovery.running ? 'stop' : 'search', tooltip: discovery.running ? t('Stop search') : t('Search for games'), onClick: discovery.running ? this.stopDiscovery : this.startDiscovery, disabled: discovery.running }, discovery.running ? t('Stop search') : t('Search for games'))))))),
            React.createElement(MainPage_1.default.Overlay, null,
                React.createElement(IconBar_1.default, { group: 'game-icons', staticElements: this.buttons, orientation: 'vertical' }))));
    }
    renderGamesList(games, type, gameMode) {
        const { t, discoveredGames, onRefreshGameInfo } = this.props;
        return (React.createElement(react_bootstrap_1.ListGroup, null, games.map(game => (React.createElement(GameRow_1.default, { t: t, getBounds: this.getBounds, container: this.mScrollRef, key: game.id, game: game, discovery: discoveredGames[game.id], type: type, active: game.id === gameMode, onRefreshGameInfo: onRefreshGameInfo, onBrowseGameLocation: this.props.onBrowseGameLocation })))));
    }
    renderGamesSmall(games, type, gameMode) {
        const { t, onRefreshGameInfo } = this.props;
        return (React.createElement("div", null,
            React.createElement("div", { className: 'game-group' }, games.map(game => (React.createElement(GameThumbnail_1.default, { t: t, key: game.id, game: game, type: type, active: game.id === gameMode, onRefreshGameInfo: onRefreshGameInfo, getBounds: this.getBounds, container: this.mScrollRef }))))));
    }
}
function mapStateToProps(state) {
    return {
        gameMode: selectors_1.activeGameId(state),
        discoveredGames: state.settings.gameMode.discovered,
        pickerLayout: state.settings.gameMode.pickerLayout || 'list',
        profiles: state.persistent.profiles,
        knownGames: state.session.gameMode.known,
        discovery: state.session.discovery,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onHide: (gameId, hidden) => dispatch(settings_2.setGameHidden(gameId, hidden)),
        onSetPickerLayout: (layout) => dispatch(settings_2.setPickerLayout(layout)),
        onSetGamePath: (gameId, gamePath) => dispatch(settings_1.setGamePath(gameId, gamePath)),
        onAddDiscoveredGame: (gameId, result) => dispatch(settings_2.addDiscoveredGame(gameId, result)),
        onShowDialog: (type, title, content, actions) => dispatch(notifications_1.showDialog(type, title, content, actions)),
    };
}
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.connect(mapStateToProps, mapDispatchToProps)(GamePicker));
