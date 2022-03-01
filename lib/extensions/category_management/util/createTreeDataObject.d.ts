import { IMod } from '../../mod_management/types/IMod';
import { ICategory } from '../types/ICategoryDictionary';
import { ICategoriesTree } from '../types/ITrees';
import { TFunction } from 'i18next';
/**
 * create the treeDataObject from the categories inside the store
 *
 * @param {Object} categories
 * @param {any} mods
 * @return {[]} categoryList
 *
 */
declare function createTreeDataObject(t: TFunction, categories: {
    [categoryId: string]: ICategory;
}, mods: {
    [modId: string]: IMod;
}, customSort?: (lhs: string, rhs: string) => number): ICategoriesTree[];
export default createTreeDataObject;
