import * as reduxAct from "redux-act";
import { InstallPathMode } from "../../../types/api";
/**
 * change the mod install path. Supports placeholders
 */
export declare const setInstallPath: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    path: string;
}, {}>;
export declare const setInstallPathMode: reduxAct.ComplexActionCreator1<InstallPathMode, InstallPathMode, {}>;
export declare const setSuggestInstallPathDirectory: reduxAct.ComplexActionCreator1<string, string, {}>;
/**
 * sets the activator to use for this game
 */
export declare const setActivator: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    activatorId: string;
}, {}>;
export declare const setShowModDropzone: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
export declare const setConfirmPurge: reduxAct.ComplexActionCreator1<boolean, boolean, {}>;
export declare const setCleanupOnDeploy: reduxAct.ComplexActionCreator1<boolean, boolean, {}>;
