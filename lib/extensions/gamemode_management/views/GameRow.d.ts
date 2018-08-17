import { IMod } from '../../mod_management/types/IMod';
import { IDiscoveryResult } from '../types/IDiscoveryResult';
import { IGameStored } from '../types/IGameStored';
import * as Promise from 'bluebird';
import * as I18next from 'i18next';
import * as React from 'react';
export interface IProps {
    t: I18next.TranslationFunction;
    game: IGameStored;
    discovery?: IDiscoveryResult;
    mods?: {
        [modId: string]: IMod;
    };
    active: boolean;
    type: string;
    getBounds: () => ClientRect;
    container: HTMLElement;
    onRefreshGameInfo: (gameId: string) => Promise<void>;
    onBrowseGameLocation: (gameId: string) => Promise<void>;
}
declare const _default: React.ComponentClass<IProps, React.ComponentState>;
export default _default;
