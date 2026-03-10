import Promise from "bluebird";
import { IExtensionApi } from "../../../types/IExtensionContext";
export declare function removeMod(api: IExtensionApi, gameId: string, modId: string): Promise<void>;
export declare function removeMods(api: IExtensionApi, gameId: string, modIds: string[]): Promise<void>;
