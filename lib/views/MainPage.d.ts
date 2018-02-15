import Body from './MainPageBody';
import Header from './MainPageHeader';
import Overlay from './MainPageOverlay';
import * as React from 'react';
export interface IBaseProps {
    id?: string;
    className?: string;
    domRef?: (ref: HTMLElement) => void;
}
export interface IMainPage extends React.ComponentClass<IBaseProps> {
    Body: typeof Body;
    Overlay: typeof Overlay;
    Header: typeof Header;
}
declare const _default: IMainPage;
export default _default;
