import * as Promise from 'bluebird';
import { IExtensionApi } from '../../../types/IExtensionContext';
export declare function removeMods(api: IExtensionApi, gameId: string, modIds: string[]): Promise<void>;
