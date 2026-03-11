import React from "react";
import { MainPageBody } from "./MainPageBody";
import { MainPageHeader } from "./MainPageHeader";
export interface IBaseProps {
    id?: string;
    className?: string;
    domRef?: (ref: HTMLElement) => void;
    children?: React.ReactNode;
}
declare const MainPageInner: React.ForwardRefExoticComponent<IBaseProps & React.RefAttributes<HTMLDivElement>>;
export declare const MainPage: typeof MainPageInner & {
    Body: typeof MainPageBody;
    Header: typeof MainPageHeader;
};
export default MainPage;
