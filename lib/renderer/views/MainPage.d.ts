import { ComponentEx } from '../../util/ComponentEx';
import Body from './MainPageBody';
import Header from './MainPageHeader';
import * as React from 'react';
export interface IBaseProps {
    id?: string;
    className?: string;
    domRef?: (ref: HTMLElement) => void;
}
type IProps = IBaseProps;
declare class MainPage extends ComponentEx<IProps, {}> {
    static Body: typeof Body;
    static Header: any;
    render(): JSX.Element;
}
export interface IMainPage extends React.ComponentClass<IBaseProps> {
    Body: typeof Body;
    Header: typeof Header;
}
export default MainPage;
