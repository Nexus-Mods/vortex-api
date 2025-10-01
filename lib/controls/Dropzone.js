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
const notifications_1 = require("../actions/notifications");
const ComponentEx_1 = require("../util/ComponentEx");
const util_1 = require("../util/util");
const Icon_1 = __importDefault(require("./Icon"));
const electron_1 = require("electron");
const React = __importStar(require("react"));
class Dropzone extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mWrapperMode = false;
        this.onDragEnter = (evt) => {
            evt.preventDefault();
            this.setDropMode(evt);
        };
        this.onDragOver = (evt) => {
            if (this.state.dropActive === 'invalid') {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
            if (this.mLeaveDelay !== undefined) {
                clearTimeout(this.mLeaveDelay);
            }
            if (this.state.dropActive === 'no') {
                this.setDropMode(evt);
            }
            try {
                evt.dataTransfer.dropEffect = this.state.dropActive === 'url'
                    ? 'link'
                    : 'copy';
            }
            catch (err) {
                // continue regardless of error
            }
            return false;
        };
        this.onDragLeave = (evt) => {
            if (['no', 'invalid'].indexOf(this.state.dropActive) !== -1) {
                return;
            }
            evt.preventDefault();
            if (this.mLeaveDelay !== undefined) {
                clearTimeout(this.mLeaveDelay);
            }
            // delay event on drag leave,
            this.mLeaveDelay = setTimeout(() => {
                this.nextState.dropActive = 'no';
            }, 100);
        };
        this.onDrop = (evt) => {
            const { accept, drop } = this.props;
            evt.preventDefault();
            const dropUrl = evt.dataTransfer.getData('Url');
            if ((dropUrl !== '') && (accept.indexOf('urls') !== -1)) {
                drop('urls', [dropUrl]);
            }
            if ((evt.dataTransfer.files.length > 0) && (accept.indexOf('files') !== -1)) {
                const fileList = [];
                for (let i = 0; i < evt.dataTransfer.files.length; ++i) {
                    const filePath = electron_1.webUtils.getPathForFile(evt.dataTransfer.files.item(i));
                    fileList.push(filePath);
                }
                drop('files', fileList);
            }
            this.nextState.dropActive = 'no';
        };
        this.onHover = (evt) => {
            this.nextState.dropActive = 'hover';
        };
        this.onHoverLeave = (evt) => {
            this.nextState.dropActive = 'no';
        };
        this.onClick = () => {
            const { t, accept, dialogDefault, dialogHint } = this.props;
            const clickMode = accept[0];
            if (clickMode === 'urls') {
                this.props.onShowDialog('info', dialogHint, {
                    input: [{
                            id: 'url',
                            type: 'url',
                            value: dialogDefault,
                        }],
                    condition: this.validateURL,
                }, [{ label: 'Cancel' }, { label: 'Download', default: true }])
                    .then(result => {
                    if (result.action === 'Download') {
                        let inputUrl = result.input.url;
                        try {
                            const parsed = new URL(inputUrl);
                            if (!(0, util_1.truthy)(parsed.protocol)) {
                                // no protocol specified
                                inputUrl = 'https://' + inputUrl;
                            }
                        }
                        catch (_a) {
                            // invalid URL, assume no protocol
                            inputUrl = 'https://' + inputUrl;
                        }
                        this.props.drop('urls', [inputUrl]);
                    }
                });
            }
            else {
                this.context.api.selectFile({
                    defaultPath: dialogDefault,
                    title: dialogHint,
                }).then(filePath => {
                    if (filePath !== undefined) {
                        this.props.drop('files', [filePath]);
                    }
                });
            }
        };
        this.hasEmptyInput = (input) => {
            const { t } = this.props;
            return (input.value === undefined) || ((input.value === ''))
                ? {
                    id: input.id || 'url',
                    actions: ['Download'],
                    errorText: t('{{label}} cannot be empty.', {
                        replace: { label: input.label ? input.label : 'Field' },
                    }),
                }
                : undefined;
        };
        this.validateURL = (content) => {
            const urlInput = content.input.find(inp => inp.id === 'url');
            return [this.hasEmptyInput(urlInput)].filter(res => res !== undefined);
        };
        this.initState({
            dropActive: 'no',
        });
    }
    componentDidMount() {
        // styling is considerably different depending on whether this is
        // a stand-alone control or a wrapper for other controls
        this.mWrapperMode = React.Children.count(this.props.children) > 0;
    }
    render() {
        const { t, clickable, dragOverlay, style } = this.props;
        const classes = ['dropzone'];
        if (!this.mWrapperMode) {
            classes.push('stand-alone');
        }
        else {
            classes.push('wrapper');
        }
        if (this.state.dropActive === 'hover') {
            classes.push('hover-click');
        }
        else if (['no', 'invalid'].indexOf(this.state.dropActive) === -1) {
            classes.push('hover-valid');
        }
        return (React.createElement("div", { className: classes.join(' '), onDragEnter: this.onDragEnter, onDragOver: this.onDragOver, onDragLeave: this.onDragLeave, onDrop: this.onDrop, onMouseOver: (clickable !== false) ? this.onHover : undefined, onMouseLeave: (clickable !== false) ? this.onHoverLeave : undefined, onClick: (clickable !== false) ? this.onClick : undefined, style: Object.assign(Object.assign({}, style), { position: 'relative' }) },
            React.Children.count(this.props.children) > 0
                ? this.props.children
                : this.renderContent(),
            (dragOverlay !== undefined) && (['no', 'invalid'].indexOf(this.state.dropActive) === -1)
                ? React.createElement("div", { className: 'drag-overlay' }, dragOverlay)
                : null));
    }
    renderContent() {
        const { t, accept, clickText, dropText, icon } = this.props;
        const { dropActive } = this.state;
        const acceptList = accept.map(mode => {
            return {
                urls: t('URL(s)'),
                files: t('File(s)'),
            }[mode];
        });
        const clickMode = accept[0] === 'urls'
            ? t('enter URL')
            : t('browse for file');
        return (React.createElement("div", { className: 'dropzone-content' },
            (icon !== undefined) ? React.createElement(Icon_1.default, { name: icon }) : null,
            dropActive === 'hover'
                ? t(clickText || 'Click to {{ clickMode }}', { replace: { clickMode } })
                : t(dropText || 'Drop {{ accept }}', { replace: { accept: acceptList.join(` ${t('or')} `) } })));
    }
    setDropMode(evt) {
        let type = 'invalid';
        if ((evt.dataTransfer.types.indexOf('text/uri-list') !== -1)
            && (this.props.accept.indexOf('urls') !== -1)) {
            type = 'url';
        }
        else if ((evt.dataTransfer.types.indexOf('Files') !== -1)
            && (this.props.accept.indexOf('files') !== -1)) {
            type = 'file';
        }
        this.nextState.dropActive = type;
        return type !== 'invalid';
    }
}
function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        onShowDialog: (type, title, content, actions) => dispatch((0, notifications_1.showDialog)(type, title, content, actions)),
    };
}
exports.default = (0, ComponentEx_1.translate)(['common'])((0, ComponentEx_1.connect)(mapStateToProps, mapDispatchToProps)(Dropzone));
