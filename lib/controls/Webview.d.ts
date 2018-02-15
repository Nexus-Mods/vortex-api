/// <reference types="react" />
import * as React from 'react';
export interface IWebView {
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
}
declare class Webview extends React.Component<IWebviewProps & IWebView, {}> {
    private mNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private startLoad;
    private stopLoad;
    private logMessage;
}
export default Webview;
