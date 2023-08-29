import * as React from 'react';
declare class WindowControls extends React.Component<{}, {
    isMaximized: boolean;
}> {
    private mClosed;
    constructor(props: {});
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private minimize;
    private onMaximize;
    private onUnMaximize;
    private onClose;
    private toggleMaximize;
    private close;
}
export default WindowControls;
