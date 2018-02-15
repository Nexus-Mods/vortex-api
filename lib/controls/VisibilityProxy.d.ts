/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    container?: HTMLElement;
    placeholder: () => React.ReactNode;
    content: () => React.ReactNode;
    startVisible: boolean;
}
export interface IState {
    visible: boolean;
    visibleTime: number;
}
/**
 * proxy component that delays loading of a control until it comes into view
 *
 * @class VisibilityProxy
 * @extends {React.Component<IProps, IState>}
 */
declare class VisibilityProxy extends React.Component<any, IState> {
    private static sObservers;
    private static sInstances;
    private static getObserver(container);
    private static callback(entries, observer);
    private static observe(container, target, cb);
    private static unobserve(container, target);
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default VisibilityProxy;
