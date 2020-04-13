import { ILoadOrderEntry } from '../types/types';
declare type setLOEntryFunc = (profileId: string, modId: string, loEntry: ILoadOrderEntry) => Action<{
  url: string;
  instructions: string;
  subscriber: string;
}>;
export declare const setLoadOrderEntry: setLOEntryFunc;