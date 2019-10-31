import { IInstruction, IModTypeOptions } from '../../../types/IExtensionContext';
import { IGame, IModType } from '../../../types/IGame';
import * as Promise from 'bluebird';
export declare function getModTypeExtensions(): IModType[];
export declare function getModType(id: string): IModType;
export declare function registerModType(id: string, priority: number, isSupported: (gameId: string) => boolean, getPath: (game: IGame) => string, test: (instructions: IInstruction[]) => Promise<boolean>, options?: IModTypeOptions): void;
