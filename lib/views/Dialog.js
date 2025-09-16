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
const actions_1 = require("../actions");
const notifications_1 = require("../actions/notifications");
const Collapse_1 = __importDefault(require("../controls/Collapse"));
const ErrorBoundary_1 = __importDefault(require("../controls/ErrorBoundary"));
const Icon_1 = __importDefault(require("../controls/Icon"));
const Webview_1 = __importDefault(require("../controls/Webview"));
const bbcode_1 = __importDefault(require("../util/bbcode"));
const ComponentEx_1 = require("../util/ComponentEx");
const lazyRequire_1 = __importDefault(require("../util/lazyRequire"));
const MutexContext_1 = require("../util/MutexContext");
const immutability_helper_1 = __importDefault(require("immutability-helper"));
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const ReactDOM = __importStar(require("react-dom"));
const react_markdown_1 = __importDefault(require("react-markdown"));
const remote = (0, lazyRequire_1.default)(() => require('@electron/remote'));
const nop = () => undefined;
class Action extends React.Component {
    constructor() {
        super(...arguments);
        this.focus = ref => {
            if (ref !== null) {
                ReactDOM.findDOMNode(ref).focus();
            }
        };
        this.dismiss = () => {
            const { onDismiss, action } = this.props;
            onDismiss(action);
        };
    }
    render() {
        const { t, action, isDefault, isDisabled } = this.props;
        return (React.createElement(react_bootstrap_1.Button, { id: 'close', onClick: this.dismiss, bsStyle: isDefault ? 'primary' : undefined, ref: isDefault ? this.focus : undefined, disabled: isDisabled }, t(action)));
    }
}
class Dialog extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.handleKeyPress = (evt) => {
            const { conditionResults } = this.state;
            if (!evt.defaultPrevented) {
                const { dialogs } = this.props;
                const dialog = dialogs[0];
                if (evt.key === 'Enter') {
                    if (dialog.defaultAction !== undefined) {
                        evt.preventDefault();
                        const filterFunc = res => res.actions.find(act => act === dialog.defaultAction) !== undefined;
                        const isDisabled = conditionResults.find(filterFunc) !== undefined;
                        if (!isDisabled) {
                            this.dismiss(dialog.defaultAction);
                        }
                    }
                }
            }
        };
        this.renderInput = (input, idx) => {
            const { t } = this.props;
            const { dialogState } = this.state;
            let valRes;
            if (dialogState.condition !== undefined) {
                valRes = this.getValidationResult(input);
            }
            const validationState = valRes !== undefined
                ? (valRes.length !== 0) ? 'error' : 'success'
                : null;
            let effectiveType = input.type || 'text';
            if (input.type === 'multiline') {
                effectiveType = 'text';
            }
            return (React.createElement(react_bootstrap_1.FormGroup, { key: input.id, validationState: validationState },
                input.label ? (React.createElement(react_bootstrap_1.ControlLabel, null, t(input.label))) : null,
                React.createElement(react_bootstrap_1.FormControl, { id: `dialoginput-${input.id}`, componentClass: (input.type === 'multiline') ? 'textarea' : undefined, type: effectiveType, value: input.value || '', label: input.label, placeholder: input.placeholder, onChange: this.changeInput, ref: idx === 0 ? this.focusMe : undefined }),
                ((valRes !== undefined) && (valRes.length !== 0))
                    ? React.createElement("label", { className: 'control-label' }, valRes.map(res => res.errorText).join('\n'))
                    : null));
        };
        this.renderButton = (link, idx) => {
            return (React.createElement("div", { key: idx },
                React.createElement(react_bootstrap_1.Button, { onClick: this.triggerLink, "data-linkidx": idx }, link.label)));
        };
        this.renderLink = (link, idx) => {
            return (React.createElement("div", { key: idx },
                React.createElement("a", { onClick: this.triggerLink, "data-linkidx": idx }, link.label)));
        };
        this.triggerLink = (evt) => {
            evt.preventDefault();
            (0, actions_1.triggerDialogLink)(this.props.dialogs[0].id, evt.currentTarget.getAttribute('data-linkidx'));
        };
        this.renderCheckbox = (checkbox, content) => {
            var _a, _b, _c;
            const { t } = this.props;
            const text = checkbox.bbcode !== undefined
                ? (0, bbcode_1.default)(t(checkbox.bbcode, { replace: content.parameters, count: (_a = content.parameters) === null || _a === void 0 ? void 0 : _a.count }), (_b = content.options) === null || _b === void 0 ? void 0 : _b.bbcodeContext)
                : t(checkbox.text, { replace: content.parameters, count: (_c = content.parameters) === null || _c === void 0 ? void 0 : _c.count });
            return (React.createElement(react_bootstrap_1.Checkbox, { id: checkbox.id, key: checkbox.id, checked: checkbox.value, onChange: this.toggleCheckbox, disabled: checkbox.disabled }, text));
        };
        this.renderRadiobutton = (checkbox) => {
            const { t } = this.props;
            const content = React.createElement("div", null, checkbox.subText !== undefined
                ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: 'choice-maintext' }, t(checkbox.text)),
                    React.createElement("div", { className: 'choice-subtext' }, t(checkbox.subText))))
                :
                    (React.createElement("div", { className: 'choice-text' }, t(checkbox.text))));
            return (React.createElement(react_bootstrap_1.Radio, { id: checkbox.id, key: checkbox.id, name: 'dialog-radio', checked: checkbox.value, onChange: this.toggleRadio, disabled: checkbox.disabled }, content));
        };
        this.focusMe = (ref) => {
            if (ref !== null) {
                const ele = ReactDOM.findDOMNode(ref);
                setTimeout(() => ele.focus(), 100);
            }
        };
        this.changeInput = evt => {
            const { dialogState } = this.state;
            const id = evt.currentTarget.id.split('-').slice(1).join('-');
            const idx = dialogState.input.findIndex(form => form.id === id);
            const newInput = Object.assign({}, dialogState.input[idx]);
            newInput.value = evt.currentTarget.value;
            let newState = (0, immutability_helper_1.default)(this.state, {
                dialogState: {
                    input: { $splice: [[idx, 1, newInput]] },
                },
            });
            const validationResults = this.validateContent(newState.dialogState);
            if (validationResults !== undefined) {
                newState = Object.assign(Object.assign({}, newState), { conditionResults: validationResults });
            }
            this.setState(newState);
        };
        this.toggleCheckbox = (evt) => {
            const { dialogState } = this.state;
            const idx = dialogState.checkboxes.findIndex((box) => {
                return box.id === evt.currentTarget.id;
            });
            if (idx === -1) {
                return;
            }
            const newCheckboxes = JSON.parse(JSON.stringify(dialogState.checkboxes.slice(0)));
            newCheckboxes[idx].value = !newCheckboxes[idx].value;
            let newState = (0, immutability_helper_1.default)(this.state, {
                dialogState: {
                    checkboxes: { $set: newCheckboxes },
                },
            });
            const validationResults = this.validateContent(newState.dialogState);
            if (validationResults !== undefined) {
                newState = Object.assign(Object.assign({}, newState), { conditionResults: validationResults });
            }
            this.setState(newState);
        };
        this.enableMultiple = (enabled = true) => {
            const { dialogState } = this.state;
            const newCheckboxes = JSON.parse(JSON.stringify(dialogState.checkboxes.slice(0)))
                .map(box => (Object.assign(Object.assign({}, box), { value: enabled })));
            let newState = (0, immutability_helper_1.default)(this.state, {
                dialogState: {
                    checkboxes: { $set: newCheckboxes },
                },
            });
            const validationResults = this.validateContent(newState.dialogState);
            if (validationResults !== undefined) {
                newState = Object.assign(Object.assign({}, newState), { conditionResults: validationResults });
            }
            this.setState(newState);
        };
        this.enableAll = () => {
            this.enableMultiple(true);
        };
        this.disableAll = () => {
            this.enableMultiple(false);
        };
        this.toggleRadio = (evt) => {
            const { dialogState } = this.state;
            const idx = dialogState.choices.findIndex((box) => {
                return box.id === evt.currentTarget.id;
            });
            if (idx < 0) {
                return;
            }
            const newChoices = dialogState.choices.map((choice) => (Object.assign(Object.assign({}, choice), { value: false })));
            newChoices[idx].value = true;
            let newState = (0, immutability_helper_1.default)(this.state, {
                dialogState: {
                    choices: { $set: newChoices },
                },
            });
            const validationResults = this.validateContent(newState.dialogState);
            if (validationResults !== undefined) {
                newState = Object.assign(Object.assign({}, newState), { conditionResults: validationResults });
            }
            this.setState(newState);
        };
        this.renderAction = (action, isDefault) => {
            const { conditionResults } = this.state;
            const { t } = this.props;
            const isDisabled = conditionResults
                .find(res => res.actions.find(act => act === action) !== undefined) !== undefined;
            return (React.createElement(Action, { t: t, key: action, action: action, isDefault: isDefault, onDismiss: this.dismiss, isDisabled: isDisabled }));
        };
        this.dismiss = (action) => {
            const { dialogs, onDismiss } = this.props;
            const { dialogState } = this.state;
            const data = {};
            if (dialogState.checkboxes !== undefined) {
                dialogState.checkboxes.forEach((box) => {
                    data[box.id] = box.value;
                });
            }
            if (dialogState.choices !== undefined) {
                dialogState.choices.forEach((box) => {
                    data[box.id] = box.value;
                });
            }
            if (dialogState.input !== undefined) {
                dialogState.input.forEach(input => {
                    data[input.id] = input.value;
                });
            }
            this.setState((0, immutability_helper_1.default)(this.state, {
                currentDialogId: { $set: undefined },
                dialogState: { $set: undefined },
            }));
            onDismiss(dialogs[0].id, action, data);
        };
        this.state = {
            currentDialogId: undefined,
            dialogState: undefined,
            conditionResults: [],
        };
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        var _a, _b;
        if (newProps.dialogs.length > 0) {
            if (newProps.dialogs[0].id !== this.state.currentDialogId) {
                // dialog changed
                let newState = (0, immutability_helper_1.default)(this.state, {
                    currentDialogId: { $set: newProps.dialogs[0].id },
                    dialogState: { $set: newProps.dialogs[0].content },
                });
                const validationResults = this.validateContent(newState.dialogState);
                if (validationResults !== undefined) {
                    newState = Object.assign(Object.assign({}, newState), { conditionResults: validationResults });
                }
                this.setState(newState);
                const window = remote.getCurrentWindow();
                if (window.isMinimized()) {
                    window.restore();
                }
                window.setAlwaysOnTop(true);
                window.show();
                window.setAlwaysOnTop(false);
            }
            else if (((_a = this.props.dialogs[0]) === null || _a === void 0 ? void 0 : _a.content) !== ((_b = newProps.dialogs[0]) === null || _b === void 0 ? void 0 : _b.content)) {
                // same dialog id but maybe the content changed?
                let newState = (0, immutability_helper_1.default)(this.state, {
                    dialogState: { $set: newProps.dialogs[0].content },
                });
                const validationResults = this.validateContent(newState.dialogState);
                if (validationResults !== undefined) {
                    newState = Object.assign(Object.assign({}, newState), { conditionResults: validationResults });
                }
                this.setState(newState);
            }
        }
    }
    componentDidMount() {
        if (this.props.dialogs.length > 0) {
            this.setState((0, immutability_helper_1.default)(this.state, {
                currentDialogId: { $set: this.props.dialogs[0].id },
                dialogState: { $set: this.props.dialogs[0].content },
            }));
        }
    }
    render() {
        var _a;
        const { t, dialogs } = this.props;
        const { dialogState } = this.state;
        const dialog = dialogs.length > 0 ? dialogs[0] : undefined;
        if ((dialog === undefined) || (dialogState === undefined)) {
            return null;
        }
        const type = (dialog.content.htmlFile !== undefined) || (dialog.content.htmlText !== undefined)
            ? 'wide'
            : 'regular';
        return (React.createElement(MutexContext_1.MutexWrapper, { show: dialog !== undefined },
            React.createElement(react_bootstrap_1.Modal, { id: dialog.id, className: `common-dialog-${type}`, show: dialog !== undefined, onHide: nop, onKeyPress: this.handleKeyPress },
                React.createElement(react_bootstrap_1.Modal.Header, null,
                    React.createElement(react_bootstrap_1.Modal.Title, null,
                        this.iconForType(dialog.type),
                        ' ',
                        t(dialog.title, { replace: dialog.content.parameters, count: (_a = dialog.content.parameters) === null || _a === void 0 ? void 0 : _a.count }))),
                React.createElement(react_bootstrap_1.Modal.Body, null,
                    React.createElement(ErrorBoundary_1.default, { visible: true }, this.renderContent(dialogState))),
                React.createElement(react_bootstrap_1.Modal.Footer, null, dialog.actions.map((action) => this.renderAction(action, action === dialog.defaultAction))))));
    }
    translateParts(message, t, parameters) {
        // split by linebreak, then by tab, apply translation function, then join
        // again (replacing tabs with spaces)
        return (message || '')
            .split('\n')
            .map((line) => line
            .split('\t')
            .map((block) => t(block, { replace: parameters, count: parameters === null || parameters === void 0 ? void 0 : parameters.count }))
            .join(' '))
            .join('\n');
    }
    renderContent(content) {
        var _a, _b, _c, _d, _e, _f, _g;
        let { t } = this.props;
        if ((_a = content.options) === null || _a === void 0 ? void 0 : _a.translated) {
            // bit of a hack, setting lngs to empty list so that no translation happens,
            // but we still make use of the i18next interpolator
            t = (input, options) => this.props.t(input, Object.assign(Object.assign({}, options), { lngs: [] }));
        }
        const controls = [];
        if (content.text) {
            controls.push({ id: 'text', control: (React.createElement("div", { key: 'dialog-content-text', className: 'dialog-content-text' }, t(content.text, { replace: content.parameters, count: (_b = content.parameters) === null || _b === void 0 ? void 0 : _b.count }))) });
        }
        if (content.bbcode !== undefined) {
            controls.push({ id: 'bbcode', control: (React.createElement("div", { key: 'dialog-content-bbcode', className: 'dialog-content-bbcode' }, (0, bbcode_1.default)(t(content.bbcode, { replace: content.parameters, count: (_c = content.parameters) === null || _c === void 0 ? void 0 : _c.count }), (_d = content.options) === null || _d === void 0 ? void 0 : _d.bbcodeContext))) });
        }
        if (content.md !== undefined) {
            controls.push({ id: 'md', control: (React.createElement("div", { key: 'dialog-content-markdown', className: 'dialog-content-markdown' },
                    React.createElement(react_markdown_1.default, null, t(content.md, { replace: content.parameters, count: (_e = content.parameters) === null || _e === void 0 ? void 0 : _e.count })))) });
        }
        if (content.message !== undefined) {
            const wrap = ((content.options !== undefined) && (content.options.wrap === true))
                ? 'on' : 'off';
            const ctrl = (React.createElement("textarea", { key: 'dialog-content-message', wrap: wrap, value: this.translateParts(content.message, t, content.parameters), readOnly: true }));
            if ((content.options !== undefined) && (content.options.hideMessage === true)) {
                controls.push({ id: 'message', control: (React.createElement(Collapse_1.default, { key: 'dialog-content-message-wrapper', showText: t('Show Details'), hideText: t('Hide Details') }, ctrl)) });
            }
            else {
                controls.push({ id: 'message', control: ctrl });
            }
        }
        if (content.htmlFile !== undefined) {
            controls.push({ id: 'htmlFile', control: (React.createElement("div", { key: 'dialog-content-html-file' },
                    React.createElement(Webview_1.default, { src: `file://${content.htmlFile}` }))) });
        }
        if (content.htmlText !== undefined) {
            controls.push({ id: 'htmlText', control: (React.createElement("div", { key: 'dialog-content-html-text', className: 'dialog-content-html', dangerouslySetInnerHTML: { __html: content.htmlText } })) });
        }
        if (content.input !== undefined) {
            controls.push({ id: 'input', control: (React.createElement("div", { key: 'dialog-form-content', className: 'dialog-content-input' }, content.input.map(this.renderInput))) });
        }
        if (content.checkboxes !== undefined) {
            controls.push({ id: 'checkboxes', control: (React.createElement("div", { key: 'dialog-content-checkboxes', className: 'dialog-content-choices' },
                    (content.checkboxes.length > 3) ? (React.createElement("div", { className: 'dialog-apply-all-btns' },
                        React.createElement("a", { onClick: this.enableAll }, t('Enable all')),
                        "\u00A0",
                        React.createElement("a", { onClick: this.disableAll }, t('Disable all')))) : null,
                    React.createElement("div", null, content.checkboxes.map(checkbox => this.renderCheckbox(checkbox, content))))) });
        }
        if (content.choices !== undefined) {
            controls.push({ id: 'choices', control: (React.createElement("div", { key: 'dialog-content-choices', className: 'dialog-content-choices' },
                    React.createElement("div", null, content.choices.map(this.renderRadiobutton)))) });
        }
        if (content.links !== undefined) {
            controls.push({ id: 'links', control: (React.createElement("div", { key: 'dialog-form-links' }, content.links.map(((_f = content.options) === null || _f === void 0 ? void 0 : _f.linksAsButtons) ? this.renderButton : this.renderLink))) });
        }
        if (((_g = content.options) === null || _g === void 0 ? void 0 : _g.order) !== undefined) {
            const { order } = content.options;
            controls.sort((lhs, rhs) => {
                const lIdx = order.includes(lhs.id) ? (100 + order.indexOf(lhs.id)) : controls.indexOf(lhs);
                const rIdx = order.includes(rhs.id) ? (100 + order.indexOf(rhs.id)) : controls.indexOf(rhs);
                return lIdx - rIdx;
            });
        }
        return React.createElement("div", { className: 'dialog-container' }, controls.map(iter => iter.control));
    }
    validateContent(dialogState) {
        const { conditionResults } = this.state;
        if ((conditionResults === undefined) || (dialogState.condition === undefined)) {
            return undefined;
        }
        return dialogState.condition(dialogState);
    }
    getValidationResult(input) {
        const { conditionResults } = this.state;
        return conditionResults.filter(res => res.id === input.id);
    }
    iconForType(type) {
        switch (type) {
            case 'info': return (React.createElement(Icon_1.default, { name: 'dialog-info', className: 'icon-info' }));
            case 'error': return (React.createElement(Icon_1.default, { name: 'dialog-error', className: 'icon-error' }));
            case 'question': return (React.createElement(Icon_1.default, { name: 'dialog-question', className: 'icon-question' }));
            default: return null;
        }
    }
}
function mapStateToProps(state) {
    return {
        dialogs: state.session.notifications.dialogs,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onDismiss: (id, action, input) => dispatch((0, notifications_1.closeDialog)(id, action, input)),
    };
}
exports.default = (0, ComponentEx_1.translate)(['common'])((0, ComponentEx_1.connect)(mapStateToProps, mapDispatchToProps)(Dialog));
