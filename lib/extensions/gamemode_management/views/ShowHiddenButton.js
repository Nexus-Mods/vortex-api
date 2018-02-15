"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToolbarIcon_1 = require("../../../controls/ToolbarIcon");
const ComponentEx_1 = require("../../../util/ComponentEx");
const React = require("react");
class ShowHiddenButton extends ComponentEx_1.ComponentEx {
    render() {
        const { t, buttonType, showHidden, toggleHidden } = this.props;
        return (React.createElement(ToolbarIcon_1.default, { id: 'show-hidden-games', text: showHidden ? t('Hide hidden games') : t('Show hidden games'), onClick: toggleHidden, icon: showHidden ? 'hide' : 'show' }));
    }
}
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.connect()(ShowHiddenButton));
