import * as React from 'react';
import { DropdownButton } from 'react-bootstrap';
export interface IBaseProps {
    split?: boolean;
    container?: Element;
}
export declare type IProps = IBaseProps & typeof DropdownButton.prototype.props;
/**
 * An enhanced dropdown button that adjusts placement of the popover based on the
 * position within the container, so it doesn't get cut off (as long as the
 * popover isn't larger than half of the container)
 *
 * @class MyDropdownButton
 * @extends {React.Component<IProps, { up: boolean }>}
 */
declare class MyDropdownButton extends React.Component<IProps, {
    up: boolean;
    right: boolean;
}> {
    private mNode;
    private mOpen;
    constructor(props: IProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private readonly bounds;
    private onToggle;
}
export default MyDropdownButton;
