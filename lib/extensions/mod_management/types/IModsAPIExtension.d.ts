import { IDeployOptions } from "./IDeployOptions";
export interface IModsAPIExtension {
    awaitNextPhaseDeployment?: () => Promise<void>;
    awaitModsDeployment?: (profileId?: string, progressCB?: (text: string, percent: number) => void, deployOptions?: IDeployOptions) => Promise<void>;
}
