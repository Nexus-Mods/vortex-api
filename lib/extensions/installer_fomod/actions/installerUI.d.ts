import { IInstallerInfo, IInstallerState } from '../types/interface';
export declare const startDialog: import("redux-act").ComplexActionCreator2<IInstallerInfo, string, any, {}>;
export declare const endDialog: import("redux-act").ComplexActionCreator1<string, any, {}>;
export declare const clearDialog: import("redux-act").ComplexActionCreator1<string, any, {}>;
export declare const setDialogState: import("redux-act").ComplexActionCreator2<IInstallerState, string, any, {}>;
export declare const setInstallerDataPath: import("redux-act").ComplexActionCreator2<string, string, any, {}>;
