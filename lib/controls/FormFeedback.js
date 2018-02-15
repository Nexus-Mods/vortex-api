"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("./Icon");
const Spinner_1 = require("./Spinner");
const classNames = require("classnames");
const _ = require("lodash");
const PropTypes = require("prop-types");
const React = require("react");
class FormFeedback extends React.Component {
    render() {
        const formGroup = this.context.$bs_formGroup;
        const { className } = this.props;
        const classes = ['form-control-feedback', 'feedback-awesome'];
        const { pending } = this.props;
        const elementProps = _.omit(this.props, ['pending', 'bsRole']);
        const icon = this.icon(formGroup && formGroup.validationState, pending);
        if (icon === undefined) {
            return null;
        }
        else {
            return (React.createElement("div", Object.assign({}, elementProps, { className: classNames(className, classes) }), icon));
        }
    }
    icon(state, pending) {
        const style = { verticalAlign: 'baseline' };
        if (pending) {
            return React.createElement(Spinner_1.default, { style: style });
        }
        switch (state) {
            case 'success': return React.createElement(Icon_1.default, { name: 'feedback-success', style: style });
            case 'warning': return React.createElement(Icon_1.default, { name: 'feedback-warning', style: style });
            case 'error': return React.createElement(Icon_1.default, { name: 'feedback-error', style: style });
            default: return undefined;
        }
    }
}
FormFeedback.contextTypes = {
    $bs_formGroup: PropTypes.object,
};
FormFeedback.defaultProps = {
    bsRole: 'feedback',
};
exports.default = FormFeedback;
