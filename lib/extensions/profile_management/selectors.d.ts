import type { IProfile } from "./types/IProfile";
import type { IState } from "../../types/IState";
export declare const profiles: (state: IState) => {
    [profileId: string]: IProfile;
};
export declare const lastActiveProfiles: (state: IState) => {
    [gameId: string]: string;
};
export declare const activeGameId: (state: IState) => string;
export declare const gameProfiles: ((state: IState) => IProfile[]) & import("reselect").OutputSelectorFields<(args_0: string, args_1: {
    [profileId: string]: IProfile;
}) => IProfile[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const activeProfileId: (state: IState) => string | undefined;
export declare const nextProfileId: (state: IState) => string | undefined;
export declare const activeProfile: (state: IState) => IProfile | undefined;
export declare function profileById(state: IState, profileId: string): IProfile;
export declare const lastActiveProfileForGame: import("re-reselect").ParametricSelector<IState, string, string> & {
    resultFunc: (res1: {
        [gameId: string]: string;
    }, res2: string) => string;
    dependencies: [import("re-reselect").ParametricSelector<IState, string, {
        [gameId: string]: string;
    }>, import("re-reselect").ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => import("re-reselect").OutputParametricSelector<IState, string, string, (res1: {
        [gameId: string]: string;
    }, res2: string) => string, [import("re-reselect").ParametricSelector<IState, string, {
        [gameId: string]: string;
    }>, import("re-reselect").ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
