import { IInstallResult } from './IInstallResult';
import Promise from 'bluebird';
import { IModReference } from './IMod';
export type ProgressDelegate = (perc: number) => void;
export interface IInstallationDetails {
    hasInstructionsOverrideFile?: boolean;
    modReference?: IModReference;
    hasXmlConfigXML?: boolean;
    hasCSScripts?: boolean;
}
export type InstallFunc = (files: string[], destinationPath: string, gameId: string, progressDelegate: ProgressDelegate, choices?: any, unattended?: boolean, archivePath?: string, options?: IInstallationDetails) => Promise<IInstallResult>;
