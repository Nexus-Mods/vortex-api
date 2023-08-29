import * as React from 'react';
export interface IBaseProps {
    className?: string;
    style?: React.CSSProperties;
    min?: number;
    max?: number;
    now: number;
    labelLeft?: string;
    labelRight?: string;
    showPercentage?: boolean;
    showTimeLeft?: boolean;
}
interface IProgressBarState {
    startTime: number;
    startPos: number;
}
/**
 * custom progress bar control, since the one from bootstrap isn't customizable
 * enough
 */
declare class ProgressBar extends React.PureComponent<IBaseProps, IProgressBarState> {
    constructor(props: IBaseProps);
    UNSAFE_componentWillReceiveProps(newProps: IBaseProps): void;
    render(): JSX.Element;
    private renderLabels;
    private renderPercentage;
    private renderTimeLeft;
}
export default ProgressBar;
