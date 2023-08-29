import { IState } from '../../../types/IState';
/**
 * retrieve the Category from the Store returning the full category path.
 *
 * @param {number} category
 * @param {Redux.Store<any>} store
 */
export declare function resolveCategoryPath(category: string, state: IState): string;
export declare function resolveCategoryId(name: string, state: IState): number;
/**
 * retrieve the Category from the Store
 *
 * @param {number} category
 * @param {Redux.Store<any>} store
 */
export declare function resolveCategoryName(category: string, state: IState): string;
