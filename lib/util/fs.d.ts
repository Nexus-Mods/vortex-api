/// <reference types="bluebird" />
/// <reference types="i18next" />
import * as Promise from 'bluebird';
import * as fs from 'fs-extra-promise';
import * as I18next from 'i18next';
export { constants, FSWatcher, Stats, WriteStream } from 'fs';
export { accessSync, chmodAsync, closeAsync, closeSync, createReadStream, createWriteStream, fsyncAsync, linkAsync, linkSync, lstatAsync, moveAsync, openSync, openAsync, readFileSync, readlinkAsync, readJSONSync, removeSync, statAsync, statSync, symlinkAsync, watch, writeSync } from 'fs-extra-promise';
declare const mkdirAsync: typeof fs.mkdirAsync;
declare const utimesAsync: typeof fs.utimesAsync;
declare const readdirAsync: typeof fs.readdirAsync;
declare const readFileAsync: typeof fs.readFileAsync;
declare const writeAsync: typeof fs.writeAsync;
declare const writeFileAsync: typeof fs.writeFileAsync;
declare const renameAsync: typeof fs.renameAsync;
export { mkdirAsync, readdirAsync, readFileAsync, renameAsync, utimesAsync, writeAsync, writeFileAsync };
export declare function ensureDirSync(dirPath: string): void;
export declare function ensureFileAsync(filePath: string): Promise<void>;
export declare function ensureDirAsync(dirPath: string): Promise<void>;
export declare function copyAsync(src: string, dest: string, options?: RegExp | ((src: string, dest: string) => boolean) | fs.CopyOptions): Promise<void>;
export declare function removeAsync(dirPath: string): Promise<void>;
export declare function unlinkAsync(dirPath: string): Promise<void>;
export declare function rmdirAsync(dirPath: string): Promise<void>;
export declare function ensureDirWritableAsync(dirPath: string, confirm: () => Promise<void>): Promise<void>;
export declare function forcePerm<T>(t: I18next.TranslationFunction, op: () => Promise<T>): Promise<T>;
