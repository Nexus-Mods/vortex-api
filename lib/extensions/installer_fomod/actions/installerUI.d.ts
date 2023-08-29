import { IInstallerInfo, IInstallerState } from '../types/interface';
import * as reduxAct from 'redux-act';
export declare const startDialog: reduxAct.ComplexActionCreator1<IInstallerInfo, any, {}>;
export declare const endDialog: reduxAct.EmptyActionCreator;
export declare const clearDialog: reduxAct.EmptyActionCreator;
export declare const setDialogState: reduxAct.ComplexActionCreator1<IInstallerState, any, {}>;
export declare const setInstallerDataPath: reduxAct.ComplexActionCreator1<string, any, {}>;
