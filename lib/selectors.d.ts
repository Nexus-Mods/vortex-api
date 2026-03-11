import type { IState } from "./types/IState";
export declare const mainPage: (state: IState) => string;
export declare const secondaryPage: (state: IState) => string;
export declare const notifications: (state: IState) => import("./types/INotification").INotification[];
