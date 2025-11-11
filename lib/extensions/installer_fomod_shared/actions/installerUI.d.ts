import { IInstallerInfoState, IInstallerState } from '../types/interface';
export declare const startDialog: import("redux-act").ComplexActionCreator2<IInstallerInfoState, string, {
    info: IInstallerInfoState;
    instanceId: string;
}, {}>;
export declare const endDialog: import("redux-act").ComplexActionCreator1<string, {
    instanceId: string;
}, {}>;
export declare const clearDialog: import("redux-act").ComplexActionCreator1<string, {
    instanceId: string;
}, {}>;
export declare const setDialogState: import("redux-act").ComplexActionCreator2<IInstallerState, string, {
    dialogState: IInstallerState;
    instanceId: string;
}, {}>;
