/// <reference types="i18next" />
import { IMod } from '../../mod_management/types/IMod';
import * as I18next from 'i18next';
/**
 * generate the category's subtitle
 *
 * @param {string} rootId
 * @param {any} mods
 * @return {string}
 */
declare function generateSubtitle(t: I18next.TranslationFunction, categoryId: string, mods: {
    [categoryId: string]: IMod[];
}): any;
export default generateSubtitle;
