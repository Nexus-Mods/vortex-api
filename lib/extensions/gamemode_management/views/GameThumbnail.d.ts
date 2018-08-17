import { IGameStored } from '../types/IGameStored';
import * as Promise from 'bluebird';
import * as I18next from 'i18next';
import * as React from 'react';
export interface IBaseProps {
    t: I18next.TranslationFunction;
    game: IGameStored;
    active: boolean;
    onRefreshGameInfo?: (gameId: string) => Promise<void>;
    type: string;
    getBounds?: () => ClientRect;
    container?: HTMLElement;
    onLaunch?: () => void;
}
declare const _default: React.ComponentClass<IBaseProps, React.ComponentState>;
export default _default;
