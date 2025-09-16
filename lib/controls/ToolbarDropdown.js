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
const Icon_1 = __importDefault(require("./Icon"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
function sharedStart(...input) {
    const inputArrs = input.map(iter => iter.split(' '));
    const diffIdx = inputArrs[0].findIndex((iter, idx) => inputArrs.find(comp => comp[idx] !== iter) !== undefined);
    return inputArrs[0].slice(0, diffIdx).join(' ');
}
class ToolbarDropdownItem extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.invoke = () => {
            const { icon, instanceIds } = this.props;
            icon.action(instanceIds);
        };
    }
    render() {
        const { t, icon } = this.props;
        return (React.createElement(react_bootstrap_1.MenuItem, { onSelect: this.invoke }, t(icon.title)));
    }
}
class ToolbarDropdown extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.invokeDefault = () => {
            const { icons, instanceId } = this.props;
            const def = icons.find(i => i.default);
            if (def !== undefined) {
                def.action(instanceId);
            }
        };
    }
    render() {
        const { t, className, icons, id, instanceId } = this.props;
        let classes = ['toolbar-dropdown'];
        if (className !== undefined) {
            classes = classes.concat(className.split(' '));
        }
        const shared = sharedStart(...icons.map(icon => icon.title || ''));
        const def = icons.find(i => i.default);
        const renderIcon = icon => React.createElement(ToolbarDropdownItem, { t: t, key: icon.title, icon: icon, instanceIds: instanceId });
        if (def !== undefined) {
            return (React.createElement(react_bootstrap_1.Dropdown, { id: id, className: classes.join(' ') },
                React.createElement(react_bootstrap_1.Button, { onClick: this.invokeDefault, className: 'toolbar-dropdown-splitbtn' }, this.renderTitle(shared)),
                React.createElement(react_bootstrap_1.Dropdown.Toggle, null),
                React.createElement(react_bootstrap_1.Dropdown.Menu, null, icons.map(renderIcon))));
        }
        else {
            return (React.createElement(react_bootstrap_1.DropdownButton, { id: id, className: classes.join(' '), title: this.renderTitle(shared) }, icons.map(renderIcon)));
        }
    }
    renderTitle(shared) {
        const { t, icons, buttonType } = this.props;
        const hasIcon = (buttonType === undefined)
            || ['icon', 'both', 'menu'].indexOf(buttonType) !== -1;
        const hasText = (buttonType === undefined)
            || ['text', 'both', 'menu'].indexOf(buttonType) !== -1;
        return (React.createElement("div", null,
            hasIcon ? React.createElement(Icon_1.default, { name: icons[0].icon }) : null,
            hasText ? (React.createElement("div", { className: 'button-text' },
                t(shared),
                "...")) : null));
    }
}
exports.default = ToolbarDropdown;
