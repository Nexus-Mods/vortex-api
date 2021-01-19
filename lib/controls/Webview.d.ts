import * as React from 'react';
export interface IWebView extends React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement> {
    src?: string;
    style?: any;
    autosize?: boolean;
    nodeintegration?: boolean;
    plugins?: boolean;
    preload?: string;
    httpreferrer?: string;
    useragent?: string;
    disablewebsecurity?: boolean;
    partition?: string;
    webpreferences?: string;
    blinkfeatures?: string;
    disableblinkfeatures?: string;
    guestinstance?: string;
}
export interface IWebviewProps {
    onLoading?: (loading: boolean) => void;
    onNewWindow?: (url: string, disposition: string) => void;
    onFullscreen?: (fullscreen: boolean) => void;
}
declare class Webview extends React.Component<IWebviewProps & IWebView, {}> {
    private mNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private startLoad;
    private stopLoad;
    private newWindow;
    private enterFullscreen;
    private leaveFullscreen;
    private logMessage;
}
export default Webview;
