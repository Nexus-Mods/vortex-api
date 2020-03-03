import * as React from 'react';
import { ReactSelectProps } from 'react-select';
export interface ISelectUpDownProps {
    container?: Element;
    className?: string;
}
interface ISelectUpDownState {
    up: boolean;
}
declare type IProps = ISelectUpDownProps & ReactSelectProps;
declare class SelectUpDown extends React.Component<IProps, ISelectUpDownState> {
    private mNode;
    constructor(props: IProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private readonly bounds;
    private onMenuOpen;
}
export default SelectUpDown;
