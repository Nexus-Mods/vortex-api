import type { IMod } from "./IMod";
export interface IRemoveModOptions {
    silent?: boolean;
    willBeReplaced?: boolean;
    incomplete?: boolean;
    ignoreInstalling?: boolean;
    modData?: IMod;
    progressCB?: (numRemoved: number, numTotal: number, name: string) => void;
}
