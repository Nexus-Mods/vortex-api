/// <reference types="react" />
import * as React from 'react';
export interface IStepProps {
    stepId: string;
    title: string;
    description: string;
    index?: number;
    state?: 'done' | 'current' | 'future';
}
declare class Step extends React.Component<IStepProps, {}> {
    render(): JSX.Element;
}
export default Step;
