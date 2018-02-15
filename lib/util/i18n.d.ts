/// <reference types="i18next" />
import * as I18next from 'i18next';
export interface IInitResult {
    i18n: I18next.i18n;
    tFunc: I18next.TranslationFunction;
    error?: Error;
}
/**
 * initialize the internationalization library
 *
 * @export
 * @param {string} language
 * @returns {I18next.I18n}
 */
declare function init(language: string): Promise<IInitResult>;
export declare function getCurrentLanguage(): string;
export declare function debugTranslations(enable?: boolean): void;
export declare function getMissingTranslations(): {
    common: {};
};
export default init;
