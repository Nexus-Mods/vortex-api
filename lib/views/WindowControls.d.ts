import * as React from 'react';
declare class WindowControls extends React.Component<{}, {}> {
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private minimize;
    private onMaximize;
    private toggleMaximize;
    private close;
}
export default WindowControls;
