/// <reference types="node" />
/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import * as fs from 'fs-extra-promise';
import * as Redux from 'redux';
/**
 * count the elements in an array for which the predicate matches
 *
 * @export
 * @template T
 * @param {T[]} container
 * @param {(value: T) => boolean} predicate
 * @returns {number}
 */
export declare function countIf<T>(container: T[], predicate: (value: T) => boolean): number;
/**
 * calculate the sum of the elements of an array
 *
 * @export
 * @param {number[]} container
 * @returns {number}
 */
export declare function sum(container: number[]): number;
/**
 * like the python setdefault function:
 * returns the attribute "key" from "obj". If that attribute doesn't exist
 * on obj, it will be set to the default value and that is returned.
 */
export declare function setdefault<T>(obj: any, key: PropertyKey, def: T): T;
export declare function writeFileAtomic(filePath: string, data: string | Buffer | Uint8Array, options?: fs.WriteFileOptions): Promise<void>;
/**
 * copy a file in such a way that it will not replace the target if the copy is
 * somehow interrupted. The file is first copied to a temporary file in the same
 * directory as the destination, then deletes the destination and renames the temp
 * to destination. Since the rename is atomic and the deletion only happens after
 * a successful write this should minimize the risk of error.
 *
 * @export
 * @param {string} srcPath
 * @param {string} destPath
 * @returns {Promise<void>}
 */
export declare function copyFileAtomic(srcPath: string, destPath: string): Promise<void>;
export declare function removePersistent(store: Redux.Store<any>, destPath: string): Promise<void>;
/**
 * An ellipsis ("this text is too lo...") function. Usually these
 * functions clip the text at the end but often (i.e. when
 * clipping file paths) the end of the text is the most interesting part,
 * so this function clips the middle part of the input.
 * @param input the input text
 * @param maxLength the maximum number of characters (including ...)
 * @return the shortened text
 */
export declare function midClip(input: string, maxLength: number): string;
/**
 * test if a string is null, undefined or consists only of whitespaces
 * @param {string} check the string to check
 */
export declare function isNullOrWhitespace(check: string): boolean;
/**
 * return whether the specified value is "truthy" (not one of
 * these: undefined, null, 0, -0, NaN "")
 *
 * Obviously one could just do "if (val)" but js noobs
 * may not be aware what values that accepts exactly and whether that was
 * intentional. This is more explicit.
 */
export declare function truthy(val: any): boolean;
/**
 * return the delta between two objects
 * @param lhs the left, "before", object
 * @param rhs the right, "after", object
 */
export declare function objDiff(lhs: any, rhs: any): any;
/**
 * spawn this application itself
 * @param args
 */
export declare function spawnSelf(args: string[]): void;
export declare function bytesToString(bytes: number): string;
export declare function encodeHTML(input: string): string;
export declare function decodeHTML(input: string): string;
/**
 * test if a directory is a sub-directory of another one
 * @param child path of the presumed sub-directory
 * @param parent path of the presumed parent directory
 */
export declare function isChildPath(child: string, parent: string): boolean;
