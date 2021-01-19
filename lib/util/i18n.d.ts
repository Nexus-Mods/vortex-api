import { IExtension } from '../extensions/extension_manager/types';
import Promise from 'bluebird';
import I18next, { i18n, TOptions } from 'i18next';
declare type TFunction = typeof I18next.t;
declare const fallbackTFunc: TFunction;
export { fallbackTFunc, i18n, TFunction };
export interface IInitResult {
    i18n: i18n;
    tFunc: TFunction;
    error?: Error;
}
/**
 * initialize the internationalization library
 *
 * @export
 * @param {string} language
 * @returns {I18next.I18n}
 */
declare function init(language: string, translationExts: () => IExtension[]): Promise<IInitResult>;
export declare function getCurrentLanguage(): string;
export declare function globalT(key: string | string[], options: TOptions): string;
export declare function debugTranslations(enable?: boolean): void;
export declare function getMissingTranslations(): {
    common: {};
};
export interface ITString {
    key: string;
    options?: TOptions;
    toString(): string;
}
export declare class TString implements ITString {
    private mKey;
    private mOptions;
    constructor(key: string, options: TOptions, namespace: string);
    get key(): string;
    get options(): TOptions;
    toString(): string;
}
export declare const laterT: TFunction;
/**
 * translate an input string. If key is a string or string array, this just
 * forwards the parameters to the t function.
 * If it is an ITString object, will translate using with the parameters stored
 * within
 * @param t the actual translation function to invok
 * @param key translation key, keys or ITString object
 * @param options translations options. this will take precedence over those specified at
 *                the time the ITString was created
 * @param onlyTString if set to true and the key is a string, assume it's already the translated
 *                    string and don't translate again. This is mostly for backwards compatibility
 */
export declare function preT(t: TFunction, key: string | string[] | ITString, options?: TOptions, onlyTString?: boolean): string;
export default init;
