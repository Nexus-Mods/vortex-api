import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
export interface IBaseProps {
    container?: Element;
}
export declare type IProps = IBaseProps & typeof Dropdown.prototype.props;
export declare class DummyMenu extends React.Component<{}, {}> {
    static defaultProps: {
        bsRole: any;
    };
    render(): JSX.Element;
    focusNext(): void;
}
/**
 * An enhanced dropdown that adjusts placement of the popover based on the
 * position within the container, so it doesn't get cut off (as long as the
 * popover isn't larger than half of the container)
 *
 * @class MyDropdown
 * @extends {React.Component<IProps, { up: boolean }>}
 */
declare class MyDropdown extends React.Component<IProps, {
    up: boolean;
}> {
    static Menu: typeof Dropdown.Menu;
    static Toggle: typeof Dropdown.Toggle;
    private mNode;
    private mOpen;
    constructor(props: IProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private readonly bounds;
    private onToggle;
}
export default MyDropdown;
