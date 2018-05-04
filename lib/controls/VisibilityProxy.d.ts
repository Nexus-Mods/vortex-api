/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    container?: HTMLElement;
    placeholder: () => React.ReactNode;
    content: () => React.ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}
/**
 * proxy component that delays loading of a control until it comes into view
 *
 * @class VisibilityProxy
 * @extends {React.Component<IProps, IState>}
 */
declare class VisibilityProxy extends React.PureComponent<any, {}> {
    private static sObservers;
    private static sInstances;
    private static getObserver(container);
    private static callback(entries, observer);
    private static observe(container, target, cb);
    private static unobserve(container, target);
    private mLastVisible;
    private mVisibleTime;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default VisibilityProxy;
