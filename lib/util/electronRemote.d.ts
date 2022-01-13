import * as electron from 'electron';
export declare function makeRemoteCallSync<T>(id: string, cb: (mainElectron: typeof electron, window: electron.WebContents, ...args: any[]) => T): (...args: any[]) => T;
declare function makeRemoteCall<T>(id: string, cb: (mainElectron: typeof electron, window: electron.WebContents, ...args: any[]) => Promise<T>): (...args: any[]) => Promise<T>;
export default makeRemoteCall;
