import * as React from 'react';
export interface IProps {
    container?: HTMLElement;
    placeholder: () => React.ReactNode;
    content: () => React.ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
    componentClass?: React.ElementType;
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
    private static getObserver;
    private static callback;
    private static observe;
    private static unobserve;
    private mLastVisible;
    private mVisibleTime;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default VisibilityProxy;
