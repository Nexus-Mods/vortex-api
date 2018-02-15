import { IExtensionContext } from '../../types/IExtensionContext';
import { IGame } from '../../types/IGame';
export declare function getGames(): IGame[];
export declare function getGame(gameId: string): IGame;
declare function init(context: IExtensionContext): boolean;
export default init;
