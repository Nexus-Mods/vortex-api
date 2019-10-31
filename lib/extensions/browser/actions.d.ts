import { Action } from 'redux';
declare type ShowUrlFunc = (url: string, instructions?: string, subscriber?: string) => Action<{
    url: string;
    instructions: string;
    subscriber: string;
}>;
export declare const showURL: ShowUrlFunc;
export declare const closeBrowser: import("redux-act").EmptyActionCreator;
export {};
