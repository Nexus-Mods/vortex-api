import type { IExtensionApi } from "../../../types/IExtensionContext";
import type { IMod } from "../types/IMod";
export declare class CycleError extends Error {
    private mCycles;
    constructor(cycles: string[][]);
    get cycles(): string[][];
}
declare function sortMods(gameId: string, mods: IMod[], api: IExtensionApi): Promise<IMod[]>;
export default sortMods;
