import { IGameStored } from '../types/IGameStored';
import * as Promise from 'bluebird';
import I18next from 'i18next';
import * as React from 'react';
export interface IBaseProps {
    t: I18next.TFunction;
    game: IGameStored;
    onRefreshGameInfo: (gameId: string) => Promise<void>;
    onChange: () => void;
}
declare const _default: React.ComponentClass<IBaseProps, any>;
export default _default;
