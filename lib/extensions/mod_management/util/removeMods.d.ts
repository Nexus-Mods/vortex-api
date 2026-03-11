import PromiseBB from "bluebird";
import type { IExtensionApi } from "../../../types/IExtensionContext";
export declare function removeMod(api: IExtensionApi, gameId: string, modId: string): PromiseBB<void>;
export declare function removeMods(api: IExtensionApi, gameId: string, modIds: string[]): PromiseBB<void>;
