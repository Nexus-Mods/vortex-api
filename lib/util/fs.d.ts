/// <reference types="bluebird" />
/// <reference types="i18next" />
import * as Promise from 'bluebird';
import * as fs from 'fs-extra-promise';
import * as I18next from 'i18next';
export { constants, FSWatcher, Stats, WriteStream } from 'fs';
export { accessSync, closeSync, createReadStream, createWriteStream, linkSync, openSync, readFileSync, readJSONSync, removeSync, statSync, watch, writeFileSync, writeSync } from 'fs-extra-promise';
declare const chmodAsync: typeof fs.chmodAsync;
declare const closeAsync: typeof fs.closeAsync;
declare const fsyncAsync: typeof fs.fsyncAsync;
declare const linkAsync: typeof fs.linkAsync;
declare const lstatAsync: typeof fs.lstatAsync;
declare const mkdirAsync: typeof fs.mkdirAsync;
declare const moveAsync: typeof fs.moveAsync;
declare const openAsync: typeof fs.openAsync;
declare const readdirAsync: typeof fs.readdirAsync;
declare const readFileAsync: typeof fs.readFileAsync;
declare const readlinkAsync: typeof fs.readlinkAsync;
declare const statAsync: typeof fs.statAsync;
declare const symlinkAsync: typeof fs.symlinkAsync;
declare const utimesAsync: typeof fs.utimesAsync;
declare const writeAsync: typeof fs.writeAsync;
declare const writeFileAsync: typeof fs.writeFileAsync;
export { chmodAsync, closeAsync, fsyncAsync, linkAsync, lstatAsync, mkdirAsync, moveAsync, openAsync, readlinkAsync, readdirAsync, readFileAsync, statAsync, symlinkAsync, utimesAsync, writeAsync, writeFileAsync };
export declare function ensureDirSync(dirPath: string): void;
export declare function ensureFileAsync(filePath: string): Promise<void>;
export declare function ensureDirAsync(dirPath: string): Promise<void>;
/**
 * copy file
 * The copy function from fs-extra doesn't (at the time of writing) correctly check that a file isn't
 * copied onto itself (it fails for links or potentially on case insensitive disks), so this makes
 * a check based on the ino number.
 * Unfortunately a bug in node.js (https://github.com/nodejs/node/issues/12115) prevents this check from
 * working reliably so it can currently be disabled.
 * @param src file to copy
 * @param dest destination path
 * @param options copy options (see documentation for fs)
 */
export declare function copyAsync(src: string, dest: string, options?: fs.CopyOptions & {
    noSelfCopy?: boolean;
}): Promise<void>;
export declare function removeAsync(dirPath: string): Promise<void>;
export declare function unlinkAsync(dirPath: string): Promise<void>;
export declare function renameAsync(sourcePath: string, destinationPath: string): Promise<void>;
export declare function rmdirAsync(dirPath: string): Promise<void>;
export declare function ensureDirWritableAsync(dirPath: string, confirm: () => Promise<void>): Promise<void>;
export declare function forcePerm<T>(t: I18next.TranslationFunction, op: () => Promise<T>): Promise<T>;
