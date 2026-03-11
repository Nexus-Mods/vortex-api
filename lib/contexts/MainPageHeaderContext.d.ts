import React from "react";
export interface IPageHeaderContext {
    headerPortal: () => HTMLElement | null;
    page: string;
}
export declare const PageHeaderContext: React.Context<IPageHeaderContext>;
export declare const PageHeaderProvider: React.Provider<IPageHeaderContext>;
export declare const PageHeaderConsumer: React.Consumer<IPageHeaderContext>;
export declare const usePageHeaderContext: () => IPageHeaderContext;
