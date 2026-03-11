import type { IParameters } from "@vortex/shared/cli";
/**
 * action to choose which item in a group to display (all other items in the
 * group will be hidden). the itemId can be undefined to hide them all.
 */
export declare const displayGroup: import("redux-act").ComplexActionCreator2<string, string, {
    groupId: string;
    itemId: string;
}, {}>;
export declare const setDialogVisible: import("redux-act").ComplexActionCreator1<string, {
    dialogId: string;
}, {}>;
export declare const setSettingsPage: import("redux-act").ComplexActionCreator1<string, {
    pageId: string;
}, {}>;
export declare const setOpenMainPage: import("redux-act").ComplexActionCreator2<string, boolean, {
    page: string;
    secondary: boolean;
}, {}>;
export declare const startActivity: import("redux-act").ComplexActionCreator2<string, string, {
    group: string;
    activityId: string;
}, {
    forward: boolean;
    scope: string;
}>;
export declare const stopActivity: import("redux-act").ComplexActionCreator2<string, string, {
    group: string;
    activityId: string;
}, {
    forward: boolean;
    scope: string;
}>;
export declare const setProgress: import("redux-act").ComplexActionCreator4<string, string, string, number, {
    group: string;
    progressId: string;
    text: string;
    percent: number;
}, {}>;
export declare const setToolRunning: import("redux-act").ComplexActionCreator3<string, number, boolean, {
    exePath: string;
    started: number;
    exclusive: boolean;
}, {}>;
export declare const setToolPid: import("redux-act").ComplexActionCreator3<string, number, boolean, {
    exePath: string;
    pid: number;
    exclusive: boolean;
}, {}>;
export declare const setToolStopped: import("redux-act").ComplexActionCreator1<string, {
    exePath: string;
}, {}>;
export declare const setExtensionLoadFailures: import("redux-act").ComplexActionCreator1<unknown, unknown, {}>;
export declare const setUIBlocker: import("redux-act").ComplexActionCreator4<string, string, string, boolean, {
    id: string;
    icon: string;
    description: string;
    mayCancel: boolean;
}, {}>;
export declare const clearUIBlocker: import("redux-act").ComplexActionCreator1<string, string, {}>;
export declare const setNetworkConnected: import("redux-act").ComplexActionCreator1<boolean, boolean, {}>;
export declare const setCommandLine: import("redux-act").ComplexActionCreator1<IParameters, IParameters, {}>;
