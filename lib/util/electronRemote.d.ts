import * as electron from 'electron';
declare function makeRemoteCall<T>(id: string, cb: (mainElectron: typeof electron, window: electron.WebContents, ...args: any[]) => Promise<T>): (...args: any[]) => Promise<T>;
export default makeRemoteCall;
