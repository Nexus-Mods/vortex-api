export interface IApplication {
    name: string;
    version: string;
    isFocused: boolean;
    window: Electron.BrowserWindow | null;
    memory: {
        total: number;
    };
    platform: string;
    platformVersion: string;
    quit: (exitCode?: number) => void;
}
export declare function setApplication(appIn: IApplication): void;
export declare function getApplication(): IApplication;
/** @deprecated Use ApplicationData directly */
declare const _default: IApplication;
export default _default;
