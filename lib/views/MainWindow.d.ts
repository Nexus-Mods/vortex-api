import { IComponentContext } from '../types/IComponentContext';
import { IExtensionApi } from '../types/IExtensionContext';
import { II18NProps } from '../types/II18NProps';
import { IMainPage } from '../types/IMainPage';
import { INotification } from '../types/INotification';
import { IProgress, IUIBlocker } from '../types/IState';
import { TFunction } from '../util/i18n';
import * as React from 'react';
export interface IBaseProps {
    t: TFunction;
    className: string;
    api: IExtensionApi;
}
export interface IExtendedProps {
    objects: IMainPage[];
}
export interface IMainWindowState {
    showLayer: string;
    loadedPages: string[];
    hidpi: boolean;
    focused: boolean;
    menuOpen: boolean;
}
export interface IConnectedProps {
    tabsMinimized: boolean;
    visibleDialog: string;
    mainPage: string;
    secondaryPage: string;
    activeProfileId: string;
    nextProfileId: string;
    progressProfile: {
        [progressId: string]: IProgress;
    };
    customTitlebar: boolean;
    userInfo: any;
    notifications: INotification[];
    APIKey: string;
    uiBlockers: {
        [id: string]: IUIBlocker;
    };
}
export interface IActionProps {
    onSetTabsMinimized: (minimized: boolean) => void;
    onSetOpenMainPage: (page: string, secondary: boolean) => void;
    onHideDialog: () => void;
    onUnblockUI: (id: string) => void;
}
export declare type IProps = IBaseProps & IConnectedProps & IExtendedProps & IActionProps & II18NProps;
export declare const MainContext: React.Context<{}>;
export declare class MainWindow extends React.Component<IProps, IMainWindowState> {
    static childContextTypes: React.ValidationMap<any>;
    private applicationButtons;
    private settingsPage;
    private nextState;
    private globalButtons;
    private modifiers;
    private menuLayer;
    private menuObserver;
    private sidebarRef;
    private sidebarTimer;
    constructor(props: IProps);
    getChildContext(): IComponentContext;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: IProps, nextState: IMainWindowState): boolean;
    componentWillReceiveProps(newProps: IProps): void;
    render(): JSX.Element;
    private getModifiers;
    private renderWait;
    private renderBlocker;
    private unblock;
    private updateModifiers;
    private updateState;
    private renderToolbar;
    private updateSize;
    private setFocus;
    private unsetFocus;
    private renderBody;
    private renderPageGroup;
    private setSidebarRef;
    private renderPageButton;
    private renderPage;
    private setMenuLayer;
    private handleClickPage;
    private setMainPage;
    private toggleMenu;
}
declare const _default: React.ComponentClass<IBaseProps, any>;
export default _default;
