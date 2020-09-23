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
import PromiseBB from 'bluebird';
import * as fs from 'fs-extra';
import * as tmp from 'tmp';
export { constants, FSWatcher, Stats, WriteStream } from 'fs';
export { accessSync, closeSync, createReadStream, createWriteStream, linkSync, openSync, readFileSync, statSync, symlinkSync, watch, writeFileSync, writeSync, } from 'fs';
export interface ILinkFileOptions {
    showDialogCallback?: () => boolean;
}
export interface IRemoveFileOptions {
    showDialogCallback?: () => boolean;
}
export declare function genFSWrapperAsync<T extends (...args: any[]) => any>(func: T): T;
declare const chmodAsync: (path: string, mode: string | number) => PromiseBB<void>;
declare const closeAsync: (fd: number) => PromiseBB<void>;
declare const fsyncAsync: (fd: number) => PromiseBB<void>;
declare const lstatAsync: (path: string) => PromiseBB<fs.Stats>;
declare const mkdirAsync: (path: string) => PromiseBB<void>;
declare const mkdirsAsync: (path: string) => PromiseBB<void>;
declare const moveAsync: (src: string, dest: string, options?: fs.MoveOptions) => PromiseBB<void>;
declare const openAsync: (path: string, flags: string | number, mode?: number) => PromiseBB<number>;
declare const readdirAsync: (path: string) => PromiseBB<string[]>;
declare const readFileAsync: (...args: any[]) => PromiseBB<any>;
declare const statAsync: (path: string) => PromiseBB<fs.Stats>;
declare const statSilentAsync: (path: string) => PromiseBB<fs.Stats>;
declare const symlinkAsync: (srcpath: string, dstpath: string, type?: string) => PromiseBB<void>;
declare const utimesAsync: (path: string, atime: number, mtime: number) => PromiseBB<void>;
declare const writeAsync: (...args: any[]) => PromiseBB<fs.WriteResult>;
declare const readAsync: (...args: any[]) => PromiseBB<fs.ReadResult>;
declare const writeFileAsync: (file: string, data: any, options?: fs.WriteFileOptions) => PromiseBB<void>;
export { chmodAsync, closeAsync, fsyncAsync, lstatAsync, mkdirAsync, mkdirsAsync, moveAsync, openAsync, readdirAsync, readAsync, readFileAsync, statAsync, statSilentAsync, symlinkAsync, utimesAsync, writeAsync, writeFileAsync, };
export declare function isDirectoryAsync(dirPath: string): PromiseBB<boolean>;
export declare function ensureDirSync(dirPath: string): void;
export declare function ensureFileAsync(filePath: string): PromiseBB<void>;
export declare function ensureDirAsync(dirPath: string, onDirCreatedCB?: (created: string) => PromiseBB<void>): PromiseBB<void>;
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
export declare function ensureDirWritableAsync(dirPath: string, confirm?: () => PromiseBB<void>): PromiseBB<void>;
export declare function changeFileOwnership(filePath: string, stat: fs.Stats): PromiseBB<void>;
export declare function changeFileAttributes(filePath: string, wantedAttributes: number, stat: fs.Stats): PromiseBB<void>;
export declare function makeFileWritableAsync(filePath: string): PromiseBB<void>;
export declare function forcePerm<T>(t: TFunction, op: () => PromiseBB<T>, filePath?: string, maxTries?: number): PromiseBB<T>;
export declare function withTmpDirImpl<T>(cb: (tmpPath: string) => PromiseBB<T>): PromiseBB<T>;
export interface ITmpOptions {
    cleanup?: boolean;
}
declare function withTmpFileImpl<T>(cb: (fd: number, name: string) => PromiseBB<T>, options?: ITmpOptions & tmp.FileOptions): PromiseBB<T>;
declare const withTmpDir: typeof withTmpDirImpl;
declare const withTmpFile: typeof withTmpFileImpl;
export { withTmpDir, withTmpFile, };
