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
export default init;
