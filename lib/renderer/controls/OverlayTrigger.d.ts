import * as React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
export interface IBaseProps {
    triggerRef?: (ref: HTMLElement) => void;
    getBounds: () => ClientRect;
    orientation: 'vertical' | 'horizontal';
    shouldUpdatePosition?: boolean;
}
export type IProps = IBaseProps & typeof OverlayTrigger.prototype.props;
/**
 * custom variant of the overlay trigger that automatically chooses the placement
 * of the popover based on the position on the screen.
 *
 * This still uses an "orientation" of horizontal or vertical to pick the dimension
 * on which to move.
 *
 * The prop "getBounds" is used to retrieve the bounding rect used to determine the
 * placement. We can't use the container for this as the container may be a scrolling
 * control and not having to scroll to see the popover is the whole point of this.
 *
 * Right now the placement is only calculated when the popover is opened, it isn't updated
 * as a result of scrolling/resizing while the popover is open
 *
 * @class MyOverlayTrigger
 * @extends {React.Component<any, { placement: string }>}
 */
declare class MyOverlayTrigger extends React.Component<IProps, {
    placement: string;
}> {
    private mNode;
    constructor(props: any);
    componentDidMount(): void;
    render(): React.JSX.Element;
    private onEnter;
}
export default MyOverlayTrigger;
