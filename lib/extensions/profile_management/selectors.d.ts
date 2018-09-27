import { IProfile } from './types/IProfile';
import { IState } from '../../types/IState';
export declare const activeGameId: (state: any) => string;
export declare const gameProfiles: import("../../../../../Work/Vortex/node_modules/reselect").OutputSelector<any, IProfile[], (res1: string, res2: {
    [id: string]: IProfile;
}) => IProfile[]>;
export declare const activeProfile: (state: any) => IProfile;
export declare const profileById: import("../../../../../Work/Vortex/node_modules/re-reselect").ParametricSelector<IState, string, IProfile> & {
    resultFunc: (res1: {
        [profileId: string]: IProfile;
    }, res2: string) => IProfile;
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => import("../../../../../Work/Vortex/node_modules/re-reselect").OutputParametricSelector<IState, string, IProfile, (res1: {
        [profileId: string]: IProfile;
    }, res2: string) => IProfile>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: {
        [profileId: string]: IProfile;
    }, res2: string) => IProfile;
    cache: import("../../../../../Work/Vortex/node_modules/re-reselect").ICacheObject;
};
export declare const lastActiveProfileForGame: import("../../../../../Work/Vortex/node_modules/re-reselect").ParametricSelector<IState, string, string> & {
    resultFunc: (res1: {
        [gameId: string]: string;
    }, res2: string) => string;
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => import("../../../../../Work/Vortex/node_modules/re-reselect").OutputParametricSelector<IState, string, string, (res1: {
        [gameId: string]: string;
    }, res2: string) => string>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    resultFunc: (res1: {
        [gameId: string]: string;
    }, res2: string) => string;
    cache: import("../../../../../Work/Vortex/node_modules/re-reselect").ICacheObject;
};
