/// <reference types="bluebird" />
import * as Promise from 'bluebird';
/**
 * promise-equivalent of setTimeout
 *
 * @export
 * @param {number} durationMS
 * @param {*} [value]
 * @returns
 */
export declare function delayed(durationMS: number, value?: any): Promise<{}>;
export default delayed;
