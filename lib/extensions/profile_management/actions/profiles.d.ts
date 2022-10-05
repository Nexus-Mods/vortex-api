import Bluebird from 'bluebird';
import * as reduxAct from 'redux-act';
import { IExtensionApi } from '../../../types/IExtensionContext';
import { IProfile } from '../types/IProfile';
/**
 * add or edit a profile
 */
export declare const setProfile: reduxAct.ComplexActionCreator1<IProfile, IProfile, {}>;
export declare const removeProfile: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
export declare const willRemoveProfile: reduxAct.ComplexActionCreator1<unknown, unknown, {}>;
/**
 * enable or disable a mod in a profile
 */
export declare const setModEnabled: reduxAct.ComplexActionCreator3<string, string, boolean, {
    profileId: string;
    modId: string;
    enable: boolean;
}, {}>;
export declare const forgetMod: reduxAct.ComplexActionCreator2<string, string, {
    profileId: string;
    modId: string;
}, {}>;
export declare const setFeature: reduxAct.ComplexActionCreator3<string, string, any, {
    profileId: string;
    featureId: string;
    value: any;
}, {}>;
export declare const setProfileActivated: reduxAct.ComplexActionCreator1<string, string, {}>;
export interface IEnableOptions {
    installed?: boolean;
    allowAutoDeploy?: boolean;
}
declare const setModsEnabled: (api: IExtensionApi, profileIdIn: string, modIdsIn: string[], enableIn: boolean, optionsIn?: IEnableOptions) => Bluebird<void>;
export { setModsEnabled, };
