import { IState } from '../../types/IState';
import { OutputSelector } from 'reselect';
import { OutputParametricSelector } from 're-reselect';
export declare const downloadPath: OutputSelector<any, string, (inPath: string, inGameMode: string) => string>;
export declare const downloadPathForGame: OutputParametricSelector<IState, string, string, (inPath: string, gameId: string) => string>;
