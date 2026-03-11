import React, { type FC, type ReactNode } from "react";
import type { IMainPage } from "../types/IMainPage";
export interface IPagesContext {
    mainPages: IMainPage[];
    mainPage: string;
}
export interface IPagesProviderProps {
    children: ReactNode;
}
export declare const PagesProvider: FC<IPagesProviderProps>;
export declare const PagesConsumer: React.Consumer<IPagesContext>;
export declare const usePagesContext: () => IPagesContext;
