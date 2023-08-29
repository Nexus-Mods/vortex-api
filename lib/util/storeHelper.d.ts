/**
 * Helper functions when working with immutable state (or immutable objects in general)
 */
import { IGameStored } from '../extensions/gamemode_management/types/IGameStored';
import Promise from 'bluebird';
import * as Redux from 'redux';
/**
 * return an item from state or the fallback if the path doesn't lead
 * to an item.
 *
 * @export
 * @template T
 * @param {*} state
 * @param {string[]} path
 * @param {T} fallback
 * @returns {T}
 */
export declare function getSafe<T>(state: any, path: Array<(string | number)>, fallback: T): T;
/**
 * case insensitive variant of getSafe
 */
export declare function getSafeCI<T>(state: any, path: Array<(string | number)>, fallback: T): T;
export declare function mutateSafe<T>(state: T, path: Array<(string | number)>, value: any): void;
/**
 * set an item in state, creating all intermediate nodes as necessary
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {*} value
 * @returns {T}
 */
export declare function setSafe<T extends object>(state: T, path: Array<(string | number)>, value: any): T;
/**
 * sets a value or do nothing if the path (except for the last element) doesn't exist.
 * That is: setOrNop does not create the object hierarchy referenced in the path but
 * it does add a new attribute to the object if necessary.
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {*} value
 * @returns {T}
 */
export declare function setOrNop<T>(state: T, path: string[], value: any): T;
/**
 * sets a value or do nothing if the path or the key (last element of the path) doesn't exist.
 * This means changeOrNop only changes a pre-existing object attribute
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {*} value
 * @returns {T}
 */
export declare function changeOrNop<T>(state: T, path: Array<(string | number)>, value: any): T;
/**
 * delete a value or do nothing if the path doesn't exist
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @returns {T}
 */
export declare function deleteOrNop<T>(state: T, path: Array<(string | number)>): T;
export declare function setDefaultArray<T>(state: T, path: Array<(string | number)>, fallback: any[]): T;
/**
 * push an item to an array inside state. This creates all intermediate
 * nodes and the array itself as necessary
 * @param state immutable object to update
 * @param path path to the item to update
 * @param value the value to add.
 */
export declare function pushSafe<T>(state: T, path: Array<(string | number)>, value: any): T;
/**
 * add an item to an array inside state but don't allow duplicates
 * @param state immutable object to update
 * @param path path to the item to update
 * @param value the value to add.
 */
export declare function addUniqueSafe<T>(state: T, path: Array<(string | number)>, value: any): T;
/**
 * remove a value from an array by value
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {*} value
 * @returns {T}
 */
export declare function removeValue<T>(state: T, path: Array<(string | number)>, value: any): T;
/**
 * remove all vales for which the predicate applies
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {(element: any) => boolean} predicate
 * @returns {T}
 */
export declare function removeValueIf<T extends object>(state: T, path: Array<(string | number)>, predicate: (element: any) => boolean): T;
/**
 * shallow merge a value into the store at the specified location
 *
 * @export
 * @template T
 * @param {T} state
 * @param {string[]} path
 * @param {Object} value
 * @returns {T}
 */
export declare function merge<T extends object>(state: T, path: Array<(string | number)>, value: any): T;
export declare function rehydrate<T extends object>(state: T, inbound: any, path: string[], replace: boolean, defaults: any): T;
/**
 * return the stored static details about the currently selected game mode
 * or a fallback with the id '__placeholder'
 * the return value is a promise because known games are loaded during extension
 * initialization so there is quite a bit of code where we can't be sure
 * if this is yet available
 *
 * @export
 * @param {*} state
 * @returns {Promise<IGameStored>}
 */
export declare function currentGame(store: Redux.Store<any>): Promise<IGameStored>;
