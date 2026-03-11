import Step from "./Step";
import * as React from "react";
export interface IStepsProps {
    step: string;
}
export type IProps = React.HTMLAttributes<any> & IStepsProps;
export interface ISteps extends React.ComponentClass<IProps> {
    Step: typeof Step;
}
declare const _default: ISteps;
export default _default;
