import { IMod } from '../../mod_management/types/IMod';
import { TFunction } from 'i18next';
/**
 * generate the category's subtitle
 *
 * @param {string} rootId
 * @param {any} mods
 * @return {string}
 */
declare function generateSubtitle(t: TFunction, categoryId: string, mods: {
    [categoryId: string]: IMod[];
}, totalChildModCount?: number): string;
export default generateSubtitle;
