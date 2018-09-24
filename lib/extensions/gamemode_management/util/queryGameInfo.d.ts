import { IGameDetail } from '../../../types/IExtensionContext';
import { IGame } from '../../../types/IGame';
import { IDiscoveryResult } from '../types/IDiscoveryResult';
import * as Promise from 'bluebird';
declare function queryGameInfo(game: IGame & IDiscoveryResult): Promise<{
    [key: string]: IGameDetail;
}>;
export default queryGameInfo;
