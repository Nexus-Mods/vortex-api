import { IMainPage } from '../types/IMainPage';
export interface IBaseProps {
    page: IMainPage;
    active: boolean;
    secondary: boolean;
}
export interface IMainPageContext {
    globalOverlay: JSX.Element;
}
declare const _default: any;
export default _default;
