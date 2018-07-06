"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Advanced_1 = require("../../../controls/Advanced");
const IconBar_1 = require("../../../controls/IconBar");
const OverlayTrigger_1 = require("../../../controls/OverlayTrigger");
const TooltipControls_1 = require("../../../controls/TooltipControls");
const ComponentEx_1 = require("../../../util/ComponentEx");
const GameInfoPopover_1 = require("./GameInfoPopover");
const path = require("path");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
/**
 * thumbnail + controls for a single game mode within the game picker
 *
 * @class GameThumbnail
 */
class GameRow extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.mRef = null;
        this.setRef = ref => {
            this.mRef = ref;
        };
        this.redraw = () => {
            if (this.mRef !== null) {
                this.mRef.hide();
                setTimeout(() => this.mRef.show(), 100);
            }
        };
        this.openLocation = () => {
            this.props.onBrowseGameLocation(this.props.game.id);
        };
    }
    render() {
        const { t, active, container, discovery, game, getBounds, onRefreshGameInfo, type } = this.props;
        if (game === undefined) {
            return null;
        }
        const logoPath = path.join(game.extensionPath, game.logo);
        const location = (discovery !== undefined) && (discovery.path !== undefined)
            ? (React.createElement(Advanced_1.default, null,
                React.createElement("a", { onClick: this.openLocation }, discovery.path),
                discovery.path)) : React.createElement("a", { onClick: this.openLocation }, t('Browse...'));
        const classes = ['game-list-item'];
        if (active) {
            classes.push('game-list-selected');
        }
        const gameInfoPopover = (React.createElement(react_bootstrap_1.Popover, { id: `popover-info-${game.id}` },
            React.createElement(GameInfoPopover_1.default, { t: t, game: game, onChange: this.redraw, onRefreshGameInfo: onRefreshGameInfo })));
        return (React.createElement(react_bootstrap_1.ListGroupItem, { className: classes.join(' ') },
            React.createElement(react_bootstrap_1.Media, null,
                React.createElement(react_bootstrap_1.Media.Left, null,
                    React.createElement("div", { className: 'game-thumbnail-container-list' },
                        React.createElement("img", { className: 'game-thumbnail-img-list', src: logoPath }))),
                React.createElement(react_bootstrap_1.Media.Body, null,
                    React.createElement(react_bootstrap_1.Media.Heading, null, t(game.name)),
                    React.createElement("p", null,
                        "Location: ",
                        location)),
                React.createElement(react_bootstrap_1.Media.Right, null,
                    React.createElement(OverlayTrigger_1.default, { triggerRef: this.setRef, getBounds: getBounds, container: container, overlay: gameInfoPopover, orientation: 'horizontal', shouldUpdatePosition: true, trigger: 'click', rootClose: true },
                        React.createElement(TooltipControls_1.IconButton, { id: `btn-info-${game.id}`, icon: 'details', className: 'btn-embed', tooltip: t('Show Details') })),
                    React.createElement(IconBar_1.default, { className: 'btngroup-game-list', group: `game-${type}-buttons`, instanceId: game.id, staticElements: [], collapse: true, t: t })))));
    }
}
exports.default = GameRow;
