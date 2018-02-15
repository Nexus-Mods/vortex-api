import { IExtensionContext, IReducerSpec } from './IExtensionContext';
export interface IExtensionReducer {
    path: string[];
    reducer: IReducerSpec;
}
export declare type ExtensionInit = (context: IExtensionContext) => boolean;
