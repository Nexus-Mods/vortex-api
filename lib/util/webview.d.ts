import { BrowserWindow } from 'electron';
export declare const makeBrowserView: (...args: any[]) => Promise<string>;
export declare const closeBrowserView: (...args: any[]) => Promise<void>;
export declare const positionBrowserView: (...args: any[]) => Promise<void>;
export declare const updateViewURL: (...args: any[]) => Promise<void>;
export declare function closeAllViews(window: BrowserWindow): void;
