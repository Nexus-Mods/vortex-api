import { IExtensionApi } from '../types/IExtensionContext';
import * as React from 'react';
export interface IComponentContext {
    api: IExtensionApi;
    headerPortal: () => HTMLElement;
    page: string;
}
interface IConnectedProps {
    mainPage: string;
}
declare type IProps = IConnectedProps;
declare class MainPageHeader extends React.Component<IProps, {}> {
    static contextTypes: React.ValidationMap<any>;
    context: IComponentContext;
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof MainPageHeader, Pick<React.ClassAttributes<MainPageHeader> & IConnectedProps, "ref" | "key">>;
export default _default;
