import { IAvailableExtension, IExtension } from "./types";
import { IExtensionOptional } from "../../types/api";
export declare const setAvailableExtensions: import("redux-act").ComplexActionCreator1<IAvailableExtension[], IAvailableExtension[], {}>;
export declare const setInstalledExtensions: import("redux-act").ComplexActionCreator1<{
    [extId: string]: IExtension;
}, {
    [extId: string]: IExtension;
}, {}>;
export declare const setExtensionsUpdate: import("redux-act").ComplexActionCreator1<number, number, {}>;
export declare const setOptionalExtensions: import("redux-act").ComplexActionCreator1<{
    [extId: string]: IExtensionOptional[];
}, {
    [extId: string]: IExtensionOptional[];
}, {}>;
