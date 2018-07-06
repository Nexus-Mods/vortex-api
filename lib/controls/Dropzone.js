"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../actions/notifications");
const ComponentEx_1 = require("../util/ComponentEx");
const Icon_1 = require("./Icon");
const React = require("react");
class Dropzone extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.mWrapperMode = false;
        this.onDragEnter = (evt) => {
            if (evt.preventDefault()) {
                this.setDropMode(evt);
            }
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
            const url = evt.dataTransfer.getData('Url');
            if ((url !== '') && (accept.indexOf('urls') !== -1)) {
                drop('urls', [url]);
            }
            if ((evt.dataTransfer.files.length > 0) && (accept.indexOf('files') !== -1)) {
                const fileList = [];
                for (let i = 0; i < evt.dataTransfer.files.length; ++i) {
                    fileList.push(evt.dataTransfer.files.item(i).path);
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
                }, [{ label: 'Cancel' }, { label: 'Download' }])
                    .then(result => {
                    if (result.action === 'Download') {
                        this.props.drop('urls', [result.input.url]);
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
        this.initState({
            dropActive: 'no',
        });
    }
    componentWillMount() {
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
        return (React.createElement("div", { className: classes.join(' '), onDragEnter: this.onDragEnter, onDragOver: this.onDragOver, onDragLeave: this.onDragLeave, onDrop: this.onDrop, onMouseOver: (clickable !== false) ? this.onHover : undefined, onMouseLeave: (clickable !== false) ? this.onHoverLeave : undefined, onClick: (clickable !== false) ? this.onClick : undefined, style: Object.assign({}, style, { position: 'relative' }) },
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
                : t(dropText || 'Drop {{ accept }}', { replace: { accept: acceptList.join(t(' or ')) } })));
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
        onShowDialog: (type, title, content, actions) => dispatch(notifications_1.showDialog(type, title, content, actions)),
    };
}
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.connect(mapStateToProps, mapDispatchToProps)(Dropzone));
