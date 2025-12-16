import { IModSourceOptions } from "../../../types/IExtensionContext";
import { IModSource } from "../types/IModSource";
export declare function getModSources(): IModSource[];
export declare function getModSource(id: string): IModSource;
export declare function registerModSource(id: string, name: string, onBrowse?: () => void, options?: IModSourceOptions): void;
