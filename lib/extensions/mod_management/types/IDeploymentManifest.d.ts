import { IDeployedFile } from './IDeploymentMethod';
export interface IDeploymentManifest {
    version: number;
    instance: string;
    deploymentMethod?: string;
    deploymentTime?: number;
    stagingPath?: string;
    gameId?: string;
    targetPath?: string;
    files: IDeployedFile[];
}
export type ManifestFormat = (input: any) => IDeploymentManifest;
