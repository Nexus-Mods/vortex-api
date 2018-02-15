"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProgressBar_1 = require("../../../controls/ProgressBar");
const RadialProgress_1 = require("../../../controls/RadialProgress");
const ComponentEx_1 = require("../../../util/ComponentEx");
const util_1 = require("../../../util/util");
const React = require("react");
class ProgressFooter extends ComponentEx_1.PureComponentEx {
    render() {
        const { t, discovery, slim } = this.props;
        const phaseIds = Object.keys(discovery.phases);
        if (!discovery.running) {
            return null;
        }
        const totalProgress = util_1.sum(phaseIds.map(idx => discovery.phases[idx].progress)) / phaseIds.length;
        if (slim) {
            return (React.createElement("div", null,
                React.createElement("div", { className: 'discovery-footer-label' }, t('Scan')),
                React.createElement(RadialProgress_1.default, { totalRadius: 32, data: [{ min: 0, max: 100, value: totalProgress, class: 'running' }] })));
        }
        else {
            return (React.createElement("div", { className: 'discovery-footer' },
                React.createElement("div", { className: 'discovery-footer-label' }, t('Game discovery')),
                React.createElement(ProgressBar_1.default, { min: 0, max: 100, now: totalProgress })));
        }
    }
}
function mapStateToProps(state) {
    return {
        discovery: state.session.discovery,
    };
}
exports.default = ComponentEx_1.translate(['common'])(ComponentEx_1.connect(mapStateToProps)(ProgressFooter));
