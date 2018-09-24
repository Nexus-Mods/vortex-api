import { IInstallResult } from './IInstallResult';
import * as Promise from 'bluebird';
export declare type ProgressDelegate = (perc: number) => void;
export declare type InstallFunc = (files: string[], destinationPath: string, gameId: string, progressDelegate: ProgressDelegate) => Promise<IInstallResult>;
