/// <reference types="node" />
import * as Promise from 'bluebird';
export declare function writeFileAtomic(filePath: string, input: string | Buffer): Promise<void>;
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
