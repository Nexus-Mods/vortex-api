"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../../../util/ComponentEx");
const DNDContainer_1 = require("../../../views/DNDContainer");
const session_1 = require("../actions/session");
const CategoryList_1 = require("./CategoryList");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
class CategoryDialog extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.hide = () => {
            this.props.onShowSelf(false);
        };
    }
    render() {
        const { t, showDialog } = this.props;
        return (React.createElement(react_bootstrap_1.Modal, { show: showDialog, onHide: this.hide },
            React.createElement(react_bootstrap_1.Modal.Header, null,
                React.createElement(react_bootstrap_1.Modal.Title, null, t('Categories'))),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement(DNDContainer_1.default, null,
                    React.createElement(CategoryList_1.default, null)))));
    }
}
function mapStateToProps(state) {
    return {
        showDialog: state.session.categories.showDialog,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onShowSelf: (show) => dispatch(session_1.showCategoriesDialog(show)),
    };
}
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.connect(mapStateToProps, mapDispatchToProps)(CategoryDialog));
