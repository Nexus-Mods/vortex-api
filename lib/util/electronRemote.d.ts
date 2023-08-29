import * as electron from 'electron';
type Arr = readonly unknown[];
export declare function makeRemoteCallSync<T, ArgsT extends Arr>(id: string, cb: (mainElectron: typeof electron, window: electron.WebContents, ...args: ArgsT) => T): (...args: ArgsT) => T;
declare function makeRemoteCall<T, ArgsT extends Arr>(id: string, cb: (mainElectron: typeof electron, window: electron.WebContents, ...args: ArgsT) => Promise<T>): (...args: ArgsT) => Promise<T>;
export default makeRemoteCall;
