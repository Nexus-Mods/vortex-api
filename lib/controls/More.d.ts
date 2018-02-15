/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    id: string;
    name: string;
    children?: string;
    container?: Element;
    orientation?: 'vertical' | 'horizontal';
}
export interface IComponentState {
    open: boolean;
}
/**
 * Component to make additional information available to the user without taking much
 * space. The user only sees a clickable question mark. On click it will show a popover
 * with the info.
 *
 * double-linebreaks can be used in the text to start a new paragraph.
 *
 * @param {IProps} props
 * @returns
 */
declare class More extends React.Component<IProps, IComponentState> {
    private mPopoverRef;
    private mRef;
    constructor(props: IProps);
    render(): JSX.Element;
    private getRef;
    private setRef;
    private toggle;
    private hide;
    private getBounds;
}
export default More;
