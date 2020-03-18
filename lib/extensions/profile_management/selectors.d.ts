import { IProfile } from './types/IProfile';
import { ICacheObject, OutputParametricSelector, ParametricSelector } from 're-reselect';
import { OutputSelector } from 'reselect';
import { IState } from '../../types/IState';
export declare const activeGameId: (state: any) => string;
export declare const gameProfiles: OutputSelector<any, IProfile[], (res1: string, res2: {
    [id: string]: IProfile;
}) => IProfile[]>;
export declare const activeProfile: (state: any) => IProfile;
export declare const profileById: ParametricSelector<IState, string, IProfile> & {
    resultFunc: (res1: {
        [profileId: string]: IProfile;
    }, res2: string) => IProfile;
    dependencies: [ParametricSelector<IState, string, {
        [profileId: string]: IProfile;
    }>, ParametricSelector<IState, string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: IState, props: string, ...args: any[]) => OutputParametricSelector<IState, string, IProfile, (res1: {
        [profileId: string]: IProfile;
    }, res2: string) => IProfile, [ParametricSelector<IState, string, {
        [profileId: string]: IProfile;
    }>, ParametricSelector<IState, string, string>]>;
    removeMatchingSelector: (state: IState, props: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<IState, string>;
};
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
