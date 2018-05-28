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
}, {}>;
export declare const stopActivity: reduxAct.ComplexActionCreator2<string, string, {
    group: string;
    activityId: string;
}, {}>;
export declare const setProgress: reduxAct.ComplexActionCreator4<string, string, string, number, {
    group: string;
    progressId: string;
    text: string;
    percent: number;
}, {}>;
export declare const setExtensionLoadFailures: reduxAct.ComplexActionCreator1<{}, {}, {}>;
