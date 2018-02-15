/// <reference types="node" />
/// <reference types="bluebird" />
import * as fs from './fs';
import * as Promise from 'bluebird';
/**
 * recursively walk the target directory
 *
 * @param {string} target the directory to search
 * @param {any} callback called on each file and directory encountered. Receives the path and
 *                       corresponding fs stats as parameter. Should return a promise that will be
 *                       awaited before proceeding to the next directory. If this promise is
 *                       rejected, the walk is interrupted
 * @returns {Promise<void>} a promise that is resolved once the search is complete
 */
declare function walk(target: string, callback: (iterPath: string, stats: fs.Stats) => Promise<any>): Promise<void>;
export default walk;
