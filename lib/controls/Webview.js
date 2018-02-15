"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../util/log");
const lodash_1 = require("lodash");
const React = require("react");
const ReactDOM = require("react-dom");
class Webview extends React.Component {
    constructor() {
        super(...arguments);
        this.startLoad = () => {
            const { onLoading } = this.props;
            if (onLoading !== undefined) {
                onLoading(true);
            }
        };
        this.stopLoad = () => {
            const { onLoading } = this.props;
            if (onLoading !== undefined) {
                onLoading(false);
            }
        };
        this.logMessage = (evt) => {
            if (evt.level > 0) {
                log_1.log('info', 'from embedded page', evt.message);
            }
        };
    }
    componentDidMount() {
        this.mNode = ReactDOM.findDOMNode(this);
        this.mNode.addEventListener('did-start-loading', this.startLoad);
        this.mNode.addEventListener('did-stop-loading', this.stopLoad);
        this.mNode.addEventListener('dom-ready', () => {
            // this.mNode.insertCSS('body { background-color: red !important }');
            // this.mNode.openDevTools();
        });
        this.mNode.addEventListener('console-message', this.logMessage);
        // this.mNode.getWebContents().session.cookies.get()
    }
    componentWillUnmount() {
        this.mNode.removeEventListener('did-start-loading', this.startLoad);
        this.mNode.removeEventListener('did-stop-loading', this.stopLoad);
        this.mNode.removeEventListener('console-message', this.logMessage);
    }
    render() {
        return React.createElement('webview', lodash_1.omit(this.props, ['onLoading']));
    }
}
exports.default = Webview;
