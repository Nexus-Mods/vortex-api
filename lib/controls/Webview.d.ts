/**
 * Two implementations of embedding web content, both have drawbacks.
 * WebViewOverlay uses the electron BrowserView api, sized automatically to be positioned inside
 * a div in the DOM.
 * Browser functionality seems to be perfect, but it is rendered as a fully separate view on top
 * of the rest of Vortex and can thus not be overlayed. As such it will also not disappear until
 * unmounted (or set to an empty url).
 * Thus care has to be taken how this is utilized or it will appear broken and janky
 *
 * WebviewEmbed uses the chrome <webview> component which integrates better but doesn't seem to
 * forward all events correcty. Specifically we were not able to handle any event when clicking
 * the download button on google drive. (as of Electron 15.1.1)
 */
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
export declare class WebviewOverlay extends React.Component<IWebviewProps & IWebView, {}> {
    render(): JSX.Element;
    private startLoad;
    private stopLoad;
    private newWindow;
    private enterFullscreen;
    private leaveFullscreen;
    private logMessage;
}
export declare class WebviewEmbed extends React.Component<IWebviewProps & IWebView, {}> {
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
export default WebviewEmbed;
