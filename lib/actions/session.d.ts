import { IParameters } from '../util/commandLine';
import * as reduxAct from 'redux-act';
/**
 * action to choose which item in a group to display (all other items in the
 * group will be hidden). the itemId can be undefined to hide them all.
 */
export declare const displayGroup: reduxAct.ComplexActionCreator2<string, string, {
    groupId: string;
    itemId: string;
}, {}>;
export declare const setDialogVisible: reduxAct.ComplexActionCreator1<string, {
    dialogId: string;
}, {}>;
export declare const setSettingsPage: reduxAct.ComplexActionCreator1<string, {
    pageId: string;
}, {}>;
export declare const setOpenMainPage: reduxAct.ComplexActionCreator2<string, boolean, {
    page: string;
    secondary: boolean;
}, {}>;
export declare const startActivity: reduxAct.ComplexActionCreator2<string, string, {
    group: string;
    activityId: string;
}, {
    forward: boolean;
    scope: string;
}>;
export declare const stopActivity: reduxAct.ComplexActionCreator2<string, string, {
    group: string;
    activityId: string;
}, {
    forward: boolean;
    scope: string;
}>;
export declare const setProgress: reduxAct.ComplexActionCreator4<string, string, string, number, {
    group: string;
    progressId: string;
    text: string;
    percent: number;
}, {}>;
export declare const setToolRunning: reduxAct.ComplexActionCreator3<string, number, boolean, {
    exePath: string;
    started: number;
    exclusive: boolean;
}, {}>;
export declare const setToolPid: reduxAct.ComplexActionCreator3<string, number, boolean, {
    exePath: string;
    pid: number;
    exclusive: boolean;
}, {}>;
export declare const setToolStopped: reduxAct.ComplexActionCreator1<string, {
    exePath: string;
}, {}>;
export declare const setExtensionLoadFailures: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
export declare const setUIBlocker: reduxAct.ComplexActionCreator4<string, string, string, boolean, {
    id: string;
    icon: string;
    description: string;
    mayCancel: boolean;
}, {}>;
export declare const clearUIBlocker: reduxAct.ComplexActionCreator1<string, string, {}>;
export declare const setNetworkConnected: reduxAct.ComplexActionCreator1<boolean, boolean, {}>;
export declare const setCommandLine: reduxAct.ComplexActionCreator1<IParameters, IParameters, {}>;
