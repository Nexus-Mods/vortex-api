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
const __1 = require("..");
const notifications_1 = require("../actions/notifications");
const EmptyPlaceholder_1 = __importDefault(require("../controls/EmptyPlaceholder"));
const Spinner_1 = __importDefault(require("../controls/Spinner"));
const TooltipControls_1 = require("../controls/TooltipControls");
const session_1 = require("../reducers/session");
const ComponentEx_1 = require("../util/ComponentEx");
const Debouncer_1 = __importDefault(require("../util/Debouncer"));
const log_1 = require("../util/log");
const message_1 = require("../util/message");
const selectors_1 = require("../util/selectors");
const StarterInfo_1 = __importDefault(require("../util/StarterInfo"));
const storeHelper_1 = require("../util/storeHelper");
const util_1 = require("../util/util");
const bluebird_1 = __importDefault(require("bluebird"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const url_1 = require("url");
class QuickLauncher extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mCacheDebouncer = new Debouncer_1.default(() => {
            this.nextState.gameIconCache = this.genGameIconCache();
            return bluebird_1.default.resolve();
        }, 100);
        this.renderGameOption = (gameId) => {
            var _a;
            const { t, discoveredGames, lastActiveProfile, profiles, profilesVisible } = this.props;
            const { gameIconCache } = this.state;
            if ((gameIconCache === undefined) || (gameIconCache[gameId] === undefined)) {
                (0, log_1.log)('error', 'failed to access game icon', { gameId });
                return '';
            }
            const discovered = discoveredGames[gameId];
            const iconPath = (gameIconCache[gameId].icon !== undefined)
                ? (0, url_1.pathToFileURL)(gameIconCache[gameId].icon).href.replace('\'', '%27')
                : undefined;
            const game = gameIconCache[gameId].game;
            const profile = profiles[lastActiveProfile[gameId]];
            let displayName = (0, storeHelper_1.getSafe)(discovered, ['shortName'], (0, storeHelper_1.getSafe)(game, ['shortName'], undefined))
                || (0, storeHelper_1.getSafe)(discovered, ['name'], (0, storeHelper_1.getSafe)(game, ['name'], undefined));
            if (displayName !== undefined) {
                displayName = displayName.replace(/\t/g, ' ');
            }
            return (React.createElement("div", { className: 'tool-icon-container', style: { background: `url('${iconPath}')` } },
                React.createElement("div", { className: 'quicklaunch-item' },
                    React.createElement("div", { className: 'quicklaunch-name' }, t(displayName)),
                    profilesVisible
                        ? (React.createElement("div", { className: 'quicklaunch-profile' },
                            t('Profile'),
                            " : ", (_a = profile === null || profile === void 0 ? void 0 : profile.name) !== null && _a !== void 0 ? _a : t('<None>'))) : null)));
        };
        this.changeGame = (gameId) => {
            if (gameId === '__more') {
                this.context.api.events.emit('show-main-page', 'Games');
            }
            else {
                this.context.api.events.emit('activate-game', gameId);
            }
        };
        this.start = () => {
            const { onShowError } = this.props;
            const { starter } = this.state;
            if ((starter === null || starter === void 0 ? void 0 : starter.exePath) === undefined) {
                onShowError('Tool missing/misconfigured', 'Please ensure that the tool/game is configured correctly and try again', false);
                return;
            }
            this.context.api.events.emit('analytics-track-click-event', 'Header', 'Play game');
            const state = this.context.api.store.getState();
            const profile = (0, selectors_1.activeProfile)(state);
            const currentModsState = __1.util.getSafe(profile, ['modState'], false);
            // Get total number of enabled mods (this includes collections)
            const enabledMods = Object.keys(currentModsState).filter(modId => __1.util.getSafe(currentModsState, [modId, 'enabled'], false));
            // Get total number of collections for game
            const gameMods = state.persistent.mods[profile.gameId] || {};
            const collections = Object.values(gameMods).filter((val) => (val.type == 'collection')).map((val) => val.id);
            // Determine enabled collections
            const enabledCollections = collections.filter((collectionId) => enabledMods.includes(collectionId));
            const numberOfEnabledCollections = enabledCollections.length;
            const numberOfEnabledModsExcludingCollections = enabledMods.length - numberOfEnabledCollections;
            (0, log_1.log)('info', `Enabled mods at game launch: ${numberOfEnabledModsExcludingCollections}`);
            (0, log_1.log)('info', `Enabled collections at game launch: ${numberOfEnabledCollections}`);
            // this.context.api.events.emit('analytics-track-event-with-payload', 'Launch game', {
            //   game_id: profile.gameId,
            //   enabled_mods: numberOfEnabledModsExcludingCollections,
            //   enabled_collections: numberOfEnabledCollections
            // });
            StarterInfo_1.default.run(starter, this.context.api, onShowError);
        };
        this.initState({ starter: this.makeStarter(props), gameIconCache: this.genGameIconCache() });
    }
    componentDidMount() {
        this.context.api.events.on('quick-launch', this.start);
    }
    componentWillUnmount() {
        this.context.api.events.removeListener('quick-launch', this.start);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if ((nextProps.discoveredTools !== this.props.discoveredTools)
            || (nextProps.game !== this.props.game)
            || (nextProps.gameDiscovery !== this.props.primaryTool)) {
            this.nextState.starter = this.makeStarter(nextProps);
        }
        if ((nextProps.profiles !== this.props.profiles)
            || (nextProps.discoveredGames !== this.props.discoveredGames)) {
            this.mCacheDebouncer.schedule();
        }
    }
    render() {
        const { t, game, toolsRunning } = this.props;
        const { starter } = this.state;
        if (starter === undefined) {
            return null;
        }
        const exclusiveRunning = Object.keys(toolsRunning).find(exeId => toolsRunning[exeId].exclusive) !== undefined;
        const primaryRunning = ((0, util_1.truthy)(starter.exePath))
            && Object.keys(toolsRunning).find(exeId => exeId === (0, session_1.makeExeId)(starter.exePath)) !== undefined;
        return (React.createElement("div", { className: 'container-quicklaunch' },
            React.createElement(react_bootstrap_1.DropdownButton, { id: 'dropdown-quicklaunch', className: 'btn-quicklaunch', title: this.renderGameOption(game.id), key: game.id, onSelect: this.changeGame, noCaret: true }, this.renderGameOptions()),
            React.createElement("div", { className: 'container-quicklaunch-launch' }, exclusiveRunning || primaryRunning ? (React.createElement(Spinner_1.default, null)) : (React.createElement(TooltipControls_1.IconButton, { id: 'btn-quicklaunch-play', onClick: this.start, tooltip: t('Launch'), icon: 'launch-application' })))));
    }
    renderGameOptions() {
        const { t, discoveredGames, game } = this.props;
        const { gameIconCache } = this.state;
        if (Object.keys(gameIconCache).length === 1) {
            return (React.createElement(react_bootstrap_1.MenuItem, { key: 'no-other-games', disabled: true },
                React.createElement(EmptyPlaceholder_1.default, { icon: 'layout-list', text: t('No other games managed') })));
        }
        return Object.keys(gameIconCache)
            .filter(gameId => gameId !== game.id)
            .filter(gameId => !(0, storeHelper_1.getSafe)(discoveredGames, [gameId, 'hidden'], false))
            .map(gameId => (React.createElement(react_bootstrap_1.MenuItem, { key: gameId, eventKey: gameId }, this.renderGameOption(gameId))));
    }
    genGameIconCache() {
        const { discoveredGames, knownGames, profiles } = this.props;
        const managedGamesIds = Array.from(new Set(Object.keys(profiles)
            .map(profileId => profiles[profileId].gameId)
            .filter(gameId => (0, util_1.truthy)((0, storeHelper_1.getSafe)(discoveredGames, [gameId, 'path'], undefined)))));
        return managedGamesIds.reduce((prev, gameId) => {
            const game = knownGames.find(iter => iter.id === gameId);
            if ((game === undefined) || (discoveredGames[gameId] === undefined)) {
                return prev;
            }
            prev[gameId] = {
                icon: StarterInfo_1.default.getGameIcon(game, discoveredGames[gameId]),
                game,
            };
            return prev;
        }, {});
    }
    makeStarter(props) {
        const { discoveredTools, game, gameDiscovery, primaryTool } = props;
        if ((gameDiscovery === undefined)
            || (gameDiscovery.path === undefined)
            || ((game === undefined) && (gameDiscovery.id === undefined))) {
            return undefined;
        }
        try {
            if (!(0, util_1.truthy)(primaryTool)
                || ((game.supportedTools[primaryTool] === undefined)
                    && (discoveredTools[primaryTool] === undefined))) {
                return new StarterInfo_1.default(game, gameDiscovery);
            }
            else {
                try {
                    if ((0, util_1.truthy)(discoveredTools[primaryTool].path)) {
                        return new StarterInfo_1.default(game, gameDiscovery, game !== undefined ? game.supportedTools[primaryTool] : undefined, discoveredTools[primaryTool]);
                    }
                    else {
                        // Annoying, but a valid issue where for some reason the tool's
                        //  path has been manually deleted by the user OR is undefined.
                        throw new Error('invalid path to primary tool');
                    }
                }
                catch (err) {
                    (0, log_1.log)('warn', 'invalid primary tool', { err });
                    return new StarterInfo_1.default(game, gameDiscovery);
                }
            }
        }
        catch (err) {
            (0, log_1.log)('error', 'failed to create quick launcher entry', { error: err.message, stack: err.stack });
            return undefined;
        }
    }
}
function mapStateToProps(state) {
    const gameMode = (0, selectors_1.activeGameId)(state);
    return {
        gameMode,
        game: (0, selectors_1.currentGame)(state),
        gameDiscovery: (0, selectors_1.currentGameDiscovery)(state),
        discoveredTools: (0, storeHelper_1.getSafe)(state, ['settings', 'gameMode',
            'discovered', gameMode, 'tools'], {}),
        primaryTool: (0, storeHelper_1.getSafe)(state, ['settings', 'interface', 'primaryTool', gameMode], undefined),
        tabsMinimized: (0, storeHelper_1.getSafe)(state, ['settings', 'window', 'tabsMinimized'], false),
        knownGames: state.session.gameMode.known,
        profiles: state.persistent.profiles,
        discoveredGames: state.settings.gameMode.discovered,
        profilesVisible: state.settings.interface.profilesVisible,
        lastActiveProfile: state.settings.profiles.lastActiveProfile,
        toolsRunning: state.session.base.toolsRunning,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onShowError: (message, details, allowReport) => (0, message_1.showError)(dispatch, message, details, { allowReport }),
        onShowDialog: (type, title, content, actions) => dispatch((0, notifications_1.showDialog)(type, title, content, actions)),
    };
}
exports.default = (0, ComponentEx_1.translate)(['common'])((0, ComponentEx_1.connect)(mapStateToProps, mapDispatchToProps)(QuickLauncher));
