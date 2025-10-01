import { IModLookupInfo } from '../mod_management/util/testModReference';
import { IState } from '../../types/IState';
export declare const currentLoadOrderForProfile: ((state: any, profileId: string) => any) & import("reselect").OutputSelectorFields<(...args: any) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const currentGameMods: ((state: IState) => {
    [modId: string]: import("../mod_management/types/IMod").IMod;
}) & import("reselect").OutputSelectorFields<(args_0: import("../../types/IState").IModTable, args_1: string) => {
    [modId: string]: import("../mod_management/types/IMod").IMod;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const currentModStateForProfile: ((state: IState, profileId: string) => {
    [id: string]: import("../profile_management/types/IProfile").IProfileMod;
}) & import("reselect").OutputSelectorFields<(args_0: import("../profile_management/types/IProfile").IProfile) => {
    [id: string]: import("../profile_management/types/IProfile").IProfileMod;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const enabledMods: ((state: IState, profileId: string) => IModLookupInfo[]) & import("reselect").OutputSelectorFields<(args_0: {
    [modId: string]: import("../mod_management/types/IMod").IMod;
}, args_1: {
    [id: string]: import("../profile_management/types/IProfile").IProfileMod;
}) => IModLookupInfo[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const isModEnabled: ((state: any, profileId: string) => boolean) & import("reselect").OutputSelectorFields<(args_0: {
    [modId: string]: import("../mod_management/types/IMod").IMod;
}, args_1: {
    [id: string]: import("../profile_management/types/IProfile").IProfileMod;
}, args_2: string) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
