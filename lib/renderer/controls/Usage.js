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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const actions_1 = require("../../actions");
const ComponentEx_1 = require("../../util/ComponentEx");
const TooltipControls_1 = require("./TooltipControls");
class Usage extends ComponentEx_1.PureComponentEx {
    render() {
        const { t, persistent, show, opaque } = this.props;
        const classes = ['usage-instructions'];
        if (!opaque) {
            classes.push('usage-instructions-transparent');
        }
        classes.push(show ? 'usage-instructions-show' : 'usage-instructions-hide');
        if (this.props.className !== undefined) {
            classes.push(...this.props.className.split(' '));
        }
        if (show) {
            return (React.createElement("div", { className: classes.join(' ') },
                React.createElement("div", { className: 'usage-instructions-content' },
                    React.createElement("div", null, this.props.children)),
                React.createElement(TooltipControls_1.IconButton, { className: 'close-button', id: 'btn-close-login', onClick: this.props.onHide, tooltip: t('Close'), icon: 'close' })));
        }
        else if (persistent) {
            return (React.createElement("div", { className: classes.join(' '), onClick: this.props.onShow }, t('Show Usage Instructions')));
        }
        else {
            return null;
        }
    }
}
function mapStateToProps(state, ownProps) {
    return {
        show: state.settings.interface.usage[ownProps.infoId] !== false,
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    const { infoId } = ownProps;
    return {
        onShow: () => { dispatch((0, actions_1.showUsageInstruction)(infoId, true)); },
        onHide: () => { dispatch((0, actions_1.showUsageInstruction)(infoId, false)); },
    };
}
exports.default = (0, ComponentEx_1.translate)(['common'])((0, ComponentEx_1.connect)(mapStateToProps, mapDispatchToProps)(Usage));
