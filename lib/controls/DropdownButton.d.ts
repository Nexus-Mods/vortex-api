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
declare function MyDropdownButton(props: IProps): JSX.Element;
export default MyDropdownButton;
