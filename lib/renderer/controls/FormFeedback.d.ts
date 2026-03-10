import * as React from "react";
export interface IFormFeedbackProps {
    pending?: boolean;
    className?: string;
}
declare class FormFeedback extends React.Component<IFormFeedbackProps, {}> {
    static contextTypes: React.ValidationMap<any>;
    static defaultProps: {
        bsRole: string;
    };
    render(): JSX.Element;
    private icon;
}
export default FormFeedback;
