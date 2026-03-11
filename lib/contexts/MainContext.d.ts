import React, { type ReactNode, type FC } from "react";
import type { IComponentContext } from "../types/IComponentContext";
export declare const MainContext: React.Context<IComponentContext>;
export interface IMainProviderProps {
    children: ReactNode;
}
export declare const MainProvider: FC<IMainProviderProps>;
export declare const MainConsumer: React.Consumer<IComponentContext>;
export declare const useMainContext: () => IComponentContext;
