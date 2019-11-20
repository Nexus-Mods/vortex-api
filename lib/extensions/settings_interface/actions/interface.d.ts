import * as reduxAct from 'redux-act';
/**
 * change the user interface language
 */
export declare const setLanguage: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
/**
 * enable or disable advanced mode
 */
export declare const setAdvancedMode: reduxAct.ComplexActionCreator1<boolean, {
    advanced: boolean;
}, {}>;
export declare const setProfilesVisible: reduxAct.ComplexActionCreator1<boolean, {
    visible: boolean;
}, {}>;
export declare const setDesktopNotifications: reduxAct.ComplexActionCreator1<boolean, boolean, {}>;
export declare const setHideTopLevelCategory: reduxAct.ComplexActionCreator1<boolean, {
    hide: boolean;
}, {}>;
export declare const showUsageInstruction: reduxAct.ComplexActionCreator2<string, boolean, {
    usageId: string;
    show: boolean;
}, {}>;
