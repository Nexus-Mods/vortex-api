/**
 * wrapper for the fs / fs-extra-promise module
 * this allows us to customise the behaviour of fs function across the application.
 * The api should remain compatible with fs-extra-promise, but extensions can be made
 * Notable behaviour changes:
 * - common async functions now retrieve a backtrace before calling, so that on error
 *   they can provide a useful backtrace to where the function was called
 *   (for many error cases the original function didn't have a stack trace in the first place)
 * - retrying on functions that commonly fail temporarily due to external applications
 *   (virus scanners, functions called from vortex) locking files.
 * - ignoring ENOENT error when deleting a file.
 */
/// <reference types="node" />
import { TFunction } from './i18n';
import * as PromiseBB from 'bluebird';
import * as fs from 'fs-extra-promise';
export { constants, FSWatcher, Stats, WriteStream } from 'fs';
export { accessSync, closeSync, createReadStream, createWriteStream, linkSync, openSync, readFileSync, readJSONSync, statSync, symlinkSync, watch, writeFileSync, writeSync, } from 'fs-extra-promise';
export interface ILinkFileOptions {
    showDialogCallback?: () => boolean;
}
export interface IRemoveFileOptions {
    showDialogCallback?: () => boolean;
}
declare const chmodAsync: typeof fs.chmodAsync;
declare const closeAsync: typeof fs.closeAsync;
declare const fsyncAsync: typeof fs.fsyncAsync;
declare const lstatAsync: typeof fs.lstatAsync;
declare const mkdirAsync: typeof fs.mkdirAsync;
declare const mkdirsAsync: typeof fs.mkdirsAsync;
declare const moveAsync: typeof fs.moveAsync;
declare const openAsync: typeof fs.openAsync;
declare const readdirAsync: typeof fs.readdirAsync;
declare const readFileAsync: typeof fs.readFileAsync;
declare const statAsync: typeof fs.statAsync;
declare const symlinkAsync: typeof fs.symlinkAsync;
declare const utimesAsync: typeof fs.utimesAsync;
declare const writeAsync: typeof fs.writeAsync;
declare const writeFileAsync: typeof fs.writeFileAsync;
declare const isDirectoryAsync: typeof fs.isDirectoryAsync;
export { chmodAsync, closeAsync, fsyncAsync, lstatAsync, mkdirAsync, mkdirsAsync, moveAsync, openAsync, readdirAsync, readFileAsync, statAsync, symlinkAsync, utimesAsync, writeAsync, writeFileAsync, isDirectoryAsync, };
export declare function ensureDirSync(dirPath: string): void;
export declare function ensureFileAsync(filePath: string): PromiseBB<void>;
export declare function ensureDirAsync(dirPath: string): PromiseBB<void>;
/**
 * copy file
 * The copy function from fs-extra doesn't (at the time of writing) correctly check that a file
 * isn't copied onto itself (it fails for links or potentially on case insensitive disks),
 * so this makes a check based on the ino number.
 * Unfortunately a bug in node.js (https://github.com/nodejs/node/issues/12115) prevents this
 * check from working reliably so it can currently be disabled.
 * @param src file to copy
 * @param dest destination path
 * @param options copy options (see documentation for fs)
 */
export declare function copyAsync(src: string, dest: string, options?: fs.CopyOptions & {
    noSelfCopy?: boolean;
    showDialogCallback?: () => boolean;
}): PromiseBB<void>;
export declare function linkAsync(src: string, dest: string, options?: ILinkFileOptions): PromiseBB<void>;
export declare function removeSync(dirPath: string): void;
export declare function unlinkAsync(filePath: string, options?: IRemoveFileOptions): PromiseBB<void>;
export declare function renameAsync(sourcePath: string, destinationPath: string): PromiseBB<void>;
export declare function rmdirAsync(dirPath: string): PromiseBB<void>;
export declare function removeAsync(remPath: string, options?: IRemoveFileOptions): PromiseBB<void>;
export declare function readlinkAsync(linkPath: string): PromiseBB<string>;
export declare function ensureDirWritableAsync(dirPath: string, confirm: () => PromiseBB<void>): PromiseBB<void>;
export declare function changeFileOwnership(filePath: string, stat: fs.Stats): PromiseBB<void>;
export declare function changeFileAttributes(filePath: string, wantedAttributes: number, stat: fs.Stats): PromiseBB<void>;
export declare function makeFileWritableAsync(filePath: string): PromiseBB<void>;
export declare function forcePerm<T>(t: TFunction, op: () => PromiseBB<T>, filePath?: string, maxTries?: number): PromiseBB<T>;
