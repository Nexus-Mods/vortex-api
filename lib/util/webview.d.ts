import { BrowserWindow } from 'electron';
export declare const makeBrowserView: (src: string, forwardEvents: string[], options?: Electron.BrowserViewConstructorOptions) => Promise<any>;
export declare const closeBrowserView: (viewId: string) => Promise<void>;
export declare const positionBrowserView: (viewId: string, rect: Electron.Rectangle) => Promise<void>;
export declare const updateViewURL: (viewId: string, newURL: string) => Promise<void>;
export declare function closeAllViews(window: BrowserWindow): void;
