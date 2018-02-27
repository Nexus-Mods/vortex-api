"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Debouncer_1 = require("../util/Debouncer");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const FormFeedback_1 = require("./FormFeedback");
/**
 * this is a wrapper for the text input-component that is styled like the
 * bootstrap FormControl component.
 * This wrapper uses a "cache" in the state to reduce the number of (costy)
 * rerenders caused by changing the redux store every keypress.
 * As a side effect, this fixes a problem where the cursor always jumps to
 * the end of the line when using controlled input.
 */
class FormInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = (evt) => {
            evt.preventDefault();
            const newValue = evt.currentTarget.value;
            this.setState({ cachedValue: newValue });
            this.mDebouncer.schedule(undefined, newValue);
        };
        this.state = {
            cachedValue: props.value,
        };
        this.mDebouncer = new Debouncer_1.default(newValue => {
            const { onChange, validate } = this.props;
            this.mLastCommitted = newValue;
            if ((validate === undefined)
                || (validate(newValue) !== 'error')) {
                this.props.onChange(newValue);
            }
            return null;
        }, 1000);
    }
    componentWillReceiveProps(newProps) {
        if ((newProps.value !== this.props.value)
            && (this.mLastCommitted !== newProps.value)) {
            this.mLastCommitted = newProps.value;
            this.setState({ cachedValue: newProps.value });
        }
    }
    render() {
        const { id, label, placeholder, readOnly, validate } = this.props;
        const { cachedValue } = this.state;
        const content = (React.createElement("input", { className: 'form-control', type: 'text', title: label, value: cachedValue, id: id, onChange: this.onChange, readOnly: readOnly, placeholder: placeholder }));
        if (validate) {
            const validationState = validate(cachedValue);
            return (React.createElement(react_bootstrap_1.FormGroup, { validationState: validationState },
                content,
                readOnly ? null : React.createElement(FormFeedback_1.default, null)));
        }
        else {
            return content;
        }
    }
}
exports.default = FormInput;
