import { IExtensionContext } from '../../types/IExtensionContext';
export declare type TestEvent = 'settings-changed' | 'gamemode-activated' | 'profile-did-change' | 'mod-installed' | 'mod-activated';
declare function init(context: IExtensionContext): boolean;
export default init;
