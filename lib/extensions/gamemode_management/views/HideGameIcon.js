"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToolbarIcon_1 = require("../../../controls/ToolbarIcon");
const ComponentEx_1 = require("../../../util/ComponentEx");
const storeHelper_1 = require("../../../util/storeHelper");
const settings_1 = require("../actions/settings");
const React = require("react");
class HideGameIcon extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.toggleHidden = () => {
            const { instanceId, gamesDiscovered, onSetGameHidden } = this.props;
            const hidden = storeHelper_1.getSafe(gamesDiscovered, [instanceId, 'hidden'], false);
            onSetGameHidden(instanceId, !hidden);
        };
    }
    render() {
        const { buttonType, instanceId, gamesDiscovered } = this.props;
        const t = this.context.api.translate;
        const hidden = storeHelper_1.getSafe(gamesDiscovered, [instanceId, 'hidden'], false);
        const icon = hidden ? 'show' : 'hide';
        const text = hidden ? t('Show') : t('Hide');
        return (React.createElement(ToolbarIcon_1.default, { id: `hide-${instanceId}`, icon: (['icon', 'both'].indexOf(buttonType) !== -1) ? icon : undefined, text: (['text', 'both'].indexOf(buttonType) !== -1) ? text : undefined, onClick: this.toggleHidden }));
    }
}
function mapStateToProps(state) {
    return {
        gamesDiscovered: state.settings.gameMode.discovered,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetGameHidden: (gameId, hidden) => dispatch(settings_1.setGameHidden(gameId, hidden)),
    };
}
exports.default = ComponentEx_1.connect(mapStateToProps, mapDispatchToProps)(HideGameIcon);
