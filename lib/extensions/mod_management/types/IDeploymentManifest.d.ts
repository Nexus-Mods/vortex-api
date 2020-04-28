import { IDeployedFile } from './IDeploymentMethod';
export interface IDeploymentManifest {
    version: number;
    instance: string;
    deploymentMethod?: string;
    stagingPath?: string;
    files: IDeployedFile[];
}
export declare type ManifestFormat = (input: any) => IDeploymentManifest;
