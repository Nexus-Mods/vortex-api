import { ICategory, ICategoryDictionary } from '../types/ICategoryDictionary';
import * as reduxAct from 'redux-act';
export declare const loadCategories: reduxAct.ComplexActionCreator2<string, ICategoryDictionary, {
    gameId: string;
    gameCategories: ICategoryDictionary;
}, {}>;
export declare const setCategory: reduxAct.ComplexActionCreator3<string, string, ICategory, {
    gameId: string;
    id: string;
    category: ICategory;
}, {}>;
export declare const removeCategory: reduxAct.ComplexActionCreator2<string, string, {
    gameId: string;
    id: string;
}, {}>;
export declare const setCategoryOrder: reduxAct.ComplexActionCreator2<string, string[], {
    gameId: string;
    categoryIds: string[];
}, {}>;
export declare const updateCategories: reduxAct.ComplexActionCreator2<string, ICategoryDictionary, {
    gameId: string;
    gameCategories: ICategoryDictionary;
}, {}>;
export declare const renameCategory: reduxAct.ComplexActionCreator3<string, string, string, {
    gameId: string;
    categoryId: string;
    name: string;
}, {}>;
