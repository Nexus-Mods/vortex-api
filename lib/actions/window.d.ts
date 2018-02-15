/**
 * action to set window size in the store.
 * Takes one parameter of the form {width: number, height: number}
 */
export declare const setWindowSize: any;
/**
 * action to set window position in the store.
 * Takes one parameter of the form {x: number, y: number}
 */
export declare const setWindowPosition: any;
/**
 * action to set maximized in the store
 * to avoid confusion: maximize maintains window frame and fills one screen,
 * fullscreen makes the window borderless + fill the screen
 */
export declare const setMaximized: any;
export declare const setTabsMinimized: any;
export declare const setCustomTitlebar: any;
