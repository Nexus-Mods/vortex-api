"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../../../util/ComponentEx");
const util_1 = require("../../../util/util");
const React = require("react");
// tslint:disable-next-line:no-var-requires
const opn = require('opn');
class GameInfoPopover extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mMounted = false;
        this.renderGameInfo = (key) => {
            const { t, gameInfo } = this.props;
            return [
                React.createElement("div", { key: `${key}-title`, className: 'game-info-title' }, t(gameInfo[key].title)),
                (React.createElement("div", { key: `${key}-value`, className: 'game-info-value' }, this.renderValue(gameInfo[key].value, gameInfo[key].type || 'string'))),
            ];
        };
        this.renderValue = (value, type) => {
            const { language } = this.props;
            if (type === 'date') {
                return new Date(value).toLocaleString(language);
            }
            else if (type === 'url') {
                return React.createElement("a", { onClick: this.openUrl, href: value }, value);
            }
            else if (type === 'bytes') {
                return util_1.bytesToString(value);
            }
            else {
                return value;
            }
        };
        this.openUrl = (evt) => {
            evt.preventDefault();
            opn(evt.currentTarget.href).catch(err => undefined);
        };
        this.state = { loading: false };
    }
    componentWillMount() {
        const { game, onRefreshGameInfo } = this.props;
        this.mMounted = true;
        if (onRefreshGameInfo !== undefined) {
            this.setState({ loading: true });
            onRefreshGameInfo(game.id)
                .then(() => {
                if (this.mMounted) {
                    this.setState({ loading: false });
                }
            });
        }
    }
    componentWillUnmount() {
        this.mMounted = false;
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.gameInfo !== nextProps.gameInfo) {
            nextProps.onChange();
        }
    }
    render() {
        const { t, game } = this.props;
        const { loading } = this.state;
        const gameInfo = this.props.gameInfo || {};
        const keysToRender = Object.keys(gameInfo).filter(key => gameInfo[key].value !== null);
        return (React.createElement("div", { className: 'game-info-grid' }, keysToRender.map(this.renderGameInfo)));
    }
}
function mapStateToProps(state, ownProps) {
    return {
        gameInfo: state.persistent.gameMode.gameInfo[ownProps.game.id],
        language: state.settings.interface.language,
    };
}
exports.default = ComponentEx_1.connect(mapStateToProps)(GameInfoPopover);
