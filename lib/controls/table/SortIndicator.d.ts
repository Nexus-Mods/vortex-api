/// <reference types="react" />
import { SortDirection } from '../../types/SortDirection';
import * as React from 'react';
export interface IProps {
    direction: SortDirection;
    onSetDirection: (direction: SortDirection) => void;
}
declare class SortIndicator extends React.Component<IProps, {}> {
    render(): JSX.Element;
    private cycleDirection;
    private icon(direction);
}
export default SortIndicator;
