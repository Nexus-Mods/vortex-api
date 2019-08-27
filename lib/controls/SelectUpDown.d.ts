import * as React from 'react';
import Select from 'react-select';
export interface ISelectUpDownProps {
    container: Element;
}
interface ISelectUpDownState {
    up: boolean;
}
declare type IProps = ISelectUpDownProps | Select.ReactSelectProps;
declare class SelectUpDown extends React.Component<IProps, ISelectUpDownState> {
    private mNode;
    constructor(props: Select.ReactSelectProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private readonly bounds;
    private onMenuOpen;
}
export default SelectUpDown;
