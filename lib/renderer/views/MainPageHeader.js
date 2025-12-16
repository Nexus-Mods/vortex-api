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
const ComponentEx_1 = require("../../util/ComponentEx");
const util_1 = require("../../util/util");
const PropTypes = __importStar(require("prop-types"));
const React = __importStar(require("react"));
const react_overlays_1 = require("react-overlays");
class MainPageHeader extends React.Component {
    shouldComponentUpdate() {
        return true;
    }
    render() {
        if (!(0, util_1.truthy)(this.context.headerPortal())) {
            return null;
        }
        return this.props.mainPage === this.context.page ? (React.createElement(react_overlays_1.Portal, { container: this.context.headerPortal },
            React.createElement("div", { className: "mainpage-header" }, this.props.children))) : null;
    }
}
MainPageHeader.contextTypes = {
    api: PropTypes.object.isRequired,
    headerPortal: PropTypes.func,
    page: PropTypes.string,
};
function mapStateToProps(state) {
    return {
        mainPage: state.session.base.mainPage,
    };
}
exports.default = (0, ComponentEx_1.connect)(mapStateToProps)(MainPageHeader);
