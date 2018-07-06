"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("../../../controls/Icon");
const IconBar_1 = require("../../../controls/IconBar");
const OverlayTrigger_1 = require("../../../controls/OverlayTrigger");
const TooltipControls_1 = require("../../../controls/TooltipControls");
const ComponentEx_1 = require("../../../util/ComponentEx");
const storeHelper_1 = require("../../../util/storeHelper");
const util_1 = require("../../../util/util");
const GameInfoPopover_1 = require("./GameInfoPopover");
const path = require("path");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
/**
 * thumbnail + controls for a single game mode within the game picker
 *
 * @class GameThumbnail
 */
class GameThumbnail extends ComponentEx_1.PureComponentEx {
    constructor() {
        super(...arguments);
        this.mRef = null;
        this.priorityButtons = (action) => action.position < 100;
        this.lowPriorityButtons = (action) => action.position >= 100;
        this.getWindowBounds = () => {
            return {
                top: 0,
                left: 0,
                height: window.innerHeight,
                width: window.innerWidth,
                bottom: window.innerHeight,
                right: window.innerWidth,
            };
        };
        this.setRef = ref => {
            this.mRef = ref;
        };
        this.redraw = () => {
            if (this.mRef !== null) {
                this.mRef.hide();
                setTimeout(() => {
                    if (this.mRef !== null) {
                        this.mRef.show();
                    }
                }, 100);
            }
        };
    }
    render() {
        const { t, active, container, game, getBounds, onRefreshGameInfo, profile, type } = this.props;
        if (game === undefined) {
            return null;
        }
        const logoPath = path.join(game.extensionPath, game.logo);
        const modCount = profile !== undefined
            ? util_1.countIf(Object.keys(profile.modState || {}), id => profile.modState[id].enabled)
            : undefined;
        const PanelX = react_bootstrap_1.Panel;
        return (React.createElement(react_bootstrap_1.Panel, { bsClass: 'game-thumbnail', bsStyle: active ? 'primary' : 'default' },
            React.createElement(PanelX.Body, null,
                React.createElement("img", { className: 'thumbnail-img', src: logoPath }),
                React.createElement("div", { className: 'bottom' },
                    React.createElement("div", { className: 'name' }, t(game.name)),
                    modCount !== undefined
                        ? React.createElement("div", { className: 'active-mods' },
                            React.createElement(Icon_1.default, { name: 'mods' }),
                            React.createElement("span", null, t('{{ count }} active mod', { count: modCount })))
                        : null),
                React.createElement("div", { className: 'hover-menu' }, type === 'launcher' ? this.renderLaunch() : this.renderMenu()))));
    }
    renderLaunch() {
        const { onLaunch } = this.props;
        return (React.createElement("div", { className: 'hover-content hover-launcher' },
            React.createElement(react_bootstrap_1.Button, { style: { width: '100%', height: '100%' }, onClick: onLaunch, className: 'btn-embed' },
                React.createElement(Icon_1.default, { name: 'launch-application' }))));
    }
    renderMenu() {
        const { t, container, game, getBounds, onRefreshGameInfo, type } = this.props;
        const gameInfoPopover = (React.createElement(react_bootstrap_1.Popover, { id: `popover-info-${game.id}`, className: 'popover-game-info' },
            React.createElement(IconBar_1.default, { id: `game-thumbnail-${game.id}`, className: 'buttons', group: `game-${type}-buttons`, instanceId: game.id, staticElements: [], collapse: false, buttonType: 'text', orientation: 'vertical', filter: this.lowPriorityButtons, t: t }),
            React.createElement(GameInfoPopover_1.default, { t: t, game: game, onRefreshGameInfo: onRefreshGameInfo, onChange: this.redraw })));
        return [(React.createElement("div", { key: 'primary-buttons', className: 'hover-content' },
                React.createElement(IconBar_1.default, { id: `game-thumbnail-${game.id}`, className: 'buttons', group: `game-${type}-buttons`, instanceId: game.id, staticElements: [], collapse: false, buttonType: 'text', orientation: 'vertical', filter: this.priorityButtons, clickAnywhere: true, t: t }))), (React.createElement(OverlayTrigger_1.default, { key: 'info-overlay', overlay: gameInfoPopover, triggerRef: this.setRef, getBounds: getBounds || this.getWindowBounds, container: container, orientation: 'horizontal', shouldUpdatePosition: true, trigger: 'click', rootClose: true },
                React.createElement(TooltipControls_1.IconButton, { id: `btn-info-${game.id}`, icon: 'game-menu', className: 'game-thumbnail-info btn-embed', tooltip: t('Show Details') })))];
    }
}
function mapStateToProps(state, ownProps) {
    const profiles = state.persistent.profiles;
    const lastActiveProfile = storeHelper_1.getSafe(state.settings.profiles, ['lastActiveProfile', ownProps.game.id], undefined);
    return {
        profile: lastActiveProfile !== undefined ? profiles[lastActiveProfile] : undefined,
    };
}
exports.default = ComponentEx_1.connect(mapStateToProps)(GameThumbnail);
