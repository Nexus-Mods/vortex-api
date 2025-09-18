import { IProfile } from './types/IProfile';
import { ICacheObject, OutputParametricSelector, ParametricSelector } from 're-reselect';
import { IState } from '../../types/IState';
export declare const activeGameId: (state: IState) => string;
export declare const gameProfiles: ((state: IState) => IProfile[]) & import("reselect").OutputSelectorFields<(args_0: string, args_1: {
    [profileId: string]: IProfile;
}) => IProfile[] & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const activeProfile: (state: any) => IProfile;
export declare function profileById(state: IState, profileId: string): IProfile;
export declare const lastActiveProfileForGame: ParametricSelector<IState, string, string> & {
    resultFunc: (res1: {
        [gameId: string]: string;
    }, res2: string) => string;
    dependencies: [ParametricSelector<IState, string, {
        [gameId: string]: string;
    }>, ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, string, (res1: {
        [gameId: string]: string;
    }, res2: string) => string, [ParametricSelector<IState, string, {
        [gameId: string]: string;
    }>, ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
