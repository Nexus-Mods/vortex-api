import PromiseBB from "bluebird";
export declare function runThreaded(func: (...args: any[]) => any, moduleBase: string, ...args: any[]): PromiseBB<any>;
