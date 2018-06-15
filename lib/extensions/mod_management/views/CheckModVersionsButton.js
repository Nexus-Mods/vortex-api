"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToolbarIcon_1 = require("../../../controls/ToolbarIcon");
const ComponentEx_1 = require("../../../util/ComponentEx");
const selectors_1 = require("../../../util/selectors");
const React = require("react");
class CheckVersionsButton extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.checkModsVersion = () => {
            const { gameMode, mods } = this.props;
            this.context.api.events.emit('check-mods-version', gameMode, mods);
        };
    }
    render() {
        const { t, buttonType, updateRunning } = this.props;
        if (updateRunning) {
            return (React.createElement(ToolbarIcon_1.default, { id: 'check-mods-version', icon: 'spinner', text: t('Checking for mod updates'), disabled: true }));
        }
        else {
            return (React.createElement(ToolbarIcon_1.default, { id: 'check-mods-version', icon: 'refresh', text: t('Check for mod updates'), onClick: this.checkModsVersion }));
        }
    }
}
function mapStateToProps(state) {
    const gameMode = selectors_1.activeGameId(state);
    return {
        mods: state.persistent.mods[gameMode] || {},
        gameMode,
        updateRunning: state.settings.mods.updatingMods[gameMode],
    };
}
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.connect(mapStateToProps)(CheckVersionsButton));
