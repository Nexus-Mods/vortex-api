import { IProfile } from './types/IProfile';
export declare const activeGameId: (state: any) => string;
export declare const gameProfiles: ((state: any) => IProfile[]) & {
    resultFunc: (res1: string, res2: any) => IProfile[];
    recomputations: () => number;
    resetRecomputations: () => number;
};
export declare const activeProfile: (state: any) => IProfile;
