"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dashlet_1 = require("../../../controls/Dashlet");
const EmptyPlaceholder_1 = require("../../../controls/EmptyPlaceholder");
const ComponentEx_1 = require("../../../util/ComponentEx");
const storeHelper_1 = require("../../../util/storeHelper");
const selectors_1 = require("../../profile_management/selectors");
const GameThumbnail_1 = require("./GameThumbnail");
const Promise = require("bluebird");
const React = require("react");
class RecentlyManaged extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.refreshGameInfo = gameId => {
            return new Promise((resolve, reject) => {
                this.context.api.events.emit('refresh-game-info', gameId, err => {
                    if (err !== null) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            });
        };
    }
    render() {
        const { t, discoveredGames, gameMode, lastActiveProfile, knownGames, profiles } = this.props;
        const lastManaged = (id) => storeHelper_1.getSafe(profiles, [storeHelper_1.getSafe(lastActiveProfile, [id], undefined), 'lastActivated'], 0);
        const games = knownGames
            .filter(game => (game.id !== gameMode)
            && (lastManaged(game.id) !== 0)
            && (storeHelper_1.getSafe(discoveredGames, [game.id, 'path'], undefined) !== undefined))
            .sort((lhs, rhs) => lastManaged(rhs.id) - lastManaged(lhs.id))
            .slice(0, 3);
        let content;
        if (games.length === 0) {
            // nothing recently managed
            content = (React.createElement(EmptyPlaceholder_1.default, { icon: 'game', text: t('You don\'t have any recently managed games'), fill: true }));
        }
        else {
            content = (React.createElement("div", { className: 'list-recently-managed' }, games.map(game => (React.createElement(GameThumbnail_1.default, { t: t, key: game.id, game: game, type: 'managed', active: false, onRefreshGameInfo: this.refreshGameInfo })))));
        }
        return (React.createElement(Dashlet_1.default, { title: t('Recently Managed'), className: 'dashlet-recently-managed' }, content));
    }
}
function mapStateToProps(state) {
    return {
        gameMode: selectors_1.activeGameId(state),
        knownGames: state.session.gameMode.known,
        discoveredGames: state.settings.gameMode.discovered,
        lastActiveProfile: state.settings.profiles.lastActiveProfile,
        profiles: state.persistent.profiles,
    };
}
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.connect(mapStateToProps)(RecentlyManaged));
