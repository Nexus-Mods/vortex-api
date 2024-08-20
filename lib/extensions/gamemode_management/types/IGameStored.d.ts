import { IToolStored } from './IToolStored';
/**
 * cached information about games.
 * Don't trunst this, avoid using it as dynamic information
 *   (e.g. the executable) that might be affected by which variant of the
 *   game is discovered will not be correct
 */
export interface IGameStored {
    id: string;
    name: string;
    shortName?: string;
    logo?: string;
    extensionPath?: string;
    imageURL?: string;
    requiredFiles: string[];
    executable: string;
    parameters?: string[];
    supportedTools?: IToolStored[];
    environment?: {
        [key: string]: string;
    };
    details?: {
        [key: string]: any;
    };
    shell?: boolean;
    contributed?: string;
    final?: boolean;
}
export interface IGameStoredExt extends IGameStored {
    downloadGameId?: string;
}
