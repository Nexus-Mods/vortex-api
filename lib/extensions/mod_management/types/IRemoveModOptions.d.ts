import { IMod } from "../types/IMod";
export interface IRemoveModOptions {
    silent?: boolean;
    willBeReplaced?: boolean;
    incomplete?: boolean;
    ignoreInstalling?: boolean;
    modData?: IMod;
    progressCB?: (numRemoved: number, numTotal: number, name: string) => void;
}
