/// <reference types="bluebird" />
import { IExtensionApi } from '../../../types/IExtensionContext';
import { IMod } from '../types/IMod';
import * as Promise from 'bluebird';
declare function sortMods(gameId: string, mods: IMod[], api: IExtensionApi): Promise<string[]>;
export default sortMods;
