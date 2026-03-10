import { IReducerSpec } from "../../types/IExtensionContext";
import { IHistoryEvent } from "./types";
export interface IHistoryPersistent {
    historyStacks: {
        [key: string]: IHistoryEvent[];
    };
}
declare const persistentReducer: IReducerSpec<IHistoryPersistent>;
export interface IHistoryState {
    stackToShow: string;
}
declare const sessionReducer: IReducerSpec<IHistoryState>;
export { persistentReducer, sessionReducer };
