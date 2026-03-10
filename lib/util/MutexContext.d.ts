import * as React from "react";
export interface IMutexContextValue {
    current: string;
    add: (newItem: string) => void;
    remove: (item: string) => void;
}
declare class MutexContextValue implements IMutexContextValue {
    private mQueue;
    get current(): string;
    add(newItem: string): void;
    remove(item: string): void;
}
export declare function createQueue(): MutexContextValue;
export declare const MutexProvider: React.Provider<IMutexContextValue>;
export declare const MutexConsumer: React.Consumer<IMutexContextValue>;
export declare function useMutex(show: boolean): boolean;
export declare function useRandomId(): string;
export declare function MutexWrapper(props: {
    show: boolean;
    children: React.ReactNode;
}): React.DetailedReactHTMLElement<undefined, HTMLElement>;
export {};
