/// <reference types="i18next" />
import { IMod } from '../../mod_management/types/IMod';
import { ICategory } from '../types/ICategoryDictionary';
import { ICategoriesTree } from '../types/ITrees';
import * as I18next from 'i18next';
/**
 * create the treeDataObject from the categories inside the store
 *
 * @param {Object} categories
 * @param {any} mods
 * @return {[]} categoryList
 *
 */
declare function createTreeDataObject(t: I18next.TranslationFunction, categories: {
    [categoryId: string]: ICategory;
}, mods: {
    [modId: string]: IMod;
}): ICategoriesTree[];
export default createTreeDataObject;
