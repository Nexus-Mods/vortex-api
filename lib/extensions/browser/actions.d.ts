import { Action } from 'redux';
type ShowUrlFunc = (url: string, instructions?: string, subscriber?: string, skippable?: boolean) => Action<{
    url: string;
    instructions: string;
    subscriber: string;
    skippable: boolean;
}>;
export declare const showURL: ShowUrlFunc;
export declare const closeBrowser: import("redux-act").EmptyActionCreator;
export {};
