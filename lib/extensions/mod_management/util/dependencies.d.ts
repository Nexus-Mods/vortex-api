import type { IExtensionApi } from "../../../types/IExtensionContext";
import type { IDownload } from "../../../types/IState";
import type { IDependency } from "../types/IDependency";
import type { IMod, IModReference, IModRule } from "../types/IMod";
import Bluebird from "bluebird";
import type { IReference } from "modmeta-db";
import type { IModLookupInfo } from "./testModReference";
export declare function findModByRef(reference: IModReference, mods: {
    [modId: string]: IMod;
}, source?: {
    gameId: string;
    modId: string;
}): IMod;
export declare function lookupFromDownload(download: IDownload): IModLookupInfo;
export declare function findDownloadByRef(reference: IReference, downloads: {
    [dlId: string]: IDownload;
}): string;
/**
 * from a set of requires/recommends rules, deduce which of them need to be downloaded
 * and/or installed
 * @param rules
 * @param api
 * @param recommendations
 */
declare function gatherDependencies(rules: IModRule[], api: IExtensionApi, recommendations: boolean, progressCB?: (percent: number) => void, addToCache?: (download: IDownload) => void): Bluebird<IDependency[]>;
export default gatherDependencies;
