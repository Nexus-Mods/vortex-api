import * as Promise from 'bluebird';
import I18next from 'i18next';
declare let fallbackTFunc: I18next.TFunction;
export { fallbackTFunc };
export interface IInitResult {
    i18n: I18next.i18n;
    tFunc: I18next.TFunction;
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
export declare function globalT(key: string | string[], options: I18next.TOptions): string;
export declare function debugTranslations(enable?: boolean): void;
export declare function getMissingTranslations(): {
    common: {};
};
export default init;
