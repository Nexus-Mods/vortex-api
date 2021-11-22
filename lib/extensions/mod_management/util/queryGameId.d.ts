import { ThunkStore } from '../../../types/IExtensionContext';
import Promise from 'bluebird';
/**
 * Determine which game to install a download for.
 * If the currently managed game is compatible, just pick that, otherwise ask the user
 */
declare function queryGameId(store: ThunkStore<any>, downloadGameIds: string[], fileName: string): Promise<string>;
export default queryGameId;
