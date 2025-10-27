import * as React from 'react';
import { KeyboardEvent, MutableRefObject, ReactNode } from 'react';
/**
 * Arguments for the register tab method
 */
type RegisterTabArgs = {
    name: string;
    ref: MutableRefObject<HTMLButtonElement | HTMLAnchorElement>;
    type: 'link' | 'button';
};
/**
 * State for the TabContext
 */
export interface TabsState {
    onKeyDown: (event: KeyboardEvent) => void;
    onTabClick: (tabName: string) => void;
    registerTab: (args: RegisterTabArgs) => void;
    selectedTab: string;
    tabListId: string;
}
/**
 * Props for the TabProvider
 */
export interface TabProviderProps {
    children?: ReactNode;
    onSetSelectedTab?: (tab: string) => void;
    tab: string;
    tabListId: string;
}
/**
 * The React context for the TabProvider
 */
export declare const TabContext: React.Context<TabsState>;
/**
 * React component to provide context to tabs
 */
export declare const TabProvider: ({ children, onSetSelectedTab, tab, tabListId }: TabProviderProps) => React.JSX.Element;
/**
 * Hook to enforce that context has a provider
 * COMPATIBILITY FIX: Using useContext instead of use() for React 16 compatibility
 */
export declare const useTabContext: () => TabsState;
export {};
