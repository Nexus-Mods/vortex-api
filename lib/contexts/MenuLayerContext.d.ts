import React, { type ReactNode, type FC } from "react";
export interface IMenuLayerContext {
    menuLayerElement: HTMLDivElement | null;
    menuLayerOpen: boolean;
    setMenuLayerRef: (ref: HTMLDivElement | null) => void;
}
export interface IMenuLayerProviderProps {
    children: ReactNode;
}
export declare const MenuLayerProvider: FC<IMenuLayerProviderProps>;
export declare const MenuLayerConsumer: React.Consumer<IMenuLayerContext>;
export declare function useMenuLayerContext(): IMenuLayerContext;
