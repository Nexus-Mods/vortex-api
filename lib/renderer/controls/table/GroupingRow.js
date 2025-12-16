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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_ID = void 0;
const ComponentEx_1 = require("../../../util/ComponentEx");
const ContextMenu_1 = __importDefault(require("../ContextMenu"));
const Icon_1 = __importDefault(require("../Icon"));
const MyTable_1 = require("./MyTable");
const React = __importStar(require("react"));
exports.EMPTY_ID = "<Unspecified>";
class GroupingRow extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.toggleGroup = () => {
            const { expanded, groupId, onToggle } = this.props;
            onToggle(groupId, !expanded);
        };
        this.onContext = (event) => {
            this.setState({ context: { x: event.clientX, y: event.clientY } });
        };
        this.onHideContext = () => {
            this.setState({ context: undefined });
        };
        this.initState({
            context: undefined,
        });
        this.mContextActions = [
            {
                title: this.props.t("Expand all"),
                action: this.props.onExpandAll,
                show: true,
            },
            {
                title: this.props.t("Collapse all"),
                action: this.props.onCollapseAll,
                show: true,
            },
        ];
    }
    render() {
        const { t, count, expanded, groupId, groupName, width } = this.props;
        const { context } = this.state;
        return (React.createElement(MyTable_1.TR, { key: `group-${groupId}`, onContextMenu: this.onContext },
            React.createElement(MyTable_1.TD, { className: "table-group-header", "data-group": groupId, onClick: this.toggleGroup, colSpan: width },
                React.createElement(ContextMenu_1.default, { instanceId: groupId, actions: this.mContextActions, visible: context !== undefined, position: context, onHide: this.onHideContext }),
                React.createElement(Icon_1.default, { name: expanded ? "showhide-down" : "showhide-right" }),
                t(groupName) || t(exports.EMPTY_ID),
                " (",
                count,
                ")")));
    }
}
exports.default = GroupingRow;
