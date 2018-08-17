import * as React from 'react';
export interface IBaseProps {
    className?: string;
    min?: number;
    max?: number;
    now: number;
    labelLeft?: string;
    labelRight?: string;
    showPercentage?: boolean;
}
/**
 * custom progress bar control, since the one from bootstrap isn't customizable
 * enough
 */
declare class ProgressBar extends React.PureComponent<IBaseProps, {}> {
    render(): JSX.Element;
    private renderLabels;
    private renderPercentage;
}
export default ProgressBar;
