import { IGame, IModType } from "../../../types/IGame";
import { IInstruction } from "../../../types/IExtensionContext";
import * as Promise from 'bluebird';
export declare function getModTypeExtensions(): IModType[];
export declare function registerModType(id: string, priority: number, isSupported: (gameId: string) => boolean, getPath: (game: IGame) => string, test: (instructions: IInstruction[]) => Promise<boolean>): void;
