import React, { type Dispatch, type ReactNode, type SetStateAction, type FC } from "react";
import type { IModifiers } from "../types/IModifiers";
export interface IWindowContext {
    isFocused: boolean;
    isHidpi: boolean;
    menuIsCollapsed: boolean;
    setMenuIsCollapsed: Dispatch<SetStateAction<boolean>>;
    getModifiers: () => IModifiers;
}
export interface IWindowProviderProps {
    children: ReactNode;
}
export declare const WindowProvider: FC<IWindowProviderProps>;
export declare const WindowConsumer: React.Consumer<IWindowContext>;
export declare function useWindowContext(): IWindowContext;
