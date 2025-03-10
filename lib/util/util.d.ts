/// <reference types="node" />
import { Normalize } from './getNormalizeFunc';
import Bluebird from 'bluebird';
import * as Redux from 'redux';
import * as semver from 'semver';
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
export declare function setdefault<T, K extends keyof T>(obj: T, key: K, def: T[K]): T[K];
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
 * @param skip properties to skip in the diff, string array
 */
export declare function objDiff(lhs: any, rhs: any, skip?: string[]): any;
export declare function restackErr(error: Error, stackErr: Error): Error;
/**
 * create a "queue".
 * Returns an enqueue function such that that the callback passed to it
 * will be called only after everything before it in the queue is finished
 * and with the promise that nothing else in the queue is run in parallel.
 */
export declare function makeQueue<T>(): (func: () => Bluebird<T>, tryOnly: boolean) => Bluebird<T>;
/**
 * spawn this application itself
 * @param args
 */
export declare function spawnSelf(args: string[]): void;
export declare function bytesToString(bytes: number): string;
export declare function largeNumToString(num: number): string;
export declare function pad(value: number, padding: string, width: number): string;
export declare function timeToString(seconds: number): string;
export declare function encodeHTML(input: string): string;
export declare function decodeHTML(input: string): string;
export declare function getAllPropertyNames(obj: object): string[];
/**
 * test if a directory is a sub-directory of another one
 * @param child path of the presumed sub-directory
 * @param parent path of the presumed parent directory
 */
export declare function isChildPath(child: string, parent: string, normalize?: Normalize): boolean;
export declare function isReservedDirectory(dirPath: string, normalize?: Normalize): boolean;
export declare function ciEqual(lhs: string, rhs: string, locale?: string): boolean;
/**
 * take any input string and sanitize it into a valid css id
 */
export declare function sanitizeCSSId(input: string): string;
/**
 * remove the BOM from the input string. doesn't do anything if there is none.
 */
export declare function deBOM(input: string): string;
/**
 * escape a string for use in a regular expression
 * @param string
 */
export declare function escapeRE(input: string): string;
export interface ITimeoutOptions {
    cancel?: boolean;
    throw?: boolean;
    queryContinue?: () => Bluebird<boolean>;
}
/**
 * set a timeout for a promise. When the timeout expires the promise returned by this
 * resolves with a value of undefined (or throws a TimeoutError).
 * @param prom the promise that should be wrapped
 * @param delayMS the time in milliseconds after which this should return
 * @param options options detailing how this timeout acts
 */
export declare function timeout<T>(prom: Bluebird<T>, delayMS: number, options?: ITimeoutOptions): Bluebird<T>;
/**
 * wait for the specified number of milliseconds before resolving the promise.
 * Bluebird has this feature as Promise.delay but when using es6 default promises this can be used
 */
export declare function delay(timeoutMS: number): Bluebird<void>;
/**
 * characters invalid in a file path
 */
declare const INVALID_FILEPATH_CHARACTERS: string[];
/**
 * characters invalid in a file name
 */
declare const INVALID_FILENAME_CHARACTERS: any[];
declare const INVALID_FILENAME_RE: RegExp;
export declare function isFilenameValid(input: string): boolean;
/**
 * encodes a string so it can safely be used as a filename
 */
export declare function sanitizeFilename(input: string): string;
export declare function isPathValid(input: string, allowRelative?: boolean): boolean;
export { INVALID_FILEPATH_CHARACTERS, INVALID_FILENAME_RE, INVALID_FILENAME_CHARACTERS, };
export declare function isMajorDowngrade(previous: string, current: string): boolean;
export interface IFlattenParameters {
    maxLength?: number;
    separator?: string;
    baseKey?: string[];
    nonEnumerable?: boolean;
}
/**
 * turn an object into a flat one meaning all values are PODs, no nested objects/arrays
 * @param obj the input object
 * @param options parameters controlling the flattening process
 */
export declare function flatten(obj: any, options?: IFlattenParameters): any;
export declare function toPromise<ResT>(func: (cb: any) => void): Bluebird<ResT>;
export declare function makeUnique<T>(input: T[]): T[];
/**
 * create a list with only "unique" items, using a key function to determine uniqueness.
 * in case of collisions the last item with a key is kept
 * @param input the input list of items
 * @param key key function
 * @returns a list with duplicates removed
 */
export declare function makeUniqueByKey<T>(input: T[], key: (item: T) => string): T[];
export declare function withTmpDir<T>(cb: (tmpPath: string) => Promise<T>): Promise<T>;
export declare function unique<T, U>(input: T[], keyFunc?: (item: T) => U): T[];
export declare function delayed(delayMS: number): Promise<void>;
export declare function toBlue<T, ArgsT extends any[]>(func: (...args: ArgsT) => Promise<T>): (...args: ArgsT) => Bluebird<T>;
export declare function replaceRecursive(input: any, from: any, to: any): any;
export declare function semverCoerce(input: string, options?: semver.CoerceOptions): semver.SemVer;
export declare function batchDispatch(store: Redux.Dispatch | Redux.Store, actions: Redux.Action[]): void;
export declare function isFunction(functionToCheck: any): boolean;
/**
 * wrap a callback provided by an extension such that we don't allow reports
 * for that extension and display the extension name if possible
 * @param cb the callback to wrap
 * @param ext name of the extension that provided the callback
 * @returns a new callback with an identical call signature
 *
 * @note As a side-effect this also ensures promises returned from the extension
 *       are bluebird extensions.
 *       This should allow extension authors to use native extension without
 *       causing surprising bugs
 */
export declare function wrapExtCBAsync<ArgT extends any[], ResT>(cb: (...args: ArgT) => PromiseLike<ResT>, extInfo?: {
    name: string;
    official: boolean;
}): (...args: ArgT) => Bluebird<ResT>;
export declare function wrapExtCBSync<ArgT extends any[], ResT>(cb: (...args: ArgT) => ResT, extInfo?: {
    name: string;
    official: boolean;
}): (...args: ArgT) => ResT;
export declare enum Section {
    Mods = 0,
    Collections = 1,
    Users = 2
}
export declare enum Campaign {
    ViewCollection = "view_collection",
    ViewCollectionAsCurator = "curator_view_collection",
    BuyPremium = "buy_premium"
}
export declare enum Source {
    HeaderAd = "header_ad",
    DownloadsBannerAd = "downloads_banner_ad",
    DownloadsNagAd = "downloads_nag_ad",
    DashboardAd = "dashboard_ad",
    CollectionsAd = "collections_ad",
    SettingsAd = "settings_ad"
}
export interface INexusURLOptions {
    section?: Section;
    source?: Source;
    campaign?: Campaign | string;
    parameters?: string[];
}
export declare function nexusModsURL(reqPath: string[], options?: INexusURLOptions): string;
export declare function filteredEnvironment(): NodeJS.ProcessEnv;
export declare function parseBool(input: string): boolean;
export declare class Overlayable<KeyT extends string | number | symbol, ObjT> {
    private mBaseData;
    private mLayers;
    private mDeduce;
    constructor(baseData: Record<KeyT, ObjT>, deduceLayer: (key: KeyT, extraArg: any) => string);
    setLayer(layerId: string, data: Record<KeyT, Partial<ObjT>>): void;
    keys(): string[];
    has(key: KeyT): boolean;
    get<AttrT extends keyof ObjT, ValT extends ObjT[AttrT]>(key: KeyT, attr: AttrT, extraArg?: any): ValT;
    get baseData(): Record<KeyT, ObjT>;
}
/**
 * helper function to create a dictionary that can have conditional
 * overlays applied to it
 * @param baseData the base data object
 * @param layers keyed layers
 * @param deduceLayer determine the layer to be used for a given key. If this returns
 * @returns
 */
export declare function makeOverlayableDictionary<KeyT extends string | number | symbol, ValueT>(baseData: Record<KeyT, ValueT>, layers: {
    [layerId: string]: Record<KeyT, Partial<ValueT>>;
}, deduceLayer: (key: KeyT, extraArg: any) => string): Overlayable<KeyT, ValueT>;
