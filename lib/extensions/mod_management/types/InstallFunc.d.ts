/// <reference types="bluebird" />
import { IGame } from '../../../types/IGame';
import { IInstallResult } from './IInstallResult';
import * as Promise from 'bluebird';
export declare type ProgressDelegate = (perc: number) => void;
export declare type InstallFunc = (files: string[], destinationPath: string, game: IGame, progressDelegate: ProgressDelegate) => Promise<IInstallResult>;
