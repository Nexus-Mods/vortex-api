import React, { type JSX } from "react";
import type { IMainPage } from "../types/IMainPage";
import { type IPageHeaderContext, PageHeaderContext } from "../contexts/MainPageHeaderContext";
export { type IPageHeaderContext, PageHeaderContext };
export interface IBaseProps {
    page: IMainPage;
    active: boolean;
    secondary: boolean;
}
export interface IMainPageContext {
    globalOverlay: JSX.Element;
}
export declare const MainPageContainer: React.FC<IBaseProps>;
export default MainPageContainer;
